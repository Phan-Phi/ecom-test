import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useSWR from "swr";
import Slider from "react-slick";
import { isEmpty } from "lodash";
import { styled, Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

import { PRODUCTS_API } from "apis";
import { transformUrl } from "utils";
import ProductModal from "compositions/Modal/ProductModal";
import { I_PRODUCTS, ResponseProductType } from "interfaces";
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
  categoryId: string;
  productId: number;
};

export default function ProductSameCategory(props: ProductSameCategoryProps) {
  const { categoryId, productId } = props;

  const [productData, setProductData] = useState<I_PRODUCTS[]>([]);
  const [open, setOpen] = useState(false);
  const [dataModal, setDataModal] = useState("");

  const { data: resProductData } = useSWR<ResponseProductType<I_PRODUCTS>>(() => {
    if (!categoryId) return;

    return transformUrl(PRODUCTS_API, {
      limit: 200,
      category: categoryId,
    });
  });

  const handleOpen = (data: any) => {
    setDataModal(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!resProductData) return;

    const filteredProducts = resProductData.results.filter(
      (item) => item.id !== productId
    );

    setProductData(filteredProducts);
  }, [resProductData, productId]);

  const renderProducts = useMemo(() => {
    if (!productData) return null;

    return productData.map((item, index) => {
      return (
        <WrapperSliderItem key={item.id}>
          <CardProductItem
            nameProduct={item.name}
            handleOpen={handleOpen}
            id={item.id}
            defaultVariant={item.default_variant}
          />
        </WrapperSliderItem>
      );
    });
  }, [productData]);

  const memoSettings = useMemo(() => {
    if (productData.length < 4) {
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
  }, [defaultSettings, productData]);

  if (isEmpty(productData)) return null;

  return (
    <Wrapper>
      <StyledTitle>Sản phẩm cùng danh mục</StyledTitle>

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
