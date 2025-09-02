# **Modul Pertemuan 2: HTML Dasar**

#### **Durasi: 1 Pertemuan**

### **Tujuan Pembelajaran**

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

* Memahami dan menjelaskan peran dasar HTML dalam struktur halaman web.  
* Mengenali dan menggunakan tag-tag HTML dasar untuk membuat konten.  
* Membangun struktur dasar dokumen HTML yang benar.  
* Membuat halaman web statis sederhana dengan elemen-elemen HTML.


###  HTML

HTML (Hypertext Markup Language) adalah bahasa markup yang digunakan untuk membuat dan memformat halaman web. HTML memungkinkan pengguna untuk menambahkan teks, gambar, audio, video, dan konten lainnya ke halaman web. HTML juga digunakan untuk membuat tautan atau hyperlink yang menghubungkan halaman web satu dengan yang lain.

HTML bekerja dengan menggunakan tag dan atribut yang menunjukkan struktur dan tata letak halaman web. Tag HTML digunakan untuk membuat elemen pada halaman web seperti heading, paragraph, image, link, dan lainnya. Atribut HTML digunakan untuk memberikan informasi tambahan pada elemen HTML, seperti ukuran, warna, dan lain sebagainya.

Halaman web yang dibuat menggunakan HTML biasanya disimpan dengan ekstensi file .html atau .htm dan dapat diakses melalui browser web. Browser web akan menginterpretasikan kode HTML dan menampilkan halaman web dengan tampilan yang sesuai dengan kode HTML yang ditulis.

HTML terus berkembang seiring waktu dan terus mengalami perubahan dan perbaikan melalui versi yang berbeda-beda. Saat ini, versi terbaru HTML adalah HTML5, yang memiliki banyak fitur baru dan lebih baik dalam mendukung desain web responsif dan pengembangan aplikasi web yang lebih kompleks.

Berikut ini adalah topik-topik penting dalam mempelajari HTML:

#### Struktur Dasar HTML 

Struktur dasar HTML adalah kerangka utama yang digunakan untuk membuat halaman web dengan HTML. Struktur dasar HTML terdiri dari beberapa elemen utama, yaitu tag HTML, tag head, dan tag body. Berikut adalah deskripsi dan contoh tentang struktur dasar HTML:

##### Tag HTML 

Tag HTML adalah tag yang digunakan untuk memberitahu browser bahwa halaman web yang dibuat menggunakan bahasa markup HTML. Tag HTML biasanya ditempatkan di awal dan akhir halaman web. Berikut adalah contoh tag HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Judul Halaman Web</title>
  </head>
  <body>
    <h1>Heading Utama</h1>
    <p>Ini adalah paragraf pertama.</p>
  </body>
</html>
```

##### Tag Head 

Tag head digunakan untuk menyimpan informasi tentang halaman web, seperti judul halaman, meta tag, dan file CSS. Tag head biasanya ditempatkan di antara tag HTML dan tag body. Berikut adalah contoh tag head:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Judul Halaman Web</title>
    <meta name="description" content="Ini adalah deskripsi halaman web." />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Heading Utama</h1>
    <p>Ini adalah paragraf pertama.</p>
  </body>
</html>
```

##### Tag Body 

Tag body digunakan untuk menempatkan elemen HTML yang akan ditampilkan pada halaman web. Elemen HTML yang sering digunakan dalam tag body antara lain heading, paragraph, list, image, dan link. Berikut adalah contoh tag body:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Judul Halaman Web</title>
  </head>
  <body>
    <h1>Heading Utama</h1>
    <p>Ini adalah paragraf pertama.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <img src="gambar.jpg" alt="Ini adalah gambar." />
    <a href="https://www.contoh.com">Ini adalah link.</a>
  </body>
</html>
```

Dalam contoh di atas, tag HTML berfungsi sebagai pembuka dan penutup halaman web, tag head menyimpan informasi tentang halaman web, dan tag body menyimpan elemen HTML yang akan ditampilkan pada halaman web, seperti heading, paragraph, list, image, dan link. Struktur dasar HTML ini dapat diubah dan disesuaikan dengan kebutuhan pengguna.

##### Tabel HTML 

Tag table pada HTML digunakan untuk membuat tabel atau grid data di halaman web. Tabel HTML terdiri dari baris dan kolom, dan setiap sel dapat berisi teks, gambar, link, dan elemen HTML lainnya. Tabel HTML dapat digunakan untuk menampilkan data dalam bentuk yang terstruktur dan mudah dibaca oleh pengguna.

Berikut ini adalah contoh tag table beserta atribut yang sering digunakan pada HTML:

```html
<table border="1">
  <caption>Judul Tabel</caption>
  <thead>
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>Alamat</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John Doe</td>
      <td>Jakarta</td>
      <td>john.doe@example.com</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jane Smith</td>
      <td>Bandung</td>
      <td>jane.smith@example.com</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Bob Johnson</td>
      <td>Surabaya</td>
      <td>bob.johnson@example.com</td>
    </tr>
  </tbody>
