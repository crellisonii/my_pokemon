import axios from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import {
  getAllTypesAPIBuilder,
  getApiError,
  getTypeAPIBuilder,
} from "../../utils";
import { NamedAPIResourceList, PaginationInput } from "../shared";
import { Machine } from "./machine.types";

@Resolver()
export class MachineResolver {
  private machineUrl = "machine";

  @Query(returns => Machine)
  async getMachine(@Arg("id") input: string): Promise<Machine> {
    console.log(
      `🚀 ~ file: machine.resolver.ts:17 ~ MachineResolver ~ getMachine ~ input:`,
      input
    );

    try {
      const url = getTypeAPIBuilder(this.machineUrl, input);
      console.log(
        `🚀 ~ file: machine.resolver.ts:24 ~ MachineResolver ~ getMachine ~ url:`,
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
  async getAllMachines(
    @Arg("pagination") input: PaginationInput
  ): Promise<NamedAPIResourceList> {
    console.log(
      `🚀 ~ file: machine.resolver.ts:41 ~ MachineResolver ~ getAllMachines ~ input:`,
      input
    );

    try {
      const url = getAllTypesAPIBuilder(this.machineUrl, input);
      console.log(
        `🚀 ~ file: machine.resolver.ts:48 ~ MachineResolver ~ getAllMachines ~ url:`,
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
