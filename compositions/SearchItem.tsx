import useSWR from "swr";

import { get } from "lodash";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { Avatar, Box, Stack, styled, Typography } from "@mui/material";

import { DEFAULT_IMAGE } from "constant";
import { DiscountPrice, NumberFormatForVND } from "components";
import { I_PRODUCTS_VARIANTS, I_PRODUCT_IMAGES, ResponseProductType } from "interfaces";

interface Props {
  dataDefault: any;
  handleClose: () => void;
}

export default function SearchItem({ dataDefault, handleClose }: Props) {
  const router = useRouter();

  const { name, id, default_variant } = dataDefault;

  const { data } = useSWR<I_PRODUCTS_VARIANTS>(default_variant);

  const images = get(data, "images", "");
  const sku = get(data, "editable_sku");
  const price = get(data, "price.incl_tax", "0");
  const discountPrice = get(data, "discounted_price.incl_tax", "0");

  const { data: imageData } = useSWR<ResponseProductType<I_PRODUCT_IMAGES>>(() => {
    if (!images) return;

    return images;
  });

  return (
    <Fragment>
      <StyledWrapper
        onClick={() => {
          router.push(`/product/${id}/variant/${id}`);
          handleClose();
        }}
      >
        <Stack direction="row" spacing={1.5} width="100% !important">
          <Avatar
            sx={{ width: 60, height: 60 }}
            alt="name"
            src={get(imageData, "results[0].image.product_list", DEFAULT_IMAGE)}
            variant="square"
          />

          <Stack width="100% !important">
            <WrapperName direction="row" justifyContent="space-between">
              <StyledTitle>{name}</StyledTitle>
              <StyledId>{sku}</StyledId>
            </WrapperName>

            <Stack direction="row" alignItems="flex-end" spacing={2}>
              <StyledPrice>
                <NumberFormatForVND value={parseFloat(discountPrice)} />
              </StyledPrice>

              <StyledDiscountPrice>
                {parseFloat(price) !== parseFloat(discountPrice) && (
                  <DiscountPrice price={parseFloat(price)} />
                )}
              </StyledDiscountPrice>
            </Stack>
          </Stack>
        </Stack>
      </StyledWrapper>
    </Fragment>
  );
}

const StyledWrapper = styled(Box)(({ theme }) => {
  return {
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4px",
    padding: "10px 10px 0 10px",
    borderBottom: `1px solid ${theme.palette.neutral[300]}`,
    paddingBottom: "0.5rem",
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: theme.palette.neutral[200],
    },
  };
});

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraXSmall,
    color: theme.palette.common.black,
    fontWeight: 600,
    lineHeight: "13px",

    [theme.breakpoints.down("sm")]: {
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 1,
    },
  };
});

const StyledPrice = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraXSmall,
    marginTop: "0.4rem",

    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  };
});

const StyledDiscountPrice = styled(Box)(({ theme }) => {
  return {
    ["& .discount_price"]: {
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
        lineHeight: "12px",
      },
    },
  };
});

const StyledId = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraXSmall,
    fontWeight: 400,
    color: theme.palette.neutral[400],
  };
});

const WrapperName = styled(Stack)(({ theme }) => {
  return {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  };
});
