import { Flex, Image, Text, useDisclosure } from "@chakra-ui/react"
import { IProduct } from "../../pages/products/[id]"
import { AuthModal } from "../AuthModal"
import { PurchaseButton } from "./PurchaseButton"

interface ProductPageProps {
  product: IProduct
}

export function ProductPage({ product }: ProductPageProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      flexDir={["column", "column", "row"]}
      gap={[0, 0, "2rem"]}
      align={["flex-start", "flex-start", "center"]}
      mt="2rem"
    >
      <Image
        src={product.images[0]}
        alt={product.name}
        w={["100%", "100%", "100%", 600]}
        h={[300, 300, 360, 380]}
        borderRadius={16}
      />

      <Flex flexDir="column" mt="1rem" maxW={400}>
        <Text fontWeight="bold" fontSize={["xl", "2xl"]}>
          {product.name}
        </Text>
        <Text color="gray.500" fontSize="lg">
          {product.event}
        </Text>
        <Text fontWeight="bold" fontSize="lg" mt="0.5rem">
          {product.price}
        </Text>

        <Text
          fontWeight="bold"
          fontSize="lg"
          mt="2rem"
          textDecoration="underline"
        >
          Description:
        </Text>
        <Text mt="0.5rem" color="gray.700">
          {product.description}
        </Text>

        <PurchaseButton
          productName={product.name}
          productPriceId={product.priceId}
          onOpenAuthModal={onOpen}
        />

        <AuthModal isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Flex>
  )
}
