import { get } from "lodash";
import { CART_API } from "apis";
import { SWRConfig } from "swr";
import axios from "axios.config";
import { useCart } from "./CartContext";

type SWRProps = {
  children: React.ReactNode;
  fallback?: { [key: string]: any };
};

const CART_LINE_PATH = "/cart/lines/";

const SWR = ({ children, fallback }: SWRProps) => {
  const { cartKey, setCartKey, removeCartKey } = useCart();

  return (
    <SWRConfig
      value={{
        fallback: fallback || {},
        refreshInterval: 90000,
        revalidateOnMount: true,
        fetcher: async (resource) => {
          if (resource.includes(CART_LINE_PATH)) {
            if (cartKey) {
              const { data } = await axios.get(`${CART_API}?token=${cartKey}`);
              setCartKey(data.token);
            } else {
              const { data } = await axios.get(CART_API);
              setCartKey(data.token);
            }
          }

          return axios
            .get(resource)
            .then(async (res) => {
              return res.data;
            })
            .catch(async (err) => {
              if (err) {
                const baseUrl = get(err, "config.url", "");
                const status = get(err, "response.status");

                if (status === 500 && baseUrl.includes(CART_LINE_PATH)) {
                  removeCartKey();
                }
              }

              throw err;
            });
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWR;
