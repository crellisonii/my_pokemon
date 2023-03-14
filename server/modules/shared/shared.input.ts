import { Field, InputType, Int } from "type-graphql";

@InputType()
export class PaginationInput {
  @Field(type => Int, { defaultValue: "20", nullable: true })
  limit: number;

  @Field(type => Int, { defaultValue: "0", nullable: true })
  offset: number;
}
