import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="gray.300" />}
        />
        <Input type="tel" placeholder="Search for products brands and more" />
      </InputGroup>
    </Box>
  );
};

export default Searchbar;
