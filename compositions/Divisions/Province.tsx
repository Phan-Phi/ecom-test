import {
  InputProps,
  Autocomplete,
  FormLabelProps,
  FormControlProps,
  FormHelperTextProps,
} from "@mui/material";
import useSWR from "swr";
import { useToggle } from "react-use";
import React, { useCallback } from "react";
import { UseControllerReturn } from "react-hook-form";

import { PROVINCES_API } from "apis";
import { I_PROVINCE } from "interfaces";
import InputForAutoComplete from "compositions/FormControl/InputForAutoComplete";

interface ProvinceProps {
  controlState?: any;
  onChange?: (value: any) => void;
  InputProps?: InputProps;
  FormLabelProps?: FormLabelProps;
  FormControlProps?: FormControlProps;
  FormHelperTextProps?: FormHelperTextProps;
  readOnly?: boolean;
  disabled?: boolean;
}

export default function Province(props: ProvinceProps) {
  const {
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

  const url = `${PROVINCES_API}?page_size=500`;

  const { data } = useSWR<I_PROVINCE>(() => {
    if (isShown) return url;

    return url;
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
      disabled={disabled}
      options={(data && data.provinces) || []}
      open={isShown}
      value={value}
      onChange={onChangeHandler}
      onOpen={() => toggleIsShown(true)}
      onClose={() => toggleIsShown(false)}
      renderInput={(props) => {
        return (
          <InputForAutoComplete
            label="Tỉnh / Thành"
            placeholder="Tỉnh / Thành"
            error={!!error}
            FormLabelProps={FormLabelProps}
            FormControlProps={FormControlProps}
            errorMessage={error && error.message}
            FormHelperTextProps={FormHelperTextProps}
            {...props}
            InputProps={{ ...props.InputProps, ...OuterInputProps, inputRef: ref }}
          />
        );
      }}
      loading={!data && isShown}
      getOptionLabel={(option) => {
        return option.province_name;
      }}
    />
  );
}
