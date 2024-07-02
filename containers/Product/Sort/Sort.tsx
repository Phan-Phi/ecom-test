import React from "react";
import { IconProps, Stack, styled, Typography, TypographyProps } from "@mui/material";

import { PSEUDO_STATE } from "configuration";

import SwapVertIcon from "@mui/icons-material/SwapVert";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

type SortProps = {
  value: string | undefined;
  onClick: () => void;
};

interface IconSortExtends extends IconProps {
  _value: undefined | string;
}

interface TextExtendsProps extends TypographyProps {
  _value: undefined | string;
}

export default function Sort(props: SortProps) {
  const { value, onClick } = props;

  return (
    <WrapperSort onClick={onClick}>
      <Text _value={value}>Giá</Text>

      {value === undefined ? <StyledSwapIcon /> : <StyledIconSort _value={value} />}
    </WrapperSort>
  );
}

const WrapperSort = styled(Stack)(({ theme }) => {
  return {
    cursor: "pointer",
    userSelect: "none",
    padding: "4px 12px",
    borderRadius: "6px",
    border: `2px solid ${theme.palette.primary.main}`,

    gap: "4px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    [PSEUDO_STATE.hover]: {
      opacity: 0.8,
    },

    [theme.breakpoints.down("sm")]: {
      cursor: "default",
    },

    transition: "all 0.3s ease",
  };
});

const Text = styled(Typography, {
  shouldForwardProp: (propName) => propName !== "_value",
})<TextExtendsProps>(({ theme, _value }) => {
  return {
    ...theme.typography.paraXSmall,
    color: _value !== undefined ? theme.palette.primary.main : "#374151",
    transition: "all 0.2s ease",
  };
});

const StyledSwapIcon = styled(SwapVertIcon)(() => {
  return {
    fontSize: "16px",
  };
});

const StyledIconSort = styled(ArrowDownwardIcon, {
  shouldForwardProp: (propName) => propName !== "_value",
})<IconSortExtends>(({ theme, _value }) => {
  return {
    fontSize: "16px",

    color: _value !== undefined ? theme.palette.primary.main : "",

    transform:
      _value !== undefined && _value[0] === "-" ? "rotate(0)" : "rotate(-180deg)",

    transition: "all 0.2s ease",
  };
});
