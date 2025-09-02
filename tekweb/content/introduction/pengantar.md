# Pengantar Teknologi Website



## Terminologi Penting

| Terminologi                       | Deskripsi                                                    |
| --------------------------------- | ------------------------------------------------------------ |
| Web page                          | Sebuah dokumen yang dapat ditampilkan dalam sebuah web browser seperti Firefox, Google Chrome, Opera, Microsoft Internet Explorer atau Edge, atau Safari Apple. Ini juga sering disebut dengan istilah "halaman" atau "laman". |
| Web Site                          | Kumpulan halaman web yang dikelompokkan secara bersama dan biasanya dihubungkan dengan sebuah mekanisme navigasi. Istilah web site juga sering disebut "situs web" atau hanya "situs". |
| HTML (Hypertext Markup Language)  | Kodifikasi yang memiliki struktur khusus dan digunakan untuk menampilkan dokumen pada halaman web. |
| Web Server                        | Komputer dengan kemampuan khusus yang menyediakan dokumen-dokumen dan terhubung jaringan internet sehingga dokumen-dokumen tersebut dapat diakses melalui komputer lain yang terhubung dalam jaringan internet. |
| Web Browser                       | Perangkat lunak komputer yang digunakan untuk mengakses halaman web. |
| URL (*Uniform Resource Locator* ) | Rangkaian karakter yang menunjukkan alamat sebuah halaman web pada internet. |
| Protocol                          | Seperangkat peraturan atau prosedur untuk mengirimkan data antara perangkat elektronik (misal komputer) |
| Internet Protocol (IP) Add        | Label numerik (misalnya 192.0.2.1) yang terhubung ke jaringan komputer yang menggunakan Protokol Internet untuk komunikasi. Alamat IP melayani dua fungsi utama yaitu identifikasi antarmuka jaringan dan pengalamatan lokasi. |
| HTTP                              | *Hypertext Transfer Protocol*. Merupakan protokol pada lapisan aplikasi untuk sistem informasi hypermedia yang terdistribusi dan kolaboratif. HTTP adalah dasar komunikasi data untuk [World Wide Web](https://id.wikipedia.org/wiki/World_Wide_Web) (www). |
| API                               | *Application Programming Interface*, sebuan antarmuka yang dapat menghubungkan aplikasi satu dengan aplikasi lainnya melalui skema pemrogramman tertentu misalnya OOP (Object Oriented Programming). Pada pengembangan aplikasi sistem informasi API digunakan sebagai komunikasi data antara aplikasi sisi klien dan database pada sisi server. |

## Bagaimana Aplikasi Web Berjalan?

![](/tekweb/images/img_0_1.png)

Gambar di atas menunjukkan skema teknologi web. Terdapat tiga komponen utama yaitu klien, jaringan, dan web server. Klien melakukan permintaan data melalui sebuah domain atau alamat IP yang mengarahkan pada sebuah halaman pada server. Jika alamat tersebut terhubung internet dan data tersedia maka server mengirimkan respon berupa dokumen kepada klien. Dokumen tersebut dapat berupa dokumen HTML, image, XML, JSON, dan beberapa dokumen lain yang dapat ditransmisikan melalui jaringan internet.

 ![](/tekweb/images/img_0_2.png)



Gambar di atas menunjukkan ilustrasi tentang bagaimana teknologi web berjalan. Orang yang melakukan pesanan diibaratkan sebagai web browser, kurir diibaratkan sebagai jaringan internet, dan toko sebagai web server. Data yang dikirimkan dari klien ke server (request) atau dari server ke klien (response), pada ilustrasi di atas, digambarkan dengan barang-barang yang dibawa oleh kurir.

## Apa itu Client-Side Programming dan Server-Side Programming

Dalam pengembangan web terdapat dua terminologi yaitu client-side dan server-side programming. Dua istilah tersebut mengacu pada dimana program dieksekusi. 

### Client Side Programming

Client Side Programming mengacu pada eksekusi script yang dilakukan pada sisi klien misalnya pada web browser. Bahasa pemrograman untuk sisi klien diantaranya adalah HTML, CSS, dan Javascript. Karena bahasa tersebut berjalan pada sisi klien maka jika kita membuat sebuah dokumen HTML (didalamnya juga dapat memuat CSS dan Javascript) maka dokuemen tersebut dapat dieksekusi pada web browser tanpa memerlukan server untuk menjalankannya.

### Server Side Programming

Server side programming mengacu pada eksekusi script yang dilakukan pada sisi server. Bahasa pemgrograman web tipe ini memerlukan service pada mesin komputer yang mengeksekusi program tersebut. Bahasa pemrograman sisi server yang biasa digunakan untuk pengembangan web misalnya PHP, Python, dan ASP.

Anda akan dapat mempelajari dengan lebih detail mengenai hal ini pada bagian Front End Web Development dan Back End Web Development.



## Bagaimana Memulai Belajar Pengembangan Web?

Pekerjaan untuk membuat sebuah situs web profesional adalah pekerjaan yang sangat banyak dan kompleks. Oleh sebab itu mulailah dari hal yang kecil. Anda tidak dapat langsung membuat situs web seperti facebook atau twitter, tapi mulailah dengan membuat situs web untuk memecahkan persoalan kecil yang Anda alami. Mulailah dari hal itu!

### Persyaratan Perangkat

Perangkat komputer sangat menentukan dalam belajar pengembangan web. Anda perlu memeriksa spesifikasi perangkat Anda untuk memastikan bahwa perangkat Anda mendukung untuk melakukan pengembangan. Sebagai pedoman, Anda dapat memeriksa persyaratan perangkat yang mendukung untuk memasang dan menjalankan beberapa alat pengembangan seperti VS Code, XAMPP, dan NodeJS. Pada masing-masing perangkat lunak tersebut sudah dijelaskan spesifikasi komputer yang mendukung. Periksalah!

### Memasang Alat Pengembangan Web

Hal pertama yang harus Anda lakukan adalam menyiapkan alat pengembangan web. Ada banyak sekali pilihan alat pengembangan yang dapat Anda gunakan. Tapi Anda dapat memulai dengan memasang beberapa alat berikut ini, yang sering digunakan oleh para pengembang web untuk bekerja:

- [VS Code](https://code.visualstudio.com/download) untuk menulis kode-kode program.
- [XAMPP](https://www.apachefriends.org/download.html) berisi apache untuk penyedia server, untuk database, dan PHP untuk bahasa pemrograman server side.
- [NodeJS](https://nodejs.org/en/) untuk belajar pembuatan API, membuat aplikasi client side menggunakan Angular, React, atau Vue.
- NPM (Node Package Manager) atau yarn untuk manajemen pengelolaan paket sumber daya pengembangan berbasis javascript. Alat tersebut sangat berguna untuk melakukan pemasangan sumber daya pendukung pengembangan web. NPM biasanya sudah terinstall satu paket dengan nodeJS.
- Web browser (Chrome, Mozilla Firefox, Edge, Opera, Safari) untuk menjalankan aplikasi.

### Mempelajari Sistem Kontrol Versi Terdistribusi

Sistem kontrol versi terdistribusi digunakan untuk melakukan manajemen repositori. Repositori ada sebuah paket file yang berisi file-file proyek yang mendukung berjalannya sebuah aplikasi. Sumber terbuka (open source) untuk alat tersebut adalah git. Beberapa pengembang membuat produk berbasis git untuk memberikan layanan kontrol versi yang mudah digunakan, misalnya:

- [Github](https://github.com)
- [Gitlab](https://gitlab.com)
- BitBucket
- SourceForge

?> Demonstrasi pada materi pengembangan web ini menggunakan github, oleh sebab itu disarankan Anda mempelajari bagaimana mengelola repositori dan membuat halaman menggunakan github. Jangan khawatir, Anda akan diberikan panduan untuk melakukan itu.

## *Upskill 1*

Lakukan pemasangan perangkat lunak pada komputer Anda untuk mendukung latihan pengembangan aplikasi web, diantaranya:
- VsCode
- XAMPP
- NodeJS dan NPM
- Gitbash (Jika menggunakan Sistem Operasi Windows)
- Chrome Web Browser
