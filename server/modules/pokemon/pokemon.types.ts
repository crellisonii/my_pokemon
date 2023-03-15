import { Effect, NamedAPIResource } from "../shared";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class AbilityEffectChange {
  @Field(type => [Effect], { nullable: true })
  effect_entries: [Effect] | null;

  @Field(type => NamedAPIResource, { nullable: true })
  version_group: NamedAPIResource | null;
}
