import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

export default function IconSwitch(props: SvgIconProps) {
  return (
    <SVGIconBase {...props} width="5" height="5" viewBox="0 0 10 8">
      <path
        d="M2.66667 5.66699V0.666992M2.66667 0.666992L1 2.33366M2.66667 0.666992L4.33333 2.33366M6.83333 2.33366V7.33366M6.83333 7.33366L8.5 5.66699M6.83333 7.33366L5.16667 5.66699"
        strokeWidth="1.13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconBase>
  );
}
