import { GetStaticPaths, GetStaticProps } from "next"
import { Button, Flex, Image, Text } from "@chakra-ui/react"

import { stripe } from "../../libs/stripe"

import { Breadcrumb } from "../../components/Breadcrumb"
import { Container } from "../../components/Container"

interface IProduct {
  name: string
  priceId: string
  description: string
  images: string[]
  event: string
  price: string
}

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  return (
    <Container py="1rem" maxW={1120}>
      <Breadcrumb productName={product.name} />

      <Flex
        flexDir={["column", "column", "row"]}
        gap={[0, 0, "2rem"]}
        align={["flex-start", "flex-start", "flex-end"]}
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

          <Button
            mt="2rem"
            bg="gray.800"
            color="gray.50"
            transition="0.2s"
            _hover={{ filter: "brightness(0.8)" }}
          >
            Buy
          </Button>
        </Flex>
      </Flex>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params

  const product = await stripe.products.retrieve(id as string)

  const productFormatted = {
    name: product.name,
    priceId: product.default_price,
    description: product.description,
    images: product.images,
    event: product.metadata.event,
    price: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(product.metadata.price)),
  }

  return {
    props: {
      product: productFormatted,
    },
  }
}
