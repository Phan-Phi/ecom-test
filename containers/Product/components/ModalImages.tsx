import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Modal, styled, Grid, BoxProps, Stack, Typography } from "@mui/material";

import { useMedia } from "hooks";
import { ImageRatio, NextArrow, PrevArrow } from "components";
import { PRODUCT_LARGE_IMG_RATIO, PRODUCT_SMALL_IMG_RATIO } from "constant";

type ModalImagesProps = {
  open: boolean;
  onClose: () => void;
  imagesCarousel: string[];
  name: string;
  sku: string;
};

const settingCarouselLarge = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

interface WrapperSmallImageExtendsProps extends BoxProps {
  isActive: boolean;
}

export default function ModalImages(props: ModalImagesProps) {
  const { onClose, open, imagesCarousel, name, sku } = props;

  const { isMdDown } = useMedia();
  const sliderRef = useRef<Slider | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSmallImageClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index, true);
    }
    setCurrentIndex(index);
  };

  const renderLargeImages = useMemo(() => {
    if (imagesCarousel == undefined) return null;

    return imagesCarousel.map((item, index) => {
      return (
        <WrapperLargeImage key={index}>
          <ImageRatio
            ratio={PRODUCT_LARGE_IMG_RATIO}
            imageProps={{ src: item, alt: "img" }}
            boxProps={{ sx: { pointerEvents: "none", cursor: "pointer" } }}
          />
        </WrapperLargeImage>
      );
    });
  }, [imagesCarousel]);

  const renderSmallImages = useMemo(() => {
    if (imagesCarousel == undefined) return null;

    return imagesCarousel.map((item, index) => {
      return (
        <Grid item xs={4} key={index}>
          <WrapperSmallImage
            isActive={currentIndex === index}
            onClick={() => handleSmallImageClick(index)}
          >
            <ImageRatio
              ratio={PRODUCT_SMALL_IMG_RATIO}
              imageProps={{ src: item, alt: "img" }}
              boxProps={{ sx: { pointerEvents: "none", cursor: "pointer" } }}
            />
          </WrapperSmallImage>
        </Grid>
      );
    });
  }, [imagesCarousel, currentIndex]);

  useEffect(() => {
    if (!open) setCurrentIndex(0);
  }, [open]);

  if (!open) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      disableAutoFocus={true}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Wrapper className="wrapper_modal_image">
        <WrapperClose onClick={onClose}>
          <CloseIcon />
        </WrapperClose>

        <StyledWrapperContent>
          <Grid container spacing={isMdDown ? "12px" : "40px"}>
            <Grid item md={7} xs={12}>
              <Box>
                <Slider
                  ref={sliderRef}
                  afterChange={(curr) => {
                    if (curr !== currentIndex) setCurrentIndex(curr);
                  }}
                  {...settingCarouselLarge}
                >
                  {renderLargeImages}
                </Slider>
              </Box>
            </Grid>
            <Grid item md={5} xs={12}>
              <Stack gap="16px">
                <Stack gap="4px">
                  <StyledTitle>{name}</StyledTitle>
                  <StyledSKU>{sku}</StyledSKU>

                  <Grid container spacing="4px">
                    {renderSmallImages}
                  </Grid>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </StyledWrapperContent>
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    borderRadius: "10px",
    background: theme.palette.common.white,

    ["& .slick-slide div"]: {
      outline: "none",
    },

    ["& .slick-prev"]: {
      left: "-35px!important",
    },

    ["& .slick-next"]: {
      right: "-35px!important",
    },

    [theme.breakpoints.down("sm")]: {
      ["& .slick-prev"]: {
        left: "-28px!important",
      },

      ["& .slick-next"]: {
        right: "-28px!important",
      },
    },
  };
});

const WrapperClose = styled(Box)(({ theme }) => {
  return {
    zIndex: 99,
    top: "-12px",
    right: "-9px",
    height: "34px",
    padding: "0.3rem",
    position: "absolute",
    borderRadius: "20px",
    background: theme.palette.common.white,
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",

    "& .MuiSvgIcon-root": {
      fill: "#EF4444",
    },
  };
});

const StyledWrapperContent = styled(Box)(({ theme }) => {
  return {
    background: theme.palette.common.white,
    width: "70vw",
    maxHeight: "90vh",
    padding: "20px 40px",
    borderRadius: "10px",
    overflowY: "scroll",
    overflowX: "hidden",

    "::-webkit-scrollbar": {
      width: "7px",
    },

    "::-webkit-scrollbar-thumb": {
      background: "grey",
      borderRadius: "10px",
    },

    [theme.breakpoints.down("sm")]: {
      width: "75vw",
      padding: "20px 28px",
    },
  };
});

const WrapperLargeImage = styled(Box)(({ theme }) => {
  return {};
});

const WrapperSmallImage = styled(Box, {
  shouldForwardProp: (propName) => propName !== "isActive",
})<WrapperSmallImageExtendsProps>(({ theme, isActive }) => {
  return {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: isActive ? theme.palette.primary.main : "transparent",

    padding: "4px",
    cursor: "pointer",
    userSelect: "none",

    ":hover": {
      opacity: 0.7,
    },

    [theme.breakpoints.down("md")]: {
      cursor: "default",
    },
  };
});

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h6,
    color: theme.palette.common.black,

    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "28px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  };
});

const StyledSKU = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.paraSmall,
    color: "#6B7280",
    height: "20px !important",

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "20px",
    },
  };
});
