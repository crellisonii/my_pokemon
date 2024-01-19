import { PaginationInput } from "../modules";
import { baseUrl } from "../constants";

export const getTypeAPIBuilder = (pathUrl: string, input: string): string => {
  const url = `${baseUrl}${pathUrl}`;
  return `${url}/${input}`;
};

export const getAllTypesAPIBuilder = (
  pathUrl: string,
  input: PaginationInput
): string => {
  const { limit, offset } = input;
  const url = `${baseUrl}${pathUrl}`;
  return `${url}?limit=${limit}&offset=${offset}`;
};
