import {
  alpha,
  CssBaseline,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { InterFont } from "utils";

import ArrowDownSimpleOutlined from "components/Icon/ArrowDownSimpleOutlined";
import CircleCheckedOutlined from "components/Icon/CircleCheckedOutlined";
import CircleOutlined from "components/Icon/CircleOutlined";
import CheckedFilled from "components/Icon/CheckedFilled";
import UncheckOutlined from "components/Icon/UncheckOutlined";
import NextPagination from "components/Icon/NextPagination";
import PrevPagination from "components/Icon/PrevPagination";
import { COMPONENT_STATE, PALETTE_COLOR, PSEUDO_STATE } from "configuration";

type OmitProperties = "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing";

const createTypographyProperties = (
  props: {
    fontSize: number;
    fontWeight: string | number;
    lineHeight: string | number;
    letterSpacing?: string | number;
    color?: string;
  } & Omit<React.CSSProperties, OmitProperties>
) => {
  const {
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    color = PALETTE_COLOR.neutral200,
    ...restProps
  } = props;

  return {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    color,
    ...restProps,
  };
};
const themeMedia = createTheme();

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: PALETTE_COLOR.primary,
    },
    secondary: {
      main: PALETTE_COLOR.secondary,
      light: "#F2663B",
    },
    common: {
      white: PALETTE_COLOR.white,
      black: PALETTE_COLOR.black,
    },
    error: {
      main: PALETTE_COLOR.primary,
    },
    neutral: {
      50: PALETTE_COLOR.neutral50,
      100: PALETTE_COLOR.neutral100,
      200: PALETTE_COLOR.neutral200,
      300: PALETTE_COLOR.neutral300,
      400: PALETTE_COLOR.neutral400,
      500: PALETTE_COLOR.neutral500,
      600: PALETTE_COLOR.neutral600,
      700: PALETTE_COLOR.neutral700,
      800: PALETTE_COLOR.neutral800,
      900: PALETTE_COLOR.neutral900,
    },
    destructive: {
      50: PALETTE_COLOR.destructive50,
      100: PALETTE_COLOR.destructive100,
      200: PALETTE_COLOR.destructive200,
      300: PALETTE_COLOR.destructive300,
      400: PALETTE_COLOR.destructive400,
      500: PALETTE_COLOR.destructive500,
      600: PALETTE_COLOR.destructive600,
      700: PALETTE_COLOR.destructive700,
      800: PALETTE_COLOR.destructive800,
      900: PALETTE_COLOR.destructive900,
    },

    success2: {
      50: PALETTE_COLOR.success50,
      100: PALETTE_COLOR.success100,
      200: PALETTE_COLOR.success200,
      300: PALETTE_COLOR.success300,
      400: PALETTE_COLOR.success400,
      500: PALETTE_COLOR.success500,
      600: PALETTE_COLOR.success600,
      700: PALETTE_COLOR.success700,
      800: PALETTE_COLOR.success800,
      900: PALETTE_COLOR.success900,
    },

    warning2: {
      50: PALETTE_COLOR.warning50,
      100: PALETTE_COLOR.warning100,
      200: PALETTE_COLOR.warning200,
      300: PALETTE_COLOR.warning300,
      400: PALETTE_COLOR.warning400,
      500: PALETTE_COLOR.warning500,
      600: PALETTE_COLOR.warning600,
      700: PALETTE_COLOR.warning700,
      800: PALETTE_COLOR.warning800,
      900: PALETTE_COLOR.warning900,
    },
  },

  typography: {
    fontFamily: InterFont.style.fontFamily,
    hero: createTypographyProperties({
      fontSize: 96,
      lineHeight: "96px",
      fontWeight: 700,
    }),

    h1: createTypographyProperties({
      fontSize: 40,
      lineHeight: "48px",
      fontWeight: 700,
      [themeMedia.breakpoints.down("md")]: {
        fontSize: 36,
        lineHeight: "44px",
      },
      [themeMedia.breakpoints.down("sm")]: {
        fontSize: 36,
        lineHeight: "44px",
      },
    }),
    h2: createTypographyProperties({
      fontSize: 36,
      lineHeight: "44px",
      fontWeight: 700,

      [themeMedia.breakpoints.down("md")]: {
        fontSize: 32,
        lineHeight: "40px",
      },
      [themeMedia.breakpoints.down("sm")]: {
        fontSize: 32,
        lineHeight: "40px",
      },
    }),
    h3: createTypographyProperties({
      fontSize: 32,
      lineHeight: "40px",
      fontWeight: 700,
      [themeMedia.breakpoints.down("md")]: {
        fontSize: 28,
        lineHeight: "36px",
      },
      [themeMedia.breakpoints.down("sm")]: {
        fontSize: 28,
        lineHeight: "36px",
      },
    }),
    h4: createTypographyProperties({
      fontSize: 28,
      lineHeight: "36px",
      fontWeight: 700,
      [themeMedia.breakpoints.down("md")]: {
        fontSize: 24,
        lineHeight: "32px",
      },
      [themeMedia.breakpoints.down("sm")]: {
        fontSize: 24,
        lineHeight: "32px",
      },
    }),
    h5: createTypographyProperties({
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 700,
      [themeMedia.breakpoints.down("md")]: {
        fontSize: 20,
        lineHeight: "28px",
        fontWeight: 700,
      },
      [themeMedia.breakpoints.down("sm")]: {
        fontSize: 20,
        lineHeight: "28px",
      },
    }),
    h6: createTypographyProperties({
      fontSize: 18,
      lineHeight: "28px",
      fontWeight: 600,

      [themeMedia.breakpoints.down("md")]: {
        fontSize: 18,
        lineHeight: "24px",
        fontWeight: 700,
      },
      [themeMedia.breakpoints.down("sm")]: {
        fontSize: 18,
        lineHeight: "24px",
      },
    }),

    paraLarge: createTypographyProperties({
      fontSize: 24,
      lineHeight: "26px",
      fontWeight: 600,
    }),
    paraMedium: createTypographyProperties({
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 600,
    }),
    paraSmall: createTypographyProperties({
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 600,
    }),
    paraXSmall: createTypographyProperties({
      fontSize: 12,
      lineHeight: "20px",
      fontWeight: 600,
    }),
    paraXXSmall: createTypographyProperties({
      fontSize: 8,
      lineHeight: "12px",
      fontWeight: 600,
    }),
    paraOverline: createTypographyProperties({
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 600,
    }),
  },
});

