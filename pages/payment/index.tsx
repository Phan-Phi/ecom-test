import React from "react";
import { Payment } from "containers";
import { PRODUCTS_API } from "apis";
import { transformUrl } from "utils";
import prefetchData from "utils/prefetchData";
import { GetServerSidePropsContext } from "next";

export default function PaymentPage() {
  return <Payment />;
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
