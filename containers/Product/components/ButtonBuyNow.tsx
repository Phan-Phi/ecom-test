import React from "react";
import { Button, ButtonProps, styled, CircularProgress } from "@mui/material";

import { BUTTON } from "constant";
import { COMPONENT_STATE, PSEUDO_STATE } from "configuration";

interface ButtonBuyNowProps extends ButtonProps {
  isLoading?: boolean;
}

export default function ButtonBuyNow(props: ButtonBuyNowProps) {
  const { isLoading, ...restProps } = props;

  return (
    <StyledButton disabled={isLoading} {...restProps}>
      {isLoading ? <CircularProgress size="14px" /> : BUTTON.BUY}
    </StyledButton>
  );
}

const StyledButton = styled(Button)(({ theme }) => {
  return {
    ...theme.typography.paraSmall,
    color: theme.palette.common.white,
    boxShadow: "none",
    borderRadius: "6px",
    backgroundColor: "#F2663B",
    border: "1px solid #F2663B",
    width: "max-content",
    height: "40px",
    padding: "6px 24px",
    transition: "all 0.3s ease",

    [PSEUDO_STATE.hover]: {
      color: "#F2663B",
      boxShadow: "none",
      backgroundColor: "#fff",
      // opacity: 0.8,
    },

    [COMPONENT_STATE.disabled]: {
      backgroundColor: "#fff",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  };
});
