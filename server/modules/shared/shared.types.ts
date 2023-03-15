import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class NamedAPIResource {
  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => String, { nullable: true })
  url: string | null;
}

@ObjectType()
export class APIResource {
  @Field(type => String)
  url: string;
}

@ObjectType()
export class Description {
  @Field(type => String, { nullable: true })
  description: string | null;

  @Field(type => NamedAPIResource, { nullable: true })
  language: NamedAPIResource | null;
}

@ObjectType()
export class Effect {
  @Field(type => String, { nullable: true })
  effect: string | null;

  @Field(type => NamedAPIResource, { nullable: true })
  language: NamedAPIResource | null;
}

@ObjectType()
export class Encounter {
  @Field(type => Int, { nullable: true })
  chance: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  condition_values: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  max_level: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  method: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  min_level: number | null;
}

@ObjectType()
export class FlavorText {
  @Field(type => String, { nullable: true })
  flavor_text: string | null;

  @Field(type => NamedAPIResource, { nullable: true })
  language: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version: NamedAPIResource | null;
}

@ObjectType()
export class GenerationGameIndex {
  @Field(type => Int, { nullable: true })
  game_index: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  generation: NamedAPIResource | null;
}

@ObjectType()
export class Language {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  iso639: string | null;

  @Field(type => String, { nullable: true })
  iso3166: string | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => Boolean, { nullable: true })
  official: boolean | null;
}

@ObjectType()
export class MachineVersionDetail {
  @Field(type => APIResource, { nullable: true })
  machine: APIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version_group: NamedAPIResource | null;
}

@ObjectType()
export class Name {
  @Field(type => NamedAPIResource, { nullable: true })
  language: NamedAPIResource | null;

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

  @Field(type => NamedAPIResource, { nullable: true })
  language: NamedAPIResource | null;

  @Field(type => String, { nullable: true })
  short_effect: string | null;
}

@ObjectType()
export class VersionEncounterDetail {
  @Field(type => [Encounter], { nullable: true })
  encounter_details: [Encounter] | null;

  @Field(type => Int, { nullable: true })
  max_chance: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version: NamedAPIResource | null;
}

@ObjectType()
export class VersionGameIndex {
  @Field(type => Int, { nullable: true })
  game_index: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version: NamedAPIResource | null;
}

@ObjectType()
export class VersionGroupFlavorText {
  @Field(type => NamedAPIResource, { nullable: true })
  language: NamedAPIResource | null;

  @Field(type => String, { nullable: true })
  text: string | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version_group: NamedAPIResource | null;
}
