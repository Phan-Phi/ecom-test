import {
  Box,
  Fade,
  Stack,
  styled,
  Button,
  Skeleton,
  Container,
  Typography,
} from "@mui/material";
import useSWR from "swr";
import { useRouter } from "next/router";
import { isEmpty, isEqual } from "lodash";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { CART_LINES_API } from "apis";
import { DATA_BREADCRUMBS, ROUTES } from "routes";
import { calcTotalPrice, transformUrl } from "utils";
import { I_CART_LINES, ResponseType } from "interfaces";
import { BUTTON, REFRESH_INTERVAL_CART } from "constant";
import { COMPONENT_STATE, PSEUDO_STATE } from "configuration";

import CartItem from "./components/CartItem";
import CartEmpty from "./components/CartEmpty";
import { useCart } from "contexts/CartContext";
import { NumberFormatForVND } from "components";
import { BreadcrumbsCustom } from "compositions";
import LoadingCartItem from "./components/LoadingCartItem";
import { useMedia } from "hooks";

export default function Cart() {
  const router = useRouter();
  const { cartKey } = useCart();
  const { isSmDown } = useMedia();
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartData, setCartData] = useState<I_CART_LINES[]>([]);
  const [cartData2, setCartData2] = useState<I_CART_LINES[]>([]);
  const [loadingProduct, setLoadingProduct] = useState(false);
  const [heightLoading, setHeightLoading] = useState<number | undefined>(undefined);

  const wrapperCartItemRef = useRef<any>(null);

  const { mutate, data: resData } = useSWR<ResponseType<I_CART_LINES>>(
    () => {
      return transformUrl(CART_LINES_API, {
        page_size: 200,
        token: cartKey,
        nested_depth: 3,
      });
    },
    { refreshInterval: REFRESH_INTERVAL_CART }
  );

  useEffect(() => {
    if (wrapperCartItemRef.current) {
      const _height = wrapperCartItemRef.current.getBoundingClientRect().height;
      setHeightLoading(_height);
    }
  }, [wrapperCartItemRef.current, isSmDown]);

  useEffect(() => {
    if (!resData) return;

    setCartData((prev) => {
      if (!isEqual(prev, resData.results)) {
        return resData.results;
      }

      return prev;
    });
  }, [resData]);

  useEffect(() => {
    async function fetchTotalPrice() {
      const result = await calcTotalPrice(cartData);
      setTotalPrice(result);
    }
    fetchTotalPrice();
  }, [cartData]);

  const onGotoProductList = useCallback(() => {
    router.push(ROUTES.home);
  }, []);

  const onGotoPayment = useCallback(() => {
    router.push(`/${ROUTES.payment}`);
  }, []);

  const renderCartItem = useMemo(() => {
    if (isEmpty(cartData)) return <CartEmpty />;

    return cartData.map((item, index) => {
      return (
        <Box className="wrapper_cart_item" key={index} ref={wrapperCartItemRef}>
          {/* {loadingProduct ? (
            <LoadingCartItem height={heightLoading} />
          ) : (
            <Fade in={true} timeout={800}>
              <Box height={heightLoading ? heightLoading : undefined}>
                <CartItem
                  id={item.id}
                  mutate={mutate}
                  cartData={cartData}
                  unitUrl={item.unit}
                  variantUrl={item.variant}
                  initQuantity={item.quantity}
                  setLoadingProduct={setLoadingProduct}
                />
              </Box>
            </Fade>
          )} */}

          <Fade in={true} timeout={800}>
            <Box height={heightLoading ? heightLoading : undefined}>
              <CartItem
                id={item.id}
                mutate={mutate}
                cartData={cartData}
                unitUrl={item.unit}
                variantUrl={item.variant}
                initQuantity={item.quantity}
                setLoadingProduct={setLoadingProduct}
              />
              {/* 
              <CartItemV2
                id={item.id}
                mutate={mutate}
                cartData={cartData}
                unitUrl={item.unit}
                variantUrl={item.variant}
                initQuantity={item.quantity}
                setLoadingProduct={setLoadingProduct}
              /> */}
            </Box>
          </Fade>
        </Box>
      );
    });
  }, [cartData, loadingProduct, wrapperCartItemRef, heightLoading]);

  const memoTotalItems = useMemo(() => {
    return cartData ? cartData.length : 0;
  }, [cartData.length]);

  const renderTotalPrice = useMemo(() => {
    if (isEmpty(cartData)) return null;

    return (
      <Stack
        height="25px"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        className="wrapper-total-price"
      >
        <StyledTextOfTotal>Tổng tiền</StyledTextOfTotal>
        {/* 
        {loadingProduct ? (
          <StyledLoadingTotalPrice variant="rectangular" />
        ) : (
          <Fade in={true} timeout={500}>
            <Box>
              <NumberFormatForVND value={parseFloat(totalPrice.toString())} />
            </Box>
          </Fade>
        )} */}

        <Box>
          <NumberFormatForVND value={parseFloat(totalPrice.toString())} />
        </Box>
      </Stack>
    );
  }, [totalPrice, loadingProduct, cartData]);

  const renderButton = useMemo(() => {
    if (memoTotalItems === 0) return null;
    return (
      <Stack gap="12px" flexDirection="row" alignItems="center">
        <StyledButtonGoToProductList fullWidth={true} onClick={onGotoProductList}>
          {BUTTON.GO_BACK_PRODUCT_LIST}
        </StyledButtonGoToProductList>

        <StyledButtonPayment
          disabled={loadingProduct}
          sx={{
            cursor: loadingProduct ? "not-allowed" : "pointer",
          }}
          fullWidth={true}
          onClick={loadingProduct ? () => {} : onGotoPayment}
        >
          {BUTTON.PAYMENT}
        </StyledButtonPayment>
      </Stack>
    );
  }, [memoTotalItems, loadingProduct]);

  return (
    <Container>
      <BreadcrumbsCustom breadcrumbsData={DATA_BREADCRUMBS.cart} />

      <Wrapper>
        <Stack gap="32px">
          {cartData.length !== 0 && (
            <StyledText>{`Có ${cartData.length} sản phẩm trong giỏ hàng của bạn`}</StyledText>
          )}

          <Stack gap="16px">{renderCartItem}</Stack>

          {renderTotalPrice}

          {/* Render Button */}
          {renderButton}
        </Stack>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled(Box)(({ theme }) => {
  return {
    minHeight: "500px",
    maxWidth: "1000px",
    margin: "12px auto",

    ["& .wrapper-total-price .number_for_vnd"]: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: 600,
      color: "#B91C1C",
    },

    [theme.breakpoints.down("md")]: {
      padding: 0,

      ["& .wrapper-total-price .number_for_vnd"]: {
        fontSize: "18px",
        lineHeight: "24px",
        fontWeight: 600,
        color: "#B91C1C",
      },
    },
  };
});

const StyledText = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h6,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#111827",
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "24px",
    },
  };
});

const StyledTextOfTotal = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h6,
    fontSize: "20px",
    lineHeight: "28px",
    color: "#111827",

    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "24px",
    },
  };
});

const StyledButtonGoToProductList = styled(Button)(() => {
  return {
    color: "#374151",
    backgroundColor: "#fff",
    border: "1px solid #D1D5DB",
    boxShadow: "none",
    borderRadius: "6px",

    [PSEUDO_STATE.hover]: {
      color: "#374151",
      backgroundColor: "#fff",
      border: "1px solid #D1D5DB",
      boxShadow: "none",
    },
  };
});

const StyledButtonPayment = styled(Button)(() => {
  return {
    fontSize: "12px",
    lineHeight: "20px",
    boxShadow: "none",
    borderRadius: "6px",

    [PSEUDO_STATE.hover]: {
      boxShadow: "none",
    },

    [COMPONENT_STATE.disabled]: {
      background: "#f5f5f5",
    },
  };
});

const StyledLoadingTotalPrice = styled(Skeleton)(({ theme }) => {
  return {
    width: "100px",
    height: "25px",
    borderRadius: "6px",
    backgroundColor: "#f5f5f5",
  };
});
