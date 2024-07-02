import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const InfoCircleOutlined = (props: SvgIconProps) => {
  return (
    <SVGIconBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1z"
      />
    </SVGIconBase>
  );
};

export default InfoCircleOutlined;
