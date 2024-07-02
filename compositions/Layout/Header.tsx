import { useMemo } from "react";
import { styled } from "@mui/material";

import { useMedia } from "hooks";
import { Box } from "components";
import HeaderMobile from "./components/HeaderMobile";
import HeaderDesktop from "./components/HeaderDesktop";

export default function Header() {
  const { isMdUp } = useMedia();

  const renderHeader = useMemo(() => {
    if (isMdUp) {
      return <HeaderDesktop />;
    }

    return <HeaderMobile />;
  }, [isMdUp]);

  return <Wrapper className="header">{renderHeader}</Wrapper>;
}

const Wrapper = styled(Box)(({ theme }) => {
  return {};
});
