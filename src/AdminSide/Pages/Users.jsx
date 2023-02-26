import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import UserCard from "../Components/UserCard";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../lib/firebase";

const Users = () => {
    const [totalUser, SetTotalUsers] = useState([])
  
    const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    console.log(users);
    SetTotalUsers(users)
  };
  getUsers()

  
  return (
    <>
      <Heading fontWeight={"thiner"} as="h2" size="xl">
        Customers
      </Heading>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {totalUser.map(()=>(
          <UserCard totalUser={totalUser} />
        ))}
        
      </Grid>
    </>
  );
};

export default Users;
