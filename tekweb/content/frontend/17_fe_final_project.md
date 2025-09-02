# **Panduan Proyek Akhir: Aplikasi Next.js**

## Tujuan Proyek

Proyek akhir ini adalah puncak dari seluruh mata kuliah, di mana Anda akan menggabungkan semua konsep yang telah dipelajari untuk membangun sebuah aplikasi web yang fungsional. Tujuan utamanya adalah untuk menunjukkan pemahaman Anda dalam membuat aplikasi dinamis dengan Next.js, mengelola data, dan mengamankan rute.

## Deskripsi Proyek

Anda akan membangun sebuah **aplikasi web full-stack** yang memiliki fitur otentikasi, navigasi dinamis, dan terhubung dengan basis data sungguhan. Anda bisa memilih salah satu ide berikut atau mengajukan ide Anda sendiri:

* **Aplikasi Blog Pribadi**: Menampilkan daftar artikel, halaman detail artikel, dan halaman admin untuk mengelola artikel yang hanya bisa diakses setelah login. Data artikel harus disimpan di database.  
* **Daftar Tugas (To-Do List) Pengguna**: Menampilkan daftar tugas untuk pengguna yang sudah login, dengan kemampuan untuk menambah, mengedit, atau menghapus tugas. Data tugas harus disimpan secara persisten untuk setiap pengguna di database.  
* **Direktori Film Sederhana**: Menampilkan daftar film (dari API publik), halaman detail untuk setiap film, dan halaman admin yang dilindungi untuk menambahkan film baru ke database Anda.

## Fitur dan Konsep Wajib

Proyek Anda **harus** mengimplementasikan semua konsep berikut untuk memenuhi kriteria penilaian:

1. **Next.js sebagai Framework Utama**: Seluruh aplikasi harus dibangun menggunakan Next.js App Router.  
2. **Komponen dan Hooks**:  
   * Menggunakan komponen fungsional React.  
   * Mengelola state menggunakan useState (misalnya untuk form handling).  
   * Menggunakan useEffect untuk efek samping (jika diperlukan pada Client Component).  
3. **Routing Dinamis (Route Params)**:  
   * Terdapat halaman yang menggunakan rute dinamis, seperti /blog/\[slug\] atau /produk/\[id\], untuk menampilkan konten unik berdasarkan URL.  
4. **Otentikasi & Proteksi Rute**:  
   * Implementasi sistem login dan logout menggunakan layanan otentikasi dari platform *serverless* (lihat poin 6).  
   * Terdapat minimal satu halaman yang **hanya bisa diakses** jika pengguna sudah terautentikasi (misalnya: /dashboard atau /admin). Jika pengguna belum login, mereka harus dialihkan ke halaman login.  
5. **Data Fetching**:  
   * Mengambil data dari **database** yang terintegrasi dengan layanan *serverless* yang Anda gunakan.  
   * Data tidak boleh statis atau hanya disimulasikan, tetapi harus dimuat secara dinamis dari database.  
6. **Penggunaan Layanan Serverless Backend**:  
   * Anda **wajib** menggunakan satu platform *Backend as a Service* (BaaS) seperti **Firebase**, **Supabase**, atau **Nhost** sebagai backend aplikasi Anda.  
   * Layanan ini akan digunakan untuk **autentikasi (login/logout)** dan **database (menyimpan dan mengelola data)**.  
   * Langkah ini adalah transisi dari proyek-proyek sebelumnya yang menggunakan localStorage atau data statis, ke aplikasi *full-stack* yang sesungguhnya.

## Petunjuk Pengumpulan

1. Buat folder baru di repositori GitLab Anda dengan nama proyek-akhir.  
2. Salin seluruh folder proyek Next.js Anda ke dalam folder proyek-akhir.  
3. Pastikan file package.json dan semua dependensi terinstal berada di dalam folder proyek Anda.  
4. Perbarui file index.html utama di *root* repositori Anda dengan menambahkan tautan ke folder proyek-akhir.  
5. *Commit* dan *push* seluruh perubahan ke GitLab. Pastikan proyek Anda dapat berjalan dengan baik di lingkungan lokal.

## Rubrik Penilaian Proyek Akhir

Rubrik ini memecah setiap kompetensi proyek menjadi aspek-aspek penilaian yang lebih rinci, lengkap dengan deskripsi kriteria dan skala skor untuk evaluasi yang lebih terperinci.

### **CPMK 01: Kualitas & Struktur Kode**

**Bobot**: 20%

