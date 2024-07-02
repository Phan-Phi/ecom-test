import { styled, CSSObject } from "@mui/material";
import { forwardRef } from "react";

import Box, { ExtendedBoxProps } from "./Box";

interface ExtraProps {
  backgroundColor?: CSSObject["backgroundColor"];
}

export interface BoxWithShadowProps extends ExtendedBoxProps, ExtraProps {}

const BoxWithShadow = forwardRef(function BoxWithShadow(props: BoxWithShadowProps, ref) {
  return (
    <StyledBoxWithShadow
      boxShadow={props.boxShadow || "0px 8px 16px -8px rgba(15, 15, 15, 0.2)"}
      ref={ref}
      {...props}
    />
  );
});

const StyledBoxWithShadow = styled(Box, {
  shouldForwardProp: (propName) => propName !== "backgroundColor",
})<ExtraProps>(({ backgroundColor }) => {
  return {
    backgroundColor,
  };
});

export default BoxWithShadow;
