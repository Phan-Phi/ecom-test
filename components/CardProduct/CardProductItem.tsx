import { get } from "lodash";
import { useMountedState } from "react-use";
import { Fragment, useCallback } from "react";
import useSWR, { mutate as mutateGlobal } from "swr";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Stack, styled, Typography, Box, IconProps, Skeleton, Fade } from "@mui/material";

import Link from "components/Link";
import ImageRatio from "components/ImageRatio";
import DiscountPrice from "components/DiscountPrice";
import NumberFormatForVND from "components/NumberFormatForVND";

import {
  DEFAULT_IMAGE,
  REFRESH_INTERVAL_CART,
  CARD_PRODUCT_IMAGE_RATIO,
  CARD_PRODUCT_IMAGE_RATIO_MOBILE,
} from "constant";

import axios from "axios.config";
import { ROUTES } from "routes";
import SVG from "components/SVG";
import { transformUrl } from "utils";
import { PSEUDO_STATE } from "configuration";
import { useFetchV2, useMedia } from "hooks";
import { useFavoriteProduct } from "contexts";
import { useCart } from "contexts/CartContext";
import { CART_LINES_API, PRODUCTS_API } from "apis";
import { useNotification } from "hooks/useNotification";
import { ResponseProductType, ResponseType } from "interfaces/UseFetch";

import {
  I_PRODUCTS,
  I_CART_LINES,
  I_PRODUCTS_VARIANTS,
  I_PRODUCT_IMAGES,
} from "interfaces";

type CardProductItemProps = {
  id: number;
  handleOpen?: any;
  defaultVariant: string;
  nameProduct?: string;
};

interface StyledFavoriteBorderIconExtendsProps extends IconProps {
  isActive: boolean;
}

interface StyledCartIconExtendsProps extends IconProps {
  loading: boolean;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function CardProductItem({
  nameProduct,
  id,
  handleOpen,
  defaultVariant,
}: CardProductItemProps) {
  const { cartKey } = useCart();
  const { isSmDown } = useMedia();
  const isMounted = useMountedState();
  const { listFavoriteProduct, handleAddProductId } = useFavoriteProduct();

  const {
    loading,
    setLoading,
    enqueueSnackbar,
    enqueueSnackbarWithError,
    enqueueSnackbarWithSuccess,
  } = useNotification();

  const { data, isLoading: isLoadingDataDefaultVariant } =
    useFetchV2<I_PRODUCTS_VARIANTS>(defaultVariant);

  const images = get(data, "images", "");

  const { data: imageData } = useSWR<ResponseProductType<I_PRODUCT_IMAGES>>(() => {
    if (!images) return;

    return images;
  });

  const { data: productAvailableForPurchaseData } = useSWR<
    ResponseProductType<I_PRODUCTS>
  >(() => {
    if (!id) return;

    return transformUrl(PRODUCTS_API, {
      ids: id,
    });
  });

  const self = get(data, "self");
  const variantId = get(data, "id");
  const name = get(data, "name", "");
  const price = get(data, "price.incl_tax", "0");
  const discountPrice = get(data, "discounted_price.incl_tax", "0");
  const image = get(imageData, "results[0].image.product_list", DEFAULT_IMAGE);

  const selfUrl = `${BASE_URL}${self}`;
  const cartLinesUrl = `${CART_LINES_API}?token=${cartKey}`;

  const { data: cartData, mutate } = useSWR<ResponseType<I_CART_LINES>>(
    transformUrl(CART_LINES_API, {
      page_size: 200,
      token: cartKey,
    }),
    {
      refreshInterval: REFRESH_INTERVAL_CART,
    }
  );

  const handleCheckAddProductToCart = useCallback(() => {
    const nowDate = Date.now();

    const availableForPurchaseDate = get(
      productAvailableForPurchaseData,
      "results[0].available_for_purchase"
    ) as any;

    const trackInventory = get(data, "track_inventory");
    const inputQuantity = get(data, "input_quantity", 0);
    const outputQuantity = get(data, "output_quantity", 0);
    const allocatedQuantity = get(data, "allocated_quantity", 0);

    // Case 1
    if (
      availableForPurchaseDate === null ||
      new Date(availableForPurchaseDate) > new Date(nowDate)
    ) {
      return false;
      // Case 2
    } else if (new Date(availableForPurchaseDate) <= new Date(nowDate)) {
      if (trackInventory) {
        const quantity = inputQuantity - outputQuantity - allocatedQuantity;
        if (quantity <= 0) return false;
      }
    }

    return true;
  }, [productAvailableForPurchaseData, data]);

  const handleAddToCart = useCallback(async () => {
    try {
      setLoading(true);
      if (!cartData) return;
      if (!self) return;
      if (handleCheckAddProductToCart() === false) {
        enqueueSnackbar("Sản phẩm đã hết hàng trong kho", {
          variant: "info",
        });
        return;
      }

      const isExisted = cartData.results.some((item) => {
        return item.unit === null && item.variant === selfUrl;
      });

      if (isExisted) {
        const existedUnit = cartData.results.filter((item) => {
          return item.unit === null && item.variant === selfUrl;
        });

        const cartLineId = existedUnit[0].id;
        const cartLineQuantity = existedUnit[0].quantity || 0;

        await axios.patch(`${CART_LINES_API}${cartLineId}?token=${cartKey}`, {
          quantity: cartLineQuantity + 1,
        });
      } else {
        let data = {
          unit: null,
          quantity: 1,
          variant: self,
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
    } catch (error) {
      enqueueSnackbarWithError(error);
    } finally {
      if (isMounted()) {
        setLoading(false);
      }
    }
  }, [self, cartData, cartKey]);

  return (
    <StyledWrapper>
      <Link href={`/${ROUTES.product}/${id}/${ROUTES.variant}/${variantId}/`}>
        <Box padding="0 14px">
          <ImageRatio
            ratio={isSmDown ? CARD_PRODUCT_IMAGE_RATIO_MOBILE : CARD_PRODUCT_IMAGE_RATIO}
            imageProps={{ alt: "img", src: image }}
          />
        </Box>

        <Box padding="8px">
          <Fragment>
            {isLoadingDataDefaultVariant ? (
              <StyedSkeletonHeading animation="wave" />
            ) : (
              <Box>
                <Fade in={true} timeout={500}>
                  <StyledHeading>{nameProduct ? nameProduct : name}</StyledHeading>
                </Fade>
              </Box>
            )}
          </Fragment>

          <StyledWrapperPrice className="wrapper-price">
            <StyledPrice>
              <NumberFormatForVND value={parseFloat(discountPrice)} />
            </StyledPrice>

            <StyledDiscountPrice>
              {parseFloat(price) !== parseFloat(discountPrice) && (
                <DiscountPrice price={parseFloat(price)} />
              )}
            </StyledDiscountPrice>
          </StyledWrapperPrice>
        </Box>
      </Link>

      <WrapperAction>
        <StyledViewIcon onClick={() => handleOpen({ img: imageData, defaultData: data })}>
          <SVG src="/svg/view.svg" />
        </StyledViewIcon>

        <StyledCartIcon loading={loading} onClick={handleAddToCart}>
          <SVG src="/svg/cart.svg" />
        </StyledCartIcon>

        <StyledFavoriteBorderIcon
          onClick={() => {
            handleAddProductId(id);
          }}
          isActive={listFavoriteProduct!.includes(id)}
        />
      </WrapperAction>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Stack)(({ theme }) => {
  return {
    gap: "4px",
    cursor: "pointer",

    [theme.breakpoints.down("md")]: {
      cursor: "default",
    },

    padding: "16px 0",
    borderRadius: "8px",
    boxShadow:
      "0px -2px 4px -2px #1018280D, 0px -4px 6px -1px #1018280D, 0px 4px 4px 0px #0000000D",

    ":hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
    },

    transition: "all 0.3s ease",
  };
});

const StyledHeading = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraMedium,
    color: theme.palette.common.black,
    fontWeight: 400,

    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    minHeight: 24 * 2,

    [theme.breakpoints.down("md")]: {
      ...theme.typography.paraSmall,
      color: theme.palette.common.black,

      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      minHeight: 20 * 2,
    },

    [theme.breakpoints.down("sm")]: {
      ...theme.typography.paraXSmall,
      color: theme.palette.common.black,

      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      minHeight: 20 * 2,
    },
  };
});

