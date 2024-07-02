import { useCallback } from "react";
import { Input } from "@mui/material";
import OriginalNumberFormat, { NumberFormatProps } from "react-number-format";

export type ExtendedNumberFormatProps = NumberFormatProps;

const NumberFormat = (props: ExtendedNumberFormatProps) => {
  const { onChange, ...restProps } = props;

  const renderCustomInput = useCallback((props: any) => {
    return <Input {...props} />;
  }, []);

  return (
    <OriginalNumberFormat
      thousandSeparator="."
      decimalSeparator=","
      customInput={renderCustomInput}
      {...restProps}
    />
  );
};

export default NumberFormat;
