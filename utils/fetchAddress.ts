import { get } from "lodash";
import axios from "axios.config";
import { DISTRICTS, PROVINCES_API, WARDS } from "apis";

type AddressProps = {
  address: string;
  province: string;
  district: string;
  ward: string;
};

export async function fetchAddress(obj: AddressProps) {
  let provinceId = "";
  let districtId = "";
  let wardId = "";

  let province = "";
  let district = "";
  let ward = "";

  if (obj.province) {
    provinceId = obj.province.split("_")[1];

    const { data } = await axios.get(`/${PROVINCES_API}/${provinceId}`);

    province = await get(data, "province_name");
  }

  if (obj.district && provinceId) {
    districtId = obj.district.split("_")[1];

    const { data } = await axios.get(
      `/${PROVINCES_API}/${provinceId}/${DISTRICTS}/${districtId}`
    );

    district = await get(data, "district_name");
  }

  if (obj.ward && provinceId && districtId) {
    wardId = obj.ward.split("_")[1];

    const { data } = await axios.get(
      `/${PROVINCES_API}/${provinceId}/${DISTRICTS}/${districtId}/${WARDS}/${wardId}`
    );

    ward = await get(data, "ward_name");
  }

  let addressArr = [obj.address, ward, district, province];

  let fullAddress = addressArr
    .filter((item) => {
      return item !== "";
    })
    .join(", ");

  return fullAddress;
}
