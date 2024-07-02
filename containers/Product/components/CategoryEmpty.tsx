import React from "react";
import { Stack, Typography, styled } from "@mui/material";

export default function CategoryEmpty() {
  return (
    <Stack alignItems="center" justifyContent="center">
      <StyledText>Danh mục hiện trống</StyledText>
    </Stack>
  );
}

const StyledText = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraSmall,
    fontSize: "14px",
    lineHeight: "20px",
    color: theme.palette.common.black,
  };
});
