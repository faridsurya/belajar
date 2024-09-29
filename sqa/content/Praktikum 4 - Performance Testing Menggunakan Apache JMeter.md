## Tujuan
Mahasiswa mampu melakukan pengujian performa pada aplikasi Node.js menggunakan *performance testing tools*, menganalisis hasil, dan mengidentifikasi bottleneck pada aplikasi.

## Alat dan Bahan
- Laptop/PC
- Node.js (versi terbaru)
- Postman (untuk pengujian manual API)
- Apache JMeter (untuk pengujian beban)
- Aplikasi uji berbasis Node.js yang siap digunakan
- Editor Kode (VSCode, Sublime Text, atau lainnya)

## Persiapan
1. Pastikan Node.js dan NPM sudah terpasang di sistem.
2. Pastikan aplikasi *Postman* terinstal.
3. Unduh dan instal Apache JMeter dari [sini](https://jmeter.apache.org/download_jmeter.cgi).
4. Siapkan aplikasi sederhana berbasis Express.js untuk diuji.

## Struktur File Proyek

```
/performance-test-app
│
├── /node_modules
├── /routes
│    └── calculator.js  # Router untuk API kalkulator
├── /controllers
│    └── Calculator.js  # Kode untuk diuji
├── /tests
│    └── performance_test.jmx  # File konfigurasi JMeter
├── app.js              # File utama aplikasi
├── package.json        # Detail paket dan dependencies
└── README.md
```

## Kode untuk Diuji

Buat aplikasi Express.js sederhana dengan endpoint untuk operasi kalkulator seperti penjumlahan, pengurangan, perkalian, dan pembagian.

**Langkah-langkah:**

1. **Instal Express dan Paket Tambahan**
   Jalankan perintah berikut di terminal untuk membuat proyek Node.js dan menginstal dependencies:

   ```bash
   mkdir performance-test-app
   cd performance-test-app
   npm init -y
   npm install express
   ```

2. **Membuat File `app.js`**
   Buat file `app.js` sebagai titik masuk utama untuk aplikasi Express.

   ```js
   const express = require('express');
   const app = express();
   const calculatorRouter = require('./routes/calculator');

   app.use(express.json());
   app.use('/api/calculator', calculatorRouter);

   const port = process.env.PORT || 3000;
   app.listen(port, () => {
     console.log(`Server berjalan di http://localhost:${port}`);
   });
   ```

3. **Membuat Controller `Calculator.js`**

   Buat file di dalam folder `controllers/Calculator.js` yang berisi operasi dasar kalkulator.

   ```js
   class Calculator {
     static add(req, res) {
       const { a, b } = req.body;
       const result = a + b;
       res.json({ result });
     }

     static subtract(req, res) {
       const { a, b } = req.body;
       const result = a - b;
       res.json({ result });
     }

     static multiply(req, res) {
       const { a, b } = req.body;
       const result = a * b;
       res.json({ result });
     }

     static divide(req, res) {
       const { a, b } = req.body;
       if (b === 0) {
         return res.status(400).json({ error: 'Pembagian dengan nol tidak diperbolehkan' });
       }
       const result = a / b;
       res.json({ result });
     }
   }

   module.exports = Calculator;
   ```

4. **Membuat Router `calculator.js`**

   Buat file router di dalam folder `routes/calculator.js` yang akan mengarahkan permintaan ke controller.

   ```js
   const express = require('express');
   const router = express.Router();
   const Calculator = require('../controllers/Calculator');

   router.post('/add', Calculator.add);
   router.post('/subtract', Calculator.subtract);
   router.post('/multiply', Calculator.multiply);
   router.post('/divide', Calculator.divide);

   module.exports = router;
   ```

5. **Menjalankan Server**

   Jalankan aplikasi:

   ```bash
   node app.js
   ```

## Langkah-langkah Praktikum

1. **Menguji API dengan Postman**
   - Buka Postman.
   - Uji setiap endpoint (penjumlahan, pengurangan, perkalian, pembagian) dengan mengirim permintaan POST ke:
     - `/api/calculator/add`
     - `/api/calculator/subtract`
     - `/api/calculator/multiply`
     - `/api/calculator/divide`
   - Masukkan data JSON untuk pengujian:

   ```json
   {
     "a": 10,
     "b": 5
   }
   ```

2. **Menginstal JMeter dan Menyiapkan Pengujian Performa**
   - Buka Apache JMeter.
   - Buat *Thread Group* yang mengatur jumlah *virtual users* dan durasi tes.
   - Tambahkan *HTTP Request Sampler* untuk setiap endpoint API kalkulator.
   - Tambahkan *Listeners* untuk memantau hasil, seperti `View Results Tree`, `Summary Report`, dan `Graph Results`.
   - Simpan file konfigurasi sebagai `performance_test.jmx` di dalam folder `tests`.

3. **Menjalankan Pengujian Performa**
   - Eksekusi pengujian beban di JMeter dengan menjalankan file `performance_test.jmx`.
   - Amati hasil pengujian seperti *response time*, *throughput*, dan *error rate*.

## Latihan

1. **Modifikasi Pengujian**
   Tambahkan 50 pengguna virtual dalam durasi 60 detik. Ulangi pengujian untuk endpoint `/api/calculator/multiply`. Catat hasil pengujian performa dari laporan JMeter.

2. **Analisis Hasil Pengujian**
   - Tentukan *bottleneck* apa saja yang terjadi pada sistem berdasarkan hasil pengujian.
   - Buat laporan tentang cara memperbaiki performa berdasarkan hasil tes, seperti optimasi kode atau infrastruktur.
