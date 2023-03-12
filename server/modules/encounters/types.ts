import { Field, Int, ObjectType } from "type-graphql";
import { Name, NamedAPIResource } from "../shared";

@ObjectType()
export class EncounterMethod {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  name: string;

  @Field(type => [Name])
  names: [Name];

  @Field(type => Int)
  order: number;
}

@ObjectType()
export class EncounterCondition {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  name: string;

  @Field(type => [Name])
  names: [Name];

  @Field(type => [NamedAPIResource])
  values: [NamedAPIResource];
}

@ObjectType()
export class EncounterConditionValue {
  @Field(type => NamedAPIResource)
  condition: NamedAPIResource;

  @Field(type => Int)
  id: number;

  @Field(type => String)
  name: string;

  @Field(type => [Name])
  names: [Name];
}
