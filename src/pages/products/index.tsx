import { useState } from "react"
import { GetStaticProps } from "next"
import Head from "next/head"
import { Heading, SimpleGrid } from "@chakra-ui/react"

import { stripe } from "../../libs/stripe"

import { EventsName } from "../../utils/events"

import { EventsBar } from "../../components/EventsBar"
import { ProductCard } from "../../components/ProductCard"
import { Container } from "../../components/Container"

export interface IProduct {
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

  return (
    <>
      <Head>
        <title>Products | cube.store</title>
      </Head>

      <Container>
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
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Container>
    </>
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
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
