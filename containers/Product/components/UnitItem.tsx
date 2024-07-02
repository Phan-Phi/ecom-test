import React, { Fragment } from "react";
import { Box, BoxProps, styled } from "@mui/material";

type UnitItemProps = {
  title: string;
  active: boolean;
  onClick: () => void;
};

interface WrapperExtendsProps extends BoxProps {
  active: boolean;
}

export default function UnitItem(props: UnitItemProps) {
  const { active, title, onClick } = props;

  return (
    <Fragment>
      {title && (
        <Wrapper onClick={onClick} active={active}>
          {title}
        </Wrapper>
      )}
    </Fragment>
  );
}

const Wrapper = styled(Box, {
  shouldForwardProp: (propName) => {
    return propName !== "active";
  },
})<WrapperExtendsProps>(({ theme, active }) => {
  return {
    ...theme.typography.paraSmall,
    color: active ? theme.palette.common.white : "#374151",
    cursor: "pointer",
    textAlign: "center",
    userSelect: "none",
    textTransform: "capitalize",
    background: active ? theme.palette.secondary.light : "transparent",
    width: "fit-content",

    padding: "6px 10px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    border: `1px solid ${active ? theme.palette.secondary.light : "#374151"}`,
  };
});
