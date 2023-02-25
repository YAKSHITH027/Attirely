import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React from "react";
import Navbar from "../../Components/Home/Navbar";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Flex
        width="90vw"
        mx="auto"
        mt="2rem"
        gap="3"
        height={"80vh"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          borderWidth={"1px"}
          width={{ base: "90%", md: "20%" }}
          mx="auto"
          height={"full"}
          textAlign="center"
        >
          user details
        </Box>
        <Box
          borderWidth={"1px"}
          p="2rem"
          width={{ base: "100%", md: "76%" }}
          height={"100%"}
        >
          <Heading textAlign={"center"}>Your orders</Heading>
          <Flex flexDir={"column"} py="1rem" gap="3">
            <Skeleton height="4rem"></Skeleton>
            <Skeleton height="4rem"></Skeleton>
            <Skeleton height="4rem"></Skeleton>
            <Skeleton height="4rem"></Skeleton>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Profile;
