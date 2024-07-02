import React from "react";
import { GetServerSidePropsContext } from "next";

import {
  PRODUCTS_API,
  PRODUCTS_IMAGES_API,
  PRODUCTS_VARIANTS_API,
  PRODUCTS_CATEGORIES_API,
  PRODUCTS_VARIANTS_UNITS_API,
} from "apis";
import { transformUrl } from "utils";
import { ProductDetail } from "containers";
import prefetchData from "utils/prefetchData";
import { ProductDetailProps } from "containers/Product/ProductDetail";

const LIMIT = 200;

export default function VariantDetailPage(props: ProductDetailProps) {
  return <ProductDetail {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { query } = context;

    const urls = [
      transformUrl(`${PRODUCTS_API}${query.id}`),
      transformUrl(`${PRODUCTS_VARIANTS_API}${query.variantId}`),
      transformUrl(PRODUCTS_IMAGES_API, { variant: query.variantId, limit: LIMIT }),
      transformUrl(PRODUCTS_VARIANTS_UNITS_API, {
        variant: query.variantId,
        limit: LIMIT,
      }),
      transformUrl(PRODUCTS_CATEGORIES_API, {
        product: query.id,
        limit: LIMIT,
      }),
      transformUrl(PRODUCTS_API, {
        recommended_by_product: query.id,
        limit: LIMIT,
      }),
      transformUrl(PRODUCTS_API, {
        ids: query.id,
      }),
    ];

    const { resList, fallback } = await prefetchData(urls, {});

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
