import React from "react";

import {
  Input,
  FormLabel,
  InputProps,
  FormControl,
  FormHelperText,
  FormLabelProps,
  FormControlProps,
  FormHelperTextProps,
} from "@mui/material";

export type FormControlBaseProps = {
  InputProps?: InputProps;
  FormLabelProps?: FormLabelProps;
  FormControlProps?: FormControlProps;
  FormHelperTextProps?: FormHelperTextProps;
};

export default function FormControlBase(props: FormControlBaseProps) {
  const { FormControlProps, FormHelperTextProps, FormLabelProps, InputProps } = props;

  return (
    <FormControl {...FormControlProps}>
      <FormLabel {...FormLabelProps} />
      <Input {...InputProps} />
      <FormHelperText {...FormHelperTextProps} />
    </FormControl>
  );
}
