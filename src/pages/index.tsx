import { GetStaticProps } from "next"
import Image from "next/image"
import { stripe } from "../libs/stripe"
import { api } from "../libs/api"
import { getStripeJs } from "../libs/stripe-js"

interface IProduct {
  id: string
  name: string
  description: string
  images: string[]
  priceId: string
}

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  async function handleBuyProduct(product: IProduct) {
    try {
      const { data } = await api.post("/checkout", {
        productName: product.name,
        priceId: product.priceId,
      })

      const sessionId = data.sessionId

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div>
      <h1>Cubestore</h1>

      {products.map((product) => (
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
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await stripe.products.list()

  const productsFormatted = products.data.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    images: product.images,
    priceId: product.default_price,
  }))

  return {
    props: {
      products: productsFormatted,
    },
  }
}
