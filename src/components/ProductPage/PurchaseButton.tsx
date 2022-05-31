import { Button } from "@chakra-ui/react"
import { useSession } from "next-auth/react"
import { api } from "../../libs/api"
import { getStripeJs } from "../../libs/stripe-js"

interface PurchaseButtonProps {
  productName: string
  productPriceId: string
  onOpenAuthModal: () => void
}

export function PurchaseButton({
  productName,
  productPriceId,
  onOpenAuthModal,
}: PurchaseButtonProps) {
  const { data: session } = useSession()

  async function handlePurchaseProduct() {
    if (!session) {
      onOpenAuthModal()
      return
    }

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
