import React from "react";
import { Image } from "components";
import { Stack, Typography, styled, Box } from "@mui/material";

type NotifyNoResultForSearchProps = {
  searchQuery: string;
};

export default function NotifyNoResultForSearch({
  searchQuery,
}: NotifyNoResultForSearchProps) {
  return (
    <Stack flexDirection="column" alignItems="center" justifyContent="center" gap="16px">
      <Box position="relative" width={40} height={40}>
        <Image src="/img/search.png" alt="search" />
      </Box>

      <StyledText>{`Không có kết quả tìm kiếm cho "${searchQuery}"`}</StyledText>
    </Stack>
  );
}

const StyledText = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h6,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#7F1D1D",
  };
});
