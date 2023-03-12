import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class NamedAPIResource {
  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => String)
  url: string;
}

@ObjectType()
export class AbilityResource extends NamedAPIResource {}

@ObjectType()
export class BerryResource extends NamedAPIResource {}

@ObjectType()
export class BerryFirmnessResource extends NamedAPIResource {}

@ObjectType()
export class BerryFlavorResource extends NamedAPIResource {}

@ObjectType()
export class ContestTypeResource extends NamedAPIResource {}

@ObjectType()
export class EggGroupResource extends NamedAPIResource {}

@ObjectType()
export class EncounterConditionResource extends NamedAPIResource {}

@ObjectType()
export class EncounterConditionValueResource extends NamedAPIResource {}

@ObjectType()
export class EncounterMethodResource extends NamedAPIResource {}

@ObjectType()
export class EvolutionTriggerResource extends NamedAPIResource {}

@ObjectType()
export class FlingEffectResource extends NamedAPIResource {}

@ObjectType()
export class GenerationResource extends NamedAPIResource {}

@ObjectType()
export class GrowthRateResource extends NamedAPIResource {}

@ObjectType()
export class ItemResource extends NamedAPIResource {}

@ObjectType()
export class ItemAttributeResource extends NamedAPIResource {}

@ObjectType()
export class ItemCategoryResource extends NamedAPIResource {}

@ObjectType()
export class ItemPocketResource extends NamedAPIResource {}

@ObjectType()
export class LanguageResource extends NamedAPIResource {}

@ObjectType()
export class LocationResource extends NamedAPIResource {}

@ObjectType()
export class LocationAreaResource extends NamedAPIResource {}

@ObjectType()
export class MoveResource extends NamedAPIResource {}

@ObjectType()
export class MoveAilmentResource extends NamedAPIResource {}

@ObjectType()
export class MoveBattleStyleResource extends NamedAPIResource {}

@ObjectType()
export class MoveCategoryResource extends NamedAPIResource {}

@ObjectType()
export class MoveDamageClassResource extends NamedAPIResource {}

@ObjectType()
export class MoveLearnMethodResource extends NamedAPIResource {}

@ObjectType()
export class MoveTargetResource extends NamedAPIResource {}

@ObjectType()
export class NatureResource extends NamedAPIResource {}

@ObjectType()
export class PalParkAreaResource extends NamedAPIResource {}

@ObjectType()
export class PokeathlonStatResouce extends NamedAPIResource {}

@ObjectType()
export class PokedexResource extends NamedAPIResource {}

@ObjectType()
export class PokemonResource extends NamedAPIResource {}

@ObjectType()
export class PokemonColorResource extends NamedAPIResource {}

@ObjectType()
export class PokemonFormResource extends NamedAPIResource {}

@ObjectType()
export class PokemonHabitatResource extends NamedAPIResource {}

@ObjectType()
export class PokemonShapeResource extends NamedAPIResource {}

@ObjectType()
export class PokemonSpeciesResource extends NamedAPIResource {}

@ObjectType()
export class RegionResource extends NamedAPIResource {}

@ObjectType()
export class StatResource extends NamedAPIResource {}

@ObjectType()
export class TypeResource extends NamedAPIResource {}

@ObjectType()
export class VersionResource extends NamedAPIResource {}

@ObjectType()
export class VersionGroupResource extends NamedAPIResource {}
