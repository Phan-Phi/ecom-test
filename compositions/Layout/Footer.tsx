import { get } from "lodash";
import { useRouter } from "next/router";
import { formatPhoneNumber } from "react-phone-number-input";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { Container, Grid, Stack, styled, Typography, Box } from "@mui/material";

import {
  Link,
  Image,
  Divider,
  Spacing,
  IconZalo,
  IconFacebook,
  IconInstagram,
} from "components";
import { fetchAddress } from "utils";
import { useSettings } from "contexts";
import { DEFAULT_LOGO } from "constant";
import { useMedia } from "hooks/useMedia";
import { ROUTES, ROUTES_POLICY } from "routes";
import RenderRichTextForFooter from "./components/RenderRichTextForFooter";

export const SOCIAL = [
  {
    item: <IconFacebook />,
    link: "https://www.facebook.com/thehillstores",
  },
  {
    item: <IconInstagram />,
    link: "https://www.instagram.com/thehillstore.com.vn/",
  },
  {
    item: <IconZalo />,
    link: "https://zalo.me/3242396384781881424",
  },
];

export default function Footer() {
  const router = useRouter();
  const { isMdDown } = useMedia();
  const { settings } = useSettings();
  const [address, setAddress] = useState("");

  const logo = get(settings, "logo.default", DEFAULT_LOGO);
  const companyName = get(settings, "company_name", "");
  const tax = get(settings, "tax_identification_number", "");
  const hotline2 = get(settings, "hotline_2", "");
  const storeDesc = get(settings, "store_description", "");

  useEffect(() => {
    if (!settings) return;

    const obj = {
      address: settings.line1,
      province: settings.province,
      district: settings.district,
      ward: settings.ward,
    };

    async function fetchData() {
      const result = await fetchAddress(obj);

      setAddress(result);
    }

    fetchData();
  }, [settings]);

  const currentYear = new Date().getFullYear();

  const renderPolicyItems = useMemo(() => {
    return ROUTES_POLICY.map((item, index) => {
      return (
        <StyledLink
          sx={{
            ":hover": {
              color: "#7F1D1D",
            },
          }}
          key={index}
          href={item.href}
          target="_blank"
        >
          {item.name}
        </StyledLink>
      );
    });
  }, []);

  const renderSocial = useMemo(() => {
    return SOCIAL.map((el, idx) => {
      return (
        <WrapperIconSocial key={idx} href={el.link} target="_blank">
          {el.item}
        </WrapperIconSocial>
      );
    });
  }, []);

  return (
    <StyledWrapper className="footer">
      <Divider />

      <WrapperFooterContent>
        <Box>
          <Stack gap="4px">
            <StyledWrapperLogo
              onClick={() => {
                router.push(ROUTES.home);
              }}
            >
              <Image alt="logo" src={logo} style={{ objectFit: "cover" }} />
            </StyledWrapperLogo>

            <Spacing spacing={0.2} />

            <StyledNameCompany>{companyName}</StyledNameCompany>

            <StyledTextCommon>{`Mã số thuế: ${tax}`}</StyledTextCommon>

            <Box position="relative" width="103px" height="40px">
              <Image alt="bct" src="/img/bct.png" style={{ objectFit: "contain" }} />
            </Box>

            <Stack direction="row" spacing={3} marginTop={1}>
              {renderSocial}
            </Stack>
          </Stack>
        </Box>

        <Box maxWidth={isMdDown ? undefined : "380px"}>
          <Fragment>
            <StyledTitle>Thông tin liên hệ</StyledTitle>

            <Spacing spacing={2} />

            <Stack gap="0.5rem">
              {hotline2 && (
                <StyledLink href={`tel: ${hotline2}`}>{`Tổng đài: ${formatPhoneNumber(
                  hotline2
                )}`}</StyledLink>
              )}

              {address && <StyledTextCommon>{`Địa chỉ: ${address}`}</StyledTextCommon>}
            </Stack>
          </Fragment>
        </Box>

        <Box>
          <Fragment>
            <StyledTitle>Chính sách</StyledTitle>

            <Spacing spacing={2} />

            <Stack gap="0.5rem">{renderPolicyItems}</Stack>
          </Fragment>
        </Box>

        <Box>
          <Fragment>
            <StyledTitle>Mô tả cửa hàng</StyledTitle>

            <Spacing spacing={2} />

            <RenderRichTextForFooter data={storeDesc} />
          </Fragment>
        </Box>
      </WrapperFooterContent>

      {/* <Grid container columnSpacing="2rem" rowSpacing="1rem">
        <Grid item xs={12} md={3}>
          <Stack gap="4px">
            <StyledWrapperLogo
              onClick={() => {
                router.push(ROUTES.home);
              }}
            >
              <Image alt="logo" src={logo} />
            </StyledWrapperLogo>

            <Spacing spacing={0.2} />

            <StyledNameCompany>{companyName}</StyledNameCompany>

            <StyledTextCommon>{`Mã số thuế: ${tax}`}</StyledTextCommon>

            <Box position="relative" width="103px" height="40px">
              <Image alt="bct" src="/img/bct.png" style={{ objectFit: "contain" }} />
            </Box>

            <Stack direction="row" spacing={3} marginTop={1}>
              {social.map((el, idx) => {
                return (
                  <Link key={idx} href={el.link}>
                    {el.item}
                  </Link>
                );
              })}
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={3}>
          <Fragment>
            <StyledTitle>Thông tin liên hệ</StyledTitle>

            <Spacing spacing={2} />

            <Stack gap="0.5rem">
              {hotline2 && (
                <StyledLink href={`tel: ${hotline2}`}>{`Tổng đài: ${formatPhoneNumber(
                  hotline2
                )}`}</StyledLink>
              )}

              {address && <StyledTextCommon>{`Địa chỉ: ${address}`}</StyledTextCommon>}
            </Stack>
          </Fragment>
        </Grid>

        <Grid item xs={12} md={3}>
          <Fragment>
            <StyledTitle>Chính sách</StyledTitle>

            <Spacing spacing={2} />

            <Stack gap="0.5rem">{renderPolicyItems}</Stack>
          </Fragment>
        </Grid>

        <Grid item xs={12} md={3}>
          <Fragment>
            <StyledTitle>Mô tả cửa hàng</StyledTitle>

            <Spacing spacing={2} />

            <RenderRichTextForFooter data={storeDesc} />
          </Fragment>
        </Grid>
      </Grid> */}

      {isMdDown ? <Divider /> : <Spacing spacing={4} />}

      <StyledCopyright>
        {`© ${currentYear} - Bản quyền thuộc về ${companyName}`}
      </StyledCopyright>
    </StyledWrapper>
  );
}

