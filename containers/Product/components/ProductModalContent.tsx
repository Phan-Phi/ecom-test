import useSWR from "swr";
import { get, isEmpty } from "lodash";
import { Box, Grid, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useMemo, useState } from "react";

import { transformUrl } from "utils";
import ProductInfo from "./ProductInfo";
import { DEFAULT_IMAGE } from "constant";
import { I_UNIT_ITEM } from "../ProductDetail";
import CarouselProductDetail from "./CarouselProductDetail";
import { PRODUCTS_API, PRODUCTS_VARIANTS_API, PRODUCTS_VARIANTS_UNITS_API } from "apis";

const LIMIT = 200;

interface Props {
  data: any;
  handleClose: () => void;
}

export default function ProductModalContent({ data, handleClose }: Props) {
  const { img, defaultData } = data;
  const { data: unitsData } = useSWR<any>(
    transformUrl(PRODUCTS_VARIANTS_UNITS_API, {
      variant: defaultData.id,
      limit: LIMIT,
    })
  );

  const { data: productData } = useSWR<any>(
    transformUrl(PRODUCTS_API, {
      ids: defaultData.id,
    })
  );

  const { data: productVariantData } = useSWR<any>(
    transformUrl(`${PRODUCTS_VARIANTS_API}${defaultData.id}`, {})
  );

  const image = get(data, "img.results");
  const title = get(data, "defaultData.name", "");
  const sku = get(data, "defaultData.editable_sku", "");
  const variantId = get(data, "defaultData.self");
  const [listUnit, setListUnit] = useState<I_UNIT_ITEM[]>([]);

  const [imagesCarousel, setImagesCarousel] = useState<string[]>([]);

  useEffect(() => {
    if (image == undefined) return;

    const arrImg = image.map((item: any) => {
      return item.image.product_gallery_2x;
    });

    if (isEmpty(arrImg)) {
      setImagesCarousel([DEFAULT_IMAGE]);
    } else {
      setImagesCarousel(arrImg);
    }
  }, [image]);

  useEffect(() => {
    if (!unitsData || !defaultData) return;

    const _unitsData = get(unitsData, "results");
    const sku = get(defaultData, "editable_sku", "");
    const unit = get(defaultData, "unit", "");
    const price = get(defaultData, "price.incl_tax", "");
    const discountedPrice = get(defaultData, "discounted_price.incl_tax", "");

    const tempArr: I_UNIT_ITEM[] = [
      {
        id: null,
        sku: sku,
        unit: unit,
        price: price,
        discounted_price: discountedPrice,
      },
    ];

    const result = _unitsData.map((item: any) => {
      return {
        id: item.self,
        sku: item.editable_sku,
        unit: item.unit,
        price: item.price.incl_tax,
        discounted_price: item.discounted_price.incl_tax,
      };
    });

    setListUnit([...tempArr, ...result]);
  }, [unitsData, defaultData]);

  const renderProductInfo = useMemo(() => {
    return (
      <ProductInfo
        title={title}
        listUnit={listUnit}
        variantId={variantId}
        variantDetail={productVariantData}
        productAvailableForPurchaseData={get(productData, "results[0]")}
      />
    );
  }, [listUnit, title, productVariantData, variantId, productData]);

  return (
    <Wrapper>
      <WrapperClose onClick={handleClose}>
        <CloseIcon />
      </WrapperClose>

      <WrapperContent>
        <Grid container spacing="24px">
          <Grid item xs={12} md={5}>
            <CarouselProductDetail
              sku={sku}
              name={title}
              imagesCarousel={imagesCarousel}
              disableModalImages={true}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            {renderProductInfo}
          </Grid>
        </Grid>
      </WrapperContent>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    borderRadius: "10px",
    background: theme.palette.common.white,
    zIndex: 99,
  };
});

const WrapperContent = styled(Box)(({ theme }) => {
  return {
    background: theme.palette.common.white,
    width: "75vw",
    maxHeight: "90vh",
    borderRadius: "10px",
    padding: "1.25rem 1.5rem",

    overflowY: "scroll",
    overflowX: "hidden",

    "::-webkit-scrollbar": {
      width: "7px",
    },

    "::-webkit-scrollbar-thumb": {
      background: "grey",
      borderRadius: "10px",
    },

    [theme.breakpoints.down("sm")]: {
      width: "75vw",
      padding: "12px 14px",
    },
  };
});

const WrapperClose = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "-12px",
    right: "-9px",
    zIndex: 99,
    height: "34px",
    background: theme.palette.common.white,
    borderRadius: "20px",
    padding: "0.3rem",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",

    "& .MuiSvgIcon-root": {
      fill: "#EF4444",
    },
  };
});
