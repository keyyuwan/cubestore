import { Flex, Text, Image, Box, IconButton } from "@chakra-ui/react"
import { FaShoppingBag } from "react-icons/fa"

interface ProductProps {
  product: {
    images: string[]
    name: string
    event: string
    price: string
  }
}

export function Product({ product }: ProductProps) {
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
        <IconButton
          aria-label={`Go to ${product.name} page`}
          icon={<FaShoppingBag />}
          variant="unstyled"
          color="white"
          bg="gray.700"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="50%"
          position="absolute"
          bottom={-3}
          right={2}
          transition="0.2s"
          _hover={{ filter: "brightness(0.85)" }}
        />
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
