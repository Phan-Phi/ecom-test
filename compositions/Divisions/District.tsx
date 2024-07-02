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
import { transformUrl } from "utils";
import { I_DISTRICT } from "interfaces";
import { DISTRICTS, PROVINCES_API } from "apis";
import InputForAutoComplete from "compositions/FormControl/InputForAutoComplete";

interface DistrictProps {
  controlState: any;
  province?: number;
  InputProps?: InputProps;
  onChange?: (value: any) => void;
  FormLabelProps?: FormLabelProps;
  FormControlProps?: FormControlProps;
  FormHelperTextProps?: FormHelperTextProps;
  readOnly?: boolean;
  disabled?: boolean;
}
const District = (props: DistrictProps) => {
  const {
    onChange: onChangeOuter,
    InputProps: OuterInputProps,
    controlState,
    FormControlProps,
    FormHelperTextProps,
    FormLabelProps,
    province,
    readOnly,
    disabled,
  } = props;

  const { field, fieldState } = controlState as UseControllerReturn;
  const { onChange, ref, value } = field;
  const { error } = fieldState;

  const [isShown, toggleIsShown] = useToggle(false);

  const { data } = useSWR<I_DISTRICT>(() => {
    if (isShown && province !== 0) {
      return transformUrl(`${PROVINCES_API}/${province}/${DISTRICTS}`, {
        page_size: 500,
      });
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
      options={(data && data.districts) || []}
      open={isShown}
      value={value}
      onChange={onChangeHandler}
      onOpen={() => toggleIsShown(true)}
      onClose={() => toggleIsShown(false)}
      renderInput={(props) => {
        return (
          <InputForAutoComplete
            error={!!error}
            label="Quận / Huyện"
            placeholder="Quận / Huyện"
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
        return option.district_name;
      }}
      disabled={disabled || !province}
    />
  );
};

export default District;
