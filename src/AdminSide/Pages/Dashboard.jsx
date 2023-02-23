import React from "react";
import Sidebar from "../Components/Sidebar";
import BasicStatistics from "../Components/BasicStatistics";
import { Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
    <Box minH="100vh" bg={'gray.100'}>
     <Sidebar /> 
     <Box marginTop={'-180px'} fontFamily={'sans-serif'}>
      {/* <BasicStatistics />  */}
     </Box>
      
    
    </Box>
    
   
    </>
      
     
    
     
      
   
  );
};

export default Dashboard;
