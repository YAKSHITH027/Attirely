import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
function Sidebar({ id, handleLogout }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box display={{ lg: "none" }}>
      <Button ref={btnRef} colorScheme="pink" onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box p="1rem">
            <Image
              src="https://i.ibb.co/7jfCzLZ/Attirely-removebg-preview.png"
              alt="logo"
              width="7rem"
              height={{ base: "3rem", md: "100%" }}
            />
          </Box>
          <Flex
            justify="center"
            pl="1rem"
            gap="5"
            flexDir={"column"}
            mx="2rem"
            mt="2rem"
          >
            <Link to="/">
              <Text
                textAlign={"center"}
                fontSize={"1.5rem"}
                borderBottomWidth="2px"
              >
                Home
              </Text>
            </Link>
            <Link to="/profile">
              <Text
                textAlign={"center"}
                fontSize={"1.5rem"}
                borderBottomWidth="2px"
              >
                Profile
              </Text>
            </Link>
            <Link to="/cart">
              <Text
                textAlign={"center"}
                fontSize={"1.5rem"}
                borderBottomWidth="2px"
              >
                Cart
              </Text>
            </Link>
            <Link to="/product/MensData">
              <Text
                textAlign={"center"}
                fontSize={"1.5rem"}
                borderBottomWidth="2px"
              >
                Mens
              </Text>
            </Link>
            <Link to="/product/WomensData">
              <Text
                textAlign={"center"}
                fontSize={"1.5rem"}
                borderBottomWidth="2px"
              >
                Womens
              </Text>
            </Link>
            <Link to="/product/ChildrensData">
              <Text
                textAlign={"center"}
                fontSize={"1.5rem"}
                borderBottomWidth="2px"
              >
                Kids
              </Text>
            </Link>
            <Flex justify={"center"}>
              {id ? (
                <Button onClick={handleLogout} px="2rem">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button px="2rem">Login</Button>
                </Link>
              )}
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
export default Sidebar;
