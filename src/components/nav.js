import React, { useState, useEffect } from 'react';
import {Container, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useShoppingCart } from 'use-shopping-cart'

import {
  faBars,
  faShoppingCart,
  faXmark,
  faCircle
} from '@fortawesome/free-solid-svg-icons';

export default function Nav({changeMenuActive,menuActive, changeCartActive, cartActive}) {
    const [headerColor, setHeaderColor] = useState("transparent");
    const {cartCount} = useShoppingCart();
    const url = typeof window !== 'undefined' ? window.location.pathname : '';
    const listenScrollEvent = () => {
        window.scrollY > 20
          ? setHeaderColor("white")
          : setHeaderColor("transparent")
      };
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent)
    });
    
    return (
        <nav className={`navbar navbar-light ${url == "/" ? "fixed-top" : "sticky-top"} ${menuActive || cartActive || url != "/" ? "text-dark" : "text-light"} px-5`} style={{backgroundColor: headerColor}}>
            <Container className="px-5">
                <FontAwesomeIcon icon={menuActive ? faXmark : faBars} size="xl"  onClick={changeMenuActive}/>
    
                <h2><a className={`navbar-brand ${menuActive || cartActive || headerColor == "white" ? "text-dark" : "text-light"}`} href="#">Reyt Wallet</a></h2>
    
                <span className="fa-layers">
                    <FontAwesomeIcon className="" icon={cartActive ? faXmark : faShoppingCart} size="xl" onClick={changeCartActive}/>
                    {cartCount > 0 && !cartActive ? <FontAwesomeIcon style={{color: "#eb4f47", display:"block", right:"-32px", top: "-22px"}} icon={faCircle} size='sm' /> : null}
                </span>
                </Container>
            </nav>
      )

}