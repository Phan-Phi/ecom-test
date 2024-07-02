export interface I_CATEGORIES {
  id: number;
  self: string;
  parent: string | null;
  image: {};
  children: string | null;
  products: string | null;
  product_categories: string | null;
  lft: number;
  rght: number;
  tree_id: number;
  level: number;
  name: string;
  description: string;
  image_alt: string;
}
