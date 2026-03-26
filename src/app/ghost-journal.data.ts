/* ═══════════════════════════════════════════════════════════════
   ghost-journal.data.ts — all static data (ghosts, evidence,
   behavior sections, behavior rules)
   ═══════════════════════════════════════════════════════════════ */

import {
  BehaviorKey,
  BehaviorRule,
  BehaviorSection,
  EvidenceItem,
  GhostDefinition,
} from './ghost-journal.types';

/* ──────────────────────────────────────────────────────────────────
   EVIDENCE LIST
   ────────────────────────────────────────────────────────────────── */

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  { key: 'emf5',          label: 'EMF Level 5',      state: 'default' },
  { key: 'spirit_box',    label: 'Spirit Box',        state: 'default' },
  { key: 'ultraviolet',   label: 'Ultraviolet',       state: 'default' },
  { key: 'ghost_orb',     label: 'Ghost Orb',         state: 'default' },
  { key: 'ghost_writing', label: 'Ghost Writing',     state: 'default' },
  { key: 'freezing',      label: 'Freezing Temps',    state: 'default' },
  { key: 'dots',          label: 'D.O.T.S Projector', state: 'default' },
];

/* ──────────────────────────────────────────────────────────────────
   BEHAVIOR SECTIONS
   ────────────────────────────────────────────────────────────────── */

