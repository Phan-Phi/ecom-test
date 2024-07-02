import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

type FavoriteProductProps = {
  listFavoriteProduct: number[] | undefined;
  setListFavoriteProduct: (arr: any) => void;
  removeListFavoriteProduct: () => void;
  handleAddProductId: (_id: number) => void;
};

const defaultState: FavoriteProductProps = {
  listFavoriteProduct: [],
  setListFavoriteProduct: () => {},
  removeListFavoriteProduct: () => {},
  handleAddProductId: () => {},
};

export const FavoriteProductContext = createContext<FavoriteProductProps>(defaultState);

function FavoriteProductProvider({ children }: { children: React.ReactNode }) {
  const [listFavoriteProduct, setListFavoriteProduct, removeListFavoriteProduct] =
    useLocalStorage("list-favorite-product", []);
  const [ids, setIds] = useState<number[]>(listFavoriteProduct as number[]);

  const handleAddProductId = useCallback((_id: number) => {
    setIds((prev) => {
      if (prev.length > 100) return [_id];

      if (prev.includes(_id)) {
        return prev.filter((existingId) => existingId !== _id);
      } else {
        return [...prev, _id];
      }
    });
  }, []);

  useEffect(() => {
    setListFavoriteProduct(ids as any);
  }, [ids]);

  const values = {
    listFavoriteProduct,
    setListFavoriteProduct,
    removeListFavoriteProduct,
    handleAddProductId,
  };

  return (
    <FavoriteProductContext.Provider value={values}>
      {children}
    </FavoriteProductContext.Provider>
  );
}

function useFavoriteProduct() {
  const context = useContext(FavoriteProductContext);

  if (typeof context === undefined) {
    throw new Error("useFavoriteProduct must be used within FavoriteProductProvider");
  }

  return context;
}

export { FavoriteProductProvider, useFavoriteProduct };
