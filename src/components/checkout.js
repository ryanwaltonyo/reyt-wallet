import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51Kpgq0DRfO6W0hyMHFg1bwHXoApE11AnHpf1j6rxLir0pwpzpI7Sqb3ZezkUoETRd7tE8YBFO66QxP8bwIeMuM2B000iaWId8n")
  }
  return stripePromise
}
const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1L4nvPDRfO6W0hyMq7fDHVdc", quantity: 1 }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }
  return (
    <button
      disabled={loading}
      className={"btn btn-primary"}
      onClick={redirectToCheckout}
    >
      BUY MY BOOK
    </button>
  )
}
export default Checkout