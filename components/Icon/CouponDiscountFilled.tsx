import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const CouponDiscountFilled = (props: SvgIconProps) => {
  return (
    <SVGIconBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 7a2 2 0 00-2-2H3a2 2 0 00-2 2v.764c0 .757.449 1.44.987 1.973C2.49 10.237 3 10.991 3 12s-.509 1.763-1.013 2.263C1.449 14.796 1 15.479 1 16.236V17a2 2 0 002 2h18a2 2 0 002-2v-.764c0-.758-.449-1.44-.987-1.973C21.51 13.763 21 13.009 21 12s.509-1.763 1.013-2.263c.538-.533.987-1.216.987-1.973V7zm-12.293 7.707l4-4a1 1 0 00-1.414-1.414l-4 4a1 1 0 101.414 1.414zM9 10a1 1 0 102 0 1 1 0 00-2 0zm6 4a1 1 0 11-2 0 1 1 0 012 0z"
      />
    </SVGIconBase>
  );
};

export default CouponDiscountFilled;
