import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../lib/firebase";


export default function UserCard({email}) {
  


  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box
          h={"120px"}
          w={"full"}
          backgroundColor={"#B83280"}
          objectFit={"cover"}
        ></Box>
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              John Doe
            </Heading>
            {/* USER TYPE */}
            <Text color={"gray.500"}>User</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontSize={"lg"} color={"#63B3ED"} decoration={"underline"}>
                {email}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
