import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { collection, getDocs, query, where } from "@firebase/firestore";

import React, { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import Navbar from "../../Components/Home/Navbar";

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const orderAPI = async (id = "userIddfsfdsjfdsjf") => {
    try {
      console.log(id);
      const orderRef = collection(db, "orders");
      const q = query(orderRef, where("userId", "==", id));
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      });
      console.log(result);
      setOrders(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    orderAPI();
  }, []);

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
          {/* <Flex flexDir={"column"} py="1rem" gap="3">
            <Skeleton height="4rem"></Skeleton>
            <Skeleton height="4rem"></Skeleton>
            <Skeleton height="4rem"></Skeleton>
            <Skeleton height="4rem"></Skeleton>
          </Flex> */}
          <Flex flexDir={"column"} gap="7">
            {orders.map((item) => {
              return (
                <Box key={item.timestamp} borderWidth="2px">
                  <Flex gap="9">
                    <Text>{item.userId}</Text>
                    <Text>{item.address.name}</Text>
                    <Text>{item.address.pin}</Text>
                    <Text>{item.status}</Text>
                  </Flex>
                  <Flex flexDir={"column"} gap="5">
                    {item.cart.map((item, i) => {
                      return (
                        <Flex key={item.id} gap="9">
                          <Box> item: {i + 1}</Box>
                          <Box>{item.brand}</Box>
                          <Box>{item.offerPrice}</Box>
                        </Flex>
                      );
                    })}
                  </Flex>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Profile;
