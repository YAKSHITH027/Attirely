import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Home/Navbar";
import SinglegridProduct from "../../Components/Products/SinglegridProduct";
import Filters from "../../Components/Products/Filters";
import "./Products.css";
import { useSearchParams } from "react-router-dom";
const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  const [brand, setBrand] = useState(searchParams.getAll("brand") || []);
  const [discountRange, setDiscountRange] = useState(
    searchParams.get("discountRange") || null
  );
  useEffect(() => {
    let params = {};
    if (category.length) params.category = category;
    if (brand.length) params.brand = brand;
    if (discountRange) params.discountRange = discountRange;
    setSearchParams(params);
  }, [brand, category, discountRange]);

  const prod = [
    {
      id: "M4",
      category: "Mens",
      subCategory: "Chino",
      brand: "Roadster",
      title: "Men Time Travlr Slim Fit Chinos",
      offerPrice: "859",
      originalPrice: "1999",
      discount: "57%",
      quantity: 40,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
      ],
      size: ["28", "30", "32", "34", "36", "38", "40"],
      rating: "4.2",
      ratingCount: "5.8k",
    },
    {
      id: "M5",
      category: "Mens",
      subCategory: "Chino",
      brand: "HIGHLANDER",
      title: "Men Tapered Fit Chinos",
      offerPrice: "743",
      originalPrice: "1549",
      discount: "52%",
      quantity: 24,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
      ],
      size: ["30", "32", "34", "36"],
      rating: "4.1",
      ratingCount: "12.7k",
    },
    {
      id: "M6",
      category: "Mens",
      subCategory: "Jeans",
      brand: "Roadster",
      title: "Men Slim Fit Jeans",
      offerPrice: "719",
      originalPrice: "1499",
      discount: "52%",
      quantity: 32,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
      ],
      size: ["28", "30", "32", "34", "36", "38", "40"],
      rating: "3.8",
      ratingCount: "6.6k",
    },
    {
      id: "M7",
      category: "Mens",
      subCategory: "Jeans",
      brand: "HIGHLANDER",
      title: "Men Slim Fit Jeans",
      offerPrice: "558",
      originalPrice: "1299",
      discount: "57%",
      quantity: 40,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
      ],
      size: ["30", "32", "34", "36", "38"],
      rating: "3.8",
      ratingCount: "9k",
    },
    {
      id: "M8",
      category: "Mens",
      subCategory: "Shirt",
      brand: "LOCOMOTIVE",
      title: "Men Slim Fit Casual Shirt",
      offerPrice: "577",
      originalPrice: "1649",
      discount: "65%",
      quantity: 37,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
      ],
      size: ["39", "40", "42", "44"],
      rating: "4.1",
      ratingCount: "5.7k",
    },
    {
      id: "M9",
      category: "Mens",
      subCategory: "Shirt",
      brand: "Dennis Lingo",
      title: "Men Slim Fit Casual Shirt",
      offerPrice: "628",
      originalPrice: "1849",
      discount: "66%",
      quantity: 44,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
      ],
      size: ["38", "40", "42", "44", "46"],
      rating: "4.1",
      ratingCount: "13.1k",
    },
    {
      id: "M10",
      category: "Mens",
      subCategory: "Shirt",
      brand: "Roadster",
      title: "Men Pure Cotton Casual Shirt",
      offerPrice: "494",
      originalPrice: "1499",
      discount: "67%",
      quantity: 14,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
      ],
      size: ["38", "40", "42", "44", "46", "48"],
      rating: "4.3",
      ratingCount: "34.3k",
    },
    {
      id: "M11",
      category: "Mens",
      subCategory: "Joggers",
      brand: "United Colors of Benetton",
      title: "Men Printed  Joggers",
      offerPrice: "824",
      originalPrice: "1649",
      discount: "50%",
      quantity: 38,
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
      ],
      size: ["S", "M", "L", "XL"],
      rating: "4.7",
      ratingCount: "55",
    },
  ];
  return (
    <div>
      <Navbar />
      <Box borderBottomWidth={"1px"}>
        <Box p={"0.5rem"}>home/mens</Box>
        <Box p="0.5rem">Mens t-shirts -17865</Box>
        <Flex p="0.5rem" justify={"space-between"}>
          <Box>Filters</Box>

          <Box>selet</Box>
        </Flex>
      </Box>
      <Flex justify="center">
        <Box width="300px" minH={"80vh"} borderRightWidth="1px">
          <Filters
            brand={brand}
            setBrand={setBrand}
            category={category}
            setCategory={setCategory}
            discountRange={discountRange}
            setDiscountRange={setDiscountRange}
          />
        </Box>
        <Box width="full" minH={"80vh"}>
          <Grid
            templateColumns={"repeat(5,1fr)"}
            p="1.5rem"
            rowGap={"2rem"}
            placeItems={"center"}
          >
            {prod.map((item) => {
              return <SinglegridProduct key={item.id} {...item} />;
            })}
          </Grid>
        </Box>
      </Flex>
    </div>
  );
};

export default Products;
