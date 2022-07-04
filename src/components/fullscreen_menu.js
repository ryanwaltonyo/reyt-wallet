import React, { useState, useEffect } from 'react';
import {Container,Row, Col} from "react-bootstrap"
import { Link } from "gatsby"
const fullscreen = {
    width:"100%",
    height:"100vh",
    backgroundColor: "#FAF9F6",
    "z-index": 1050,
}

export default function Menu() {
    return (
        <div style={fullscreen} className="d-flex align-items-center text-center">
            <Container >
                <Row>
                    <Col class="">
                        <ul class="list-unstyled font-family-sans-serif">
                            <li class=""><Link href="/">Home</Link></li>
                            <li><Link href="/products/prod_LmMeTfNrn83kTq">The Card Holder</Link></li>
                            <li><Link href="/about-us">About Us</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </div>
      )

}