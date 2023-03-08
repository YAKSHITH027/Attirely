import { Heading } from "@chakra-ui/react";
import React from "react";

const ListHeading = ({ text }) => {
  return (
    <Heading
      pl={{ base: "0.8rem", md: "2rem" }}
      pb={{ base: "0.8rem", md: "2rem" }}
      letterSpacing="3px"
      fontFamily="Roboto"
      fontSize={{ base: "1.4rem", md: "1.8rem" }}
      textTransform={"uppercase"}
      color="gray.700"
      mb={{ base: "0.3rem", md: "1rem" }}
    >
      {text}
    </Heading>
  );
};

export default ListHeading;
