import { NextSeo, NextSeoProps } from "next-seo";

import { useSettings } from "contexts";

// import { get } from "lodash";
// import { DEFAULT_LOGO } from "constant";

type SEOProps = {
  title?: string;
  favicon?: string;
  seoImage?: string;
  description?: string;
  defaultNextSeo?: NextSeoProps;
  metaTitle?: string;
  metaDesc?: string;
};

const SEO = (props: SEOProps) => {
  const { settings } = useSettings();
  const { store_name, store_description, logo } = settings;

  // const fvIcon = get(logo, "default", DEFAULT_LOGO);
  const fvIcon = "/img/faviconEcom.png";

  const { title, description, defaultNextSeo, seoImage } = props;

  const _seoImage = seoImage || fvIcon || "";
  // console.log("🚀 ~ SEO ~ _seoImage:", _seoImage);

  return (
    <NextSeo
      title={title || store_name || "The Hill Ecom"}
      description={description || store_description || ""}
      openGraph={{
        title: title || store_name || "The Hill Ecom",
        description: description || store_description || "",
        site_name: store_name ? store_name : "The Hill Ecom",
        locale: "vi",
        images: [
          {
            url: _seoImage,
            // url: "/img/thumbnail_seo.jpg",
            alt: store_name ? store_name : "",
            type: "image/jpeg",
          },
        ],
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: fvIcon ? (fvIcon as string) : "",
        },
        {
          rel: "apple-touch-icon",
          href: fvIcon ? (fvIcon as string) : "",
        },
      ]}
      {...defaultNextSeo}
    />
  );
};

export default SEO;
