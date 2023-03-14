import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { baseUrl } from "../../constants";
import {
  getAllTypesAPIBuilder,
  getApiError,
  getTypeAPIBuilder,
} from "../../utils";
import { NamedAPIResourceList, PaginationInput } from "../shared";
import { EvolutionChain, EvolutionTrigger } from "./evolution.types";

@Resolver()
export class EvolutionResolver {
  evolutionChainUrl = "evolution-chain";
  evolutionTriggerUrl = "evolution-trigger";

  @Query(returns => EvolutionChain)
  async getEvolutionChain(@Arg("id") input: string): Promise<EvolutionChain> {
    console.log(
      `🚀 ~ file: resolver.ts:11 ~ EvolutionResolver ~ getEvolutionChain ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.evolutionChainUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:17 ~ EvolutionResolver ~ getEvolutionChain ~ url:`,
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
  async getAllEvolutionChains(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:31 ~ EvolutionResolver ~ getAllEvolutionChains ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.evolutionChainUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:37 ~ EvolutionResolver ~ getAllEvolutionChains ~ url:`,
        url
      );
      const response = await axios(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(error);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => EvolutionTrigger)
  async getEvolutionTrigger(
    @Arg("nameId") input: string
  ): Promise<EvolutionTrigger> {
    console.log(
      `🚀 ~ file: resolver.ts:48 ~ EvolutionResolver ~ getEvolutionTrigger ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.evolutionTriggerUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:53 ~ EvolutionResolver ~ getEvolutionTrigger ~ url:`,
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
  async getAllEvolutionTriggers(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:64 ~ EvolutionResolver ~ getAllEvolutionTriggers ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.evolutionTriggerUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:70 ~ EvolutionResolver ~ getAllEvolutionTriggers ~ url:`,
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
