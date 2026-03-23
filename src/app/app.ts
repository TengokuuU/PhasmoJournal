/* ═══════════════════════════════════════════════════════════════
   app.ts — root Angular component
   ═══════════════════════════════════════════════════════════════ */

import {
  Component,
  computed,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BehaviorItem,
  BehaviorKey,
  BehaviorSection,
  EvidenceItem,
  EvidenceKey,
  EvidenceState,
  GhostCard,
  GhostId,
} from './ghost-journal.types';
import {
  BEHAVIOR_RULES,
  BEHAVIOR_SECTIONS,
  EVIDENCE_ITEMS,
  GHOST_DATA,
} from './ghost-journal.data';

/* ──────────────────────────────────────────────────────────────────
   EVIDENCE CYCLE
   ────────────────────────────────────────────────────────────────── */

const EVIDENCE_CYCLE: EvidenceState[] = ['default', 'confirmed', 'ruled-out'];

const EVIDENCE_GLYPH: Record<EvidenceState, string> = {
  'default':   '',
  'confirmed': '✓',
  'ruled-out': '✕',
};

/* ──────────────────────────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────────────────────────── */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {

  protected readonly title = signal('PhasmoJournal');

  /* ── Writable signals ─────────────────────────────────────────── */

  readonly evidence = signal<EvidenceItem[]>(
    EVIDENCE_ITEMS.map(e => ({ ...e })),
  );

  readonly behaviorSections = signal<BehaviorSection[]>(
    BEHAVIOR_SECTIONS.map(section => ({
      ...section,
      items: section.items.map(item => ({ ...item })),
    })),
  );

  readonly sessionSeconds = signal<number>(0);

  /* ── Derived: active behavior keys ───────────────────────────── */

  private readonly activeBehaviorKeys = computed<BehaviorKey[]>(() =>
    this.behaviorSections()
      .flatMap(s => s.items)
      .filter(i => i.active)
      .map(i => i.key),
  );

  /* ── Derived: ghost cards with computed state ─────────────────── */

  readonly ghosts = computed<GhostCard[]>(() => {
    const confirmed = this.evidence()
      .filter(e => e.state === 'confirmed')
      .map(e => e.key);
    const ruledOut = this.evidence()
      .filter(e => e.state === 'ruled-out')
      .map(e => e.key);
    const behaviors = this.activeBehaviorKeys();

    const cards: GhostCard[] = GHOST_DATA.map(ghost => {
      const eliminated =
        this.isEliminatedByEvidence(ghost.evidence, confirmed, ruledOut) ||
        this.isEliminatedByBehavior(ghost.id, behaviors);

      return { ...ghost, state: eliminated ? 'eliminated' : 'possible' };
    });

    // Mark sole survivor
    const possibles = cards.filter(c => c.state === 'possible');
    if (possibles.length === 1) {
      possibles[0].state = 'likely';
    }

    return cards;
  });

  /* ── Derived: remaining count & label ────────────────────────── */

  readonly remainingCount = computed<number>(
    () => this.ghosts().filter(g => g.state !== 'eliminated').length,
  );

  readonly remainingLabel = computed<string>(() => {
    const n = this.remainingCount();
    return n === 1 ? '1 remaining — identified!' : `${n} remaining`;
  });

  /* ── Derived: session timer display ──────────────────────────── */

  readonly sessionTime = computed<string>(() => {
    const total = this.sessionSeconds();
    const m = String(Math.floor(total / 60)).padStart(2, '0');
    const s = String(total % 60).padStart(2, '0');
    return `${m}:${s}`;
  });

  /* ── Timer ────────────────────────────────────────────────────── */

  private timerRef: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.timerRef = setInterval(
      () => this.sessionSeconds.update(s => s + 1),
      1000,
    );
  }

  ngOnDestroy(): void {
    if (this.timerRef !== null) {
      clearInterval(this.timerRef);
    }
  }

  /* ── Evidence actions ─────────────────────────────────────────── */

  cycleEvidence(key: EvidenceKey): void {
    this.evidence.update(items =>
      items.map(item => {
        if (item.key !== key) return item;
        const idx  = EVIDENCE_CYCLE.indexOf(item.state);
        const next = EVIDENCE_CYCLE[(idx + 1) % EVIDENCE_CYCLE.length];
        return { ...item, state: next };
      }),
    );
  }

  evidenceGlyph(state: EvidenceState): string {
    return EVIDENCE_GLYPH[state];
  }

  /* ── Behavior actions ─────────────────────────────────────────── */

  toggleBehavior(sectionIndex: number, itemIndex: number): void {
    this.behaviorSections.update(sections =>
      sections.map((section, si) => {
        if (si !== sectionIndex) return section;
        return {
          ...section,
          items: section.items.map((item, ii) =>
            ii === itemIndex ? { ...item, active: !item.active } : item,
          ),
        };
      }),
    );
  }

  /* ── Reset ────────────────────────────────────────────────────── */

  resetAll(): void {
    this.evidence.update(items =>
      items.map(item => ({ ...item, state: 'default' as EvidenceState })),
    );
    this.behaviorSections.update(sections =>
      sections.map(section => ({
        ...section,
        items: section.items.map(item => ({ ...item, active: false })),
      })),
    );
    this.sessionSeconds.set(0);
  }

  /* ── Deduction helpers ────────────────────────────────────────── */

  private isEliminatedByEvidence(
    ghostEvidence: EvidenceKey[],
    confirmed: EvidenceKey[],
    ruledOut: EvidenceKey[],
  ): boolean {
    if (confirmed.some(e => !ghostEvidence.includes(e))) return true;
    if (ruledOut.some(e => ghostEvidence.includes(e))) return true;
    return false;
  }

  private isEliminatedByBehavior(
    ghostId: GhostId,
    behaviors: BehaviorKey[],
  ): boolean {
    for (const b of behaviors) {
      const rule = BEHAVIOR_RULES[b];
      if (!rule) continue;
      if (rule.eliminates?.includes(ghostId)) return true;
      if (rule.keeps_only && !rule.keeps_only.includes(ghostId)) return true;
    }
    return false;
  }

  /* ── Template helpers ─────────────────────────────────────────── */

  /** Returns CSS class string for an evidence tag on a ghost card */
  tagClass(ghostEvidence: EvidenceKey[], tagKey: EvidenceKey): string {
    const confirmed = this.evidence()
      .filter(e => e.state === 'confirmed')
      .map(e => e.key);
    const ruledOut = this.evidence()
      .filter(e => e.state === 'ruled-out')
      .map(e => e.key);
    if (confirmed.includes(tagKey) && ghostEvidence.includes(tagKey)) return 'evidence-tag matched';
    if (ruledOut.includes(tagKey)  && ghostEvidence.includes(tagKey)) return 'evidence-tag missing';
    return 'evidence-tag';
  }

  /** Short display label for evidence keys used in ghost card tags */
  evidenceLabel(key: EvidenceKey): string {
    const labels: Record<EvidenceKey, string> = {
      emf5:          'EMF 5',
      spirit_box:    'Spirit Box',
      ultraviolet:   'UV',
      ghost_orb:     'Ghost Orb',
      ghost_writing: 'Writing',
      freezing:      'Freezing',
      dots:          'D.O.T.S',
    };
    return labels[key];
  }

  /** trackBy for evidence items */
  trackByKey(_: number, item: EvidenceItem | BehaviorItem): string {
    return item.key;
  }

  /** trackBy for ghost cards */
  trackByGhostId(_: number, ghost: GhostCard): string {
    return ghost.id;
  }

  /** trackBy for behavior sections */
  trackBySectionTitle(_: number, section: BehaviorSection): string {
    return section.title;
  }
}