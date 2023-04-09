# (24) Restfull API with Javascript #
jenis API yang didesain untuk membuat sumber daya (resources) yang tersedia di internet dapat diakses dan dimanipulasi oleh komputer pengguna.
## MockAPI ##
adalah API palsu yang digunakan untuk menguji dan mengembangkan aplikasi tanpa mengakses API yang sebenarnya.keuntungan mengunakan mockAPI:
- frontend dan backend dalam bekerja secara paralel
- respon feedback yang cepat
- dapat menemukan kesalahan lebih cepat <br>
### Rekomendasi Mock API: ###
- [Beeceptor](https://beeceptor.com/)
- [MockAPI](https://mockapi.io/)
- [Postman Mock server](https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/)
- [stoplight](https://stoplight.io/)

## Implementasi RestAPI ##
untuk implementasi kita akan menggunakan axios
### Axios ###
library JavaScript yang digunakan untuk melakukan HTTP request ke server atau API. Library ini merupakan salah satu alternatif dari fetch() yang lebih mudah digunakan dan memiliki fitur-fitur yang lebih lengkap.
untuk mock API yang digunakan dari [MockAPI](https://mockapi.io/)
### Method GET ###
```javascript
axios({
      method: "get",
      url: urlApi,
    })
      .then((products) => setProductList(products.data)
      .catch((error) => console.error(error));
```
method GET digunakan untuk mengambil data dari RESTful API

### Method POST ###
```javascript
axios({
      method: "post",
      url: urlApi,
      data: {
        name: productName,
        category: productCategory,
        fresh: productFreshness,
        price: productPrice,
      },
    });
```
Untuk menambahkan data baru ke RESTful API

### Method PUT ###
```javascript
axios({
        method: "put",
        url: `${urlApi}/${product.id}`,
        data: {
          name: newProductName,
        },
      });
```
Untuk mengubah data yang sudah ada pada RESTful API

### Method DELETE ###
```javascript
axios({
          method: "delete",
          url: `${urlApi}/${product.id}`,
        });
```
Untuk menghapus data dari RESTful API

