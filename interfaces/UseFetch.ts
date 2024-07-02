import { AxiosError } from "axios";

type ResponseType<T> = {
  next: string | null;
  previous: string | null;
  results: T[];
  count?: number;
};

type ResponseProductType<T> = {
  next: string | null;
  previous: string | null;
  results: T[];
};

type ResponseErrorType<T = any> = AxiosError<T>;

export type { ResponseType, ResponseErrorType, ResponseProductType };
