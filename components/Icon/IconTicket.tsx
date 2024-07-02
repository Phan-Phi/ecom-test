import React from "react";
import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const IconTicket = (props: SvgIconProps) => {
  return (
    <SVGIconBase
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.6658 11.5556L12.3325 6.88889M8.05471 7.27778H8.06249M11.9436 11.1667H11.9514M15.4436 17V4.55556C15.4436 3.69645 14.7471 3 13.888 3H6.11024C5.25113 3 4.55469 3.69645 4.55469 4.55556V17L7.27691 15.4444L9.99913 17L12.7214 15.4444L15.4436 17ZM8.44358 7.27778C8.44358 7.49256 8.26946 7.66667 8.05469 7.66667C7.83991 7.66667 7.6658 7.49256 7.6658 7.27778C7.6658 7.063 7.83991 6.88889 8.05469 6.88889C8.26946 6.88889 8.44358 7.063 8.44358 7.27778ZM12.3325 11.1667C12.3325 11.3814 12.1584 11.5556 11.9436 11.5556C11.7288 11.5556 11.5547 11.3814 11.5547 11.1667C11.5547 10.9519 11.7288 10.7778 11.9436 10.7778C12.1584 10.7778 12.3325 10.9519 12.3325 11.1667Z"
        stroke="#6B7280"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </SVGIconBase>
  );
};

export default IconTicket;
