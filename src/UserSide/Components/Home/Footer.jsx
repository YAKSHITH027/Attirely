import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      // mt="4rem"
      minH={"30vh"}
      bg="gray.100"
      padding={{ base: "0.5rem", lg: "3rem" }}
      className="footerChild"
      color={"gray.600"}
    >
      <Flex
        width={{ base: "100%", lg: "70%" }}
        flexDir={{ base: "column", lg: "row" }}
        margin={"auto"}
        textAlign={{ base: "center", lg: "start" }}
        textTransform="capitalize"
        cursor={"pointer"}
      >
        <Box width={{ base: "100%", lg: "20%" }}>
          <Text my={"1rem"} fontWeight="bold">
            online shopping
          </Text>
          <Text>mens</Text>
          <Text>women</Text>
          <Text>kids</Text>
          <Text>home& living</Text>
          <Text>beauty</Text>
          <Text> gift cards</Text>
          <Text>myntra insider</Text>
          <Text my="1rem" fontWeight="bold">
            useful links
          </Text>
          <Text>blog</Text>
          <Text>career</Text>
          <Text>sitemap</Text>
          <Text>corporate information</Text>
          <Text>sitemap</Text>
        </Box>
        <Box width={{ base: "100%", lg: "20%" }}>
          <Text my="1rem" fontWeight="bold">
            customer policies
          </Text>
          <Text>contact us</Text>
          <Text>FAQ</Text>
          <Text>T&C</Text>
          <Text>terms of use</Text>
          <Text>track orders</Text>
          <Text>shipping</Text>
          <Text>cancellation</Text>
          <Text>returns</Text>
          <Text>privacy policy</Text>
          <Text>grievance officer</Text>
        </Box>
        <Box width={{ base: "100%", lg: "33%" }}>
          <Text my="1rem" fontWeight="bold">
            experience myntra app on mobile
          </Text>
          <Flex gap="3" justify={{ base: "center", lg: "start" }}>
            <Image
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              width="8rem"
              height="2.5rem"
            />
            <Image
              src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
              width="7rem"
              height="2.5rem"
            />
          </Flex>
          <Box>
            <Text fontWeight="bold" my="1rem">
              keep in touch
            </Text>
            <Flex gap="2" justify={{ base: "center", lg: "start" }}>
              <AiFillFacebook fontSize={"1.5rem"} />
              <FaTwitter fontSize={"1.5rem"} />
              <BsYoutube fontSize={"1.5rem"} />
              <BsInstagram fontSize={"1.5rem"} />
            </Flex>
          </Box>
        </Box>
        <Box
          width={{ base: "90%", lg: "27%" }}
          margin={{ lg: "0rem" }}
          mx="auto"
        >
          <Flex
            my="1rem"
            align={"center"}
            justify={{ base: "center", lg: "start" }}
          >
            <Image
              src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
              height={"3rem"}
            />
            <Text paddingLeft={"10px"}>
              <Text pr="5px" as="span" fontWeight={"bold"}>
                100% original
              </Text>
              guarantee for all products at myntra
            </Text>
          </Flex>
          <Flex
            my="1rem"
            align={"center"}
            justify={{ base: "center", lg: "start" }}
          >
            <Image
              src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
              height={"3rem"}
            />
            <Text paddingLeft={"19px"}>
              <Text pr="5px" as="span" fontWeight={"bold"}>
                Return within 30 days
              </Text>
              of receiving your order
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Flex
        width={{ base: "100%", lg: "70%" }}
        margin={"auto"}
        align="center"
        mt="1.4rem"
      >
        <Text as="span" pr={"1rem"}>
          Popular searches{" "}
        </Text>
        <Text
          borderBottom={"1px solid grey"}
          width={{ base: "60%", lg: "80%" }}
        ></Text>
      </Flex>
      <Box
        width="70%"
        margin={"auto"}
        my="2rem"
        letterSpacing="1px"
        fontSize={"0.8rem"}
      >
        Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls
        | Blazers | For Men | Handbags | Ladies Watches | Bags | Sport | Shoes |
        Reebok | Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings |
        Fastrack | Watches | Kurtis | Nike | Smart Watches | Titan Watches |
        Designer Blouse | Gowns Rings | Cricket | Shoes | Forever 21 Eye Makeup
        | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick
        | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras |
        Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery
        |Designers Sarees
      </Box>
      <Flex
        width={{ base: "100%", lg: "70%" }}
        gap="2"
        margin={"auto"}
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <Text textAlign={"center"}>
          In case of any concern,{" "}
          <Text as="span" color={"purple.500"} fontWeight="700">
            Contact Us
          </Text>
        </Text>
        <Text textAlign={"center"}>
          © 2023 www.myntra.com. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
