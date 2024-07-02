export * from "./UseFetch";
export * from "./responseSchema/cart";
export * from "./responseSchema/units";
export * from "./responseSchema/address";
export * from "./responseSchema/divisions";
export * from "./responseSchema/cartLines";
export * from "./responseSchema/settings";
export * from "./responseSchema/categories";
export * from "./responseSchema/products";
export * from "./responseSchema/productImages";
export * from "./responseSchema/productsVariants";
export * from "./responseSchema/productsVariantsImages";

interface IPage<T extends unknown[]> {
  initData: T;
  fallback: {
    [key: string]: any;
  };
}

export type { IPage };
