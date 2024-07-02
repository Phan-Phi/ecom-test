import { useMemo } from "react";
import { ImageProps } from "next/image";

import {
  BANNER_IMAGE_RATIO_DESKTOP,
  BANNER_IMAGE_RATIO_MOBILE,
  BANNER_IMAGE_RATIO_TABLET,
} from "constant";
import { useMedia } from "hooks";
import ImageRatio from "./ImageRatio";

interface Props {
  imgSrc?: ImageProps["src"];
}

export default function BannerTop({ imgSrc }: Props) {
  const { isMdDown, isSmDown } = useMedia();

  const selectRatio = useMemo(() => {
    if (isMdDown) return BANNER_IMAGE_RATIO_TABLET;

    if (isSmDown) return BANNER_IMAGE_RATIO_MOBILE;

    return BANNER_IMAGE_RATIO_DESKTOP;
  }, [isMdDown, isSmDown]);

  return (
    <ImageRatio
      ratio={selectRatio}
      imageProps={{
        alt: "banner",
        src: imgSrc ? imgSrc : "/img/banner-product.png",
        style: { objectFit: "cover" },
      }}
    />
  );
}
