import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["red", "blue", "yellow"],
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Red", "Yellow", "Blue"],
};

const Chart = () => {
  // const [pdata, setPdata] = useState({});
  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const [key1Data, key2Data, key3Data] = await Promise.all([
  //           fetch('https://rc201-jsondata-serverapi.onrender.com/MensData').then(res => res.json()),
  //           fetch('https://rc201-jsondata-serverapi.onrender.com/WomensData').then(res => res.json()),
  //           fetch('https://rc201-jsondata-serverapi.onrender.com/ChildrensData').then(res => res.json())
  //         ]);
  //         setPdata({ key1Data, key2Data, key3Data });

  //       } catch (err) {
  //         console.log(err);

  //       }
  //     }
  //     fetchData();
  //   }, []);
  //   console.log(pdata)

  return (
    <>
      <Box border="1px solid white" shadow={'xl'}>
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
