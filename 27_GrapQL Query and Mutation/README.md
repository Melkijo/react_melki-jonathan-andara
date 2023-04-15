# (27) GraphQL Query and Mutation #
## GraphQL Query ##
adalah permintaan yang dikirim ke server graphQL untuk meminta sebuah data, contoh code:
`javascript
query MyQuery {
    product {
      id
      aditional_information
      price
      product_category
      product_freshness
      product_name
      created_at
    }
  }
`
