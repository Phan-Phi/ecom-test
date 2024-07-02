const generatePathname = (data: string[]) => {
  const arr = [PREFIX as string].concat(data);
  return `/${arr.join("/")}/`;
};

const PREFIX = "api/v2";
const PRODUCTS = "products";
const VARIANTS = "variants";
const IMAGES = "images";
const UNITS = "units";
const SETTINGS = "settings";
const CATEGORIES = "categories";
const CART = "cart";
const LINES = "lines";
const CREATE_ORDER = "create-order";
const SHIPPING_ADDRESSES = "shipping-addresses";

export const SETTINGS_API = generatePathname([SETTINGS]);
export const PRODUCTS_API = generatePathname([PRODUCTS]);
export const PRODUCTS_CATEGORIES_API = generatePathname([PRODUCTS, CATEGORIES]);
export const PRODUCTS_VARIANTS_API = generatePathname([PRODUCTS, VARIANTS]);

export const PRODUCTS_VARIANTS_IMAGES_API = generatePathname([
  PRODUCTS,
  VARIANTS,
  IMAGES,
]);

export const PRODUCTS_IMAGES_API = generatePathname([PRODUCTS, IMAGES]);

export const PRODUCTS_VARIANTS_UNITS_API = generatePathname([PRODUCTS, VARIANTS, UNITS]);

export const CART_API = generatePathname([CART]);
export const CART_LINES_API = generatePathname([CART, LINES]);

export const CART_CREATE_ORDER_API = generatePathname([CART, CREATE_ORDER]);
export const CART_SHIPPING_ADDRESSES_API = generatePathname([CART, SHIPPING_ADDRESSES]);
