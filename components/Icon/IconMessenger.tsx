import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const IconMessenger = (props: SvgIconProps) => {
  return (
    <SVGIconBase
      {...props}
      width="44"
      height="44"
      fill="none"
      viewBox="0 0 44 44"
      style={{ width: "1.4em", height: "1.4em", display: "block" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.0026 7.70215C14.1041 7.70215 7.70117 13.6308 7.70117 20.9442C7.70117 25.1115 9.78083 28.8286 13.0309 31.256V36.305L17.9004 33.6325C19.2 33.9922 20.5767 34.1863 22.0026 34.1863C29.9011 34.1863 36.304 28.2576 36.304 20.9442C36.304 13.6308 29.9011 7.70215 22.0026 7.70215ZM23.4221 25.5314L19.7801 21.6471L12.6738 25.5314L20.4908 17.2331L24.2216 21.1174L31.239 17.2331L23.4221 25.5314Z"
        fill="white"
      ></path>
    </SVGIconBase>
  );
};

export default IconMessenger;
