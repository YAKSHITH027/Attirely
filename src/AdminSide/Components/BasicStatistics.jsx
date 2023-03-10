import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";

import { collection, getCountFromServer, getDocs } from "firebase/firestore";

import { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";
import { TfiShoppingCartFull } from "react-icons/tfi";

import { db } from "../../lib/firebase";

function StatsCard(props) {
  const { title, stat, icon } = props;

  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.500", "gray.500")}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  const [totalProducts, setTotalProducts] = useState(0);

  const [tUser, SetTUser] = useState(0);
  const [tOrders, setTOrders] = useState(0);

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

        setTotalProducts(menProducts + womenProducts + childrenProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getOrders = async () => {
      const coll = collection(db, "orders");
      const snapshot = await getCountFromServer(coll);
      const ordersCount = snapshot.data().count;

      setTOrders(ordersCount);
    };

    const getUsers = async () => {
      const coll = collection(db, "users");
      const snapshot = await getCountFromServer(coll);
      const usersCount = snapshot.data().count;

      SetTUser(usersCount);
    };
    getUsers();

    getOrders();
  }, []);

  return (
    <>
      <Box
        fontFamily={
          "Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
        }
        maxW="7xl"
        mx={"auto"}
        pt={5}
        px={{ base: 2, sm: 12, md: 17 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            title={"All Users"}
            stat={tUser} //MAPED USER NUMBER
            icon={<BsPerson size={"3em"} />}
          />
          <StatsCard
            title={"Total Orders"}
            stat={tOrders}
            icon={<HiShoppingBag size={"3em"} />}
          />
          <StatsCard
            title={"Total Products"}
            stat={totalProducts} //MAPED TOTAL INVENTORY PRODUCTS NUMBER
            icon={<TfiShoppingCartFull size={"3em"} />}
          />
        </SimpleGrid>
      </Box>
    </>
  );
}