</table>
```

Penjelasan:

- Tag table: Tag utama untuk membuat tabel HTML
- Atribut border: Digunakan untuk menentukan ukuran garis pembatas tabel. Nilai atributnya bisa diisi dengan angka untuk menentukan ukuran garis.
- Tag caption: Digunakan untuk memberikan judul atau deskripsi singkat tentang tabel.
- Tag thead: Digunakan untuk membuat bagian header tabel.
- Tag tr: Digunakan untuk membuat baris dalam tabel.
- Tag th: Digunakan untuk membuat sel header tabel. Biasanya digunakan untuk menampilkan judul kolom atau header tabel.
- Tag tbody: Digunakan untuk membuat bagian body tabel.
- Tag td: Digunakan untuk membuat sel data dalam tabel.

Dalam contoh di atas, tag table digunakan untuk membuat tabel dengan border ukuran 1. Tag caption digunakan untuk memberikan judul pada tabel. Tag thead digunakan untuk membuat header tabel dengan kolom No, Nama, Alamat, dan Email. Tag tbody digunakan untuk membuat body tabel dengan tiga baris data. Setiap baris memiliki empat sel yang masing-masing berisi nomor, nama, alamat, dan email. Sel header tabel dibuat dengan tag th, sedangkan sel data dibuat dengan tag td.

Hasil dari kode di atas adalah tabel dengan tampilan sebagai berikut:

| No   | Nama        | Alamat   | Email                                                     |
| ---- | ----------- | -------- | --------------------------------------------------------- |
| 1    | John Doe    | Jakarta  | [john.doe@example.com](mailto:john.doe@example.com)       |
| 2    | Jane Smith  | Bandung  | [jane.smith@example.com](mailto:jane.smith@example.com)   |
| 3    | Bob Johnson | Surabaya | [bob.johnson@example.com](mailto:bob.johnson@example.com) |

##### Form HTML 

Tag form pada HTML digunakan untuk membuat formulir atau input data pada halaman web. Formulir HTML biasanya terdiri dari beberapa elemen seperti teks input, kotak centang, tombol radio, tombol kirim, dan sebagainya. Penggunaan formulir pada halaman web memungkinkan pengguna untuk memasukkan data dan mengirimkannya ke server untuk diproses.

Berikut ini adalah contoh penggunaan tag form pada HTML:

```html
<form action="proses.php" method="post">
  <label for="nama">Nama:</label>
  <input type="text" id="nama" name="nama"><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br>

  <label for="pesan">Pesan:</label>
  <textarea id="pesan" name="pesan"></textarea><br>

  <input type="submit" value="Kirim">
  <input type="reset" value="Batal">
