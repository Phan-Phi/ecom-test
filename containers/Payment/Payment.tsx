import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR, { KeyedMutator } from "swr";
import { useMountedState } from "react-use";
import { get, isEmpty, isEqual } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { Grid, Stack, styled, Divider, Container, Typography, Box } from "@mui/material";

import { BreadcrumbsCustom } from "compositions";
import OrdersInfo from "./components/OrdersInfo";
import FormAddress from "./components/FormAddress";
import ButtonOrder from "./components/ButtonOrder";
import FormUserInfo from "./components/FormUserInfo";

import {
  AddressProps,
  AddressSchema,
  UserInfoProps,
  UserInfoSchema,
  DefaultValueAddress,
  DefaultValueUserInfo,
} from "yups";

import axios from "axios.config";
import { useCart } from "contexts/CartContext";
import { findAddress, transformUrl } from "utils";
import { DATA_BREADCRUMBS, ROUTES } from "routes";
import { useNotification } from "hooks/useNotification";
import { I_ADDRESS_ITEM, I_CART_ITEM, ResponseType } from "interfaces";
import { PREFIX_DISTRICT, PREFIX_PROVINCE, PREFIX_WARD } from "constant";
import { CART_API, CART_CREATE_ORDER_API, CART_SHIPPING_ADDRESSES_API } from "apis";

export default function Payment() {
  const { cartKey } = useCart();

  const [defaultValueUserInfo, setDefaultValueUserInfo] =
    useState<UserInfoProps>(DefaultValueUserInfo);

  const [defaultValueAddress, setDefaultValueAddress] =
    useState<AddressProps>(DefaultValueAddress);

  const { data: cartData, mutate: mutateCartData } = useSWR<I_CART_ITEM>(() => {
    if (!cartKey) return;

    return `${CART_API}?token=${cartKey}`;
  });

  const { data: resAddressData, mutate: mutateAddressData } = useSWR<
    ResponseType<I_ADDRESS_ITEM>
  >(
    transformUrl(`${CART_SHIPPING_ADDRESSES_API}?token=${cartKey}`, {
      page_size: 10,
    })
  );

  const addressData = get(resAddressData, "results", []);

  useEffect(() => {
    if (!cartData) return;

    const obj = {
      owner_name: cartData.owner_name,
      owner_email: cartData.owner_email,
      owner_phone_number: cartData.owner_phone_number,
      notes: cartData.notes,
    };

    setDefaultValueUserInfo((prev) => {
      if (isEqual(prev, obj)) return prev;

      return obj;
    });
  }, [cartData]);

  useEffect(() => {
    if (isEmpty(addressData)) return;

    const objAddress = {
      province: addressData[0].province,
      district: addressData[0].district,
      ward: addressData[0].ward,
    };

    async function fetch() {
      const { district, province, ward } = await findAddress(objAddress);

      setDefaultValueAddress({
        phone_number: addressData[0].phone_number,
        country: addressData[0].country,
        line1: addressData[0].line1,
        line2: addressData[0].line2,
        postcode: addressData[0].postcode,
        notes: addressData[0].notes,
        province,
        district,
        ward,
      });
    }

    fetch();
  }, [addressData]);

  return (
    <RootComponent
      mutateCartData={mutateCartData}
      mutateAddressData={mutateAddressData}
      defaultValueAddress={defaultValueAddress}
      defaultValueUserInfo={defaultValueUserInfo}
    />
  );
}

type RootComponentProps = {
  defaultValueUserInfo: UserInfoProps;
  defaultValueAddress: AddressProps;
  mutateAddressData: KeyedMutator<any>;
  mutateCartData: KeyedMutator<I_CART_ITEM>;
};

