import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const ProductSlider = ({ imageData, width, height, gap }) => {
  return (
    <Box>
      <Flex
        gap={gap}
        overflowX={"scroll"}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {imageData.map((item) => {
          return <Image key={Math.random()+item+"abc"} src={item} width={width} height={height} />;
        })}
      </Flex>
    </Box>
  );
};

export default ProductSlider;
