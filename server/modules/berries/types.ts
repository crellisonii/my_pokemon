import { Field, Int, ObjectType } from "type-graphql";
import { Name, NamedAPIResource } from "../shared";

@ObjectType()
export class Berry {
  @Field(type => NamedAPIResource)
  firmness: NamedAPIResource;

  @Field(type => [BerryFlavorMap])
  flavors: [BerryFlavorMap];

  @Field(type => Int)
  growth_time: number;

  @Field(type => Int)
  id: number;

  @Field(type => NamedAPIResource)
  item: NamedAPIResource;

  @Field(type => Int)
  max_harvest: number;

  @Field(type => String)
  name: string;

  @Field(type => Int)
  natural_gift_power: number;

  @Field(type => NamedAPIResource)
  natural_gift_type: NamedAPIResource;

  @Field(type => Int)
  size: number;

  @Field(type => Int)
  smoothness: number;

  @Field(type => Int)
  soil_dryness: number;
}

@ObjectType()
export class BerryFirmness {
  @Field(type => [NamedAPIResource])
  berries: [NamedAPIResource];

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

  @Field(type => NamedAPIResource)
  contest_type: NamedAPIResource;

  @Field(type => Int)
  id: number;

  @Field(type => String)
  name: string;

  @Field(type => [Name])
  names: [Name];
}

@ObjectType()
export class BerryFlavorMap {
  @Field(type => NamedAPIResource)
  flavor: NamedAPIResource;

  @Field(type => Int)
  potency: number;
}

@ObjectType()
export class FlavorBerryMap {
  @Field(type => NamedAPIResource)
  berry: NamedAPIResource;

  @Field(type => Int)
  potency: number;
}
