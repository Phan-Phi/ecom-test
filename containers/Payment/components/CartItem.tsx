import { get } from "lodash";
import { useDebounce, usePrevious } from "react-use";
import useSWR, { KeyedMutator } from "swr";
import React, { useEffect, useMemo, useState } from "react";
import { Grid, Typography, Stack, styled, Box } from "@mui/material";

import {
  Divider,
  ImageRatio,
  DiscountPrice,
  NumberFormatForVND,
  NumberCounterInputSmall,
} from "components";
import { I_UNIT_ITEM } from "containers/Product/ProductDetail";

import {
  I_UNIT,
  ResponseType,
  I_CART_LINES,
  I_PRODUCTS_VARIANTS,
  I_PRODUCTS_VARIANTS_IMAGES,
} from "interfaces";
import axios from "axios.config";
import { useMedia } from "hooks";
import { CART_LINES_API } from "apis";
import { useCart } from "contexts/CartContext";
import { CART_IMG_RATIO, DEFAULT_IMAGE } from "constant";
import { useNotification } from "hooks/useNotification";

type CartItemProps = {
  id: number;
  variantUrl: string;
  initQuantity: number;
  unitUrl: string | null;
  mutate: KeyedMutator<ResponseType<I_CART_LINES>>;
  setLoadingProduct: any;
};

export interface I_UNIT_ITEM_EXTENDS extends I_UNIT_ITEM {
  image: string;
}

