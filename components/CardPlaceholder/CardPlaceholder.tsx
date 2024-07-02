import React from "react";
import { Stack, Skeleton, useTheme } from "@mui/material";

const CardPlaceholder = () => {
  const theme = useTheme();

  return (
    <Stack spacing={0.5}>
      <Skeleton
        variant="rounded"
        height={250}
        animation="wave"
        sx={{ bgcolor: theme.palette.neutral[300] }}
      />
      <Skeleton
        variant="text"
        height={15}
        animation="wave"
        sx={{ bgcolor: theme.palette.neutral[300] }}
      />
      <Skeleton
        variant="text"
        height={15}
        animation="wave"
        sx={{ bgcolor: theme.palette.neutral[300] }}
      />
    </Stack>
  );
};

export default CardPlaceholder;
