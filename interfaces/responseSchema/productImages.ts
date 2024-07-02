export interface I_PRODUCT_IMAGES {
  alt: string;
  date_created: string;
  date_updated: string;
  id: number;
  image: {
    product_small_2x: string;
    product_small: string;
    product_list_2x: string;
    product_gallery_2x: string;
    product_list: string;
    product_gallery: string;
  };
  product_gallery: string;
  product_gallery_2x: string;
  product_list: string;
  product_list_2x: string;
  product_small: string;
  product_small_2x: string;
  product: string;
  self: string;
  sort_order: number;
  variant_images: string;
  variants: string;
}
