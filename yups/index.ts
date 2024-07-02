export * from "./payment/address";
export * from "./payment/userInfo";

import { setLocale } from "yup";

setLocale({
  mixed: {
    required: "Trường này là bắt buộc",
  },
});
