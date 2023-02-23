import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import React from "react";

// DUmmy DATA for mapping
const data = [
  {
    name: "Product A",
    brand: "Brand X",
    totalprice: "$100",
    email: "user@example.com",
    paymentstatus: "Paid",
    deliverystatus: "Delivered",
  },
  {
    name: "Product B",
    brand: "Brand Y",
    totalprice: "$200",
    email: "user@example.com",
    paymentstatus: "Pending",
    deliverystatus: "In Transit",
  },
  {
    name: "Product C",
    brand: "Brand Z",
    totalprice: "$150",
    email: "user@example.com",
    paymentstatus: "Paid",
    deliverystatus: "Delivered",
  },
];

const OrdersTable = () => {
  return (
    <Box maxWidth="100%" overflowX="auto">
      <Table variant="simple">
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
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.name}</Td>
              <Td>{item.brand}</Td>
              <Td>{item.totalprice}</Td>
              <Td>{item.email}</Td>
              <Td>{item.paymentstatus}</Td>
              <Td>{item.deliverystatus}</Td>
              <Td>
                <IconButton
                  colorScheme="blue"
                  size="sm"
                  aria-label="View details"
                  icon={<FaEye />}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default OrdersTable;