export const BEHAVIOR_SECTIONS: BehaviorSection[] = [
  {
    title: 'Hunt threshold',
    items: [
      {
        key: 'hunt_above_70', active: false,
        desc: 'Hunted above 70% average sanity',
        effect: 'Eliminates all ghosts except: Demon, Obambo (aggressive), Gallu (enraged)',
      },
      {
        key: 'hunt_above_50', active: false,
        desc: 'Hunted between 50–70% sanity',
        effect: 'Eliminates: Shade (≤35%), Yokai (≤50%), Yurei (≤50%), Myling (≤50%), Thaye (aged)',
      },
      {
        key: 'hunt_never_above_35', active: false,
        desc: 'Ghost never hunted above ~35% sanity despite the opportunity',
        effect: 'Eliminates: Demon, Obambo (aggressive), Gallu, Yokai, Yurei, Myling',
      },
      {
        key: 'refused_hunt_low_sanity', active: false,
        desc: 'Refused to hunt despite very low sanity',
        effect: 'Eliminates most ghosts — consistent with: Thaye (aged), Obambo (calm, ~10% threshold), Shade',
      },
      {
        key: 'hunt_no_warning_sounds', active: false,
        desc: 'Hunt footsteps were nearly inaudible throughout',
        effect: 'Eliminates all ghosts except Myling and Mimic (Mimic can copy Myling)',
      },
    ],
  },
  {
    title: 'Hunt speed & movement',
    items: [
      {
        key: 'normal_ghost_speed', active: false,
        desc: 'Ghost moved at base speed during the entire hunt with no deviations',
        effect: 'Eliminates: Raiju, Deogen, Moroi, Jinn (LoS), Revenant (chasing), Hantu (cold rooms), Dayan',
      },
      {
        key: 'consistent_speed_entire_hunt', active: false,
        desc: 'Ghost speed never changed noticeably mid-hunt',
        effect: 'Eliminates: Revenant, Dayan, Obambo, Gallu, Moroi',
      },
      {
        key: 'hunt_slowed_when_player_still', active: false,
        desc: 'Ghost visibly slowed when the nearest player stood perfectly still',
        effect: 'Eliminates all ghosts except Dayan and Mimic (Mimic can copy Dayan)',
      },
      {
        key: 'no_slowdown_when_close', active: false,
        desc: 'Ghost maintained or increased speed even at point-blank range',
        effect: 'Eliminates: Deogen (always slows to ~0.4 m/s when it reaches a player)',
      },
      {
        key: 'speed_unaffected_by_electronics', active: false,
        desc: 'Ghost speed was unaffected near active electronics',
        effect: 'Eliminates: Raiju',
      },
      {
        key: 'speed_unaffected_by_sanity', active: false,
        desc: 'Ghost speed stayed the same across high and very low team sanity',
        effect: 'Eliminates: Moroi (speed scales directly with sanity)',
      },
      {
        key: 'ghost_same_speed_warm_cold_rooms', active: false,
        desc: 'Ghost moved at the same speed in both cold and warm rooms',
        effect: 'Eliminates: Hantu (significantly faster in cold rooms)',
      },
    ],
  },
  {
    title: 'Hunt duration & cycle',
    items: [
      {
        key: 'hunt_lasted_full_duration', active: false,
        desc: 'Every hunt lasted the expected full duration',
        effect: 'Eliminates: Obambo (aggressive-state hunts end ~20% early)',
      },
      {
        key: 'hunt_duration_20pct_short', active: false,
        desc: 'Hunt ended noticeably early — roughly 20% shorter than expected',
        effect: 'Consistent with: Obambo (aggressive state) — Mimic can also copy this',
      },
      {
        key: 'activity_was_constant', active: false,
        desc: 'Activity level stayed roughly constant throughout the investigation',
        effect: 'Eliminates: Obambo (calm↔aggressive cycle), Thaye (activity decreases over time)',
      },
      {
        key: 'no_phase_cycling', active: false,
        desc: 'No distinct phases of high vs low activity — behaviour was steady throughout',
        effect: 'Eliminates: Obambo',
      },
      {
        key: 'activity_did_not_decrease', active: false,
        desc: 'Activity and aggression remained consistent or increased over time',
        effect: 'Eliminates: Thaye (always becomes weaker as the investigation progresses)',
      },
    ],
  },
  {
    title: 'Gallu — protective equipment',
    items: [
      {
        key: 'incense_worked_normally', active: false,
        desc: 'Smudge stick / incense slowed or repelled the ghost as expected',
        effect: 'Eliminates: Gallu (incense triggers enrage rather than repelling it)',
      },
      {
        key: 'crucifix_worked_at_full_range', active: false,
        desc: 'Crucifix stopped hunts reliably at its full normal range',
        effect: 'Eliminates: Demon (smaller effective radius), Gallu (enraged state weakens equipment)',
      },
      {
        key: 'gallu_ignored_salt', active: false,
        desc: 'Stepped in the first salt pile, then clearly avoided all subsequent piles',
        effect: 'Eliminates all ghosts except Gallu and Mimic (Mimic can copy Gallu)',
      },
    ],
  },
  {
    title: 'Ghost room & roaming',
    items: [
      {
        key: 'changed_room', active: false,
        desc: 'Ghost changed its ghost room during the investigation',
        effect: 'Eliminates: Goryo',
      },
      {
        key: 'interacted_far', active: false,
        desc: 'Interacted with objects far from its ghost room',
        effect: 'Eliminates: Goryo (interactions are strictly local to its room)',
      },
      {
        key: 'dots_not_on_camera', active: false,
        desc: 'D.O.T.S visible to the naked eye (not only through a camera)',
        effect: 'Eliminates: Goryo (its D.O.T.S only show through a video camera)',
      },
      {
        key: 'breaker_left_alone', active: false,
        desc: 'Ghost never interacted with the breaker',
        effect: 'Eliminates: Jinn (heavily targets breaker), Mare',
      },
    ],
  },
  {
    title: 'Physical interactions',
    items: [
      {
        key: 'door_not_fully_closed', active: false,
        desc: 'Ghost moved a door but did not fully close it',
        effect: 'Eliminates: Yurei (can only fully open or fully close doors)',
      },
      {
        key: 'stepped_in_salt', active: false,
        desc: 'Ghost stepped in a salt pile (clean footprint visible)',
        effect: 'Eliminates: Wraith',
      },
      {
        key: 'salt_undisturbed_entire_investigation', active: false,
        desc: 'Salt piles near the ghost room were never disturbed',
        effect: 'Consistent with: Wraith — does not eliminate others (any ghost may simply avoid salt)',
      },
      {
        key: 'threw_one_object_at_a_time', active: false,
        desc: 'Only threw one object at a time — no multi-object throws observed',
        effect: 'Eliminates: Poltergeist (defining ability is throwing multiple objects simultaneously)',
      },
      {
        key: 'six_fingered_print', active: false,
        desc: 'Found a six-fingered fingerprint',
        effect: 'Consistent with: Obake — Mimic can copy Obake. Does not eliminate others.',
      },
      {
        key: 'all_fingerprints_persisted', active: false,
        desc: 'All fingerprints stayed visible for a normal duration',
        effect: 'Eliminates: Obake (25% chance to erase its own prints quickly)',
      },
      {
        key: 'no_fingerprints_found_at_all', active: false,
        desc: 'No fingerprints found despite many door/light interactions',
        effect: 'Eliminates: Obake (Ultraviolet is a core evidence type — it always leaves UV traces)',
      },
    ],
  },
  {
    title: 'Light & visibility',
    items: [
      {
        key: 'turned_on_lights', active: false,
        desc: 'Ghost turned on lights',
        effect: 'Eliminates: Mare (never turns lights on)',
      },
      {
        key: 'hunt_with_lights_on', active: false,
        desc: 'Hunted while lights were on',
        effect: 'Eliminates: Mare (lower hunt threshold only applies when lights are off)',
      },
      {
        key: 'ghost_visible_entire_hunt', active: false,
        desc: 'Ghost remained fully visible throughout the entire hunt',
        effect: 'Eliminates: Phantom (becomes invisible during hunts when photographed)',
      },
      {
        key: 'ghost_created_mist_fog', active: false,
        desc: 'Ghost created a swirling mist or fog ball ghost event',
        effect: 'Eliminates: Oni (the only ghost incapable of creating mist/fog events)',
      },
    ],
  },
  {
    title: 'Smudge stick / sage',
    items: [
      {
        key: 'smudge_extended_hunt_prevention', active: false,
        desc: 'Smudge stick prevented hunting for an unusually long time (~3 min)',
        effect: 'Consistent with: Spirit (180 s vs 90 s default) — Mimic can copy Spirit',
      },
      {
        key: 'smudge_normal_duration', active: false,
        desc: 'Smudge stick prevented hunting for the standard ~90 seconds',
        effect: 'Eliminates: Spirit (Spirit gets ~180 s from a smudge)',
      },
    ],
  },
  {
    title: 'Fire & candles',
    items: [
      {
        key: 'flames_extinguished_no_hunt', active: false,
        desc: 'Flames were extinguished repeatedly with no hunt triggered',
        effect: 'Eliminates: Onryo (hunts when flames go out, especially without a nearby crucifix)',
      },
      {
        key: 'crosses_prioritised_over_flames', active: false,
        desc: 'Ghost stopped at a crucifix even when flames were nearby',
        effect: 'Eliminates: Onryo (always prioritises extinguishing flames over a crucifix)',
      },
    ],
  },
  {
    title: 'Sanity & targeting',
    items: [
      {
        key: 'sanity_drained_evenly_across_team', active: false,
        desc: 'All players lost sanity at a roughly equal rate',
        effect: 'Eliminates: Banshee (one player always drains faster than the others)',
      },
      {
        key: 'sanity_drained_at_normal_rate', active: false,
        desc: 'Team sanity drained at a normal expected rate',
        effect: 'Eliminates: Yurei (massive passive drain near ghost), Jinn, Onryo, Banshee',
      },
      {
        key: 'activity_unchanged_by_player_count', active: false,
        desc: 'Activity level was the same regardless of how many players were nearby',
        effect: 'Eliminates: Oni (activity scales directly with player count)',
      },
      {
        key: 'talking_had_no_effect', active: false,
        desc: 'Talking near the ghost had no observable effect on activity or hunt behaviour',
        effect: 'Eliminates: Yokai (directly provoked by nearby speech)',
      },
    ],
  },
  {
    title: 'Deogen tells',
    items: [
      {
        key: 'spirit_box_breathing', active: false,
        desc: 'Spirit Box gave a deep breathing / exhale response',
        effect: 'Consistent with: Deogen — Mimic can copy Deogen. Does not eliminate others.',
      },
      {
        key: 'spirit_box_normal_responses', active: false,
        desc: 'Spirit Box gave normal word or phrase responses only',
        effect: 'Eliminates: Deogen (unique breathing response replaces normal Spirit Box answers)',
      },
      {
        key: 'ghost_lost_track_of_players', active: false,
        desc: 'Successfully hid from the ghost — it walked past and gave up',
        effect: 'Eliminates: Deogen (always knows the exact location of every player)',
      },
    ],
  },
  {
    title: 'Identity tells',
    items: [
      {
        key: 'ghost_female_model', active: false,
        desc: 'Ghost name & model confirmed male',
        effect: 'Eliminates: Banshee, Dayan (only always-female ghosts)',
      },
      {
        key: 'no_extra_ghost_orb', active: false,
        desc: 'Ghost Orb absent despite ruling out all orb-evidence ghosts',
        effect: 'Eliminates: The Mimic (always produces a Ghost Orb as false fourth evidence)',
      },
    ],
  },
];

