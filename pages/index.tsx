import { GetServerSidePropsContext } from "next";

import { PRODUCTS_API } from "apis";
import { transformUrl } from "utils";
import { ProductList } from "containers";
import prefetchData from "utils/prefetchData";

export default function HomePage() {
  return <ProductList />;
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
