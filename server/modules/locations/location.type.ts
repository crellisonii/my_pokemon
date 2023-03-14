import { Field, Int, ObjectType } from "type-graphql";
import {
  GenerationGameIndex,
  Name,
  NamedAPIResource,
  VersionEncounterDetail,
} from "../shared";

@ObjectType()
export class EncounterVersionDetails {
  @Field(type => Int, { nullable: true })
  rate: number;

  @Field(type => NamedAPIResource, { nullable: true })
  version: NamedAPIResource;
}

@ObjectType()
export class EncounterMethodRate {
  @Field(type => NamedAPIResource, { nullable: true })
  encounter_method: NamedAPIResource;

  @Field(type => [EncounterVersionDetails], { nullable: true })
  version_details: [EncounterVersionDetails];
}

@ObjectType()
export class PokemonEncounter {
  @Field(type => NamedAPIResource, { nullable: true })
  pokemon: NamedAPIResource;

  @Field(type => [VersionEncounterDetail], { nullable: true })
  version_details: [VersionEncounterDetail];
}

@ObjectType()
export class Location {
  @Field(type => [NamedAPIResource], { nullable: true })
  areas: [NamedAPIResource];

  @Field(type => [GenerationGameIndex], { nullable: true })
  game_indices: [GenerationGameIndex];

  @Field(type => Int, { nullable: true })
  id: number;

  @Field(type => String, { nullable: true })
  name: string;

  @Field(type => [Name], { nullable: true })
  names: [Name];

  @Field(type => NamedAPIResource, { nullable: true })
  region: NamedAPIResource;
}

@ObjectType()
export class LocationArea {
  @Field(type => [EncounterMethodRate], { nullable: true })
  encounter_method_rates: [EncounterMethodRate];

  @Field(type => Int, { nullable: true })
  game_index: number;

  @Field(type => Int, { nullable: true })
  id: number;

  @Field(type => NamedAPIResource, { nullable: true })
  location: NamedAPIResource;

  @Field(type => String, { nullable: true })
  name: string;

  @Field(type => [Name], { nullable: true })
  names: [Name];

  @Field(type => [PokemonEncounter], { nullable: true })
  pokemon_encounters: [PokemonEncounter];
}

@ObjectType()
export class PalParkEncounterSpecies {
  @Field(type => Int, { nullable: true })
  base_score: number;

  @Field(type => Int, { nullable: true })
  rate: number;

  @Field(type => NamedAPIResource, { nullable: true })
  pokemon_species: NamedAPIResource;
}

@ObjectType()
export class PalParkArea {
  @Field(type => Int, { nullable: true })
  id: number;

  @Field(type => String, { nullable: true })
  name: string;

  @Field(type => [Name], { nullable: true })
  names: [Name];

  @Field(type => [PalParkEncounterSpecies], { nullable: true })
  pokemon_encounters: [PalParkEncounterSpecies];
}

@ObjectType()
export class Region {
  @Field(type => Int, { nullable: true })
  id: number;

  @Field(type => [NamedAPIResource], { nullable: true })
  locations: [NamedAPIResource];

  @Field(type => NamedAPIResource, { nullable: true })
  main_generation: NamedAPIResource;

  @Field(type => String, { nullable: true })
  name: string;

  @Field(type => [Name], { nullable: true })
  names: [Name];

  @Field(type => [NamedAPIResource], { nullable: true })
  pokedexes: [NamedAPIResource];

  @Field(type => [NamedAPIResource], { nullable: true })
  version_groups: [NamedAPIResource];
}
