## Tujuan

- Memahami konsep **unit testing** dan pentingnya pengujian untuk setiap unit kode.
- Menggunakan **Mocha** sebagai framework pengujian untuk menulis dan menjalankan test case.
- Mampu menulis test case untuk berbagai skenario menggunakan assertion.

## Alat dan Bahan

**Perangkat Lunak yang Diperlukan**:

- Node.js (versi terbaru)
- Mocha (framework pengujian)
- Chai (library untuk assertion)

**Kebutuhan Sistem**:

- Sistem operasi: Windows/Linux/macOS
- RAM minimal 4GB
- Koneksi internet untuk instalasi dependencies

## Persiapan

1. **Membuat Proyek Node.js**  
    Buat folder proyek baru dan inisialisasi proyek Node.js menggunakan perintah berikut:
	
```bash
mkdir praktikum-unit-testing
cd praktikum-unit-testing
npm init -y
```
2. **Menginstal Mocha dan Chai**  
    Tambahkan **Mocha** dan **Chai** untuk melakukan unit testing:
    
```bash
npm install --save-dev mocha chai
```
    
3. **Pengaturan Mocha**  
    Pastikan konfigurasi **Mocha** telah diatur di `package.json`, tambahkan script test:
    
```json
"scripts": {
  "test": "mocha"
}
```
    

## Struktur File Proyek

Berikut adalah struktur file proyek:

```lua
/praktikum-unit-testing
  |-- package.json
  |-- /node_modules (di-generate oleh npm)
  |-- calculator.js (file untuk fungsi kalkulator)
  |-- calculator.test.js (file untuk pengujian kalkulator)
```

- **calculator.js**: Berisi implementasi fungsi-fungsi kalkulator.
- **calculator.test.js**: Berisi test case untuk menguji fungsi-fungsi kalkulator.

## Kode untuk Diuji

Di bawah ini adalah kode **calculator.js** yang akan diuji pada praktikum ini. Kode ini berisi fungsi untuk operasi matematika dasar seperti penjumlahan, pengurangan, perkalian, dan pembagian.

### Langkah-langkah Membuat Kode untuk Diuji

1. Buat file `calculator.js` di direktori proyek, lalu tambahkan kode berikut:

```javascript
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    throw new Error('Pembagi tidak boleh nol');
  }
  return a / b;
}

module.exports = { tambah, kurang, kali, bagi };

```

- **tambah**: Melakukan operasi penjumlahan.
- **kurang**: Melakukan operasi pengurangan.
- **kali**: Melakukan operasi perkalian.
- **bagi**: Melakukan operasi pembagian dengan pengecekan untuk pembagi nol.

## Langkah-langkah Praktikum

### 1. Menulis Test Case untuk Fungsi Kalkulator

Buat file baru bernama `calculator.test.js` di direktori proyek, kemudian tambahkan kode berikut untuk menulis test case menggunakan **Mocha** dan **Chai**:


```javascript
const { expect } = require('chai');
const { tambah, kurang, kali, bagi } = require('./calculator');

describe('Pengujian Fungsi Kalkulator', () => {
  it('menambahkan 2 + 3 harus sama dengan 5', () => {
    expect(tambah(2, 3)).to.equal(5);
  });

  it('mengurangkan 5 - 3 harus sama dengan 2', () => {
    expect(kurang(5, 3)).to.equal(2);
  });
  
  it('mengalikan 2 * 3 harus sama dengan 6', () => {
    expect(kali(2, 3)).to.equal(6);
  });

  it('membagi 6 / 3 harus sama dengan 2', () => {
    expect(bagi(6, 3)).to.equal(2);
  });

  it('membagi dengan nol harus melempar error', () => {
    expect(() => {
      bagi(6, 0);
    }).to.throw('Pembagi tidak boleh nol');
  });
});

```
### 2. Menjalankan Test Case

Setelah menulis test case, jalankan perintah berikut untuk menjalankan seluruh pengujian:

```bash
npm test
```

Hasil pengujian akan ditampilkan di terminal, menunjukkan apakah setiap test case telah berhasil atau gagal.

## Latihan

### Latihan 1

Tulis test case tambahan untuk menguji skenario lain, seperti pengujian dengan angka negatif dan nol.

### Latihan 2

Uji respons fungsi terhadap input yang tidak valid, misalnya mengirimkan string alih-alih angka, dan pastikan fungsi berperilaku sesuai dengan ekspektasi (misalnya, melempar error).

<div style="page-break-before:always"></div>