import {
  border,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
  const [color, setColor] = useState("#edf2f2");
  const [show, setShow] = useState(false);
  return (
    <Box bg={color} borderRadius={"md"} pos="relative">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="gray.300" />}
        />
        <Input
          type="text"
          border={"none"}
          outline="none"
          _focus={{
            boxShadow: "none",
            border: "1px solid #787373",
            outline: "none",
          }}
          placeholder="Search for products brands and more"
          onBlur={() => {
            setColor("gray.100");
            setTimeout(() => {
              setShow(false);
            }, 100);
          }}
          onFocus={() => {
            setColor("white");
            setShow(true);
          }}
        />
      </InputGroup>
      {show && (
        <Box
          pos={"absolute"}
          top="3.2rem"
          width="full"
          height="20rem"
          bg="gray.100"
          borderRadius={"md"}
        ></Box>
      )}
    </Box>
  );
};

export default Searchbar;
