import axios from "axios.config";
import { DISTRICTS, PROVINCES_API, WARDS } from "apis";
import { I_DISTRICT_ITEM, I_PROVINCE_ITEM, I_WARD_ITEM } from "interfaces";

type OBJ_ADDRESS = {
  province: string;
  district: string;
  ward: string;
};

const DEFAULT_PROVINCE = "P_0";
const DEFAULT_DISTRICT = "D_0";
const DEFAULT_WARD = "W_0";

export async function findAddress(obj: OBJ_ADDRESS) {
  let province: I_PROVINCE_ITEM | null = null;
  let district: I_DISTRICT_ITEM | null = null;
  let ward: I_WARD_ITEM | null = null;

  const provinceId = obj.province.split("_")[1];
  const districtId = obj.district.split("_")[1];
  const wardId = obj.ward.split("_")[1];

  if (obj.province === "" || obj.province === DEFAULT_PROVINCE) {
    province = null;
  } else {
    const { data } = await axios.get(`${PROVINCES_API}/${provinceId}`);
    province = data;
  }

  if (obj.district === "" || obj.district === DEFAULT_DISTRICT) {
    district = null;
  } else {
    const { data } = await axios.get(
      `${PROVINCES_API}/${provinceId}/${DISTRICTS}/${districtId}`
    );

    district = data;
  }

  if (obj.ward === "" || obj.ward === DEFAULT_WARD) {
    ward = null;
  } else {
    const { data } = await axios.get(
      `${PROVINCES_API}/${provinceId}/${DISTRICTS}/${districtId}/${WARDS}/${wardId}`
    );

    ward = data;
  }

  return {
    province,
    district,
    ward,
  };
}
