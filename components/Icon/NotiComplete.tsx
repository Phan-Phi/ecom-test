import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const IconNotiComplete = (props: SvgIconProps) => {
  return (
    <SVGIconBase viewBox="0 0 24 24" {...props}>
      <polyline
        id="primary"
        points="5 12 10 17 19 8"
        style={{
          fill: "none",
          stroke: "#22C55E",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </SVGIconBase>
  );
};

export default IconNotiComplete;
