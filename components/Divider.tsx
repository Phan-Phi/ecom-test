import React, { Fragment } from "react";

import { Divider as MuiDivider } from "@mui/material";
import { Spacing } from "components";

interface dividerProps {
  spacingTop?: number;
  spacingBottom?: number;
}

const Divider = (props: dividerProps) => {
  const { spacingTop, spacingBottom } = props;

  return (
    <Fragment>
      <Spacing spacing={spacingTop || 2} />
      <MuiDivider />
      <Spacing spacing={spacingBottom || 2} />
    </Fragment>
  );
};

export default Divider;
