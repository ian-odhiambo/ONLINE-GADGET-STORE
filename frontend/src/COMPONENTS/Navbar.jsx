import { Container, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>        
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={{
                base: "column",
                sm: "row"
            }}
        >
            <Text
                fontSize={{base: "22", sm: "28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan.400, purple.500)"}
                bgClip={"text"}
            >
              <Link to={"/"}>Product Store  🛒</Link>               
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button></Button>
                </Link>
            </HStack>    
        </Flex>
    </Container>
  )
}

export default Navbar