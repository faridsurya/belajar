# Modul Pertemuan 1: Pengenalan Web Development

Durasi: 1 Pertemuan

### **Tujuan Pembelajaran**

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

* **Menjelaskan** sejarah dan evolusi World Wide Web.  
* **Memahami** arsitektur dasar *client-server* dan perannya dalam web.  
* **Mengidentifikasi** secara konkret peran HTML, CSS, dan JavaScript.  
* **Menggunakan** alat-alat pengembangan dasar (*text editor* dan *browser developer tools*).  
* **Menganalisis** fungsionalitas dan teknologi yang digunakan pada website populer.

### **Materi: Fondasi Dasar Teknologi Web**

#### **Sejarah Singkat dan Evolusi Web**

World Wide Web (WWW) diciptakan oleh Sir Tim Berners-Lee pada tahun 1989 di CERN. Awalnya, web hanyalah sistem untuk berbagi dokumen ilmiah statis melalui *hyperlink* (disebut **Web 1.0**). Seiring berjalannya waktu, web berevolusi menjadi platform yang lebih interaktif, di mana pengguna tidak hanya mengonsumsi tetapi juga menghasilkan konten (seperti blog, media sosial). Era ini dikenal sebagai **Web 2.0**. Saat ini, web terus berkembang menuju web semantik dan terdesentralisasi (**Web 3.0**).

**Referensi Tambahan:** Untuk sejarah yang lebih mendalam, Anda bisa membaca artikel di [MDN Web Docs: A brief history of the web](https://www.google.com/search?q=https://developer.mozilla.org/en-US/docs/Glossary/Web).

#### **Arsitektur Client-Server**

Ini adalah model dasar bagaimana web bekerja. Bayangkan sebuah restoran:

* **Anda (Client)**: Mengajukan permintaan (*request*) kepada pelayan, misalnya, "Saya ingin menu."  
* **Pelayan (Protokol HTTP)**: Mengantarkan permintaan Anda ke dapur.  
* **Dapur (Server)**: Menyiapkan dan mengirimkan pesanan (*response*) kembali kepada Anda.

Dalam konteks web:

* **Client**: Perangkat Anda (komputer, *smartphone*) dan *browser* yang Anda gunakan (Chrome, Firefox).  
* **Server**: Komputer bertenaga tinggi yang menyimpan semua file website dan data.  
* **Protokol HTTP/HTTPS**: Aturan komunikasi yang digunakan oleh *client* dan *server* untuk saling bertukar data.

Ketika Anda mengetik https://www.google.com di browser, Anda (sebagai *client*) mengirimkan permintaan ke server Google. Server memproses permintaan tersebut dan mengirimkan kembali file HTML, CSS, dan JavaScript yang dibutuhkan untuk menampilkan halaman utama Google.

#### **Tiga Pilar Utama: HTML, CSS, dan JavaScript**

Untuk membangun sebuah website, kita menggunakan ketiga bahasa ini. Mereka bekerja sama layaknya kerangka, penampilan, dan fungsionalitas pada tubuh manusia.

* **HTML (HyperText Markup Language)**  
  * **Peran**: Bertanggung jawab untuk **struktur konten** dari halaman web. HTML menentukan elemen-elemen seperti judul, paragraf, daftar, gambar, dan tautan. Tanpa HTML, browser tidak akan tahu bagaimana menyusun konten.  
  * **Contoh Sederhana**: \<h1\>Judul Halaman\</h1\> untuk membuat judul, \<p\>Ini adalah paragraf.\</p\> untuk membuat teks.  
* **CSS (Cascading Style Sheets)**  
  * **Peran**: Bertanggung jawab untuk **tampilan visual**. CSS digunakan untuk mengatur warna, *font*, tata letak, dan responsivitas halaman. CSS memisahkan konten dari presentasi, membuat perubahan desain menjadi lebih mudah.  
  * **Contoh Sederhana**: h1 { color: blue; font-size: 24px; } untuk membuat judul berwarna biru dengan ukuran 24px.  
* **JavaScript**  
  * **Peran**: Bertanggung jawab untuk **interaksi dan fungsionalitas dinamis**. JavaScript membuat halaman web menjadi "hidup". Contohnya adalah validasi formulir, animasi, atau memuat konten baru tanpa harus memuat ulang halaman.  
  * **Contoh Sederhana**: Menggunakan JavaScript untuk membuat pesan muncul saat tombol diklik.

**Referensi Tambahan**: Untuk pemahaman mendalam tentang ketiga bahasa ini, sumber terbaik adalah [MDN Web Docs](https://developer.mozilla.org/en-US/) dan [freeCodeCamp](https://www.freecodecamp.org/learn/).

#### **Alat-Alat Pengembangan**

* **Text Editor**: Anda akan membutuhkan editor kode. Visual Studio Code (VS Code) sangat direkomendasikan karena ringan, gratis, dan memiliki banyak ekstensi yang membantu pengembangan.  
* **Browser Developer Tools**: Fitur bawaan di browser (tekan F12) yang sangat penting. Anda bisa melihat struktur HTML, menginspeksi gaya CSS, dan menguji kode JavaScript di sana.

### **Studi Kasus: Analisis Fungsionalitas Website Populer**

Setiap website yang kita kunjungi adalah studi kasus nyata dari penerapan HTML, CSS, dan JavaScript. Tugas ini akan membantu Anda melihat teori dalam praktik.

#### **Tugas Praktikum**

1. **Pilih Website**: Pilih satu website populer (contoh: situs berita, portal e-commerce) untuk dianalisis.  
2. **Identifikasi Elemen**: Identifikasi elemen-elemen kunci seperti:  
   * **Struktur (HTML)**: Menu navigasi, *header*, *footer*, artikel, atau daftar produk.  
   * **Tampilan (CSS)**: Skema warna, tata letak kolom, atau efek visual pada tombol.  
   * **Interaksi (JavaScript)**: Fitur seperti galeri gambar yang bisa digeser, *form* pencarian yang responsif, atau tombol "Load More".  
3. **Dokumentasikan**: Buat **peta konsep** yang menggambarkan fungsionalitas dan teknologi yang Anda temukan. Inspeksi kode halaman web yang Anda amati, buat korelasi antara tampilan dan kode yang bersesuaian.

#### **Petunjuk Penyelesaian**

1. Buka browser dan kunjungi website pilihan Anda.  
2. Tekan F12 atau klik kanan, lalu pilih **Inspect** untuk membuka **Developer Tools**.  
3. Gunakan tab **Elements** untuk melihat struktur HTML dan **Styles** untuk melihat properti CSS yang diterapkan.  
4. Perhatikan bagaimana setiap elemen diatur dan bagaimana interaksi bekerja. Contoh: Saat mengklik tombol "Like", perhatikan apakah ada perubahan di halaman.  
5. Buat laporan pengamatan sesuai dengan worksheet yang tersedia pada tautan.

#### **Hasil Akhir yang Diharapkan**

Peta konsep yang jelas dan terstruktur yang menunjukkan pemahaman Anda tentang bagaimana ketiga teknologi dasar tersebut bekerja sama untuk membangun sebuah website yang fungsional. Anda dapat mempresentasikan hasil peta konsep ini pada pertemuan berikutnya untuk berdiskusi.

**Worksheets:**

1. Laporan pengamatan elemen-elemen website.

