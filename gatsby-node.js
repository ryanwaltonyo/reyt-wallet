exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    {
      allContentfulProduct {
        edges {
          node {
            stripeId
          }
        }
      }
    }    
    `)
    data.allContentfulProduct.edges.forEach(edge => {
      const stripe_id = edge.node.stripeId
      actions.createPage({
        path: "products/" + stripe_id,
        component: require.resolve(`./src/pages/product.js`),
        context: { stripe_id: stripe_id },
      })
    })
  }