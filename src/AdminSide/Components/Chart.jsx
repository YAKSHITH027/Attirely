import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);




const Chart = () => {

  const [menData, setMenData] = useState(0)
  const [kidData , setKidData] = useState(0)
  const [ womenData, setWomenData] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menRes = await axios.get(
          "https://rc201-jsondata-serverapi.onrender.com/MensData"
        );
        const womenRes = await axios.get(
          "https://rc201-jsondata-serverapi.onrender.com/WomensData"
        );
        const childrenRes = await axios.get(
          "https://rc201-jsondata-serverapi.onrender.com/ChildrensData"
        );

        const menProducts = menRes.data.length;
        const womenProducts = womenRes.data.length;
        const childrenProducts = childrenRes.data.length;
        setMenData(menProducts)
        setWomenData(womenProducts)
        setKidData(childrenProducts)
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const data = {
    datasets: [
      {
        data: [menData, kidData, womenData],
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Mens", "Kids", "Women"],
  };



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
