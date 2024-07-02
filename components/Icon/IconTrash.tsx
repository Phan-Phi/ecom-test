import React from "react";
import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const IconTrash = (props: SvgIconProps) => {
  return (
    <SVGIconBase {...props} width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M9.889 3.22222L9.40715 9.96805C9.36562 10.5495 8.8818 11 8.29887 11H3.70135C3.11842 11 2.6346 10.5495 2.59306 9.96805L2.11122 3.22222M4.889 5.44444V8.77778M7.11122 5.44444V8.77778M7.66678 3.22222V1.55556C7.66678 1.24873 7.41804 1 7.11122 1H4.889C4.58217 1 4.33344 1.24873 4.33344 1.55556V3.22222M1.55566 3.22222H10.4446"
        stroke="#6B7280"
        strokeWidth="1.13"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </SVGIconBase>
  );
};

export default IconTrash;
