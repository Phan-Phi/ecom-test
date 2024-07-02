import React from "react";
import { styled, useTheme } from "@mui/material";

import { CURRENCY } from "constant";
import NumberFormat, { ExtendedNumberFormatProps } from "./NumberFormat";

type NumberFormatForVNDProps = {
  value: number | string;
  color?: React.CSSProperties["color"];
  numberFormatProps?: ExtendedNumberFormatProps;
};

export default function NumberFormatForVND(props: NumberFormatForVNDProps) {
  const { value, color, numberFormatProps } = props;

  const theme = useTheme();

  return (
    <StyledNumberFormat
      value={value}
      displayType="text"
      suffix={` ${CURRENCY}`}
      style={{ color: color || theme.palette.destructive[900] }}
      className="number_for_vnd"
      {...numberFormatProps}
    />
  );
}

const StyledNumberFormat = styled(NumberFormat)(({ theme }) => {
  return {
    ...theme.typography.paraMedium,
    fontWeight: 400,

    [theme.breakpoints.down("md")]: {
      ...theme.typography.paraMedium,
      fontWeight: 400,
    },

    [theme.breakpoints.down("sm")]: {
      ...theme.typography.paraXSmall,
      fontWeight: 400,
    },
  };
});
