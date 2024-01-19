import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import {
  getAllTypesAPIBuilder,
  getApiError,
  getTypeAPIBuilder,
} from "../../utils";
import { NamedAPIResourceList, PaginationInput } from "../shared";
import { Location, LocationArea, PalParkArea, Region } from "./location.type";

@Resolver()
export class LocationResolver {
  private locationUrl = "location";
  private locationAreaUrl = "location-area";
  private palParkAreaUrl = "pal-park-area";
  private regionUrl = "region";

  @Query(returns => Location)
  async getLocation(@Arg("nameId") input: string): Promise<Location> {
    console.log(
      `🚀 ~ file: location.resolver.ts:21 ~ LocationResolver ~ getLocation ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.locationUrl, input);
      console.log(
        `🚀 ~ file: location.resolver.ts:28 ~ LocationResolver ~ getLocation ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(error);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => NamedAPIResourceList)
  async getAllLocations(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: location.resolver.ts:45 ~ LocationResolver ~ getAllLocations ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.locationUrl, input);
      console.log(
        `🚀 ~ file: location.resolver.ts:52 ~ LocationResolver ~ getAllLocations ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(error);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => LocationArea)
  async getLocationArea(@Arg("nameId") input: string): Promise<LocationArea> {
    console.log(
      `🚀 ~ file: location.resolver.ts:67 ~ LocationResolver ~ getLocationArea ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.locationAreaUrl, input);
      console.log(
        `🚀 ~ file: location.resolver.ts:74 ~ LocationResolver ~ getLocationArea ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(error);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => NamedAPIResourceList)
  async getAllLocationAreas(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: location.resolver.ts:91 ~ LocationResolver ~ getAllLocationAreas ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.locationAreaUrl, input);
      console.log(
        `🚀 ~ file: location.resolver.ts:98 ~ LocationResolver ~ getAllLocationAreas ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(error);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => PalParkArea)
  async getPalParkArea(@Arg("nameId") input: string): Promise<PalParkArea> {
    console.log(
      `🚀 ~ file: location.resolver.ts:113 ~ LocationResolver ~ getPalParkArea ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.palParkAreaUrl, input);
      console.log(
        `🚀 ~ file: location.resolver.ts:120 ~ LocationResolver ~ getPalParkArea ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(error);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => NamedAPIResourceList)
  async getAllPalParkAreas(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: location.resolver.ts:137 ~ LocationResolver ~ getAllPalParkAreas ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.palParkAreaUrl, input);
      console.log(
        `🚀 ~ file: location.resolver.ts:144 ~ LocationResolver ~ getAllPalParkAreas ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(error);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => Region)
  async getRegion(@Arg("nameId") input: string): Promise<Region> {
    console.log(
      `🚀 ~ file: location.resolver.ts:159 ~ LocationResolver ~ getRegion ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.regionUrl, input);
      console.log(
        `🚀 ~ file: location.resolver.ts:166 ~ LocationResolver ~ getRegion ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(error);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => NamedAPIResourceList)
  async getAllRegions(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: location.resolver.ts:183 ~ LocationResolver ~ getAllRegions ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.regionUrl, input);
      console.log(
        `🚀 ~ file: location.resolver.ts:190 ~ LocationResolver ~ getAllRegions ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(error);
      throw new Error(JSON.stringify(error));
    }
  }
}
