import {
  APIResource,
  Description,
  Effect,
  FlavorText,
  Name,
  NamedAPIResource,
  NamedAPIResourceList,
  VerboseEffect,
  VersionEncounterDetail,
  VersionGameIndex,
} from "../shared";
import { Field, Int, ObjectType } from "type-graphql";

import { GenerationGameIndex } from "../shared/shared.types";

@ObjectType()
export class Ability {
  @Field(type => [AbilityEffectChange], { nullable: true })
  effect_changes: [AbilityEffectChange] | null;

  @Field(type => [VerboseEffect], { nullable: true })
  effect_entries: [VerboseEffect] | null;

  @Field(type => [AbilityFlavorText], { nullable: true })
  flavor_text_entries: [AbilityFlavorText] | null;

  @Field(type => NamedAPIResourceList, { nullable: true })
  generation: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => Boolean, { nullable: true })
  is_main_series: boolean | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [AbilityPokemon], { nullable: true })
  pokemon: [AbilityPokemon] | null;
}

@ObjectType()
export class AbilityEffectChange {
  @Field(type => [Effect], { nullable: true })
  effect_entries: [Effect] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version_group: NamedAPIResource | null;
}

@ObjectType()
class AbilityFlavorText {
  @Field(type => String, { nullable: true })
  flavor_text: string | null;

  @Field(type => NamedAPIResource, { nullable: true })
  language: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version_group: NamedAPIResource | null;
}

@ObjectType()
class AbilityPokemon {
  @Field(type => Boolean, { nullable: true })
  is_hidden: boolean | null;

  @Field(type => NamedAPIResource, { nullable: true })
  pokemon: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  slot: number | null;
}

@ObjectType()
class AwesomeName {
  @Field(type => String, { nullable: true })
  awesome_name: string | null;

  @Field(type => NamedAPIResource, { nullable: true })
  language: NamedAPIResource | null;
}

@ObjectType()
export class Characteristic {
  @Field(type => Int, { nullable: true })
  gene_modulo: number | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [Int], { nullable: true })
  possible_values: [number] | null;
}

@ObjectType()
export class EggGroup {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  pokemon_species: [NamedAPIResource] | null;
}

@ObjectType()
export class Gender {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [PokemonSpeciesGender], { nullable: true })
  pokemon_species_details: [PokemonSpeciesGender] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  required_for_evolution: [NamedAPIResource] | null;
}

@ObjectType()
class Genus {
  @Field(type => String, { nullable: true })
  genus: string | null;

  @Field(type => NamedAPIResource, { nullable: true })
  language: NamedAPIResource | null;
}

@ObjectType()
export class GrowthRate {
  @Field(type => [Description], { nullable: true })
  descriptions: [Description] | null;

  @Field(type => String, { nullable: true })
  formula: string | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [GrowthRateExperienceLevel], { nullable: true })
  levels: [GrowthRateExperienceLevel] | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  pokemon_species: [NamedAPIResource] | null;
}

@ObjectType()
class GrowthRateExperienceLevel {
  @Field(type => Int, { nullable: true })
  experience: number | null;

  @Field(type => Int, { nullable: true })
  level: number | null;
}

@ObjectType()
export class LocationAreaEncounter {
  @Field(type => NamedAPIResource, { nullable: true })
  location_area: NamedAPIResource | null;

  @Field(type => [VersionEncounterDetail], { nullable: true })
  version_details: [VersionEncounterDetail] | null;
}

@ObjectType()
class MoveBattleStylePreference {
  @Field(type => Int, { nullable: true })
  low_hp_preference: number | null;

  @Field(type => Int, { nullable: true })
  high_hp_preference: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  move_battle_style: NamedAPIResource | null;
}

@ObjectType()
class MoveStatAffect {
  @Field(type => Int, { nullable: true })
  change: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  move: NamedAPIResource | null;
}

@ObjectType()
class MoveStatAffectSets {
  @Field(type => [MoveStatAffect], { nullable: true })
  decrease: [MoveStatAffect] | null;

