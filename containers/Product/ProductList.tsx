import { useRouter } from "next/router";
import { get, isEmpty, omit } from "lodash";
import { useUpdateEffect } from "react-use";
import { Box, Grid, Stack, styled, Container } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import Sort from "./Sort/Sort";
import SortRange from "./Sort/SortRange";
import { BreadcrumbsCustom } from "compositions";
import { CardProductItem, Pagination } from "components";
import NotifyNoResult from "./components/NotifyNoResult";
import CategoryForProduct from "./Category/CategoryForProduct";

import { PRODUCTS_API } from "apis";
import { useFetchV2, useParams } from "hooks";
import { I_PRODUCTS, ResponseType } from "interfaces";
import ProductModal from "compositions/Modal/ProductModal";
import { fetchCategoryBreadcrumbs, transformUrl } from "utils";
import { DEFAULT_BREADCRUMBS_FOR_PRODUCT, SORT } from "constant";
import SortV2 from "./Sort/SortV2";

const LIMIT = 8;

const defaultParams = {
  limit: LIMIT,
  page: 1,
  category: null,
  with_count: true,
  ordering: undefined,
  price_start: undefined,
  price_end: undefined,
};

export default function ProductList() {
  const router = useRouter();
  const asPath = router.asPath;
  const queryPage = router.query.page || 1;
  const parentId = router.query.category;
  const priceStart = router.query.price_start;
  const priceEnd = router.query.price_end;

  const { params, setParams } = useParams({
    initState: defaultParams,
    excludeKeys: ["with_count", "limit", "ordering", "page"],
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
  const [productData, setProductData] = useState<ResponseType<I_PRODUCTS>>();
  const [listBreadcrumbs, setListBreadCrumbs] = useState(DEFAULT_BREADCRUMBS_FOR_PRODUCT);
  const [categorySelected, setCategorySelected] = useState("");

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

  // Handle with page `/`
  useUpdateEffect(() => {
    if (asPath === "/" || asPath === "/?page=1") {
      setParams({
        ...defaultParams,
        page: 1,
      });
      setCurrentPage(1);
    }
  }, [asPath]);

  useEffect(() => {
    // Run only one if back page have offset | category
    let _category = parentId ? (parentId as string) : null;
    let _queryPage = queryPage ? (queryPage as any) : 1;
    let _priceStart = priceStart ? (priceStart as any) : undefined;
    let _priceEnd = priceEnd ? (priceEnd as any) : undefined;

    if (queryPage || _category || _priceStart || _priceEnd) {
      setParams({
        page: _queryPage,
        category: _category,
        price_start: _priceStart,
        price_end: _priceEnd,
      });
      setCurrentPage(parseInt(_queryPage));
    }
  }, []);

  // Handle Category
  useUpdateEffect(() => {
    let _category = parentId ? (parentId as string) : null;

    if (_category) {
      setParams({
        page: 1,
        category: _category,
      });
      setCurrentPage(1);
    }
  }, [parentId]);

  useEffect(() => {
    async function fetch() {
      const result = await fetchCategoryBreadcrumbs(parentId as string);

      const transformResult = result.map((item) => {
        return {
          title: item.name,
          href: `/?category=${item.id}`,
        };
      });

      setListBreadCrumbs([...DEFAULT_BREADCRUMBS_FOR_PRODUCT, ...transformResult]);
      setCategorySelected(() => {
        if (isEmpty(transformResult)) return "";

        return transformResult[transformResult.length - 1].title;
      });
    }

    fetch();
  }, [parentId]);

  useEffect(() => {
    setTotalPage(Math.ceil(totalCount / LIMIT));
  }, [totalCount]);

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
    if (isEmpty(productData.results)) return <NotifyNoResult />;

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
  }, [handleOpen, productData]);

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

        if (parentId) {
          window.open(`/?category=${parentId}&page=${page}`, "_blank");
        } else {
          window.open(`/?page=${page}`, "_blank");
        }
      }
    },
    [parentId]
  );

  // const handleOrderingProduct = useCallback(() => {
  //   let ordering: string | undefined;

  //   switch (params.ordering) {
  //     case undefined:
  //       ordering = SORT.ASC;
  //       break;
  //     case SORT.ASC:
  //       ordering = SORT.DESC;
  //       break;
  //     case SORT.DESC:
  //       ordering = SORT.DEFAULT;
  //       break;
  //     default:
  //       ordering = undefined;
  //   }
  //   setParams({
  //     ordering: ordering,
  //   });
  // }, [params]);

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
            <Grid item xs={12} md={2}>
              <CategoryForProduct categorySelected={categorySelected} />
            </Grid>

            <Grid item xs={12} md={10}>
              <Stack gap="12px">
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box />

                  <Stack gap="8px" flexDirection="row">
                    <SortV2 handleParams={handleOrderingV2} />
                    {/* <Sort value={params.ordering} onClick={handleOrderingProduct} /> */}

                    {/* <SortRange
                      params={params}
                      setParams={setParams}
                      setCurrentPage={setCurrentPage}
                    /> */}
                  </Stack>
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

const WrapperContent = styled(Box)(() => {
  return {
    top: "-10px",
    position: "relative",
    paddingBottom: "40px",
  };
});
