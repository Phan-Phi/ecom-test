import { get, isEmpty } from "lodash";
import useSWR, { KeyedMutator } from "swr";
import { useDebounce, usePrevious } from "react-use";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Grid, Typography, Stack, styled, Box, Select, MenuItem } from "@mui/material";

import {
  Divider,
  IconTrash,
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
import { useMedia } from "hooks";
import axios from "axios.config";
import { transformUrl } from "utils";
import { useCart } from "contexts/CartContext";
import { useNotification } from "hooks/useNotification";
import { CART_IMG_RATIO, DEFAULT_IMAGE } from "constant";
import { CART_LINES_API, PRODUCTS_VARIANTS_UNITS_API } from "apis";

type CartItemProps = {
  id: number;
  variantUrl: string;
  initQuantity: number;
  unitUrl: string | null;
  mutate: KeyedMutator<ResponseType<I_CART_LINES>>;
  setLoadingProduct: any;
  cartData: I_CART_LINES[];
};

export interface I_UNIT_ITEM_EXTENDS extends I_UNIT_ITEM {
  image: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function CartItem(props: CartItemProps) {
  const { initQuantity, unitUrl, variantUrl, id, mutate, setLoadingProduct, cartData } =
    props;

  const { isSmDown } = useMedia();
  const { cartKey } = useCart();
  const { enqueueSnackbarWithError, enqueueSnackbarWithSuccess } = useNotification();

  const [listUnits, setListUnits] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(initQuantity);
  // console.log("🚀 ~ CartItem ~ quantity:", quantity);
  const [unitSelected, setUnitSelected] = useState<any>();

  const prevQuantity = usePrevious(quantity);

  const [defaultUnit, setDefaultUnit] = useState<I_UNIT_ITEM_EXTENDS>({
    id: null,
    sku: "",
    unit: "",
    image: "",
    price: "",
    discounted_price: "",
  });

  const { data: dataUnit } = useSWR<I_UNIT>(() => {
    if (!unitUrl) return;

    return unitUrl;
  });
  console.log("🚀 ~ CartItem ~ dataUnit:", dataUnit);

  const { data: dataVariant } = useSWR<I_PRODUCTS_VARIANTS>(() => {
    if (!variantUrl) return;

    return variantUrl;
  });

  console.log("🚀 ~ CartItem ~ dataVariant:", dataVariant);
  const { data: resDataImages } = useSWR<ResponseType<I_PRODUCTS_VARIANTS_IMAGES>>(() => {
    if (!dataVariant) return;

    const imagesUrl = get(dataVariant, "images", "");

    if (!imagesUrl) return;

    return imagesUrl;
  });

  const dataImages = get(resDataImages, "results", []);

  const { data: unitsData } = useSWR<ResponseType<I_UNIT>>(() => {
    if (!dataVariant) return;
    return transformUrl(PRODUCTS_VARIANTS_UNITS_API, {
      variant: dataVariant.id,
      limit: 200,
    });
  });

  useEffect(() => {
    if (!unitsData) return;

    const defaultUnit = get(dataVariant, "unit", "-");

    const transformUnitsData = unitsData.results.map((item) => {
      return {
        id: item.self,
        name: item.unit,
      };
    });

    setListUnits([{ id: "default", name: defaultUnit }, ...transformUnitsData]);
  }, [unitsData, dataVariant]);

  useEffect(() => {
    if (!dataImages) return;

    // Unit
    const unitId = get(dataUnit, "self", "");
    const unitSku = get(dataUnit, "editable_sku", "-");
    const unitUnit = get(dataUnit, "unit", "-");
    const unitPrice = get(dataUnit, "price.incl_tax", "0");
    const unitDiscountedPrice = get(dataUnit, "discounted_price.incl_tax", "0");

    // Default Variant Unit
    const variantSku = get(dataVariant, "editable_sku", "-");
    const variantUnit = get(dataVariant, "unit", "-");
    const variantPrice = get(dataVariant, "price.incl_tax", "0");
    const variantDiscountedPrice = get(dataVariant, "discounted_price.incl_tax", "0");

    const image = get(dataImages, "[0].image.product_list", DEFAULT_IMAGE);

    if (unitUrl) {
      setDefaultUnit({
        id: unitId,
        image: image,
        sku: unitSku,
        unit: unitUnit,
        price: unitPrice,
        discounted_price: unitDiscountedPrice,
      });
      setUnitSelected(unitId);
    } else {
      setDefaultUnit({
        id: null,
        image: image,
        sku: variantSku,
        unit: variantUnit,
        price: variantPrice,
        discounted_price: variantDiscountedPrice,
      });
      setUnitSelected("default");
    }
  }, [dataUnit, unitUrl, dataImages, dataVariant]);

  const [, cancel] = useDebounce(
    () => {
      if (quantity === prevQuantity) return;
      console.log("asdasda");
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

  const handleCheckUnit = useCallback(
    (unitId: string, variantUrl: string) => {
      let _unitId = unitId === "default" ? null : unitId;

      const isExisted = cartData.some((item) => {
        if (_unitId === null) {
          return _unitId === item.unit && variantUrl === item.variant;
        } else {
          return `${BASE_URL}${_unitId}` === item.unit && variantUrl === item.variant;
        }
      });

      return isExisted;
    },

    [cartData]
  );

  const handleDeleteCartLine = useCallback(async (_id: number, _cartKey: string) => {
    try {
      setLoadingProduct(true);

      await axios.delete(`${CART_LINES_API}${_id}?token=${_cartKey}`);
      mutate();
    } catch (error) {
      enqueueSnackbarWithError(error);
    } finally {
      setTimeout(() => {
        setLoadingProduct(false);
      }, 800);
    }
  }, []);

  const handleUpdateUnit = useCallback(
    async (unitId: string, cartId: number) => {
      try {
        // setLoadingProduct(true);
        console.log("asdasdasd");
        let _unitId = unitId === "default" ? null : unitId;
        const variantId = get(dataVariant, "self");

        const { status } = await axios.post(`${CART_LINES_API}?token=${cartKey}`, {
          unit: _unitId,
          variant: variantId,
          quantity: quantity,
        });

        if (status === 201) {
          await axios.delete(`${CART_LINES_API}${cartId}?token=${cartKey}`);
        }

        mutate();
        enqueueSnackbarWithSuccess("Cập nhật sản phẩm thành công");
      } catch (error) {
        enqueueSnackbarWithError(error);
        mutate();
      } finally {
        setTimeout(() => {
          setLoadingProduct(false);
        }, 800);
      }
    },
    [dataVariant, cartKey, dataUnit, quantity]
  );

  const renderUnits = useMemo(() => {
    if (isEmpty(listUnits)) return null;

    return (
      <StyledSelectUnits
        value={unitSelected}
        onChange={(e) => {
          setUnitSelected(e.target.value);
          handleUpdateUnit(e.target.value as string, id);
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              padding: "6px",
            },
          },
          disableScrollLock: true,
        }}
      >
        {listUnits.map((item, index) => {
          return (
            <StyledMenuItem
              key={index}
              value={item.id}
              disabled={handleCheckUnit(item.id as string, variantUrl)}
            >
              {`Quy cách: ${item.name === "" ? "---" : item.name}`}
            </StyledMenuItem>
          );
        })}
      </StyledSelectUnits>
    );
  }, [listUnits, unitSelected, id, variantUrl]);

  const title = get(dataVariant, "name", "-");

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

                {renderUnits}
              </Stack>
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
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

                <WrapperIcon
                  onClick={async () => {
                    await handleDeleteCartLine(id, cartKey as string);
                  }}
                >
                  <IconTrash />
                </WrapperIcon>
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
              <Grid item xs={3} md={2}>
                <ImageRatio
                  ratio={CART_IMG_RATIO}
                  imageProps={{
                    src: defaultUnit.image ? defaultUnit.image : DEFAULT_IMAGE,
                    style: { objectFit: "cover" },
                  }}
                />
              </Grid>

              <Grid item xs={9} md={10}>
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
            <Box>
              <Stack
                gap="12px"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Stack alignItems="flex-end" gap="4px">
                  {renderUnits}

                  {parseFloat(defaultUnit.price) !==
                    parseFloat(defaultUnit.discounted_price) && (
                    <DiscountPrice price={parseFloat(defaultUnit.price)} />
                  )}
                </Stack>
                <WrapperIcon
                  onClick={async () => {
                    await handleDeleteCartLine(id, cartKey as string);
                  }}
                >
                  <IconTrash />
                </WrapperIcon>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      );
    }
  }, [defaultUnit, title, quantity, isSmDown, id, cartKey, renderUnits]);

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

const StyledSelectUnits = styled(Select)(({ theme }) => {
  return {
    width: "150px",
    fontSize: "14px",
    lineHeight: "20px",
    border: "2px solid black",

    "& .MuiSelect-select": {
      padding: "6px 24px 6px 12px!important",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "16px",

      "& .MuiSelect-select": {
        padding: "2px 8px 2px 4px!important",
      },
    },
  };
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => {
  return {
    fontSize: "14px",
    lineHeight: "20px",
    padding: "6px 10px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "14px",
      padding: "0px 10px",
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

const WrapperIcon = styled(Box)(() => {
  return {
    cursor: "pointer",

    ["& .MuiSvgIcon-root:hover"]: {
      opacity: 0.7,
      transition: "all 0.3s ease",
    },
  };
});
