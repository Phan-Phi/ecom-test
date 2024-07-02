import { mixed, object, string } from "yup";
import { validatePhoneNumber } from "yups/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { I_DISTRICT_ITEM, I_PROVINCE_ITEM, I_WARD_ITEM } from "interfaces";

export interface AddressProps {
  line1: string;
  line2: string;
  province: I_PROVINCE_ITEM | null;
  district: I_DISTRICT_ITEM | null;
  ward: I_WARD_ITEM | null;
  country: string;
  postcode: string;
  phone_number: string;
  notes: string;
}

export const AddressSchema = () => {
  return yupResolver(
    object().shape({
      line1: string().required(),
      line2: string(),
      province: mixed().nullable(),
      district: mixed().nullable(),
      ward: mixed().nullable(),
      country: string(),
      postcode: string(),
      phone_number: validatePhoneNumber().notRequired(),
      notes: string(),
    })
  );
};

export const DefaultValueAddress: AddressProps = {
  line1: "",
  line2: "",
  province: null,
  district: null,
  ward: null,
  country: "VN",
  postcode: "",
  phone_number: "",
  notes: "",
};
