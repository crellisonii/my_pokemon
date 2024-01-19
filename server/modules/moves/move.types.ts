import {
  APIResource,
  Description,
  MachineVersionDetail,
  Name,
  NamedAPIResource,
  VerboseEffect,
} from "../shared";
import { Field, Int, ObjectType } from "type-graphql";

import { AbilityEffectChange } from "../pokemon";

@ObjectType()
class ContestComboDetail {
  @Field(type => NamedAPIResource, { nullable: true })
  use_before: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  use_after: NamedAPIResource | null;
}

@ObjectType()
class ContestComboSets {
  @Field(type => ContestComboDetail, { nullable: true })
  normal: ContestComboDetail | null;

  @Field(type => ContestComboDetail, { nullable: true })
  super: ContestComboDetail | null;
}

@ObjectType()
export class Move {
  @Field(type => Int, { nullable: true })
  accuracy: number | null;

  @Field(type => ContestComboSets, { nullable: true })
  contest_combos: ContestComboSets | null;

  @Field(type => APIResource, { nullable: true })
  contest_effect: APIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  contest_type: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  damage_class: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  effect_chance: number | null;

  @Field(type => [AbilityEffectChange], { nullable: true })
  effect_changes: [AbilityEffectChange] | null;

  @Field(type => [VerboseEffect], { nullable: true })
  effect_entries: [VerboseEffect] | null;

  @Field(type => [MoveFlavorText], { nullable: true })
  flavor_text_entries: [MoveFlavorText] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  generation: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  learned_by_pokemon: [NamedAPIResource] | null;

  @Field(type => [MachineVersionDetail], { nullable: true })
  machines: [MachineVersionDetail] | null;

  @Field(type => MoveMetaData, { nullable: true })
  meta: MoveMetaData | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [PastMoveStatValues], { nullable: true })
  past_values: [PastMoveStatValues] | null;

  @Field(type => Int, { nullable: true })
  power: number | null;

  @Field(type => Int, { nullable: true })
  pp: number | null;

  @Field(type => Int, { nullable: true })
  priority: number | null;

  @Field(type => [MoveStatChange], { nullable: true })
  stat_changes: [MoveStatChange] | null;

  @Field(type => APIResource, { nullable: true })
  super_contest_effect: APIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  target: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  type: NamedAPIResource | null;
}

@ObjectType()
export class MoveAilment {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  moves: [NamedAPIResource] | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}

@ObjectType()
export class MoveBattleStyle {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}

@ObjectType()
export class MoveCategory {
  @Field(type => [Description], { nullable: true })
  descriptions: [Description] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  moves: [NamedAPIResource] | null;

  @Field(type => String, { nullable: true })
  name: string | null;
}

@ObjectType()
export class MoveDamageClass {
  @Field(type => [Description], { nullable: true })
  descriptions: [Description] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  moves: [NamedAPIResource] | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}

@ObjectType()
class MoveFlavorText {
  @Field(type => String, { nullable: true })
  flavor_text: string | null;

  @Field(type => NamedAPIResource, { nullable: true })
  language: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version_group: NamedAPIResource | null;
}

@ObjectType()
export class MoveLearnMethod {
  @Field(type => [Description], { nullable: true })
  descriptions: [Description] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  version_groups: [NamedAPIResource] | null;
}

@ObjectType()
class MoveMetaData {
  @Field(type => NamedAPIResource, { nullable: true })
  ailment: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  ailment_chance: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  category: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  crit_rate: number | null;

  @Field(type => Int, { nullable: true })
  drain: number | null;

  @Field(type => Int, { nullable: true })
  flinch_chance: number | null;

  @Field(type => Int, { nullable: true })
  healing: number | null;

  @Field(type => Int, { nullable: true })
  max_hits: number | null;

  @Field(type => Int, { nullable: true })
  max_turns: number | null;

  @Field(type => Int, { nullable: true })
  min_hits: number | null;

  @Field(type => Int, { nullable: true })
  min_turns: number | null;

  @Field(type => Int, { nullable: true })
  stat_chance: number | null;
}

@ObjectType()
class MoveStatChange {
  @Field(type => Int, { nullable: true })
  change: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  stat: NamedAPIResource | null;
}

@ObjectType()
export class MoveTarget {
  @Field(type => [Description], { nullable: true })
  descriptions: [Description] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  moves: [NamedAPIResource] | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}

@ObjectType()
class PastMoveStatValues {
  @Field(type => Int, { nullable: true })
  accuracy: number | null;

  @Field(type => Int, { nullable: true })
  effect_chance: number | null;

  @Field(type => [VerboseEffect], { nullable: true })
  effect_entries: [VerboseEffect] | null;

  @Field(type => Int, { nullable: true })
  power: number | null;

  @Field(type => Int, { nullable: true })
  pp: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  type: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version_group: NamedAPIResource | null;
}
