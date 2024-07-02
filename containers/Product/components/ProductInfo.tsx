import { get } from "lodash";
import { useRouter } from "next/router";
import { useMountedState } from "react-use";
import useSWR, { mutate as mutateGlobal } from "swr";
import { formatPhoneNumber } from "react-phone-number-input";
import { Stack, Typography, styled, Box, Fade } from "@mui/material";
import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";

import UnitItem from "./UnitItem";
import ButtonBuyNow from "./ButtonBuyNow";
import { I_UNIT_ITEM } from "../ProductDetail";
import ButtonAddToCart from "./ButtonAddToCart";
import { DiscountPrice, NumberCounterInput, NumberFormatForVND } from "components";

import { ROUTES } from "routes";
import axios from "axios.config";
import { transformUrl } from "utils";
import { CART_LINES_API } from "apis";
import { useSettings } from "contexts";
import { RenderHTML } from "compositions";
import { useCart } from "contexts/CartContext";
import { REFRESH_INTERVAL_CART } from "constant";
import { useNotification } from "hooks/useNotification";
import { I_CART_LINES, I_PRODUCTS_VARIANTS, ResponseType } from "interfaces";

type ProductInfoProps = {
  listUnit: I_UNIT_ITEM[];
  title: string;
  variantId: string;
  productAvailableForPurchaseData: any;
  variantDetail: I_PRODUCTS_VARIANTS;
  description?: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const TYPE_BUY_NOW = "buyNow";

export default function ProductInfo(props: ProductInfoProps) {
  const {
    title,
    listUnit,
    variantId,
    description,
    variantDetail,
    productAvailableForPurchaseData,
  } = props;

  const availableForPurchase = get(
    productAvailableForPurchaseData,
    "available_for_purchase"
  );
  const [checked, setChecked] = useState(false);
  const trackInventory = get(variantDetail, "track_inventory");
  const inputQuantity = get(variantDetail, "input_quantity", 0);
  const outputQuantity = get(variantDetail, "output_quantity", 0);
  const allocatedQuantity = get(variantDetail, "allocated_quantity", 0);

  const { settings } = useSettings();
  const hotline1 = get(settings, "hotline_2", "");

  const dateNow = Date.now();

  const router = useRouter();
  const { cartKey } = useCart();
  const isMounted = useMountedState();
  const [quantity, setQuantity] = useState(1);
  const { setLoading, enqueueSnackbarWithError, loading, enqueueSnackbarWithSuccess } =
    useNotification();

  const cartLinesUrl = `${CART_LINES_API}?token=${cartKey}`;

  const [selectedUnit, setSelectedUnit] = useState<I_UNIT_ITEM>(listUnit[0]);

  const { data, mutate } = useSWR<ResponseType<I_CART_LINES>>(
    transformUrl(CART_LINES_API, {
      page_size: 200,
      token: cartKey,
    }),
    {
      refreshInterval: REFRESH_INTERVAL_CART,
    }
  );

  useEffect(() => {
    setSelectedUnit(listUnit[0]);
  }, [listUnit]);

  const handleAddToCart = useCallback(
    async (type: string) => {
      try {
        setLoading(true);
        if (!data || !selectedUnit) return;

        const unitUrl = `${BASE_URL}${selectedUnit.id}`;

        const isExisted = data.results.some((item) => {
          if (item.unit === null) {
            return (
              item.unit === selectedUnit.id && `${BASE_URL}${variantId}` === item.variant
            );
          } else {
            return item.unit === unitUrl;
          }
        });

        if (isExisted) {
          const existedUnit = data.results.filter((item) => {
            if (item.unit === null) {
              return (
                item.unit === selectedUnit.id &&
                `${BASE_URL}${variantId}` === item.variant
              );
            } else {
              return item.unit === unitUrl;
            }
          });

          const cartLineId = existedUnit[0].id;
          const cartLineQuantity = existedUnit[0].quantity || 0;

          await axios.patch(`${CART_LINES_API}${cartLineId}?token=${cartKey}`, {
            quantity: cartLineQuantity + quantity,
          });
        } else {
          let data = {
            variant: variantId,
            unit: selectedUnit.id,
            quantity: quantity,
          };

          await axios.post(cartLinesUrl, data);
        }

        mutate();
        mutateGlobal(
          transformUrl(CART_LINES_API, {
            page_size: 200,
            token: cartKey,
          })
        );
        enqueueSnackbarWithSuccess("Sản phẩm đã thêm vào giỏ hàng");

        if (type === TYPE_BUY_NOW) router.push(`/${ROUTES.cart}`);
      } catch (error) {
        enqueueSnackbarWithError(error);
      } finally {
        if (isMounted()) {
          setLoading(false);
        }
      }
    },
    [data, selectedUnit, variantId, cartLinesUrl, quantity, cartKey]
  );

  const renderUnits = useMemo(() => {
    if (listUnit == undefined || selectedUnit == undefined) return null;

    return (
      <Stack gap="8px" flexDirection="row" flexWrap="wrap">
        {listUnit.map((item, index) => {
          return (
            <UnitItem
              key={index}
              title={item.unit}
              onClick={() => {
                setSelectedUnit(item);
              }}
              active={item.sku === selectedUnit.sku}
            />
          );
        })}
      </Stack>
    );
  }, [listUnit, selectedUnit]);

  const renderOutOfStock = useMemo(() => {
    if (hotline1 == undefined) return;

    if (
      availableForPurchase === null ||
      new Date(availableForPurchase) > new Date(dateNow)
    ) {
      return <OutOfStock phone={hotline1} />;
    } else if (new Date(availableForPurchase) <= new Date(dateNow)) {
      const quantity = inputQuantity - outputQuantity - allocatedQuantity;
      if (trackInventory) {
        const quantity = inputQuantity - outputQuantity - allocatedQuantity;
        if (quantity <= 0) return <OutOfStock phone={hotline1} />;
      }
    }

    return (
      <WrapperButton flexDirection="row">
        <ButtonAddToCart
          onClick={async () => {
            await handleAddToCart("addToCart");
          }}
          sx={{ pointerEvents: loading ? "none" : "" }}
          fullWidth={true}
        />
        <ButtonBuyNow
          onClick={async () => {
            await handleAddToCart(TYPE_BUY_NOW);
          }}
          sx={{ pointerEvents: loading ? "none" : "" }}
          fullWidth={true}
        />
      </WrapperButton>
    );
  }, [
    loading,
    hotline1,
    TYPE_BUY_NOW,
    inputQuantity,
    handleAddToCart,
    trackInventory,
    outputQuantity,
    allocatedQuantity,
    availableForPurchase,
  ]);

  const renderNumberCounterInput = useMemo(() => {
    if (hotline1 == undefined) return;

    let _disable;

    if (
      availableForPurchase === null ||
      new Date(availableForPurchase) > new Date(dateNow)
    ) {
      _disable = true;
    } else if (new Date(availableForPurchase) <= new Date(dateNow)) {
      if (trackInventory) {
        const quantity = inputQuantity - outputQuantity - allocatedQuantity;
        if (quantity <= 0) {
          _disable = true;
        }
      }
    }

    return (
      <Box width="100px">
        <NumberCounterInput
          _disable={_disable}
          value={quantity}
          onValueChange={setQuantity}
        />
      </Box>
    );
  }, [
    loading,
    hotline1,
    quantity,
    TYPE_BUY_NOW,
    inputQuantity,
    trackInventory,
    outputQuantity,
    allocatedQuantity,
    availableForPurchase,
  ]);

  const renderDesc = useMemo(() => {
    if (!description) return null;

    return (
      <Stack gap="4px" mt="8px">
        <StyledTitleDesc>Mô Tả</StyledTitleDesc>
        <RenderHTML data={description} />
      </Stack>
    );
  }, [description]);

  useEffect(() => {
    if (!selectedUnit) return;
    setChecked(true);
  }, [selectedUnit]);

  if (selectedUnit == undefined) {
    return (
      <Stack height="100%" alignItems="center" justifyContent="center">
        <Typography>Loading...</Typography>
      </Stack>
    );
  }

  return (
    <Box>
      <Fade in={checked} timeout={600}>
        <Stack gap="8px" width="100%">
          <StyledTitle>{title}</StyledTitle>
          <StyledSKU>{selectedUnit ? selectedUnit.sku : "..."}</StyledSKU>

          {selectedUnit ? (
            <Fragment>
              <Stack gap="4px">
                <StyledDiscountPrice>
                  {selectedUnit &&
                  parseFloat(selectedUnit.price) !==
                    parseFloat(selectedUnit.discounted_price) ? (
                    <DiscountPrice
                      active="detail"
                      price={parseFloat(selectedUnit.price)}
                    />
                  ) : null}
                </StyledDiscountPrice>

                <StyledPrice>
                  {selectedUnit && (
                    <NumberFormatForVND
                      value={parseFloat(selectedUnit.discounted_price)}
                    />
                  )}
                </StyledPrice>
              </Stack>
            </Fragment>
          ) : (
            <NumberFormatForVND value={parseFloat("0")} />
          )}

          {renderNumberCounterInput}

          <Stack gap="8px">
            <StyledTitleOfUnit>Quy Cách</StyledTitleOfUnit>

            {/* RenderUnits */}
            {renderUnits}
          </Stack>

          {/* Render Desc */}
          {renderDesc}

          {/* RenderOutOfStock */}
          {renderOutOfStock}
        </Stack>
      </Fade>
    </Box>
  );
}

const StyledTitleDesc = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraMedium,
    color: "#6B7280",

    [theme.breakpoints.down("sm")]: {
      ...theme.typography.paraSmall,
      color: "#6B7280",
    },
  };
});

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h6,
    color: theme.palette.common.black,

    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "28px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  };
});

