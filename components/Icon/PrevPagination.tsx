import { SvgIconProps, Typography, useTheme } from "@mui/material";

export default function PrevPagination(props: SvgIconProps) {
  const theme = useTheme();
  return (
    <Typography color={theme.palette.neutral[400]} variant="paraXSmall">
      Trước
    </Typography>
  );
}
