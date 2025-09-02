# **Modul Pertemuan 10: State Management dan Hooks**

### **Tujuan Pembelajaran**

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

* Memahami konsep **state** di React dan perannya dalam membuat UI yang interaktif.  
* Mengenal dan memahami fungsi **React Hooks**, khususnya useState dan useEffect.  
* Mampu mengelola data dinamis dalam komponen.  
* Mampu membuat efek samping (*side-effects*) yang terorganisir dalam siklus hidup komponen.

### **Materi: Mengelola Data dan Efek dengan Hooks**

Pada pertemuan sebelumnya, kita telah belajar bahwa komponen adalah "blok bangunan" UI. Namun, agar komponen bisa interaktif dan dinamis, mereka membutuhkan "memori" untuk menyimpan data yang dapat berubah. Inilah peran dari **state**.

#### **1\. Apa itu State?**

**State** adalah data internal sebuah komponen yang dapat berubah seiring waktu. Setiap kali state berubah, React akan secara otomatis memperbarui tampilan komponen tersebut.

Analogi:

Jika komponen adalah sebuah ruangan, maka state adalah barang-barang di dalamnya. Saat Anda memindahkan perabotan atau mengubah dekorasi (mengubah state), tampilan ruangan tersebut akan berubah (komponen di-render ulang).

#### **2\. Mengenal React Hooks**

**Hooks** adalah fungsi khusus yang memungkinkan kita "menghubungkan" komponen fungsional dengan fitur-fitur React, seperti state dan siklus hidup komponen. Hooks selalu diawali dengan kata use.

Dua hooks paling fundamental adalah useState dan useEffect.

#### **3\. useState Hook**

Fungsi dari useState adalah untuk menambahkan state ke komponen fungsional.

##### **Sintaks Dasar:**

```javascript

const [state, setState] = useState(nilaiAwal);
```

* **state**: Variabel yang menampung nilai state saat ini.  
* **setState**: Sebuah fungsi yang digunakan untuk mengubah nilai state. Memanggil fungsi ini akan memicu komponen untuk di-render ulang dengan nilai state yang baru.  
* **useState(nilaiAwal)**: Inisialisasi state dengan nilaiAwal yang kita berikan.

#### **4\. useEffect Hook**

Fungsi dari useEffect adalah untuk menjalankan **efek samping** (*side-effects*) dalam komponen. Efek samping adalah tindakan yang tidak secara langsung mengubah tampilan, seperti:

* Mengambil data dari API.  
* Mengatur atau membersihkan timer.  
* Menangani langganan (*subscription*).

##### **Sintaks Dasar:**

```javascript

useEffect(() => {
  // Kode efek samping
  console.log('Efek dijalankan!');
  
  return () => {
    // Kode pembersihan (opsional)
    console.log('Efek dibersihkan!');
  };
}, [dependencies]);
```

* **Fungsi Utama**: Kode di dalamnya akan dijalankan oleh React.  
* **Array Dependensi (\[dependencies\])**: Array ini mengontrol kapan efek akan dijalankan kembali.  
  * **Array kosong \[\]**: Efek hanya dijalankan **satu kali** saat komponen pertama kali dimuat. Ini ideal untuk mengambil data dari API.  
  * **Tidak ada array**: Efek akan dijalankan **setiap kali** komponen di-render ulang.  
  * **Berisi variabel/state**: Efek akan dijalankan kembali **hanya ketika** salah satu variabel di dalam array berubah.

### **Studi Kasus: Aplikasi Penghitung Sederhana (*Counter App*)**

Kita akan membuat aplikasi yang menampilkan angka dan dua tombol: satu untuk menambah angka dan satu untuk mereset angka. Kita akan menggunakan useState untuk mengelola angka dan useEffect untuk mengamati perubahannya.

### **Kode React**

Salin kode di bawah ini ke dalam file App.js di proyek React Anda.

```javascript
import React, { useState, useEffect } from 'react';

function App() {
  // 1. Menggunakan useState untuk mengelola state 'count'
  const [count, setCount] = useState(0);

  // 2. Menggunakan useEffect untuk menjalankan efek samping
  // Efek ini akan dijalankan setiap kali nilai 'count' berubah
  useEffect(() => {
    console.log(`Nilai counter telah diperbarui menjadi: ${count}`);
  }, [count]); // Array dependensi: efek hanya dijalankan saat 'count' berubah

  // Fungsi untuk menambah nilai counter
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Fungsi untuk mereset nilai counter
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Aplikasi Penghitung</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrement} style={{ margin: '5px' }}>Tambah (+)</button>
      <button onClick={handleReset} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
}

export default App;
```

**Penjelasan Kode**:

* Kita mengimpor useState dan useEffect dari React.  
* useState(0) membuat state bernama count dengan nilai awal 0 dan fungsi pembaruan setCount.  
* useEffect akan mencetak pesan ke konsol setiap kali nilai count berubah. Ini membuktikan bahwa efek samping kita berjalan sesuai dengan state.  
* onClick pada tombol memanggil fungsi handleIncrement atau handleReset, yang pada gilirannya memanggil setCount untuk memperbarui state.

### **Tugas Praktikum: Menambahkan Efek Loading pada Halaman Portofolio**

#### **Tugas**

Tambahkan efek *loading* pada halaman portofolio Anda yang dibuat pada pertemuan 9\. Halaman utama (seperti Header, AboutMe, dll.) hanya akan ditampilkan setelah efek *loading* selesai.

#### **Petunjuk Praktikum**

1. **Gunakan Proyek dari Pertemuan 9**: Salin seluruh folder proyek React (nama-aplikasi) dari tugas **pertemuan 9** ke dalam folder pertemuan-10 yang baru.  
2. **Modifikasi App.js / App.jsx**: Buka file utama komponen Anda (App.js atau App.jsx).  
3. **Implementasikan State untuk Loading**: Gunakan useState untuk membuat state isLoading dengan nilai awal true. Contoh:

```
const [isLoading, setIsLoading] = useState(true);
```

4. **Simulasikan Efek Loading dengan useEffect**: Gunakan useEffect untuk membuat penundaan. Di dalamnya, gunakan setTimeout untuk mengubah state isLoading menjadi false setelah beberapa detik (misalnya, 2000 milidetik). Pastikan array dependensi adalah \[\] agar efek ini hanya berjalan sekali saat komponen pertama kali dimuat. Contoh:

```javascript
useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 2000); // Tunda selama 2 detik
}, []);
```

5. **Lakukan *Conditional Rendering***: Di dalam return, gunakan if-else atau operator kondisional (? :) untuk menampilkan:  
   * Tampilan *loading* (misalnya, \<p\>Loading...\</p\> atau pesan apa pun) jika isLoading bernilai true.  
   * Seluruh halaman portofolio jika isLoading bernilai false.  
6. **Verifikasi Fungsionalitas**: Pastikan:  
   * Saat halaman dimuat, hanya pesan "Loading..." yang terlihat.  
   * Setelah sekitar 2 detik, halaman portofolio Anda akan muncul secara otomatis.  
   * Halaman portofolio Anda tetap berfungsi normal.

### **Petunjuk Pengumpulan**

1. Buat folder baru di repositori GitHub Anda dengan nama pertemuan-10.  
2. Salin seluruh folder proyek React dari tugas **Pertemuan 9** ke dalam folder pertemuan-10 tersebut.  
3. *Commit* dan *push* perubahan ke GitHub.