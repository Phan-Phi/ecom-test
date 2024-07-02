import React from "react";
import { Stack, styled, Typography, Divider } from "@mui/material";
import { Control, SetFieldValue, Controller } from "react-hook-form";
import { FormControl, FormControlForPhoneNumber } from "compositions";

type FormUserInfoProps = {
  control: Control<any>;
};

export default function FormUserInfo(props: FormUserInfoProps) {
  const { control } = props;

  return (
    <Stack gap="4px">
      <Stack gap="12px" mb="10px">
        <StyledTitle>Thông tin người mua</StyledTitle>

        <Divider />
      </Stack>

      <Controller
        control={control}
        name="owner_name"
        render={(props) => {
          return (
            <FormControl
              label="Tên"
              controlState={props}
              placeholder="Nhập họ và tên..."
            />
          );
        }}
      />

      <Controller
        control={control}
        name="owner_email"
        render={(props) => {
          return (
            <FormControl label="Email" controlState={props} placeholder="Nhập email..." />
          );
        }}
      />

      <Controller
        control={control}
        name="owner_phone_number"
        render={(props) => {
          return (
            <FormControlForPhoneNumber
              FormControlProps={{ required: true }}
              label="Số điện thoại"
              controlState={props}
              InputProps={{
                placeholder: "Nhập số điện thoại...",
              }}
            />
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
              label="Ghi chú đơn hàng"
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