export default function CartItem(props: CartItemProps) {
  const { initQuantity, unitUrl, variantUrl, id, mutate, setLoadingProduct } = props;

  const { cartKey } = useCart();
  const { isSmDown } = useMedia();
  const { enqueueSnackbarWithError } = useNotification();

  const [quantity, setQuantity] = useState(initQuantity);
  const [defaultUnit, setDefaultUnit] = useState<I_UNIT_ITEM_EXTENDS>({
    id: null,
    sku: "",
    unit: "",
    image: "",
    price: "",
    discounted_price: "",
  });

  const prevQuantity = usePrevious(quantity);

  const { data: dataUnit } = useSWR<I_UNIT>(() => {
    if (!unitUrl) return;

    return unitUrl;
  });

  const { data: dataVariant } = useSWR<I_PRODUCTS_VARIANTS>(() => {
    if (!variantUrl) return;

    return variantUrl;
  });

  const { data: resDataImages } = useSWR<ResponseType<I_PRODUCTS_VARIANTS_IMAGES>>(() => {
    if (!dataVariant) return;

    const imagesUrl = get(dataVariant, "images", "");

    if (!imagesUrl) return;

    return imagesUrl;
  });

  const dataImages = get(resDataImages, "results", []);

  const title = get(dataVariant, "name", "");

  useEffect(() => {
    if (!dataImages) return;

    // Unit
    const unitId = get(dataUnit, "self", "");
    const unitSku = get(dataUnit, "editable_sku", "");
    const unitUnit = get(dataUnit, "unit", "");
    const unitPrice = get(dataUnit, "price.incl_tax", "");
    const unitDiscountedPrice = get(dataUnit, "discounted_price.incl_tax", "");

    // Default Variant Unit
    const variantSku = get(dataVariant, "editable_sku", "");
    const variantUnit = get(dataVariant, "unit", "");
    const variantPrice = get(dataVariant, "price.incl_tax", "");
    const variantDiscountedPrice = get(dataVariant, "discounted_price.incl_tax", "");

    const image = get(dataImages, "[0].image.product_list", DEFAULT_IMAGE);

    if (unitUrl) {
      setDefaultUnit({
        id: unitId,
        sku: unitSku,
        unit: unitUnit,
        price: unitPrice,
        discounted_price: unitDiscountedPrice,
        image: image,
      });
    } else {
      setDefaultUnit({
        id: null,
        sku: variantSku,
        unit: variantUnit,
        price: variantPrice,
        discounted_price: variantDiscountedPrice,
        image: image,
      });
    }
  }, [dataUnit, unitUrl, dataImages, dataVariant]);

  const [, cancel] = useDebounce(
    () => {
      if (quantity === prevQuantity) return;

      async function updateQuantity() {
        try {
          setLoadingProduct(true);

          await axios.patch(`${CART_LINES_API}${id}?token=${cartKey}`, { quantity });
          mutate();
        } catch (error) {
          enqueueSnackbarWithError(error);
        } finally {
          setTimeout(() => {
            setLoadingProduct(false);
          }, 800);
        }
      }
      updateQuantity();
    },
    800,
    [quantity, id, prevQuantity]
  );

  const renderLayout = useMemo(() => {
    if (isSmDown) {
      return (
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <ImageRatio
              ratio={CART_IMG_RATIO}
              imageProps={{
                src: defaultUnit.image ? defaultUnit.image : DEFAULT_IMAGE,
                style: { objectFit: "cover", paddingRight: "12px" },
              }}
            />
          </Grid>
          <Grid item xs={9}>
            <Stack gap="4px">
              <StyledTitle>{title}</StyledTitle>

              <StyledSKU>{defaultUnit.sku}</StyledSKU>

              <Stack
                alignItems="center"
                flexDirection="row"
                justifyContent="space-between"
              >
                <NumberFormatForVND value={parseFloat(defaultUnit.discounted_price)} />

                {parseFloat(defaultUnit.price) !==
                  parseFloat(defaultUnit.discounted_price) && (
                  <DiscountPrice price={parseFloat(defaultUnit.price)} />
                )}
              </Stack>

              <Stack
                gap="12px"
                alignItems="center"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Box width="50%">
                  <NumberCounterInputSmall value={quantity} onValueChange={setQuantity} />
                </Box>

                <StyledUnit>{`Quy cách: ${
                  defaultUnit.unit ? defaultUnit.unit : "---"
                }`}</StyledUnit>
              </Stack>

              <Stack gap="2px" className="total" flexDirection="row" alignItems="center">
                <StyledTitleOfTotal>Thành tiền:</StyledTitleOfTotal>

                <NumberFormatForVND
                  value={parseFloat(defaultUnit.discounted_price) * quantity}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Grid container alignItems="center">
              <Grid item xs={3} md={3}>
                <ImageRatio
                  ratio={CART_IMG_RATIO}
                  imageProps={{
                    src: defaultUnit.image ? defaultUnit.image : DEFAULT_IMAGE,
                    style: { objectFit: "cover" },
                  }}
                />
              </Grid>

              <Grid item xs={9} md={9}>
                <Stack gap="4px" paddingLeft="16px">
                  <StyledTitle>{title}</StyledTitle>

                  <StyledSKU>{defaultUnit.sku}</StyledSKU>

                  <NumberFormatForVND value={parseFloat(defaultUnit.discounted_price)} />

                  <Box width="100px">
                    <NumberCounterInputSmall
                      value={quantity}
                      onValueChange={setQuantity}
                    />
                  </Box>

                  <Stack
                    gap="2px"
                    className="total"
                    flexDirection="row"
                    alignItems="center"
                  >
                    <StyledTitleOfTotal>Thành tiền:</StyledTitleOfTotal>

                    <NumberFormatForVND
                      value={parseFloat(defaultUnit.discounted_price) * quantity}
                    />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Stack
              gap="12px"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Stack alignItems="flex-end" gap="4px">
                <StyledUnit>{`Quy cách: ${
                  defaultUnit.unit ? defaultUnit.unit : "---"
                }`}</StyledUnit>

                {parseFloat(defaultUnit.price) !==
                  parseFloat(defaultUnit.discounted_price) && (
                  <DiscountPrice price={parseFloat(defaultUnit.price)} />
                )}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      );
    }
  }, [id, title, cartKey, isSmDown, quantity, defaultUnit, setQuantity]);

  return (
    <Wrapper>
      {renderLayout}

      <Divider />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(({ theme }) => {
  return {
    ["& .number_for_vnd"]: {
      ...theme.typography.paraSmall,
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: 400,

      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        lineHeight: "20px",
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        lineHeight: "18px",
      },
    },

    ["& .discount_price"]: {
      fontSize: "16px !important",
      lineHeight: "22px !important",
      fontWeight: 400,
      color: "#242424",

      [theme.breakpoints.down("md")]: {
        fontSize: "14px !important",
        lineHeight: "20px !important",
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: "12px !important",
        lineHeight: "18px !important",
      },
    },

    ["& .total .number_for_vnd"]: {
      ...theme.typography.paraSmall,
      fontSize: "16px",
      lineHeight: "22px",
      color: "#000 !important",

      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        lineHeight: "20px",
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        lineHeight: "18px",
      },
    },
  };
});

const StyledTitleOfTotal = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraSmall,
    fontSize: "16px",
    lineHeight: "22px",
    color: "#000",

    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "20px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "18px",
    },
  };
});

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraMedium,

    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "20px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "16px",
    },

    overflow: "hidden",
    WebkitLineClamp: 1,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",

    color: theme.palette.common.black,
  };
});

const StyledSKU = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraXSmall,

    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "20px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      lineHeight: "16px",
    },

    color: "#6B7280",
  };
});

const StyledUnit = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraXSmall,

    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "20px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "16px",
    },

    color: "#6B7280",
  };
});
