import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Filters = ({
  category,
  setCategory,
  brand,
  setBrand,
  discountRange,
  setDiscountRange,
  setPage,
  setCat,
}) => {
  // let location = useLocation();
  // useEffect(() => {}, [location.search]);
  // console.log(category, brand, discountRange);
  const handleCategories = (e) => {
    // console.log(e);
    setPage(1);
    setCategory(e);
    setDiscountRange("");
  };
  const handleBrands = (e) => {
    setPage(1);
    setBrand(e);
    setDiscountRange("");
  };
  const handleDiscountRange = (e) => {
    setPage(1);
    setDiscountRange(e);
  };

  return (
    <Box pl={"2rem"}>
      <Box>
        <Text
          my="1rem"
          fontWeight={"bold"}
          textTransform={"uppercase"}
          fontSize="0.95rem"
        >
          Categories
        </Text>
        <CheckboxGroup
          colorScheme="pink"
          value={category}
          defaultValue={category}
          onChange={handleCategories}
        >
          <Stack spacing={"1"} color="gray.500" textTransform={"capitalize"}>
            {setCat == "MensData" && (
              <Flex flexDir={"column"}>
                <Checkbox value="Shirt">Shirt</Checkbox>
                <Checkbox value="Joggers">Joggers</Checkbox>
              </Flex>
            )}
            {setCat == "WomensData" && (
              <Flex flexDir={"column"}>
                <Checkbox value="KurtaSet">KurtaSet</Checkbox>
              </Flex>
            )}
            {setCat == "ChildrensData" && (
              <Flex flexDir={"column"}>
                <Checkbox value="SweatShirt">SweatShirt</Checkbox>
              </Flex>
            )}
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box>
        <Text my="1rem" fontWeight={"bold"} fontSize="0.95rem">
          BRAND
        </Text>
        <CheckboxGroup
          colorScheme="pink"
          defaultValue={brand}
          value={brand}
          onChange={handleBrands}
        >
          <Stack spacing={"1"} color="gray.500">
            <Checkbox value="Roadster">Roadster</Checkbox>
            <Checkbox value="HIGHLANDER">HIGHLANDER</Checkbox>
            <Checkbox value="U.S. Polo Assn">U.S. Polo Assn</Checkbox>
            <Checkbox value="Jack & Jones">Jack & Jones</Checkbox>
            <Checkbox value="WROGN">WROGN</Checkbox>
            <Checkbox value="HERE&NOW">HERE&NOW</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box>
        <Text my="1rem" fontWeight={"bold"} fontSize="0.95rem">
          DISCOUNT RANGE
        </Text>
        <RadioGroup onChange={handleDiscountRange} value={discountRange}>
          <Stack direction="column" color={"gray.500"}>
            <Radio value="10" colorScheme={"pink"}>
              10% and above
            </Radio>
            <Radio value="20" colorScheme={"pink"}>
              20% and above
            </Radio>
            <Radio value="30" colorScheme={"pink"}>
              30% and above
            </Radio>
            <Radio value="40" colorScheme={"pink"}>
              40% and above
            </Radio>
            <Radio value="50" colorScheme={"pink"}>
              50% and above
            </Radio>
            <Radio value="60" colorScheme={"pink"}>
              60% and above
            </Radio>
            <Radio value="70" colorScheme={"pink"}>
              70% and above
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Filters;
