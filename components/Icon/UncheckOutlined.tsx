import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const UncheckOutlined = (props: SvgIconProps) => {
  return (
    <SVGIconBase {...props}>
      <path fill="none" strokeWidth={2} d="M3 3h18v18H3z" />
    </SVGIconBase>
  );
};

export default UncheckOutlined;
