import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { AiOutlinePlusSquare } from "react-icons/ai";
import { IoMoon } from "react-icons/io5";
import {LuSun} from "react-icons/lu";

const Navbar = () => {
  const{ colorMode,toggleColorMode } = useColorMode();
  

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, purple.500)"}
          bgClip={"text"}
         
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <AiOutlinePlusSquare fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon/> : <LuSun/>}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;