import React from 'react'
import { EditIcon, DeleteIcon } from "@chakra-ui/icons"  
import { Box, Image, Heading, Text, HStack, IconButton, useColorModeValue, } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { useProductStore } from '../store/product.js';

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
    const { deleteProduct } = useProductStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDeleteProduct = async (pid) => {
        const {success, message} = await deleteProduct(pid);
        if(!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        }
    }

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
                <IconButton icon={<DeleteIcon/>} onClick= {() => handleDeleteProduct(product._id)} colorScheme="red"/>
            </HStack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
            <ModalContent>
             <ModalHeaders>Update Product</ModalHeaders>
             <ModalCloseButton />
                <ModalBody>
                 <VStack spacing={4}>

                            <Input 
                            placeholder='Product Name' 
                            name= "name"
                            value={updatedProduct.name} 
                            onChange={(e) => setUpdateProduct({...newProduct, name: e.target.value})}             
                            />
                 
                            <Input 
                            placeholder='Price' 
                            name= "price"
                            type= "number"
                            value={updatedProduct.price} 
                            onChange={(e) => setUpdateProduct({...newProduct, price: e.target.value})}                    
                            />
                 
                            <Input 
                            placeholder='Image URL' 
                            name= "image"                   
                            value={updatedProduct.image} 
                            onChange={(e) => setUpdateProduct({...newProduct, image: e.target.value})}                   
                            />
                            <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
                             Add Product
                            </Button>
                    </VStack>   
                </ModalBody>
              </ModalContent>  
        </Modal>
    </Box>
  )
}

export default ProductCard