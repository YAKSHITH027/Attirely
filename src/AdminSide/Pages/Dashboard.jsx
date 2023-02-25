import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import BarChart from "../Components/BarChart";
import BasicStatistics from "../Components/BasicStatistics";
import Chart from "../Components/Chart";

const Dashboard = () => {
  return (
    <>

      <Heading fontWeight={"thiner"} as="h2" size="xl">
        Dashboard
      </Heading>
      <BasicStatistics />
      <Box
        m={"30px 30px"}
        display={"flex"}
        justifyContent={"space-around"}
        gap={"15px"}
        
      >
        <Box w={"50%"}>
          <BarChart />
        </Box>
        <Box w={"50%"}>
          <Chart />
        </Box>
      </Box>

   

</>
      
  );
};

export default Dashboard;
