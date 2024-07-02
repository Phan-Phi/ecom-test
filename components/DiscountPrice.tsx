import { styled } from "@mui/material";

import { CURRENCY } from "constant";
import NumberFormat from "./NumberFormat";

interface DiscountPrice {
  price: number | string;
  active?: string;
}

interface WrapperExtendsProps {
  active: string;
}

export default function DiscountPrice({ price, active = "" }: DiscountPrice) {
  return (
    <StyledLineThrough
      value={price}
      displayType="text"
      suffix={` ${CURRENCY}`}
      className="discount_price"
      active={active}
    />
  );
}

const StyledLineThrough = styled(NumberFormat, {
  shouldForwardProp: (propName) => {
    return propName !== "active";
  },
})<WrapperExtendsProps>(({ theme, active }) => {
  return {
    fontSize: active === "detail" ? "24px !important" : "12px !important",
    lineHeight: active === "detail" ? "26px !important" : "8px !important",
    fontWeight: active === "detail" ? 400 : 700,
    textDecoration: "line-through",
    color: theme.palette.common.black,

    [theme.breakpoints.down("md")]: {
      fontWeight: 400,
    },
  };
});
