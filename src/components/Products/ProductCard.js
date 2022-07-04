import React, { useState } from "react"
import getStripe from "../../utils/stripejs"
import {Container, Button, Row,Col, Form, Image} from 'react-bootstrap'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { useShoppingCart } from 'use-shopping-cart'

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}
const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const ProductCard = ({ product, price }) => {
  const [loading, setLoading] = useState(false)
  const { totalPrice, redirectToCheckout,clearCart, cartCount, addItem } = useShoppingCart()
  const [variant, setVariant] = useState(false);
  console.log(product.variants);
  const products = 
    {
      name: String(product.name),
      // sku ID from your Stripe Dashboard
      id: 'price_1L4nvPDRfO6W0hyMq7fDHVdc',
      // price in smallest currency unit (e.g. cent for USD)
      price: parseInt(price.unit_amount),
      currency: 'USD',
      // Optional image to be shown on the Stripe Checkout page
      image: 'https://my-image.com/image.jpg'
    }
  

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    console.log(price);
    const price = 'price_1L4nvPDRfO6W0hyMq7fDHVdc' /*new FormData(event.target).get("priceSelect")*/
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/page-2/`,
      cancelUrl: `${window.location.origin}/advanced`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <Container className="px-5" style={{maxWidth:1000}}>
      <Button onClick={()=> clearCart()}>Empty</Button>

      <Row className="my-3">
        <Col className="text-center">
          <Image src={product.images[0]} className="my-3" style={{width:650, height:650, objectFit:"cover"}}/>
          <h2>{product.name}</h2>
          <p>{formatPrice(price.unit_amount, price.currency)}</p>
          <p>Tax inlcuded in price.</p>
        </Col>
      </Row>
        <Row>
          <Col>
            <Form className={"sticky-top"} style={{top:"100px"}}>
              <Form.Group>
              <Form.Select className="my-3">
                {    
                  Object.keys(product.variants).map( 
                    (key) => <option key={key}>{key}</option> 
                  )
                }
              </Form.Select>
              <Button variant="outline-primary" style={{width:"100%"}}
                disabled={loading}
                onClick={() => addItem(products)}
              >
                Add To Cart
              </Button>
              <p className="py-3 text-center">Share</p>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <p>{renderRichText(product.description, options)}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductCard