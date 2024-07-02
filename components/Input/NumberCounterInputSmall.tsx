import { styled } from "@mui/material";
import React, { useCallback } from "react";
import { NumberFormatValues } from "react-number-format";

import Box from "components/Box/Box";
import Stack from "components/Stack";
import NumberFormat, { ExtendedNumberFormatProps } from "components/NumberFormat";

import { IconAddition, IconSubtraction } from "components/Icon";

type OmitKey = "onValueChange";

interface NumberCounterInputProps extends Omit<ExtendedNumberFormatProps, OmitKey> {
  onValueChange: (value: number) => void;
}

const NumberCounterInputSmall = (props: NumberCounterInputProps) => {
  const { value, onValueChange, ...restProps } = props;

  const onValueChangeHandler = useCallback(
    (e: NumberFormatValues) => {
      const { floatValue } = e;
      onValueChange(floatValue || 1);
    },
    [onValueChange]
  );

  const onIncreaseNumberHandler = useCallback(() => {
    const parsedValue = Number(value);

    if (Number.isNaN(parsedValue)) return;

    onValueChange(parsedValue + 1);
  }, [onValueChange, value]);

  const onDecreaseNumberHandler = useCallback(() => {
    const parsedValue = Number(value);

    if (Number.isNaN(parsedValue)) return;

    if (parsedValue <= 1) return;

    onValueChange(parsedValue - 1);
  }, [onValueChange, value]);

  const isAllowedHandler = useCallback((values: NumberFormatValues): boolean => {
    const { floatValue, value } = values;

    if (value.match(/[\.,]/g)) return false;
    if (floatValue == undefined) return true;
    if (floatValue === 0) return false;

    return true;
  }, []);

  return (
    <StyledBox>
      <ContainerIcon>
        <WrapperIcon
          disabled={value == undefined || Number(value) <= 1}
          onClick={onDecreaseNumberHandler}
        >
          <IconSubtraction sx={{ fontSize: "12px" }} />
        </WrapperIcon>

        <StyledNumberFormat
          allowNegative={false}
          thousandSeparator={false}
          {...restProps}
          value={value}
          isAllowed={isAllowedHandler}
          onValueChange={onValueChangeHandler}
        />

        <WrapperIcon onClick={onIncreaseNumberHandler}>
          <IconAddition
            sx={{
              transform: "rotate(180deg)",
              fontSize: "16px",
            }}
          />
        </WrapperIcon>
      </ContainerIcon>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => {
  return {
    borderWidth: 2,
    borderRadius: "8px",
    borderStyle: "solid",
    borderColor: "#374151",

    display: "flex",
    width: "auto",
    alignItems: "center",
  };
});

const StyledNumberFormat = styled(NumberFormat)(({ theme }) => {
  return {
    border: "none",
    padding: "6px 0",
    fontSize: "12px",
    lineHeight: "12px",

    [theme.breakpoints.down("md")]: {
      padding: "4px 0",
      fontSize: "10px",
      lineHeight: "10px",
    },

    ["& input"]: {
      padding: 0,
      color: "#374151",
      textAlign: "center",
    },
  };
});

const ContainerIcon = styled(Stack)(() => {
  return {
    padding: "0 8px",
    flexDirection: "row",
    alignItems: "center",
  };
});

const WrapperIcon = styled(Box, {
  shouldForwardProp: (propName) => propName !== "disabled",
})<{ disabled?: boolean }>(({ theme, disabled }) => {
  return {
    color: theme.palette.neutral[600],
    display: "flex",
    cursor: "pointer",
    transition: `all ${theme.transitions.duration.shorter}ms`,
    ["&:hover"]: {
      color: theme.palette.neutral[900],
    },
    ["&:active, &:focus"]: {
      opacity: 0.65,
    },
    ...(disabled && {
      opacity: 0.5,
      pointerEvents: "none",
    }),
  };
});

export default NumberCounterInputSmall;
