import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["red", "yellow", "blue"],
    },
  ],

  labels: ["Red", "Yellow", "Blue"],
};


const Chart = () => {
  return (
    <Box width={"25%"}>
      <Heading>Chart</Heading>
      <Doughnut data={data} />
    </Box>
  );
};

export default Chart;
