import { isEmpty } from "lodash";
import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Collapse from "@mui/material/Collapse";
import CircularProgress from "@mui/material/CircularProgress";
import { styled, Stack, Typography, IconProps } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useFetchCategory, useToggle } from "hooks";
import CategoryEmpty from "../components/CategoryEmpty";

interface IconExtendsProps extends IconProps {
  checked: boolean;
}

export default function CategoryForSearch() {
  const router = useRouter();
  const searchQuery = router.query.search;

  const { toggle, on: checked } = useToggle(true);
  const { categoryData, isLoadingCategory } = useFetchCategory();

  const renderCategoryItem = useMemo(() => {
    const LoadingComponent = (
      <Stack alignItems="center" justifyContent="center">
        <CircularProgress size="24px" />
      </Stack>
    );

    let content: React.ReactNode = null;

    if (categoryData == undefined) {
      content = LoadingComponent;
    } else if (isEmpty(categoryData) && !isLoadingCategory) {
      content = <CategoryEmpty />;
    } else {
      if (isLoadingCategory) {
        content = LoadingComponent;
      } else {
        content = (
          <WrapperContent>
            {categoryData.map((item, index) => {
              return (
                <StyledText
                  key={index}
                  onClick={() => {
                    router.push(
                      `/search/?search=${searchQuery}&category=${item.id}`,
                      `/search/?search=${searchQuery}&category=${item.id}`,
                      {
                        shallow: false,
                        scroll: true,
                      }
                    );
                  }}
                  onMouseDown={(e) => {
                    if (e.button === 1) {
                      e.preventDefault();

                      window.open(
                        `/search/?search=${searchQuery}&category=${item.id}`,
                        "_blank"
                      );
                    }
                  }}
                >
                  {item.name}
                </StyledText>
              );
            })}
          </WrapperContent>
        );
      }
    }

    return content;
  }, [categoryData, isLoadingCategory, searchQuery]);

  return (
    <Wrapper>
      <WrapperHeader onClick={toggle}>
        <Title>Danh Mục</Title>
        <StyledIcon checked={checked} />
      </WrapperHeader>

      <Collapse in={checked}>{renderCategoryItem}</Collapse>
    </Wrapper>
  );
}

const Wrapper = styled(Stack)(() => {
  return {
    gap: "4px",
  };
});

const WrapperHeader = styled(Stack)(({ theme }) => {
  return {
    userSelect: "none",
    cursor: "pointer",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      cursor: "default",
    },
  };
});

const WrapperContent = styled(Stack)(() => {
  return {
    gap: "4px",
  };
});

const Title = styled(Typography)(() => {
  return {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 600,
    color: "#111827",
  };
});

const StyledIcon = styled(KeyboardArrowDownIcon, {
  shouldForwardProp: (propName) => propName !== "checked",
})<IconExtendsProps>(({ checked }) => {
  return {
    color: "#6B7280",
    transform: checked ? "rotate(180deg)" : "rotate(0)",
    transition: "all 0.2s ease",
  };
});

const StyledText = styled(Typography)(({ theme }) => {
  return {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    color: "#6B7280",

    cursor: "pointer",

    [theme.breakpoints.down("sm")]: {
      cursor: "default",
    },
  };
});
