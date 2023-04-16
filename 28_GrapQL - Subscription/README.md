# (28) GraphQL - Subscription #
Subscriptions pada grapql adalah fitur yang memperbolehkan server untuk mengirim data ke sisi client saat suatu event (aksi) terjadi. klien dapat menerima data secara real-time dari server tanpa perlu melakukan permintaan terus menerus.
contoh code:
```graphql
subscription MySubscription {
    product {
      id
      product_name
      product_freshness
      product_category
      price
      created_at
      aditional_information
    }
  }
```

## cara set up ##
pada set up kali ini kita akan menggunakan railway sebagai database, hasura sebagai server side yang menghubungkan dan juga apollo agar bisa mengambil,edit data dari sisi klien.
### Import ###
```javascript
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
```
function yg kita import disini akan digunakan untuk melakukan proses subscription

```javascript
const httpLink = new HttpLink({
  uri: "https://neat-teal-79.hasura.app/v1/graphql",
  headers: {data},
});

const wsLink = new WebSocketLink({
  uri: `wss://neat-teal-79.hasura.app/v1/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {data},
    },
  },
});
```

variabel httpLink digunakan agar bisa melakukan porses query dan juga mutation sedangkan wsLink agar bisa melkaukan proses subscription.
header digunakan untuk melakukan proses auntentikasi, jika menggunakan hasura pada header dapat diisi dengan x-hasura-admin-secret

```javascript
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
```

variabel splitLInk digunakan untuk mengabungkan dua buah tipe operasi antar menggunakan http link atau pun menggunakan websocket

```javascript
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
```

variabel client digunakan untuk melakukan manajemen state, Parameter link berisi sebuah objek splitLink, yang merupakan konfigurasi untuk menghubungkan aplikasi dengan GraphQL API. Parameter cache berisi instance dari kelas InMemoryCache, yang merupakan tempat untuk menyimpan data yang diterima dari API dan diolah oleh aplikasi. 
