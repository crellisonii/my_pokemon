import { Effect, FlavorText, NamedAPIResource } from "../shared/shared-types";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class ContestEffect {
  @Field(type => Int)
  appeal: number;

  @Field(type => [Effect])
  effect_entries: [Effect];

  @Field(type => [FlavorText])
  flavor_text_entries: [FlavorText];

  @Field(type => Int)
  id: number;

  @Field(type => Int)
  jam: number;
}

@ObjectType()
export class ContestName {
  @Field(type => String)
  color: string;

  @Field(type => NamedAPIResource)
  language: NamedAPIResource;

  @Field(type => String)
  name: string;
}

@ObjectType()
export class ContestType {
  @Field(type => NamedAPIResource)
  berry_flavor: NamedAPIResource;

  @Field(type => Int)
  id: number;

  @Field(type => String)
  name: string;

  @Field(type => [ContestName])
  names: [ContestName];
}

@ObjectType()
export class SuperContestEffect {
  @Field(type => Int)
  appeal: number;

  @Field(type => [FlavorText])
  flavor_text_entries: [FlavorText];

  @Field(type => Int)
  id: number;

  @Field(type => [NamedAPIResource])
  moves: [NamedAPIResource];
}
