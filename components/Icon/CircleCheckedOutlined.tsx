import { useTheme } from "@mui/material";
import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const CircleCheckedOutlined = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SVGIconBase {...props}>
      <path
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={theme.palette.common.black}
        fill="none"
        strokeWidth={2}
      />
      <rect x={6} y={6} width={12} height={12} rx={6} fill={theme.palette.common.black} />
    </SVGIconBase>
  );
};

export default CircleCheckedOutlined;
