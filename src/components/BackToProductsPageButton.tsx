import Router from "next/router"
import { Button, ButtonProps } from "@chakra-ui/react"

export function BackToProductsPageButton({ ...rest }: ButtonProps) {
  return (
    <Button
      bg="gray.800"
      color="gray.50"
      _hover={{ background: "gray.800" }}
      onClick={() => Router.push("/products")}
      {...rest}
    >
      Back to products page
    </Button>
  )
}
