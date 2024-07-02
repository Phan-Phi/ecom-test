import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

export default function IconClose(props: SvgIconProps) {
  return (
    <SVGIconBase {...props} width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 15L15 5M5 5L15 15"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconBase>
  );
}
