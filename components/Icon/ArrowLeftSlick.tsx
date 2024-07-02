import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const ArrowLeftSlick = (props: SvgIconProps) => {
  return (
    <SVGIconBase {...props} width="30" height="31" viewBox="0 0 30 31" fill="none">
      <path
        d="M13.75 19.25L10 15.5M10 15.5L13.75 11.75M10 15.5L20 15.5M3.75 15.5C3.75 9.2868 8.7868 4.25 15 4.25C21.2132 4.25 26.25 9.2868 26.25 15.5C26.25 21.7132 21.2132 26.75 15 26.75C8.7868 26.75 3.75 21.7132 3.75 15.5Z"
        stroke="#111827"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconBase>
  );
};

export default ArrowLeftSlick;
