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
        effect: 'Points to: Demon, Obambo (aggressive), Gallu (enraged)',
      },
      {
        key: 'hunt_above_50', active: false,
        desc: 'Hunted between 50–70% sanity (no special state)',
        effect: 'Rules out: Shade, Yokai, Myling, Yurei',
      },
      {
        key: 'refused_hunt_low_sanity', active: false,
        desc: 'Refused to hunt despite very low sanity',
        effect: 'Points to: Thaye (aged), Obambo (calm, threshold 10%)',
      },
      {
        key: 'hunt_no_warning_sounds', active: false,
        desc: 'Hunt started with almost no sound / footsteps',
        effect: 'Points to: Myling (near-silent hunts)',
      },
    ],
  },
  {
    title: 'Hunt speed & movement',
    items: [
      {
        key: 'hunt_fast_chase_slow_roam', active: false,
        desc: 'Extremely fast when chasing, crawls otherwise',
        effect: 'Points to: Revenant (~3 m/s chase, ~1 m/s roam)',
      },
      {
        key: 'hunt_speed_changed_mid_hunt', active: false,
        desc: 'Ghost speed changed noticeably mid-hunt',
        effect: 'Points to: Obambo (state flip), Dayan (player movement), Gallu',
      },
      {
        key: 'hunt_slowed_when_player_still', active: false,
        desc: 'Ghost slowed down when you stood perfectly still',
        effect: 'Points to: Dayan (1.2 m/s when closest player is still)',
      },
      {
        key: 'ghost_faster_near_moving_player', active: false,
        desc: 'Ghost accelerated when nearby player started walking',
        effect: 'Points to: Dayan (2.25 m/s when player walks within 10m)',
      },
      {
        key: 'hunt_faster_near_electronics', active: false,
        desc: 'Ghost faster near active electronics',
        effect: 'Points to: Raiju',
      },
      {
        key: 'hunt_fast_chases_slow_close', active: false,
        desc: 'Fast during hunt but dramatically slowed when right on top of you',
        effect: 'Points to: Deogen (~0.4 m/s at close range)',
      },
      {
        key: 'ghost_faster_at_low_sanity', active: false,
        desc: 'Ghost noticeably faster when team sanity was very low',
        effect: 'Points to: Moroi (fastest at very low sanity), Jinn',
      },
    ],
  },
  {
    title: 'Obambo phase tells',
    items: [
      {
        key: 'ghost_phases_high_low_activity', active: false,
        desc: 'Distinct phases of high vs low paranormal activity (~2 min each)',
        effect: 'Points to: Obambo (calm/aggressive cycle every 2 minutes)',
      },
      {
        key: 'hunt_duration_20pct_short', active: false,
        desc: 'Hunt lasted ~20% shorter than expected',
        effect: 'Points to: Obambo (aggressive state hunts end early)',
      },
    ],
  },
  {
    title: 'Gallu — protective equipment',
    items: [
      {
        key: 'incense_sped_ghost_up', active: false,
        desc: 'Using incense / smudge stick made the ghost faster next hunt',
        effect: 'Points to: Gallu (enters enraged state when incensed)',
      },
      {
        key: 'crucifix_felt_weaker', active: false,
        desc: 'Crucifix / incense felt less effective than usual',
        effect: 'Points to: Gallu (enraged state weakens protective equipment)',
      },
      {
        key: 'gallu_ignored_salt', active: false,
        desc: 'Stepped in first salt pile, then ignored all subsequent piles',
        effect: 'Points to: Gallu (salt triggers enraged, then avoids salt)',
      },
    ],
  },
  {
    title: 'Ghost room & roaming',
    items: [
      {
        key: 'changed_room', active: false,
        desc: 'Ghost changed its ghost room',
        effect: 'Rules out: Goryo',
      },
      {
        key: 'interacted_far', active: false,
        desc: 'Interacted with objects far from its ghost room',
        effect: 'Rules out: Goryo — points to Poltergeist, Jinn',
      },
      {
        key: 'dots_not_on_camera', active: false,
        desc: 'D.O.T.S visible to naked eye (not only through camera)',
        effect: 'Rules out: Goryo (its D.O.T.S only show through a video camera)',
      },
      {
        key: 'breaker_off_repeatedly', active: false,
        desc: 'Breaker turned off repeatedly',
        effect: 'Points to: Jinn, Mare',
      },
    ],
  },
  {
    title: 'Physical interactions',
    items: [
      {
        key: 'stepped_in_salt', active: false,
        desc: 'Ghost stepped in salt (clean footprint)',
        effect: 'Rules out: Wraith',
      },
      {
        key: 'threw_many_objects_at_once', active: false,
        desc: 'Hurled many objects simultaneously',
        effect: 'Points to: Poltergeist',
      },
      {
        key: 'six_fingered_print', active: false,
        desc: 'Found a six-fingered fingerprint',
        effect: 'Points to: Obake (unique fingerprint type)',
      },
      {
        key: 'fingerprint_disappeared_fast', active: false,
        desc: 'Fingerprint vanished moments after being left',
        effect: 'Points to: Obake (25% chance to erase own prints)',
      },
    ],
  },
  {
    title: 'Light & visibility',
    items: [
      {
        key: 'turned_off_all_lights', active: false,
        desc: 'Actively turned off all lights',
        effect: 'Points to: Mare',
      },
      {
        key: 'turned_on_lights', active: false,
        desc: 'Ghost turned on lights',
        effect: 'Rules out: Mare (never turns lights on)',
      },
      {
        key: 'hunt_with_lights_on', active: false,
        desc: 'Hunted while lights were still on',
        effect: 'Rules out: Mare',
      },
      {
        key: 'became_invisible_mid_hunt', active: false,
        desc: 'Disappeared / became invisible during hunt',
        effect: 'Points to: Phantom',
      },
      {
        key: 'photo_ghost_disappeared', active: false,
        desc: 'Ghost vanished completely when photographed',
        effect: 'Points to: Phantom',
      },
    ],
  },
  {
    title: 'Fire & candles',
    items: [
      {
        key: 'hunted_after_flame_out', active: false,
        desc: 'Hunted immediately after a candle / lighter was extinguished',
        effect: 'Points to: Onryo',
      },
      {
        key: 'crosses_prioritised_over_flames', active: false,
        desc: 'Ghost stopped at crucifix even when flames were nearby',
        effect: 'Rules out: Onryo (always prioritises extinguishing flames)',
      },
    ],
  },
  {
    title: 'Sanity & targeting',
    items: [
      {
        key: 'team_sanity_drained_fast', active: false,
        desc: 'Whole team lost sanity extremely fast',
        effect: 'Points to: Banshee, Jinn, Onryo, Yurei',
      },
      {
        key: 'single_player_sanity_lower', active: false,
        desc: 'One player lost sanity much faster than everyone else',
        effect: 'Points to: Banshee (fixates on a single target)',
      },
      {
        key: 'ghost_screamed_name', active: false,
        desc: "Ghost screamed a player's name during an event",
        effect: 'Points to: Banshee',
      },
    ],
  },
  {
    title: 'Deogen tells',
    items: [
      {
        key: 'spirit_box_breathing', active: false,
        desc: 'Spirit Box gave a deep breathing / exhale response',
        effect: 'Points to: Deogen (unique Spirit Box response)',
      },
      {
        key: 'ghost_always_finds_you', active: false,
        desc: 'Ghost never lost track of players — could not hide',
        effect: 'Points to: Deogen (has perfect location awareness)',
      },
    ],
  },
  {
    title: 'Identity tells',
    items: [
      {
        key: 'ghost_female_model', active: false,
        desc: 'Ghost name & model confirmed female',
        effect: 'Points to: Banshee or Dayan (only always-female ghosts)',
      },
      {
        key: 'ghost_activity_decreased_over_time', active: false,
        desc: 'Activity, speed & hunt frequency decreased over time',
        effect: 'Points to: Thaye (ages and weakens during investigation)',
      },
      {
        key: 'ghost_orb_with_other_evidence', active: false,
        desc: 'Ghost Orb appeared alongside unexpected evidence',
        effect: 'Points to: The Mimic (always shows a false Ghost Orb as 4th evidence)',
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
  stepped_in_salt:                { eliminates: ['wraith'],                                                            note: 'Wraiths never touch salt.' },
  gallu_ignored_salt:             { keeps_only: ['gallu'],                                                             note: 'Gallu steps in first pile (triggers enrage), then avoids all subsequent salt.' },
  changed_room:                   { eliminates: ['goryo'],                                                             note: 'Goryo never leaves its ghost room.' },
  interacted_far:                 { eliminates: ['goryo'],                                                             note: 'Goryo interactions are strictly local to its room.' },
  dots_not_on_camera:             { eliminates: ['goryo'],                                                             note: 'Goryo D.O.T.S only appear through a video camera.' },
  hunt_above_70:                  { keeps_only: ['demon', 'obambo', 'gallu'],                                          note: 'Demon hunts at any sanity. Obambo aggressive at 65%. Gallu enraged at 60%.' },
  hunt_above_50:                  { eliminates: ['shade', 'yurei', 'yokai', 'myling'],                                 note: 'These ghosts have lower hunt thresholds.' },
  refused_hunt_low_sanity:        { keeps_only: ['thaye', 'obambo', 'shade'],                                          note: 'Thaye weakens. Obambo calm threshold ~10%. Shade needs very low sanity.' },
  hunt_no_warning_sounds:         { keeps_only: ['myling'],                                                            note: 'Myling is nearly silent during hunts.' },
  hunt_fast_chase_slow_roam:      { keeps_only: ['revenant'],                                                          note: 'Revenant ~3 m/s chasing, ~1 m/s roaming.' },
  hunt_speed_changed_mid_hunt:    { keeps_only: ['obambo', 'dayan', 'gallu'],                                          note: 'Obambo flips states. Dayan reacts to movement. Gallu enrages/exhausts.' },
  hunt_slowed_when_player_still:  { keeps_only: ['dayan'],                                                             note: 'Dayan drops to 1.2 m/s when closest player stands still.' },
  ghost_faster_near_moving_player:{ keeps_only: ['dayan'],                                                             note: 'Dayan reaches 2.25 m/s when closest player walks within 10 m.' },
  hunt_faster_near_electronics:   { keeps_only: ['raiju'],                                                             note: 'Raiju accelerates near active electronics.' },
  hunt_fast_chases_slow_close:    { keeps_only: ['deogen'],                                                            note: 'Deogen slows to ~0.4 m/s at close range.' },
  ghost_faster_at_low_sanity:     { keeps_only: ['moroi', 'jinn'],                                                     note: 'Moroi fastest at very low sanity. Jinn fast with breaker on.' },
  ghost_phases_high_low_activity: { keeps_only: ['obambo'],                                                            note: 'Obambo cycles calm↔aggressive every ~2 minutes.' },
  hunt_duration_20pct_short:      { keeps_only: ['obambo'],                                                            note: 'Obambo hunts end ~20% earlier in aggressive state.' },
  incense_sped_ghost_up:          { keeps_only: ['gallu'],                                                             note: 'Incense triggers Gallu enraged state.' },
  crucifix_felt_weaker:           { keeps_only: ['gallu', 'demon'],                                                    note: 'Gallu enraged state weakens protective equipment.' },
  turned_off_all_lights:          { keeps_only: ['mare'],                                                              note: 'Mare actively turns off lights.' },
  turned_on_lights:               { eliminates: ['mare'],                                                              note: 'Mares never turn on lights.' },
  hunt_with_lights_on:            { eliminates: ['mare'],                                                              note: 'Mare only hunts when lights are off.' },
  became_invisible_mid_hunt:      { keeps_only: ['phantom'],                                                           note: 'Phantom can disappear entirely during hunts.' },
  photo_ghost_disappeared:        { keeps_only: ['phantom'],                                                           note: 'Photographing a Phantom causes it to vanish.' },
  threw_many_objects_at_once:     { keeps_only: ['poltergeist'],                                                       note: 'Poltergeist can hurl multiple objects simultaneously.' },
  six_fingered_print:             { keeps_only: ['obake'],                                                             note: 'Obake occasionally leaves a 6-fingered handprint.' },
  fingerprint_disappeared_fast:   { keeps_only: ['obake'],                                                             note: 'Obake has a 25% chance to erase its own fingerprints.' },
  hunted_after_flame_out:         { keeps_only: ['onryo'],                                                             note: 'Onryo is triggered by flames being extinguished.' },
  crosses_prioritised_over_flames:{ eliminates: ['onryo'],                                                             note: 'Onryo always prioritises extinguishing flames over a crucifix.' },
  breaker_off_repeatedly:         { keeps_only: ['jinn', 'mare'],                                                      note: 'Jinn and Mare both interact heavily with the breaker.' },
  team_sanity_drained_fast:       { keeps_only: ['banshee', 'jinn', 'onryo', 'yurei'],                                 note: 'These ghosts all have above-average passive sanity drain.' },
  single_player_sanity_lower:     { keeps_only: ['banshee'],                                                           note: 'Banshee fixates on one target.' },
  ghost_screamed_name:            { keeps_only: ['banshee'],                                                           note: "Banshee may scream a player's name during a ghost event." },
  spirit_box_breathing:           { keeps_only: ['deogen'],                                                            note: 'Deogen gives a unique deep breathing response on the Spirit Box.' },
  ghost_always_finds_you:         { keeps_only: ['deogen', 'banshee'],                                                 note: 'Deogen always knows the exact location of all players.' },
  ghost_female_model:             { keeps_only: ['banshee', 'dayan'],                                                  note: 'Only Banshee and Dayan always present as female.' },
  ghost_activity_decreased_over_time: { keeps_only: ['thaye'],                                                         note: 'Thaye ages and weakens throughout the investigation.' },
  ghost_orb_with_other_evidence:  { keeps_only: ['mimic','banshee','hantu','obake','raiju','onryo','yurei','yokai','thaye','revenant','shade','mare','dayan'], note: 'The Mimic always shows a Ghost Orb as false fourth evidence.' },
};