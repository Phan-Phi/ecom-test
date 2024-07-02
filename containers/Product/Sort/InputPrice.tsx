import React from "react";
import { Input, InputProps, styled } from "@mui/material";
import NumberFormat, { NumberFormatPropsBase } from "react-number-format";

type InputPriceProps = {
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  InputProps?: Omit<
    InputProps,
    | keyof NumberFormatPropsBase<typeof Input>
    | "customInput"
    | keyof React.ComponentPropsWithRef<"input">
  >;
  NumberFormatProps?: Omit<NumberFormatPropsBase<typeof Input>, "customInput">;
};

export default function InputPrice(props: InputPriceProps) {
  const { placeholder, disabled, readOnly, InputProps, NumberFormatProps } = props;

  return (
    <NumberFormat
      readOnly={readOnly}
      disabled={disabled}
      allowNegative={false}
      thousandSeparator={true}
      customInput={CustomInput}
      placeholder={placeholder}
      suffix=" ₫"
      {...InputProps}
      {...NumberFormatProps}
    />
  );
}

function CustomInput(props: InputProps) {
  return <StyledInput {...props} />;
}

const StyledInput = styled(Input)(() => {
  return {
    ["& .MuiInputBase-input"]: {
      padding: "8px",
      borderRadius: "6px",
    },
  };
});
