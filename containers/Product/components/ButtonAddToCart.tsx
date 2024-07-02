import React from "react";
import { Button, ButtonProps, styled, CircularProgress } from "@mui/material";

import { BUTTON } from "constant";
import { COMPONENT_STATE, PSEUDO_STATE } from "configuration";

interface ButtonAddToCartProps extends ButtonProps {
  isLoading?: boolean;
}

export default function ButtonAddToCart(props: ButtonAddToCartProps) {
  const { isLoading, ...restProps } = props;

  return (
    <StyledButton disabled={isLoading} {...restProps}>
      {isLoading ? <CircularProgress size="14px" /> : BUTTON.ADD_TO_CART}
    </StyledButton>
  );
}

const StyledButton = styled(Button)(({ theme }) => {
  return {
    ...theme.typography.paraSmall,
    color: "#fff",
    boxShadow: "none",
    borderRadius: "6px",
    backgroundColor: "#242424",
    border: "1px solid #D1D5DB",
    width: "max-content",
    height: "40px",
    padding: "6px 24px",
    transition: "all 0.3s ease",

    [PSEUDO_STATE.hover]: {
      color: "#fff",
      boxShadow: "none",
      backgroundColor: "#242424",
      opacity: 0.8,
    },

    [COMPONENT_STATE.disabled]: {
      backgroundColor: "#fff",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  };
});
