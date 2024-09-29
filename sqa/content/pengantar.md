---
toc: true
title: Modul Praktikum Pengujian dan Penjaminan Mutu Perangkat Lunak
Author: Farid Suryanto
---
## Informasi Dokumen

### Riwayat Versi
01.00 (*Draft*)

### Tim Penyusun
- Farid Suryanto, MT. (Lecturer)
- Muhammad Ibnu (Assistant)
- Next Student.... 
### Copyright
Laboratorium Sistem Informasi, Program Studi Sistem Informasi, Fakultas Sains dan Teknologi Terapan, Universitas Ahmad Dahlan Yogyakarta.


## Silabus Praktikum

| **Pertemuan** | **Materi**                                             | **Praktikum**                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1**         | **Pengenalan Alat Pengujian dan Lingkungan Pengujian** | - Menginstal dan mengkonfigurasi lingkungan pengembangan Node.js dan Python. <br> - Instalasi alat pengujian: `Mocha` dan `Chai` untuk Node.js, `pytest` dan `unittest` untuk Python. <br> - Membuat proyek pengujian sederhana di Node.js dan Python. <br> - Menulis test case sederhana untuk fungsi matematika (penjumlahan, perkalian) menggunakan `Mocha`/`Chai` (Node.js) dan `pytest`/`unittest` (Python). |
| **2**         | **Unit Testing**                                       | - Membuat kelas sederhana (misal: kalkulator) dalam **Node.js**. <br> - Menulis test case untuk semua method menggunakan **Mocha** (Node.js). <br> - Menggunakan assertion untuk memvalidasi hasil. <br> - Menggunakan mocking framework (`Sinon.js` untuk Node.js) untuk mengisolasi dependensi. <br> - Menulis test case untuk berbagai skenario (positive, negative, boundary value).                          |
| **3**         | **Integration Testing**                                | - Membuat dua modul yang saling berinteraksi (misal: service dan repository) di **Node.js**. <br> - Menguji integrasi antara kedua modul tersebut. <br> - Menggunakan stub atau mock untuk mengisolasi dependensi eksternal (`Sinon.js` untuk Node.js). <br> - Menguji aliran data antara modul.                                                                                                                  |
| 4             | Pengujian Otomatis untuk API berbasis Node.js          | - Menyiapkan project API sederhana terdiri dari controller dan router untuk diuji.<br>- Menguji API untuk memastikan request dan response sesuai requirement.<br>- Membuat test case untuk kasus pengujian API yang bervariasi.                                                                                                                                                                                   |
| **5**         | **UI Testing menggunakan Selenium**                    | - Membuat test case untuk menguji login pada sebuah aplikasi web. <br> - Memvalidasi elemen-elemen UI (button, text field, dll.). <br> - Menggunakan locators (ID, XPath, CSS selector) untuk menemukan elemen. <br> - Melakukan tindakan pada elemen (klik, isi teks). <br> - Menjalankan test case UI menggunakan **Selenium** dengan Node.js.                                                                  |
| **6**         | **API Testing Menggunakan Postman**                    | - Mengirim request ke API (GET, POST, PUT, DELETE) menggunakan **Postman**. <br> - Memvalidasi response code, headers, dan body. <br> - Menguji autentikasi (basic auth, token). <br> - Membuat koleksi test API di Postman.                                                                                                                                                                                      |
| **7**         | **Performance Testing menggunakan Locust**             | - Membuat test plan untuk melakukan load testing pada sebuah API atau aplikasi web menggunakan  **Locust** (untuk Python). <br> - Mendefinisikan jumlah virtual users, request rate, dan durasi testing. <br> - Menganalisis hasil testing (response time, throughput, error rate). <br> - Menentukan bottleneck pada aplikasi.                                                                                   |
| 8             | **Pengujian Otomatis pada Aplikasi Berbasis React.js** | - Memahami konsep pengujian unit pada aplikasi berbasis **React.js**.<br>- Menggunakan tool testing seperti **Jest** dan **React Testing Library**.<br>- Menulis dan menjalankan pengujian unit untuk komponen-komponen React.<br>- Memahami cara memeriksa output dari pengujian unit, termasuk validasi props, event handling, dan rendering komponen.                                                          |
| **9**         | **Security Testing (OWASP ZAP & SQLMap)**              | - Menggunakan **OWASP ZAP** untuk scanning terhadap aplikasi web untuk menemukan vulnerabilities seperti **SQL injection** dan **XSS**. <br> - Menggunakan **SQLMap** untuk menguji SQL injection pada database. <br> - Menguji parameter tampering dan session hijacking pada aplikasi web. <br> - Membuat laporan hasil pengujian keamanan.                                                                     |
| **10**        | **Pengujian Otomatisasi dan CI/CD (Jenkins)**          | - Membuat pipeline CI/CD sederhana menggunakan **Jenkins**. <br> - Mengkonfigurasi Jenkins job untuk menjalankan unit dan integration tests secara otomatis pada proyek **Node.js**. <br> - Mengintegrasikan pipeline dengan **Git**. <br> - Menerima notifikasi hasil pengujian di Jenkins dan memantau hasil pengujian yang otomatis berjalan setelah perubahan kode.                                           |
| **11**        | **Proyek Integrasi**                                   | - Menggabungkan semua jenis pengujian yang telah dipelajari dalam sebuah proyek yang lebih kompleks (misal: aplikasi e-commerce atau sistem manajemen). <br> - Membuat laporan lengkap mengenai hasil pengujian yang mencakup pengujian unit, integrasi, API, UI, performa, keamanan, dan otomatisasi CI/CD.                                                                                                      |

## Pengumpulan Tugas Praktikum

content here....
## Daftar Isi

[[Praktikum 1 - Pengenalan Alat Pengujian dan Lingkungan Pengujian]]
[[Praktikum 2 - Unit Testing dengan Mocha]]
[[Praktikum 3 - Pengujian Integrasi pada Aplikasi Node.js]]
[[Praktikum 4 - Pengujian API Berbasis Node.js]]
[[Praktikum 5 - UI Testing menggunakan Selenium]]
[[Praktikum 7 - Performance Testing menggunakan Locust]]
[[Praktikum 8 - Pengujian Unit pada Aplikasi Berbasis React.js]]
[[Praktikum 9 - Security Testing (OWASP ZAP & SQLMap)]]
[[Praktikum 10 - Pengujian Otomatisasi dan CICD Menggunakan Jenkins]]

<div style="page-break-before:always"></div>
