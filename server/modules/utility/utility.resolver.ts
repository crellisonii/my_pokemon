import { Arg, Query, Resolver } from "type-graphql";
import { Language } from "./utility.types";
import {
  getAllTypesAPIBuilder,
  getApiError,
  getTypeAPIBuilder,
} from "../../utils";
import axios from "axios";
import { NamedAPIResourceList, PaginationInput } from "../shared";

@Resolver()
export class LanguageResolver {
  private languageUrl = "language";

  @Query(returns => Language)
  async getLanguage(@Arg("nameId") input: string): Promise<Language> {
    console.log(
      `🚀 ~ file: utility.resolver.ts:11 ~ LanguageResolver ~ getLanguage ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.languageUrl, input);
      console.log(
        `🚀 ~ file: utility.resolver.ts:15 ~ LanguageResolver ~ getLanguage ~ url:`,
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
  async getAllLanguages(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: utility.resolver.ts:29 ~ LanguageResolver ~ getAllLanguages ~ input:`,
      input
    );
    try {
      let url = getAllTypesAPIBuilder(this.languageUrl, input);
      console.log(
        `🚀 ~ file: utility.resolver.ts:32 ~ LanguageResolver ~ getAllLanguages ~ url:`,
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
