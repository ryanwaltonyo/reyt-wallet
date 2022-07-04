import React from "react"
import Layout from "../components/layout"
import {graphql } from "gatsby"
import ProductCard from "../components/Products/ProductCard"


const ProductPage = ({data}) => {
    const product = data.allStripeProduct.nodes[0]
    product.description = data.allContentfulProduct.edges[0].node.description
    product.variants = JSON.parse(data.allContentfulProduct.edges[0].node.variants.internal.content).variants
    const price = data.allStripePrice.edges[0].node
    product.price = String(price)
    return (
        <Layout>
            <ProductCard product={product} price={price} />
        </Layout>
    )
    }
export const query = graphql`
    query($stripe_id: String!) {  
      allStripeProduct(filter: {id: {eq: $stripe_id}}) {
        nodes {
          name
          id
          images
          localFiles {
            absolutePath
          }
        }
      }
      allStripePrice(filter: {product: {id: {eq: $stripe_id}}}) {
        edges {
          node {
            currency
            unit_amount
          }
        }
      }
      allContentfulProduct(filter: {stripeId: {eq: $stripe_id}}) {
        edges {
          node {
            id
            name
            description {
              raw
            }
            variants {
              internal {
                content
              }
            }
          }
        }
      }
    }`
export default ProductPage