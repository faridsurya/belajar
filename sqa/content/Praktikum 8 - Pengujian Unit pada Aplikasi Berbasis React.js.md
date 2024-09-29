
## 1. Tujuan
1. Mahasiswa memahami konsep pengujian unit pada aplikasi berbasis **React.js**.
2. Mahasiswa mampu menggunakan tool testing seperti **Jest** dan **React Testing Library**.
3. Mahasiswa dapat menulis dan menjalankan pengujian unit untuk komponen-komponen React.
4. Mahasiswa memahami cara memeriksa output dari pengujian unit, termasuk validasi props, event handling, dan rendering komponen.

## 2. Alat dan Bahan
1. **Node.js** dan **npm** atau **yarn** (pastikan terinstall di komputer Anda).
2. **React.js** (Aplikasi React yang akan diuji).
3. **Jest** sebagai framework testing.
4. **React Testing Library** untuk pengujian komponen React.
5. **Editor teks** seperti VSCode untuk menulis dan menjalankan kode.
6. **Browser** untuk memverifikasi aplikasi secara manual.

## 3. Persiapan
1. **Siapkan Proyek React**:
   - Jika belum memiliki proyek React, buat proyek React baru dengan perintah berikut:

   ```bash
   npx create-react-app react-testing-practice
   cd react-testing-practice
   ```

2. **Instalasi Dependensi**:
   - Install **Jest** dan **React Testing Library** sebagai dependensi:

   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   ```

   - Pastikan juga library **React** dan **React-DOM** sudah terinstall.

3. **Struktur Proyek**:
   - Buat direktori `src/__tests__/` untuk menyimpan file pengujian unit.

## 4. Kode untuk Diuji

Misalkan Anda memiliki komponen sederhana bernama `Counter.js` di aplikasi React:

```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1 data-testid="count-value">{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```

## 5. Langkah-langkah Praktikum

### 5.1 Menulis Test Case Menggunakan React Testing Library

1. **Membuat File Pengujian**:
   - Buat file pengujian untuk komponen `Counter` di direktori `src/__tests__/Counter.test.js`.

2. **Menulis Pengujian Unit**:
   - Impor dependensi yang diperlukan dan buat pengujian sederhana untuk memastikan komponen `Counter` bekerja dengan baik.

   ```javascript
   import React from 'react';
   import { render, screen, fireEvent } from '@testing-library/react';
   import '@testing-library/jest-dom';
   import Counter from '../Counter';

   describe('Counter Component', () => {
     test('renders the initial count value as 0', () => {
       render(<Counter />);
       const countValue = screen.getByTestId('count-value');
       expect(countValue).toHaveTextContent('0');
     });

     test('increments count when increment button is clicked', () => {
       render(<Counter />);
       const countValue = screen.getByTestId('count-value');
       const incrementButton = screen.getByText('Increment');

       fireEvent.click(incrementButton);

       expect(countValue).toHaveTextContent('1');
     });

     test('decrements count when decrement button is clicked', () => {
       render(<Counter />);
       const countValue = screen.getByTestId('count-value');
       const decrementButton = screen.getByText('Decrement');

       fireEvent.click(decrementButton);

       expect(countValue).toHaveTextContent('-1');
     });
   });
   ```

3. **Penjelasan Kode Pengujian**:
   - `render(<Counter />)` digunakan untuk merender komponen yang akan diuji.
   - `screen.getByTestId('count-value')` mengambil elemen `<h1>` yang menampilkan nilai `count`.
   - `fireEvent.click()` mensimulasikan klik pada tombol **Increment** atau **Decrement**.
   - `expect().toHaveTextContent()` digunakan untuk memverifikasi bahwa nilai `count` telah berubah sesuai ekspektasi.

### 5.2 Menjalankan Pengujian

1. **Menjalankan Semua Pengujian**:
   - Untuk menjalankan pengujian yang telah dibuat, gunakan perintah berikut di terminal:

   ```bash
   npm test
   ```

   - Jest akan otomatis mencari file dengan ekstensi `.test.js` atau `.spec.js` dan menjalankan pengujian yang ada di dalamnya.

2. **Hasil Pengujian**:
   - Jika pengujian berhasil, Anda akan melihat output bahwa semua test cases telah lulus:

   ```
   PASS  src/__tests__/Counter.test.js
   ✓ renders the initial count value as 0 (42ms)
   ✓ increments count when increment button is clicked (30ms)
   ✓ decrements count when decrement button is clicked (25ms)
   ```

### 5.3 Memeriksa dan Memperbaiki Kegagalan Pengujian

1. **Mengedit Kode dan Pengujian**:
   - Coba ganti logika di komponen `Counter` sehingga tidak berfungsi dengan benar, misalnya ubah operasi pada fungsi `increment`:

   ```javascript
   const increment = () => setCount(count - 1); // Salah, seharusnya +1
   ```

   - Jalankan kembali pengujian untuk melihat test case gagal:

   ```
   FAIL  src/__tests__/Counter.test.js
   ✕ increments count when increment button is clicked (30ms)
   ```

2. **Memperbaiki Kode**:
   - Kembalikan logika `increment` ke keadaan yang benar, lalu pastikan pengujian berjalan dengan baik.

## 6. Latihan

### 6.1 Menambah Fitur ke Komponen
- Tambahkan tombol reset yang mengatur ulang nilai count ke `0`.
- Buat pengujian unit baru untuk tombol reset tersebut.

### 6.2 Menguji Props pada Komponen Lain
- Buat komponen baru `Greeting` yang menerima `name` sebagai props dan menampilkan "Hello, {name}".
- Tulis pengujian untuk memastikan props `name` berfungsi dengan baik dan menghasilkan teks yang benar.

### 6.3 Menguji Event Handling
- Buat pengujian untuk memeriksa event handling seperti tombol yang memicu fungsi `alert` atau perubahan state pada komponen lain.

## 7. Kesimpulan
Dalam praktikum ini, mahasiswa belajar cara menulis pengujian unit menggunakan **Jest** dan **React Testing Library** untuk aplikasi React. Mahasiswa dapat memvalidasi rendering awal, interaksi pengguna (klik tombol), dan perubahan state pada komponen React. Praktikum ini juga mengajarkan cara memperbaiki kegagalan pengujian untuk meningkatkan kualitas kode aplikasi React.

<div style="page-break-before:always"></div>