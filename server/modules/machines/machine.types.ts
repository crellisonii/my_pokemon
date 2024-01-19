import { Field, Int, ObjectType } from "type-graphql";

import { NamedAPIResource } from "../shared";

@ObjectType()
export class Machine {
  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  item: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  move: NamedAPIResource | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version_group: NamedAPIResource | null;
}
