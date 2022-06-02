import { Box, Button, Flex, Text, SimpleGrid } from "@chakra-ui/react"
import Head from "next/head"
import Image from "next/image"
import Router from "next/router"
import { FaLongArrowAltRight } from "react-icons/fa"

import { Container as SectionContainer } from "../components/Container"
import { EVENTS } from "../utils/events"

import completeTaskImg from "../assets/Complete-task.svg"
import successfulPurchaseImg from "../assets/Successful-purchase.svg"

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>cube.store</title>
      </Head>

      <SectionContainer h="80vh" display="flex" justifyContent="center">
        <Flex
          flexDir={["column", "column", "row"]}
          align="center"
          justify="center"
          gap={[0, 0, "4rem", "8rem"]}
        >
          <Image
            src={completeTaskImg}
            alt="People choosing products"
            width="500px"
            height="500px"
          />

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
      </SectionContainer>

      <SectionContainer>
        <Text textAlign="center" fontWeight="bold" fontSize="xl">
          From 2x2 to Megaminx
        </Text>
        <SimpleGrid
          // columns={[2, 2, 3]}
          spacing="1rem"
          alignItems="center"
          justifyContent="center"
          minChildWidth="160px"
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
              >
                <Box as="span" className={event.className} fontSize="2xl" />
                <Text fontWeight="medium">{event.name}</Text>
              </Box>
            )
          })}
        </SimpleGrid>
      </SectionContainer>

      <SectionContainer mt="2rem" pb="2rem">
        <Flex
          flexDir={["column", "column", "row-reverse"]}
          align="center"
          justify="center"
          gap={[0, 0, "4rem"]}
        >
          <Image
            src={successfulPurchaseImg}
            alt="Successful purchase"
            width="500px"
            height="500px"
          />
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize={["xl", "2xl", "3xl"]}
            maxW="500px"
          >
            {`You're`} just 1 click away from your new cube!
          </Text>
        </Flex>
      </SectionContainer>
    </>
  )
}
