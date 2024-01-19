import { Field, InputType, Int } from "type-graphql";

@InputType()
export class PaginationInput {
  @Field(type => Int)
  limit: number;

  @Field(type => Int)
  offset: number;
}
