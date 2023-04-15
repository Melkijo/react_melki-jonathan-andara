# (27) GraphQL Query and Mutation #
![image](https://user-images.githubusercontent.com/93898408/232233598-8f14f97b-1569-4d4d-8619-34c56d82121d.png)
<small>https://graphql.org/brand/<small>
## GraphQL Query ##
adalah permintaan yang dikirim ke server graphQL untuk meminta sebuah data, contoh code:
```javascript
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
```
