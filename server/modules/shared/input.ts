import { Field, InputType } from "type-graphql";

@InputType()
export class PaginationInput {
  @Field(type => String)
  limit: string;
  @Field(type => String)
  offset: string;
}
