import { object, string } from "yup";
import { validatePhoneNumber } from "yups/utils";
import { yupResolver } from "@hookform/resolvers/yup";

export interface UserInfoProps {
  owner_name: string;
  owner_email: string;
  owner_phone_number: string;
  notes: string;
}

export const UserInfoSchema = () => {
  return yupResolver(
    object().shape({
      owner_name: string(),
      owner_email: string().email("Email không hợp lệ"),
      owner_phone_number: validatePhoneNumber().required(),
      notes: string(),
    })
  );
};

export const DefaultValueUserInfo: UserInfoProps = {
  owner_name: "",
  owner_email: "",
  owner_phone_number: "",
  notes: "",
};
