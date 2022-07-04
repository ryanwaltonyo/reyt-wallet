import React from "react"
import {Container, Button, Row,Col, Form, Image} from 'react-bootstrap'

export default function Footer({ children }){
  return (
    <Container fluid className="bg-light p-5 mt-5">
        <Row className="px-5 mx-5">
            <Col>
              <ul class="list-unstyled">
                <li><a>Contact Us</a></li>
                <li><a>Contact Us</a></li>
                <li><a>Contact Us</a></li>
                <li><a>Contact Us</a></li>
                <li><a>Contact Us</a></li>
                <li><a>Contact Us</a></li>
                <li><a>Contact Us</a></li>
              </ul>
            </Col>
            <Col>
              <h5>Sign Up For Updates</h5>
              <Form>
              <p>Get updated about new products, promotions and sales.</p>

              <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form>
            </Col>
        </Row>
        <Row>
          <Col className={"text-center"}>© Copyright Reyt Wallet</Col>
        </Row>
    </Container>

  )
}