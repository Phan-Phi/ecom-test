import { useLocalStorage } from "react-use";
import { createContext, useContext } from "react";

type CartProps = {
  cartKey: string | undefined;
  setCartKey: (s: string) => void;
  removeCartKey: () => void;
};

const defaultState = {
  cartKey: "",
  setCartKey: () => {},
  removeCartKey: () => {},
};

export const CartContext = createContext<CartProps>(defaultState);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartKey, setCartKey, removeCartKey] = useLocalStorage("cart-key", "");

  const values = {
    cartKey,
    setCartKey,
    removeCartKey,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (typeof context === undefined) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}

export { CartProvider, useCart };
