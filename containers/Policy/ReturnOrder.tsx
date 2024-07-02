import React from "react";
import { ImageRatio } from "components";
import { DATA_BREADCRUMBS } from "routes";
import { BreadcrumbsCustom } from "compositions";
import { Container, Typography, styled, Stack, Divider } from "@mui/material";

export default function ReturnOrder() {
  return (
    <Container>
      <BreadcrumbsCustom breadcrumbsData={DATA_BREADCRUMBS.returnOrder} />

      <Stack gap="32px">
        <Title>CHÍNH SÁCH HOÀN TRẢ</Title>

        <ImageRatio ratio="16/9" imageProps={{ src: "/img/hoan-tra.jpg", alt: "img" }} />

        <Divider />

        <Stack gap="24px">
          <Text>
            - Khi xảy ra các sự cố liên quan đến đơn hàng của khách hàng thì The Hill
            Store có trách nhiệm tiếp nhận và xử lý đúng theo quy trình xử lý khiếu nại,
            tìm nguyên nhân dẫn đến sự cố sau đó theo dõi và thu hồi lại phần thiệt hại
            cho công ty nếu có.
          </Text>

          <Text>
            - Sau khi chốt đơn hàn với khách hàng thì The Hill Store sẽ thống nhất và xác
            nhận với khách hàng về phương thức vận chuyển. Nếu không có xác nhận của khách
            hàng thì khi xảy ra sự cố liên quan đến đơn hàng thì The Hill Store sẽ hoàn
            toàn chịu trách nhiệm.
          </Text>

          <Text>
            - Đơn hàng xảy ra sự cố do đóng gói không đúng quy định thì The Hill Store sẽ
            hoàn toàn chịu trách nhiệm.
          </Text>

          <Text>
            - Khi xảy ra sự cố, The Hill Store sẽ truy lại, tìm nguyên nhân và xác nhận
            lỗi nhằm đưa ra phương án giải quyết phù hợp.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}

const Title = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h2,
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: 700,
    color: "#111827",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "20px",
    },
  };
});

const Text = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraMedium,
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: 400,
    color: "#374151",
    textAlign: "justify",
  };
});
