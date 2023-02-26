import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Box,
  Button,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import React, { useState } from "react";

// DUmmy DATA for mapping
const data = [
  {
    id: 1,
    name: "Product A",
    brand: "Brand X",
    totalprice: "$100",
    email: "user@example.com",
    paymentstatus: "Paid",
    deliverystatus: "Delivered",
  },
  {
    id: 2,
    name: "Product B",
    brand: "Brand Y",
    totalprice: "$200",
    email: "user@example.com",
    paymentstatus: "Pending",
    deliverystatus: "In Transit",
  },
  {
    id: 3,
    name: "Product C",
    brand: "Brand Z",
    totalprice: "$150",
    email: "user@example.com",
    paymentstatus: "Paid",
    deliverystatus: "Delivered",
  },
];

const OrdersTable = () => {
  const [deliveryStatus, setDeliveryStatus] = useState(
    data.map((el) => el.deliverystatus)
  );
  const [paymentStatus, setPaymentStatus] = useState(
    data.map((el) => el.paymentstatus)
  );

  const toggleDeliveryStatus = (index) => {
    const newDeliveryStatus = [...deliveryStatus];
    newDeliveryStatus[index] =
      newDeliveryStatus[index] === "Delivered" ? "In Transit" : "Delivered";
    setDeliveryStatus(newDeliveryStatus);
  };

  const togglePaymentStatus = (index) => {
    const newPaymentStatus = [...paymentStatus];
    newPaymentStatus[index] =
      newPaymentStatus[index] === "Paid" ? "Unpaid" : "Paid";
    setPaymentStatus(newPaymentStatus);
  };

  const saveDeliveryStatus = async (index) => {
    try {
      const updatedOrder = {
        deliverystatus: deliveryStatus[index],
        paymentstatus: paymentStatus[index],
      };
      const response = await fetch(
        `https://rc201-jsondata-serverapi.onrender.com/orders/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedOrder),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update order status");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box maxWidth="100%" overflowX="auto">
      <Table variant="simple" textAlign={"center"}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Brand</Th>
            <Th>Total Price</Th>
            <Th>Email</Th>
            <Th>Payment Status</Th>
            <Th>Delivery Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((el, index) => (
            <Tr key={index}>
              <Td>{el.name}</Td>
              <Td>{el.brand}</Td>
              <Td>{el.totalprice}</Td>
              <Td>{el.email}</Td>
              <Td>
                <Button
                  colorScheme={
                    paymentStatus[index] === "Paid" ? "green" : "red"
                  }
                  size="sm"
                  onClick={() => togglePaymentStatus(index)}
                >
                  {paymentStatus[index]}
                </Button>
              </Td>
              <Td>
                <Button
                  colorScheme={
                    deliveryStatus[index] === "Delivered" ? "green" : "orange"
                  }
                  size="sm"
                  onClick={() => toggleDeliveryStatus(index)}
                >
                  {deliveryStatus[index]}
                </Button>
              </Td>
              <Td>
                <Button
                  colorScheme="blue"
                  size="sm"
                  onClick={() => saveDeliveryStatus(el.orderID)}
                >
                  Save
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default OrdersTable;
