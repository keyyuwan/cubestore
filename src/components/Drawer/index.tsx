import { useEffect } from "react"
import { useRouter } from "next/router"
import { Session } from "next-auth"
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react"
import { FaCubes, FaHome } from "react-icons/fa"
import { Item } from "./Item"
import { SignInItem } from "./SignInItem"

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  session: Session
}

export function Drawer({ isOpen, onClose, session }: DrawerProps) {
  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
    xl: false,
  })

  const { asPath } = useRouter()

  useEffect(() => {
    onClose() // closes the drawer when navigating to another page
  }, [asPath, onClose])

  return (
    <ChakraDrawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="gray.200">
        <DrawerCloseButton mt="3" />
        <DrawerHeader>
          <Heading as="h1" fontSize="xl" cursor="pointer">
            cube.store
          </Heading>
        </DrawerHeader>

        <DrawerBody>
          <Item href="/" Icon={<FaHome size={28} />} title="Home" mt="2rem" />
          <Item
            href="/products"
            Icon={<FaCubes size={28} />}
            title="Products"
            mt="2rem"
          />
          {isMobileVersion && (
            <>
              {session ? (
                <Item
                  href="#" // TODO: href="/profile"
                  Icon={
                    <Avatar
                      name={session.user.name}
                      src={session.user.image}
                      w="2rem"
                      h="2rem"
                    />
                  }
                  title="Profile"
                  mt="2rem"
                />
              ) : (
                <SignInItem mt="2rem" />
              )}
            </>
          )}
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  )
}
