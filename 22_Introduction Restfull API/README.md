# (22) Introduction Restfull API #
## API (Application Programming Interface) ##
adalah suatu fungsi atau prosedur yang memperbolehkan untuk membuat sebuah aplikasi berkomunikasi ke data atau fitur dari sumber eksternal

### Cara kerja API ###
![image](https://user-images.githubusercontent.com/93898408/230752317-f8227a77-1b4c-418c-8b29-1fca78f724f2.png)
**Request**: permintaan yang dikirimkan oleh komputer pengguna ke sebuah server API, permintaan ini bisa meminta server untuk melakukan operasi seperti mengambil data atau mengelolah data tersebut Request terdiri dari beberapa komponen, termasuk URL, method HTTP, header, dan body. <br>
- URL berisi alamat dari sumber daya API yang diminta 
- method HTTP menentukan tindakan yang diambil oleh server 
- header berisi informasi tambahan seperti authentikasi dan tipe konten 
- body berisi data yang dikirimkan ke server <br>

**Response**: balasan yang diberikan oleh server setelah menerima request dari komputer pengguna. Response juga terdiri dari beberapa komponen, termasuk status code, header, dan body. 
- Status code memberi tahu aplikasi atau pengguna aplikasi apakah request berhasil atau gagal
- header berisi informasi tambahan seperti tipe konten dan waktu kadaluwarsa
- body berisi data yang diminta

## RestAPI (Representational State Tranfer API) ##
adalah jenis API yang dapat diakses dan dimanipulasi datanya, REST API menggunakan HTTP untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada sumber daya melalui permintaan HTTP yang disebut request.
### HTTP Request Method ###
- GET : Mengambil data
- POST : Membuat data baru
- PUT : Mengganti data yang sudah ada
- DELETE : Menghapus data
### HTTP Response Code ###
- 500 : internal server error
- 400 : Bad Request
- 404 : Not Found
- 200 : OK
- 401 : Unouthorized

### REST API Best Practice ###
1. Gunakan HTTP Method yang sesuai dengan tindakan yang dilakukan
2. gunakan URI (Uniform Resource Name) yang deskriptif dan mudah dipahami
3. Gunakan format respon yang konsisten (JSON atau XML)
4. Berikan error handling yang spesifik dan jelas untuk setiap kesalahan
5. Gunakan versioning pada URI untuk memudahkan upgrade atau penambahan fitur pada API

## Resource ##
- https://www.restapitutorial.com/
- https://restcookbook.com/
