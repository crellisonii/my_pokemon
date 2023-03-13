import { Field, Int, ObjectType } from "type-graphql";
import { Name, NamedAPIResource } from "../shared";

@ObjectType()
export class EvolutionDetail {
  @Field(type => Int, { nullable: true })
  gender: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  held_item: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  item: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  known_move: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  known_move_type: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  location: NamedAPIResource | null;

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

  @Field(type => NamedAPIResource, { nullable: true })
  party_species: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  party_type: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  relative_physical_stats: number | null;

  @Field(type => String, { nullable: true })
  time_of_day: string | null;

  @Field(type => NamedAPIResource, { nullable: true })
  trade_species: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  trigger: NamedAPIResource | null;

  @Field(type => Boolean)
  turn_upside_down: boolean | null;
}

@ObjectType()
export class ChainLink {
  @Field(type => Boolean)
  is_baby: boolean | null;

  @Field(type => NamedAPIResource, { nullable: true })
  species: NamedAPIResource | null;

  @Field(type => [EvolutionDetail], { nullable: true })
  evolution_details: [EvolutionDetail] | null;

  @Field(type => [ChainLink], { nullable: true })
  evolves_to: [ChainLink];
}

@ObjectType()
export class EvolutionChain {
  @Field(type => NamedAPIResource, { nullable: true })
  baby_trigger_item: NamedAPIResource | null;

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

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  pokemon_species: [NamedAPIResource] | null;
}
