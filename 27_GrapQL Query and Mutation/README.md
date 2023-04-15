# (27) GraphQL Query and Mutation #
![image](https://user-images.githubusercontent.com/93898408/232233598-8f14f97b-1569-4d4d-8619-34c56d82121d.png)
<small>https://graphql.org/brand/<small>
## GraphQL Query ##
Query adalah permintaan untuk mendapatkan data dari server. Query pada GraphQL mirip dengan GET request, contoh code:
```graphql
query MyQuery {
    product {
      id
      aditional_information
      price
      product_name
      created_at
    }
  }
```
pada code diatas semua data id, aditional_information, price, product_name dan created_ad pada setiap product akan ditampilkan. kita juga bisa mengspesifikan data product yang kita ingin tampilkan dengan menambahkan id pada product nya, contoh kode nya seperti berikut 
```graphql
query MyQuery {
    product(id: 1) {
      id
      aditional_information
      price
      product_name
      created_at
    }
  }
```
GraphQL Query memiliki keunggulan dalam efisiensi dan fleksibilitas, karena hanya meminta data yang diperlukan dan kita dapat menentukan format data yang ingin dikirim.

## GraphQL Mutation ##
permintaan untuk memodifikasi data pada server. Mutation pada GraphQL mirip dengan POST, PUT, atau DELETE request
### Delete ###
```graphql 
mutation MyMutation {
  delete_product(where: {id: {}}) {
    returning {
      id
    }
  }
}
```
pada code diatas akan dilakukan proses delete untuk id yang sesuai pada parameter

### Insert ###
```graphql
mutation MyMutation {
  insert_product(objects: {id: ""}) {
    returning {
      id
    }
  }
}
```
pada code diatas akan ditambahkan data id baru pada table database

### Update ###
```graphql
mutation MyMutation {
  update_product(where: {id: {}}) {
    returning {
      id
    }
  }
}
```
code diatas kaan meng-edit data dengan id yang sesuai
