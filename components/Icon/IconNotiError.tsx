import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const IconNotiError = (props: SvgIconProps) => {
  return (
    <SVGIconBase viewBox="0 0 12 12" fill="none" sx={{ color: "transparent" }} {...props}>
      <path
        d="M1 11L11 1M1 1L11 11"
        stroke="#EF4444"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconBase>
  );
};

export default IconNotiError;
