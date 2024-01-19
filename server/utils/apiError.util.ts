import { ApiError } from "../interfaces";
import { AxiosError } from "axios";

export const getApiError = (e: unknown): ApiError => {
  const error = e as AxiosError;
  return {
    errorCode: error.code,
    errorMessage: error.message,
    errorStatus: error.response?.status,
  };
};
