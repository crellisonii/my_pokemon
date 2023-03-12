import {
  EvolutionTriggerResource,
  ItemResource,
  LocationResource,
  MoveResource,
  PokemonSpeciesResource,
  TypeResource,
} from "../named-api-resources";
import { Field, Int, ObjectType } from "type-graphql";

import { Name } from "../shared";

@ObjectType()
export class EvolutionDetail {
  @Field(type => Int, { nullable: true })
  gender: number | null;

  @Field(type => ItemResource, { nullable: true })
  held_item: ItemResource | null;

  @Field(type => ItemResource, { nullable: true })
  item: ItemResource | null;

  @Field(type => MoveResource, { nullable: true })
  known_move: MoveResource | null;

  @Field(type => TypeResource, { nullable: true })
  known_move_type: TypeResource | null;

  @Field(type => LocationResource, { nullable: true })
  location: LocationResource | null;

  @Field(type => Int, { nullable: true })
  min_affection: number | null;

  @Field(type => Int, { nullable: true })
  min_beauty: number | null;

  @Field(type => Int, { nullable: true })
  min_happiness: number | null;

  @Field(type => Int, { nullable: true })
  min_level: number | null;

  @Field(type => Boolean, { nullable: true })
  needs_overworld_rain: boolean | null;

  @Field(type => PokemonSpeciesResource, { nullable: true })
  party_species: PokemonSpeciesResource | null;

  @Field(type => TypeResource, { nullable: true })
  party_type: TypeResource | null;

  @Field(type => Int, { nullable: true })
  relative_physical_stats: number | null;

  @Field(type => String, { nullable: true })
  time_of_day: string | null;

  @Field(type => PokemonSpeciesResource, { nullable: true })
  trade_species: PokemonSpeciesResource | null;

  @Field(type => EvolutionTriggerResource, { nullable: true })
  trigger: EvolutionTriggerResource | null;

  @Field(type => Boolean)
  turn_upside_down: boolean | null;
}

@ObjectType()
export class ChainLink {
  @Field(type => Boolean)
  is_baby: boolean | null;

  @Field(type => PokemonSpeciesResource, { nullable: true })
  species: PokemonSpeciesResource | null;

  @Field(type => [EvolutionDetail], { nullable: true })
  evolution_details: [EvolutionDetail] | null;
}

@ObjectType()
export class EvolutionChain {
  @Field(type => ItemResource, { nullable: true })
  baby_trigger_item: ItemResource | null;

  @Field(type => ChainLink)
  chain: ChainLink | null;

  @Field(type => Int, { nullable: true })
  id: number | null;
}

@ObjectType()
export class EvolutionTrigger {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => Name, { nullable: true })
  names: Name | null;

  @Field(type => PokemonSpeciesResource, { nullable: true })
  pokemon_species: PokemonSpeciesResource | null;
}
