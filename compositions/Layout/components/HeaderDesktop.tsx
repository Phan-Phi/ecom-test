import React from "react";
import { get } from "lodash";
import { useRouter } from "next/router";
import { Box, Container, Stack, styled } from "@mui/material";

import Search from "./Search";
import { Image } from "components";
import HeaderCart from "./HeaderCart";

import { ROUTES } from "routes";
import { useSettings } from "contexts";
import { BOX_SHADOW_HEADER, DEFAULT_LOGO } from "constant";

export default function HeaderDesktop() {
  const router = useRouter();
  const { settings } = useSettings();
  const logo = get(settings, "logo.default", DEFAULT_LOGO);

  return (
    <StyledWrapper>
      <Container>
        <Stack flexDirection="row" alignItems="center" gap="150px">
          <WrapperImg
            onClick={() => {
              router.push(ROUTES.home);
            }}
          >
            <Image src={logo} style={{ objectFit: "cover" }} alt="logo" />
          </WrapperImg>

          <Box paddingRight="10px" flex={1}>
            <Search />
          </Box>

          <HeaderCart />
        </Stack>
      </Container>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Box)(({ theme }) => {
  return {
    padding: "24px 0",
    backgroundColor: theme.palette.common.white,

    inset: 0,
    zIndex: 99,
    width: "100%",
    height: "90px",
    position: "fixed",
    boxShadow: BOX_SHADOW_HEADER,
  };
});

const WrapperImg = styled(Box)(() => {
  return {
    width: "89px",
    height: "40px",
    position: "relative",
    cursor: "pointer",
  };
});
