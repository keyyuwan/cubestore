import { useEffect } from "react"
import { useRouter } from "next/router"
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
} from "@chakra-ui/react"
import { FaCubes, FaHome } from "react-icons/fa"
import { Item } from "./Item"

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function Drawer({ isOpen, onClose }: DrawerProps) {
  const { asPath } = useRouter()

  useEffect(() => {
    onClose() // closes the drawer when navigating to another page
  }, [asPath, onClose])

  return (
    <ChakraDrawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
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
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  )
}
