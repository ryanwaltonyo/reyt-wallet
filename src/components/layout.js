import React,{useState} from "react"
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import "../css/bootstrap.scss"
import Nav from "./nav";
import Footer from "./footer";
import {Container} from 'react-bootstrap'
import Menu from './fullscreen_menu'
import ShoppingCart from "./ShoppingCart";

export function Main({children}){
  return(
    <>
      <Container fluid className="px-0" >
          {children}
      </Container>
      <Footer />
      </>
  )
}

export default function Layout({ children }) {
  const [menuActive, setMenuActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  
  const changeMenuActive = () => {
    setMenuActive(!menuActive)
    setCartActive(false);
  }
  const changeCartActive = () => {
    setCartActive(!cartActive)
    setMenuActive(false);
  }

  var T = <Main children={children}/>

  if(menuActive){
    T = <Menu />
  }
  if(cartActive){
    T = <ShoppingCart />
  }

  return (
    <main className="" >
      <Nav 
      changeMenuActive={changeMenuActive}
      menuActive={menuActive}
      changeCartActive={changeCartActive}
      cartActive={cartActive}
      />
      {T}
    </main>
  )
}