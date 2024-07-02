import { Fragment } from "react";
import { BoxProps, styled } from "@mui/material";
import { useRouter } from "next/router";

import Header from "./Header";
import Footer from "./Footer";
import SEO from "compositions/Seo/SEO";
import LoadingPage from "./components/LoadingPage";

import { BackToTop, Box, Stack } from "components";

export interface ExtendedBoxProps extends BoxProps {
  acticveFlex?: boolean;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();

  return (
    <Fragment>
      <SEO />

      <LoadingPage />

      <StyledStack>
        <Header />

        <WrapperZalo
          className="zalo-chat-widget"
          data-oaid="3242396384781881424"
          data-welcome-message="Rất vui khi được hỗ trợ bạn!"
          data-autopopup="0"
          data-width=""
          data-height=""
          zIndex="10!important"
        />

        <BackToTop />

        <MainChildren
          acticveFlex={pathname === "/order-success" ? true : false}
          className="body"
        >
          {children}
        </MainChildren>

        <Footer />
      </StyledStack>
    </Fragment>
  );
}

const StyledStack = styled(Stack)({
  minHeight: "100vh",
  overflow: "hidden",
});

const WrapperZalo = styled(Box)({
  bottom: "85px !important",
  right: "1rem !important",
});

const MainChildren = styled(Box, {
  shouldForwardProp: (propName) => {
    return propName !== "acticveFlex";
  },
})<ExtendedBoxProps>(({ theme, acticveFlex }) => {
  return {
    flexGrow: 1,
    overflow: "hidden",
    paddingTop: "90px",
    position: "relative",
    margin: "4px 0 12px 0",

    ...(acticveFlex && {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }),

    [theme.breakpoints.down("md")]: {
      paddingTop: "116px",
    },
  };
});
