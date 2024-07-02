import React from "react";
import { Grid, Skeleton, styled } from "@mui/material";

type LoadingCartItemProps = {
  height?: number;
};

export default function LoadingCartItem({ height = 150 }: LoadingCartItemProps) {
  return (
    <Grid container spacing="12px">
      <Grid item xs={4}>
        <StyledSkeleton height={height} variant="rounded" animation="wave" />
      </Grid>
      <Grid item xs={8}>
        <StyledSkeleton height={height} variant="rounded" animation="wave" />
      </Grid>
    </Grid>
  );
}

const StyledSkeleton = styled(Skeleton)(() => {
  return {
    backgroundColor: "#f5f5f5",
  };
});
