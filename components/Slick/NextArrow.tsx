import { styled } from "@mui/material";
import { CustomArrowProps } from "react-slick";
import ArrowRightSlick from "components/Icon/ArrowRightSlick";

export default function NextArrow(props: CustomArrowProps) {
  const { className, onClick } = props;

  return <StyledIcon className={className} onClick={onClick} />;
}

const StyledIcon = styled(ArrowRightSlick)(({ theme }) => {
  return {
    zIndex: 50,
    right: "-35px!important",

    width: "30px!important",
    height: "30px!important",

    [theme.breakpoints.down("md")]: {
      width: "24px!important",
      height: "24px!important",
    },
  };
});
