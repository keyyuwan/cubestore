import { Flex, Text, Image, Box } from "@chakra-ui/react"

import { IProduct } from "../../pages/products"
import { ProductButton } from "./ProductButton"

interface ProductCardProps {
  product: IProduct
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Flex
      bg="gray.50"
      p="1rem"
      borderRadius={16}
      flexDir="column"
      align="center"
    >
      <Box position="relative">
        <Image
          src={product.images[0]}
          alt={product.name}
          w={240}
          h={180}
          borderRadius={16}
        />
        <ProductButton name={product.name} id={product.id} />
      </Box>
      <Box w="100%" mt="1rem">
        <Text fontWeight="semibold">{product.name}</Text>

        <Flex align="center" justify="space-between">
          <Text fontWeight="thin" color="gray.500">
            {product.event}
          </Text>
          <Text fontWeight="bold">{product.price}</Text>
        </Flex>
      </Box>
    </Flex>
  )
}
