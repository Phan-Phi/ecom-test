import { Container, Stack, styled, Box, Typography } from "@mui/material";

import { Image } from "components";

export default function OrderSuccess() {
  return (
    <Wrapper>
      <WrapperContent>
        <Box position="relative" width={40} height={40}>
          <Image src="/img/order-success.gif" alt="order-success" />
        </Box>

        <Stack spacing={2}>
          <StyledText color="#23A757 !important" fontWeight="600 !important">
            Bạn đã đặt hàng thành công
          </StyledText>

          <StyledText>
            Chúng tôi sẽ liên hệ và giao hàng trong thời gian sớm nhất
          </StyledText>

          <StyledText>
            Bên cạnh đó, quý khách có thể liên hệ đến số Hotline:{" "}
            <span>0939 079 779</span> để được kiểm tra và hỗ trợ xử lý đơn hàng nhanh
            chóng.
          </StyledText>
        </Stack>
      </WrapperContent>
    </Wrapper>
  );
}

const Wrapper = styled(Container)(() => {
  return {
    marginTop: "2rem",
  };
});

const WrapperContent = styled(Stack)(({ theme }) => {
  return {
    // top: "50%",
    // left: "50%",
    // width: "100%",
    // position: "absolute",
    // transform: "translate(-50%, -50%)",

    [theme.breakpoints.down("md")]: {
      top: 0,
      left: 0,
      position: "static",
      transform: "translate(0)",
      padding: "40px 0",
    },

    gap: "24px",
    alignItems: "center",
    justifyContent: "center",
  };
});

const StyledText = styled(Typography)(() => {
  return {
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: 400,
    color: "#242424",
    textAlign: "center",

    "& span": {
      fontWeight: 800,
      color: "#DA1414",
    },
  };
});
