# (26) Introduction GraphQL and Apollo Client Setup #
## GraphQL ##
adalah bahasa query yang digunakan untuk mengambil data API spesifik yang diperlukan dari server,
graphQL diciptakan oleh Facebook pada tahn 2015.
### GraphQL vs REST API ###
Perbedaan utama antara GraphQL dan REST adalah bahwa pada REST, klien harus melakukan beberapa request untuk mengambil data yang berbeda, sedangkan pada GraphQL, klien hanya perlu melakukan satu request untuk mengambil data yang diperlukan. perbedaan lainnya: 
1. **Cara Kerja** : REST API membagi data ke dalam beberapa endpoint (URL) dengan masing-masing endpoint menghasilkan data dalam format tertentu seperti JSON atau XML. Sedangkan pada GraphQL, klien melakukan satu permintaan dengan query dan server mengembalikan data sesuai dengan query yang dibuat.
2. **Struktur Query** : Pada REST API, struktur query ditentukan oleh server dan klien hanya dapat mengambil data yang tersedia di endpoint yang telah didefinisikan. Sedangkan pada GraphQL, struktur query ditentukan oleh klien dan klien dapat mengambil data yang spesifik dari satu atau lebih objek.
3. **Performace** : Pada REST API, performa tergantung pada jumlah endpoint yang digunakan, sedangkan pada GraphQL, performa tergantung pada query yang dibuat. 
### Main Features in GraphQL ###
1. Query
adalah permintaan untuk mendapatkan data dari server. Query pada GraphQL mirip dengan GET request pada REST API. 
``` query
query{
  products{
    name
    price
    category
  }
}
```
2. Mutation
dalah permintaan untuk memodifikasi data pada server. Mutation pada GraphQL mirip dengan POST, PUT, atau DELETE request pada REST API.

3. Subscription
