import { Heading } from "@chakra-ui/react";
import React from "react";

const ListHeading = ({ text }) => {
  return (
    <Heading
      pl={"2rem"}
      pb={"2rem"}
      letterSpacing="3px"
      fontFamily="Roboto"
      fontSize={"1.8rem"}
      textTransform={"uppercase"}
      color="gray.700"
      mb={"1rem"}
    >
      {text}
    </Heading>
  );
};

export default ListHeading;
