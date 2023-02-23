import { Box, Heading } from '@chakra-ui/react';
import React from 'react'
import UserCard from '../Components/UserCard'

const Users = () => {
  return (
    <>
    <Box ml={"18rem"}>
        <Heading fontWeight={"thiner"}  as='h2' size='xl'>Customers</Heading>
    </Box>
     <Box ml={"18rem"} display={"flex"}   border={"1px solid red"} w={"80%"} >
        
        
        <UserCard />
    </Box>
    </>
   
  )
}

export default Users;