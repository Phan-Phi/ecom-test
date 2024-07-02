import React from "react";
import { get } from "lodash";
import { Stack, styled, Typography, Divider } from "@mui/material";
import { Control, SetFieldValue, Controller } from "react-hook-form";

import {
  Ward,
  District,
  Province,
  FormControl,
  FormControlForPhoneNumber,
} from "compositions";

type FormAddressProps = {
  control: Control<any>;
  setValue: SetFieldValue<any>;
  watch: any;
};

export default function FormAddress(props: FormAddressProps) {
  const { control, setValue, watch } = props;

  return (
    <Stack gap="4px">
      <Stack gap="12px" mb="10px">
        <StyledTitle>Thông tin giao hàng</StyledTitle>

        <Divider />
      </Stack>

      <Controller
        control={control}
        name="phone_number"
        render={(props) => {
          return (
            <FormControlForPhoneNumber
              controlState={props}
              label="Số điện thoại người nhận"
              InputProps={{
                placeholder: "Nhập số điện thoại người nhận...",
              }}
            />
          );
        }}
      />

      <Controller
        name="line1"
        control={control}
        render={(props) => {
          return (
            <FormControl
              label="Địa chỉ"
              controlState={props}
              placeholder="Nhập địa chỉ..."
              FormControlProps={{ required: true }}
            />
          );
        }}
      />

      <Controller
        name="postcode"
        control={control}
        render={(props) => {
          return (
            <FormControl
              controlState={props}
              label="Post code"
              placeholder="Post code..."
            />
          );
        }}
      />

      <Controller
        control={control}
        name="province"
        render={(props) => {
          return (
            <Province
              controlState={props}
              onChange={() => {
                setValue("district", null);
                setValue("ward", null);
              }}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="district"
        render={(props) => {
          const provinceId = get(watch("province"), "id", 0);

          return (
            <District
              controlState={props}
              province={provinceId}
              onChange={() => {
                setValue("ward", null);
              }}
            />
          );
        }}
      />

      <Controller
        name="ward"
        control={control}
        render={(props) => {
          const provinceId = get(watch("province"), "id", 0);
          const districtId = get(watch("district"), "id", 0);

          return (
            <Ward controlState={props} province={provinceId} district={districtId} />
          );
        }}
      />

      <Controller
        control={control}
        name="notes"
        render={(props) => {
          return (
            <FormControl
              controlState={props}
              label="Ghi chú giao hàng"
              placeholder="Nhập nội dung..."
              InputProps={{
                multiline: true,
                rows: 6,
              }}
            />
          );
        }}
      />
    </Stack>
  );
}

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h6,
    color: "#242424",
    fontSize: "18px",
    lineHeight: "28px",

    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  };
});
