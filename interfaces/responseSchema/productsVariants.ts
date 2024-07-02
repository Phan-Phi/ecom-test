export interface I_PRODUCTS_VARIANTS {
  id: number;
  self: string;
  product: string;
  is_default: boolean;
  units: string;
  variant_images: string;
  images: string;
  attributes: string;
  attributesrelated: string;
  date_created: string;
  date_updated: string;
  sku: string;
  editable_sku: string;
  unit: string;
  weight: {
    unit: string;
    weight: number;
  };
  bar_code: string;
  name: string;
  track_inventory: boolean;
  price: {
    currency: string;
    excl_tax: string;
    incl_tax: string;
    tax: string;
  };
  allocated_quantity: number;
  list_id_values: string;
  discounted_price: {
    currency: string;
    excl_tax: string;
    incl_tax: string;
    tax: string;
  };
}