const StyledTitleOfUnit = styled(Typography)(({ theme }) => {
  return {
    fontSize: 16,
    lineHeight: "26px",
    fontWeight: 600,
    color: "#6B7280",

    [theme.breakpoints.down("sm")]: {
      ...theme.typography.paraSmall,
      color: "#6B7280",
    },
  };
});

const StyledSKU = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraSmall,
    color: "#6B7280",
    height: "20px !important",

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "20px",
    },
  };
});

const StyledPrice = styled(Box)(() => {
  return {
    ["& .number_for_vnd"]: {
      fontSize: "24px",
      lineHeight: "24px",
      fontWeight: 400,
    },
  };
});

const StyledDiscountPrice = styled(Box)(({ theme }) => {
  return {
    ["& .discount_price"]: {
      fontSize: "16px",
      lineHeight: "20px",

      [theme.breakpoints.down("md")]: {
        fontWeight: 400,
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        lineHeight: "20px",
        fontWeight: 400,
      },
    },
  };
});

const WrapperButton = styled(Stack)(({ theme }) => {
  return {
    gap: "8px",
    alignItems: "center",
    padding: "20px 0",

    [theme.breakpoints.down("sm")]: {
      paddingBottom: 0,
      flexDirection: "column",
    },
  };
});

const OutOfStock = (phone: any) => {
  return (
    <StyledOutOfStock>
      Đã hết hàng trong kho, quý khách vui lòng liên hệ đến{" "}
      <span>Hotline: {formatPhoneNumber(phone.phone)}</span> để được kiểm tra và hỗ trợ xử
      lý đơn hàng nhanh chóng.
    </StyledOutOfStock>
  );
};

const StyledOutOfStock = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraSmall,
    fontWeight: 400,
    color: "#DA1414",
    marginTop: "1rem",

    "& span": {
      fontWeight: 800,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "20px",
    },
  };
});
