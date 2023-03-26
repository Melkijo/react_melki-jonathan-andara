# (20) Global State Management and Data Fetching #
**Global state management** adalah teknik untuk menyimpan dan mengelola state (keadaan) aplikasi secara global sehingga dapat diakses oleh semua komponen di dalam aplikasi, terlepas dari posisi komponen tersebut dalam hierarki komponen. Dengan menggunakan global state management, komponen dapat berinteraksi dan berbagi data satu sama lain tanpa harus saling bertukar properti atau mengirimkan pesan. Pada dasarnya, global state management digunakan untuk mengatasi masalah yang muncul ketika aplikasi menjadi semakin kompleks, dengan banyak komponen yang saling bergantung dan membutuhkan akses ke data yang sama. Dengan global state management, data dapat diakses dan dikelola secara efisien, sehingga membuat pengembangan aplikasi menjadi lebih mudah dan efektif. <br> <br>
**Data Fetching** adalah proses mengambil atau memuat data dari sumber eksternal.
 
 ## Redux ##
 adalah library JavaScript yang digunakan untuk mengelola state (keadaan) global dalam aplikasi, terutama pada aplikasi yang kompleks dengan banyak interaksi dan perubahan data. Kapan saat menggunakan redux:
- aplikasi atau web memiliki state yang kompleks
- state dibagikan ke berbagai komponen
- codebase yang sudah besar dan dikerjakan banyak orang

### Komponen Penting Redux ###
#### Actions ####
Action merupakan sebuah objek yang mendefinisikan perubahan state yang terjadi dalam aplikasi. Action ini dikirim ke reducer dan reducer akan memperbarui state sesuai dengan perintah dalam action.
#### Store ####
 Store merupakan tempat penyimpanan utama untuk state dalam Redux. Store berisi seluruh state aplikasi dan memberikan akses ke state tersebut ke seluruh komponen aplikasi.
#### Reducer ####
Reducer merupakan fungsi yang digunakan untuk mengubah state aplikasi berdasarkan aksi yang diterima. Reducer menerima action sebagai input, dan kemudian memperbarui state berdasarkan aksi tersebut.
