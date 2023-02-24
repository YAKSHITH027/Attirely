
import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import OrdersTable from "../Components/OrdersTable";

const Orders = () => {
  
  
  
  return (
    <>
     
        <Heading fontWeight={"thiner"} as="h2" size="xl" mb={"30px"}>
          Orders
        </Heading>
     
      <Box >
        <OrdersTable />
      </Box>
    </>
  );
};

export default Orders;

