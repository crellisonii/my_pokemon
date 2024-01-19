import { Effect, FlavorText, NamedAPIResource } from "../shared/shared.types";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class ContestEffect {
  @Field(type => Int, { nullable: true })
  appeal: number | null;

  @Field(type => [Effect], { nullable: true })
  effect_entries: [Effect] | null;

  @Field(type => [FlavorText], { nullable: true })
  flavor_text_entries: [FlavorText] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => Int, { nullable: true })
  jam: number | null;
}

@ObjectType()
class ContestName {
  @Field(type => String, { nullable: true })
  color: string | null;

  @Field(type => NamedAPIResource, { nullable: true })
  language: NamedAPIResource | null;

  @Field(type => String, { nullable: true })
  name: string | null;
}

@ObjectType()
export class ContestType {
  @Field(type => NamedAPIResource, { nullable: true })
  berry_flavor: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [ContestName], { nullable: true })
  names: [ContestName] | null;
}

@ObjectType()
export class SuperContestEffect {
  @Field(type => Int, { nullable: true })
  appeal: number | null;

  @Field(type => [FlavorText], { nullable: true })
  flavor_text_entries: [FlavorText] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  moves: [NamedAPIResource] | null;
}
