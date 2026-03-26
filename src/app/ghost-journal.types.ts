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
  // Hunt threshold
  | 'hunt_above_70'                 | 'hunt_above_50'
  | 'hunt_never_above_35'
  | 'refused_hunt_low_sanity'       | 'hunt_no_warning_sounds'
  // Hunt speed & movement
  | 'normal_ghost_speed'
  | 'consistent_speed_entire_hunt'
  | 'hunt_slowed_when_player_still'
  | 'no_slowdown_when_close'
  | 'speed_unaffected_by_electronics'
  | 'speed_unaffected_by_sanity'
  | 'ghost_same_speed_warm_cold_rooms'
  // Hunt duration & cycle
  | 'hunt_lasted_full_duration'     | 'hunt_duration_20pct_short'
  | 'activity_was_constant'         | 'no_phase_cycling'
  | 'activity_did_not_decrease'
  // Smudge stick
  | 'smudge_extended_hunt_prevention' | 'smudge_normal_duration'
  // Gallu — protective equipment
  | 'incense_worked_normally'
  | 'crucifix_worked_at_full_range'
  | 'gallu_ignored_salt'
  // Ghost room & roaming
  | 'changed_room'                  | 'interacted_far'
  | 'dots_not_on_camera'            | 'breaker_left_alone'
  // Physical interactions
  | 'door_not_fully_closed'
  | 'stepped_in_salt'               | 'salt_undisturbed_entire_investigation'
  | 'threw_one_object_at_a_time'
  | 'six_fingered_print'
  | 'all_fingerprints_persisted'    | 'no_fingerprints_found_at_all'
  // Light & visibility
  | 'turned_on_lights'              | 'hunt_with_lights_on'
  | 'ghost_visible_entire_hunt'
  | 'ghost_created_mist_fog'
  // Fire & candles
  | 'flames_extinguished_no_hunt'   | 'crosses_prioritised_over_flames'
  // Sanity & targeting
  | 'sanity_drained_evenly_across_team'
  | 'sanity_drained_at_normal_rate'
  | 'activity_unchanged_by_player_count'
  | 'talking_had_no_effect'
  // Deogen tells
  | 'spirit_box_breathing'          | 'spirit_box_normal_responses'
  | 'ghost_lost_track_of_players'
  // Identity tells
  | 'ghost_female_model'            
  | 'no_extra_ghost_orb';

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