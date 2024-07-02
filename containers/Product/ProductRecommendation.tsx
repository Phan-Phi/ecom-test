import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { isEmpty } from "lodash";
import React, { useMemo, useState } from "react";
import { styled, Box, Typography } from "@mui/material";

import { I_PRODUCTS } from "interfaces";
import ProductModal from "compositions/Modal/ProductModal";
import { CardProductItem, NextArrow, PrevArrow } from "components";

const defaultSettings = {
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

type ProductSameCategoryProps = {
  data: I_PRODUCTS[];
};

export default function ProductRecommendation(props: ProductSameCategoryProps) {
  const { data } = props;
  const [open, setOpen] = useState(false);
  const [dataModal, setDataModal] = useState("");

  const handleOpen = (data: any) => {
    setDataModal(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderProducts = useMemo(() => {
    if (!data) return null;

    return data.map((item, index) => {
      return (
        <WrapperSliderItem key={item.id}>
          <CardProductItem
            id={item.id}
            nameProduct={item.name}
            handleOpen={handleOpen}
            defaultVariant={item.default_variant}
          />
        </WrapperSliderItem>
      );
    });
  }, [data]);

  const memoSettings = useMemo(() => {
    if (data.length < 4) {
      return {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      };
    }

    return defaultSettings;
  }, [defaultSettings, data]);

  if (isEmpty(data)) return null;

  return (
    <Wrapper>
      <StyledTitle>Sản phẩm được mua chung</StyledTitle>

      <WrapperSlider>
        <Slider {...memoSettings}>{renderProducts}</Slider>
      </WrapperSlider>

      <ProductModal open={open} handleClose={handleClose} dataModal={dataModal} />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(({ theme }) => {
  return {
    gap: "16px",
    display: "flex",
    marginTop: "10px",
    flexDirection: "column",

    ["& .slick-slide div"]: {
      outline: "none",
    },

    [theme.breakpoints.down("sm")]: {
      ["& .slick-prev"]: {
        left: "-10px!important",
        width: "32px!important",
        height: "32px!important",
        top: "46%",
      },

      ["& .slick-next"]: {
        right: "-10px!important",
        width: "32px!important",
        height: "32px!important",
        top: "46%",
      },
    },
  };
});

const WrapperSlider = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    padding: "0 24px",

    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  };
});

const WrapperSliderItem = styled(Box)(({ theme }) => {
  return {
    padding: "16px 12px",

    [theme.breakpoints.down("sm")]: {
      padding: "16px 6px",
    },
  };
});

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h5,

    fontSize: "20px",
    lineHeigh: "24px",

    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "24px",
    },

    fontWeight: 700,
    color: theme.palette.common.black,
  };
});
