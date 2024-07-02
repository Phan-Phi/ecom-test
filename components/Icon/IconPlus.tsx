import React from "react";
import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const IconPlus = (props: SvgIconProps) => {
  return (
    <SVGIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M10 6V10M10 10V14M10 10H14M10 10L6 10"
        strokeWidth="1.336"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconBase>
  );
};

export default IconPlus;
