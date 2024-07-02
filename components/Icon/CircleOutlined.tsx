import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const CircleOutlined = (props: SvgIconProps) => {
  return (
    <SVGIconBase {...props}>
      <path strokeWidth={2} fill="none" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </SVGIconBase>
  );
};

export default CircleOutlined;
