import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Home/Navbar";
import Footer from "../../Components/Home/Footer";
import SinglegridProduct from "../../Components/Products/SinglegridProduct";
import Filters from "../../Components/Products/Filters";
import "./Products.css";
import { useSearchParams } from "react-router-dom";
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
const Products = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  const [brand, setBrand] = useState(searchParams.getAll("brand") || []);
  const [discountRange, setDiscountRange] = useState(
    searchParams.get("discountRange") || null
  );
  const isLoading = useSelector((store) => {
    return store.productReducer.isLoading;
  });
  const prod = useSelector((store) => {
    return store.productReducer.products;
  });
  let params = {};
  if (category.length) params.category = category;
  if (brand.length) params.brand = brand;
  if (discountRange) params.discountRange = discountRange;

  useEffect(() => {
    setSearchParams(params);
    const getProductParams = {
      params: { brand, subCategory: category, _limit: 15 },
    };

    dispatch(getProducts("MensData", getProductParams));
  }, [brand, category, discountRange]);
  console.log("produc", isLoading);

  return (
    <div>
      <Navbar />
      <Box borderBottomWidth={"1px"}>
        <Box p="0.9rem" pl={"1.3rem"}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Clothing</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Mens</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box pl="1.3rem">
          <Text as="span" fontWeight={"bold"}>
            Mens
          </Text>{" "}
          -17865
        </Box>
        <Flex
          pt="0.9rem"
          pl="1.3rem"
          pb={"5px"}
          justify={"space-between"}
          align="center"
        >
          <Box fontWeight={"bold"}>Filters</Box>

          <Select placeholder="Sort by" width={{ base: "13rem", sm: "16rem" }}>
            <option value="option1">Price: Low to High</option>
            <option value="option2">Price: High to Low</option>
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
          />
        </Box>
        <Box width="full" minH={"80vh"}>
          <Grid
            borderBottomWidth={"1px"}
            templateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(4,1fr)",
              xl: "repeat(5,1fr)",
            }}
            p="1.5rem"
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
                  return <SinglegridProduct key={item.id} {...item} />;
                })}
          </Grid>
          <Box height={"20vh"}>
            <Flex justify={"center"} align="center" height="100%" gap="2">
              <Button>Prev</Button>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>Next</Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </div>
  );
};

export default Products;
