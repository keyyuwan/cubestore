import { GetStaticPaths, GetStaticProps } from "next"

import { stripe } from "../../libs/stripe"

import { Breadcrumb } from "../../components/Breadcrumb"
import { Container } from "../../components/Container"
import { ProductPage } from "../../components/ProductPage"

export interface IProduct {
  name: string
  priceId: string
  description: string
  images: string[]
  event: string
  price: string
}

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  return (
    <Container pt="1rem" pb="2rem" maxW={1120}>
      <Breadcrumb productName={product.name} />

      <ProductPage product={product} />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params

  const product = await stripe.products.retrieve(id as string)

  const productFormatted = {
    name: product.name,
    priceId: product.default_price,
    description: product.description,
    images: product.images,
    event: product.metadata.event,
    price: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(product.metadata.price)),
  }

  return {
    props: {
      product: productFormatted,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
