import React, { useState, useEffect } from "react";
// import axios from "axios";
import {
  Grid,
  GridItem,
  Select,
  Box,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";
import SingleAdminProd from "./SingleAdminProd";
import axios from "axios";
import EditProductModal from "../Components/EditProductModal";

const ProductsAdmin = () => {
  const [option, setOption] = useState("MensData");
  const [ProdData, setProdData] = useState([]);
  // const [postsPerPage, setPostPerPage] = useState(15);
  // const [currPage, setCurrPage]= useState(1);
  const [lamb, setLamb] = useState("MensData");

  // const indexOfLastPost = currPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currProdData= ProdData.slice(indexOfFirstPost, indexOfLastPost);

  const getAdminProductsData = async () => {
    try {
      let res = await axios.get(
        `https://rc201-jsondata-serverapi.onrender.com/${option}`
      );
      console.log(res);
      // console.log(res.data, "data fetched");
      setProdData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdminProductsData();
  }, [option]);

  const deleteProd = async (id, category) => {
    if (category === "Mens") {
      setLamb("MensData");
    }

    if (category === "Womens") {
      setLamb("WomensData");
    }

    if (category === "Child") {
      setLamb("ChildrensData");
    }
    console.log(id, lamb);
    try {
      let url = `https://rc201-jsondata-serverapi.onrender.com/${lamb}/${id}`;
      await axios.delete(
        `https://rc201-jsondata-serverapi.onrender.com/${lamb}/${id}`
      );
      console.log(url);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(ProdData,"proddata");
  return (
    <>
      <Box border="1px" borderColor="black">
        <Select
          value={option}
          placeholder="Select option"
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="MensData">Mens Products</option>
          <option value="WomensData ">Womens Products</option>
          <option value="ChildrensData ">Childrens Products</option>
          <option value="orders ">Orders</option>
        </Select>
      </Box>

      <br />

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {ProdData.map((item) => {
          return (
            <GridItem key={item.id}>
              <SingleAdminProd props={item} />
              <Flex marginLeft={"37px"} gap={"10px"} marginTop={"-35px"}>
                <EditProductModal item={item} lamb={lamb} />
                <Button
                  onClick={() => deleteProd(item.id, item.category)}
                  backgroundColor={"red"}
                  color={"white"}
                >
                  Delete
                </Button>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductsAdmin;
