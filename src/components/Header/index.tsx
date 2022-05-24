import {
  Flex,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

import { Logo } from "./Logo"
import { Drawer } from "../Drawer"

export function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex as="header" h="5rem" p={["1rem", "2rem"]} align="center">
      {!isWideVersion && (
        <>
          <IconButton
            aria-label="Open navigation"
            icon={<HamburgerIcon />}
            fontSize="lg"
            variant="unstyled"
            mr="1.5rem"
            onClick={onOpen}
          />
          <Drawer isOpen={isOpen} onClose={onClose} />
        </>
      )}

      <Logo />

      {/* TODO: add Avatar if user is authenticated */}
    </Flex>
  )
}