**Kompetensi**: Kode mudah dibaca, terorganisir, dan memiliki komentar yang jelas. Struktur file dan folder proyek logis dan mudah dinavigasi.

#### **1\. Aspek: Kualitas Kode**

**Deskripsi Kriteria**: Penilaian ini berfokus pada kebersihan, keterbacaan, dan efisiensi kode. Ini mencakup penggunaan nama variabel yang jelas, penulisan fungsi yang ringkas, dan penambahan komentar yang memadai untuk menjelaskan logika yang kompleks.

| Skor | Penjelasan |
| :---- | :---- |
| **4** | Kode sangat bersih, terstruktur, dan memiliki komentar yang membantu. Mengikuti praktik terbaik (*best practices*) dan menghindari kode yang berlebihan. |
| **3** | Kode bersih dan terkomentasi dengan baik, namun mungkin ada sedikit ruang untuk perbaikan dalam hal efisiensi atau keterbacaan. |
| **2** | Kode bisa dibaca, tetapi kurang konsisten dalam gaya atau memiliki komentar yang minim. |
| **1** | Kode sulit dibaca, tidak terorganisir, dan tidak memiliki komentar, sehingga sulit dipahami. |

#### **2\. Aspek: Struktur Proyek**

**Deskripsi Kriteria**: Penilaian ini mengevaluasi organisasi file dan folder proyek. Struktur yang baik memudahkan navigasi, kolaborasi, dan pemeliharaan proyek di masa depan.

| Skor | Penjelasan |
| :---- | :---- |
| **4** | Struktur folder sangat logis, modular, dan sesuai dengan konvensi proyek Next.js. Sangat mudah dinavigasi. |
| **3** | Struktur folder cukup logis, tetapi mungkin ada beberapa file yang tidak berada di tempat yang paling optimal. |
| **2** | Struktur folder tidak terlalu terorganisir, membuat navigasi sedikit sulit. |
| **1** | Struktur folder tidak logis dan acak, menyulitkan pemahaman alur proyek. |

### **CPMK 02, 03, & 04: Penerapan Next.js & React**

**Bobot**: 40%

**Kompetensi**: Menunjukkan keterampilan dalam penggunaan *framework* pengembangan web modern berbasis JavaScript seperti Angular, React, atau Vue.

#### **1\. Aspek: Penerapan Komponen**

**Deskripsi Kriteria**: Proyek menunjukkan pemahaman yang kuat dalam menggunakan fungsionalitas dasar React. Anda berhasil mengelola *state* lokal dengan useState atau *library state management* (seperti Context, Zustand, atau NgRx) untuk interaksi pengguna dan menggunakan useEffect atau *lifecycle hooks* lainnya untuk menangani efek samping seperti pengambilan data atau manipulasi DOM.

| Skor | Penjelasan |
| :---- | :---- |
| **4** | Mampu menerapkan komponen secara modular dan menggunakan *hooks* atau *lifecycle* yang relevan dengan sangat efektif. Kode sangat terorganisir dan efisien. |
| **3** | Mampu menerapkan komponen dan menggunakan *hooks* atau *lifecycle* dengan baik, namun masih ada ruang untuk perbaikan dalam hal efisiensi atau organisasi kode. |
| **2** | Menunjukkan pemahaman dasar tentang komponen, tetapi penerapan *hooks* atau *lifecycle* masih kurang tepat atau belum optimal. |
| **1** | Penerapan komponen dan *hooks* atau *lifecycle* masih sangat minim dan tidak menunjukkan pemahaman yang cukup. |

#### **2\. Aspek: Penerapan Routing**

**Deskripsi Kriteria**: Aplikasi menggunakan sistem *routing* yang benar untuk navigasi antar halaman. Rute dinamis (misalnya /artikel/:id atau /produk/:slug) diimplementasikan dengan tepat dan navigasi berjalan lancar. Terdapat juga proteksi rute dasar untuk halaman yang memerlukan otentikasi.

| Skor | Penjelasan |
| :---- | :---- |
| **4** | Mampu menerapkan *routing* statis dan dinamis dengan sempurna. Proteksi rute terimplementasi dengan logika yang kuat dan efisien. |
| **3** | Mampu menerapkan *routing* dengan baik, namun ada beberapa rute dinamis yang belum optimal atau logika proteksi rute masih memiliki celah. |
| **2** | *Routing* statis berfungsi, tetapi implementasi *routing* dinamis atau proteksi rute masih belum berjalan dengan baik. |
| **1** | Sistem *routing* tidak terimplementasi dengan benar, atau hanya menggunakan *routing* statis dasar tanpa adanya navigasi yang terstruktur. |

