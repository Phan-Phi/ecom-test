import { styled } from "@mui/material";
import React, { useCallback } from "react";
import { NumberFormatValues } from "react-number-format";

import Box from "components/Box/Box";
import Stack from "components/Stack";
import { IconAddition, IconSubtraction } from "components/Icon";
import NumberFormat, { ExtendedNumberFormatProps } from "components/NumberFormat";

type OmitKey = "onValueChange";

interface NumberCounterInputProps extends Omit<ExtendedNumberFormatProps, OmitKey> {
  onValueChange: (value: number) => void;
  _disable?: boolean;
}

const NumberCounterInput = (props: NumberCounterInputProps) => {
  const { value, onValueChange, _disable = false, ...restProps } = props;

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
          <IconSubtraction sx={{ fontSize: "14px" }} />
        </WrapperIcon>

        <StyledNumberFormat
          allowNegative={false}
          thousandSeparator={false}
          {...restProps}
          value={value}
          isAllowed={isAllowedHandler}
          onValueChange={onValueChangeHandler}
          disabled={_disable}
        />

        <WrapperIcon onClick={onIncreaseNumberHandler} disabled={_disable}>
          <IconAddition
            sx={{
              fontSize: "20px",
              transform: "rotate(180deg)",
            }}
          />
        </WrapperIcon>
      </ContainerIcon>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => {
  return {
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: theme.palette.neutral[300],

    width: "auto",
    display: "flex",
    alignItems: "center",
  };
});

const StyledNumberFormat = styled(NumberFormat)(() => {
  return {
    border: "none",
    padding: "0.5rem 0",
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
    display: "flex",
    cursor: "pointer",
    color: theme.palette.neutral[600],
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

export default NumberCounterInput;
