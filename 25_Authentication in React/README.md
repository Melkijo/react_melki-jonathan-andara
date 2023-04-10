# (25) Authentication in React #
adalah proses untuk verifikasi identitas user, sehingga dapat diizinkan untuk mengakses suatu sistem
### Aunthentication and Authorization ###
dua hal tersebut adalah hal yang berbeda, karena fungsi dari aunthentication digunakan untuk verifikasi user dan memberikan akses suatu sistem sedangkan authorization adalah proses untuk menentukan hak akses apa saja yang diberikan kepada user setelah berhasil diverifikasi.
## Tipe authentication ##
1. **Basic Authentication**: Metode autentikasi sederhana yang memerlukan pengguna untuk menyediakan username dan password dalam setiap permintaan ke server.
2. **Token-Based Authentication**: Metode autentikasi yang menggunakan token untuk mengidentifikasi dan memverifikasi pengguna. Setelah pengguna berhasil login, server akan mengirimkan token kepada pengguna yang kemudian disimpan di client-side, seperti cookie atau localStorage.
3. **OAuth**: Metode autentikasi yang memungkinkan pengguna untuk login menggunakan akun media sosial atau layanan pihak ketiga lainnya. 

## Tipe Authorization ##
1. **Role-Based Access Control (RBAC)**: Metode otorisasi yang membatasi akses berdasarkan peran atau level akses pengguna. 
2. **Attribute-Based Access Control (ABAC)**: Metode otorisasi yang membatasi akses berdasarkan atribut pengguna atau kondisi lainnya. 
3. **Role-Based Access Control with Context (RBC)**: Metode otorisasi yang memperluas RBAC dengan menambahkan informasi kontekstual untuk memberikan hak akses yang lebih spesifik.

## Kenapa perlu authentication dan authorization ##
hal ini diperlukan untuk menjaga agar sistem tetap aman, karena dengan diimplementasikan verifikasi dan authorisasi dapat memberikan hak akses yang spesifik terhadap role dari pengguna dan mengetahui jika yang benar" masuk ke sistem adalah pengguna yang sudah terdaftar.