</form>
```

Penjelasan:

- Tag form: Digunakan untuk membuat formulir pada halaman web.
- Atribut action: Menentukan alamat URL atau file script untuk memproses data formulir yang dikirim oleh pengguna.
- Atribut method: Menentukan metode pengiriman data formulir ke server. Dalam contoh ini, metode yang digunakan adalah "post".
- Tag label: Digunakan untuk memberikan label atau judul pada elemen formulir. Atribut "for" pada tag label mengacu pada atribut "id" pada elemen input yang terkait.
- Tag input: Digunakan untuk membuat elemen input dalam formulir. Atribut "type" menentukan jenis input seperti teks, email, atau password. Atribut "name" menentukan nama variabel untuk data input. Atribut "id" digunakan untuk menghubungkan elemen input dengan tag label terkait.
- Tag textarea: Digunakan untuk membuat area teks dalam formulir.
- Tag input type="submit": Digunakan untuk membuat tombol kirim formulir.
- Tag input type="reset": Digunakan untuk membuat tombol batal atau menghapus data yang telah dimasukkan.

Dalam contoh di atas, form dibuat untuk mengumpulkan data seperti nama, email, dan pesan dari pengguna. Setiap elemen input atau teks area diberi label dengan tag label agar mudah dibaca oleh pengguna. Setelah data diisi, pengguna dapat menekan tombol "Kirim" untuk mengirim data ke server atau tombol "Batal" untuk menghapus data yang telah dimasukkan.

Setelah data formulir dikirim ke server, data tersebut dapat diproses oleh server dan menghasilkan respon seperti mengirim email, menyimpan data ke database, atau mengirim data ke halaman web lainnya.

##### Hyperlink HTML 

Hyperlink pada HTML adalah tautan yang menghubungkan halaman web dengan halaman web lain atau dengan bagian-bagian tertentu pada halaman yang sama. Hyperlink biasanya berupa teks atau gambar yang dapat diklik oleh pengguna untuk membuka halaman web baru atau bagian yang dituju.

Berikut ini adalah contoh penggunaan hyperlink pada HTML:

```html
<a href="https://www.google.com">Google</a>
```

Penjelasan:

- Tag a: Digunakan untuk membuat hyperlink pada halaman web.
- Atribut href: Menentukan alamat URL atau lokasi halaman web yang akan dibuka ketika hyperlink diklik oleh pengguna. Dalam contoh ini, URL yang digunakan adalah [https://www.google.com](https://www.google.com/).
- Konten hyperlink: Konten yang berada di dalam tag a akan muncul sebagai teks yang dapat diklik oleh pengguna. Dalam contoh ini, konten yang digunakan adalah "Google".

Selain menggunakan URL untuk menentukan halaman web yang akan dibuka, hyperlink juga dapat digunakan untuk menghubungkan halaman web dengan bagian-bagian tertentu pada halaman yang sama menggunakan atribut "id". Berikut ini adalah contoh penggunaan hyperlink untuk menghubungkan halaman web dengan bagian-bagian tertentu pada halaman yang sama:

```html
<a href="#about">Tentang Kami</a>

<h2 id="about">Tentang Kami</h2>
<p>Kami adalah perusahaan yang bergerak di bidang teknologi informasi.</p>
```

Penjelasan:

- Atribut href: Menentukan id elemen pada halaman yang dituju. Dalam contoh ini, id yang digunakan adalah "about".
- Konten hyperlink: Konten yang berada di dalam tag a akan muncul sebagai teks yang dapat diklik oleh pengguna. Dalam contoh ini, konten yang digunakan adalah "Tentang Kami".
- Tag h2 dan p: Digunakan untuk membuat judul dan paragraf pada halaman web. Atribut "id" pada tag h2 menentukan id elemen yang dituju oleh hyperlink.

Dalam contoh di atas, hyperlink "Tentang Kami" akan mengarahkan pengguna ke bagian halaman yang memiliki id "about", yaitu judul "Tentang Kami" dan paragraf yang mengikuti. Hal ini memungkinkan pengguna untuk menavigasi halaman web secara lebih mudah dan cepat.

##### Gambar HTML

Tag img pada HTML digunakan untuk menampilkan gambar atau grafik pada halaman web. Berikut ini adalah penjelasan dan cara penggunaan tag img pada HTML:

```html
<img src="url_gambar" alt="teks_alternatif">
```

- Tag img: digunakan untuk menandai gambar atau grafik pada halaman web.
- Atribut src: menentukan URL atau lokasi gambar yang akan ditampilkan pada halaman web. Atribut ini wajib ada pada tag img.
- Atribut alt: menentukan teks alternatif yang akan ditampilkan jika gambar gagal dimuat atau tidak tersedia. Atribut ini bersifat opsional, tetapi disarankan untuk ditambahkan untuk meningkatkan aksesibilitas halaman web.

Contoh penggunaan tag img pada HTML:

```html
<img src="https://picsum.photos/200" alt="Gambar acak">
```

Penjelasan:

- Atribut src: digunakan untuk menentukan URL atau lokasi gambar yang akan ditampilkan pada halaman web. Dalam contoh ini, URL yang digunakan adalah https://picsum.photos/200. Ini adalah layanan yang menyediakan gambar acak dengan ukuran yang ditentukan.
- Atribut alt: digunakan untuk menentukan teks alternatif yang akan ditampilkan jika gambar gagal dimuat atau tidak tersedia. Dalam contoh ini, teks alternatif yang digunakan adalah "Gambar acak".

Tag img juga dapat memiliki beberapa atribut lainnya seperti width, height, dan style. Atribut width dan height digunakan untuk menentukan ukuran gambar, sedangkan atribut style digunakan untuk menentukan gaya tampilan gambar seperti warna dan border.

Contoh penggunaan tag img dengan atribut width, height, dan style:

```html
<img src="https://picsum.photos/200" alt="Gambar acak" width="200" height="200" style="border: 1px solid black;">
```

Penjelasan:

- Atribut width: digunakan untuk menentukan lebar gambar. Dalam contoh ini, lebar gambar ditentukan sebesar 200 piksel.
- Atribut height: digunakan untuk menentukan tinggi gambar. Dalam contoh ini, tinggi gambar ditentukan sebesar 200 piksel.
- Atribut style: digunakan untuk menentukan gaya tampilan gambar. Dalam contoh ini, gambar diberi border sebesar 1 piksel dengan warna hitam.

##### Multimedia HTML 

Multimedia pada HTML merujuk pada elemen-elemen yang digunakan untuk menampilkan konten yang kaya visual dan audio seperti audio, video, dan animasi. Berikut ini adalah penjelasan dan contoh multimedia pada HTML:

##### Tag audio

Tag audio pada HTML digunakan untuk menambahkan file audio pada halaman web. Berikut ini adalah contoh penggunaan tag audio pada HTML:

```html
<audio src="lagu.mp3" controls>
  Your browser does not support the audio element.
