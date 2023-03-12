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

@ObjectType()
export class APIResource {
  @Field(type => String)
  url: string;
}

@ObjectType()
export class Description {
  @Field(type => String)
  description: string;

  @Field(type => LanguageResource)
  language: LanguageResource;
}

@ObjectType()
export class Effect {
  @Field(type => String)
  effect: string;

  @Field(type => LanguageResource)
  language: LanguageResource;
}

@ObjectType()
export class Encounter {
  @Field(type => Int)
  chance: number;

  @Field(type => EncounterConditionValueResource)
  condition_values: EncounterConditionValueResource;

  @Field(type => Int)
  max_level: number;

  @Field(type => EncounterMethodResource)
  method: EncounterMethodResource;

  @Field(type => Int)
  min_level: number;
}

@ObjectType()
export class FlavorText {
  @Field(type => String)
  flavor_text: string;

  @Field(type => LanguageResource)
  language: LanguageResource;

  @Field(type => VersionResource, { nullable: true })
  version: VersionResource | null;
}

@ObjectType()
export class GenerationGameIndex {
  @Field(type => Int)
  game_index: number;

  @Field(type => GenerationResource)
  generation: GenerationResource;
}

@ObjectType()
export class MachineVersionDetail {
  @Field(type => APIResource)
  machine: APIResource;

  @Field(type => VersionGroupResource)
  version_group: VersionGroupResource;
}

@ObjectType()
export class Name {
  @Field(type => LanguageResource)
  language: LanguageResource;

  @Field(type => String)
  name: string;
}

@ObjectType()
export class NamedAPIResourceList {
  @Field(type => Int)
  count: number;

  @Field(type => String, { nullable: true })
  next: string | null;

  @Field(type => String, { nullable: true })
  previous: string | null;

  @Field(type => [NamedAPIResource])
  results: [NamedAPIResource];
}

@ObjectType()
export class VerboseEffect {
  @Field(type => String)
  effect: string;

  @Field(type => LanguageResource)
  language: LanguageResource;

  @Field(type => String)
  short_effect: string;
}

@ObjectType()
export class VersionEncounterDetail {
  @Field(type => [Encounter])
  encounter_details: [Encounter];

  @Field(type => Int)
  max_chance: number;

  @Field(type => VersionResource)
  version: VersionResource;
}

@ObjectType()
export class VersionGameIndex {
  @Field(type => Int)
  game_index: number;

  @Field(type => VersionResource)
  version: VersionResource;
}

@ObjectType()
export class VersionGroupFlavorText {
  @Field(type => LanguageResource)
  language: LanguageResource;

  @Field(type => String)
  text: string;

  @Field(type => VersionGroupResource)
  version_group: VersionGroupResource;
}