  @Field(type => [MoveStatAffect], { nullable: true })
  increase: [MoveStatAffect] | null;
}

@ObjectType()
export class Nature {
  @Field(type => NamedAPIResource, { nullable: true })
  decreased_stat: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  hates_flavor: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  increased_stat: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  likes_flavor: NamedAPIResource | null;

  @Field(type => [MoveBattleStylePreference], { nullable: true })
  move_battle_style_preferences: [MoveBattleStylePreference] | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [NatureStatChange], { nullable: true })
  pokeathlon_stat_changes: [NatureStatChange] | null;
}

@ObjectType()
class NaturePokeathlonStatAffect {
  @Field(type => Int, { nullable: true })
  max_change: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  nature: NamedAPIResource | null;
}

@ObjectType()
class NaturePokeathlonStatAffectSets {
  @Field(type => [NaturePokeathlonStatAffect], { nullable: true })
  increase: [NaturePokeathlonStatAffect] | null;

  @Field(type => [NaturePokeathlonStatAffect], { nullable: true })
  decrease: [NaturePokeathlonStatAffect] | null;
}

@ObjectType()
class NatureStatAffectSets {
  @Field(type => [NamedAPIResource], { nullable: true })
  decrease: [NamedAPIResource] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  increase: [NamedAPIResource] | null;
}

@ObjectType()
class NatureStatChange {
  @Field(type => Int, { nullable: true })
  max_change: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  pokeathlon_stat: NamedAPIResource | null;
}

@ObjectType()
class PalParkEncounterArea {
  @Field(type => NamedAPIResource, { nullable: true })
  area: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  base_score: number | null;

  @Field(type => Int, { nullable: true })
  rate: number | null;
}

@ObjectType()
export class PokeathlonStat {
  @Field(type => NaturePokeathlonStatAffectSets, { nullable: true })
  affecting_natures: NaturePokeathlonStatAffectSets | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}

@ObjectType()
export class Pokemon {
  @Field(type => [PokemonAbility], { nullable: true })
  abilities: [PokemonAbility] | null;

  @Field(type => Int, { nullable: true })
  base_experience: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  forms: [NamedAPIResource] | null;

  @Field(type => [VersionGameIndex], { nullable: true })
  game_indices: [VersionGameIndex] | null;

  @Field(type => Int, { nullable: true })
  height: number | null;

  @Field(type => [PokemonHeldItem], { nullable: true })
  held_items: [PokemonHeldItem] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => Boolean, { nullable: true })
  is_default: boolean | null;

  @Field(type => String, { nullable: true })
  location_area_encounters: string | null;

  @Field(type => [PokemonMove], { nullable: true })
  moves: [PokemonMove] | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => Int, { nullable: true })
  order: number | null;

  @Field(type => [PokemonTypePast], { nullable: true })
  past_types: [PokemonTypePast] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  species: NamedAPIResource | null;

  @Field(type => PokemonSprites, { nullable: true })
  sprites: PokemonSprites | null;

  @Field(type => [PokemonStat], { nullable: true })
  stats: [PokemonStat] | null;

  @Field(type => [PokemonType], { nullable: true })
  types: [PokemonType] | null;

  @Field(type => Int, { nullable: true })
  weight: number | null;
}

@ObjectType()
class PokemonAbility {
  @Field(type => NamedAPIResource, { nullable: true })
  ability: NamedAPIResource | null;

  @Field(type => Boolean, { nullable: true })
  is_hidden: boolean | null;

  @Field(type => Int, { nullable: true })
  slot: number | null;
}

@ObjectType()
export class PokemonColor {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  pokemon_species: [NamedAPIResource] | null;
}

@ObjectType()
export class PokemonForm {
  @Field(type => String, { nullable: true })
  form_name: string | null;

  @Field(type => [Name], { nullable: true })
  form_names: [Name] | null;

