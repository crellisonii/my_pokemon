import { Arg, Query, Resolver } from "type-graphql";
import {
  Item,
  ItemAttribute,
  ItemCategory,
  ItemFlingEffect,
  ItemPocket,
} from "./item.types";
import axios from "axios";
import {
  getAllTypesAPIBuilder,
  getApiError,
  getTypeAPIBuilder,
} from "../../utils";
import { NamedAPIResourceList, PaginationInput } from "../shared";

@Resolver()
export class ItemResolver {
  private itemUrl = "item";
  private attributeUrl = "item-attribute";
  private categoryUrl = "item-category";
  private flingEffectUrl = "item-fling-effect";
  private pocketUrl = "item-pocket";

  @Query(returns => Item)
  async getItem(@Arg("nameId") input: string): Promise<Item> {
    console.log(
      `🚀 ~ file: resolver.ts:24 ~ ItemResolver ~ getItem ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.itemUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:31 ~ ItemResolver ~ getItem ~ url:`,
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
  async getAllItems(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:48 ~ ItemResolver ~ getAllItems ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.itemUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:56 ~ ItemResolver ~ getAllItems ~ url:`,
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

  @Query(returns => ItemAttribute)
  async getItemAttribute(@Arg("nameId") input: string): Promise<ItemAttribute> {
    console.log(
      `🚀 ~ file: resolver.ts:71 ~ ItemResolver ~ getItemAttribute ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.attributeUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:78 ~ ItemResolver ~ getItemAttribute ~ url:`,
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
  async getAllItemAttributes(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:95 ~ ItemResolver ~ getAllItemAttributes ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.attributeUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:103 ~ ItemResolver ~ getAllItemAttributes ~ url:`,
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

  @Query(returns => ItemCategory)
  async getItemCategory(@Arg("nameId") input: string): Promise<ItemCategory> {
    console.log(
      `🚀 ~ file: resolver.ts:118 ~ ItemResolver ~ getItemCategory ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.categoryUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:125 ~ ItemResolver ~ getItemCategory ~ url:`,
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
  async getAllItemCategories(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:142 ~ ItemResolver ~ getAllItemCategories ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.categoryUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:150 ~ ItemResolver ~ getAllItemCategories ~ url:`,
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

  @Query(returns => ItemFlingEffect)
  async getItemFlingEffect(
    @Arg("nameId") input: string
  ): Promise<ItemFlingEffect> {
    console.log(
      `🚀 ~ file: resolver.ts:167 ~ ItemResolver ~ getItemFlingEffect ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.flingEffectUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:174 ~ ItemResolver ~ getItemFlingEffect ~ url:`,
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
  async getAllItemFlingEffects(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:191 ~ ItemResolver ~ getAllItemFlingEffects ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.flingEffectUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:199 ~ ItemResolver ~ getAllItemFlingEffects ~ url:`,
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

  @Query(returns => ItemPocket)
  async getItemPocket(@Arg("nameId") input: string): Promise<ItemPocket> {
    console.log(
      `🚀 ~ file: resolver.ts:214 ~ ItemResolver ~ getItemPocket ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.pocketUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:221 ~ ItemResolver ~ getItemPocket ~ url:`,
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
  async getAllItemPockets(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: resolver.ts:238 ~ ItemResolver ~ getAllItemPockets ~ input:`,
      input
    );

    try {
      const { limit, offset } = input;
      const url = getAllTypesAPIBuilder(this.pocketUrl, input);
      console.log(
        `🚀 ~ file: resolver.ts:246 ~ ItemResolver ~ getAllItemPockets ~ url:`,
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
