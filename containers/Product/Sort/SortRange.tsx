import { useRouter } from "next/router";
import { useClickAway, useUpdateEffect } from "react-use";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  Box,
  Fade,
  Stack,
  Button,
  styled,
  BoxProps,
  IconProps,
  Typography,
  TypographyProps,
} from "@mui/material";

import { useToggle } from "hooks";
import InputPrice from "./InputPrice";
import { LIST_SORT_RANGE } from "constant";
import { PSEUDO_STATE } from "configuration";

interface PriceItemExtends extends BoxProps {
  isActive: boolean;
}

interface TitleExtendsProps extends TypographyProps {
  isActive: boolean;
}

type SortRangeProps = {
  params: {
    [x: string]: any;
  };
  setParams: (newParams: object) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

interface StyledIconExtendsProps extends IconProps {
  isActive: boolean;
  isActiveFilter: boolean;
}

export default function SortRange(props: SortRangeProps) {
  const { params, setParams, setCurrentPage } = props;

  const router = useRouter();
  const asPath = router.asPath;
  const searchQuery = router.query.search;
  const priceStartQuery = router.query.price_start as any;
  const priceEndQuery = router.query.price_end as any;

  const wrapperRef = useRef(null);
  const [priceEnd, setPriceEnd] = useState<number | undefined>(undefined);
  const [priceStart, setPriceStart] = useState<number | undefined>(undefined);
  const { on: isOpenSortRange, toggle, toggleOff: onCloseSortRange } = useToggle();

  useClickAway(wrapperRef, () => {
    onCloseSortRange();
  });

  useEffect(() => {
    setPriceStart(priceStartQuery);
    setPriceEnd(priceEndQuery);
  }, []);

  useUpdateEffect(() => {
    if (
      asPath === "/" ||
      asPath === "/?page=1" ||
      asPath === "/search" ||
      asPath === `/search?search=${searchQuery}`
    ) {
      setPriceEnd(undefined);
      setPriceStart(undefined);
    }
  }, [asPath, searchQuery]);

  const renderPriceItem = useMemo(() => {
    return LIST_SORT_RANGE.map((item, index) => {
      return (
        <PriceItem
          key={index}
          onClick={() => {
            setPriceStart(item.value.priceStart);
            setPriceEnd(item.value.priceEnd);
          }}
          isActive={
            priceStart === item.value.priceStart && priceEnd === item.value.priceEnd
          }
        >
          {item.name}
        </PriceItem>
      );
    });
  }, [LIST_SORT_RANGE, priceStart, priceEnd]);

  const handleFilterPrice = useCallback(() => {
    if (priceStart === undefined && priceEnd === undefined) return;

    setParams({
      price_start: priceStart,
      price_end: priceEnd,
      page: 1,
    });
    setCurrentPage(1);
    onCloseSortRange();
  }, [priceStart, priceEnd]);

  const handleResetFilter = useCallback(() => {
    if (priceStart === undefined && priceEnd === undefined) {
      onCloseSortRange();
      return;
    }

    setPriceEnd(0);
    setPriceStart(0);

    setParams({
      price_start: undefined,
      price_end: undefined,
      page: 1,
    });
    setCurrentPage(1);
    onCloseSortRange();
  }, [priceStart, priceEnd]);

  return (
    <Box position="relative" ref={wrapperRef}>
      <WrapperSort className="wrapper-sort" onClick={toggle}>
        <Title
          isActive={params.price_start !== undefined && params.price_end !== undefined}
        >
          Giá bán
        </Title>

        <StyledIcon
          isActive={isOpenSortRange}
          isActiveFilter={
            params.price_start !== undefined && params.price_end !== undefined
          }
        />
      </WrapperSort>

      <Fade in={isOpenSortRange} timeout={500}>
        <WrapperContent>
          <Stack gap="2px">
            <Label>Giá</Label>

            <Stack gap="4px">{renderPriceItem}</Stack>

            <Stack gap="10px">
              <Label>Tự nhập khoảng giá</Label>

              <Stack gap="4px" flexDirection="row" alignItems="center">
                <InputPrice
                  placeholder="Từ"
                  NumberFormatProps={{
                    value: priceStart,
                    onValueChange: (values) => {
                      const { floatValue } = values;
                      if (floatValue == undefined) {
                        return setPriceStart(0);
                      }
                      setPriceStart(floatValue);
                    },
                  }}
                />
                <Box>-</Box>
                <InputPrice
                  placeholder="Đến"
                  NumberFormatProps={{
                    value: priceEnd,
                    onValueChange: (values) => {
                      const { floatValue } = values;
                      if (floatValue == undefined) {
                        return setPriceEnd(0);
                      }
                      setPriceEnd(floatValue);
                    },
                  }}
                />
              </Stack>

              <Stack gap="4px" flexDirection="row" width="100%">
                <ButtonReset fullWidth variant="outlined" onClick={handleResetFilter}>
                  Xóa
                </ButtonReset>

                <ButtonFilter fullWidth onClick={handleFilterPrice}>
                  Lọc
                </ButtonFilter>
              </Stack>
            </Stack>
          </Stack>
        </WrapperContent>
      </Fade>
    </Box>
  );
}

const WrapperSort = styled(Box)(({ theme }) => {
  return {
    cursor: "pointer",
    userSelect: "none",
    padding: "4px 12px",
    borderRadius: "6px",
    border: `2px solid ${theme.palette.primary.main}`,

    gap: "8px",
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

const Title = styled(Typography, {
  shouldForwardProp: (propName) => propName !== "isActive",
})<TitleExtendsProps>(({ theme, isActive }) => {
  return {
    ...theme.typography.paraXSmall,
    color: isActive ? theme.palette.primary.main : "#374151",
    transition: "all 0.2s ease",
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
    padding: "8px",
    width: "350px",
    position: "absolute",

    cursor: "pointer",
    background: "#fff",
    borderRadius: "4px",
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: "0px 8px 16px -8px rgba(15, 15, 15, 0.2)",

    [theme.breakpoints.down("sm")]: {
      width: "85vw",
      cursor: "default",
    },
  };
});

const PriceItem = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isActive",
})<PriceItemExtends>(({ theme, isActive }) => {
  return {
    fontSize: "14px",
    lineHeight: "24px",
    color: isActive ? theme.palette.primary.main : "#374151",
    fontWeight: 400,

    padding: "4px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "4px",
    borderColor: isActive ? theme.palette.primary.main : "transparent",

    [PSEUDO_STATE.hover]: {
      backgroundColor: "#f5f5f5",
    },

    userSelect: "none",
    transition: "all 0.3s ease",
  };
});

const Label = styled(Typography)(() => {
  return {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#374151",
    fontWeight: 600,
  };
});

const ButtonFilter = styled(Button)(({ theme }) => {
  return {
    padding: "8px",
    fontSize: "12px",
    lineHeight: "16px",
    backgroundColor: theme.palette.primary.main,

    [PSEUDO_STATE.hover]: {
      opacity: 0.8,
      backgroundColor: theme.palette.primary.main,
    },

    transition: "all 0.3s ease",
  };
});

const ButtonReset = styled(Button)(({ theme }) => {
  return {
    padding: "8px",
    fontSize: "12px",
    lineHeight: "16px",
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,

    [PSEUDO_STATE.hover]: {
      borderColor: theme.palette.primary.main,
    },
  };
});
