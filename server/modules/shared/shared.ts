import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class NamedAPIResource {
  @Field(type => String)
  name: string;
  @Field(type => String)
  url: string;
}

@ObjectType()
export class NamedAPIResourceList {
  @Field(type => Int)
  count: number;
  @Field(type => String)
  next: string;
  @Field(type => String)
  previous: string;
  @Field(type => [NamedAPIResource])
  results: [NamedAPIResource];
}

@ObjectType()
export class Name {
  @Field(type => NamedAPIResource)
  language: NamedAPIResource;
  @Field(type => String)
  name: string;
}
