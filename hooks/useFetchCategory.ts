import useSWR from "swr";
import { get } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { transformUrl } from "utils";
import { I_CATEGORIES } from "interfaces";
import { PRODUCTS_CATEGORIES_API } from "apis";
import { ResponseProductType } from "interfaces/UseFetch";

const LIMIT = 100;

export function useFetchCategory() {
  const router = useRouter();

  const parentId = get(router, "query.category");
  const [categoryData, setCategoryData] = useState<I_CATEGORIES[]>([]);

  const { data, isLoading } = useSWR<ResponseProductType<I_CATEGORIES>>(() => {
    if (!parentId) {
      return transformUrl(PRODUCTS_CATEGORIES_API, {
        level: 0,
        limit: LIMIT,
      });
    } else {
      return transformUrl(PRODUCTS_CATEGORIES_API, {
        limit: LIMIT,
        parent: parentId,
      });
    }
  });

  useEffect(() => {
    const result = get(data, "results");

    if (result == undefined) return;

    setCategoryData(result);
  }, [data]);

  return {
    categoryData: categoryData,
    isLoadingCategory: isLoading,
  };
}
