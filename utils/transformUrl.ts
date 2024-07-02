import queryString from "query-string";

type Params = [originalUrl: string | undefined, additionalParams?: object];

type FunctionType = (...args: Params) => string;

export const transformUrl: FunctionType = (originalUrl, additionalParams = undefined) => {
  if (originalUrl == undefined) return "";

  let { url, query: params } = queryString.parseUrl(originalUrl);

  params = {
    ...params,
    ...additionalParams,
  };

  const searchParams = queryString.stringify(params, {
    skipEmptyString: true,
    skipNull: true,
  });

  if (searchParams == "") return url;

  return `${url}?${searchParams}`;
};
