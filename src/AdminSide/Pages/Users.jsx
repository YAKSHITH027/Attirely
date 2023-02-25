import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import UserCard from "../Components/UserCard";

const Users = () => {
  return (
    <>
      <Heading fontWeight={"thiner"} as="h2" size="xl">
        Customers
      </Heading>
      <Box display={"flex"}>
        <UserCard />
      </Box>
    </>
  );
};

export default Users;
