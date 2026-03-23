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
        effect: 'Eliminates: Shade (≤35%), Yokai (≤50%), Yurei (≤50%), Myling (≤50%), Thaye (aged, very low)',
      },
      {
        key: 'hunt_never_above_35', active: false,
        desc: 'Ghost never hunted above ~35% sanity despite low average',
        effect: 'Eliminates: Demon, Obambo (aggressive), Gallu, Yokai, Yurei, Myling — Points to: Shade',
      },
      {
        key: 'refused_hunt_low_sanity', active: false,
        desc: 'Refused to hunt despite very low sanity',
        effect: 'Eliminates most ghosts — Points to: Thaye (aged), Obambo (calm, threshold ~10%)',
      },
      {
        key: 'hunt_no_warning_sounds', active: false,
        desc: 'Hunt started with almost no sound / footsteps',
        effect: 'Eliminates all ghosts except: Myling (near-silent hunts)',
      },
    ],
  },
  {
    title: 'Hunt speed & movement',
    items: [
      {
        key: 'normal_ghost_speed', active: false,
        desc: 'Ghost moved at base movement speed during the entire hunt',
        effect: 'Eliminates: Raiju, Deogen, Moroi, Jinn (in LoS), Revenant (while chasing), Hantu (cold rooms), Dayan',
      },
      {
        key: 'hunt_fast_chase_slow_roam', active: false,
        desc: 'Extremely fast when chasing, crawls otherwise',
        effect: 'Eliminates all ghosts except: Revenant (~3 m/s chase, ~1 m/s roam)',
      },
      {
        key: 'consistent_speed_entire_hunt', active: false,
        desc: 'Ghost maintained consistent speed throughout the entire hunt',
        effect: 'Eliminates: Revenant, Dayan, Obambo, Gallu, Moroi (speed scales with sanity)',
      },
      {
        key: 'hunt_speed_changed_mid_hunt', active: false,
        desc: 'Ghost speed changed noticeably mid-hunt',
        effect: 'Eliminates all ghosts except: Obambo (state flip), Dayan (player movement), Gallu',
      },
      {
        key: 'hunt_slowed_when_player_still', active: false,
        desc: 'Ghost slowed down when you stood perfectly still',
        effect: 'Eliminates all ghosts except: Dayan (1.2 m/s when closest player is still)',
      },
      {
        key: 'ghost_faster_near_moving_player', active: false,
        desc: 'Ghost accelerated when nearby player started walking',
        effect: 'Eliminates all ghosts except: Dayan (2.25 m/s when player walks within 10m)',
      },
      {
        key: 'speed_unaffected_by_electronics', active: false,
        desc: 'Ghost speed was unaffected by nearby active electronics',
        effect: 'Eliminates: Raiju',
      },
      {
        key: 'hunt_faster_near_electronics', active: false,
        desc: 'Ghost faster near active electronics',
        effect: 'Eliminates all ghosts except: Raiju',
      },
      {
        key: 'hunt_fast_chases_slow_close', active: false,
        desc: 'Fast during hunt but dramatically slowed when right on top of you',
        effect: 'Eliminates all ghosts except: Deogen (~0.4 m/s at close range)',
      },
      {
        key: 'no_slowdown_when_close', active: false,
        desc: 'Ghost maintained or increased speed even at point-blank range',
        effect: 'Eliminates: Deogen (always slows to ~0.4 m/s when right next to a player)',
      },
      {
        key: 'ghost_faster_at_low_sanity', active: false,
        desc: 'Ghost noticeably faster when team sanity was very low',
        effect: 'Eliminates all others — Points to: Moroi (fastest at very low sanity), Jinn',
      },
      {
        key: 'speed_unaffected_by_sanity', active: false,
        desc: 'Ghost speed was the same regardless of team sanity level',
        effect: 'Eliminates: Moroi (speed scales directly with sanity)',
      },
      {
        key: 'ghost_same_speed_warm_cold_rooms', active: false,
        desc: 'Ghost moved at identical speed in cold and warm rooms',
        effect: 'Eliminates: Hantu (significantly faster in cold rooms)',
      },
    ],
  },
  {
    title: 'Hunt duration & cycle',
    items: [
      {
        key: 'hunt_lasted_full_duration', active: false,
        desc: 'Hunt lasted the expected full duration',
        effect: 'Eliminates: Obambo (aggressive-state hunts end ~20% early)',
      },
      {
        key: 'hunt_duration_20pct_short', active: false,
        desc: 'Hunt lasted ~20% shorter than expected',
        effect: 'Eliminates all ghosts except: Obambo (aggressive state hunts end early)',
      },
      {
        key: 'ghost_phases_high_low_activity', active: false,
        desc: 'Distinct phases of high vs low paranormal activity (~2 min each)',
        effect: 'Eliminates all ghosts except: Obambo (calm/aggressive cycle every 2 minutes)',
      },
      {
        key: 'activity_was_constant', active: false,
        desc: 'Activity level stayed roughly constant throughout the investigation',
        effect: 'Eliminates: Obambo (cycles calm↔aggressive), Thaye (activity decreases over time)',
      },
    ],
  },
  {
    title: 'Obambo phase tells',
    items: [
      {
        key: 'no_phase_cycling', active: false,
        desc: 'No noticeable phases of high vs low activity — behaviour was steady',
        effect: 'Eliminates: Obambo',
      },
    ],
  },
  {
    title: 'Gallu — protective equipment',
    items: [
      {
        key: 'incense_sped_ghost_up', active: false,
        desc: 'Using incense / smudge stick made the ghost faster next hunt',
        effect: 'Eliminates all ghosts except: Gallu (enters enraged state when incensed)',
      },
      {
        key: 'incense_worked_normally', active: false,
        desc: 'Smudge stick / incense slowed or repelled the ghost as expected',
        effect: 'Eliminates: Gallu (incense triggers enrage rather than repelling it)',
      },
      {
        key: 'crucifix_felt_weaker', active: false,
        desc: 'Crucifix / incense felt less effective than usual',
        effect: 'Eliminates most ghosts — Points to: Gallu (enraged state weakens protective equipment)',
      },
      {
        key: 'crucifix_worked_at_full_range', active: false,
        desc: 'Crucifix stopped hunts reliably at its full normal range',
        effect: 'Eliminates: Demon (smaller crucifix effective radius), Gallu (enraged weakens equipment)',
      },
      {
        key: 'gallu_ignored_salt', active: false,
        desc: 'Stepped in first salt pile, then ignored all subsequent piles',
        effect: 'Eliminates all ghosts except: Gallu (salt triggers enraged, then avoids salt)',
      },
    ],
  },
  {
    title: 'Ghost room & roaming',
    items: [
      {
        key: 'changed_room', active: false,
        desc: 'Ghost changed its ghost room',
        effect: 'Eliminates: Goryo',
      },
      {
        key: 'stayed_in_one_room', active: false,
        desc: 'Ghost never left or changed its ghost room',
        effect: 'No eliminations on its own, but consistent with: Goryo',
      },
      {
        key: 'interacted_far', active: false,
        desc: 'Interacted with objects far from its ghost room',
        effect: 'Eliminates: Goryo (interactions are strictly local to its room)',
      },
      {
        key: 'dots_not_on_camera', active: false,
        desc: 'D.O.T.S visible to naked eye (not only through camera)',
        effect: 'Eliminates: Goryo (its D.O.T.S only show through a video camera)',
      },
      {
        key: 'dots_only_on_camera', active: false,
        desc: 'D.O.T.S were only visible through a video camera, not the naked eye',
        effect: 'Points strongly to: Goryo',
      },
      {
        key: 'breaker_off_repeatedly', active: false,
        desc: 'Breaker turned off repeatedly',
        effect: 'Eliminates most ghosts — Points to: Jinn, Mare',
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
        desc: 'Ghost stepped in salt (clean footprint)',
        effect: 'Eliminates: Wraith',
      },
      {
        key: 'salt_undisturbed_entire_investigation', active: false,
        desc: 'Salt piles near ghost room were never disturbed',
        effect: 'Points to: Wraith — does not eliminate others (ghosts can simply avoid salt)',
      },
      {
        key: 'threw_many_objects_at_once', active: false,
        desc: 'Hurled many objects simultaneously',
        effect: 'Eliminates all ghosts except: Poltergeist',
      },
      {
        key: 'threw_one_object_at_a_time', active: false,
        desc: 'Threw objects one at a time only — no multi-object throws observed',
        effect: 'Eliminates: Poltergeist (defining ability is multi-object throws)',
      },
      {
        key: 'six_fingered_print', active: false,
        desc: 'Found a six-fingered fingerprint',
        effect: 'Eliminates all ghosts except: Obake (unique fingerprint type)',
      },
      {
        key: 'fingerprint_disappeared_fast', active: false,
        desc: 'Fingerprint vanished moments after being left',
        effect: 'Eliminates all ghosts except: Obake (25% chance to erase own prints)',
      },
      {
        key: 'all_fingerprints_persisted', active: false,
        desc: 'All fingerprints found stayed visible for the normal duration',
        effect: 'Eliminates: Obake (25% chance to erase its own prints quickly)',
      },
      {
        key: 'no_fingerprints_found_at_all', active: false,
        desc: 'No fingerprints found at all despite many interactions',
        effect: 'Eliminates: Obake (Obake always leaves UV evidence as it is a core evidence type)',
      },
    ],
  },
  {
    title: 'Light & visibility',
    items: [
      {
        key: 'turned_off_all_lights', active: false,
        desc: 'Actively turned off all lights',
        effect: 'Eliminates all ghosts except: Mare',
      },
      {
        key: 'turned_on_lights', active: false,
        desc: 'Ghost turned on lights',
        effect: 'Eliminates: Mare (never turns lights on)',
      },
      {
        key: 'hunt_with_lights_on', active: false,
        desc: 'Hunted while lights were still on',
        effect: 'Eliminates: Mare (lower hunt threshold only when lights are off)',
      },
      {
        key: 'became_invisible_mid_hunt', active: false,
        desc: 'Disappeared / became invisible during hunt',
        effect: 'Eliminates all ghosts except: Phantom',
      },
      {
        key: 'photo_ghost_disappeared', active: false,
        desc: 'Ghost vanished completely when photographed',
        effect: 'Eliminates all ghosts except: Phantom',
      },
      {
        key: 'ghost_visible_entire_hunt', active: false,
        desc: 'Ghost was visible and never flickered out or disappeared during the hunt',
        effect: 'Eliminates: Phantom (Phantom becomes invisible during hunts when photographed)',
      },
      {
        key: 'ghost_created_mist_fog', active: false,
        desc: 'Ghost created a swirling mist or fog ball ghost event',
        effect: 'Eliminates: Oni (Oni cannot create atmospheric mist/fog events)',
      },
      {
        key: 'no_mist_events_all_investigation', active: false,
        desc: 'No mist or fog ghost events occurred throughout the investigation',
        effect: 'Points to: Oni (cannot create mist) — does not eliminate others',
      },
    ],
  },
  {
    title: 'Smudge stick / sage',
    items: [
      {
        key: 'smudge_extended_hunt_prevention', active: false,
        desc: 'Smudge stick prevented hunting for an unusually long time (~3 min)',
        effect: 'Eliminates all ghosts except: Spirit (smudge cooldown is 180 s vs 90 s default)',
      },
      {
        key: 'smudge_normal_duration', active: false,
        desc: 'Smudge stick prevented hunting for the normal ~90 seconds',
        effect: 'Eliminates: Spirit (Spirit gets ~180 s from smudge)',
      },
    ],
  },
  {
    title: 'Fire & candles',
    items: [
      {
        key: 'hunted_after_flame_out', active: false,
        desc: 'Hunted immediately after a candle / lighter was extinguished',
        effect: 'Eliminates all ghosts except: Onryo',
      },
      {
        key: 'flames_extinguished_no_hunt', active: false,
        desc: 'Flames were extinguished repeatedly with no hunt triggered',
        effect: 'Eliminates: Onryo (hunts when flames go out, especially without a crucifix nearby)',
      },
      {
        key: 'crosses_prioritised_over_flames', active: false,
        desc: 'Ghost stopped at crucifix even when flames were nearby',
        effect: 'Eliminates: Onryo (always prioritises extinguishing flames over responding to a crucifix)',
      },
    ],
  },
  {
    title: 'Sanity & targeting',
    items: [
      {
        key: 'team_sanity_drained_fast', active: false,
        desc: 'Whole team lost sanity extremely fast',
        effect: 'Eliminates most passive ghosts — Points to: Banshee, Jinn, Onryo, Yurei',
      },
      {
        key: 'sanity_drained_evenly_across_team', active: false,
        desc: 'All players lost sanity at a roughly equal rate',
        effect: 'Eliminates: Banshee (one player will always drain faster than others)',
      },
      {
        key: 'sanity_drained_at_normal_rate', active: false,
        desc: 'Team sanity drained at a normal expected rate',
        effect: 'Eliminates: Yurei (massive passive drain near ghost), Jinn, Onryo, Banshee',
      },
      {
        key: 'single_player_sanity_lower', active: false,
        desc: 'One player lost sanity much faster than everyone else',
        effect: 'Eliminates all ghosts except: Banshee (fixates on a single target)',
      },
      {
        key: 'ghost_screamed_name', active: false,
        desc: "Ghost screamed a player's name during an event",
        effect: 'Eliminates all ghosts except: Banshee',
      },
      {
        key: 'activity_increased_with_more_players', active: false,
        desc: 'Activity and events noticeably increased when more players were in the building',
        effect: 'Eliminates most ghosts — Points to: Oni (more active with more players present)',
      },
      {
        key: 'activity_unchanged_by_player_count', active: false,
        desc: 'Activity level was the same regardless of how many players were nearby',
        effect: 'Eliminates: Oni (activity scales with player count)',
      },
      {
        key: 'talking_triggered_more_events', active: false,
        desc: 'Ghost reacted noticeably more when players were talking nearby',
        effect: 'Points to: Yokai (talking triggers activity and lowers hunt threshold)',
      },
      {
        key: 'talking_had_no_effect', active: false,
        desc: 'Talking near the ghost had no observable effect on activity or hunting',
        effect: 'Eliminates: Yokai (Yokai is directly provoked by nearby speech)',
      },
    ],
  },
  {
    title: 'Deogen tells',
    items: [
      {
        key: 'spirit_box_breathing', active: false,
        desc: 'Spirit Box gave a deep breathing / exhale response',
        effect: 'Eliminates all ghosts except: Deogen (unique Spirit Box response)',
      },
      {
        key: 'spirit_box_normal_responses', active: false,
        desc: 'Spirit Box gave normal word or phrase responses only',
        effect: 'Eliminates: Deogen (unique breathing response replaces normal Spirit Box answers)',
      },
      {
        key: 'ghost_always_finds_you', active: false,
        desc: 'Ghost never lost track of players — could not hide',
        effect: 'Eliminates all ghosts except: Deogen, Banshee (both have strong location awareness)',
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
        key: 'ghost_confirmed_female_model', active: false,
        desc: 'Ghost name & model confirmed female',
        effect: 'Points to: Banshee or Dayan — eliminates all male or neutral-model ghosts',
      },
      {
        key: 'ghost_activity_decreased_over_time', active: false,
        desc: 'Activity, speed & hunt frequency decreased over time',
        effect: 'Eliminates all ghosts except: Thaye (ages and weakens during investigation)',
      },
      {
        key: 'activity_did_not_decrease', active: false,
        desc: 'Activity and aggression remained consistent or increased over time',
        effect: 'Eliminates: Thaye (Thaye always becomes weaker as time passes)',
      },
      {
        key: 'ghost_orb_with_other_evidence', active: false,
        desc: 'Ghost Orb appeared alongside unexpected evidence (4th evidence)',
        effect: 'Points to: The Mimic (always shows a false Ghost Orb as 4th evidence)',
      },
      {
        key: 'no_extra_ghost_orb', active: false,
        desc: 'Ghost Orb was absent despite ruling out all orb-carrying ghosts',
        effect: 'Eliminates: The Mimic (Mimic always produces a Ghost Orb as false evidence)',
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

  // ── Physical interactions ──────────────────────────────────────

  door_not_fully_closed:
    { eliminates: ['yurei'],
      note: 'Yurei can only fully open or fully close doors.' },

  stepped_in_salt:
    { eliminates: ['wraith'],
      note: 'Wraiths never step in salt.' },

  salt_undisturbed_entire_investigation:
    { note: 'Consistent with Wraith but does not eliminate others — ghosts can simply avoid salt.' },

  gallu_ignored_salt:
    { keeps_only: ['gallu'],
      note: 'Gallu steps in the first pile (triggering enrage), then avoids all subsequent salt.' },

  threw_many_objects_at_once:
    { keeps_only: ['poltergeist'],
      note: 'Poltergeist is the only ghost that can hurl multiple objects simultaneously.' },

  threw_one_object_at_a_time:
    { eliminates: ['poltergeist'],
      note: 'Poltergeist\'s defining trait is multi-object throws — single throws only rules it out.' },

  six_fingered_print:
    { keeps_only: ['obake'],
      note: 'Obake occasionally leaves a 6-fingered handprint — no other ghost does.' },

  fingerprint_disappeared_fast:
    { keeps_only: ['obake'],
      note: 'Obake has a 25% chance to erase its own fingerprints shortly after leaving them.' },

  all_fingerprints_persisted:
    { eliminates: ['obake'],
      note: 'Obake has a 25% chance to rapidly erase its own prints — consistently persisting prints rules it out.' },

  no_fingerprints_found_at_all:
    { eliminates: ['obake'],
      note: 'Obake always leaves UV evidence since Ultraviolet is one of its core evidence types.' },

  // ── Ghost room & roaming ───────────────────────────────────────

  changed_room:
    { eliminates: ['goryo'],
      note: 'Goryo never leaves its ghost room.' },

  stayed_in_one_room:
    { note: 'Consistent with Goryo but does not eliminate others on its own.' },

  interacted_far:
    { eliminates: ['goryo'],
      note: 'Goryo interactions are strictly local to its room.' },

  dots_not_on_camera:
    { eliminates: ['goryo'],
      note: 'Goryo D.O.T.S only appear through a video camera.' },

  dots_only_on_camera:
    { keeps_only: ['goryo'],
      note: 'No other ghost restricts D.O.T.S visibility to camera only.' },

  breaker_off_repeatedly:
    { keeps_only: ['jinn', 'mare'],
      note: 'Jinn and Mare both interact heavily with the breaker.' },

  breaker_left_alone:
    { eliminates: ['jinn', 'mare'],
      note: 'Jinn heavily targets the breaker; Mare turns it off to darken the map.' },

  // ── Hunt threshold ─────────────────────────────────────────────

  hunt_above_70:
    { eliminates: ['spirit', 'wraith', 'phantom', 'poltergeist', 'jinn', 'mare', 'revenant',
                   'shade', 'yurei', 'oni', 'yokai', 'hantu', 'goryo', 'myling', 'onryo',
                   'twins', 'raiju', 'obake', 'mimic', 'moroi', 'deogen', 'thaye', 'dayan'],
      note: 'Only Demon (any sanity), Obambo (aggressive, ~65%), and Gallu (enraged, ~60%) can hunt above 70%.' },

  hunt_above_50:
    { eliminates: ['shade', 'yokai', 'yurei', 'myling', 'thaye'],
      note: 'Shade ≤35%, Yokai ≤50% when quiet, Yurei ≤50%, Myling ≤50%, aged Thaye very low threshold.' },

  hunt_never_above_35:
    { eliminates: ['demon', 'obambo', 'gallu', 'yokai', 'yurei', 'myling'],
      note: 'Points to Shade — all high-aggression and average-threshold ghosts are ruled out.' },

  refused_hunt_low_sanity:
    { keeps_only: ['thaye', 'obambo', 'shade'],
      note: 'Thaye weakens over time. Obambo calm threshold ~10%. Shade needs very low sanity.' },

  hunt_no_warning_sounds:
    { keeps_only: ['myling'],
      note: 'Myling is nearly silent during hunts — all other ghosts produce audible footsteps.' },

  // ── Hunt speed & movement ──────────────────────────────────────

  normal_ghost_speed:
    { eliminates: ['raiju', 'deogen', 'moroi', 'jinn', 'revenant', 'hantu', 'dayan'],
      note: 'All of these ghosts have notable speed deviations from base movement speed.' },

  hunt_fast_chase_slow_roam:
    { keeps_only: ['revenant'],
      note: 'Revenant ~3 m/s chasing, ~1 m/s roaming — no other ghost has this extreme split.' },

  consistent_speed_entire_hunt:
    { eliminates: ['revenant', 'dayan', 'obambo', 'gallu', 'moroi'],
      note: 'All of these ghosts change speed noticeably mid-hunt under certain conditions.' },

  hunt_speed_changed_mid_hunt:
    { keeps_only: ['obambo', 'dayan', 'gallu'],
      note: 'Obambo flips states. Dayan reacts to player movement. Gallu enrages/exhausts.' },

  hunt_slowed_when_player_still:
    { keeps_only: ['dayan'],
      note: 'Dayan drops to 1.2 m/s when the closest player stands still.' },

  ghost_faster_near_moving_player:
    { keeps_only: ['dayan'],
      note: 'Dayan reaches 2.25 m/s when the closest player walks within 10 m.' },

  speed_unaffected_by_electronics:
    { eliminates: ['raiju'],
      note: 'Raiju\'s defining trait is accelerating near active electronics.' },

  hunt_faster_near_electronics:
    { keeps_only: ['raiju'],
      note: 'Raiju accelerates near active electronics — no other ghost does this.' },

  hunt_fast_chases_slow_close:
    { keeps_only: ['deogen'],
      note: 'Deogen slows to ~0.4 m/s at close range — no other ghost does this.' },

  no_slowdown_when_close:
    { eliminates: ['deogen'],
      note: 'Deogen always slows dramatically when it reaches a player.' },

  ghost_faster_at_low_sanity:
    { keeps_only: ['moroi', 'jinn'],
      note: 'Moroi fastest at very low sanity (3.71 m/s). Jinn fast with breaker on.' },

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
    { keeps_only: ['obambo'],
      note: 'Obambo hunts end ~20% earlier in aggressive state.' },

  ghost_phases_high_low_activity:
    { keeps_only: ['obambo'],
      note: 'Obambo cycles calm↔aggressive every ~2 minutes — no other ghost does this.' },

  activity_was_constant:
    { eliminates: ['obambo', 'thaye'],
      note: 'Obambo cycles calm↔aggressive; Thaye\'s activity decreases steadily over time.' },

  no_phase_cycling:
    { eliminates: ['obambo'],
      note: 'Obambo has a clearly observable ~2-minute calm↔aggressive phase cycle.' },

  // ── Smudge stick / sage ────────────────────────────────────────

  smudge_extended_hunt_prevention:
    { keeps_only: ['spirit'],
      note: 'Spirit\'s smudge cooldown is ~180 s; all other ghosts get ~90 s.' },

  smudge_normal_duration:
    { eliminates: ['spirit'],
      note: 'Spirit\'s smudge effect lasts ~180 s — noticeably longer than the 90 s standard.' },

  // ── Gallu — protective equipment ──────────────────────────────

  incense_sped_ghost_up:
    { keeps_only: ['gallu'],
      note: 'Incense triggers Gallu\'s enraged state rather than repelling it.' },

  incense_worked_normally:
    { eliminates: ['gallu'],
      note: 'Gallu becomes enraged (faster) when incensed — normal repelling rules it out.' },

  crucifix_felt_weaker:
    { keeps_only: ['gallu', 'demon'],
      note: 'Gallu enraged state weakens protective equipment. Demon has a smaller crucifix radius.' },

  crucifix_worked_at_full_range:
    { eliminates: ['demon', 'gallu'],
      note: 'Demon has a smaller effective crucifix radius. Gallu (enraged) weakens all protective equipment.' },

  // ── Light & visibility ─────────────────────────────────────────

  turned_off_all_lights:
    { keeps_only: ['mare'],
      note: 'Mare actively turns off lights — no other ghost does this systematically.' },

  turned_on_lights:
    { eliminates: ['mare'],
      note: 'Mares never turn on lights.' },

  hunt_with_lights_on:
    { eliminates: ['mare'],
      note: 'Mare only hunts at its lower threshold when lights are off.' },

  became_invisible_mid_hunt:
    { keeps_only: ['phantom'],
      note: 'Phantom can disappear entirely during hunts.' },

  photo_ghost_disappeared:
    { keeps_only: ['phantom'],
      note: 'Photographing a Phantom causes it to temporarily vanish.' },

  ghost_visible_entire_hunt:
    { eliminates: ['phantom'],
      note: 'Phantom becomes invisible during hunts — remaining fully visible rules it out.' },

  ghost_created_mist_fog:
    { eliminates: ['oni'],
      note: 'Oni is the only ghost that cannot create atmospheric mist or fog ghost events.' },

  no_mist_events_all_investigation:
    { note: 'Points to Oni (cannot create mist) but does not eliminate others — mist events are not guaranteed.' },

  // ── Fire & candles ─────────────────────────────────────────────

  hunted_after_flame_out:
    { keeps_only: ['onryo'],
      note: 'Onryo is triggered by flames being extinguished — no other ghost has this behaviour.' },

  flames_extinguished_no_hunt:
    { eliminates: ['onryo'],
      note: 'Onryo hunts when flames go out (especially without a crucifix nearby) — no reaction rules it out.' },

  crosses_prioritised_over_flames:
    { eliminates: ['onryo'],
      note: 'Onryo always prioritises extinguishing flames over responding to a crucifix.' },

  // ── Sanity & targeting ─────────────────────────────────────────

  team_sanity_drained_fast:
    { keeps_only: ['banshee', 'jinn', 'onryo', 'yurei'],
      note: 'These ghosts all have above-average passive sanity drain.' },

  sanity_drained_evenly_across_team:
    { eliminates: ['banshee'],
      note: 'Banshee fixates on one player — their sanity will always drain noticeably faster.' },

  sanity_drained_at_normal_rate:
    { eliminates: ['yurei', 'jinn', 'onryo', 'banshee'],
      note: 'All of these ghosts have significantly above-average passive sanity drain.' },

  single_player_sanity_lower:
    { keeps_only: ['banshee'],
      note: 'Banshee fixates on one target — only that player drains significantly faster.' },

  ghost_screamed_name:
    { keeps_only: ['banshee'],
      note: 'Banshee may scream a player\'s name during a ghost event — no other ghost does this.' },

  activity_increased_with_more_players:
    { keeps_only: ['oni'],
      note: 'Oni is more active the more players are present — a strong indicator.' },

  activity_unchanged_by_player_count:
    { eliminates: ['oni'],
      note: 'Oni\'s activity scales directly with the number of players in the building.' },

  talking_triggered_more_events:
    { keeps_only: ['yokai'],
      note: 'Yokai is directly provoked by nearby speech — no other ghost has this trigger.' },

  talking_had_no_effect:
    { eliminates: ['yokai'],
      note: 'Yokai is directly provoked by nearby speech — no reaction rules it out.' },

  // ── Deogen tells ───────────────────────────────────────────────

  spirit_box_breathing:
    { keeps_only: ['deogen'],
      note: 'Deogen gives a unique deep breathing response on the Spirit Box.' },

  spirit_box_normal_responses:
    { eliminates: ['deogen'],
      note: 'Deogen\'s Spirit Box response is always a distinctive breathing sound — normal responses rule it out.' },

  ghost_always_finds_you:
    { keeps_only: ['deogen', 'banshee'],
      note: 'Deogen always knows the exact location of all players. Banshee locks onto its target.' },

  ghost_lost_track_of_players:
    { eliminates: ['deogen'],
      note: 'Deogen never loses track of any player — successfully hiding eliminates it.' },

  // ── Identity tells ─────────────────────────────────────────────

  ghost_female_model:
    { eliminates: ['banshee', 'dayan'],
      note: 'Only Banshee and Dayan always present as female.' },

  ghost_confirmed_female_model:
    { keeps_only: ['banshee', 'dayan'],
      note: 'Only Banshee and Dayan are always female.' },

  ghost_activity_decreased_over_time:
    { keeps_only: ['thaye'],
      note: 'Thaye ages and weakens throughout the investigation — no other ghost does this.' },

  activity_did_not_decrease:
    { eliminates: ['thaye'],
      note: 'Thaye always becomes weaker — constant or increasing activity rules it out.' },

  ghost_orb_with_other_evidence:
    { keeps_only: ['mimic', 'banshee', 'hantu', 'obake', 'raiju', 'onryo', 'yurei', 'yokai', 'thaye', 'revenant', 'shade', 'mare', 'dayan'],
      note: 'The Mimic always shows a Ghost Orb as false fourth evidence alongside its other three.' },

  no_extra_ghost_orb:
    { eliminates: ['mimic'],
      note: 'The Mimic always produces a Ghost Orb as false evidence — its absence rules out Mimic.' },
};