/* ──────────────────────────────────────────────────────────────────
   GHOST DATA (27 ghosts)
   ────────────────────────────────────────────────────────────────── */

export const GHOST_DATA: GhostDefinition[] = [
  {
    id: 'spirit',      name: 'Spirit',
    evidence: ['emf5', 'spirit_box', 'ghost_writing'],
    trait: 'Sage smudge delays next hunt by 180 s',
  },
  {
    id: 'wraith',      name: 'Wraith',
    evidence: ['emf5', 'spirit_box', 'dots'],
    trait: 'Never steps in salt — teleports directly to players',
  },
  {
    id: 'phantom',     name: 'Phantom',
    evidence: ['spirit_box', 'ultraviolet', 'dots'],
    trait: 'Vanishes when photographed — very visible blink pattern',
  },
  {
    id: 'poltergeist', name: 'Poltergeist',
    evidence: ['spirit_box', 'ultraviolet', 'ghost_writing'],
    trait: 'Can hurl multiple objects simultaneously',
  },
  {
    id: 'banshee',     name: 'Banshee',
    evidence: ['ultraviolet', 'ghost_orb', 'dots'],
    trait: 'Always female — targets one player exclusively',
  },
  {
    id: 'jinn',        name: 'Jinn',
    evidence: ['emf5', 'ultraviolet', 'freezing'],
    trait: 'Very fast when breaker is on — drains sanity quickly',
  },
  {
    id: 'mare',        name: 'Mare',
    evidence: ['spirit_box', 'ghost_orb', 'ghost_writing'],
    trait: 'Prefers darkness — turns off lights, hunts higher in dark',
  },
  {
    id: 'revenant',    name: 'Revenant',
    evidence: ['ghost_orb', 'ghost_writing', 'freezing'],
    trait: 'Extremely fast on sight (~3 m/s), very slow while roaming',
  },
  {
    id: 'shade',       name: 'Shade',
    evidence: ['emf5', 'ghost_writing', 'freezing'],
    trait: 'Cannot hunt above 35% average sanity',
  },
  {
    id: 'demon',       name: 'Demon',
    evidence: ['ultraviolet', 'ghost_writing', 'freezing'],
    trait: 'Can hunt at any sanity — shortest smudge cooldown',
  },
  {
    id: 'yurei',       name: 'Yurei',
    evidence: ['ghost_orb', 'freezing', 'dots'],
    trait: 'Massive sanity drain when players are near the ghost',
  },
  {
    id: 'oni',         name: 'Oni',
    evidence: ['emf5', 'freezing', 'dots'],
    trait: 'More active with more players present — can never create mist',
  },
  {
    id: 'yokai',       name: 'Yokai',
    evidence: ['spirit_box', 'ghost_orb', 'dots'],
    trait: 'Talking nearby triggers hunts — reduced hearing range during hunt',
  },
  {
    id: 'hantu',       name: 'Hantu',
    evidence: ['ultraviolet', 'ghost_orb', 'freezing'],
    trait: 'Faster in cold rooms, slower in warm — leaves cold breath',
  },
  {
    id: 'goryo',       name: 'Goryo',
    evidence: ['emf5', 'ultraviolet', 'dots'],
    trait: 'Never leaves its room — D.O.T.S only visible through camera',
  },
  {
    id: 'myling',      name: 'Myling',
    evidence: ['emf5', 'ultraviolet', 'ghost_writing'],
    trait: 'Nearly silent during hunts — footsteps barely audible',
  },
  {
    id: 'onryo',       name: 'Onryo',
    evidence: ['spirit_box', 'ghost_orb', 'freezing'],
    trait: 'Hunts when flames extinguish — prioritises fire over crucifixes',
  },
  {
    id: 'twins',       name: 'The Twins',
    evidence: ['emf5', 'spirit_box', 'freezing'],
    trait: 'Two entities — can interact from different rooms simultaneously',
  },
  {
    id: 'raiju',       name: 'Raiju',
    evidence: ['emf5', 'ghost_orb', 'dots'],
    trait: 'Accelerates near active electronics',
  },
  {
    id: 'obake',       name: 'Obake',
    evidence: ['emf5', 'ultraviolet', 'ghost_orb'],
    trait: 'May leave 6-fingered prints — can erase its own fingerprints',
  },
  {
    id: 'mimic',       name: 'The Mimic',
    evidence: ['spirit_box', 'ultraviolet', 'freezing'],
    trait: 'Copies other ghost types — always shows a false Ghost Orb as 4th evidence',
  },
  {
    id: 'moroi',       name: 'Moroi',
    evidence: ['spirit_box', 'ghost_writing', 'freezing'],
    trait: 'Speed scales with sanity — fastest ghost at very low sanity (3.71 m/s)',
  },
  {
    id: 'deogen',      name: 'Deogen',
    evidence: ['spirit_box', 'ghost_writing', 'dots'],
    trait: 'Always knows your location — nearly stops when it reaches you',
  },
  {
    id: 'thaye',       name: 'Thaye',
    evidence: ['ghost_orb', 'ghost_writing', 'dots'],
    trait: 'Rapidly ages — activity, speed, and hunt frequency all decrease over time',
  },
  // ── Winter's Jest 2025 ─────────────────────────────────────────
  {
    id: 'obambo',      name: 'Obambo',
    evidence: ['ghost_writing', 'ultraviolet', 'dots'],
    trait: 'Calm↔aggressive every 2 min — hunts at 10% (calm) or 65% (aggressive) sanity',
    isNew: true,
  },
  {
    id: 'dayan',       name: 'Dayan',
    evidence: ['emf5', 'ghost_orb', 'spirit_box'],
    trait: 'Always female — 2.25 m/s when player walks near, 1.2 m/s when they stop',
    isNew: true,
  },
  {
    id: 'gallu',       name: 'Gallu',
    evidence: ['ultraviolet', 'ghost_writing', 'freezing'],
    trait: 'Protective equipment enrages it — enraged state then exhausts it (3-state cycle)',
    isNew: true,
  },
];

