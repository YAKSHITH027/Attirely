import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Searchbar from "./Searchbar";
import { BsBag, BsFillBagFill, BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import MegaMenu from "./MegaMenu";
const Navbar = () => {
  return (
    <Box
      position={"sticky"}
      top="0"
      zIndex={"100"}
      bg="white"
      boxShadow=" 0px 7px 7px -5px rgba(120,108,120,0.2)"
    >
      <Flex
        height={{ base: "3.2rem", md: "4.94rem" }}
        px={{ base: "1rem", md: "3rem" }}
        gap="2rem"
        justify={"space-between"}
        align={"center"}
      >
        <Box minW={"6rem"}>
          <Image
            src="https://i.ibb.co/7jfCzLZ/Attirely-removebg-preview.png"
            alt="logo"
            width="7rem"
            height={{ base: "3rem", md: "100%" }}
          />
        </Box>
        <MegaMenu />

        <Box
          minWidth={"10rem"}
          width="30rem"
          display={{ base: "none", lg: "block" }}
        >
          <Searchbar />
        </Box>
        <Flex gap={{ base: "1rem", md: "2rem" }}>
          <Flex flexDir={"column"} align={"center"}>
            <Text>
              <BsPerson fontSize={"1.26rem"} />
            </Text>
            <Text
              fontSize={"0.8rem"}
              fontWeight="bold"
              display={{ base: "none", md: "block" }}
              color={"blackAlpha.600"}
            >
              Profile
            </Text>
          </Flex>
          <Flex flexDir={"column"} align={"center"}>
            <Text>
              <AiOutlineHeart fontSize={"1.26rem"} />
            </Text>
            <Text
              fontSize={"0.8rem"}
              fontWeight="bold"
              display={{ base: "none", md: "block" }}
              color={"blackAlpha.600"}
            >
              Wishlist
            </Text>
          </Flex>
          <Flex flexDir={"column"} align={"center"}>
            <Text>
              <BsBag fontSize={"1.26rem"} />
            </Text>
            <Text
              fontSize={"0.8rem"}
              fontWeight="bold"
              display={{ base: "none", md: "block" }}
              color={"blackAlpha.600"}
            >
              Bag
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box padding={"8px"} display={{ lg: "none" }}>
        <Searchbar />
      </Box>
    </Box>
  );
};

export default Navbar;
