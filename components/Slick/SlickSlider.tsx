import Slider, { Settings } from "react-slick";
import { Box, styled, BoxProps } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

interface StyledWrapperProps extends BoxProps {
  variant: string;
}

const arrowSlick = {
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const createSettings = (variant: string) => {
  if (variant == "simple") {
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
  } else {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }
};

export default function SlickSlider({
  children,
  props,
  variant = "simple",
}: {
  children: React.ReactNode;
  props?: Settings;
  variant?: "simple" | "multiple";
}) {
  return (
    <StyledWrapper variant={variant}>
      <Slider {...createSettings(variant)} {...arrowSlick} {...props}>
        {children}
      </Slider>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Box, {
  shouldForwardProp: (propName) => {
    return propName !== "variant";
  },
})<StyledWrapperProps>(({ theme, variant }) => {
  return {
    "& .slick-slide": {
      padding: variant == "multiple" ? "0.8rem" : 0,
    },
    "& .MuiSvgIcon-root": {
      // color: theme.palette.common.black,
    },
  };
});
