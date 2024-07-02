import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

export default function IconAddition(props: SvgIconProps) {
  return (
    <SVGIconBase {...props} width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 5V15M15 10L5 10"
        stroke="#4B5563"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </SVGIconBase>
  );
}
