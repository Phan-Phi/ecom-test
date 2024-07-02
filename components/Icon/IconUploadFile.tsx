import { SvgIconProps } from "@mui/material";
import React from "react";
import SVGIconBase from "./SVGIconBase";

const IconUploadFile = (props: SvgIconProps) => {
  return (
    <SVGIconBase
      {...props}
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1665 16H20.8331M12.1665 21.7778H20.8331M23.722 29H9.27756C7.68207 29 6.38867 27.7066 6.38867 26.1111V5.88889C6.38867 4.2934 7.68207 3 9.27756 3H17.3459C17.729 3 18.0964 3.15218 18.3673 3.42307L26.1878 11.2436C26.4587 11.5145 26.6109 11.8819 26.6109 12.265V26.1111C26.6109 27.7066 25.3175 29 23.722 29Z"
        stroke="#242424"
        strokeWidth="2.67"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </SVGIconBase>
  );
};

export default IconUploadFile;
