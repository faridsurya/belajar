
## Tujuan Praktikum

- Memahami cara menginstal dan mengkonfigurasi lingkungan pengembangan menggunakan **Node.js**.
- Memahami dasar-dasar penggunaan **Mocha** dan **Chai** sebagai framework pengujian di Node.js.
- Mampu menulis dan menjalankan test case sederhana untuk fungsi matematika menggunakan assertion di Mocha dan Chai.

## Alat dan Bahan

**Perangkat Lunak yang Diperlukan**:

- Node.js (versi terbaru)
- Mocha (framework pengujian)
- Chai (library assertion)
- Editor teks (misal: Visual Studio Code atau lainnya)

**Kebutuhan Sistem**:

- Sistem operasi: Windows/Linux/macOS
- RAM minimal 4GB
- Koneksi internet untuk instalasi dependencies

## Langkah Persiapan

### Instal Node.js

- Jika belum terinstal, unduh dan instal Node.js dari [nodejs.org](https://nodejs.org/).
- Setelah instalasi selesai, pastikan Node.js terinstal dengan menjalankan perintah berikut di terminal atau command prompt:
```bash
node -v npm -v
```
- Perintah ini akan menampilkan versi Node.js dan npm yang terinstal.

### Inisialisasi Proyek

- Buat folder baru untuk proyek pengujian:
    
```bash
  mkdir praktikum-testing cd praktikum-testing npm init -y
```
- Perintah `npm init -y` akan membuat file `package.json` yang dibutuhkan untuk mengelola dependencies.

### Instal Mocha dan Chai

- Jalankan perintah berikut untuk menginstal **Mocha** dan **Chai** secara lokal:
    
```bash
npm install mocha chai --save-dev
```
### Konfigurasi Mocha

- Tambahkan script untuk menjalankan Mocha pada `package.json`:
    
```json
"scripts": {   "test": "mocha" }
```
## Instruksi Langkah Demi Langkah

### Struktur File

```
/praktikum-testing
  |-- package.json
  |-- /node_modules (di-generate oleh npm)
  |-- math.js
  |-- test.js
```
### Buat Fungsi Matematika Sederhana

- Buat file baru bernama `math.js` dan tuliskan kode berikut:
    
```javascript
function tambah(a, b) 
{   
	return a + b; 
}  

function kali(a, b) 
{   
	return a * b; 
}  

module.exports = { tambah, kali };
```

### Membuat Test Case Menggunakan Mocha dan Chai

- Buat file baru bernama `test.js` dan tuliskan kode pengujian:
    
```javascript
const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');

describe('Pengujian Fungsi Matematika', function() {
  it('seharusnya mengembalikan 4 saat menambahkan 2 + 2', function() {
    expect(tambah(2, 2)).to.equal(4);
  });

  it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', function() {
    expect(kali(2, 3)).to.equal(6);
  });

  it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', function() {
    expect(kurang(2, 2)).to.equal(0);
  });

  it('seharusnya mengembalikan 2 saat membagi 6 / 3', function() {
    expect(bagi(6, 3)).to.equal(2);
  });

  it('seharusnya mengembalikan error saat membagi dengan 0', function() {
    expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
  });
});

```

### Menjalankan Test

- Jalankan perintah berikut di terminal:
    
```bash
npm test
```
    
- Hasil pengujian akan ditampilkan di terminal.

## Latihan

### Latihan 1

Buat test case tambahan untuk fungsi **pengurangan** dan **pembagian** yang menguji **negative case**. Misalnya, apakah fungsi pembagian mengembalikan error ketika membagi dengan 0, dan bagaimana fungsi pengurangan menangani input berupa angka negatif.
### Latihan 2

Buat skenario pengujian yang memeriksa kasus **negative** untuk fungsi `tambah` dan `kali`. Contoh:

- Apa yang terjadi jika Anda mengirimkan string atau null sebagai input? Buat test case yang menangani kasus ini.

### Petunjuk Pengerjaan Latihan

- Buat file pengujian baru bernama `latihan.test.js`
- Upload project yang lengkap dengan latihannya pada github Anda.
<div style="page-break-before:always"></div>