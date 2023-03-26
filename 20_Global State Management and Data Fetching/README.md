# (20) Global State Management and Data Fetching #
**Global state management** adalah teknik untuk menyimpan dan mengelola stat secara global sehingga dapat diakses oleh semua komponen di dalam aplikasi, terlepas dari posisi komponen tersebut dalam hierarki komponen. Dengan global state management, data dapat diakses dan dikelola secara efisien, sehingga membuat pengembangan aplikasi menjadi lebih mudah dan efektif. <br> <br>
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

Refrensi lain untuk global state management : zustand, jotai

## Data Fetching ##
 proses mengambil data dari sumber eksternal, Secara umum, data fetching pada React memerlukan tiga tahap: pengiriman permintaan data, penanganan respons data, dan pengolahan data untuk ditampilkan pada aplikasi React. Setelah data diterima, data tersebut dapat ditampilkan pada aplikasi React dengan menggunakan props atau state dan kemudian digunakan untuk meng-update UI sesuai dengan kebutuhan aplikasi. <br>
 contoh Implementasi: <br>
```javascript 
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {data.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
```

beberapa refrensi untuk data fetching : SWR, tanstack query, RTK query
