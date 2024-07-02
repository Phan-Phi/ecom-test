import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

export default function IconFilter(props: SvgIconProps) {
  return (
    <SVGIconBase width="21" height="20" viewBox="0 0 21 20" {...props}>
      <path
        d="M3.5 4C3.5 3.44771 3.94772 3 4.5 3H16.5C17.0523 3 17.5 3.44772 17.5 4V5.6969C17.5 5.96211 17.3946 6.21647 17.2071 6.404L12.3484 11.2627C12.1609 11.4502 12.0556 11.7046 12.0556 11.9698V13.8889L8.94444 17V11.9698C8.94444 11.7046 8.83909 11.4502 8.65155 11.2627L3.79289 6.404C3.60536 6.21647 3.5 5.96211 3.5 5.6969V4Z"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconBase>
  );
}
