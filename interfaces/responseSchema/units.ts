interface Weight {
  unit: string;
  weight: number;
}

interface Price {
  currency: string;
  excl_tax: string;
  incl_tax: string;
  tax: string;
}

export interface I_UNIT {
  bar_code: string;
  date_created: string;
  date_updated: string;
  discounted_price: Price;
  editable_sku: string;
  id: number;
  is_published: boolean;
  multiply: number;
  price: Price;
  self: string;
  sku: string;
  unit: string;
  variant: string;
  weight: Weight;
}
