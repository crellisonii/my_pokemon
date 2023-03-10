import { Field, Int, ObjectType } from "type-graphql";

import { NumberLiteralTypeAnnotation } from "@babel/types";

@ObjectType()
export class NamedAPIResource {
  @Field(type => String, { nullable: true })
  name: string | NumberLiteralTypeAnnotation;

  @Field(type => String)
  url: string;
}

@ObjectType()
export class Effect {
  @Field(type => String)
  effect: string;

  @Field(type => NamedAPIResource)
  language: NamedAPIResource;
}

@ObjectType()
export class FlavorText {
  @Field(type => String)
  flavor_text: string;

  @Field(type => NamedAPIResource)
  language: NamedAPIResource;

  @Field(type => NamedAPIResource, { nullable: true })
  version: NamedAPIResource | null;
}

@ObjectType()
export class Name {
  @Field(type => NamedAPIResource)
  language: NamedAPIResource;

  @Field(type => String)
  name: string;
}

@ObjectType()
export class NamedAPIResourceList {
  @Field(type => Int)
  count: number;

  @Field(type => String, { nullable: true })
  next: string | null;

  @Field(type => String, { nullable: true })
  previous: string | null;

  @Field(type => [NamedAPIResource])
  results: [NamedAPIResource];
}
