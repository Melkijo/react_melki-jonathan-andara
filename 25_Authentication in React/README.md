# (25) Authentication in React #
adalah proses untuk verifikasi identitas user, sehingga dapat diizinkan untuk mengakses suatu sistem
### Aunthentication and Authorization ###
dua hal tersebut adalah hal yang berbeda, karena fungsi dari aunthentication digunakan untuk verifikasi user dan memberikan akses suatu sistem sedangkan authorization adalah proses untuk menentukan hak akses apa saja yang diberikan kepada user setelah berhasil diverifikasi.
## Tipe authentication ##
1. **Basic Authentication**: Metode autentikasi sederhana yang memerlukan pengguna untuk menyediakan username dan password dalam setiap permintaan yang dilakukan ke server.
2. **Token-Based Authentication**: Metode autentikasi yang menggunakan token untuk mengidentifikasi dan memverifikasi pengguna. Setelah pengguna berhasil login, server akan mengirimkan token kepada pengguna yang kemudian disimpan di client-side, seperti cookie atau localStorage.
3. **OAuth**: Metode autentikasi yang memungkinkan pengguna untuk login menggunakan akun media sosial atau layanan pihak ketiga lainnya. 
