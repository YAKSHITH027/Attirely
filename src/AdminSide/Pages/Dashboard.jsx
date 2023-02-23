import React from "react";
import Sidebar from "../Components/Sidebar";
import BasicStatistics from "../Components/BasicStatistics";
import Chart from "../Components/Chart";

import Users from "./Users";

import Orders from "./Orders";
import { Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>

      <Sidebar />
      <Box ml={"3rem"}>
        {" "}
        <BasicStatistics />{" "}
      </Box>

      <Box ml={"18rem"}>
        {" "}
        <Chart />{" "}
      </Box>

      <Users />
      <Orders />

    
   

    </>
  );
};

export default Dashboard;