function RootComponent(props: RootComponentProps) {
  const { mutateCartData, mutateAddressData, defaultValueAddress, defaultValueUserInfo } =
    props;

  const router = useRouter();
  const isMountedUserInfo = useMountedState();
  const isMountedAddressInfo = useMountedState();
  const { cartKey, setCartKey } = useCart();
  const isMountedCreateOrder = useMountedState();
  const { setLoading, enqueueSnackbarWithError } = useNotification();
  const { setLoading: setLoadingAddress, enqueueSnackbarWithError: notiErrorAddress } =
    useNotification();

  const {
    loading: loadingCreateOrder,
    setLoading: setLoadingCreateOrder,
    enqueueSnackbarWithSuccess: notiSuccessCreateOrder,
    enqueueSnackbarWithError: notiErrorCreateOrder,
  } = useNotification();

  const {
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { dirtyFields, errors: errorsUserInfo },
  } = useForm({
    resolver: UserInfoSchema(),
    defaultValues: defaultValueUserInfo,
  });

  const {
    watch: watchAddress,
    control: controlAddress,
    setValue: setValueAddress,
    handleSubmit: handleSubmitAddress,
    formState: { dirtyFields: dirtyFieldsAddress, errors: errorsAddress },
  } = useForm({
    resolver: AddressSchema(),
    defaultValues: defaultValueAddress,
  });

  const onValueUserInfoChangeHandler = useCallback(
    async (data: UserInfoProps) => {
      try {
        setLoading(true);

        if (isEmpty(errorsUserInfo)) {
          await axios.patch(`${CART_API}?token=${cartKey}`, data);
          mutateCartData();
        }
      } catch (error) {
        enqueueSnackbarWithError(error);
      } finally {
        if (isMountedUserInfo()) {
          setLoading(false);
        }
      }
    },
    [cartKey, isMountedUserInfo, errorsUserInfo]
  );

  const onValueAddressChangeHandler = useCallback(
    async (data: AddressProps) => {
      try {
        setLoadingAddress(true);

        // Address
        const line1 = get(data, "line1", "");
        const line2 = "";
        const provinceId = get(data, "province.id", 0);
        const districtId = get(data, "district.id", 0);
        const wardId = get(data, "ward.id", 0);
        const country = "VN";
        const postCode = get(data, "postcode", "");
        const phoneNumber = get(data, "phone_number", "");
        const notes = get(data, "notes", "");

        const addressData = {
          line1: line1,
          line2: line2,
          province: `${PREFIX_PROVINCE}${provinceId}`,
          district: `${PREFIX_DISTRICT}${districtId}`,
          ward: `${PREFIX_WARD}${wardId}`,
          country: country,
          postcode: postCode,
          phone_number: phoneNumber,
          notes: notes,
        };

        if (isEmpty(errorsAddress)) {
          const { data: _addressData } = await axios.get(
            transformUrl(`${CART_SHIPPING_ADDRESSES_API}?token=${cartKey}`, {
              page_size: 10,
            })
          );

          const addressId = get(_addressData, "results[0].id");

          if (isEmpty(_addressData.results)) {
            await axios.post(
              `${CART_SHIPPING_ADDRESSES_API}?token=${cartKey}`,
              addressData
            );
          } else {
            await axios.patch(
              `${CART_SHIPPING_ADDRESSES_API}${addressId}?token=${cartKey}`,
              addressData
            );
          }

          mutateAddressData();
        }
      } catch (error) {
        notiErrorAddress(error);
      } finally {
        if (isMountedAddressInfo()) {
          setLoadingAddress(false);
        }
      }
    },
    [cartKey, isMountedAddressInfo, errorsAddress]
  );

  const onCreateOrderHandler = useCallback(async () => {
    try {
      setLoadingCreateOrder(true);

      await handleSubmit(onValueUserInfoChangeHandler)();
      await handleSubmitAddress(onValueAddressChangeHandler)();
      await axios.post(`${CART_CREATE_ORDER_API}?token=${cartKey}`, {});

      const { data } = await axios.get(CART_API);

      mutateCartData();
      mutateAddressData();
      setCartKey(data.token);
      notiSuccessCreateOrder("Bạn đã đặt hàng thành công");
      router.push(`/${ROUTES.orderSuccess}`);
    } catch (error) {
      notiErrorCreateOrder(error);
    } finally {
      if (isMountedCreateOrder()) {
        setLoadingCreateOrder(false);
      }
    }
  }, [cartKey]);

  useEffect(() => {
    setValue("owner_name", defaultValueUserInfo.owner_name);
    setValue("owner_email", defaultValueUserInfo.owner_email);
    setValue("owner_phone_number", defaultValueUserInfo.owner_phone_number);
    setValue("notes", defaultValueUserInfo.notes);
  }, [defaultValueUserInfo]);

  useEffect(() => {
    setValueAddress("phone_number", defaultValueAddress.phone_number);
    setValueAddress("country", defaultValueAddress.country);
    setValueAddress("line1", defaultValueAddress.line1);
    setValueAddress("line2", defaultValueAddress.line2);
    setValueAddress("postcode", defaultValueAddress.postcode);
    setValueAddress("notes", defaultValueAddress.notes);
    setValueAddress("province", defaultValueAddress.province);
    setValueAddress("district", defaultValueAddress.district);
    setValueAddress("ward", defaultValueAddress.ward);
  }, [defaultValueAddress]);

  useEffect(() => {
    if (isEmpty(dirtyFields)) return;

    const timeout = setTimeout(() => {
      handleSubmit(onValueUserInfoChangeHandler)();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [
    dirtyFields,
    watch("notes"),
    watch("owner_name"),
    watch("owner_email"),
    watch("owner_phone_number"),
  ]);

  useEffect(() => {
    if (isEmpty(dirtyFieldsAddress)) return;

    const timeout = setTimeout(() => {
      handleSubmitAddress(onValueAddressChangeHandler)();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [
    dirtyFieldsAddress,
    watchAddress("line1"),
    watchAddress("postcode"),
    watchAddress("phone_number"),
    watchAddress("province"),
    watchAddress("district"),
    watchAddress("ward"),
    watchAddress("notes"),
  ]);

  return (
    <Container>
      <BreadcrumbsCustom breadcrumbsData={DATA_BREADCRUMBS.order} />

      <Grid container spacing="32px">
        <Grid item xs={12} md={6}>
          <Stack gap="12px">
            <Box component="form" onSubmit={handleSubmit(onValueUserInfoChangeHandler)}>
              <FormUserInfo control={control} />
            </Box>

            <Box
              component="form"
              onSubmit={handleSubmitAddress(onValueAddressChangeHandler)}
            >
              <FormAddress
                watch={watchAddress}
                control={controlAddress}
                setValue={setValueAddress}
              />
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack gap="12px">
            <StyledTitle>Thông tin đơn hàng</StyledTitle>

            <Divider />

            <OrdersInfo
              loadingCreateOrder={loadingCreateOrder}
              onCreateOrderHandler={onCreateOrderHandler}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
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
