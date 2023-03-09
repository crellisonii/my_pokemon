import { Arg, Query, Resolver } from "type-graphql";
import { baseUrl } from "../../constants";
import { Berry, BerryFirmness, BerryFlavor } from "./types";
import axios from "axios";

@Resolver()
export class BerryResolver {
  berryUrl = "berry";
  firmnessUrl = "berry-firmness";
  flavorUrl = "berry-flavor";

  @Query(returns => Berry)
  async getBerry(@Arg("nameId") input: string): Promise<Berry> {
    console.log(
      `🚀 ~ file: resolver.ts:15 ~ BerryResolver ~ getBerry ~ input:`,
      input
    );
    try {
      const url = `${baseUrl}${this.berryUrl}/${input}`;
      const response = await axios.get(url);
      console.log(
        `🚀 ~ file: resolver.ts:19 ~ BerryResolver ~ getBerry ~ response:`,
        response
      );
      return response.data;
    } catch (e) {
      console.log(
        `🚀 ~ file: resolver.ts:23 ~ BerryResolver ~ getBerry ~ e:`,
        e
      );
      throw new Error(JSON.stringify(e));
    }
  }

  @Query(returns => BerryFirmness)
  async getBerryFirmness(@Arg("nameId") input: string): Promise<BerryFirmness> {
    console.log(
      `🚀 ~ file: resolver.ts:37 ~ BerryResolver ~ getBerryFirmness ~ input:`,
      input
    );
    try {
      const url = `${baseUrl}${this.firmnessUrl}/${input}`;
      const response = await axios.get(url);
      console.log(
        `🚀 ~ file: resolver.ts:41 ~ BerryResolver ~ getBerryFirmness ~ response:`,
        response
      );
      return response.data;
    } catch (e) {
      console.log(
        `🚀 ~ file: resolver.ts:45 ~ BerryResolver ~ getBerryFirmness ~ e:`,
        e
      );
      throw new Error(JSON.stringify(e));
    }
  }

  @Query(returns => BerryFlavor)
  async getBerryFlavor(@Arg("nameId") input: string): Promise<BerryFlavor> {
    console.log(
      `🚀 ~ file: resolver.ts:52 ~ BerryResolver ~ getBerryFlavor ~ input:`,
      input
    );
    try {
      const url = `${baseUrl}${this.flavorUrl}/${input}`;
      const response = await axios.get(url);
      console.log(
        `🚀 ~ file: resolver.ts:56 ~ BerryResolver ~ getBerryFlavor ~ response:`,
        response
      );
      return response.data;
    } catch (e) {
      console.log(
        `🚀 ~ file: resolver.ts:60 ~ BerryResolver ~ getBerryFlavor ~ e:`,
        e
      );
      throw new Error(JSON.stringify(e));
    }
  }
}
