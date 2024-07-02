export interface I_PRODUCTS_VARIANTS_IMAGES {
  id: number;
  self: string;
  variant: string;
  image: {
    product_small_2x: string;
    product_small: string;
    product_list_2x: string;
    product_gallery_2x: string;
    product_list: string;
    product_gallery: string;
  };
  date_created: string;
  date_updated: string;
}
