import React, { useState, useEffect } from 'react';
import {Container,Row, Col, Button} from "react-bootstrap"
import { useShoppingCart } from 'use-shopping-cart'
import CartItem from './ShoppingCart/CartItem';
import { CartProvider } from 'use-shopping-cart'

const fullscreen = {
    width:"100%",
    height:"100vh",
    backgroundColor: "#FAF9F6",
    "z-index": 1050,
}

export default function ShoppingCart() {
  const { totalPrice, redirectToCheckout, cartCount,cartDetails, addItem, clearCart } = useShoppingCart()
  const [status, setStatus] = useState('idle')

  async function handleClick(event) {
    event.preventDefault()

    if (cartCount > 0) {
      setStatus('idle')
      try {
        const result = await redirectToCheckout()
        if (result?.error) {
          console.error(result)
          setStatus('redirect-error')
        }
      } catch (error) {
        console.error(error)
        setStatus('redirect-error')
      }
    } else {
      setStatus('missing-items')
    }
  }
    return (
            <Container className="text-center py-5">
                <Row>
                    <Col >
                      <h2>My Cart</h2>
                      <Container className="py-3">
                        {    
                          Object.keys(cartDetails).map( 
                            (card) => <CartItem product={cartDetails[card]}/>
                          )
                        }
                      </Container>
                    </Col>
                </Row>
                <Row className="row justify-content-center">

                  <Col md="2">
                     <h3>Total</h3>
                   </Col>
                   <Col md="2">
                       <p className="h4">£{totalPrice}</p>

                  </Col>
                </Row>
                <Row className="row justify-content-center">
                  <Col>
                  <p>Tax included and shipping calculated at checkout</p>
                  <Button onClick={handleClick}>Checkout</Button>

                  </Col>

                </Row>
            </Container>
      )

}