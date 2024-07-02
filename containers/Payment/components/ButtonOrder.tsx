import React from "react";
import { BUTTON } from "constant";
import { COMPONENT_STATE, PSEUDO_STATE } from "configuration";
import { Button, ButtonProps, CircularProgress, styled } from "@mui/material";

interface ButtonOrderProps extends ButtonProps {
  isLoading: boolean;
}

export default function ButtonOrder(props: ButtonOrderProps) {
  const { isLoading, ...restProps } = props;

  return (
    <StyledButton disabled={isLoading} {...restProps}>
      {isLoading ? <CircularProgress size="14px" /> : BUTTON.ORDER}
    </StyledButton>
  );
}

const StyledButton = styled(Button)(({ theme }) => {
  return {
    ...theme.typography.paraXSmall,
    color: "#fff",
    boxShadow: "none",
    borderRadius: "6px",
    backgroundColor: "#242424",
    border: "1px solid #D1D5DB",

    height: "40px",
    padding: "8px 10px",
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
  };
});