const WrapperFooterContent = styled(Stack)(({ theme }) => {
  return {
    gap: "16px",
    flexDirection: "row",
    justifyContent: "space-between",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  };
});

const StyledWrapperLogo = styled(Box)(({ theme }) => {
  return {
    width: "89px",
    height: "40px",
    position: "relative",
    cursor: "pointer",

    [theme.breakpoints.down("md")]: {
      width: "91px",
      height: "30px",
      cursor: "default",
    },
  };
});

const StyledWrapper = styled(Container)(() => {
  return {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  };
});

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    fontSize: "18px",
    lineHeight: "20px",
    fontWeight: 600,
    color: "#000000",
  };
});

const StyledTextCommon = styled(Typography)(({ theme }) => {
  return {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    color: theme.palette.neutral[700],
  };
});

const StyledLink = styled(Link)(({ theme }) => {
  return {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    color: theme.palette.neutral[700],
  };
});

const StyledNameCompany = styled(Typography)(({ theme }) => {
  return {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 600,
    color: theme.palette.neutral[700],
  };
});

const StyledCopyright = styled(Typography)(({ theme }) => {
  return {
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: 400,
    color: theme.palette.neutral[400],

    display: "block",
    textAlign: "center",
  };
});

const WrapperIconSocial = styled(Link)(({ theme }) => {
  return {
    ":hover": {
      "& path": {
        fill: theme.palette.primary.main,
      },
    },

    transition: "all 0.3s ease",
  };
});
