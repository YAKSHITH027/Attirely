import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [65, 47, 30],
      backgroundColor: ["green", "pink", "yellow"],
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Mens", "Womens", "Kids"],
};

const Chart = () => {
  return (
    <>
      <Box border="1px solid gray" shadow={"xl"} p={3}>
        <Box m={"10px 10px"}>
          <Text fontSize="xl">Products statistics</Text>
        </Box>
        <Box p={"15px"} textAlign={"center"} alignContent={"center"} w={"50%"}>
          <Doughnut data={data} />
        </Box>
      </Box>
    </>
  );
};

export default Chart;
