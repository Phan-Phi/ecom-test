import { useRouter } from "next/router";
import { get, isEmpty, omit } from "lodash";
import { useUpdateEffect } from "react-use";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Grid, styled, Stack, Container, Typography } from "@mui/material";

import { PRODUCTS_API } from "apis";
import { transformUrl } from "utils";
import { useFetchV2, useParams } from "hooks";
import { I_PRODUCTS, ResponseType } from "interfaces";

import SortRange from "./Sort/SortRange";
import { BreadcrumbsCustom } from "compositions";
import { CardProductItem, Pagination } from "components";
import ProductModal from "compositions/Modal/ProductModal";
import NotifyNoResultForSearch from "./components/NotifyNoResultForSearch";
import SortV2 from "./Sort/SortV2";

const LIMIT = 8;

const defaultParams = {
  limit: LIMIT,
  page: 1,
  with_count: true,
  ordering: undefined,
  search: "",
  price_start: undefined,
  price_end: undefined,
};

export default function SearchList() {
  const router = useRouter();
  const asPath = router.asPath;
  const queryPage = router.query.page || 1;
  const priceStart = router.query.price_start;
  const priceEnd = router.query.price_end;
  const searchQuery = get(router, "query.search");

  const { params, setParams } = useParams({
    initState: defaultParams,
    excludeKeys: ["with_count", "limit"],
  });

  const [open, setOpen] = useState(false);
  const [dataModal, setDataModal] = useState("");

  const handleOpen = (data: any) => {
    setDataModal(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [listBreadcrumbs, setListBreadCrumbs] = useState<any>([]);
  const [productData, setProductData] = useState<ResponseType<I_PRODUCTS>>();

  const { data, changeUrl, isLoading } = useFetchV2<ResponseType<I_PRODUCTS>>(
    transformUrl(PRODUCTS_API, omit(params, "page"))
  );

  const totalCount = get(productData, "count", 0);

  useEffect(() => {
    if (!data) return;

    setProductData((prev) => {
      if (isLoading) {
        return prev;
      } else {
        return data;
      }
    });
  }, [isLoading, data]);

  // Handle with page `/search`
  useUpdateEffect(() => {
    if (asPath === "/search" || asPath === `/search?search=${searchQuery}`) {
      setParams({
        ...defaultParams,
        search: searchQuery,
      });
      setCurrentPage(1);
    }
  }, [asPath, searchQuery]);

  useEffect(() => {
    // Run only one if back page
    let _queryPage = queryPage ? (queryPage as any) : 1;
    const _search = searchQuery ? (searchQuery as string) : "";
    let _priceStart = priceStart ? (priceStart as any) : undefined;
    let _priceEnd = priceEnd ? (priceEnd as any) : undefined;

    if (queryPage || _search || _priceEnd || _priceStart) {
      setParams({
        page: _queryPage,
        search: _search,
        price_start: _priceStart,
        price_end: _priceEnd,
      });
      setCurrentPage(parseInt(_queryPage));
    }
  }, []);

  useEffect(() => {
    const defaultBreadcrumbs = [
      {
        title: "Trang chủ",
        href: "/",
      },
      {
        title: "Tìm kiếm",
        href: `/search?search=${searchQuery}`,
      },
    ];

    setListBreadCrumbs([...defaultBreadcrumbs]);
  }, [searchQuery]);

  useEffect(() => {
    setTotalPage(Math.ceil(totalCount / LIMIT));
  }, [totalCount]);

  useUpdateEffect(() => {
    const _search = searchQuery ? (searchQuery as string) : "";

    if (_search) {
      setParams({
        page: 1,
        search: _search,
      });
      setCurrentPage(1);
    }
  }, [searchQuery]);

  useEffect(() => {
    const _offset = ((queryPage as any) - 1) * defaultParams.limit;

    const newUrl = transformUrl(PRODUCTS_API, {
      ...omit(params, "page"),
      offset: _offset,
    });

    changeUrl(newUrl);
  }, [params, queryPage]);

  const renderProducts = useMemo(() => {
    if (!productData) return null;
    if (isEmpty(productData.results))
      return <NotifyNoResultForSearch searchQuery={(searchQuery as string) || ""} />;

    return (
      <Grid container spacing="16px">
        {productData.results.map((item, index) => {
          return (
            <Grid item xs={6} md={3} key={index}>
              <Box>
                <CardProductItem
                  nameProduct={item.name}
                  id={item.id}
                  handleOpen={handleOpen}
                  defaultVariant={item.default_variant}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    );
  }, [productData, searchQuery, handleOpen]);

  const handlePagination = useCallback(
    (event: any, page: number) => {
      setCurrentPage(page);

      if (currentPage === page) return;

      setParams({
        page: page,
      });

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" as any,
      });
    },
    [currentPage]
  );

  const handlePaginationOpenNewTab = useCallback(
    (event: any) => {
      if (event.button === 1) {
        event.preventDefault();

        const page = parseInt(get(event, "target.innerText"));

        if (isNaN(page)) return;

        window.open(`/search?page=${page}&search=${searchQuery}`, "_blank");
      }
    },
    [searchQuery]
  );

  const handleOrderingV2 = useCallback((value: string) => {
    setParams({
      ordering: value,
    });
  }, []);

  return (
    <StyledWrapper>
      <Container>
        <BreadcrumbsCustom breadcrumbsData={listBreadcrumbs} />

        <WrapperContent>
          <Grid container spacing="12px">
            <Grid item xs={12} md={12}>
              <Stack gap="12px">
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    {searchQuery && (
                      <StyledText>{`Có ${totalCount} kết quả tìm kiếm cho "${searchQuery}"`}</StyledText>
                    )}
                  </Box>
                </Stack>

                <Stack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box />
                  {/* <SortV2 handleParams={handleOrderingV2} /> */}

                  {/* <SortRange
                    params={params}
                    setParams={setParams}
                    setCurrentPage={setCurrentPage}
                  /> */}
                </Stack>
                {renderProducts}
              </Stack>
            </Grid>
          </Grid>
        </WrapperContent>

        {!isEmpty(productData?.results) && (
          <Stack alignItems="center" justifyContent="center">
            <Pagination
              count={totalPage}
              page={currentPage}
              onChange={handlePagination}
              onMouseDown={handlePaginationOpenNewTab}
            />
          </Stack>
        )}
      </Container>

      <ProductModal handleClose={handleClose} open={open} dataModal={dataModal} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Box)(({ theme }) => {
  return {
    minHeight: "500px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "700px",
    },
  };
});

const StyledText = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.h6,
    color: "#111827",
    fontSize: "18px",
    lineHeight: "24px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  };
});

const WrapperContent = styled(Box)(() => {
  return {
    position: "relative",
    top: "-10px",
    paddingBottom: "40px",
  };
});
