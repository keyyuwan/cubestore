import { Button, Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FaCheckCircle } from "react-icons/fa"
import { Container } from "../components/Container"

export default function Success() {
  const { query, push } = useRouter()

  return (
    <Container>
      <Flex h="80vh" flexDir="column" align="center" justify="center">
        <FaCheckCircle size={100} color="green" />
        <Text mt="2rem" textAlign="center" fontSize="xl">
          <strong>Congratulations!</strong> <br /> You just bought a{" "}
          {query.productName}
        </Text>
        <Button
          mt="1rem"
          bg="gray.800"
          color="gray.50"
          _hover={{ background: "gray.800" }}
          onClick={() => push("/products")}
        >
          Back to products page
        </Button>
      </Flex>
    </Container>
  )
}
