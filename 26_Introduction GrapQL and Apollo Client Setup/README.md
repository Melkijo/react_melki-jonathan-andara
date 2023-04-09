# (26) Introduction GraphQL and Apollo Client Setup #
## GraphQL ##
adalah bahasa query yang digunakan untuk mengambil data API spesifik yang diperlukan dari server,
graphQL diciptakan oleh Facebook pada tahn 2015.
### GraphQL vs REST API ###
1. **Cara Kerja** : REST API membagi data ke dalam beberapa endpoint (URL) dengan masing-masing endpoint menghasilkan data dalam format tertentu seperti JSON atau XML. Sedangkan pada GraphQL, klien melakukan satu permintaan dengan query dan server mengembalikan data sesuai dengan query yang dibuat.
2. **Struktur Query** : REST API, struktur query ditentukan oleh server dan klien hanya dapat mengambil data yang tersedia di endpoint yang telah didefinisikan. Sedangkan pada GraphQL, struktur query ditentukan oleh klien dan klien dapat mengambil data yang spesifik dari satu atau lebih objek.
3. **Performace** : Pada REST API, performa tergantung pada jumlah endpoint yang digunakan, sedangkan pada GraphQL, performa tergantung pada query yang dibuat. 