const StyedSkeletonHeading = styled(Skeleton)(({ theme }) => {
  return {
    height: 48,
    backgroundColor: "#f5f5f5",

    [theme.breakpoints.down("md")]: {
      height: 40,
    },
  };
});

const StyledWrapperPrice = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "normal",
      justifyContent: "normal",
    },
  };
});

const StyledPrice = styled(Box)(({ theme }) => {
  return {
    ["& .number_for_vnd"]: {
      ...theme.typography.paraSmall,
      fontWeight: 600,

      [theme.breakpoints.down("sm")]: {
        fontSize: "12px !important",
        lineHeight: "18px !important",
        fontWeight: 4004,
      },
    },
  };
});

const StyledDiscountPrice = styled(Box)(({ theme }) => {
  return {
    ["& .discount_price"]: {
      [theme.breakpoints.down("sm")]: {
        fontWeight: 400,
        fontSize: "12px !important",
        lineHeight: "18px !important",
      },
    },
  };
});

const WrapperAction = styled(Stack)(() => {
  return {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  };
});

const StyledFavoriteBorderIcon = styled(FavoriteIcon, {
  shouldForwardProp: (propName) => propName !== "isActive",
})<StyledFavoriteBorderIconExtendsProps>(({ theme, isActive }) => {
  return {
    strokeWidth: "2px",
    transition: "all 0.3s ease",
    fill: isActive ? "red" : "transparent",
    stroke: isActive ? "transparent" : "#242424",

    [PSEUDO_STATE.hover]: {
      stroke: isActive ? "transparent" : theme.palette.primary.main,
    },
  };
});

const StyledViewIcon = styled(Box)(({ theme }) => {
  return {
    [PSEUDO_STATE.hover]: {
      "& path": {
        fill: theme.palette.primary.main,
      },
    },
    transition: "all 0.3s ease",
  };
});

const StyledCartIcon = styled(Box, {
  shouldForwardProp: (propName) => propName !== "loading",
})<StyledCartIconExtendsProps>(({ theme, loading }) => {
  return {
    [PSEUDO_STATE.hover]: {
      "& path": {
        fill: theme.palette.primary.main,
      },

      "& rect": {
        fill: theme.palette.primary.main,
      },
    },

    transition: "all 0.3s ease",

    ...(loading && {
      pointerEvents: "none",
      cursor: "not-allowed",
    }),
  };
});
