import useSWR from "swr";
import { useToggle } from "react-use";
import React, { useCallback } from "react";
import { UseControllerReturn } from "react-hook-form";

import {
  InputProps,
  Autocomplete,
  FormLabelProps,
  FormControlProps,
  FormHelperTextProps,
} from "@mui/material";
import { I_WARD } from "interfaces";
import { transformUrl } from "utils";
import { DISTRICTS, PROVINCES_API, WARDS } from "apis";
import InputForAutoComplete from "compositions/FormControl/InputForAutoComplete";

interface WardProps {
  controlState: any;
  province?: number;
  district?: number;
  onChange?: (value: any) => void;
  InputProps?: InputProps;
  FormLabelProps?: FormLabelProps;
  FormControlProps?: FormControlProps;
  FormHelperTextProps?: FormHelperTextProps;
  readOnly?: boolean;
  disabled?: boolean;
}

const District = (props: WardProps) => {
  const {
    province,
    district,
    controlState,
    FormLabelProps,
    FormControlProps,
    FormHelperTextProps,
    onChange: onChangeOuter,
    InputProps: OuterInputProps,
    readOnly,
    disabled,
  } = props;
  const { field, fieldState } = controlState as UseControllerReturn;
  const { onChange, ref, value } = field;
  const { error } = fieldState;

  const [isShown, toggleIsShown] = useToggle(false);

  const { data } = useSWR<I_WARD>(() => {
    if (isShown && district !== 0 && province !== 0) {
      return transformUrl(
        `${PROVINCES_API}/${province}/${DISTRICTS}/${district}/${WARDS}`,
        {
          page_size: 500,
        }
      );
    }
  });

  const onChangeHandler = useCallback(
    (_: any, value: any) => {
      onChange(value);
      onChangeOuter && onChangeOuter(value);
    },
    [onChange, onChangeOuter]
  );

  return (
    <Autocomplete
      readOnly={readOnly}
      options={(data && data.wards) || []}
      open={isShown}
      value={value}
      onChange={onChangeHandler}
      onOpen={() => toggleIsShown(true)}
      onClose={() => toggleIsShown(false)}
      renderInput={(props) => {
        return (
          <InputForAutoComplete
            error={!!error}
            label="Phường / Xã"
            placeholder="Phường / Xã"
            FormControlProps={FormControlProps}
            FormLabelProps={FormLabelProps}
            errorMessage={error && error.message}
            FormHelperTextProps={FormHelperTextProps}
            {...props}
            InputProps={{ ...props.InputProps, ...OuterInputProps, inputRef: ref }}
          />
        );
      }}
      loading={!data && isShown}
      getOptionLabel={(option) => {
        return option.ward_name;
      }}
      disabled={disabled || !district}
    />
  );
};

export default District;
