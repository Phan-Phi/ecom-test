import React from "react";
import { transformUrl } from "utils";
import { PRODUCTS_API } from "apis";
import { SearchList } from "containers";
import prefetchData from "utils/prefetchData";
import { GetServerSidePropsContext } from "next";

export default function SearchPage() {
  return <SearchList />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const urls = [
      transformUrl(PRODUCTS_API, {
        limit: 1,
        offset: 0,
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
