import Link from "next/link"
import { Heading } from "@chakra-ui/react"

export function Logo() {
  return (
    <Link href="/">
      <Heading as="h1" fontSize="xl" cursor="pointer">
        cube.store
      </Heading>
    </Link>
  )
}
