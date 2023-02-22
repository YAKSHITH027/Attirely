import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const MegaMenu = () => {
  return (
    <Flex
      height={"100%"}
      align="center"
      display={{ base: "none", lg: "Flex" }}
      width="36%"
      justify={"space-around"}
      pos="relative"
    >
      <Flex
        height="100%"
        align={"center"}
        width="15%"
        justify={"center"}
        className="dropDown"
      >
        Mens
        <Box
          top="5rem"
          className="child"
          left="-2rem"
          pos={"absolute"}
          width="80vw"
          transition={"all 0.3s"}
          height={"0vh"}
          overflow="hidden"
          bg="gray.400"
        >
          <li>dfs</li>
          <li>dfa</li>
          <li>dfsa</li>
          <li>dfsa</li>
          <li>dsaf</li>
        </Box>
      </Flex>
      <Flex
        height="100%"
        align={"center"}
        width="15%"
        className="dropDown"
        justify={"center"}
      >
        Womens
        <Box
          top="5rem"
          className="child"
          left="-2rem"
          pos={"absolute"}
          width="80vw"
          transition={"all 0.4s"}
          height={"0vh"}
          bg="gray.400"
          overflow={"hidden"}
        >
          <li>ehlloe</li>
          <li>dasdffaa</li>
          <li>dfsdafafsa</li>
          <li>dfghtghdfsa</li>
          <li>hgfdhdsaf</li>
        </Box>
      </Flex>
      <Flex
        height="100%"
        align={"center"}
        width="15%"
        justify={"center"}
        className="dropDown"
      >
        Kids
      </Flex>
      <Flex
        className="dropDown"
        height="100%"
        align={"center"}
        width="15%"
        justify={"center"}
      >
        Kids
      </Flex>
      <Flex
        className="dropDown"
        height="100%"
        align={"center"}
        width="15%"
        justify={"center"}
      >
        Mens
      </Flex>
      <Flex
        className="dropDown"
        height="100%"
        align={"center"}
        width="15%"
        justify={"center"}
      >
        Studio
      </Flex>
    </Flex>
  );
};

export default MegaMenu;
