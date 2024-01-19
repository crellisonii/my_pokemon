import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { baseUrl } from "../../constants";
import {
  getAllTypesAPIBuilder,
  getApiError,
  getTypeAPIBuilder,
} from "../../utils";
import { NamedAPIResourceList, PaginationInput } from "../shared";
import { Generation, Pokedex, Version, VersionGroup } from "./game.types";

@Resolver()
export class GamesResolver {
  private generationApi = "generation";
  private pokedexApi = "pokedex";
  private versionApi = "version";
  private versionGroupsApi = "version-group";

  @Query(returns => Generation)
  async getGeneration(@Arg("nameId") input: string): Promise<Generation> {
    console.log(
      `🚀 ~ file: resolver.ts:17 ~ GamesResolver ~ getGeneration ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.generationApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:24 ~ GamesResolver ~ getGeneration ~ url:`,
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
  async getAllGenerations(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:41 ~ GamesResolver ~ getAllGenerations ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.generationApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:49 ~ GamesResolver ~ getAllGenerations ~ url:`,
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

  @Query(returns => Pokedex)
  async getPokedex(@Arg("nameId") input: string): Promise<Pokedex> {
    console.log(
      `🚀 ~ file: resolver.ts:64 ~ GamesResolver ~ getPokedex ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.pokedexApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:71 ~ GamesResolver ~ getPokedex ~ url:`,
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
  async getAllPokedexes(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:88 ~ GamesResolver ~ getAllPokedexes ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.pokedexApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:96 ~ GamesResolver ~ getAllPokedexes ~ url:`,
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

  @Query(returns => Version)
  async getVersion(@Arg("nameId") input: string): Promise<Version> {
    console.log(
      `🚀 ~ file: resolver.ts:111 ~ GamesResolver ~ getVersion ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.versionApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:118 ~ GamesResolver ~ getVersion ~ url:`,
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
  async getAllVersions(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:135 ~ GamesResolver ~ getAllVersions ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.versionApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:143 ~ GamesResolver ~ getAllVersions ~ url:`,
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

  @Query(returns => VersionGroup)
  async getVersionGroup(@Arg("nameId") input: string): Promise<VersionGroup> {
    console.log(
      `🚀 ~ file: resolver.ts:158 ~ GamesResolver ~ getVersionGroup ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.versionGroupsApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:165 ~ GamesResolver ~ getVersionGroup ~ url:`,
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
  async getAllVersionGroups(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:182 ~ GamesResolver ~ getAllVersionGroups ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.versionGroupsApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:190 ~ GamesResolver ~ getAllVersionGroups ~ url:`,
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
