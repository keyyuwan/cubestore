import { IconButton } from "@chakra-ui/react"
import Router from "next/router"
import { FaShoppingBag } from "react-icons/fa"

interface ProductButtonProps {
  name: string
  id: string
}

export function ProductButton({ name, id }: ProductButtonProps) {
  function handleRedirectToProductPage() {
    Router.push(`/products/${id}`)
  }

  return (
    <IconButton
      aria-label={`Go to ${name} page`}
      icon={<FaShoppingBag />}
      variant="unstyled"
      color="white"
      bg="gray.700"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="50%"
      position="absolute"
      bottom={-3}
      right={2}
      transition="0.2s"
      _hover={{ filter: "brightness(0.85)" }}
      onClick={handleRedirectToProductPage}
    />
  )
}
