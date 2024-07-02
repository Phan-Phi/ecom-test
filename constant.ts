// Default Images
export const DEFAULT_IMAGE = "/img/beans-coffee.jpg";
export const DEFAULT_LOGO = "/img/default_logo.png";
// --------------------

// Default Ratio Image
export const IMG_RATIO_1_1 = 1 / 1;
export const IMG_RATIO_3_1 = 3 / 1;
export const IMG_RATIO_15_8 = 15 / 8;
export const IMG_RATIO_16_9 = 16 / 9;

// Banner
export const BANNER_IMAGE_RATIO_DESKTOP = "1150/384";
export const BANNER_IMAGE_RATIO_TABLET = "768/256";
export const BANNER_IMAGE_RATIO_MOBILE = "320/107";

// CardProduct
export const CARD_PRODUCT_IMAGE_RATIO = "283/283";
export const CARD_PRODUCT_IMAGE_RATIO_MOBILE = "136/136";

export const PRODUCT_LARGE_IMG_RATIO = "539/539";
export const PRODUCT_SMALL_IMG_RATIO = "163/163";

// Cart
export const CART_IMG_RATIO = "116/116";
// ------

// Default Prefix
export const CURRENCY = "VNĐ";
export const PREFIX_PROVINCE = "P_";
export const PREFIX_DISTRICT = "D_";
export const PREFIX_WARD = "W_";
// ------

// Default Interval
export const REFRESH_INTERVAL_CART = 15000;
// -----

// Default Sort
export const SORT = {
  DEFAULT: undefined,
  ASC: "default_variant__price_incl_tax",
  DESC: "-default_variant__price_incl_tax",
};

export const LIST_SORT_RANGE = [
  {
    id: 1,
    value: {
      priceStart: 0,
      priceEnd: 1000000,
    },
    name: "Dưới 1 Triệu",
  },
  {
    id: 2,
    value: {
      priceStart: 1000000,
      priceEnd: 5000000,
    },
    name: "Từ 1 Triệu - 5 Triệu",
  },
  {
    id: 3,
    value: {
      priceStart: 5000000,
      priceEnd: 10000000,
    },
    name: "Từ 5 Triệu - 10 Triệu",
  },
  {
    id: 4,
    value: {
      priceStart: 10000000,
      priceEnd: 20000000,
    },
    name: "Từ 10 Triệu - 20 Triệu",
  },
  {
    id: 5,
    value: {
      priceStart: 20000000,
      priceEnd: 50000000,
    },
    name: "Từ 20 Triệu - 50 Triệu",
  },
  {
    id: 6,
    value: {
      priceStart: 50000000,
      priceEnd: 5000000000,
    },
    name: "Trên 50 triệu",
  },
];

export const LIST_SORT_RANGE_V2 = [
  {
    id: 0,
    value: "",
    name: "Mặc định",
  },
  {
    id: 1,
    value: "default_variant__price_incl_tax",
    name: "Giá: thấp - cao",
  },

  {
    id: 2,
    value: "-default_variant__price_incl_tax",
    name: "Giá: cao - thấp",
  },
];

// ----

// Default Button

export const BUTTON = {
  BUY: "Mua Ngay",
  ORDER: "Đặt hàng",
  PAYMENT: "Thanh toán",
  ADD_TO_CART: "Cho vào giỏ hàng",
  GO_BACK_PRODUCT_LIST: "Tiếp tục mua hàng",
};

// -----

// Default BoxShadow
export const BOX_SHADOW_HEADER = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
// ----

// Default Breadcrumbs
type DEFAULT_BREADCRUMBS_FOR_PRODUCT_TYPE = {
  title: string;
  href: string;
};

export const DEFAULT_BREADCRUMBS_FOR_PRODUCT: DEFAULT_BREADCRUMBS_FOR_PRODUCT_TYPE[] = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Sản phẩm",
    href: "/",
  },
];

export const DEFAULT_BREADCRUMBS_FOR_SEARCH: DEFAULT_BREADCRUMBS_FOR_PRODUCT_TYPE[] = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Tìm kiếm",
    href: "/search?search=",
  },
];
// -----

// Default Cart Key

export const CART_KEY = "cart-key";

// ----
