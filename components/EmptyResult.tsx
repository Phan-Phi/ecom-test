import { Stack, styled, Typography } from "@mui/material";

import { Image } from "components";

interface emptyResultProps {
  title: string;
  src: string;
  imageWidth: number;
  imageHeight: number;
  color?: string;
}

const EmptyResult = (props: emptyResultProps) => {
  const { title, src, imageWidth, imageHeight, color } = props;
  return (
    <StyledWrapperStack spacing={2} {...props}>
      <Image
        src={src}
        width={imageWidth}
        height={imageHeight}
        style={{ objectFit: "cover" }}
      />

      <StyledTitle color={color}>{title}</StyledTitle>
    </StyledWrapperStack>
  );
};

const StyledWrapperStack = styled(Stack)(() => {
  return {
    justifyContent: "center",
    alignItems: "center",
  };
});

const StyledTitle = styled(Typography, {
  shouldForwardProp: (propName) => propName !== "color",
})<Pick<emptyResultProps, "color">>((props) => {
  const { color, theme } = props;
  return {
    ...theme.typography.h6,

    alignItems: "center",

    color: color || theme.palette.common.black,
  };
});

export default EmptyResult;
