import {
  EncounterConditionResource,
  EncounterConditionValueResource,
} from "../named-api-resources";
import { Field, Int, ObjectType } from "type-graphql";

import { Name } from "../shared";

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

  @Field(type => [EncounterConditionValueResource])
  values: [EncounterConditionValueResource];
}

@ObjectType()
export class EncounterConditionValue {
  @Field(type => EncounterConditionResource)
  condition: EncounterConditionResource;

  @Field(type => Int)
  id: number;

  @Field(type => String)
  name: string;

  @Field(type => [Name])
  names: [Name];
}
