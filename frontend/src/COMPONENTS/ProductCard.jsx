import React from 'react'
import { Box, Heading, Image , Text} from '@chakra-ui/react'

const ProductCard = ({product}) => {
  return (
    <Box
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    transition="all 0.3s"
    _hover={{ transform: "translatey(-5px)", shadow: "xl" }}
    >
        <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover"/>
        <Box p={4}>
            <Heading as={"h3"} size={"md"} mb={2}>
                {product.name}
            </Heading>
            <Text fontSize={"xl"} fontWeight={"bold"} color={textColor}>
                KSH{product.price}
            </Text>
        </Box>
    </Box>
  )
}

export default ProductCard