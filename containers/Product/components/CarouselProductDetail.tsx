import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useRouter } from "next/router";
import { useUpdateEffect } from "react-use";
import React, { useCallback, useMemo, useState } from "react";
import { Box, BoxProps, Stack, StackProps, styled } from "@mui/material";

import {
  DEFAULT_IMAGE,
  PRODUCT_LARGE_IMG_RATIO,
  PRODUCT_SMALL_IMG_RATIO,
} from "constant";
import { useToggle } from "hooks";
import ModalImages from "./ModalImages";
import { ImageRatio, NextArrow, PrevArrow } from "components";

type CarouselProductDetailProps = {
  imagesCarousel: string[];
  name: string;
  sku: string;
  disableModalImages?: boolean;
};

interface WrapperSmallImageExtendsProps extends BoxProps {
  isActive: boolean;
}

interface StyledWrapperExtends extends StackProps {
  showPrev: boolean;
  showNext: boolean;
}

const SLIDES_TO_SHOW = 3;

const settingCarouselSmall = {
  speed: 500,
  arrows: true,
  slidesToShow: SLIDES_TO_SHOW,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  infinite: false,
  draggable: false,
  initialSlide: 0,
};

export default function CarouselProductDetail(props: CarouselProductDetailProps) {
  const { imagesCarousel, name, sku, disableModalImages = false } = props;

  const router = useRouter();
  const { on, toggleOn, toggleOff } = useToggle();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  useUpdateEffect(() => {
    setCurrentIndex(0);
    setShowPrev(false);
    setShowNext(true);
  }, [router.asPath]);

  const onHoverSmallImage = useCallback(
    (index: number) => () => {
      setCurrentIndex(index);
    },
    []
  );

  const handleBeforeChange = useCallback(
    (oldIndex: number, newIndex: number) => {
      setShowPrev(newIndex > 0);
      setShowNext(newIndex < imagesCarousel.length - SLIDES_TO_SHOW);
    },
    [imagesCarousel]
  );

  const renderLargeImage = useMemo(() => {
    if (imagesCarousel == undefined) return null;

    return (
      <Box onClick={toggleOn}>
        <ImageRatio
          ratio={PRODUCT_LARGE_IMG_RATIO}
          imageProps={{ src: imagesCarousel[currentIndex] || DEFAULT_IMAGE, alt: "img" }}
          boxProps={{ sx: { pointerEvents: "none", cursor: "pointer" } }}
        />
      </Box>
    );
  }, [imagesCarousel, currentIndex]);

  const renderSmallImages = useMemo(() => {
    if (imagesCarousel == undefined) return null;

    return imagesCarousel.map((item, index) => {
      return (
        <Box
          key={index}
          padding="0 4px"
          onClick={toggleOn}
          onMouseEnter={onHoverSmallImage(index)}
        >
          <WrapperSmallImage isActive={index === currentIndex}>
            <ImageRatio
              ratio={PRODUCT_SMALL_IMG_RATIO}
              imageProps={{ src: item, alt: "img" }}
              boxProps={{ sx: { pointerEvents: "none", cursor: "pointer" } }}
            />
          </WrapperSmallImage>
        </Box>
      );
    });
  }, [imagesCarousel, currentIndex]);

  return (
    <StyledWrapper
      gap="24px"
      showNext={showNext}
      showPrev={showPrev}
      className="wrapper_carousel"
    >
      {renderLargeImage}

      <Box padding="0 30px">
        <Slider
          key={router.asPath}
          beforeChange={handleBeforeChange}
          {...settingCarouselSmall}
        >
          {renderSmallImages}
        </Slider>
      </Box>

      <ModalImages
        sku={sku}
        name={name}
        onClose={toggleOff}
        imagesCarousel={imagesCarousel}
        open={disableModalImages ? false : on}
      />
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Stack, {
  shouldForwardProp: (propName) => propName !== "showPrev" && propName !== "showNext",
})<StyledWrapperExtends>(({ showPrev, showNext }) => {
  return {
    ["& .slick-slide div"]: {
      outline: "none",
    },

    ["& .slick-prev"]: {
      opacity: showPrev ? 1 : 0.3,
      pointerEvents: showPrev ? "" : "none",
      transition: "all 0.3s ease",
    },

    ["& .slick-next"]: {
      opacity: showNext ? 1 : 0.3,
      pointerEvents: showNext ? "" : "none",
      transition: "all 0.3s ease",
    },
  };
});

const WrapperSmallImage = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isActive",
})<WrapperSmallImageExtendsProps>(({ theme, isActive }) => {
  return {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: isActive ? theme.palette.primary.main : "transparent",

    padding: "4px",
    transition: "all 0.1s ease",
  };
});
