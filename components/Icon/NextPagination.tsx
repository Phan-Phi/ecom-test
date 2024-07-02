import { Typography, useTheme } from "@mui/material";
import { SvgIconProps } from "./SVGIconBase";

export default function NextPagination(props: SvgIconProps) {
  const theme = useTheme();

  return (
    <Typography color={theme.palette.neutral[400]} variant="paraXSmall">
      Sau
    </Typography>
  );
}
