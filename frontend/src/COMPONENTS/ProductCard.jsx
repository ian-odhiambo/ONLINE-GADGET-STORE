import React from 'react'
import { Box, Image, Heading, Text, HStack, IconButton, useColorModeValue } from "@chakra-ui/react"

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

            <HStack spacing={2}>
                <IconButton icon={<EditIcon/>} onClick={onOpen} colorScheme="blue"/>
                <IconButton icon={<DeleteIcon/>} onClick={() => handleDelete(product._id)} 
                colorScheme="red"/>
            </HStack>
        </Box>
    </Box>
  )
}

export default ProductCard