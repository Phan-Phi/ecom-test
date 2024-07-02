export interface I_SETTINGS {
  id: string;
  logo: { default: string };
  date_created: string;
  date_updated: string;
  line1: string;
  line2: string;
  ward: string;
  district: string;
  province: string;
  country: string[];
  postcode: string;
  company_name: string;
  store_name: string;
  store_description: string;
  store_website: string;
  hotline_1: string;
  hotline_2: string;
  tax_identification_number: string;
  currency: string[];
  weight_unit: string;
  bank_account_info: string;
}
