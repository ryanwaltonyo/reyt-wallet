import React, {useState} from "react"
import {Container, Button, Row,Col, Form, Image} from 'react-bootstrap'
import { useShoppingCart } from 'use-shopping-cart'

export default function CartItem({product}) {
  const { removeItem, setItemQuantity } = useShoppingCart()


  const item = JSON.parse(JSON.stringify(product));
  return (
      <Row className="py-3 p-0 border-bottom">
        <Col>
          <Container className={"text-start p-0"}>
            <Row className="row justify-content-center">
              <Col sm="5">
              <div className="text-start d-flex flex-column align-middle">
                <p>{item.name}</p>
                <p className="fw-bold mb-0">£{item.price}</p>
                </div>
              </Col>
              <Col sm="2" className="d-flex align-items-center">
                <Form>
                    <Form.Group>
                      <Form.Control
                      className="p-2"
                      type="number"
                      maxLength="10"
                      value={item.quantity}
                      min={1}
                      onChange={(e)=> setItemQuantity(item.id, parseInt(e.currentTarget.value)) }
                      />
                    </Form.Group>
                  </Form>
              </Col>
              <Col sm="2" className="d-flex align-items-center">
                <Button className="p-2" variant="outline-secondary"
                  onClick={() => removeItem(item.id)}>Remove</Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

  )
}