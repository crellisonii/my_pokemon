import {
  BerryFirmnessResource,
  BerryFlavorResource,
  BerryResource,
  ContestTypeResource,
  ItemResource,
  TypeResource,
} from "../named-api-resources";
import { Field, Int, ObjectType } from "type-graphql";

import { Name } from "../shared";

@ObjectType()
export class Berry {
  @Field(type => BerryFirmnessResource, { nullable: true })
  firmness: BerryFirmnessResource | null;

  @Field(type => [BerryFlavorMap], { nullable: true })
  flavors: [BerryFlavorMap] | null;

  @Field(type => Int, { nullable: true })
  growth_time: number | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => ItemResource, { nullable: true })
  item: ItemResource | null;

  @Field(type => Int, { nullable: true })
  max_harvest: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => Int, { nullable: true })
  natural_gift_power: number | null;

  @Field(type => TypeResource, { nullable: true })
  natural_gift_type: TypeResource | null;

  @Field(type => Int, { nullable: true })
  size: number | null;

  @Field(type => Int, { nullable: true })
  smoothness: number | null;

  @Field(type => Int, { nullable: true })
  soil_dryness: number | null;
}

@ObjectType()
export class BerryFirmness {
  @Field(type => [BerryFirmnessResource], { nullable: true })
  berries: [BerryFirmnessResource] | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}

@ObjectType()
export class BerryFlavor {
  @Field(type => [FlavorBerryMap], { nullable: true })
  berries: [FlavorBerryMap] | null;

  @Field(type => ContestTypeResource, { nullable: true })
  contest_type: ContestTypeResource | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}

@ObjectType()
export class BerryFlavorMap {
  @Field(type => BerryFlavorResource, { nullable: true })
  flavor: BerryFlavorResource | null;

  @Field(type => Int, { nullable: true })
  potency: number | null;
}

@ObjectType()
export class FlavorBerryMap {
  @Field(type => BerryResource, { nullable: true })
  berry: BerryResource | null;

  @Field(type => Int, { nullable: true })
  potency: number | null;
}
