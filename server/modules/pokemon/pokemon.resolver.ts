import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { getAllTypesAPIBuilder, getTypeAPIBuilder } from "../../utils";
import {
  Ability,
  Characteristic,
  EggGroup,
  Gender,
  GrowthRate,
  Nature,
  PokeathlonStat,
  Pokemon,
  PokemonColor,
  PokemonForm,
  PokemonHabitat,
  PokemonShape,
  PokemonSpecies,
  Stat,
  Type,
} from "./pokemon.types";
import { getApiError } from "../../utils/apiError.util";
import { Encounter, NamedAPIResourceList, PaginationInput } from "../shared";

@Resolver()
export class PokemonResolver {
  private abilityUrl = "ability";
  private characteristicUrl = "characteristic";
  private eggGroupUrl = "egg-group";
  private genderUrl = "gender";
  private growthRateUrl = "growth-rate";
  private natureUrl = "nature";
  private pokeathlonStaturl = "pokeathlon-stat";
  private pokemonUrl = "pokemon";
  private pokemonColorUrl = "pokemon-color";
  private pokemonFormUrl = "pokemon-form";
  private pokemonHabitatUrl = "pokemon-habitat";

  private pokemonShapeUrl = "pokemon-shape";
  private pokemonSpeciesUrl = "pokemon-species";
  private statUrl = "stat";
  private typeUrl = "type";

  @Query(returns => Ability)
  async getAbility(@Arg("nameId") input: string): Promise<Ability> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:29 ~ PokemonResolver ~ getAbility ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.abilityUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:36 ~ PokemonResolver ~ getAbility ~ url:`,
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
  async getAllAbilities(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:53 ~ PokemonResolver ~ getAllAbilities ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.abilityUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:60 ~ PokemonResolver ~ getAllAbilities ~ url:`,
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

  @Query(returns => Characteristic)
  async getCharacteristic(@Arg("id") input: string): Promise<Characteristic> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:75 ~ PokemonResolver ~ getCharacteristic ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.characteristicUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:82 ~ PokemonResolver ~ getCharacteristic ~ url:`,
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
  async getAllCharacteristics(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:99 ~ PokemonResolver ~ getAllCharacteristics ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.characteristicUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:106 ~ PokemonResolver ~ getAllCharacteristics ~ url:`,
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