/* ──────────────────────────────────────────────────────────────────
   BEHAVIOR RULES
   ────────────────────────────────────────────────────────────────── */

export const BEHAVIOR_RULES: Record<BehaviorKey, BehaviorRule> = {

  // ── Hunt threshold ─────────────────────────────────────────────

  hunt_above_70:
    { eliminates: ['spirit', 'wraith', 'phantom', 'poltergeist', 'jinn', 'mare', 'revenant',
                   'shade', 'yurei', 'oni', 'yokai', 'hantu', 'goryo', 'myling', 'onryo',
                   'twins', 'raiju', 'obake', 'mimic', 'moroi', 'deogen', 'thaye', 'dayan'],
      note: 'Only Demon (any sanity), Obambo (aggressive ~65%), and Gallu (enraged ~60%) can hunt above 70%.' },

  hunt_above_50:
    { eliminates: ['shade', 'yokai', 'yurei', 'myling', 'thaye'],
      note: 'Shade ≤35%, Yokai ≤50% when quiet, Yurei ≤50%, Myling ≤50%, aged Thaye very low threshold.' },

  hunt_never_above_35:
    { eliminates: ['demon', 'obambo', 'gallu', 'yokai', 'yurei', 'myling'],
      note: 'All high-aggression and average-threshold ghosts are ruled out. Consistent with Shade.' },

  refused_hunt_low_sanity:
    { eliminates: ['spirit', 'wraith', 'phantom', 'poltergeist', 'banshee', 'jinn', 'mare',
                   'revenant', 'demon', 'yurei', 'oni', 'yokai', 'hantu', 'goryo', 'myling',
                   'onryo', 'twins', 'raiju', 'obake', 'mimic', 'moroi', 'deogen', 'dayan', 'gallu'],
      note: 'Consistent with Thaye (weakens), Obambo (calm ~10% threshold), or Shade (≤35% threshold).' },

  hunt_no_warning_sounds:
    { eliminates: ['spirit', 'wraith', 'phantom', 'poltergeist', 'banshee', 'jinn', 'mare',
                   'revenant', 'shade', 'demon', 'yurei', 'oni', 'yokai', 'hantu', 'goryo',
                   'onryo', 'twins', 'raiju', 'obake', 'moroi', 'deogen', 'thaye',
                   'obambo', 'dayan', 'gallu'],
      note: 'Myling is nearly silent during hunts. Mimic is NOT eliminated — it can copy Myling.' },

  // ── Hunt speed & movement ──────────────────────────────────────

  normal_ghost_speed:
    { eliminates: ['raiju', 'deogen', 'moroi', 'jinn', 'revenant', 'hantu', 'dayan'],
      note: 'All of these ghosts have notable speed deviations from base movement speed.' },

  consistent_speed_entire_hunt:
    { eliminates: ['revenant', 'dayan', 'obambo', 'gallu', 'moroi'],
      note: 'All of these ghosts change speed noticeably mid-hunt under certain conditions.' },

  hunt_slowed_when_player_still:
    { eliminates: ['spirit', 'wraith', 'phantom', 'poltergeist', 'banshee', 'jinn', 'mare',
                   'revenant', 'shade', 'demon', 'yurei', 'oni', 'yokai', 'hantu', 'goryo',
                   'myling', 'onryo', 'twins', 'raiju', 'obake', 'moroi', 'deogen', 'thaye',
                   'obambo', 'gallu'],
      note: 'Only Dayan slows when the nearest player stands still. Mimic NOT eliminated — can copy Dayan.' },

  no_slowdown_when_close:
    { eliminates: ['deogen'],
      note: 'Deogen always slows to ~0.4 m/s when it reaches a player.' },

  speed_unaffected_by_electronics:
    { eliminates: ['raiju'],
      note: 'Raiju\'s defining trait is accelerating near active electronics.' },

  speed_unaffected_by_sanity:
    { eliminates: ['moroi'],
      note: 'Moroi\'s speed scales directly and noticeably with decreasing sanity.' },

  ghost_same_speed_warm_cold_rooms:
    { eliminates: ['hantu'],
      note: 'Hantu is significantly faster in cold rooms and slower in warm rooms.' },

  // ── Hunt duration & cycle ──────────────────────────────────────

  hunt_lasted_full_duration:
    { eliminates: ['obambo'],
      note: 'Obambo aggressive-state hunts end ~20% earlier than normal.' },

  hunt_duration_20pct_short:
    { note: 'Consistent with Obambo (aggressive state). Mimic can also copy this. Does not eliminate others.' },

  activity_was_constant:
    { eliminates: ['obambo', 'thaye'],
      note: 'Obambo cycles calm↔aggressive; Thaye\'s activity decreases steadily over time.' },

  no_phase_cycling:
    { eliminates: ['obambo'],
      note: 'Obambo has a clearly observable ~2-minute calm↔aggressive phase cycle.' },

  activity_did_not_decrease:
    { eliminates: ['thaye'],
      note: 'Thaye always becomes weaker — constant or increasing activity rules it out.' },

  // ── Smudge stick / sage ────────────────────────────────────────

  smudge_extended_hunt_prevention:
    { note: 'Consistent with Spirit (180 s cooldown vs 90 s default). Mimic can copy Spirit. Does not eliminate others.' },

  smudge_normal_duration:
    { eliminates: ['spirit'],
      note: 'Spirit\'s smudge effect lasts ~180 s — noticeably longer than the 90 s standard.' },

  // ── Gallu — protective equipment ──────────────────────────────

  incense_worked_normally:
    { eliminates: ['gallu'],
      note: 'Gallu becomes enraged (faster) when incensed — normal repelling rules it out.' },

  crucifix_worked_at_full_range:
    { eliminates: ['demon', 'gallu'],
      note: 'Demon has a smaller effective crucifix radius. Gallu (enraged) weakens all protective equipment.' },

  gallu_ignored_salt:
    { eliminates: ['spirit', 'wraith', 'phantom', 'poltergeist', 'banshee', 'jinn', 'mare',
                   'revenant', 'shade', 'demon', 'yurei', 'oni', 'yokai', 'hantu', 'goryo',
                   'myling', 'onryo', 'twins', 'raiju', 'obake', 'moroi', 'deogen', 'thaye',
                   'obambo', 'dayan'],
      note: 'Only Gallu steps in the first salt pile (triggering enrage) then avoids all subsequent piles. Mimic NOT eliminated — can copy Gallu.' },

  // ── Ghost room & roaming ───────────────────────────────────────

  changed_room:
    { eliminates: ['goryo'],
      note: 'Goryo never leaves its ghost room.' },

  interacted_far:
    { eliminates: ['goryo'],
      note: 'Goryo interactions are strictly local to its room.' },

  dots_not_on_camera:
    { eliminates: ['goryo'],
      note: 'Goryo D.O.T.S only appear through a video camera.' },

  breaker_left_alone:
    { eliminates: ['jinn', 'mare'],
      note: 'Jinn heavily targets the breaker; Mare turns it off to darken the map.' },

  // ── Physical interactions ──────────────────────────────────────

  door_not_fully_closed:
    { eliminates: ['yurei'],
      note: 'Yurei can only fully open or fully close doors.' },

  stepped_in_salt:
    { eliminates: ['wraith'],
      note: 'Wraiths never step in salt.' },

  salt_undisturbed_entire_investigation:
    { note: 'Consistent with Wraith but does not eliminate others — any ghost may simply avoid salt.' },

  threw_one_object_at_a_time:
    { eliminates: ['poltergeist'],
      note: 'Poltergeist\'s defining trait is multi-object throws — single throws only rules it out.' },

  six_fingered_print:
    { note: 'Consistent with Obake only. Mimic can copy Obake. Does not eliminate others.' },

  all_fingerprints_persisted:
    { eliminates: ['obake'],
      note: 'Obake has a 25% chance to rapidly erase its own prints — consistently persisting prints rules it out.' },

  no_fingerprints_found_at_all:
    { eliminates: ['obake'],
      note: 'Obake always leaves UV evidence — Ultraviolet is a core evidence type for it.' },

  // ── Light & visibility ─────────────────────────────────────────

  turned_on_lights:
    { eliminates: ['mare'],
      note: 'Mares never turn on lights.' },

  hunt_with_lights_on:
    { eliminates: ['mare'],
      note: 'Mare only hunts at its lower threshold when lights are off.' },

  ghost_visible_entire_hunt:
    { eliminates: ['phantom'],
      note: 'Phantom becomes invisible during hunts — remaining fully visible rules it out.' },

  ghost_created_mist_fog:
    { eliminates: ['oni'],
      note: 'Oni is the only ghost incapable of creating atmospheric mist or fog ghost events.' },

  // ── Fire & candles ─────────────────────────────────────────────

  flames_extinguished_no_hunt:
    { eliminates: ['onryo'],
      note: 'Onryo hunts when flames go out (especially without a nearby crucifix) — no reaction rules it out.' },

  crosses_prioritised_over_flames:
    { eliminates: ['onryo'],
      note: 'Onryo always prioritises extinguishing flames over responding to a crucifix.' },

  // ── Sanity & targeting ─────────────────────────────────────────

  sanity_drained_evenly_across_team:
    { eliminates: ['banshee'],
      note: 'Banshee fixates on one player — their sanity will always drain noticeably faster.' },

  sanity_drained_at_normal_rate:
    { eliminates: ['yurei', 'jinn', 'onryo', 'banshee'],
      note: 'All of these ghosts have significantly above-average passive sanity drain.' },

  activity_unchanged_by_player_count:
    { eliminates: ['oni'],
      note: 'Oni\'s activity scales directly with the number of players in the building.' },

  talking_had_no_effect:
    { eliminates: ['yokai'],
      note: 'Yokai is directly provoked by nearby speech — no reaction rules it out.' },

  // ── Deogen tells ───────────────────────────────────────────────

  spirit_box_breathing:
    { note: 'Consistent with Deogen only. Mimic can copy Deogen. Does not eliminate others.' },

  spirit_box_normal_responses:
    { eliminates: ['deogen'],
      note: 'Deogen\'s Spirit Box response is always a distinctive breathing sound — normal responses rule it out.' },

  ghost_lost_track_of_players:
    { eliminates: ['deogen'],
      note: 'Deogen never loses track of any player — successfully hiding eliminates it.' },

  // ── Identity tells ─────────────────────────────────────────────

  ghost_female_model:
    { eliminates: ['banshee', 'dayan'],
      note: 'Only Banshee and Dayan always present as female.' },

  no_extra_ghost_orb:
    { eliminates: ['mimic'],
      note: 'The Mimic always produces a Ghost Orb as false evidence — its absence rules out Mimic.' },
};