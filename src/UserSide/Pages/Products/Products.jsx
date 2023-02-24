import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Home/Navbar";
import Footer from "../../Components/Home/Footer";
import SinglegridProduct from "../../Components/Products/SinglegridProduct";
import Filters from "../../Components/Products/Filters";
import "./Products.css";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Products/products.actions";
import { Skeleton } from "@chakra-ui/skeleton";
import { Select } from "@chakra-ui/select";
import { Button } from "@chakra-ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { sortedLastIndexOf } from "lodash";
const UserProduct = () => {
  const dispatch = useDispatch();
  let { products } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  const [brand, setBrand] = useState(searchParams.getAll("brand") || []);
  const [discountRange, setDiscountRange] = useState(
    searchParams.get("discountRange") || null
  );
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const isLoading = useSelector((store) => {
    return store.productReducer.isLoading;
  });
  let prod = useSelector((store) => {
    return store.productReducer.products;
  });
  if (discountRange) {
    prod = prod.filter((item) => {
      let num = parseInt(item.discount);

      return num > discountRange;
    });
  }
  const totalCount = useSelector((store) => {
    return store.productReducer.totalCount;
  });
  // console.log("insdie", prod);

  let params = {};
  if (category.length) params.category = category;
  if (brand.length) params.brand = brand;
  if (discountRange) params.discountRange = discountRange;
  if (page) params.page = page;
  if (sort) params.sort = sort;
  params.limit = 15;
  useEffect(() => {
    setSearchParams(params);

    const getProductParams = {
      params: { brand, subCategory: category, _limit: 15, _page: page },
    };
    if (sort) {
      getProductParams.params._sort = "offerPrice";
      getProductParams.params._order = sort;
    }

    dispatch(getProducts(products, getProductParams));
  }, [brand, category, discountRange, page, sort, products]);

  // pagingation

  const handlePage = (val) => {
    setPage(page + val);
  };

  //sorting

  const handleSort = (e) => {
    // console.log(e.target.value);
    setSort(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <Box borderBottomWidth={"1px"}>
        <Box p="0.9rem" pl={"1.3rem"}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Clothing</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{products}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box pl="1.3rem">
          <Text as="span" fontWeight={"bold"}>
            Mens
          </Text>{" "}
          -{totalCount}
        </Box>
        <Flex
          pt="0.9rem"
          pl="1.3rem"
          pb={"5px"}
          justify={"space-between"}
          align="center"
        >
          <Flex width="15rem" justify={"space-between"} align="center">
            <Box fontWeight={"bold"}>Filters</Box>
            <Button
              colorScheme={"pink"}
              onClick={() => {
                setCategory([]);
                setBrand([]);
                setDiscountRange("");
                setSort("");
              }}
            >
              Clear all
            </Button>
          </Flex>

          <Select
            placeholder="Sort by"
            width={{ base: "13rem", sm: "16rem" }}
            value={sort}
            onChange={handleSort}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </Select>
        </Flex>
      </Box>
      <Flex justify="center">
        <Box
          width="300px"
          minH={"80vh"}
          borderRightWidth="1px"
          display={{ base: "none", md: "block" }}
        >
          <Filters
            brand={brand}
            setBrand={setBrand}
            category={category}
            setCategory={setCategory}
            discountRange={discountRange}
            setDiscountRange={setDiscountRange}
            setPage={setPage}
          />
        </Box>
        <Box width="full" minH={"80vh"}>
          {prod.length == 0 && !isLoading ? (
            <Flex justify={"center"} align="center" padding={"2rem"}>
              <Image
                src="https://media.tenor.com/OyUVgQi-l-QAAAAC/404.gif"
                borderRadius={"2rem"}
              />
            </Flex>
          ) : (
            <Grid
              borderBottomWidth={"1px"}
              templateColumns={{
                base: "repeat(2,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(4,1fr)",
                xl: "repeat(5,1fr)",
              }}
              p="1.5rem"
              minHeight={"80vh"}
              rowGap={"2rem"}
              placeItems={"center"}
            >
              {isLoading
                ? [...Array(15).keys()].map((item) => {
                    return (
                      <Stack key={item}>
                        <Skeleton height="280px" width="210px" />
                        <Skeleton height="16px" />
                        <Skeleton height="16px" />
                        <Skeleton height="16px" />
                      </Stack>
                    );
                  })
                : prod.map((item) => {
                    return (
                      <SinglegridProduct
                        key={item.id}
                        {...item}
                        products={products}
                      />
                    );
                  })}
            </Grid>
          )}
          {prod.length && (
            <Box height={"20vh"}>
              <Flex justify={"center"} align="center" height="100%" gap="2">
                <Button
                  isDisabled={page == 1}
                  onClick={() => {
                    handlePage(-1);
                  }}
                >
                  Prev
                </Button>
                {[...Array(Math.ceil(totalCount / 15)).keys()].map((item) => {
                  return (
                    <Button
                      key={item + 1}
                      onClick={() => {
                        setPage(item + 1);
                      }}
                    >
                      {item + 1}
                    </Button>
                  );
                })}
                <Button
                  isDisabled={page == Math.ceil(totalCount / 15)}
                  onClick={() => {
                    handlePage(+1);
                  }}
                >
                  Next
                </Button>
              </Flex>
            </Box>
          )}
        </Box>
      </Flex>
      <Footer />
    </div>
  );
};

export default UserProduct;
