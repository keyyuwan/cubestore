import Link from "next/link"
import { Flex, Heading } from "@chakra-ui/react"
import { FaCubes } from "react-icons/fa"

export function Logo() {
  return (
    <Link href="/">
      <Flex align="center" gap="1rem" cursor="pointer">
        <FaCubes size={32} />
        <Heading as="h1" fontSize={["2xl", "3xl"]}>
          cube.store
        </Heading>
      </Flex>
    </Link>
  )
}
