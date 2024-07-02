import { useRouter } from "next/router";
import { useDebounce } from "react-use";
import { useState, useMemo, useCallback, useEffect } from "react";
import { BoxProps, Input, styled, Typography } from "@mui/material";

import { ROUTES } from "routes";
import { useFetchV2 } from "hooks";
import { PRODUCTS_API } from "apis";
import { transformUrl } from "utils";
import { Box, SearchOutlined } from "components";
import SearchItem from "compositions/SearchItem";
import { I_PRODUCTS, ResponseType } from "interfaces";

interface WrapperOtherSearchProps extends BoxProps {
  open: boolean;
  data: I_PRODUCTS[] | undefined;
}

interface OverlayProps extends BoxProps {
  open: boolean;
}

export default function SearchHeaderFilter() {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchDebounce, setSearchDebounce] = useState("");

  const [, cancel] = useDebounce(
    () => {
      setSearchDebounce(searchKeyword);
    },
    500,
    [searchKeyword]
  );

  const { changeUrl, data } = useFetchV2<ResponseType<I_PRODUCTS>>(() => {
    if (!searchDebounce) return;

    return transformUrl(PRODUCTS_API, { search: searchDebounce, limit: 20 });
  });

  useEffect(() => {
    setSearchKeyword(router.query.search as string);
  }, []);

  useEffect(() => {
    if (!searchDebounce) return;

    changeUrl(
      transformUrl(PRODUCTS_API, {
        search: searchDebounce,
      })
    );
  }, [searchDebounce]);

  const handleClose = () => setOpen(false);

  const onSearchKeywordHandler = useCallback(
    (keyword: string) => {
      return (e: React.BaseSyntheticEvent) => {
        e.preventDefault();

        if (keyword === "") {
          router.push("/");
          return;
        }

        if (router.query.category) {
          router.push(
            `/${ROUTES.search}?category=${router.query.category}&search=${keyword}`
          );
        } else {
          router.push(`/${ROUTES.search}?search=${keyword}`);
        }

        handleClose();
      };
    },
    [router.query.category]
  );

  const onChangeInputHandler = useCallback((e: any) => {
    setSearchKeyword(e.target.value);
  }, []);

  const renderSearchItem = useMemo(() => {
    if (data == undefined) return null;
    if (searchDebounce === "") {
      return (
        <WrapperNoProduct variant="centerCenter">
          <Typography>Không tìm thấy sản phẩm</Typography>
        </WrapperNoProduct>
      );
    }

    if (data.results.length == 0 && searchDebounce.length >= 1) {
      return (
        <WrapperNoProduct variant="centerCenter">
          <Typography>Không tìm thấy sản phẩm</Typography>
        </WrapperNoProduct>
      );
    }

    if (data.results.length > 0) {
      return (
        <Box
          sx={{
            height: data.results.length > 5 ? "21.25rem" : "auto",
            overflowY: "scroll",
          }}
        >
          {data.results.map((el, idx) => {
            return <SearchItem handleClose={handleClose} dataDefault={el} key={idx} />;
          })}
        </Box>
      );
    }
  }, [data, searchDebounce]);

  return (
    <Box>
      <Wrapper>
        <StyledStack flexDirection="row" variant="centerCenter">
          <WrapperInput component="form" onSubmit={onSearchKeywordHandler(searchKeyword)}>
            <StyledInput
              onFocus={() => {
                setOpen(true);
              }}
              fullWidth
              value={searchKeyword}
              onChange={onChangeInputHandler}
              endAdornment={<SearchOutlined sx={{ cursor: "pointer" }} />}
              placeholder="Nhập mã hàng, tên sản phẩm để tìm kiếm..."
            />
          </WrapperInput>
        </StyledStack>

        <BoxSearchItem data={data?.results} open={open}>
          {renderSearchItem}
        </BoxSearchItem>
      </Wrapper>

      <Overlay
        open={open}
        onClick={() => {
          setOpen(false);
        }}
        className="Overlay"
      />
    </Box>
  );
}

const StyledStack = styled(Box)(({ theme }) => {
  return {
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: theme.palette.neutral[300],
    ["& .MuiSvgIcon-root"]: {
      color: theme.palette.neutral[500],
    },
  };
});
const StyledInput = styled(Input)(() => {
  return {
    border: "unset",
    flexGrow: 1,

    "& input::placeholder": {
      fontStyle: "italic !important",
    },
  };
});

const WrapperInput = styled(Box)(() => {
  return {
    width: "100%",
    zIndex: 20,
  };
});
const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    position: "relative",
  };
});

const WrapperNoProduct = styled(Box)(() => {
  return {
    padding: "0.5rem 0",
  };
});

const BoxSearchItem = styled(Box, {
  shouldForwardProp: (propName) => propName !== "open" && propName !== "data",
})<WrapperOtherSearchProps>(({ open, data }) => {
  return {
    zIndex: 10,
    width: "100%",
    top: "3.5rem",
    position: "absolute",
    borderRadius: "0.5rem",
    backgroundColor: "white",
    display: open ? "block" : "none",

    ...(data !== undefined && {
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    }),
  };
});

const Overlay = styled(Box, {
  shouldForwardProp: (propName) => propName !== "open",
})<OverlayProps>(({ open }) => {
  return {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 9,
    opacity: 0,
    height: "100vh",
    backgroundColor: "white",
    display: open ? "block" : "none",
  };
});
