import useSWR from "swr";
import { isEmpty, isEqual } from "lodash";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Stack, styled, Typography, Skeleton, Fade, Box } from "@mui/material";

import { useMedia } from "hooks";
import CartItem from "./CartItem";
import { CART_LINES_API } from "apis";
import ButtonOrder from "./ButtonOrder";
import { useCart } from "contexts/CartContext";
import { NumberFormatForVND } from "components";
import { REFRESH_INTERVAL_CART } from "constant";
import { calcTotalPrice, transformUrl } from "utils";
import { I_CART_LINES, ResponseType } from "interfaces";
import LoadingCartItem from "containers/Cart/components/LoadingCartItem";

type OrdersInfoProps = {
  loadingCreateOrder: boolean;
  onCreateOrderHandler: any;
};

export default function OrdersInfo(props: OrdersInfoProps) {
  const { loadingCreateOrder, onCreateOrderHandler } = props;

  const { cartKey } = useCart();
  const { isSmDown } = useMedia();

  const [totalPrice, setTotalPrice] = useState(0);
  const [cartData, setCartData] = useState<I_CART_LINES[]>([]);
  const [loadingProduct, setLoadingProduct] = useState(false);

  const wrapperCartItemRef = useRef<any>(null);
  const [heightLoading, setHeightLoading] = useState<number | undefined>(undefined);

  const { mutate, data: resData } = useSWR<ResponseType<I_CART_LINES>>(
    () => {
      return transformUrl(CART_LINES_API, {
        page_size: 200,
        token: cartKey,
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
      if (!isEqual(prev, resData.results)) return resData.results;

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

  const renderCartItem = useMemo(() => {
    if (isEmpty(cartData))
      return <Stack alignItems="center">Hiện không có đơn hàng</Stack>;

    return (
      <Stack gap="16px">
        {cartData.map((item, index) => {
          return (
            <Box className="wrapper_cart_item" key={index} ref={wrapperCartItemRef}>
              {loadingProduct ? (
                <LoadingCartItem height={heightLoading} />
              ) : (
                <Fade in={true} timeout={800}>
                  <Box height={heightLoading ? heightLoading : undefined}>
                    <CartItem
                      key={index}
                      id={item.id}
                      mutate={mutate}
                      unitUrl={item.unit}
                      variantUrl={item.variant}
                      initQuantity={item.quantity}
                      setLoadingProduct={setLoadingProduct}
                    />
                  </Box>
                </Fade>
              )}
            </Box>
          );
        })}
      </Stack>
    );
  }, [cartData, loadingProduct, wrapperCartItemRef, heightLoading]);

  const renderTotalPrice = useMemo(() => {
    return (
      <Stack
        height="25px"
        flexDirection="row"
        alignItems="center"
        className="wrapper-total"
        justifyContent="space-between"
      >
        <StyledTitle>Tổng tiền</StyledTitle>

        {loadingProduct ? (
          <StyledLoadingTotalPrice variant="rectangular" />
        ) : (
          <Fade in={true} timeout={500}>
            <Box>
              <NumberFormatForVND value={parseFloat(totalPrice.toString())} />
            </Box>
          </Fade>
        )}
      </Stack>
    );
  }, [totalPrice, loadingProduct]);

  return (
    <Wrapper>
      {renderCartItem}

      {renderTotalPrice}

      <ButtonOrder isLoading={loadingCreateOrder} onClick={onCreateOrderHandler} />
    </Wrapper>
  );
}

const Wrapper = styled(Stack)(({ theme }) => {
  return {
    gap: "12px",
    minHeight: "500px",

    ["& .wrapper-total .number_for_vnd"]: {
      ...theme.typography.h6,
      color: "#242424",
      fontSize: "18px",
      lineHeight: "28px",

      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
  };
});

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h6,
    color: "#242424",
    fontSize: "18px",
    lineHeight: "28px",

    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "24px",
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
