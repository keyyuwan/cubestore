import { useState } from "react"
import { GetStaticProps } from "next"
import { Box, Heading, SimpleGrid } from "@chakra-ui/react"

import { stripe } from "../libs/stripe"
import { api } from "../libs/api"
import { getStripeJs } from "../libs/stripe-js"

import { EventsName } from "../utils/events"

import { EventsBar } from "../components/EventsBar"
import { Product } from "../components/Product"

interface IProduct {
  id: string
  name: string
  images: string[]
  priceId: string
  event: string
  price: string
}

interface HomeProps {
  products: IProduct[]
}

export default function Products({ products }: HomeProps) {
  const [eventSelected, setEventSelected] = useState<EventsName>("All")

  function handleSelectEvent(eventName: EventsName) {
    setEventSelected(eventName)
  }

  const filteredProducts = products.filter((product) => {
    if (eventSelected === "All") {
      return products
    }

    return product.event === eventSelected
  })

  // async function handleBuyProduct(product: IProduct) {
  //   try {
  //     const { data } = await api.post("/checkout", {
  //       productName: product.name,
  //       priceId: product.priceId,
  //     })

  //     const sessionId = data.sessionId

  //     const stripe = await getStripeJs()

  //     await stripe.redirectToCheckout({ sessionId })
  //   } catch (err) {
  //     alert(err.message)
  //   }
  // }

  return (
    <Box px="2rem">
      <Heading as="h2" fontSize="xl" mt="1rem">
        Events
      </Heading>
      <EventsBar
        eventSelected={eventSelected}
        handleSelectEvent={handleSelectEvent}
        mt="0.5rem"
      />

      <SimpleGrid
        spacing="2rem"
        columns={[1, 2, 3]}
        mt="4rem"
        pb="2rem"
        alignItems="center"
        justifyContent="center"
      >
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </SimpleGrid>

      {/* {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={200}
            height={200}
          />
          <p>{product.description}</p>
          <button onClick={() => handleBuyProduct(product)}>Buy</button>
        </div>
      ))} */}
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await stripe.products.list()

  const productsFormatted = products.data.map((product) => ({
    id: product.id,
    name: product.name,
    images: product.images,
    priceId: product.default_price,
    event: product.metadata.event,
    price: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(product.metadata.price)),
  }))

  return {
    props: {
      products: productsFormatted,
    },
  }
}
