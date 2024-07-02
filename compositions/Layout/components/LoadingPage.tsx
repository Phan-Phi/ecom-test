import { Loading } from "components";
import { useEvent } from "react-use";
import React, { useCallback, useEffect, useState } from "react";
import { Box, styled, BoxProps } from "@mui/material";

interface ExtendedBoxProps extends BoxProps {
  checked: boolean;
}

const LoadingPageWhenPageChange = () => {
  const [checked, setChecked] = useState(false);

  // const cb = useCallback(() => {
  //   document.body.removeAttribute("style");
  //   document.querySelector(".loading-page")?.classList.add("loaded");
  // }, []);

  // useEvent("load", cb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setChecked(true);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoadingPageContainer className="loading-page" checked={checked}>
      <Content className="loading-page__content">
        <Loading />
      </Content>
    </LoadingPageContainer>
  );
};

// const LoadingPageContainer = styled(Box)(({ theme }) => {
//   return {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     zIndex: 99999999999999,

//     width: "100vw",
//     height: "100vh",

//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",

//     opacity: 1,
//     transition: "700ms",

//     ["&.loaded"]: {
//       opacity: 0,
//       zIndex: -1,
//       pointerEvents: "none",
//     },
//   };
// });

const LoadingPageContainer = styled(Box, {
  shouldForwardProp: (propName) => {
    return propName !== "checked";
  },
})<ExtendedBoxProps>(({ theme, checked }) => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 99999999999999,

    width: "100vw",
    height: "100vh",

    opacity: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",

    ...(checked && {
      opacity: 0,
      zIndex: -1,
      pointerEvents: "none",
    }),

    transition: "700ms",
  };
});

const Content = styled(Box)(() => {
  return {
    "@keyframes pulse-effect": {
      "0%": {
        opacity: 1,
        transform: "scale(1)",
      },
      "50%": {
        transform: "scale(1.05)",
      },
      "100%": {
        opacity: 1,
        transform: "scale(1)",
      },
    },

    ["& .loading-page__image"]: {
      animation: `pulse-effect 2000ms infinite`,
    },
  };
});

export default LoadingPageWhenPageChange;
