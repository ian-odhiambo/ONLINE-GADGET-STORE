import React from 'react'
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"  
import { Box, Image, Heading, Text, HStack, IconButton, useColorModeValue, } from "@chakra-ui/react"

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
  return (
    <Box
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    transition="all 0.3s"
    _hover={{ transform: "translatey(-5px)", shadow: "xl" }}
    bg={bg}
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
                <IconButton icon={<EditIcon/>}  colorScheme="blue"/>
                <IconButton icon={<DeleteIcon/>} colorScheme="red"/>
            </HStack>
        </Box>
    </Box>
  )
}

export default ProductCard