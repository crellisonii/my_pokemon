import { Field, Int, ObjectType } from "type-graphql";
import {
  GenerationGameIndex,
  Name,
  NamedAPIResource,
  VersionEncounterDetail,
} from "../shared";

@ObjectType()
class EncounterMethodRate {
  @Field(type => NamedAPIResource, { nullable: true })
  encounter_method: NamedAPIResource | null;

  @Field(type => [EncounterVersionDetails], { nullable: true })
  version_details: [EncounterVersionDetails] | null;
}

@ObjectType()
class EncounterVersionDetails {
  @Field(type => Int, { nullable: true })
  rate: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version: NamedAPIResource | null;
}

@ObjectType()
export class Location {
  @Field(type => [NamedAPIResource], { nullable: true })
  areas: [NamedAPIResource] | null;

  @Field(type => [GenerationGameIndex], { nullable: true })
  game_indices: [GenerationGameIndex] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  region: NamedAPIResource | null;
}

@ObjectType()
export class LocationArea {
  @Field(type => [EncounterMethodRate], { nullable: true })
  encounter_method_rates: [EncounterMethodRate] | null;

  @Field(type => Int, { nullable: true })
  game_index: number | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  location: NamedAPIResource | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [PokemonEncounter], { nullable: true })
  pokemon_encounters: [PokemonEncounter] | null;
}

@ObjectType()
export class PalParkArea {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [PalParkEncounterSpecies], { nullable: true })
  pokemon_encounters: [PalParkEncounterSpecies] | null;
}

@ObjectType()
class PalParkEncounterSpecies {
  @Field(type => Int, { nullable: true })
  base_score: number | null;

  @Field(type => Int, { nullable: true })
  rate: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  pokemon_species: NamedAPIResource | null;
}

@ObjectType()
class PokemonEncounter {
  @Field(type => NamedAPIResource, { nullable: true })
  pokemon: NamedAPIResource | null;

  @Field(type => [VersionEncounterDetail], { nullable: true })
  version_details: [VersionEncounterDetail] | null;
}

@ObjectType()
export class Region {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  locations: [NamedAPIResource] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  main_generation: NamedAPIResource | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  pokedexes: [NamedAPIResource] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  version_groups: [NamedAPIResource] | null;
}
