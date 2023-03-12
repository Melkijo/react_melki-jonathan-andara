# (14) React Fundamental #
## JSX ##
Javascript XML (JSX) adalah ekstensi sintaks pada javascript yang memungkinkan untuk menulis kode HTML dalam javascript. Contoh: <br>
` const element = <h1> Hello World </h1> `
### Kenapa JSX? ###
1. Kemudahan membaca <br>
  Karena sintaksnya mirip dengan HTML
2. Kemudahan debugging <br>
 Jika terdapat kesalahan penulisan kode, linter akan memberikan peringatan pada saat di compile
3. Lebih ekspresif <br>
jsx memungkinkan untuk menambahkan expression dan menggunakan operator logika pade kode
4. Lebih efisien <br>
Lebih efisien daripada menggunakan 'React.createElement' karena dalam menulis kode lebih sedikit dan dalam mengurangi resiko kesalahan penulisan kode

## React Component ##
Komponen React adalah bagian kode yang dapat digunakan kembali yang bisa digunakan untuk menentukan tampilan, behavior dan state sebagian UI.
### Function dan Class Component ###
adalah dua jenis komponen dalam react yang digunakan untuk membuat UI
#### Function Component ####
adalah komponen react yang didefinisikan sebagai sebuah fungsi, fungsi ini akan menerima props sebagai parameter dan mengembalikan elemen React. <br>
```javascript
function Greeting (props) {
  return <h1> Hello, {props.name}</h1>;
}
```
#### Class Component ####
adalah komponent react yang didefinisikan sebagai sebuah class Class ini akan mewarisi sifat-sifat dari kelas React.Component dan memiliki fungsi render() yang mengembalikan elemen React. <br>
```javascript
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```
#### Perbedaan ####
1. Penanganan Lifecycle Methods <br>
Dalam class component, dapat menggunakan lifescycle method seperti componentDidMount(), componentDidUpdate(), dan componentWillUnmount(). Sedangkan dalam Function Component, kita dapat menggunakan hooks seperti useEffect()
2. Definisi <br>
function component adalah fungsi, sedangkan class component adalah class.

## Render ##
sebuah method yang ada pada komponen React. Method ini mengambil nilai props dan state dari sebuah komponen dan mengembalikan sebuah elemen React yang akan ditampilkan pada halaman web.
### Render bersyarat ###
- Menggunakan if
```javascript
function greeting (props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn){
    return <User Greeting />
  }
    return <GuestGreeting />
}
```
