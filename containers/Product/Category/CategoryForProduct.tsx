import {
  Stack,
  styled,
  Tooltip,
  IconProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Collapse from "@mui/material/Collapse";
import { useFetchCategory, useToggle } from "hooks";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface IconExtendsProps extends IconProps {
  checked: boolean;
}

type CategoryForProductProps = {
  categorySelected: string;
};

interface StyledTextExtends extends TypographyProps {
  isActive: string;
}

export default function CategoryForProduct({
  categorySelected,
}: CategoryForProductProps) {
  const router = useRouter();
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
    } else {
      if (isLoadingCategory) {
        content = LoadingComponent;
      } else {
        content = (
          <WrapperContent>
            {categorySelected !== "" && (
              <StyledParentCategory>{categorySelected}</StyledParentCategory>
            )}
            {categoryData.map((item, index) => {
              return (
                <StyledToolTip key={index} title={item.name}>
                  <StyledText
                    onClick={() => {
                      router.push(`/?category=${item.id}`, `/?category=${item.id}`, {
                        shallow: false,
                        scroll: true,
                      });
                    }}
                    onMouseDown={(e) => {
                      if (e.button === 1) {
                        e.preventDefault();

                        window.open(`/?category=${item.id}`, "_blank");
                      }
                    }}
                    isActive={categorySelected}
                  >
                    {item.name}
                  </StyledText>
                </StyledToolTip>
              );
            })}
          </WrapperContent>
        );
      }
    }

    return content;
  }, [categoryData, isLoadingCategory, categorySelected]);

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

const StyledParentCategory = styled(Typography)(({ theme }) => {
  return {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 700,
    color: "#242424",

    [theme.breakpoints.down("sm")]: {
      cursor: "default",
    },
  };
});

const StyledText = styled(Typography, {
  shouldForwardProp: (propName) => propName !== "isActive",
})<StyledTextExtends>(({ theme, isActive }) => {
  return {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    color: "#6B7280",
    cursor: "pointer",
    paddingLeft: isActive !== "" ? "10px" : 0,

    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    userSelect: "none",

    [theme.breakpoints.down("md")]: {
      cursor: "default",
      width: "max-content",
    },
  };
});

const StyledToolTip = styled(Tooltip)(() => {
  return {};
});
