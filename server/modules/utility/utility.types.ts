import { Field, Int, ObjectType } from "type-graphql";

import { Name } from "../shared";

@ObjectType()
export class Language {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  iso639: string | null;

  @Field(type => String, { nullable: true })
  iso3166: string | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;

  @Field(type => Boolean, { nullable: true })
  official: boolean | null;
}
