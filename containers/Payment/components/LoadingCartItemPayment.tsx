import React, { useMemo } from "react";
import { Grid, Skeleton, Stack, styled } from "@mui/material";

type LoadingCartItemPaymentProps = {
  length?: number;
  height?: number;
};

export default function LoadingCartItemPayment({
  height = 150,
  length = 4,
}: LoadingCartItemPaymentProps) {
  const renderItem = useMemo(() => {
    return Array(length)
      .fill(0)
      .map((item, index) => {
        return (
          <Grid container spacing="12px" key={index}>
            <Grid item xs={4}>
              <StyledSkeleton height={height} variant="rounded" animation="wave" />
            </Grid>
            <Grid item xs={8}>
              <StyledSkeleton height={height} variant="rounded" animation="wave" />
            </Grid>
          </Grid>
        );
      });
  }, [length, height]);

  return <Stack gap="16px">{renderItem}</Stack>;
}

const StyledSkeleton = styled(Skeleton)(() => {
  return {
    backgroundColor: "#f5f5f5",
  };
});
