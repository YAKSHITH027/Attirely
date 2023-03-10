import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { similarProduct } from "../../../Utils/SimilarProductData";
import SinglegridProduct from "./SinglegridProduct";

const SimilarProducts = () => {
  return (
    <Box>
      <Text fontSize={"1.4rem"} p="1rem">
        Similar Products
      </Text>
      <Flex
        ml="1rem"
        mb="2rem"
        gap="2"
        py="1rem"
        overflowX={"scroll"}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {similarProduct.map((item) => {
          return <SinglegridProduct key={item.id} {...item} />;
        })}
      </Flex>
    </Box>
  );
};

export default SimilarProducts;
