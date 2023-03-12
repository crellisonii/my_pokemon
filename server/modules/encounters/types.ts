import {
  EncounterConditionResource,
  EncounterConditionValueResource,
} from "../named-api-resources";
import { Field, Int, ObjectType } from "type-graphql";

import { Name } from "../shared";

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

  @Field(type => [EncounterConditionValueResource], { nullable: true })
  values: [EncounterConditionValueResource] | null;
}

@ObjectType()
export class EncounterConditionValue {
  @Field(type => EncounterConditionResource, { nullable: true })
  condition: EncounterConditionResource | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}
