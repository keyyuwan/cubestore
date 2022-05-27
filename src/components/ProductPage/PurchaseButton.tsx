import { Button } from "@chakra-ui/react"

export function PurchaseButton() {
  return (
    <Button
      mt="2rem"
      bg="gray.800"
      color="gray.50"
      transition="0.2s"
      _hover={{ filter: "brightness(0.8)" }}
    >
      Buy
    </Button>
  )
}
