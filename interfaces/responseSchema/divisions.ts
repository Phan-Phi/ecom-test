export interface I_PROVINCE_ITEM {
  name: string;
  id: number;
  province_code: number;
  province_name: string;
}

export interface I_PROVINCE {
  next_page_token: string;
  provinces: I_PROVINCE_ITEM[];
}

export interface I_DISTRICT_ITEM {
  name: string;
  id: number;
  district_code: number;
  district_name: string;
}

export interface I_DISTRICT {
  districts: I_DISTRICT_ITEM[];
  next_page_token: string;
}

export interface I_WARD_ITEM {
  name: string;
  id: number;
  ward_code: number;
  ward_name: string;
}

export interface I_WARD {
  wards: I_WARD_ITEM[];
  next_page_token: string;
}
