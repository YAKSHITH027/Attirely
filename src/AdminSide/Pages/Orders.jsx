
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import OrdersTable from "../Components/OrdersTable";

const Orders = () => {
  return (
    <>
      <Box m={"1rem 2rem 2rem 18rem"}>
        <Heading fontWeight={"thiner"} as="h2" size="xl">
          Orders
        </Heading>
      </Box>
      <Box ml={"18rem"}>
        <OrdersTable />
      </Box>
    </>
  );
};

export default Orders;

