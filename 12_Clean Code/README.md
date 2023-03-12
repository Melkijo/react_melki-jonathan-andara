# (12) Clean Code #
Clean code adalah cara sebuah program dituliskan agar mudah dipahami, di-maintaince dan dikembangkan oleh pengembang lainnya. penulisan clean code itu sangat penting karena memungkinkan pengembang untuk memahai dan momodifikasi sebuah kode dengan mudah, dan juga mempercepat waktu pengembangan dan meminimalisir sebuah bug atau kesalah.
## Karakteristik ##
1. Penamaan mudah dipahami <br>
  hal ini diperlukan untuk memudahkan programmer membaca fungsi dari setiap variabel ataupun method yang dideklarasikan
2. Dokumentasi yang jelas
3. Struktur yang konsisten
  
4. Singkat namum mendeskripsikan konteks
  
5. Hindari penambahan konteks yang tidak perlu <br>
  Agar memori yang digunakan oleh code dapat diminimalisir sehingga mempercepat code saat dijalankan
6. Komentar <br>
  Penggunaan komentar yang jelas memudahkan maintenace kode dikemudian hari
  
  ## Principle ##
  - KISS (Keep It So Simple) <br>
    Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B dan Mengecek fungsi C. <br>
    Tips
    - Fungsi harus kecil
    - Fungsi dibuat untuk melakukan satu tugas saja
    - Jangan gunakan terlalu banyak argument pada fungsi
    - Kecil dan jumlahnya minimal
    
  - DRY (Dont Repeat Yourself) <br>
    Duplikasi code sering terjadi karena copy paste, untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang ulang.
  - YAGNI (You Ain't Gonna Need It) <br>
    Sebuah code haru ditulis hanya untuk fitur yang diperlukan dan tidak perlu menambahkan fitur yang tidak dibutuhkan.
    
 ## Refactoring Code ##
 adalah proses emgnubah striktur kode tanpa mengubah fungsionalitas dari kode tersebut. Tujuan dari refactoring code adalah menignkatkan kualitas dan kebersihan code, memperbaiki struktur kode yang buruk dan meningkatkan kemudahakan pemeliharaan dan pengembangan kode. <br>
 Refactoring code umumnya dilakukan setelah pengembangan kode selesai. proses ini melibatkan pengubahan struktur code, penambahan atau penghapusan fitur dan lain lain yang tidak mempengaruhi fungsi utama dari code.
 Manfaat Refactoring Code
 -  Meningkatkan kebersihan dan kulitas code
 -  menignkatkan kemudahakn pemeliharaan dan pengembangan code
 -  mengurangi redudansi code
 -  memperbaiki struktur code yang buruk
 -  meminimalkan bug atau kesalahan pada code
 -  meningkatkan performa dan efisiensi code
    
