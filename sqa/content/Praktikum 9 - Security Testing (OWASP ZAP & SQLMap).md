
## 1. Tujuan
1. Mahasiswa dapat melakukan scanning terhadap aplikasi web menggunakan **OWASP ZAP** untuk menemukan celah keamanan seperti **SQL injection** dan **Cross-Site Scripting (XSS)**.
2. Mahasiswa dapat menggunakan **SQLMap** untuk menguji adanya SQL injection pada database.
3. Mahasiswa memahami cara melakukan pengujian terhadap **parameter tampering** dan **session hijacking** pada aplikasi web.
4. Mahasiswa mampu membuat laporan hasil pengujian keamanan berdasarkan hasil yang diperoleh.

## 2. Alat dan Bahan
1. **OWASP ZAP** (Zed Attack Proxy) – sebuah tool untuk scanning keamanan aplikasi web.
2. **SQLMap** – alat otomatis untuk mendeteksi dan mengeksploitasi SQL injection.
3. Aplikasi web target untuk diuji (misal: aplikasi web lokal atau aplikasi yang telah diizinkan untuk diuji).
4. **Database** (jika menggunakan aplikasi web dengan SQL database).
5. **Laptop/PC** dengan sistem operasi Windows, macOS, atau Linux.
6. **Editor teks** untuk mencatat hasil pengujian.
7. **Browser** yang terhubung dengan OWASP ZAP.

## 3. Persiapan
1. **Install OWASP ZAP**:
   - Unduh dan install OWASP ZAP dari situs resmi: [https://www.zaproxy.org/download/](https://www.zaproxy.org/download/).
   - Setelah terinstall, buka OWASP ZAP di komputer Anda.

2. **Install SQLMap**:
   - Pastikan Python sudah terinstall.
   - Jalankan perintah berikut untuk menginstall SQLMap melalui terminal/command prompt:

   ```bash
   git clone https://github.com/sqlmapproject/sqlmap.git
   cd sqlmap
   ```

3. **Siapkan Aplikasi Web untuk Pengujian**:
   - Gunakan aplikasi web yang sudah disiapkan untuk pengujian, baik lokal maupun online (pastikan memiliki izin untuk melakukan pengujian keamanan).

## 4. Kode untuk Diuji
Contoh berikut menggunakan aplikasi web sederhana dengan parameter login yang rentan terhadap SQL injection. Pastikan aplikasi yang digunakan dapat menerima query SQL di backend untuk keperluan pengujian.

## 5. Langkah-langkah Praktikum

### 5.1 Menggunakan OWASP ZAP untuk Scanning Web Vulnerabilities

1. **Jalankan OWASP ZAP** dan buka aplikasi web target melalui OWASP ZAP proxy.
2. Pilih **Automated Scan** di OWASP ZAP:
   - Masukkan URL aplikasi web target ke dalam form.
   - Klik tombol **Attack** untuk memulai scanning.
3. **Tunggu hingga proses scanning selesai**, lalu cek hasilnya di bagian **Alerts**:
   - Periksa jika OWASP ZAP menemukan potensi **SQL Injection**, **XSS**, atau vulnerabilities lainnya.
4. **Catat hasil temuan** dan analisis vulnerabilities yang ditemukan oleh ZAP.

### 5.2 Menggunakan SQLMap untuk SQL Injection

1. Buka terminal dan navigasikan ke direktori **SQLMap**.
2. Gunakan perintah berikut untuk melakukan pengujian SQL Injection pada aplikasi target:

   ```bash
   python sqlmap.py -u "http://targetwebsite.com/login.php?id=1" --dbs
   ```

   - Parameter `-u` digunakan untuk menentukan URL target yang memiliki parameter rentan.
   - SQLMap akan mencoba mendeteksi SQL injection dan menampilkan informasi terkait database.

3. **Menelusuri Database**:
   - Setelah SQL injection ditemukan, gunakan SQLMap untuk menggali lebih dalam informasi database, tabel, atau kolom data.
   - Contoh untuk mengambil tabel:

   ```bash
   python sqlmap.py -u "http://targetwebsite.com/login.php?id=1" --tables
   ```

### 5.3 Menguji Parameter Tampering

1. **Parameter Tampering** adalah teknik mengubah nilai parameter pada URL atau form untuk memodifikasi perilaku aplikasi web.
2. **OWASP ZAP** dapat membantu menguji parameter tampering dengan melihat request dan response yang dikirimkan aplikasi.
3. Langkah-langkah:
   - Identifikasi parameter pada aplikasi web yang bisa dimodifikasi.
   - Ubah nilai parameter di URL atau body request, lalu amati respon dari aplikasi apakah ada celah keamanan yang muncul.
   - Contoh parameter:

     ```
     http://targetwebsite.com/product?id=100
     ```

   - Coba ubah nilai `id` untuk melihat apakah Anda dapat mengakses data yang seharusnya tidak diizinkan.

### 5.4 Menguji Session Hijacking

1. **Session Hijacking** adalah teknik mencuri sesi pengguna lain untuk mengakses data mereka.
2. Gunakan **OWASP ZAP** untuk memonitor session cookies dari aplikasi web.
3. **Langkah-langkah**:
   - Masuk ke aplikasi target sebagai pengguna.
   - Gunakan OWASP ZAP untuk menangkap session cookies.
   - Cobalah menggunakan cookie yang ditangkap di browser lain atau pengguna lain, dan periksa apakah sesi dapat direplikasi (berarti aplikasi rentan terhadap session hijacking).

## 6. Latihan

### 6.1 Menggunakan OWASP ZAP
- Lakukan scanning pada aplikasi web yang Anda gunakan dan catat semua vulnerabilities yang ditemukan.
- Analisis jenis celah keamanan yang paling sering muncul dan bagaimana potensi dampaknya terhadap keamanan aplikasi.

### 6.2 Menggunakan SQLMap
- Coba SQLMap pada beberapa endpoint aplikasi web lain dan catat apakah SQL injection dapat ditemukan di setiap endpoint.
- Identifikasi endpoint yang paling rentan terhadap SQL injection.

### 6.3 Membuat Laporan Hasil Pengujian Keamanan
- Buat laporan lengkap hasil pengujian dengan mencakup:
  - Vulnerabilities yang ditemukan.
  - Penjelasan mengenai setiap vulnerability dan bagaimana dampaknya pada aplikasi.
  - Saran perbaikan untuk setiap celah keamanan yang ditemukan.

## 7. Kesimpulan
Dalam modul ini, mahasiswa mempelajari teknik pengujian keamanan menggunakan **OWASP ZAP** dan **SQLMap**. Dengan mengikuti praktikum ini, mahasiswa mampu mendeteksi vulnerabilities seperti **SQL Injection** dan **XSS**, melakukan pengujian terhadap **parameter tampering** dan **session hijacking**, serta membuat laporan hasil pengujian keamanan aplikasi web.

<div style="page-break-before:always"></div>