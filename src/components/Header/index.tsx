import { useEffect, useState } from "react"
import {
  Flex,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

import { Logo } from "./Logo"
import { Drawer } from "../Drawer"
import { User } from "./User"

export function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const [isHeaderDarker, setIsHeaderDarker] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", addFixedPositon)

    return () => {
      window.removeEventListener("scroll", addFixedPositon)
    }
  })

  function addFixedPositon() {
    const scrollTop = window.scrollY

    scrollTop >= 30 ? setIsHeaderDarker(true) : setIsHeaderDarker(false)
  }

  return (
    <Flex
      as="header"
      h="5rem"
      p={["1rem", "2rem"]}
      align="center"
      position="sticky"
      top={0}
      bg={isHeaderDarker && "gray.800"}
      zIndex={10}
    >
      {!isWideVersion && (
        <>
          <IconButton
            aria-label="Open navigation"
            icon={<HamburgerIcon />}
            fontSize="lg"
            variant="unstyled"
            mr="1.5rem"
            color={isHeaderDarker && "#f0f2f5"}
            onClick={onOpen}
          />
          <Drawer isOpen={isOpen} onClose={onClose} />
        </>
      )}

      <Flex w="100%" align="center" justify="space-between">
        <Logo isHeaderDarker={isHeaderDarker} />
        <User showProfileData={isWideVersion} isHeaderDarker={isHeaderDarker} />
      </Flex>
    </Flex>
  )
}
