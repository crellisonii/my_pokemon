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
  @Field(type => BerryFirmnessResource)
  firmness: BerryFirmnessResource;

  @Field(type => [BerryFlavorMap])
  flavors: [BerryFlavorMap];

  @Field(type => Int)
  growth_time: number;

  @Field(type => Int)
  id: number;

  @Field(type => ItemResource)
  item: ItemResource;

  @Field(type => Int)
  max_harvest: number;

  @Field(type => String)
  name: string;

  @Field(type => Int)
  natural_gift_power: number;

  @Field(type => TypeResource)
  natural_gift_type: TypeResource;

  @Field(type => Int)
  size: number;

  @Field(type => Int)
  smoothness: number;

  @Field(type => Int)
  soil_dryness: number;
}

@ObjectType()
export class BerryFirmness {
  @Field(type => [BerryFirmnessResource])
  berries: [BerryFirmnessResource];

  @Field(type => Int)
  id: number;

  @Field(type => String)
  name: string;

  @Field(type => [Name])
  names: [Name];
}

@ObjectType()
export class BerryFlavor {
  @Field(type => [FlavorBerryMap])
  berries: [FlavorBerryMap];

  @Field(type => ContestTypeResource)
  contest_type: ContestTypeResource;

  @Field(type => Int)
  id: number;

  @Field(type => String)
  name: string;

  @Field(type => [Name])
  names: [Name];
}

@ObjectType()
export class BerryFlavorMap {
  @Field(type => BerryFlavorResource)
  flavor: BerryFlavorResource;

  @Field(type => Int)
  potency: number;
}

@ObjectType()
export class FlavorBerryMap {
  @Field(type => BerryResource)
  berry: BerryResource;

  @Field(type => Int)
  potency: number;
}
