import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import React, { Component } from "react";
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
        height="280px"
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
          <Box width={"210px"} height="280px">
            <Image src={this.props.images[0]} />
          </Box>
        </Slider>
      </Box>
    );
  }
}
