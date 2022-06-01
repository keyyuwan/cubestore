import { Box, Button, Flex, Text, Icon, SimpleGrid } from "@chakra-ui/react"
import Head from "next/head"
import Router from "next/router"
import { FaCubes, FaLongArrowAltRight } from "react-icons/fa"
import { Container } from "../components/Container"
import { EVENTS } from "../utils/events"

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>cube.store</title>
      </Head>

      <Container mt="4rem" pb="2rem">
        <Flex
          flexDir={["column", "column", "row"]}
          align="center"
          justify="center"
          gap={[0, 0, "4rem", "10rem"]}
        >
          <Icon as={FaCubes} w={[120, 160, 240]} h={[120, 160, 240]} />

          <Box w={["100%", "100%", "400px"]} textAlign="center">
            <Text
              bgClip="text"
              bgGradient="linear-gradient(90deg, rgba(26,32,44,1) 0%, rgba(74,85,104,1) 100%)"
              fontWeight="bold"
              fontSize={["4xl", "4xl", "5xl"]}
            >
              cube.store,
            </Text>
            <Text fontWeight="medium" fontSize="xl" color="gray.600">
              {"your Rubik's cube store."}
            </Text>
            <Button
              mt={["1rem", "1rem", "2rem"]}
              w="100%"
              bg="gray.800"
              color="gray.50"
              size="lg"
              iconSpacing="2rem"
              transition="0.2s"
              _hover={{ background: "gray.800", filter: "brightness(0.85)" }}
              rightIcon={<FaLongArrowAltRight />}
              onClick={() => Router.push("/products")}
            >
              Explore
            </Button>
          </Box>
        </Flex>

        <Text mt="4rem" textAlign="center" fontWeight="bold" fontSize="xl">
          From 2x2 to Megaminx
        </Text>
        <SimpleGrid
          columns={[2, 2, 3]}
          spacing="1rem"
          alignItems="center"
          justifyContent="center"
        >
          {EVENTS.map((event) => {
            if (event.name === "All") {
              return null
            }

            return (
              <Box
                key={event.id}
                mt="2rem"
                textAlign="center"
                py="0.5rem"
                px="1rem"
                borderRadius={8}
                bg="gray.800"
                color="gray.50"
                w=""
              >
                <Box as="span" className={event.className} fontSize="2xl" />
                <Text fontWeight="medium">{event.name}</Text>
              </Box>
            )
          })}
        </SimpleGrid>
      </Container>
    </>
  )
}