const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiTypography: {
      defaultProps: {
        variant: "paraMedium",
      },

      styleOverrides: {
        root: {
          color: defaultTheme.palette.neutral[500],
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          ...defaultTheme.typography.paraMedium,
          textTransform: "none",
          whiteSpace: "nowrap",
          padding: "0.5rem 1.25rem",
          borderRadius: "6px",
          fontSize: "0.87rem",
          lineHeight: "1.25rem",
          fontWeight: 700,

          [COMPONENT_STATE.disabled]: {
            backgroundColor: PALETTE_COLOR.secondaryDisabled,
          },
        },
        contained: {
          backgroundColor: PALETTE_COLOR.black,
          color: PALETTE_COLOR.white,
          [PSEUDO_STATE.hover]: {
            backgroundColor: PALETTE_COLOR.black,
          },
        },
        outlined: {
          borderColor: PALETTE_COLOR.neutral300,
          border: `2px solid ${PALETTE_COLOR.neutral300}`,
          color: defaultTheme.palette.neutral[700],

          [PSEUDO_STATE.hover]: {
            border: `2px solid ${PALETTE_COLOR.neutral300}`,
          },
        },
      },
    },

    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },

      styleOverrides: {
        root: {
          ["& .MuiFormLabel-root"]: {
            marginBottom: 12,
          },
          ["& .MuiFormHelperText-root"]: {
            marginTop: 8,
          },
          ["& .MuiFormLabel-asterisk"]: {
            color: "red",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          ...defaultTheme.typography.paraXSmall,
          color: defaultTheme.palette.neutral[700],
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          ...defaultTheme.typography.paraSmall,
          color: defaultTheme.palette.neutral[900],
          [COMPONENT_STATE.focused]: {
            color: defaultTheme.palette.neutral[900],
          },
          [COMPONENT_STATE.active]: {
            color: defaultTheme.palette.neutral[900],
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: 400,

          paddingRight: 16,
          marginTop: "0 !important",

          borderWidth: 2,
          borderRadius: 8,
          borderStyle: "solid",
          borderColor: defaultTheme.palette.neutral[300],

          ["& .MuiSvgIcon-root"]: {
            color: defaultTheme.palette.neutral[500],
          },
          [COMPONENT_STATE.active]: {
            borderColor: defaultTheme.palette.neutral[900],
          },

          [COMPONENT_STATE.focused]: {
            borderColor: defaultTheme.palette.neutral[900],

            ["& .MuiSvgIcon-root"]: {
              color: defaultTheme.palette.neutral[900],
            },
          },

          [COMPONENT_STATE.error]: {
            borderColor: defaultTheme.palette.primary.main,

            ["& .MuiSvgIcon-root"]: {
              color: defaultTheme.palette.primary.main,
            },
          },
        },
        input: {
          color: defaultTheme.palette.common.black,
          padding: "10px 12px",
          height: "unset",

          [PSEUDO_STATE.placeholder]: {
            color: defaultTheme.palette.neutral[400],
          },
        },
      },
      defaultProps: {
        disableUnderline: true,
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...defaultTheme.typography.caption2,
          marginTop: 0,
        },
      },
    },

    MuiSelect: {
      defaultProps: {
        fullWidth: true,
        // IconComponent: ArrowDownSimpleOutlined,
      },
      styleOverrides: {
        root: {
          border: `2px solid ${defaultTheme.palette.neutral[300]}`,
          [COMPONENT_STATE.error]: {
            borderColor: defaultTheme.palette.primary.main,

            ["& .MuiSvgIcon-root"]: {
              color: defaultTheme.palette.neutral[900],
            },
          },
        },
        select: {
          ...defaultTheme.typography.captionBold,
          padding: "12px 16px",
          color: defaultTheme.palette.neutral[900],
        },
        iconOpen: {
          color: defaultTheme.palette.neutral[900],
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        paper: {
          padding: "12px 16px",
          marginTop: 16,
          borderRadius: 8,
          borderColor: defaultTheme.palette.neutral[300],
          borderWidth: 2,
          borderStyle: "solid",

          ["& .MuiList-root"]: {
            padding: 0,
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...defaultTheme.typography.captionBold,
          padding: "8px 16px",
          color: defaultTheme.palette.neutral[900],

          [COMPONENT_STATE.selected]: {
            backgroundColor: alpha(defaultTheme.palette.neutral[400], 0.16),
            [PSEUDO_STATE.hover]: {
              backgroundColor: alpha(defaultTheme.palette.neutral[400], 0.16),
            },
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderRadius: 8,
          borderColor: defaultTheme.palette.neutral[500],

          borderStyle: "solid",
          ["& .MuiOutlinedInput-notchedOutline"]: {
            display: "none",
          },
          [COMPONENT_STATE.focused]: {
            borderColor: defaultTheme.palette.neutral[500],
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {},
      styleOverrides: {
        root: {
          maxWidth: "1440px !important",
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: defaultTheme.palette.neutral[500],
          transform: "scale(1,1)",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          ...defaultTheme.typography.paraXSmall,
          color: defaultTheme.palette.neutral[400],

          [COMPONENT_STATE.selected]: {
            color: defaultTheme.palette.neutral[900],
            backgroundColor: "unset",
          },

          [PSEUDO_STATE.hover]: {
            color: defaultTheme.palette.neutral[900],
            backgroundColor: "unset",
            "& span": {
              color: defaultTheme.palette.neutral[900],
            },
          },

          [themeMedia.breakpoints.down("sm")]: {
            padding: 0,
            minWidth: "1.75rem",
          },
        },
        icon: {
          width: "1.2em",
          height: "1.2em",
        },
      },
      defaultProps: {
        slots: {
          previous: PrevPagination,
          next: NextPagination,
        },
      },
    },
    MuiChip: {
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          height: "unset",
          padding: "4px 8px",
        },
        label: {
          ...defaultTheme.typography.caption2,
          color: defaultTheme.palette.neutral[800],
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        textColor: "secondary",
      },
      styleOverrides: {
        root: {},
        indicator: {
          display: "none",
        },
      },
    },
    MuiTab: {
      defaultProps: {
        color: defaultTheme.palette.secondary.main,
      },
      styleOverrides: {
        root: {
          ...defaultTheme.typography.paraXSmall,
          textTransform: "none",
          transition: `all ${defaultTheme.transitions.duration.shorter}ms`,
          color: defaultTheme.palette.neutral[400],
          borderBottom: ` 2px solid ${defaultTheme.palette.neutral[400]}`,
          [PSEUDO_STATE.hover]: {
            color: defaultTheme.palette.neutral[900],
          },
          [COMPONENT_STATE.selected]: {
            color: defaultTheme.palette.neutral[900],
            borderBottom: `2px solid ${defaultTheme.palette.common.black}`,
          },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        icon: <CircleOutlined stroke={defaultTheme.palette.common.black} />,
        checkedIcon: <CircleCheckedOutlined />,
        color: "secondary",
        disableRipple: true,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        icon: <UncheckOutlined stroke={defaultTheme.palette.common.black} />,
        checkedIcon: <CheckedFilled />,
        color: "error",
        disableRipple: true,
      },
    },
    MuiSlider: {
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {
        rail: {
          backgroundColor: defaultTheme.palette.neutral[600],
          opacity: 1,
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        noOptionsText: "Không có dữ liệu",
        popupIcon: <ArrowDownSimpleOutlined />,
      },
      styleOverrides: {
        root: {
          ["& .MuiAutocomplete-inputRoot"]: {
            paddingRight: "7px !important",
          },
        },

        option: {
          ...defaultTheme.typography.captionBold,
          padding: "8px 16px",
          [COMPONENT_STATE.selected]: {
            backgroundColor: alpha(defaultTheme.palette.secondary.main, 0.16),
            [PSEUDO_STATE.hover]: {
              backgroundColor: alpha(defaultTheme.palette.secondary.main, 0.16),
            },
          },
          [`&[aria-selected="true"]`]: {
            backgroundColor: `${alpha(
              defaultTheme.palette.secondary.main,
              0.16
            )} !important`,
          },
        },
        paper: {
          paddingLeft: 12,
          marginTop: 16,
          borderRadius: 8,
          borderColor: defaultTheme.palette.secondary.main,
          borderWidth: 2,
          borderStyle: "solid",
          boxShadow: "none",
        },
        input: {
          padding: "10px 12px !important",
        },
        noOptions: {
          ...defaultTheme.typography.captionBold,
        },
        endAdornment: {
          paddingRight: 7,
        },
        popupIndicatorOpen: {
          color: defaultTheme.palette.secondary.main,
        },
        tag: {
          backgroundColor: "transparent",
          padding: 8,
          margin: 6,
          borderColor: defaultTheme.palette.secondary.main,
          borderWidth: 2,
          borderStyle: "solid",
          ["& .MuiChip-label"]: {
            ...defaultTheme.typography.caption,
            padding: 0,
            paddingRight: 12,
          },
          ["& .MuiChip-deleteIcon"]: {
            margin: 0,
          },
        },
      },
    },
    MuiBreadcrumbs: {
      defaultProps: {
        separator: "/",
      },
      styleOverrides: {
        root: { margin: "1rem 0" },
        // li: {
        //   ...defaultTheme.typography.paraMedium,
        //   color: defaultTheme.palette.neutral[900],

        //   ["&:nth-last-of-type(1)"]: {
        //     "& .MuiTypography-root": {
        //       fontWeight: 400,
        //       color: defaultTheme.palette.neutral[500],
        //     },
        //   },

        //   [themeMedia.breakpoints.down("md")]: {
        //     ...defaultTheme.typography.paraXSmall,
        //     color: defaultTheme.palette.neutral[900],
        //     ["&:nth-last-of-type(1)"]: {
        //       "& .MuiTypography-root": {
        //         ...defaultTheme.typography.paraXSmall,
        //         fontWeight: 400,
        //         color: defaultTheme.palette.neutral[500],
        //       },
        //     },
        //   },

        //   [themeMedia.breakpoints.down("sm")]: {
        //     ...defaultTheme.typography.paraXXSmall,
        //     color: defaultTheme.palette.neutral[900],
        //     ["&:nth-last-of-type(1)"]: {
        //       "& .MuiTypography-root": {
        //         ...defaultTheme.typography.paraXXSmall,
        //         fontWeight: 400,
        //         color: defaultTheme.palette.neutral[500],
        //       },
        //     },
        //   },
        // },
        separator: {
          ...defaultTheme.typography.paraMedium,
          color: defaultTheme.palette.neutral[500],
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: { color: defaultTheme.palette.common.black, fontWeight: 400 },
      },
    },

    MuiTooltip: {
      styleOverrides: {},
    },
  },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
