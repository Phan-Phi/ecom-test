type Props = {
  id: string;
  name: string;
  link: string;
}[];

export const ROUTES_NAVBAR: Props = [
  {
    id: "gioiThieu",
    name: "GIỚI THIỆU",
    link: "/gioi-thieu",
  },
  {
    id: "sanPham",
    name: "Sản phẩm",
    link: "/san-pham",
  },
  {
    id: "congThuc",
    name: "công thức",
    link: "/cong-thuc",
  },
  {
    id: "tinTuc",
    name: "tin tức",
    link: "/tin-tuc",
  },
  {
    id: "lienHe",
    name: "liên hệ",
    link: "/lien-he",
  },
];

export const ROUTES = {
  home: "/",
  product: "product",
  cart: "cart",
  payment: "payment",
  orderSuccess: "order-success",
  variant: "variant",
  search: "search",
};

export const DATA_BREADCRUMBS = {
  cart: [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Giỏ hàng",
      href: "/cart",
    },
  ],
  order: [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Thanh toán",
      href: "/payment",
    },
  ],
  returnOrder: [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Chính sách hoàn trả",
      href: "/chinh-sach-hoan-tra",
    },
  ],
  delivery: [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Chính sách vận chuyển",
      href: "/chinh-sach-van-chuyen",
    },
  ],
  terms: [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Điều khoản & chính sách sử dụng",
      href: "/chinh-sach-dieu-khoan",
    },
  ],
};

export const ROUTES_POLICY = [
  {
    id: 1,
    href: "/chinh-sach-dieu-khoan",
    name: "Điều Khoản - Chính Sách Sử Dụng",
  },
  {
    id: 2,
    href: "/chinh-sach-van-chuyen",
    name: "Chính Sách Vận Chuyển",
  },
  {
    id: 3,
    href: "/chinh-sach-kiem-hang",
    name: "Chính Sách Kiểm Hàng",
  },
  {
    id: 4,
    href: "/chinh-sach-hoan-tra",
    name: "Chính Sách Hoàn Trả",
  },
];
