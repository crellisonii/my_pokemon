import {
  EncounterConditionValueResource,
  EncounterMethodResource,
  GenerationResource,
  LanguageResource,
  NamedAPIResource,
  VersionGroupResource,
  VersionResource,
} from "../named-api-resources";
import { Field, Int, ObjectType } from "type-graphql";

import { APIResource } from "../api-resources";

@ObjectType()
export class Description {
  @Field(type => String, { nullable: true })
  description: string | null;

  @Field(type => LanguageResource, { nullable: true })
  language: LanguageResource | null;
}

@ObjectType()
export class Effect {
  @Field(type => String, { nullable: true })
  effect: string | null;

  @Field(type => LanguageResource, { nullable: true })
  language: LanguageResource | null;
}

@ObjectType()
export class Encounter {
  @Field(type => Int, { nullable: true })
  chance: number | null;

  @Field(type => EncounterConditionValueResource, { nullable: true })
  condition_values: EncounterConditionValueResource | null;

  @Field(type => Int, { nullable: true })
  max_level: number | null;

  @Field(type => EncounterMethodResource, { nullable: true })
  method: EncounterMethodResource | null;

  @Field(type => Int, { nullable: true })
  min_level: number | null;
}

@ObjectType()
export class FlavorText {
  @Field(type => String, { nullable: true })
  flavor_text: string | null;

  @Field(type => LanguageResource, { nullable: true })
  language: LanguageResource | null;

  @Field(type => VersionResource, { nullable: true })
  version: VersionResource | null;
}

@ObjectType()
export class GenerationGameIndex {
  @Field(type => Int, { nullable: true })
  game_index: number | null;

  @Field(type => GenerationResource, { nullable: true })
  generation: GenerationResource | null;
}

@ObjectType()
export class MachineVersionDetail {
  @Field(type => APIResource, { nullable: true })
  machine: APIResource | null;

  @Field(type => VersionGroupResource, { nullable: true })
  version_group: VersionGroupResource | null;
}

@ObjectType()
export class Name {
  @Field(type => LanguageResource, { nullable: true })
  language: LanguageResource | null;

  @Field(type => String, { nullable: true })
  name: string | null;
}

@ObjectType()
export class NamedAPIResourceList {
  @Field(type => Int, { nullable: true })
  count: number | null;

  @Field(type => String, { nullable: true })
  next: string | null;

  @Field(type => String, { nullable: true })
  previous: string | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  results: [NamedAPIResource] | null;
}

@ObjectType()
export class VerboseEffect {
  @Field(type => String, { nullable: true })
  effect: string | null;

  @Field(type => LanguageResource, { nullable: true })
  language: LanguageResource | null;

  @Field(type => String, { nullable: true })
  short_effect: string | null;
}

@ObjectType()
export class VersionEncounterDetail {
  @Field(type => [Encounter], { nullable: true })
  encounter_details: [Encounter] | null;

  @Field(type => Int, { nullable: true })
  max_chance: number | null;

  @Field(type => VersionResource, { nullable: true })
  version: VersionResource | null;
}

@ObjectType()
export class VersionGameIndex {
  @Field(type => Int, { nullable: true })
  game_index: number | null;

  @Field(type => VersionResource, { nullable: true })
  version: VersionResource | null;
}

@ObjectType()
export class VersionGroupFlavorText {
  @Field(type => LanguageResource, { nullable: true })
  language: LanguageResource | null;

  @Field(type => String, { nullable: true })
  text: string | null;

  @Field(type => VersionGroupResource, { nullable: true })
  version_group: VersionGroupResource | null;
}