</audio>
```

- Tag audio: digunakan untuk menandai elemen audio pada halaman web.
- Atribut src: menentukan URL atau lokasi file audio yang akan ditampilkan pada halaman web.
- Atribut controls: menampilkan kontrol audio standar seperti tombol play, pause, dan volume. Atribut ini bersifat opsional.
- Konten alternatif: ditampilkan jika browser tidak mendukung tag audio.

##### Tag video

Tag video pada HTML digunakan untuk menambahkan file video pada halaman web. Berikut ini adalah contoh penggunaan tag video pada HTML:

```html
<video src="video.mp4" controls width="320" height="240">
  Your browser does not support the video tag.
</video>
```

- Tag video: digunakan untuk menandai elemen video pada halaman web.
- Atribut src: menentukan URL atau lokasi file video yang akan ditampilkan pada halaman web.
- Atribut controls: menampilkan kontrol video standar seperti tombol play, pause, dan volume. Atribut ini bersifat opsional.
- Atribut width dan height: menentukan ukuran video yang ditampilkan pada halaman web.
- Konten alternatif: ditampilkan jika browser tidak mendukung tag video.

##### Tag canvas

Tag canvas pada HTML digunakan untuk membuat gambar atau animasi menggunakan JavaScript. Berikut ini adalah contoh penggunaan tag canvas pada HTML:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

- Tag canvas: digunakan untuk menandai area gambar atau animasi pada halaman web.
- Atribut id: menentukan ID unik untuk elemen canvas.
- Atribut width dan height: menentukan ukuran elemen canvas.

##### Tag iframe

Tag iframe pada HTML digunakan untuk menampilkan halaman web atau dokumen HTML lainnya di dalam halaman web yang sedang dibuka. Berikut ini adalah contoh penggunaan tag iframe pada HTML:

```html
<iframe src="https://www.google.com/" width="500" height="500"></iframe>
```

- Tag iframe: digunakan untuk menandai area yang menampilkan halaman web atau dokumen HTML lainnya.
- Atribut src: menentukan URL atau lokasi halaman web atau dokumen HTML lainnya yang akan ditampilkan pada area iframe.
- Atribut width dan height: menentukan ukuran area iframe.

##### Tag svg

SVG atau Scalable Vector Graphics adalah format gambar berbasis vektor yang digunakan untuk membuat grafik dan animasi dengan kualitas yang tinggi dan dapat diubah ukuran tanpa kehilangan kualitas. SVG dapat digunakan pada HTML menggunakan tag `<svg>`.

Berikut ini adalah penjelasan dan contoh tag SVG pada HTML:

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

- Tag `<svg>`: digunakan untuk menandai area gambar SVG pada halaman web.
- Atribut `width` dan `height`: menentukan ukuran area SVG.
- Tag `<circle>`: digunakan untuk menandai bentuk lingkaran pada gambar SVG.
- Atribut `cx` dan `cy`: menentukan koordinat pusat lingkaran.
- Atribut `r`: menentukan radius lingkaran.
- Atribut `stroke`: menentukan warna garis pinggir lingkaran.
- Atribut `stroke-width`: menentukan lebar garis pinggir lingkaran.
- Atribut `fill`: menentukan warna isi lingkaran.

Contoh di atas akan menampilkan lingkaran berwarna merah dengan garis pinggir hitam pada area gambar SVG berukuran 100 x 100 piksel.

SVG pada HTML dapat digunakan untuk membuat berbagai macam bentuk seperti garis, kotak, poligon, dan lain sebagainya. SVG juga mendukung animasi dengan menggunakan tag `<animate>`. Dengan SVG, kita dapat membuat grafik dan animasi dengan kualitas yang tinggi dan interaktif pada halaman web.


#### Latihan Interaktif 1

Edit baris di bawah ini dengan menekan tombol *Edit on codepen* untuk mencoba elemen-elemen HTML lainnya sepert `<em>`, `<b>`, `<small>`, `<span>`, atau `<div>`. 

[basic_html](https://codepen.io/faridsurya-uad/embed/OJzyPKo ':include :type=iframe width=100% height=400px')


### Metadata dalam HTML

Metadata dokumen HTML adalah bagian yang tidak ditampilkan di browser web saat halaman dimuat. Bagian tersebut berisi informasi seperti halaman `<title>`, tautan ke file CSS , tautan ke favicon khusus, dan metadata lainnya.

#### Apa itu bagian `<head>` dalam HTML?

Bagian head dalam HTML adalah bagian yang tidak ditampilkan pada halaman web. Bagian itu digunakan untuk melampirkan metadata. 

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

Bagian `<head>` pada kode HTML di atas memuat elemen `<meta>` dan `<title>`. Selain elemen tersebut, elemen lain seperti elemen untuk melampirkan file css dan javascript juga dituliskan pada bagian `<head>`. Pada aplikasi web yang kompleks, bagian `<head>` mungkin akan memuat banyak elemen.

#### Metadata untuk Platform Media Sosial

Berikut ini adalah contoh metadata yang diletakkan pada bagian `<head>` agar website dapat ditangkap oleh platform media sosial seperti facebook:

```html
<meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
<meta property="og:type"               content="article" />
<meta property="og:title"              content="When Great Minds Don’t Think Alike" />
<meta property="og:description"        content="How much does culture influence creative thinking?" />
<meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
```

Sebagian besar konten dibagikan ke Facebook melalui URL. Agar konten web muncul di Facebook maka pada halaman web harus ditandai dengan Open Graph. Pada kode HTML Open Graph ditandai dengan `og`. Kode di atas adalah contoh Open Graph yang dilampirkan pada bagian `head`. Penampilan web yang diberikan metadata seperti di atas akan terlihat seperti pada gambar berikut:

![](../../../tekweb/images/10956906_396737803821010_168799778_n.png)

Tanpa tag Open Graph ini, Facebook menggunakan cara internal untuk membuat perkiraan terbaik tentang judul, deskripsi, dan gambar pratinjau untuk konten Anda. Tentukan info ini secara jelas menggunakan tag Open Graph untuk memastikan postingan web tampil secara sempurna di Facebook.

### **Studi Kasus: Membuat Halaman Web Pribadi**

Pada pertemuan ini, Anda akan menerapkan pengetahuan HTML dasar untuk membuat halaman web pribadi sederhana. Halaman ini akan berisi informasi tentang diri Anda, hobi, dan tautan media sosial.

### **Petunjuk Praktikum**

1. Buka *text editor* Anda (misalnya VS Code).  
2. Buat file baru dan simpan dengan nama index.html.  
3. Tuliskan struktur dasar dokumen HTML seperti yang sudah dijelaskan di atas.  
4. Di dalam tag \<body\>, buatlah:  
   * Sebuah judul utama menggunakan tag \<h1\> berisi nama Anda.  
   * Sebuah sub-judul menggunakan tag \<h2\> berisi profesi atau deskripsi singkat Anda.  
   * Satu atau dua paragraf menggunakan tag \<p\> yang menceritakan tentang diri Anda.  
   * Daftar hobi atau keahlian menggunakan tag \<ul\> atau \<ol\>.  
   * Tambahkan foto profil Anda menggunakan tag \<img\>. Pastikan Anda memiliki URL atau file gambar yang benar.  
   * Tambahkan tautan ke salah satu profil media sosial Anda menggunakan tag \<a\>.  
5. Setelah selesai, simpan file index.html.  
6. Buka file tersebut di browser Anda untuk melihat hasilnya.

### **Hasil Akhir yang Diharapkan**

Sebuah halaman web statis yang menampilkan informasi pribadi Anda, terstruktur dengan baik menggunakan tag-tag HTML yang sudah dipelajari.

### **Petunjuk Pengumpulan Tugas**

Untuk mengumpulkan tugas, ikuti langkah-langkah berikut:

1. Buat repositori pribadi di GitLab dengan nama pertemuan-2-html-dasar.  
2. *Push* (unggah) seluruh file tugas Anda (index.html dan gambar jika ada) ke repositori tersebut.  
3. Pastikan repositori Anda **bersifat privat** dan hanya bisa diakses oleh Anda.  
4. Berikan akses Reporter kepada dosen Anda di repositori tersebut.  
5. *Link* repositori GitLab tersebut akan dimasukkan ke dalam *worksheet* Anda.
