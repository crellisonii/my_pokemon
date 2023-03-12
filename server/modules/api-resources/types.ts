import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class APIResource {
  @Field(type => String)
  url: string;
}

@ObjectType()
export class MachineResource extends APIResource {}

@ObjectType()
export class EvolutionChainResource extends APIResource {}

@ObjectType()
export class ContestEffectResource extends APIResource {}

@ObjectType()
export class SuperContestEffectResource extends APIResource {}

@ObjectType()
export class CharacteristicResource extends APIResource {}
