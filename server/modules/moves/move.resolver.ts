import { Arg, Query, Resolver } from "type-graphql";
import {
  getAllTypesAPIBuilder,
  getApiError,
  getTypeAPIBuilder,
} from "../../utils";
import {
  Move,
  MoveAilment,
  MoveBattleStyle,
  MoveCategory,
  MoveDamageClass,
  MoveLearnMethod,
  MoveTarget,
} from "./move.types";
import axios from "axios";
import { NamedAPIResourceList, PaginationInput } from "../shared";

@Resolver()
export class MoveResolver {
  private moveUrl = "move";
  private ailmentUrl = "move-ailment";
  private battleStyleUrl = "move-battle-style";
  private categoryUrl = "move-category";
  private damageClassUrl = "move-damage-class";
  private learnMethodUrl = "move-learn-method";
  private targetUrl = "move-target";

  @Query(returns => Move)
  async getMove(@Arg("nameId") input: string): Promise<Move> {
    console.log(
      `🚀 ~ file: move.resolver.ts:30 ~ MoveResolver ~ getMove ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.moveUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:38 ~ MoveResolver ~ getMove ~ url:`,
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
  async getAllMoves(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: move.resolver.ts:55 ~ MoveResolver ~ getAllMoves ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.moveUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:62 ~ MoveResolver ~ getAllMoves ~ url:`,
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

  @Query(returns => MoveAilment)
  async getMoveAilment(@Arg("nameId") input: string): Promise<MoveAilment> {
    console.log(
      `🚀 ~ file: move.resolver.ts:77 ~ MoveResolver ~ getMoveAilment ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.ailmentUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:84 ~ MoveResolver ~ getMoveAilment ~ url:`,
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
  async getAllMoveAilments(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: move.resolver.ts:101 ~ MoveResolver ~ getAllMoveAilments ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.ailmentUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:108 ~ MoveResolver ~ getAllMoveAilments ~ url:`,
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

  @Query(returns => MoveBattleStyle)
  async getMoveBattleStyle(
    @Arg("nameId") input: string
  ): Promise<MoveBattleStyle> {
    console.log(
      `🚀 ~ file: move.resolver.ts:125 ~ MoveResolver ~ getMoveBattleStyle ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.battleStyleUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:132 ~ MoveResolver ~ getMoveBattleStyle ~ url:`,
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
  async getAllMoveBattleStyles(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: move.resolver.ts:149 ~ MoveResolver ~ getAllMoveBattleStyles ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.battleStyleUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:156 ~ MoveResolver ~ getAllMoveBattleStyles ~ url:`,
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

  @Query(returns => MoveCategory)
  async getMoveCategory(@Arg("nameId") input: string): Promise<MoveCategory> {
    console.log(
      `🚀 ~ file: move.resolver.ts:171 ~ MoveResolver ~ getMoveCategory ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.categoryUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:178 ~ MoveResolver ~ getMoveCategory ~ url:`,
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
  async getAllMoveCategories(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: move.resolver.ts:195 ~ MoveResolver ~ getAllMoveCategories ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.categoryUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:202 ~ MoveResolver ~ getAllMoveCategories ~ url:`,
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

  @Query(returns => MoveDamageClass)
  async getMoveDamageClass(
    @Arg("nameId") input: string
  ): Promise<MoveDamageClass> {
    console.log(
      `🚀 ~ file: move.resolver.ts:219 ~ MoveResolver ~ getMoveDamageClass ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.damageClassUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:226 ~ MoveResolver ~ getMoveDamageClass ~ url:`,
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
  async getAllMoveDamageClasses(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: move.resolver.ts:243 ~ MoveResolver ~ getAllMoveDamageClasses ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.damageClassUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:250 ~ MoveResolver ~ getAllMoveDamageClasses ~ url:`,
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

  @Query(returns => MoveLearnMethod)
  async getMoveLearnMethod(
    @Arg("nameId") input: string
  ): Promise<MoveLearnMethod> {
    console.log(
      `🚀 ~ file: move.resolver.ts:267 ~ MoveResolver ~ getMoveLearnMethod ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.learnMethodUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:274 ~ MoveResolver ~ getMoveLearnMethod ~ url:`,
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
  async getAllMoveLearnMethods(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: move.resolver.ts:291 ~ MoveResolver ~ getAllMoveLearnMethods ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.learnMethodUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:298 ~ MoveResolver ~ getAllMoveLearnMethods ~ url:`,
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

  @Query(returns => MoveTarget)
  async getMoveTarget(@Arg("nameId") input: string): Promise<MoveTarget> {
    console.log(
      `🚀 ~ file: move.resolver.ts:313 ~ MoveResolver ~ getMoveTarget ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.targetUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:320 ~ MoveResolver ~ getMoveTarget ~ url:`,
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
  async getAllMoveTargets(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: move.resolver.ts:337 ~ MoveResolver ~ getAllMoveTargets ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.targetUrl, input);
      console.log(
        `🚀 ~ file: move.resolver.ts:344 ~ MoveResolver ~ getAllMoveTargets ~ url:`,
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
