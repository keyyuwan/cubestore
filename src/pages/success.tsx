import { useRouter } from "next/router"

export default function Success() {
  const { query } = useRouter()

  return (
    <div>
      <h1>Parabéns! Você adquiriu o produto {query.productName}</h1>
    </div>
  )
}