  @Query(returns => EggGroup)
  async getEggGroup(@Arg("nameId") input: string): Promise<EggGroup> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:121 ~ PokemonResolver ~ getEggGroup ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.eggGroupUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:128 ~ PokemonResolver ~ getEggGroup ~ url:`,
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
  async getAllEggGroups(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:145 ~ PokemonResolver ~ getAllEggGroups ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.eggGroupUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:152 ~ PokemonResolver ~ getAllEggGroups ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table();
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => Gender)
  async getGender(@Arg("nameId") input: string): Promise<Gender> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:167 ~ PokemonResolver ~ getGender ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.genderUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:174 ~ PokemonResolver ~ getGender ~ url:`,
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
  async getAllGenders(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:191 ~ PokemonResolver ~ getAllGenders ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.genderUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:198 ~ PokemonResolver ~ getAllGenders ~ url:`,
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

  @Query(returns => GrowthRate)
  async getGrowthRate(@Arg("nameId") input: string): Promise<GrowthRate> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:214 ~ PokemonResolver ~ getGrowthRate ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.growthRateUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:217 ~ PokemonResolver ~ getGrowthRate ~ url:`,
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
  async getAllGrowthRates(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:229 ~ PokemonResolver ~ getAllGrowthRates ~ input:`,
      input
    );
    try {
      const url = getAllTypesAPIBuilder(this.growthRateUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:232 ~ PokemonResolver ~ getAllGrowthRates ~ url:`,
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

  @Query(returns => Nature)
  async getNature(@Arg("nameId") input: string): Promise<Nature> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:244 ~ PokemonResolver ~ getNature ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.natureUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:247 ~ PokemonResolver ~ getNature ~ url:`,
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
  async getAllNatures(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:259 ~ PokemonResolver ~ getAllNatures ~ input:`,
      input
    );
    try {
      const url = getAllTypesAPIBuilder(this.natureUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:262 ~ PokemonResolver ~ getAllNatures ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(e);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => PokeathlonStat)
  async getPokeathlonStat(
    @Arg("nameId") input: string
  ): Promise<PokeathlonStat> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:274 ~ PokemonResolver ~ getPokeathlonStat ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.pokeathlonStaturl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:277 ~ PokemonResolver ~ getPokeathlonStat ~ url:`,
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
  async getAllPokeathlonStats(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:289 ~ PokemonResolver ~ getAllPokeathlonStats ~ input:`,
      input
    );
    try {
      const url = getAllTypesAPIBuilder(this.pokeathlonStaturl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:292 ~ PokemonResolver ~ getAllPokeathlonStats ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(e);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => Pokemon)
  async getPokemon(@Arg("nameId") input: string): Promise<Pokemon> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:304 ~ PokemonResolver ~ getPokemon ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.pokemonUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:307 ~ PokemonResolver ~ getPokemon ~ url:`,
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
  async getAllPokemon(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:319 ~ PokemonResolver ~ getAllPokemon ~ input:`,
      input
    );
    try {
      const url = getAllTypesAPIBuilder(this.pokemonUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:322 ~ PokemonResolver ~ getAllPokemon ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(e);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => PokemonColor)
  async getPokemonColor(@Arg("nameId") input: string): Promise<PokemonColor> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:334 ~ PokemonResolver ~ getPokemonColor ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.pokemonColorUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:337 ~ PokemonResolver ~ getPokemonColor ~ url:`,
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
  async getAllPokemonColors(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:349 ~ PokemonResolver ~ getAllPokemonColors ~ input:`,
      input
    );
    try {
      const url = getAllTypesAPIBuilder(this.pokemonColorUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:352 ~ PokemonResolver ~ getAllPokemonColors ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(e);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => PokemonForm)
  async getPokemonForm(@Arg("nameId") input: string): Promise<PokemonForm> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:447 ~ PokemonResolver ~ getPokemonForm ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.pokemonFormUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:453 ~ PokemonResolver ~ getPokemonForm ~ url:`,
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
  async getAllPokemonForms(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:470 ~ PokemonResolver ~ getAllPokemonForms ~ input:`,
      input
    );
    try {
      const url = getAllTypesAPIBuilder(this.pokemonColorUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:476 ~ PokemonResolver ~ getAllPokemonForms ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(e);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => PokemonHabitat)
  async getPokemonHabitat(
    @Arg("nameId") input: string
  ): Promise<PokemonHabitat> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:447 ~ PokemonResolver ~ getPokemonHabitat ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.pokemonHabitatUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:453 ~ PokemonResolver ~ getPokemonHabitat ~ url:`,
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
  async getAllPokemonHabitats(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:470 ~ PokemonResolver ~ getAllPokemonHabitats ~ input:`,
      input
    );
    try {
      const url = getAllTypesAPIBuilder(this.pokemonHabitatUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:476 ~ PokemonResolver ~ getAllPokemonHabitats ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(e);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => PokemonShape)
  async getPokemonShape(@Arg("nameId") input: string): Promise<PokemonShape> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:447 ~ PokemonResolver ~ getPokemonShape ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.pokemonShapeUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:453 ~ PokemonResolver ~ getPokemonShape ~ url:`,
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
  async getAllPokemonShapes(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:470 ~ PokemonResolver ~ getAllPokemonShapes ~ input:`,
      input
    );
    try {
      const url = getAllTypesAPIBuilder(this.pokemonShapeUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:476 ~ PokemonResolver ~ getAllPokemonShapes ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(e);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => PokemonSpecies)
  async getPokemonSpecies(
    @Arg("nameId") input: string
  ): Promise<PokemonSpecies> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:447 ~ PokemonResolver ~ getPokemonSpecies ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.pokemonSpeciesUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:453 ~ PokemonResolver ~ getPokemonSpecies ~ url:`,
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
  async getAllPokemonSpecies(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:470 ~ PokemonResolver ~ getAllPokemonSpecies ~ input:`,
      input
    );
    try {
      const url = getAllTypesAPIBuilder(this.pokemonSpeciesUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:476 ~ PokemonResolver ~ getAllPokemonSpecies ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(e);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => Stat)
  async getStats(@Arg("nameId") input: string): Promise<Stat> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:447 ~ PokemonResolver ~ getStats ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.statUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:453 ~ PokemonResolver ~ getStats ~ url:`,
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
  async getAllStats(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:470 ~ PokemonResolver ~ getAllStats ~ input:`,
      input
    );
    try {
      const url = getAllTypesAPIBuilder(this.statUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:476 ~ PokemonResolver ~ getAllStats ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(e);
      throw new Error(JSON.stringify(error));
    }
  }

  @Query(returns => Type)
  async getType(@Arg("nameId") input: string): Promise<Type> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:447 ~ PokemonResolver ~ getType ~ input:`,
      input
    );
    try {
      const url = getTypeAPIBuilder(this.typeUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:453 ~ PokemonResolver ~ getType ~ url:`,
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
  async getAllTypes(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: pokemon.resolver.ts:470 ~ PokemonResolver ~ getAllTypes ~ input:`,
      input
    );
    try {
      const url = getAllTypesAPIBuilder(this.typeUrl, input);
      console.log(
        `🚀 ~ file: pokemon.resolver.ts:476 ~ PokemonResolver ~ getAllTypes ~ url:`,
        url
      );
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      const error = getApiError(e);
      console.table(e);
      throw new Error(JSON.stringify(error));
    }
  }
}
