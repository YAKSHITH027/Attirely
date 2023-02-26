import {
  PopoverHeader,
  Box,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Searchbar from "./Searchbar";
import { BsBag, BsFillBagFill, BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import MegaMenu from "./MegaMenu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../Redux/Cart/cart.actions";
const Navbar = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => {
    return store.userAuthReducer.user;
  });

  const id = userData?.uid;

  const cartData = useSelector((store) => {
    return store.cartReducer.cart;
  });
  console.log(cartData);

  useEffect(() => {
    if (id) {
      dispatch(getCart(id));
    }
  }, []);

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
        <Link to="/">
          <Box minW={"6rem"}>
            <Image
              src="https://i.ibb.co/7jfCzLZ/Attirely-removebg-preview.png"
              alt="logo"
              width="7rem"
              height={{ base: "3rem", md: "100%" }}
            />
          </Box>
        </Link>
        <MegaMenu />

        <Box
          minWidth={"10rem"}
          width="30rem"
          display={{ base: "none", lg: "block" }}
        >
          <Searchbar />
        </Box>
        <Flex gap={{ base: "1rem", md: "2rem" }}>
          <Popover>
            <PopoverTrigger>
              <Flex flexDir={"column"} align={"center"} cursor="pointer">
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
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Profile</PopoverHeader>
              <PopoverBody>
                <Flex flexDir={"column"} gap="2">
                  <Link to="/login">
                    <Text>Signin / Signup</Text>
                  </Link>
                  <Link to="/profile">
                    <Text>Profile</Text>
                  </Link>

                  <Link to="/login">
                    <Text>orders</Text>
                  </Link>
                  <Link to="/login">
                    <Text>Wishlists</Text>
                  </Link>
                  <Link to="#">
                    <Text>gift cards</Text>
                  </Link>
                  <Link to="#">
                    <Text>contact us</Text>
                  </Link>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

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
          <Link to="/cart">
            <Flex flexDir={"column"} align={"center"} pos="relative">
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
                <Flex
                  justify={"center"}
                  align="center"
                  pos={"absolute"}
                  top="-5px"
                  right="-12px"
                  width="20px"
                  height="20px"
                  color="white"
                  borderRadius={"50%"}
                  bg="pink.400"
                >
                  {cartData.length}
                </Flex>
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
      <Box padding={"8px"} display={{ lg: "none" }}>
        <Searchbar />
      </Box>
    </Box>
  );
};

export default Navbar;
