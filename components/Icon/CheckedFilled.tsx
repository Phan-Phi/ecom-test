import { useTheme } from "@mui/material";
import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const CheckedFilled = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SVGIconBase {...props}>
      <path strokeWidth={2} fill={theme.palette.common.black} d="M2 2h20v20H2z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={theme.palette.common.white}
        d="M18.148 7.685a.917.917 0 010 1.297l-7.333 7.333a.917.917 0 01-1.297 0l-3.667-3.667a.917.917 0 011.297-1.296l3.018 3.018 6.686-6.685a.917.917 0 011.296 0z"
      />
    </SVGIconBase>
  );
};

export default CheckedFilled;
