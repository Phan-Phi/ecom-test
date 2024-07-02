import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const ArrowRightSimpleOutlined = (props: SvgIconProps) => {
  return (
    <SVGIconBase {...props} fill="blue">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.793 7.793a1 1 0 000 1.414L12.586 12l-2.793 2.793a1 1 0 101.414 1.414l3.5-3.5a1 1 0 000-1.414l-3.5-3.5a1 1 0 00-1.414 0z"
      />
    </SVGIconBase>
  );
};

export default ArrowRightSimpleOutlined;
