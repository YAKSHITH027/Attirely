import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Components/Home/Navbar";
import SimpleSlider from "../../Components/Home/FullScreenSlider";
import ProductSlider from "../../Components/Home/ProductSlider";
import {
  categoriesToBagList1,
  categoriesToBagList2,
  categoriesToBagList3,
  dealsOnTopBrandsList1,
  dealsOnTopBrandsList2,
  dealsOnTopBrandsList3,
  imageList1,
  imageList2,
  imageList3,
  styleCastHottestList,
  topPicksList,
} from "../../../Utils/ProductImages";
import "./Home.css";
import ListHeading from "../../Components/Home/ListHeading";
import Footer from "../../Components/Home/Footer";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <SimpleSlider />
      <Box>
        <ListHeading text=" Deal of the Day" />
        <ProductSlider
          imageData={imageList1}
          width={{ base: "160", md: "190px" }}
          height={{ base: "250px", md: "285px" }}
          gap="0"
        />
      </Box>
      <Box mt={"3rem"}>
        <ListHeading text="Best of Myntra exclusive brands" />
        <ProductSlider
          imageData={imageList2}
          width="184px"
          height={"242px"}
          gap="2"
        />
        <ProductSlider
          imageData={imageList3}
          width="184px"
          height={"242px"}
          gap="2"
        />
      </Box>
      <Box mt="3rem">
        <ListHeading text=" top picks" />
        <ProductSlider
          imageData={topPicksList}
          width="217px"
          height={{ base: "265px", lg: "265px" }}
          gap="2"
        />
      </Box>
      <Box mt={"3rem"}>
        <ListHeading text="categories to bag" />
        <ProductSlider
          imageData={categoriesToBagList1}
          width="189.9px"
          height={"235px"}
          gap="0"
        />
        <ProductSlider
          imageData={categoriesToBagList2}
          width="189.9px"
          height={"235px"}
          gap="0"
        />
        <ProductSlider
          imageData={categoriesToBagList3}
          width="189.9px"
          height={"235px"}
          gap="0"
        />
      </Box>
      <Box mt={"3rem"}>
        <ListHeading text="Deals on top brands" />
        <ProductSlider
          imageData={dealsOnTopBrandsList1}
          width="189.9px"
          height={"308px"}
          gap="0"
        />
        <ProductSlider
          imageData={dealsOnTopBrandsList2}
          width="189.9px"
          height={"308px"}
          gap="0"
        />
        <ProductSlider
          imageData={dealsOnTopBrandsList3}
          width="189.9px"
          height={"308px"}
          gap="0"
        />
      </Box>
      <Box mt="3rem" mb={"4rem"}>
        <ListHeading text="stylecast hottest finds" />
        <ProductSlider
          imageData={styleCastHottestList}
          width="217px"
          height={{ base: "284px", lg: "284px" }}
          gap="2"
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
