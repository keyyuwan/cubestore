import { Button } from "@chakra-ui/react"
import { api } from "../../libs/api"
import { getStripeJs } from "../../libs/stripe-js"

interface PurchaseButtonProps {
  productName: string
  productPriceId: string
}

export function PurchaseButton({
  productName,
  productPriceId,
}: PurchaseButtonProps) {
  async function handlePurchaseProduct() {
    // TODO: not let the authenticated user buy the product

    try {
      const response = await api.post("/checkout", {
        productName,
        priceId: productPriceId,
      })

      const sessionId = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout(sessionId)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <Button
      mt="2rem"
      bg="gray.800"
      color="gray.50"
      transition="0.2s"
      _hover={{ filter: "brightness(0.8)" }}
      onClick={handlePurchaseProduct}
    >
      Buy
    </Button>
  )
}
