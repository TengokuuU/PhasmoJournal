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
  // Physical interactions
  | 'stepped_in_salt'               | 'gallu_ignored_salt'
  | 'salt_undisturbed_entire_investigation'
  | 'threw_many_objects_at_once'    | 'threw_one_object_at_a_time'
  | 'six_fingered_print'            | 'fingerprint_disappeared_fast'
  | 'all_fingerprints_persisted'    | 'no_fingerprints_found_at_all'
  // Ghost room & roaming
  | 'changed_room'                  | 'stayed_in_one_room'
  | 'interacted_far'
  | 'dots_not_on_camera'            | 'dots_only_on_camera'
  | 'breaker_off_repeatedly'        | 'breaker_left_alone'
  // Hunt threshold
  | 'hunt_above_70'                 | 'hunt_above_50'
  | 'hunt_never_above_35'
  | 'refused_hunt_low_sanity'       | 'hunt_no_warning_sounds'
  // Hunt speed & movement
  | 'normal_ghost_speed'
  | 'hunt_fast_chase_slow_roam'     | 'consistent_speed_entire_hunt'
  | 'hunt_speed_changed_mid_hunt'
  | 'hunt_slowed_when_player_still' | 'ghost_faster_near_moving_player'
  | 'speed_unaffected_by_electronics'
  | 'hunt_faster_near_electronics'
  | 'hunt_fast_chases_slow_close'   | 'no_slowdown_when_close'
  | 'ghost_faster_at_low_sanity'    | 'speed_unaffected_by_sanity'
  | 'ghost_same_speed_warm_cold_rooms'
  // Hunt duration & cycle
  | 'hunt_lasted_full_duration'     | 'hunt_duration_20pct_short'
  | 'ghost_phases_high_low_activity'| 'activity_was_constant'
  | 'no_phase_cycling'
  // Smudge stick
  | 'smudge_extended_hunt_prevention' | 'smudge_normal_duration'
  // Gallu — protective equipment
  | 'incense_sped_ghost_up'         | 'incense_worked_normally'
  | 'crucifix_felt_weaker'          | 'crucifix_worked_at_full_range'
  // Light & visibility
  | 'turned_off_all_lights'         | 'turned_on_lights'
  | 'hunt_with_lights_on'
  | 'became_invisible_mid_hunt'     | 'photo_ghost_disappeared'
  | 'ghost_visible_entire_hunt'
  | 'ghost_created_mist_fog'        | 'no_mist_events_all_investigation'
  // Fire & candles
  | 'hunted_after_flame_out'        | 'flames_extinguished_no_hunt'
  | 'crosses_prioritised_over_flames'
  // Sanity & targeting
  | 'team_sanity_drained_fast'      | 'sanity_drained_evenly_across_team'
  | 'sanity_drained_at_normal_rate'
  | 'single_player_sanity_lower'    | 'ghost_screamed_name'
  | 'activity_increased_with_more_players' | 'activity_unchanged_by_player_count'
  | 'talking_triggered_more_events' | 'talking_had_no_effect'
  // Deogen tells
  | 'spirit_box_breathing'          | 'spirit_box_normal_responses'
  | 'ghost_always_finds_you'        | 'ghost_lost_track_of_players'
  // Identity tells
  | 'ghost_female_model'            | 'ghost_confirmed_female_model'
  | 'ghost_activity_decreased_over_time' | 'activity_did_not_decrease'
  | 'ghost_orb_with_other_evidence' | 'no_extra_ghost_orb'
  | 'door_not_fully_closed';

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