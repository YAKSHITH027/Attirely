import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

// const IMAGE =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function SingleAdminProd({ props }) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={1}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          textAlign={"center"}
          rounded={"lg"}
          // mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,

            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Center>
            <Image
              rounded={"lg"}
              height={"250px"}
              width={"210px"}
              // objectFit={'cover'}
              src={props.images[0]}
            />
          </Center>
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {props.brand}
          </Text>
          <Heading fontSize={"l"} fontFamily={"body"} fontWeight={500}>
            {props.title.substring(0, 15)}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ₹{props.offerPrice}/-
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              ₹{props.originalPrice}/-
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
