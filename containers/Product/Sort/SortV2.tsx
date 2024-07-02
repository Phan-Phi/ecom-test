import React, { useMemo, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Fade, IconProps, Typography, TypographyProps, styled } from "@mui/material";

import { useToggle } from "hooks";
import { PSEUDO_STATE } from "configuration";
import { LIST_SORT_RANGE_V2 } from "constant";

interface TitleExtendsProps extends TypographyProps {
  isActive: boolean;
}

interface StyledIconExtendsProps extends IconProps {
  isActive: boolean;
  isActiveFilter: boolean;
}

interface Props {
  handleParams: (value: string) => void;
}

export default function SortV2({ handleParams }: Props) {
  const [nameSort, setNameSort] = useState(LIST_SORT_RANGE_V2[0]);
  const { on: isOpenSortRange, toggle, toggleOff: onCloseSortRange } = useToggle();

  const renderPriceItem = useMemo(() => {
    const filterSort = LIST_SORT_RANGE_V2.filter((item) => item.id !== nameSort.id);

    return filterSort.map((item, index) => {
      return (
        <ItemSort
          key={index}
          onClick={() => {
            handleParams(item.value);
            setNameSort(item);
          }}
        >
          <Typography>{item.name}</Typography>
        </ItemSort>
      );
    });
  }, [LIST_SORT_RANGE_V2, nameSort, handleParams]);

  return (
    <Box position="relative">
      <WrapperSort className="wrapper-sort" onClick={toggle}>
        <Title>{nameSort.name}</Title>
        <StyledIcon isActive={isOpenSortRange} isActiveFilter={true} />
      </WrapperSort>

      <Fade in={isOpenSortRange} timeout={500}>
        <WrapperContent>{renderPriceItem}</WrapperContent>
      </Fade>
    </Box>
  );
}

const WrapperSort = styled(Box)(({ theme }) => {
  return {
    width: "180px",
    cursor: "pointer",
    userSelect: "none",
    padding: "4px 12px",
    borderRadius: "6px",
    border: `1.5px solid ${theme.palette.primary.main}`,

    gap: "8px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    // [PSEUDO_STATE.hover]: {
    //   opacity: 0.8,
    // },

    [theme.breakpoints.down("sm")]: {
      cursor: "default",
    },

    // transition: "all 0.3s ease",
  };
});

const StyledIcon = styled(ArrowDropDownIcon, {
  shouldForwardProp: (propName) =>
    propName !== "isActive" && propName !== "isActiveFilter",
})<StyledIconExtendsProps>(({ theme, isActive, isActiveFilter }) => {
  return {
    transform: isActive ? "rotate(-180deg)" : "rotate(0)",
    color: isActiveFilter ? theme.palette.primary.main : "",
    transition: "all 0.2s ease",
  };
});

const WrapperContent = styled(Box)(({ theme }) => {
  return {
    right: 0,
    top: "38px",
    zIndex: 10,
    width: "180px",
    position: "absolute",

    cursor: "pointer",
    background: "#fff",
    borderRadius: "4px",
    border: `1.5px solid ${theme.palette.primary.main}`,
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

    [theme.breakpoints.down("sm")]: {
      width: "85vw",
      cursor: "default",
    },
  };
});

const ItemSort = styled(Box)(({ theme }) => {
  return {
    padding: "0.3rem 0.5rem",
    borderRadius: "4px",

    "&:hover": {
      backgroundColor: "#f0f0f0",
    },

    "& .MuiTypography-root": {
      ...theme.typography.paraSmall,
      color: theme.palette.text.primary,
    },
  };
});

const Title = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraSmall,
    color: theme.palette.text.primary,
  };
});
