import useSWR from "swr";
import { SETTINGS_API } from "apis";
import { I_SETTINGS } from "interfaces";
import { createContext, useContext, useMemo } from "react";

interface SettingsContextProps {
  settings: I_SETTINGS;
}

const defaultState: SettingsContextProps = {
  settings: {
    bank_account_info: "",
    company_name: "",
    country: [],
    currency: [],
    date_created: "",
    date_updated: "",
    district: "",
    hotline_1: "",
    hotline_2: "",
    id: "",
    line1: "",
    line2: "",
    logo: { default: "" },
    postcode: "",
    province: "",
    store_description: "",
    store_name: "",
    store_website: "",
    tax_identification_number: "",
    ward: "",
    weight_unit: "",
  },
};

const SettingsContext = createContext<SettingsContextProps>(defaultState);

function SettingsProvider({ children }: { children: React.ReactNode }) {
  const { data } = useSWR(SETTINGS_API, {
    refreshInterval: 5 * 60 * 1000,
  });

  const settings = useMemo(() => {
    if (data == undefined) return {};

    return data;
  }, [data]);

  const values = { settings };

  return <SettingsContext.Provider value={values}>{children}</SettingsContext.Provider>;
}

function useSettings() {
  const context = useContext(SettingsContext);

  if (typeof context === undefined) {
    throw new Error("useSettings must be used within SettingsProvider");
  }

  return context;
}

export { useSettings, SettingsProvider };
