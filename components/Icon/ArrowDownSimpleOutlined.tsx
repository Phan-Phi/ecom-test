import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const ArrowDownSimpleOutlined = (props: SvgIconProps) => {
  return (
    <SVGIconBase {...props}>
      <path
        d="M15 13L10 8L5 13"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconBase>
  );
};

export default ArrowDownSimpleOutlined;
