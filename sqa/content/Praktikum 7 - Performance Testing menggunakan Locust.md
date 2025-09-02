## Tujuan
- Mahasiswa mampu melakukan pengujian performa (load testing) pada aplikasi web atau API menggunakan **Locust**.
- Mahasiswa dapat membuat **test plan** yang mencakup jumlah virtual users, request rate, dan durasi testing.
- Mahasiswa mampu menganalisis hasil pengujian performa seperti **response time**, **throughput**, dan **error rate**.
- Mahasiswa dapat mengidentifikasi bottleneck pada aplikasi.

## Alat dan Bahan
1. **Laptop/PC** dengan sistem operasi Windows, macOS, atau Linux.
2. **Python 3** dan pip (Python Package Installer) terinstal.
3. **Locust** (Python Load Testing Tool).
4. Aplikasi web atau API yang akan diuji.
5. **Editor teks** seperti Visual Studio Code atau PyCharm.

## Persiapan
1. **Install Locust**:
   - Pastikan **Python 3** telah terinstal di sistem.
   - Buka terminal/command prompt, lalu jalankan perintah berikut untuk menginstal **Locust**:

   ```bash
   pip install locust
   ```

2. **Siapkan API atau Aplikasi Web untuk Diuji**:
   - Bisa menggunakan API sederhana yang dibuat menggunakan Flask, Express.js, atau framework lain.
   - Alternatifnya, gunakan API publik seperti [JSONPlaceholder](https://jsonplaceholder.typicode.com/) untuk pengujian.

3. **Buat Folder untuk Proyek Pengujian**:
   - Buat folder baru untuk menyimpan file pengujian dengan Locust:

   ```bash
   mkdir locust-performance-test
   cd locust-performance-test
   ```

## Kode untuk Diuji
Contoh berikut menggunakan API **JSONPlaceholder** untuk pengujian performa. Kita akan menguji endpoint untuk mengambil daftar pengguna (`/users`).

## Langkah-langkah Praktikum

1. **Membuat Test Plan dengan Locust**:
   - Buat file **locustfile.py** di dalam folder proyek, dan tambahkan kode berikut untuk mendefinisikan pengujian:

   ```python
   from locust import HttpUser, task, between

   class WebsiteUser(HttpUser):
       wait_time = between(1, 5)  # Tunggu antara 1 hingga 5 detik sebelum request selanjutnya

       @task
       def get_users(self):
           self.client.get("/users")
   ```

   - Kode di atas mendefinisikan satu virtual user yang mengirimkan permintaan **GET** ke endpoint `/users` pada interval waktu antara 1 hingga 5 detik.

2. **Menjalankan Locust**:
   - Untuk menjalankan pengujian, buka terminal dan jalankan perintah berikut:

   ```bash
   locust -f locustfile.py --host=https://jsonplaceholder.typicode.com
   ```

   - Buka browser dan akses **Locust Web UI** di alamat `http://localhost:8089`.

3. **Menjalankan Load Test**:
   - Di halaman **Locust Web UI**, masukkan jumlah **virtual users** dan **spawn rate** (kecepatan pembuatan pengguna virtual). Misalnya, gunakan:
     - **Number of users to simulate**: 50
     - **Spawn rate**: 10 users per second
   - Klik tombol **Start swarming** untuk memulai pengujian.

4. **Memantau Hasil Pengujian**:
   - Setelah pengujian dimulai, Anda dapat melihat **response time**, **throughput**, dan **error rate** pada halaman **Locust Web UI**. Data ini akan memperlihatkan performa aplikasi saat menangani banyak request.
   - Contoh metrik yang dilihat:
     - **Median Response Time**: Waktu rata-rata yang dibutuhkan aplikasi untuk merespons permintaan.
     - **Requests per Second (RPS)**: Jumlah request yang dapat diproses aplikasi setiap detik.
     - **Failure Rate**: Persentase permintaan yang gagal.

## Latihan

1. **Membuat Pengujian yang Lebih Kompleks**:
   - Tambahkan lebih banyak endpoint atau jenis request ke dalam pengujian. Misalnya, uji juga endpoint untuk mendapatkan detail pengguna (`/users/{id}`).
   
   ```python
   @task
   def get_user_by_id(self):
       user_id = 1  # Contoh user ID
       self.client.get(f"/users/{user_id}")
   ```

2. **Mengatur Durasi Pengujian**:
   - Sesuaikan durasi pengujian dengan menggunakan flag `--run-time`. Misalnya:

   ```bash
   locust -f locustfile.py --host=https://jsonplaceholder.typicode.com --run-time 1m
   ```

   Perintah ini akan menjalankan pengujian selama 1 menit.

3. **Mengukur Bottleneck**:
   - Amati **response time** yang meningkat drastis ketika jumlah pengguna virtual terlalu tinggi. Identifikasi apakah aplikasi mulai melambat setelah mencapai batas tertentu.
   - Coba gunakan **profiling tools** atau analisis di aplikasi yang diuji untuk menemukan bagian yang menjadi bottleneck (contoh: proses database lambat, kapasitas server tidak cukup, dsb.).

## Kesimpulan
Dalam modul ini, mahasiswa melakukan pengujian performa menggunakan **Locust**. Mereka mendefinisikan **virtual users**, mengatur durasi pengujian, dan menganalisis hasil berupa **response time**, **throughput**, serta **error rate**. Selain itu, mahasiswa juga belajar untuk mengidentifikasi bottleneck pada aplikasi berdasarkan hasil pengujian performa yang diperoleh.

<div style="page-break-before:always"></div>