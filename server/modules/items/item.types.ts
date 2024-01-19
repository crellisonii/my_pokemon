import {
  APIResource,
  Description,
  Effect,
  GenerationGameIndex,
  MachineVersionDetail,
  Name,
  NamedAPIResource,
  VerboseEffect,
  VersionGroupFlavorText,
} from "../shared";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Item {
  @Field(type => [NamedAPIResource], { nullable: true })
  attributes: [NamedAPIResource] | null;

  @Field(type => APIResource, { nullable: true })
  baby_trigger_for: APIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  category: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  cost: number | null;

  @Field(type => [VerboseEffect], { nullable: true })
  effect_entries: [VerboseEffect] | null;

  @Field(type => [VersionGroupFlavorText], { nullable: true })
  flavor_text_entries: [VersionGroupFlavorText] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  fling_effect: number | null;

  @Field(type => Int, { nullable: true })
  fling_power: number | null;

  @Field(type => [GenerationGameIndex], { nullable: true })
  game_indices: [GenerationGameIndex] | null;

  @Field(type => [ItemHolderPokemon], { nullable: true })
  held_by_pokemon: [ItemHolderPokemon] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [MachineVersionDetail], { nullable: true })
  machines: [MachineVersionDetail] | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => ItemSprites, { nullable: true })
  sprites: ItemSprites | null;
}

@ObjectType()
export class ItemAttribute {
  @Field(type => [Description], { nullable: true })
  descriptions: [Description] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  items: [NamedAPIResource] | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}

@ObjectType()
export class ItemCategory {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  items: [NamedAPIResource] | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  pocket: NamedAPIResource | null;
}

@ObjectType()
export class ItemFlingEffect {
  @Field(type => [Effect], { nullable: true })
  effect_entries: [Effect] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  items: [NamedAPIResource] | null;

  @Field(type => String, { nullable: true })
  name: string | null;
}

@ObjectType()
class ItemHolderPokemon {
  @Field(type => NamedAPIResource, { nullable: true })
  pokemon: NamedAPIResource | null;

  @Field(type => [ItemHolderPokemonVersionDetail], { nullable: true })
  version_details: [ItemHolderPokemonVersionDetail] | null;
}

@ObjectType()
class ItemHolderPokemonVersionDetail {
  @Field(type => Int, { nullable: true })
  rarity: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version: NamedAPIResource | null;
}

@ObjectType()
export class ItemPocket {
  @Field(type => [NamedAPIResource], { nullable: true })
  categories: [NamedAPIResource] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}

@ObjectType()
class ItemSprites {
  @Field(type => String, { nullable: true })
  default: string | null;
}
