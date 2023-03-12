import {
  BerryFlavorResource,
  LanguageResource,
  MoveResource,
} from "../named-api-resources";
import { Effect, FlavorText } from "../shared/shared-types";
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
export class ContestName {
  @Field(type => String, { nullable: true })
  color: string | null;

  @Field(type => LanguageResource, { nullable: true })
  language: LanguageResource | null;

  @Field(type => String, { nullable: true })
  name: string | null;
}

@ObjectType()
export class ContestType {
  @Field(type => BerryFlavorResource, { nullable: true })
  berry_flavor: BerryFlavorResource | null;

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

  @Field(type => [MoveResource], { nullable: true })
  moves: [MoveResource] | null;
}
