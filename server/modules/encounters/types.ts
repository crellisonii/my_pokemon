import { Field, Int, ObjectType } from "type-graphql";
import { Name, NamedAPIResource } from "../shared";

@ObjectType()
export class EncounterMethod {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => Int, { nullable: true })
  order: number | null;
}

@ObjectType()
export class EncounterCondition {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => [NamedAPIResource], { nullable: true })
  values: [NamedAPIResource] | null;
}

@ObjectType()
export class EncounterConditionValue {
  @Field(type => NamedAPIResource, { nullable: true })
  condition: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}
