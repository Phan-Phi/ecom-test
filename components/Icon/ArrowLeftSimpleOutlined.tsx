import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const ArrowLeftSimpleOutlined = (props: SvgIconProps) => {
  return (
    <SVGIconBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.207 7.793a1 1 0 010 1.414L11.414 12l2.793 2.793a1 1 0 01-1.414 1.414l-3.5-3.5a1 1 0 010-1.414l3.5-3.5a1 1 0 011.414 0z"
      />
    </SVGIconBase>
  );
};

export default ArrowLeftSimpleOutlined;
