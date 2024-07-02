import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { Breadcrumbs, Typography, styled } from "@mui/material";
import { Link } from "components";

type BreadcrumbItem = {
  title: string;
  href: string;
};

type BreadcrumbsCustomProps = {
  breadcrumbsData: BreadcrumbItem[];
};

export default function BreadcrumbsCustom(props: BreadcrumbsCustomProps) {
  const { breadcrumbsData } = props;
  const router = useRouter();

  const renderBreadcrumbsItem = useMemo(() => {
    if (!breadcrumbsData) return;

    return breadcrumbsData.map((item, index) => {
      const isLastItem = breadcrumbsData.length - 1 === index;

      return isLastItem ? (
        <StyledText key={index}>{item.title}</StyledText>
      ) : (
        <StyledLink key={index} href={item.href}>
          {item.title}
        </StyledLink>
      );
    });
  }, [breadcrumbsData]);

  return <Breadcrumbs>{renderBreadcrumbsItem}</Breadcrumbs>;
}

const StyledLink = styled(Link)(({ theme }) => {
  return {
    ...theme.typography.paraMedium,
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24px",
    cursor: "pointer",
    color: "#242424",
    userSelect: "none",

    ":hover": {
      color: "#7F1D1D",
    },
  };
});

const StyledText = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraMedium,
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#6B7280",

    ":hover": {
      color: "#7F1D1D",
    },
  };
});
