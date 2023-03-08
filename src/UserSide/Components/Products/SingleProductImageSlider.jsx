import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { Component } from "react";
import { BiStar } from "react-icons/bi";
import Slider from "react-slick";

export default class SingleProductImageSlider extends Component {
  slide = false;

  // onMove = () => {
  //   this.slide = true;
  //   console.log(this.slide);
  //   this.forceUpdate();
  // };
  // onLeave = () => {
  //   this.slide = false;
  //   console.log(this.slide);
  //   this.forceUpdate();
  // };
  render() {
    return (
      <Box
        height={{ base: "200px", md: "280px" }}
        onMouseEnter={this.onMove}
        onMouseLeave={this.onLeave}
      >
        <Slider
          {...{
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 1500,
            autoplay: this.slide,
          }}
        >
          <Box
            width={{ base: "150px", md: "210px" }}
            height={{ base: "200px", md: "280px" }}
            pos="relative"
          >
            <Image src={this.props.images[0]} />
            <Box
              pos={"absolute"}
              bottom={{ base: "1rem", md: "0.81rem" }}
              left="1rem"
              bg="whiteAlpha.900"
              borderRadius={"md"}
              fontWeight="bold"
            >
              <Flex
                borderWidth={"2px"}
                p="2px"
                px="4px"
                borderRadius="md"
                fontSize={"0.7rem"}
              >
                <Flex align={"center"} borderRightWidth="2px" pr={"4px"}>
                  {this.props.rating || 3.2}
                  <Image
                    src="https://icones.pro/wp-content/uploads/2021/02/icone-etoile-verte.png"
                    width="0.9rem"
                    pb="0.1rem"
                    pl="0.1rem"
                  />{" "}
                </Flex>
                <Text pl={"4px"}>{this.props.ratingCount || 45} </Text>
              </Flex>
            </Box>
          </Box>
        </Slider>
      </Box>
    );
  }
}
