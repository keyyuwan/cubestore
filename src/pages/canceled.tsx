import { Flex, Text } from "@chakra-ui/react"
import { FaSadTear } from "react-icons/fa"
import { Container } from "../components/Container"
import { BackToProductsPageButton } from "../components/BackToProductsPageButton"

export default function Canceled() {
  return (
    <Container>
      <Flex h="80vh" flexDir="column" align="center" justify="center">
        <FaSadTear size={100} />
        <Text mt="2rem" textAlign="center" fontSize="xl">
          <strong>Sorry,</strong> <br /> an error occurred while purchasing your
          product
        </Text>
        <BackToProductsPageButton mt="2rem" />
      </Flex>
    </Container>
  )
}
