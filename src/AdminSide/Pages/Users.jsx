import React from "react";
import { collection, getDocs } from "firebase/firestore";

import { useEffect } from "react";
import { useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { db } from "../../lib/firebase";

const User = () => {
  const [users, setUsers] = useState([]);
  const getCol = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const userArr = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      userArr.push(doc.data());
    });
    setUsers(userArr);
  };
  useEffect(() => {
    getCol();
  }, []);
  console.log(users);
  return (
    <Flex flexDir={"column"} padding="1rem" justify={"center"} align="center">
      <Heading
        bg={"rgb(58, 74, 99)"}
        color="white"
        px="1rem"
        py="0.4rem"
        mb="1rem"
        borderRadius={"xl"}
      >
        All Users
      </Heading>

      <Flex
        flexDir={"column"}
        borderWidth="2px"
        borderRadius={"1rem"}
        py="2rem"
        px="1rem"
        overflowY={"scroll"}
        height="80vh"
      >
        <Flex justifyContent={"space-around"} textTransform="capitalize">
          <Text fontSize={"1.4rem"} fontWeight="bold">
            user id
          </Text>
          <Text fontSize={"1.4rem"} fontWeight="bold" marginLeft={"2rem"}>
            userName
          </Text>
          <Text fontSize={"1.4rem"} fontWeight="bold">
            user email
          </Text>
          <Text fontSize={"1.4rem"} fontWeight="bold">
            Date of join
          </Text>
        </Flex>
        {users
          ?.sort((a, b) => b.date - a.date)
          .map((item, index) => {
            var date = item.date;
            var d = new Date(date);
            var ds = d.toLocaleString();
            return (
              <Flex
                // justify={"space-around"}
                key={item.uid}
                gap="3rem"
                borderRadius={"md"}
                padding={"0.4rem"}
                margin="0.2rem"
                borderWidth={"2px"}
              >
                <Text width="22rem">{item.uid}</Text>
                <Text width={"15rem"} textAlign="start">
                  {item.name || "Initial bug"}
                </Text>
                <Text minWidth={"15rem"}>{item.email}</Text>
                <Text minWidth={"15rem"}>{ds}</Text>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};

export default User;
