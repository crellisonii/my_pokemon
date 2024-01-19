import { Field, Int, ObjectType } from "type-graphql";
import { Name, NamedAPIResource } from "../shared";

@ObjectType()
export class Berry {
  @Field(type => NamedAPIResource, { nullable: true })
  firmness: NamedAPIResource | null;

  @Field(type => [BerryFlavorMap], { nullable: true })
  flavors: [BerryFlavorMap] | null;

  @Field(type => Int, { nullable: true })
  growth_time: number | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  item: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  max_harvest: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => Int, { nullable: true })
  natural_gift_power: number | null;

  @Field(type => NamedAPIResource, { nullable: true })
  natural_gift_type: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  size: number | null;

  @Field(type => Int, { nullable: true })
  smoothness: number | null;

  @Field(type => Int, { nullable: true })
  soil_dryness: number | null;
}

@ObjectType()
export class BerryFirmness {
  @Field(type => [NamedAPIResource], { nullable: true })
  berries: [NamedAPIResource] | null;

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

  @Field(type => NamedAPIResource, { nullable: true })
  contest_type: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  id: number | null;

  @Field(type => String, { nullable: true })
  name: string | null;

  @Field(type => [Name], { nullable: true })
  names: [Name] | null;
}

@ObjectType()
class BerryFlavorMap {
  @Field(type => NamedAPIResource, { nullable: true })
  flavor: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  potency: number | null;
}

@ObjectType()
class FlavorBerryMap {
  @Field(type => NamedAPIResource, { nullable: true })
  berry: NamedAPIResource | null;

  @Field(type => Int, { nullable: true })
  potency: number | null;
}
