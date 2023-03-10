import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Text } from "@chakra-ui/react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const BarChart = () => {
  const [data, setData] = useState({
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(25, 90, 13, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://rc201-jsondata-serverapi.onrender.com/MensData";
      const labelSet = [];
      const dataSet1 = [];
      const dataSet2 = [];
      await fetch(url)
        .then((data) => {
          const res = data.json();
          return res;
        })
        .then((res) => {
          for (const val of res) {
            dataSet1.push(val.originalPrice);
            dataSet2.push(val.offerPrice);
          }
          setData({
            labels: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            datasets: [
              {
                label: "original Price",
                data: dataSet1,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(99, 132, 0.5)",
              },
              {
                label: "offer Price",
                data: dataSet2,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 235, 0.5)",
              },
            ],
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };

    fetchData();
  }, []);

  return (
    <Box border="1px solid gray" h={"350px"} shadow={"xl"} p={"5px"}>
      <Box m={"10px 10px"}>
        <Text fontSize="xl">Sales statistics</Text>
      </Box>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default BarChart;
