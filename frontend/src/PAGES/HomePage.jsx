import { Container, VStack , Text} from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
        fontSize={"30"}
        fontWeight={"bold"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        textAlign={"center"}
        >
          Current Products 🚀
        </Text>

        <Text 
        fontSize="xl" 
        textAlign={"center"} 
        fontWeight={"bold"} 
        color="gray.500"
        >
          No Products Found 😢{""}
          <Link to="/create">
            <Text as="span" color="blue.500" _hover= {{textDecoration: "underline"}}>
              Create A Product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage