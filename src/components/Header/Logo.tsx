import Link from "next/link"
import { Flex, Heading } from "@chakra-ui/react"
import { FaCubes } from "react-icons/fa"

interface LogoProps {
  isHeaderDarker: boolean
}

export function Logo({ isHeaderDarker }: LogoProps) {
  return (
    <Link href="/">
      <Flex align="center" gap="1rem" cursor="pointer">
        <FaCubes size={32} color={isHeaderDarker ? "#f0f2f5" : undefined} />
        <Heading
          as="h1"
          fontSize={["2xl", "2xl", "3xl"]}
          color={isHeaderDarker && "#f0f2f5"}
        >
          cube.store
        </Heading>
      </Flex>
    </Link>
  )
}
