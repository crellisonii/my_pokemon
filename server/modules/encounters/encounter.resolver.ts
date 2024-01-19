import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { baseUrl } from "../../constants";
import {
  getAllTypesAPIBuilder,
  getApiError,
  getTypeAPIBuilder,
} from "../../utils";
import { NamedAPIResourceList, PaginationInput } from "../shared";
import {
  EncounterCondition,
  EncounterConditionValue,
  EncounterMethod,
} from "./encounter.types";

@Resolver()
export class EncounterResolver {
  private methodApi = "encounter-method";
  private conditionApi = "encounter-condition";
  private conditionValueApi = "encounter-condition-value";

  @Query(returns => EncounterMethod)
  async getEncounterMethod(
    @Arg("nameId") input: string
  ): Promise<EncounterMethod> {
    console.log(
      `🚀 ~ file: resolver.ts:22 ~ EncounterResolver ~ getEncounterMethod ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.methodApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:30 ~ EncounterResolver ~ getEncounterMethod ~ url:`,
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
  async getAllEncounterMethods(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:46 ~ EncounterResolver ~ getAllEncounterMethods ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.methodApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:54 ~ EncounterResolver ~ getAllEncounterMethods ~ url:`,
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

  @Query(returns => EncounterCondition)
  async getEncounterCondition(
    @Arg("nameId") input: string
  ): Promise<EncounterCondition> {
    console.log(
      `🚀 ~ file: resolver.ts:71 ~ EncounterResolver ~ getEncounterCondition ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.conditionApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:78 ~ EncounterResolver ~ getEncounterCondition ~ url:`,
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
  async getAllEncounterConditions(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:93 ~ EncounterResolver ~ getAllEncounterConditions ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.conditionApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:101 ~ EncounterResolver ~ getAllEncounterConditions ~ url:`,
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

  @Query(returns => EncounterConditionValue)
  async getEncounterConditionValue(
    @Arg("nameId") input: string
  ): Promise<EncounterConditionValue> {
    console.log(
      `🚀 ~ file: resolver.ts:112 ~ EncounterResolver ~ getEncounterConditionValue ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.conditionValueApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:117 ~ EncounterResolver ~ getEncounterConditionValue ~ url:`,
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
  async getAllEncounterConditionValues(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:128 ~ EncounterResolver ~ getAllEncounterConditionValues ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.conditionValueApi, input);
      console.log(
        `🚀 ~ file: resolver.ts:128 ~ EncounterResolver ~ getAllEncounterConditionValues ~ url:`,
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
