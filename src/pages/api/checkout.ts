import { NextApiRequest, NextApiResponse } from "next"
import { stripe } from "../../libs/stripe"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: req.body["priceId"],
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `http://localhost:3000/success?productName=${req.body["productName"]}`,
        cancel_url: "http://localhost:3000/canceled",
        shipping_address_collection: {
          allowed_countries: ["BR"],
        },
      })

      return res.status(200).json({ sessionId: session.id })
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method not allowed")
  }
}
