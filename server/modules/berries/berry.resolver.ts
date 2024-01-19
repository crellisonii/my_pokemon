import { Arg, Query, Resolver } from "type-graphql";
import { baseUrl } from "../../constants";
import { Berry, BerryFirmness, BerryFlavor } from "./berry.types";
import axios from "axios";
import { NamedAPIResourceList, PaginationInput } from "../shared";
import {
  getAllTypesAPIBuilder,
  getApiError,
  getTypeAPIBuilder,
} from "../../utils";

@Resolver()
export class BerryResolver {
  private berryUrl = "berry";
  private firmnessUrl = "berry-firmness";
  private flavorUrl = "berry-flavor";

  @Query(returns => Berry)
  async getBerry(@Arg("nameId") input: string): Promise<Berry> {
    console.log(
      `🚀 ~ file: resolver.ts:18 ~ BerryResolver ~ getBerry ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.berryUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:24 ~ BerryResolver ~ getBerry ~ url:`,
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
  async getAllBerries(
    @Arg("pagination")
    input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(`🚀 ~ file: resolver.ts:40 ~ BerryResolver ~ input:`, input);
    try {
      let url = getAllTypesAPIBuilder(this.berryUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:44 ~ BerryResolver ~ getAllBerries ~ url:`,
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

  @Query(returns => BerryFirmness)
  async getBerryFirmness(@Arg("nameId") input: string): Promise<BerryFirmness> {
    console.log(
      `🚀 ~ file: resolver.ts:59 ~ BerryResolver ~ getBerryFirmness ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.firmnessUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:64 ~ BerryResolver ~ getBerryFirmness ~ url:`,
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
  async getAllBerryFirmness(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(`🚀 ~ file: resolver.ts:78 ~ BerryResolver ~ input:`, input);

    try {
      const { limit, offset } = input;
      let url = getAllTypesAPIBuilder(this.firmnessUrl, input);
      console.log(`🚀 ~ file: resolver.ts:81 ~ BerryResolver ~ url:`, url);
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(error);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => BerryFlavor)
  async getBerryFlavor(@Arg("nameId") input: string): Promise<BerryFlavor> {
    console.log(
      `🚀 ~ file: resolver.ts:94 ~ BerryResolver ~ getBerryFlavor ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.flavorUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:99 ~ BerryResolver ~ getBerryFlavor ~ url:`,
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
  async getAllBerryFlavors(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:117 ~ BerryResolver ~ getAllBerryFlavors ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.flavorUrl, input);
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(error);
      throw new Error(JSON.stringify(error));
    }
  }
}
