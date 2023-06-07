# Menjalankan Aplikasi HTML Statik
## Menjalankan Aplikasi HTML Statis menggunakan Server PHP

### Langkah 1: Install PHP (jika belum terpasang)
Jika PHP belum terpasang di sistem Anda, ikuti instruksi instalasi yang sesuai dengan sistem operasi Anda.

### Langkah 2: Menyiapkan aplikasi HTML statis
Buat folder untuk aplikasi HTML statis Anda dan letakkan semua file HTML, CSS, JavaScript, dan file statis lain di dalamnya.

### Langkah 3: Memulai server PHP
Buka terminal atau command prompt dan navigasikan ke folder tempat aplikasi HTML statis Anda berada.

Jalankan perintah berikut untuk memulai server PHP:

```bash
php -S localhost:8000
Perintah ini akan memulai server PHP dan menghubungkannya ke localhost pada port 8000. Anda dapat mengubah nomor port jika diperlukan.
```
### Langkah 4: Mengakses aplikasi Anda
Buka browser web dan kunjungi `http://localhost:8000` (atau nomor port yang Anda tentukan). Aplikasi HTML statis Anda sekarang harus berjalan dan dapat diakses melalui server PHP.

## Menjalankan Aplikasi HTML Statis menggunakan Server Python
### Langkah 1: Install Python (jika belum terpasang)
Jika Python belum terpasang di sistem Anda, ikuti instruksi instalasi yang sesuai dengan sistem operasi Anda. Python versi 3.x direkomendasikan.

### Langkah 2: Menyiapkan aplikasi HTML statis
Buat folder untuk aplikasi HTML statis Anda dan letakkan semua file HTML, CSS, JavaScript, dan file statis lain di dalamnya.

### Langkah 3: Memulai server Python
Buka terminal atau command prompt dan navigasikan ke folder tempat aplikasi HTML statis Anda berada.

Jalankan perintah berikut untuk memulai server Python:

```bash
python -m http.server 8000
```
Perintah ini akan memulai server Python dan menghubungkannya ke localhost pada port 8000. Anda dapat mengubah nomor port jika diperlukan.

### Langkah 4: Mengakses aplikasi Anda
Buka browser web dan kunjungi http://localhost:8000 (atau nomor port yang Anda tentukan). Aplikasi HTML statis Anda sekarang harus berjalan dan dapat diakses melalui server Python.

Catatan: Kedua server PHP dan Python dimaksudkan untuk tujuan pengembangan. Jika Anda ingin mendeploy aplikasi Anda ke lingkungan produksi, pertimbangkan untuk menggunakan server web seperti Apache atau Nginx.

Dengan mengikuti langkah-langkah ini, Anda dapat menjalankan aplikasi HTML statis menggunakan server PHP atau server Python di mesin lokal Anda.