  @Field(type => Int, { nullable: true })
  form_order: number | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => Boolean, { nullable: true })
  is_battle_only: boolean | null;

  @Field(type => Boolean, { nullable: true })
  is_default: boolean | null;

  @Field(type => Boolean, { nullable: true })
  is_mega: boolean | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => Int, { nullable: true })
  order: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  pokemon: NamedAPIResource | null;

  @Field(type => PokemonFormSprites, { nullable: true })
  sprites: PokemonFormSprites | null;

  @Field(type => [PokemonFormType], { nullable: true })
  types: [PokemonFormType] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version_group: NamedAPIResource | null;
}

@ObjectType()
class PokemonFormSprites {
  @Field(type => String, { nullable: true })
  back_default: string | null;

  @Field(type => String, { nullable: true })
  back_shiny: string | null;

  @Field(type => String, { nullable: true })
  front_default: string | null;

  @Field(type => String, { nullable: true })
  front_shiny: string | null;
}

@ObjectType()
class PokemonFormType {
  @Field(type => Int, { nullable: true })
  slot: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  type: NamedAPIResource | null;
}

@ObjectType()
export class PokemonHabitat {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  pokemon_species: [NamedAPIResource] | null;
}

@ObjectType()
class PokemonHeldItem {
  @Field(type => NamedAPIResource, { nullable: true })
  item: NamedAPIResource | null;

  @Field(type => [PokemonHeldItemVersion], { nullable: true })
  version_details: [PokemonHeldItemVersion] | null;
}

@ObjectType()
class PokemonHeldItemVersion {
  @Field(type => Int, { nullable: true })
  rarity: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version: NamedAPIResource | null;
}

@ObjectType()
class PokemonMove {
  @Field(type => NamedAPIResource, { nullable: true })
  move: NamedAPIResource | null;

  @Field(type => [PokemonMoveVersion], { nullable: true })
  version_group_details: [PokemonMoveVersion] | null;
}

@ObjectType()
class PokemonMoveVersion {
  @Field(type => Int, { nullable: true })
  level_learned_at: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  move_learn_method: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version_group: NamedAPIResource | null;
}

@ObjectType()
export class PokemonShape {
  @Field(type => [AwesomeName], { nullable: true })
  awesome_names: [AwesomeName] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  pokemon_species: [NamedAPIResource] | null;
}

@ObjectType()
export class PokemonSpecies {
  @Field(type => Int, { nullable: true })
  base_happiness: number | null;

  @Field(type => Int, { nullable: true })
  capture_rate: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  color: NamedAPIResource | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  egg_groups: [NamedAPIResource] | null;

  @Field(type => APIResource, { nullable: true })
  evolution_chain: APIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  evolves_from_species: NamedAPIResource | null;

  @Field(type => [FlavorText], { nullable: true })
  flavor_text_entries: [FlavorText] | null;

  @Field(type => [Description], { nullable: true })
  form_descriptions: [Description] | null;

  @Field(type => Boolean, { nullable: true })
  forms_switchable: boolean | null;

  @Field(type => Int, { nullable: true })
  gender_rate: number | null;

  @Field(type => [Genus], { nullable: true })
  genera: [Genus] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  generation: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  growth_rate: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  habitat: NamedAPIResource | null;

  @Field(type => Boolean, { nullable: true })
  has_gender_differences: boolean | null;

  @Field(type => Int, { nullable: true })
  hatch_counter: number | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => Boolean, { nullable: true })
  is_baby: boolean | null;

  @Field(type => Boolean, { nullable: true })
  is_legendary: boolean | null;

  @Field(type => Boolean, { nullable: true })
  is_mythical: boolean | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => Int, { nullable: true })
  order: number | null;

  @Field(type => [PalParkEncounterArea], { nullable: true })
  pal_park_encounters: [PalParkEncounterArea] | null;

  @Field(type => [PokemonSpeciesDexEntry], { nullable: true })
  pokedex_numbers: [PokemonSpeciesDexEntry] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  shape: NamedAPIResource | null;

  @Field(type => [PokemonSpeciesVariety], { nullable: true })
  varieties: [PokemonSpeciesVariety] | null;
}

