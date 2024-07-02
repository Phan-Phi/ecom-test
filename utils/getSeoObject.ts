import { get } from "lodash";

const getSeoObject = (props: any) => {
  const title = get(props, "seo_title");
  const seoImage = get(props, "seoImage");
  const description = get(props, "seo_description");

  return {
    title,
    seoImage,
    description,
  };
};

export { getSeoObject };
