import { useEffect } from "react";
import { SWRConfiguration } from "swr";
import useFetchBase from "./useFetchBase";
import { ResponseErrorType, ResponseProductType } from "interfaces/UseFetch";

const useFetchProduct = <
  T = any,
  V extends ResponseProductType<T> = ResponseProductType<T>,
  Error = ResponseErrorType
>(
  key?: string,
  options?: SWRConfiguration
) => {
  const {
    resData,
    data,
    setData,
    isValidating,
    setIsLoading,
    setIsDone,
    changeKey,
    isDone,
    isLoading,
    error,
    refreshData,
    fetchRef,
    fetchNextPage,
    fetchPreviousPage,
  } = useFetchBase<T, V, Error>(key, options);

  useEffect(() => {
    if (key == undefined) return;
    if (resData == undefined && isValidating) setIsLoading(true);
    if (isValidating) return;
    if (resData == undefined) return;

    const { next, previous, results } = resData;

    setData(results);
    fetchRef.current.previousPage = previous;
    fetchRef.current.nextPage = next;

    if (next == null) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }

    setIsLoading(false);
  }, [resData, isValidating, key]);

  return {
    data,
    resData,
    error,
    isDone,
    isLoading,
    isValidating,
    changeKey,
    refreshData,
    fetchNextPage,
    fetchPreviousPage,
  };
};
export default useFetchProduct;
