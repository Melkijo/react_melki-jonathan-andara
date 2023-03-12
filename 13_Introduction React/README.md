# (13) Introduction React #
React adalah library javscript yang digunakan untuk membuat tampilan atau user interface (UI) yang interaktif dan cepat pada sebuat web ataupun mobile, react adalah open source yang dibuat dan di-maintain oleh Facebook.
## Kenapa React? ##
1. Kinerja yang cepat dan responsif <br>
React menggunakan Virtual DOM (VDOM), sebuah konsep dimana ketika ada perubahan pada UI, React akan membandingkan VDOM dengan DOM di browser dan melakukan perubahan hanya pada bagian yang memiliki perbedaan. hal ini membuat React menjadi lebih cepat dan resposif karena tidak perlu untuk melakukan re-render pada setiap component yang ada.
2. Komunitas yang besar <br>
React memiliki komunitas yang besar dan aktif, yang terus memperbaharui dan meningkatkan library ini. membuat React menjadi salah satu library paling populer yang digunakna untuk pengembangan website
3. Memungkinkan Pengembangan web berskala besar <br>
 React menyedikana arsitektur yang memungkinkan pengembangan untuk mengembangkam aplikasi web yang berskala besar dengan mudan dan efisien, React memisahkan antara UI dan logika bisnis (business logic), sehingga memungkinkan pengembang untuk fokus pada setiap bagian aplikasi secara terpisah. Contoh beberapa perusahana yang mengunakan react : Facebook, Netflix, Uber, Redit dll.
 
 ## Create React App (CRA) VS Vite ##
 Create React App dan Vite adalah dua alat pengembangan (development tools) yang dapat digunakan untuk mempermudah pengembangan aplikasi web dengan menggunakan React. <br>
 ### Creat React App (CRA) ###
 adalah alat pengembangan yang disediakan oleh tim pengembang React untuk memudahkan pengembangan aplikasi React tanpa harus melakukan konfigurasi awal secara manual. Dengan Create React App, pengembang dapat memulai proyek React mereka dengan cepat dan mudah tanpa harus memikirkan tentang konfigurasi awal. Create React App telah dikonfigurasi secara default untuk pengembangan aplikasi React, dan dapat disesuaikan jika diperlukan. <br>
 Cara Konfigurasi :
```
$ npx create-react-app my-app
$ cd my-app
$ npm start
```
### Vite ###
Vite adalah alat pengembangan yang baru dan cepat untuk membangun aplikasi web dengan menggunakan teknologi modern. Vite menyediakan pengalaman pengembangan yang cepat dan ringan dengan menggunakan fitur-fitur seperti hot module replacement (HMR) dan tree-shaking. Vite juga mendukung pengembangan SSR (server-side rendering) dan memungkinkan pengembang untuk mengatur proyek mereka secara fleksibel dengan menggunakan plugin-plugin yang tersedia. <br>
Cara Konfigurasi :
```
$ npm create vite@latest my-project
$ cd my-project
$ npm install
$ npm run dev
```

