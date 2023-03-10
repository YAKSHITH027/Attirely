import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  Badge,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase";

const OrdersTable = () => {
  const [totalOrders, setTotalOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const orders = [];
      querySnapshot.forEach((doc) => {
        orders.push(doc.data());
      });

      setTotalOrders(orders);
    };
    getOrders();
  }, []);

  function getTotalOfferPriceForUser(userId) {
    return totalOrders
      .filter((order) => order.userId === userId)
      .reduce((total, order) => {
        return (
          total +
          order.cart.reduce((cartTotal, item) => {
            return item.offerPrice;
          }, 0)
        );
      }, 0);
  }

  const toggleStatus = async (orderId) => {
    console.log(orderId);
    const orderref = doc(db, "orders", orderId);
    let res = await updateDoc(orderref, { status: "delivered" });

    const querySnapshot = await getDocs(collection(db, "orders"));
    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push(doc.data());
    });

    setTotalOrders(orders);
  };

  return (
    <Box maxWidth="100%" overflowX="auto">
      <Table variant="simple">
        <Tbody textTransform={"capitalize"}>
          {totalOrders
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((item) => {
              return (
                <Box
                  key={item.timestamp}
                  borderWidth="2px"
                  p={{ base: "0", md: "1rem" }}
                  overflow={"auto"}
                >
                  <Badge fontSize={"1rem"}> orderId: {item.orderId}</Badge>
                  <Flex
                    gap="9"
                    justify={"space-between"}
                    py="1rem"
                    minW={"1000px"}
                  >
                    <Text width="50%">Name : {item.address.name}</Text>
                    <Text>City: {item.address.city}</Text>
                    <Button
                      textTransform={"capitalize"}
                      onClick={() => toggleStatus(item.orderId)}
                      colorScheme={
                        item.status == "pending" ? "yellow" : "green"
                      }
                      isDisabled={item.status == "pending" ? false : true}
                    >
                      {item.status}
                    </Button>
                  </Flex>
                  <Flex flexDir={"column"} gap="5">
                    {item.cart.map((item22, i) => {
                      var date = item.timestamp;
                      var d = new Date(date);
                      var ds = d.toLocaleString();
                      return (
                        <Flex
                          key={item22.id}
                          gap="15"
                          align={"center"}
                          borderWidth="1px"
                          px="1rem"
                          py="0.2rem"
                          minW={"1000px"}
                        >
                          <Box> item: {i + 1}</Box>
                          <Box>
                            <Image src={item22.images[0]} width="40px" />
                          </Box>
                          <Box width="10rem">
                            {item22.brand.substring(0, 15)}
                          </Box>
                          <Flex gap="4">
                            <Text>Price: ₹{item22.offerPrice}</Text>
                            <Text>Quantity: {item22.qtt}</Text>
                          </Flex>
                          <Box pl="7rem">ordered on : {ds}</Box>
                        </Flex>
                      );
                    })}
                  </Flex>
                </Box>
              );
            })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default OrdersTable;
