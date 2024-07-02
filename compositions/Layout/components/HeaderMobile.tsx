import React from "react";
import { get } from "lodash";
import { useRouter } from "next/router";
import { Box, Container, styled, Stack } from "@mui/material";

import Search from "./Search";
import { ROUTES } from "routes";
import { Image } from "components";
import { useSettings } from "contexts";
import HeaderCart from "./HeaderCart";
import { BOX_SHADOW_HEADER, DEFAULT_LOGO } from "constant";

export default function HeaderMobile() {
  const router = useRouter();
  const { settings } = useSettings();
  const logo = get(settings, "logo.default", DEFAULT_LOGO);

  return (
    <StyledWrapper>
      <Container sx={{ position: "relative" }}>
        <Stack
          mb="12px"
          position="relative"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <WrapperImg
            onClick={() => {
              router.push(ROUTES.home);
            }}
          >
            <Image src={logo} style={{ objectFit: "cover" }} alt="logo" />
          </WrapperImg>
        </Stack>

        <Search />

        <WrapperCart>
          <HeaderCart />
        </WrapperCart>
      </Container>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Box)(({ theme }) => {
  return {
    padding: "16px 0",

    backgroundColor: theme.palette.common.white,

    inset: 0,
    zIndex: 99,
    width: "100%",
    height: "116px",
    position: "fixed",

    boxShadow: BOX_SHADOW_HEADER,
  };
});

const WrapperImg = styled(Box)(() => {
  return {
    width: "91px",
    height: "30px",
    position: "relative",
  };
});

const WrapperCart = styled(Box)(() => {
  return {
    position: "absolute",
    top: 0,
    right: "25px",
    zIndex: 99,
  };
});
