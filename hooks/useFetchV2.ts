import useSWR, { Key, SWRConfiguration } from "swr";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ResponseErrorType } from "interfaces/UseFetch";

function useFetchV2<T, U extends ResponseErrorType = ResponseErrorType>(
  key: Key = undefined,
  config: SWRConfiguration = { refreshInterval: 180000 }
) {
  const [url, setUrl] = useState<Key>(typeof key === "function" ? key() : key);
  const urlRef = useRef<Key>(url);

  const [isFirstFetch, setIsFirstFetch] = useState(true);

  const { data: resData, error, mutate } = useSWR<T, U>(url, config);
  const [data, setData] = useState<T | undefined>(resData);

  const [isLoading, setIsLoading] = useState(resData ? false : true);

  useEffect(() => {
    urlRef.current = url;
  }, [url]);

  useEffect(() => {
    let _key = key;

    if (typeof _key === "function") {
      _key = _key();
    }

    if (_key === urlRef.current) return;

    setIsLoading(true);
    resetData();
    setUrl(key);
  }, [key]);

  const resetData = useCallback(() => {
    setData(undefined);
    ref.current.prevResData = undefined;
  }, []);

  const ref = useRef({
    prevResData: resData,
    mutate,
  });

  useEffect(() => {
    ref.current.mutate = mutate;
  }, [mutate]);

  useEffect(() => {
    if (resData == undefined) return;

    if (ref.current.prevResData == resData) return;

    setData(resData);
    ref.current.prevResData = resData;
    setIsLoading(false);

    if (isFirstFetch) {
      setIsFirstFetch(false);
    }
  }, [resData, isFirstFetch]);

  const refreshData = useCallback(() => {
    return ref.current.mutate();
  }, []);

  const changeUrl = useCallback((newUrl: Key) => {
    setUrl((prevUrl) => {
      if (prevUrl == newUrl) {
        setIsLoading(false);
        return prevUrl;
      }

      resetData();
      setIsLoading(true);
      return newUrl;
    });
  }, []);

  return useMemo(() => {
    return { data, error, isLoading, mutate, refreshData, changeUrl };
  }, [data, error, isLoading]);
}

export type UseFetchType<T, U extends ResponseErrorType = ResponseErrorType> = ReturnType<
  typeof useFetchV2<T, U>
>;

export default useFetchV2;
