import { Table, Thead, Tbody, Tr, Th, Td, Box, Button } from "@chakra-ui/react";
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
      console.log(orders);
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
    console.log(res);
    const querySnapshot = await getDocs(collection(db, "orders"));
    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push(doc.data());
    });
    console.log(orders);
    setTotalOrders(orders);
  };

  return (
    <Box maxWidth="100%" overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>User ID</Th>
            <Th>Address</Th>
            <Th>Status</Th>
            <Th>Cart</Th>
            <Th>Total Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {totalOrders
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((order) => (
              <Tr key={order.id}>
                <Td>{order.userId}</Td>
                <Td>
                  {order.address.name}, {order.address.pin}
                </Td>
                <Td>
                  {" "}
                  <Button onClick={() => toggleStatus(order.orderId)}>
                    {order.status}
                  </Button>
                </Td>
                <Td>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Number of items</Th>
                        <Th>Brand</Th>
                        <Th>Offer price</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {order.cart.map((item, i) => (
                        <Tr key={item.id}>
                          <Td>{i + 1}</Td>
                          <Td>{item.brand}</Td>
                          <Td>{item.offerPrice}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Td>
                <Td>{getTotalOfferPriceForUser(order.userId)}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default OrdersTable;
