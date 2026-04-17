import { Container, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useProductStore } from "../store/product.js";
import ProductCard from "../COMPONENTS/ProductCard.jsx";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);
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

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight={"bold"}
            color="gray.500"
          >
            No Products Found 😢{""}https://images.unsplash.com/photo-1659083725992-9d88c12e719c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb20lMjBtaWN8ZW58MHx8MHx8fDA%3D
            <Link to="/create">
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create A Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
