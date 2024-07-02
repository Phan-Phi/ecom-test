import { Skeleton } from "@mui/material";
import React from "react";
import { ReactSVG } from "react-svg";

export interface SVGProps extends React.ComponentPropsWithoutRef<typeof ReactSVG> {}

export default function SVG(props: SVGProps) {
  return (
    <ReactSVG
      className="svg"
      loading={() => {
        return <Skeleton width={props.width ?? 30} height={props.height ?? 30} />;
      }}
      {...props}
    />
  );
}
