import React from "react";
import { Image } from "components";
import { Stack, Box, Typography, styled } from "@mui/material";

export default function CartEmpty() {
  return (
    <Wrapper>
      <Box position="relative" width="40px" height="40px">
        <Image src="/img/cart-empty.gif" alt="cart-empty" />
      </Box>

      <StyledText>Không có sản phẩm trong giỏ hàng của bạn</StyledText>
    </Wrapper>
  );
}

const Wrapper = styled(Stack)(({ theme }) => {
  return {
    width: "100%",
    padding: "100px 0",
    alignItems: "center",
    flexDirection: "column",
  };
});

const StyledText = styled(Typography)(({ theme }) => {
  return {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "24px",
    textAlign: "center",
    color: theme.palette.destructive["900"],
  };
});
