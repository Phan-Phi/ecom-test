import { BoxProps, styled } from "@mui/material";

import Box from "./Box/Box";
import Stack from "./Stack";
import Link from "./Link";
import { IconMessenger, IconPhoneNumber, IconZalo } from "./Icon";

interface WrapperItemProps extends BoxProps {
  fillicon: string;
}

export default function ListSharing() {
  return (
    <Wrapper>
      <Stack gap={1.5}>
        <WrapperItem fillicon="#e13847">
          <Link href="tel:0398813369">
            <IconPhoneNumber />
          </Link>
        </WrapperItem>

        <WrapperItem fillicon="#0068FF">
          <Link href="tel:0398813369">
            <IconZalo />
          </Link>
        </WrapperItem>

        <WrapperItem fillicon="#ff0097">
          <Link href="tel:0398813369">
            <IconMessenger />
          </Link>
        </WrapperItem>
      </Stack>
    </Wrapper>
  );
}
const Wrapper = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    bottom: "15%",
    right: "1rem",
    cursor: "pointer",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    zIndex: 40,
  };
});

const WrapperItem = styled(Box)<WrapperItemProps>(({ theme, fillicon }) => {
  return {
    cursor: "pointer",
    backgroundColor: fillicon,
    width: "2.5rem",
    height: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    zIndex: 40,
  };
});
