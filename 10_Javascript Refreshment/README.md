# (10) Javascript Refreshment #
JavaScript adalah bahasa pemrograman tingkat tinggi, scripted, untype dan interpreted yang digunakan untuk membuat web menjadi interaktif, dinamis dan dapat digunakan untuk mengontrol perilaku browser dan memvalidasi data input-an. JavaScript berjalan pada sisi klien (client-side) dan sisi server (server-side) menggunakan runtime environment seperti browser dan Node.js. JavaScript diperkenalkan oleh Brendan Eich saat bekerja di Netscape pada tahun 1995.

## Hello World ##
console.log ("Hello World")

## Javascript Variable ##
- let (mutable)
  Variabel let bersifat block-scoped, artinya hanya berlaku di dalam blok tempat ia dideklarasikan. Variabel let juga memungkinkan untuk mengubah nilainya.
- const (immutable)
  Variabel const juga bersifat block-scoped, seperti let, namun nilainya tidak dapat diubah setelah dideklarasikan.
- var (Deprecated)
  Penggunaan var kurang disarankan karena :
  1. Variabel var bersifat function-scoped, artinya hanya berlaku di dalam blok fungsi tempat ia dideklarasikan. Ini dapat menyebabkan kebingungan dalam lingkup variabel di dalam blok kode yang lebih besar, terutama jika variabel dideklarasikan di dalam blok if/else atau loop.

  2. Variabel var cenderung lebih rentan terhadap kebocoran variabel (variable hoisting) karena variabel var akan diangkat ke bagian atas lingkup fungsinya saat program dieksekusi. Hal ini dapat menyebabkan kesalahan program yang sulit dilacak.

  3. Variabel var dapat dideklarasikan kembali (re-declared) dalam satu blok fungsi, yang dapat menyebabkan masalah yang sama dengan variable hoisting.

## Scoping ##
merupakan ruang lingkup variabel yang dideklarasikan dan dikendalikan oleh lokasi deklarasi variabel.
- Global Scoping: didefinikan di luar function, sehinga dapat diakses dari seluruh kode.
- Block Scoping: didefinisikan dalam sebuah blok kode sehingga hanya bisa diakses dalam blok kode tersebut.

## Hoisting ##
merupakan variabel atau fungsi yang dapat digunakan dalam kode sebelum di deklarasikan.
- var dan function adalah hoisted, bisa digunakan sebelum di deklarasi.
- let dan const tidak hoisted, tidak dapat digunakan sebelum deklarasi.

## Primitives and Objects
- primitive adlaah pemrograman unit proses terkecil dan  elemen sederhana yang tersedia dalam bahasa pemrograman. contoh : String, boolean, number, bigInt, null, undefined
- objects adalah unit penyimpanan properti dan fungsi. contoh: object, array, function, date, set, map.
