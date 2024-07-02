import { get, isEmpty } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { Container, Grid, Stack } from "@mui/material";

import {
  IPage,
  I_UNIT,
  I_PRODUCTS,
  I_CATEGORIES,
  I_PRODUCT_IMAGES,
  I_PRODUCTS_VARIANTS,
  ResponseProductType,
} from "interfaces";
import { fetchCategoryBreadcrumbs } from "utils";
import { DEFAULT_BREADCRUMBS_FOR_PRODUCT, DEFAULT_IMAGE } from "constant";

import ProductInfo from "./components/ProductInfo";
import { SEO, BreadcrumbsCustom } from "compositions";
import ProductSameCategory from "./ProductSameCategory";
import ProductRecommendation from "./ProductRecommendation";
import CarouselProductDetail from "./components/CarouselProductDetail";

export type ProductDetailProps = IPage<
  [
    I_PRODUCTS,
    I_PRODUCTS_VARIANTS,
    ResponseProductType<I_PRODUCT_IMAGES>,
    ResponseProductType<I_UNIT>,
    ResponseProductType<I_CATEGORIES>,
    ResponseProductType<I_PRODUCTS>
  ]
>;

export interface I_UNIT_ITEM {
  sku: string;
  unit: string;
  price: string;
  discounted_price: string;
  id: string | null;
}

export default function ProductDetail(props: ProductDetailProps) {
  // Get From ServerSide
  const productDetailData = get(props, "initData[0]");
  const variantDetail = get(props, "initData[1]");
  const imagesData = get(props, "initData[2].results");
  const unitsData = get(props, "initData[3].results");
  const categoryData = get(props, "initData[4].results");
  const productRecommendationData = get(props, "initData[5].results", []);
  const productAvailableForPurchaseData = get(props, "initData[6].results[0]");

  // State
  const [imagesCarousel, setImagesCarousel] = useState<string[]>([]);
  const [listUnit, setListUnit] = useState<I_UNIT_ITEM[]>([]);
  const [listBreadcrumbs, setListBreadCrumbs] = useState(DEFAULT_BREADCRUMBS_FOR_PRODUCT);

  // Fields SEO
  const seoTitle = get(productDetailData, "seo_title", "");
  const seoDesc = get(productDetailData, "seo_description", "");
  const seoImg = get(imagesData, "[0].image.product_small_2x", "");

  const title = get(variantDetail, "name", "");
  const sku = get(variantDetail, "editable_sku", "");
  const variantId = get(variantDetail, "self", "");
  const productId = get(productDetailData, "id", 0);
  const categoryId = get(categoryData, "[0].id", "");
  const description = get(productDetailData, "description", "");

  useEffect(() => {
    async function fetch() {
      const result = await fetchCategoryBreadcrumbs(categoryId as string);

      const transformResult = result.map((item) => {
        return {
          title: item.name,
          href: `/?category=${item.id}`,
        };
      });

      setListBreadCrumbs([
        ...DEFAULT_BREADCRUMBS_FOR_PRODUCT,
        ...transformResult,
        {
          title: title,
          href: "/",
        },
      ]);
    }

    fetch();
  }, [categoryId, title]);

  useEffect(() => {
    if (imagesData == undefined) return;

    const arrImg = imagesData.map((item) => {
      return item.image.product_gallery_2x;
    });

    if (isEmpty(arrImg)) {
      setImagesCarousel([DEFAULT_IMAGE]);
    } else {
      setImagesCarousel(arrImg);
    }
  }, [imagesData]);

  useEffect(() => {
    if (!unitsData || !variantDetail) return;

    const sku = get(variantDetail, "editable_sku", "");
    const unit = get(variantDetail, "unit", "");
    const price = get(variantDetail, "price.incl_tax", "");
    const discountedPrice = get(variantDetail, "discounted_price.incl_tax", "");

    const tempArr: I_UNIT_ITEM[] = [
      {
        id: null,
        sku: sku,
        unit: unit,
        price: price,
        discounted_price: discountedPrice,
      },
    ];

    const result = unitsData.map((item) => {
      return {
        id: item.self,
        sku: item.editable_sku,
        unit: item.unit,
        price: item.price.incl_tax,
        discounted_price: item.discounted_price.incl_tax,
      };
    });

    setListUnit([...tempArr, ...result]);
  }, [unitsData, variantDetail]);

  const renderProductInfo = useMemo(() => {
    return (
      <ProductInfo
        title={title}
        listUnit={listUnit}
        variantId={variantId}
        description={description}
        variantDetail={variantDetail}
        productAvailableForPurchaseData={productAvailableForPurchaseData}
      />
    );
  }, [
    title,
    listUnit,
    variantId,
    description,
    variantDetail,
    productAvailableForPurchaseData,
  ]);

  return (
    <Container>
      <SEO title={seoTitle} description={seoDesc} seoImage={seoImg} />

      <BreadcrumbsCustom breadcrumbsData={listBreadcrumbs} />

      <Stack gap="12px">
        <Grid container spacing="24px">
          <Grid item xs={12} md={5}>
            <CarouselProductDetail
              sku={sku}
              name={title}
              imagesCarousel={imagesCarousel}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            {renderProductInfo}
          </Grid>
        </Grid>

        <ProductRecommendation data={productRecommendationData} />

        <ProductSameCategory categoryId={categoryId} productId={productId} />
      </Stack>
    </Container>
  );
}
