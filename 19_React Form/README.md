# (19) React Form #
adalah cara mengelola input data form dari pengguna dari sebuah web menggunakan react.
## Macam Form ##
- Input <br>
  digunakan untuk mengambil input berupa text, number, email ataupun password dari pengguna <br>
  ```javascript
  <label>Nama</label>
  <input type="text" name="name"/>
  ```
- textarea <br>
  digunakan untuk mengambil inputan yang cukup panjang dari user <br>
  ```javascript
  <label>Deskriptsi</label>
  <textarea name="deskripsi/>
  ```
- Select <br>
  digunakan untuk inputan yang memiliki pilihan <br>
  ```javascript
  <label for="fruit">Choose a fruit:</label>
  <select id="fruit">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
  </select>
  ```
  
## Controlled Component ##
adalah suatu komponen yang keadaannya selalu dikendalikan oleh state dalam komponen parentnya. <br>
```javascript
function App() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input 
        type="text" 
        id="nameInput" 
        value={name} 
        onChange={handleNameChange} 
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
```
seperti pada code di atas, nilai value pada tag input diisikan oleh variabel name yang dikendalikan oleh function handlenameChange.

## Uncontrolled Component ##
komponen input yang nilai atau keadaannya dikontrol oleh DOM, bukan oleh state pada komponen React-nya. <br>
```javascript
function App() {
  const fileInputRef = useRef();

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    console.log(file);
  }

  return (
    <div>
      <label htmlFor="fileInput">Choose a file:</label>
      <input 
        type="file" 
        id="fileInput" 
        ref={fileInputRef} 
      />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}
```
seperti pada code diatas tag input file akan memberikan nilai ke variabel fileInputRef melalui properti ref.

## Basic Validation ##
perlu dilakukan vaildasi form untuk mencari input data yang benar dan sesuai format, melindungi akun pnegguna dan juga untuk melindungi sistem atau aplikasi yang menjalankan input.
### Tipe validasi Data ###
#### Client Side validation ####
validasi dilakukan pada sisi klien, validasi ini diperuntukan agar setiap data input pengguna sesuai dengan format, sebelum data form dilanjutkan ke server. hal ini dapat dilakukan dengan menggunakan: <br>
- Built-in form validation yaitu menggunakan fitur validasi langsung dari HTML5
- javascript yaitu validasi form yang dapat dikustomisasi sendiri
#### Server-side validation ####
proses validasi data yang dilakukan pada sisi server dalam pengembangan aplikasi web. Tujuan dari server-side validation adalah untuk memastikan data yang diterima dari klien sudah benar dan valid sebelum data tersebut diproses lebih lanjut.
