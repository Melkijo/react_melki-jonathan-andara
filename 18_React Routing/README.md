# (18) React_Routing #
Router merupakan modul react yang berfungsi untuk melakukan navigasi pada SPA (single page application)
## Multi Page Application (MPA) VS Single App Application ##
### Multi Page Application ###
disebut juga tradisionla web app adlaah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru 
### SPA ###
jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

## Component Penting ##
```javascript
<BrowserRouter>
<Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
</BrowserRouter>
```
BrowserRouter : digunakan sebagai router yang dapat menggunakan location untuk sinkronkan UI dengan URL.
Route: digunakan sebagai pengarah jalan lau lintas web
Switch : digunakan untuk membungkus beberapa component route
Link : Digunakan untuk berpindah antar halaman
Exact : untuk memastika route hanya me-render component yang memilik path yang cocok
