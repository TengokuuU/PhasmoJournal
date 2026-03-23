/* ═══════════════════════════════════════════════════════════════
   ghost-journal.types.ts — all shared types & interfaces
   ═══════════════════════════════════════════════════════════════ */

export type EvidenceState = 'default' | 'confirmed' | 'ruled-out';

export type EvidenceKey =
  | 'emf5'
  | 'spirit_box'
  | 'ultraviolet'
  | 'ghost_orb'
  | 'ghost_writing'
  | 'freezing'
  | 'dots';

export type GhostId =
  | 'spirit'      | 'wraith'   | 'phantom'    | 'poltergeist'
  | 'banshee'     | 'jinn'     | 'mare'        | 'revenant'
  | 'shade'       | 'demon'    | 'yurei'       | 'oni'
  | 'yokai'       | 'hantu'    | 'goryo'       | 'myling'
  | 'onryo'       | 'twins'    | 'raiju'       | 'obake'
  | 'mimic'       | 'moroi'    | 'deogen'      | 'thaye'
  | 'obambo'      | 'dayan'    | 'gallu';

export type BehaviorKey =
  | 'stepped_in_salt'               | 'gallu_ignored_salt'
  | 'changed_room'                  | 'interacted_far'
  | 'dots_not_on_camera'
  | 'hunt_above_70'                 | 'hunt_above_50'
  | 'refused_hunt_low_sanity'       | 'hunt_no_warning_sounds'
  | 'hunt_fast_chase_slow_roam'     | 'hunt_speed_changed_mid_hunt'
  | 'hunt_slowed_when_player_still' | 'ghost_faster_near_moving_player'
  | 'hunt_faster_near_electronics'  | 'hunt_fast_chases_slow_close'
  | 'ghost_faster_at_low_sanity'
  | 'ghost_phases_high_low_activity'| 'hunt_duration_20pct_short'
  | 'incense_sped_ghost_up'         | 'crucifix_felt_weaker'
  | 'turned_off_all_lights'         | 'turned_on_lights'
  | 'hunt_with_lights_on'           | 'became_invisible_mid_hunt'
  | 'photo_ghost_disappeared'
  | 'threw_many_objects_at_once'    | 'six_fingered_print'
  | 'fingerprint_disappeared_fast'
  | 'hunted_after_flame_out'        | 'crosses_prioritised_over_flames'
  | 'breaker_off_repeatedly'
  | 'team_sanity_drained_fast'      | 'single_player_sanity_lower'
  | 'ghost_screamed_name'
  | 'spirit_box_breathing'          | 'ghost_always_finds_you'
  | 'ghost_female_model'            | 'ghost_activity_decreased_over_time'
  | 'ghost_orb_with_other_evidence';

/* ── Domain models ─────────────────────────────────────────────── */

export interface BehaviorRule {
  eliminates?: GhostId[];
  keeps_only?: GhostId[];
  note: string;
}

export interface EvidenceItem {
  key: EvidenceKey;
  label: string;
  state: EvidenceState;
}

export interface BehaviorItem {
  key: BehaviorKey;
  desc: string;
  effect: string;
  active: boolean;
}

export interface BehaviorSection {
  title: string;
  items: BehaviorItem[];
}

/** Static ghost definition as stored in data — no runtime state */
export interface GhostDefinition {
  id: GhostId;
  name: string;
  evidence: EvidenceKey[];
  trait: string;
  isNew?: boolean;
}

/** Ghost card as used in the template — extends definition with computed state */
export interface GhostCard extends GhostDefinition {
  state: 'possible' | 'eliminated' | 'likely';
}