import { SETTINGS_API } from "apis";
import axios from "axios.config";
import { ParsedUrlQuery } from "querystring";

const prefetchData = async (
  originalUrlList: string[],
  options: {
    locale?: string | undefined;
    params?: ParsedUrlQuery | undefined;
    query?: ParsedUrlQuery;
  }
) => {
  const { locale } = options;

  try {
    const params = {
      fields: "*",
      locale,
    };

    const additionalUrlList = [SETTINGS_API];

    const mergedUrlList = [
      ...(new Set([...originalUrlList, ...additionalUrlList]) as any),
    ];

    const originalResList = [];
    const fallbackList: Record<string, any> = {};

    for await (const res of mergedUrlList.map(async (el) => {
      return axios.get(el).then(({ data }) => {
        return [el, data];
      });
    })) {
      const [key, value] = res;

      if (originalUrlList.includes(key)) {
        originalResList.push(value);
      }

      if (additionalUrlList.includes(key)) {
        fallbackList[key] = value;
      }
    }

    return {
      resList: originalResList,
      fallback: fallbackList,
    };
  } catch (err) {
    throw err;
  }
};

export default prefetchData;
