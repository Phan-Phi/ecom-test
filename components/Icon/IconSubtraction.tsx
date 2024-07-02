import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

export default function IconSubtraction(props: SvgIconProps) {
  return (
    <SVGIconBase width="12" height="2" viewBox="0 0 12 2" fill="none" {...props}>
      <path
        d="M11 1H1"
        stroke="#4B5563"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </SVGIconBase>
  );
}
