import axios from "axios.config";
import { get, isEmpty } from "lodash";
import { I_CART_LINES } from "interfaces";

type TempDatatype = {
  price: string;
  quantity: number;
};

export async function calcTotalPrice(data: I_CART_LINES[]) {
  if (isEmpty(data)) return 0;

  const tempData: TempDatatype[] = [];

  for await (let item of data) {
    if (item.unit) {
      const { data: dataUnit } = await axios.get(item.unit);
      const price = get(dataUnit, "discounted_price.incl_tax", "0");

      tempData.push({ price: price, quantity: item.quantity });
    } else {
      const { data: dataVariant } = await axios.get(item.variant);
      const price = get(dataVariant, "discounted_price.incl_tax", "0");
      tempData.push({ price: price, quantity: item.quantity });
    }
  }

  const totalPrice = tempData.reduce((total, item) => {
    return total + parseFloat(item.price) * item.quantity;
  }, 0);

  return totalPrice;
}
