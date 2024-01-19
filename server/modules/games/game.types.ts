import { Description, Name, NamedAPIResource } from "../shared";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Generation {
  @Field(type => [NamedAPIResource], { nullable: true })
  abilities: [NamedAPIResource] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  main_region: NamedAPIResource | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  moves: [NamedAPIResource] | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  pokemon_species: [NamedAPIResource] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  types: [NamedAPIResource] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  version_groups: [NamedAPIResource] | null;
}

@ObjectType()
export class Pokedex {
  @Field(type => [Description], { nullable: true })
  descriptions: [Description] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => Boolean, { nullable: true })
  is_main_series: boolean | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [PokemonEntry], { nullable: true })
  pokemon_entries: [PokemonEntry] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  region: NamedAPIResource | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  version_groups: [NamedAPIResource] | null;
}

@ObjectType()
class PokemonEntry {
  @Field(type => Int, { nullable: true })
  entry_number: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  pokemon_species: NamedAPIResource | null;
}

@ObjectType()
export class Version {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version_group: NamedAPIResource | null;
}

@ObjectType()
export class VersionGroup {
  @Field(type => NamedAPIResource, { nullable: true })
  generation: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  move_learn_methods: [NamedAPIResource] | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => Int, { nullable: true })
  order: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  pokedexes: [NamedAPIResource] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  regions: [NamedAPIResource] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  versions: [NamedAPIResource] | null;
}
