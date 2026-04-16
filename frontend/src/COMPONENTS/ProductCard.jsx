import React from 'react'
import { Box } from '@chakra-ui/react'

const ProductCard = ({product}) => {
  return (
    <Box
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    transition="all 0.3s"
    _hover={{ transform: "translatey(-5px)", shadow: "xl" }}
    >
        <img src={product.image} alt={product.name} h={48} w="full" objectFit="cover"/>

    </Box>
  )
}

export default ProductCard