@ObjectType()
class PokemonSpeciesDexEntry {
  @Field(type => Int, { nullable: true })
  entry_number: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  pokedex: NamedAPIResource | null;
}

@ObjectType()
class PokemonSpeciesGender {
  @Field(type => Int, { nullable: true })
  rate: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  pokemon_species: NamedAPIResource | null;
}

@ObjectType()
class PokemonSpeciesVariety {
  @Field(type => Boolean, { nullable: true })
  is_default: boolean | null;

  @Field(type => NamedAPIResource, { nullable: true })
  pokemon: NamedAPIResource | null;
}

@ObjectType()
class PokemonSprites {
  @Field(type => String, { nullable: true })
  back_default: string | null;

  @Field(type => String, { nullable: true })
  back_female: string | null;

  @Field(type => String, { nullable: true })
  back_shiny: string | null;

  @Field(type => String, { nullable: true })
  back_shiny_female: string | null;

  @Field(type => String, { nullable: true })
  front_default: string | null;

  @Field(type => String, { nullable: true })
  front_female: string | null;

  @Field(type => String, { nullable: true })
  front_shiny: string | null;

  @Field(type => String, { nullable: true })
  front_shiny_female: string | null;
}

@ObjectType()
class PokemonStat {
  @Field(type => Int, { nullable: true })
  base_stat: number | null;

  @Field(type => Int, { nullable: true })
  effort: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  stat: NamedAPIResource | null;
}

@ObjectType()
class PokemonType {
  @Field(type => Int, { nullable: true })
  slot: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  type: NamedAPIResource | null;
}

@ObjectType()
class PokemonTypePast {
  @Field(type => NamedAPIResource, { nullable: true })
  generation: NamedAPIResource | null;

  @Field(type => [PokemonType], { nullable: true })
  types: [PokemonType] | null;
}

@ObjectType()
export class Stat {
  @Field(type => MoveStatAffectSets, { nullable: true })
  affecting_moves: MoveStatAffectSets | null;

  @Field(type => NatureStatAffectSets, { nullable: true })
  affecting_natures: NatureStatAffectSets | null;

  @Field(type => [APIResource], { nullable: true })
  characteristics: [APIResource] | null;

  @Field(type => Int, { nullable: true })
  game_index: number | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => Boolean, { nullable: true })
  is_battle_only: boolean | null;

  @Field(type => NamedAPIResource, { nullable: true })
  move_damage_class: NamedAPIResource | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}

@ObjectType()
export class Type {
  @Field(type => TypeRelations, { nullable: true })
  damage_relations: TypeRelations | null;

  @Field(type => [GenerationGameIndex], { nullable: true })
  game_indices: [GenerationGameIndex] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  generation: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  move_damage_class: NamedAPIResource | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  moves: [NamedAPIResource] | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [TypeRelationsPast], { nullable: true })
  past_damage_relations: [TypeRelationsPast] | null;

  @Field(type => [TypePokemon], { nullable: true })
  pokemon: [TypePokemon] | null;
}

@ObjectType()
class TypePokemon {
  @Field(type => NamedAPIResource, { nullable: true })
  pokemon: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  slot: number | null;
}

@ObjectType()
class TypeRelations {
  @Field(type => [NamedAPIResource], { nullable: true })
  double_damage_from: [NamedAPIResource] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  double_damage_to: [NamedAPIResource] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  half_damage_from: [NamedAPIResource] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  half_damage_to: [NamedAPIResource] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  no_damage_from: [NamedAPIResource] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  no_damage_to: [NamedAPIResource] | null;
}

@ObjectType()
class TypeRelationsPast {
  @Field(type => TypeRelations, { nullable: true })
  damage_relations: TypeRelations | null;

  @Field(type => NamedAPIResource, { nullable: true })
  generation: NamedAPIResource | null;
}
