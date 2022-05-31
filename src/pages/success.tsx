import { Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Head from "next/head"
import { FaCheckCircle } from "react-icons/fa"
import { Container } from "../components/Container"
import { BackToProductsPageButton } from "../components/BackToProductsPageButton"

export default function Success() {
  const { query, push } = useRouter()

  return (
    <>
      <Head>
        <title>Success | cube.store</title>
      </Head>
      <Container>
        <Flex h="80vh" flexDir="column" align="center" justify="center">
          <FaCheckCircle size={100} color="green" />
          <Text mt="2rem" textAlign="center" fontSize="xl">
            <strong>Congratulations!</strong> <br /> You just bought a{" "}
            {query.productName}
          </Text>
          <BackToProductsPageButton mt="2rem" />
        </Flex>
      </Container>
    </>
  )
}
