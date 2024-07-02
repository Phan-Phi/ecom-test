import { CustomArrowProps } from "react-slick";
import { styled } from "@mui/material";
import ArrowLeftSlick from "components/Icon/ArrowLeftSlick";

export default function PrevArrow(props: CustomArrowProps) {
  const { className, onClick } = props;

  return <StyledIcon className={className} onClick={onClick} />;
}

const StyledIcon = styled(ArrowLeftSlick)(({ theme }) => {
  return {
    zIndex: 50,
    left: "-35px!important",
    width: "30px!important",
    height: "30px!important",

    [theme.breakpoints.down("md")]: {
      width: "24px!important",
      height: "24px!important",
    },
  };
});
