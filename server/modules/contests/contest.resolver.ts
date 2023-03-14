import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { baseUrl } from "../../constants";
import { getApiError } from "../../helpers";
import { NamedAPIResourceList, PaginationInput } from "../shared";
import {
  ContestEffect,
  ContestType,
  SuperContestEffect,
} from "./contest.types";

@Resolver()
export class ContestResolver {
  contestTypeUrl = "contest-type/";
  contestEffectUrl = "contest-effect/";
  superContestEffectUrl = "super-contest-effect/";

  @Query(returns => ContestType)
  async getContestType(@Arg("nameId") input: string): Promise<ContestType> {
    console.log(
      `🚀 ~ file: resolver.ts:17 ~ ContestResolver ~ getContestType ~ input:`,
      input
    );

    try {
      const url = `${baseUrl}${this.contestTypeUrl}${input}`;
      console.log(
        `🚀 ~ file: resolver.ts:24 ~ ContestResolver ~ getContestType ~ url:`,
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
  async getAllContestTypes(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:40 ~ ContestResolver ~ getAllContestTypes ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = `${baseUrl}${this.contestTypeUrl}?limit=${limit}&offset=${offset}`;
      console.log(
        `🚀 ~ file: resolver.ts:48 ~ ContestResolver ~ getAllContestTypes ~ url:`,
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

  @Query(returns => ContestEffect)
  async getContestEffect(@Arg("id") input: string): Promise<ContestEffect> {
    console.log(
      `🚀 ~ file: resolver.ts:63 ~ ContestResolver ~ getContestEffect ~ input:`,
      input
    );

    try {
      const url = `${baseUrl}${this.contestEffectUrl}${input}`;
      console.log(
        `🚀 ~ file: resolver.ts:70 ~ ContestResolver ~ getContestEffect ~ url:`,
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
  async getAllContestEffects(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:87 ~ ContestResolver ~ getAllContestEffects ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = `${baseUrl}${this.contestEffectUrl}?limit=${limit}&offset=${offset}`;
      console.log(
        `🚀 ~ file: resolver.ts:95 ~ ContestResolver ~ getAllContestEffects ~ url:`,
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

  @Query(returns => SuperContestEffect)
  async getSuperContestEffect(
    @Arg("id") input: string
  ): Promise<SuperContestEffect> {
    console.log(
      `🚀 ~ file: resolver.ts:110 ~ ContestResolver ~ getSuperContestEffect ~ input:`,
      input
    );

    try {
      const url = `${baseUrl}${this.superContestEffectUrl}${input}`;
      console.log(
        `🚀 ~ file: resolver.ts:114 ~ ContestResolver ~ getSuperContestEffect ~ url:`,
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
  async getAllSuperContestEffect(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:126 ~ ContestResolver ~ getAllSuperContestEffect ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = `${baseUrl}${this.superContestEffectUrl}?limit=${limit}&offset=${offset}`;
      console.log(
        `🚀 ~ file: resolver.ts:131 ~ ContestResolver ~ getAllSuperContestEffect ~ url:`,
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
