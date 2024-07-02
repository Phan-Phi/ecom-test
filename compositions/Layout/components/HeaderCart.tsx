import useSWR from "swr";
import { Badge } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ROUTES } from "routes";
import { transformUrl } from "utils";
import { CART_LINES_API } from "apis";
import { useCart } from "contexts/CartContext";
import { ShoppingCartFilled } from "components";
import { REFRESH_INTERVAL_CART } from "constant";
import { I_CART_LINES, ResponseType } from "interfaces";

export default function HeaderCart() {
  const router = useRouter();

  const { cartKey } = useCart();
  const [count, setCount] = useState<any>(0);

  const { data } = useSWR<ResponseType<I_CART_LINES>>(
    () => {
      return transformUrl(CART_LINES_API, {
        page_size: 200,
        token: cartKey,
      });
    },
    {
      refreshInterval: REFRESH_INTERVAL_CART,
    }
  );

  useEffect(() => {
    if (!data) return;
    setCount((previous: any) => {
      if (previous !== data.count) return data.count;
      return previous;
    });
  }, [data]);

  return (
    <Badge
      showZero
      max={99}
      color="secondary"
      badgeContent={count}
      sx={{ cursor: "pointer" }}
      onClick={() => {
        router.push(`/${ROUTES.cart}`);
      }}
    >
      <ShoppingCartFilled />
    </Badge>
  );
}