#### **3\. Aspek: Penerapan UI Framework**

**Deskripsi Kriteria**: Desain antarmuka pengguna (UI) aplikasi rapi, fungsional, dan responsif. Penggunaan *framework* UI seperti Tailwind CSS atau library komponen lainnya diterapkan secara konsisten di seluruh aplikasi untuk menciptakan tampilan yang estetis dan profesional. Aplikasi dapat diakses dan digunakan dengan baik di berbagai ukuran layar.

| Skor | Penjelasan |
| :---- | :---- |
| **4** | Desain UI sangat profesional, responsif, dan konsisten. Penggunaan *framework* UI terintegrasi dengan baik dan efisien. |
| **3** | Desain UI sudah baik dan responsif, tetapi masih ada ketidakselarasan visual atau penerapan *framework* UI yang kurang konsisten. |
| **2** | Aplikasi memiliki tata letak dasar, tetapi tidak sepenuhnya responsif atau penggunaan *framework* UI tidak merata. |
| **1** | Tampilan aplikasi tidak terorganisir, tidak responsif, dan tidak menunjukkan penggunaan *framework* UI yang jelas. |

### **CPMK 05: Integrasi Backend & Otentikasi**

**Bobot**: 40%

**Kompetensi**: Mampu mengintegrasikan layanan *backend as a service* (BaaS) seperti Firebase atau Supabase untuk otentikasi dan operasi *database*.

#### **1\. Aspek: Otentikasi**

**Deskripsi Kriteria**: Penilaian ini berfokus pada fungsionalitas sistem otentikasi. Login dan logout harus bekerja dengan benar, dan rute-rute yang dilindungi (protected routes) harus dapat diakses hanya oleh pengguna yang sudah terautentikasi. Pengalihan halaman (redirection) juga harus berfungsi dengan baik.

| Skor | Penjelasan |
| :---- | :---- |
| **4** | Sistem otentikasi berjalan dengan sempurna, termasuk login, logout, dan pengalihan rute yang dilindungi. Sangat aman dan fungsional. |
| **3** | Sistem otentikasi berfungsi dengan baik, tetapi mungkin ada kelemahan kecil pada penanganan sesi atau pengalihan rute. |
| **2** | Fungsionalitas otentikasi dasar ada, tetapi ada masalah atau celah keamanan yang signifikan (misalnya, rute yang dilindungi masih bisa diakses). |
| **1** | Sistem otentikasi tidak berfungsi atau tidak ada sama sekali. |

#### **2\. Aspek: Operasi CRUD**

**Deskripsi Kriteria**: Penilaian ini mengevaluasi kemampuan aplikasi untuk berinteraksi dengan database. Semua operasi **C**reate, **R**ead, **U**pdate, dan **D**elete harus berfungsi dengan benar untuk mengelola data secara dinamis.

| Skor | Penjelasan |
| :---- | :---- |
| **4** | Semua operasi CRUD (buat, baca, perbarui, hapus) diimplementasikan dengan sempurna dan berjalan tanpa masalah. |
| **3** | Operasi CRUD sebagian besar berfungsi, tetapi ada satu atau dua operasi yang belum optimal atau memiliki *bug* kecil. |
| **2** | Hanya beberapa operasi CRUD yang berfungsi, atau ada *bug* besar yang mengganggu fungsionalitas. |
| **1** | Operasi CRUD tidak terimplementasi atau tidak berfungsi. |

#### **3\. Aspek: Pengambilan Data**

**Deskripsi Kriteria**: Penilaian ini mengevaluasi bagaimana aplikasi mengambil dan menampilkan data dari backend. Data harus diambil secara dinamis dari database dan ditampilkan dengan benar di antarmuka pengguna.

| Skor | Penjelasan |
| :---- | :---- |
| **4** | Pengambilan data dari database sangat efisien dan data ditampilkan secara dinamis dan akurat di antarmuka pengguna. |
| **3** | Pengambilan data berfungsi dengan baik, tetapi ada sedikit keterlambatan atau data tidak selalu diperbarui secara *real-time* jika diperlukan. |
| **2** | Pengambilan data ada, tetapi tidak stabil atau ada masalah dalam menampilkan data yang diambil. |
| **1** | Aplikasi tidak dapat mengambil data secara dinamis dari database. |

