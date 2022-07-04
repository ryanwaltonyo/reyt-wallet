import * as React from "react"
import Checkout from "../components/checkout"
import Layout from "../components/layout"
import {Image, Row, Col, Button} from 'react-bootstrap'
// markup
const colStyle = {
  overflow:'hidden',
  padding: 0,
  margin: 0,
};
const rowStyle={
  height:425,
  maxHeight:475,
  overflow:'hidden',
}
const startCard = {
  height:"90vh",
  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(https://www.nationalparks.uk/app/uploads/2020/07/1.-Walls-and-Barns-Stephen-Garnett-1920x1080.jpg)'
}
const endCard = {
  height:325,
  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(https://www.nationalparks.uk/app/uploads/2020/07/1.-Walls-and-Barns-Stephen-Garnett-1920x1080.jpg)'
}

const IndexPage = () => {
  return (
    <Layout>
      <Row style={startCard} className="align-items-center text-white">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-4 mb-5" style={{fontWeight: 590}}>The Yorkshire Card Holder</h1>
          <Button href="/products/prod_LmMeTfNrn83kTq">Buy Now</Button>
        </div>
      </Row>
      <Row className="py-3 justify-content-center text-center align-items-center" style={rowStyle}>
        <Col md={6}>
          <div className="d-flex flex-column align-items-center">
            <h2 className="py-3">The Yorkshire Cardholder Company</h2>
            <p>REYT WALLET has a mission. To provide high quality, stylish wallets, that perfectly encapsulate Yorkshire. The Sheffield based company was founded in 2020 by a University of Sheffield Student after realising there was limited options for Yorkshire gifts REYT WALLET designs and sells premium, full grain leather card holders for modern Yorkshire folk.</p>
          </div>
        </Col>
      </Row>
      <Row style={rowStyle} className="align-items-center">
        <Col md={6} className="p-0 m-0" style={colStyle}>
          <Image fluid src="https://www.nationalparks.uk/app/uploads/2020/07/1.-Walls-and-Barns-Stephen-Garnett-1920x1080.jpg" />
        </Col>
        <Col md={6} className="p-0 m-0" style={colStyle}>
          <Image fluid src="https://www.nationalparks.uk/app/uploads/2020/07/1.-Walls-and-Barns-Stephen-Garnett-1920x1080.jpg" />
        </Col>
      </Row>
      <Row style={rowStyle} className="align-items-center">
        <Col md={6} style={colStyle} className="px-5">
          <div className="d-flex flex-column px-5 mx-5">
            <h2 className="py-3">Hand Crafted</h2>
            <p>All Reyt Wallet Card Holders are handmade from the finest recycled full grain leather. We guarantee perfect stitching and long lasting design, making them the perfect gift.</p>
          </div>
        </Col>
        <Col md={6} style={colStyle}>
        <Image fluid src="https://www.nationalparks.uk/app/uploads/2020/07/1.-Walls-and-Barns-Stephen-Garnett-1920x1080.jpg" responsive />

        </Col>
      </Row>
      <Row style={rowStyle} className="align-items-center">
        <Col md={6} style={colStyle}>
          <Image fluid src="https://www.nationalparks.uk/app/uploads/2020/07/1.-Walls-and-Barns-Stephen-Garnett-1920x1080.jpg" responsive />
        </Col>
        <Col md={6} style={colStyle} className="align-items-center px-5">
        <div className="d-flex flex-column px-5 mx-5 h-100">
            <h2 className="py-3">Sustainable</h2>
            <p>Each Reyt Wallet Card Holder is handmade from recycled leather offcuts that would otherwise be discarded. Our durable design and commitment to using recycled materials makes our wallets the perfect gift for eco-friendly northerners.</p>
          </div>
        </Col>
      </Row>
      <Row style={rowStyle} className="align-items-center">
        <Col md={6} className="align-items-center px-5" style={colStyle}>
          <div className="d-flex flex-column px-5 mx-5">
            <h2 className="py-3">Based In Yorkshire</h2>
            <p>We are a Yorkshire based gift company that believes Yorkshire is the best place in the world. We believe the best way to show love to this great county is by supporting Yorkshire businesses. What better way to celebrate your Yorkshire pride than with a beautiful Yorkshire gift.</p>
          </div>
        </Col>
        <Col md={6} style={colStyle}>
          <Image fluid src="https://www.nationalparks.uk/app/uploads/2020/07/1.-Walls-and-Barns-Stephen-Garnett-1920x1080.jpg" responsive />
        </Col>
      </Row>
      <Row className="justify-content-center text-center py-5 align-items-center" style={rowStyle}>
        <Col md={6} className="px-5">
          <div className="d-flex flex-column justify-content-center">
            <h2 className="py-3">The Perfect Gift For Him</h2>
            <p>We believe our wallets fill a much needed space in the Yorkshire gifts for him space. It's always been a struggle to find the perfect gift for any man in your life, but not anymore. Get your favourite Yorkshireman something unique, durable and beautifully crafted. Also know as, a Reyt Wallet Card Holder.</p>
          </div>
        </Col>
      </Row>
      <Row className="bg-dark text-light justify-content-center text-center align-items-center" style={rowStyle}>
        <Col md={6} className="px-5">
          <div className="d-flex flex-column align-items-center px-5">
            <h2 className="py-3">Minimalist Design</h2>
            <p>It's great to see high quality items coming out of Yorkshire. It's always hard to find something in the "gifts for him" category. This is definitely a rare gem.</p>
            <p>Derrick Smith</p>
          </div>
        </Col>
      </Row>
      <Row className="py-5" style={endCard}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Button>Buy Now</Button>
        </div>
      </Row>
    </Layout>
  )
}
//      <Checkout />

export default IndexPage
