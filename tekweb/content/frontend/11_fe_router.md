# **Modul Pertemuan 11: React Router & Navigasi**

### **Tujuan Pembelajaran**

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

* Memahami konsep *routing* di aplikasi web modern.  
* Mengenal dan menginstal pustaka react-router-dom.  
* Membuat navigasi antar halaman (*link*) di dalam *Single Page Application* (SPA).  
* Mampu mengimplementasikan rute dinamis untuk menampilkan detail konten.

### **Materi: Membangun Aplikasi Satu Halaman (SPA)**

Pada arsitektur web tradisional, setiap kali Anda mengklik sebuah tautan, browser akan memuat ulang seluruh halaman dari server. Hal ini membuat pengalaman pengguna terasa lambat.

Sebaliknya, **Single Page Application (SPA)** adalah aplikasi web yang memuat satu halaman HTML tunggal dan memperbarui konten halaman tersebut secara dinamis saat pengguna berinteraksi. Pengalaman pengguna menjadi lebih cepat dan mulus karena tidak ada proses *reload* halaman.

#### **1\. Apa itu React Router?**

Untuk membangun SPA, kita membutuhkan pustaka yang dapat mengelola rute di sisi klien (*client-side routing*). **React Router** adalah pustaka standar yang paling banyak digunakan untuk tujuan ini. Ia menyinkronkan UI aplikasi Anda dengan URL di peramban.

#### **2\. Instalasi**

Sebelum memulai, Anda perlu menginstal pustaka react-router-dom di proyek React Anda. Buka terminal di folder proyek dan jalankan perintah:

```

npm install react-router-dom

```

#### **3\. Komponen Utama React Router**

React Router menyediakan beberapa komponen penting untuk membangun navigasi:

* **\<BrowserRouter\>**: Komponen utama yang membungkus seluruh aplikasi Anda. Ia menggunakan API History HTML5 untuk menjaga UI tetap sinkron dengan URL.  
* **\<Routes\>**: Berfungsi sebagai wadah untuk semua \<Route\> yang Anda definisikan. React Router akan mencari rute yang cocok di dalamnya.  
* **\<Route\>**: Mendefinisikan rute individual. Ia memiliki dua atribut utama:  
  * path: URL yang akan dicocokkan.  
  * element: Komponen React yang akan dirender saat URL cocok.  
* **\<Link\>**: Digunakan sebagai pengganti tag \<a\> untuk navigasi internal antar komponen. Menggunakan \<Link\> akan mencegah *reload* halaman.

### **Studi Kasus: Membuat Navigasi Sederhana**

### **Kode React**

Berikut adalah contoh struktur aplikasi React yang menggunakan react-router-dom untuk membuat navigasi sederhana.

Pertama, di file src/index.js atau src/main.jsx, pastikan Anda telah mengimpor \<BrowserRouter\>.

```javascript

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

```

Kemudian, di file src/App.jsx, kita akan mendefinisikan rute dan komponen navigasi.

```javascript

import { Routes, Route, Link } from 'react-router-dom';

// Komponen Halaman
function Home() {
  return <h1>Halaman Utama</h1>;
}

function Tentang() {
  return <h1>Tentang Saya</h1>;
}

function Kontak() {
  return <h1>Hubungi Kami</h1>;
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/tentang">Tentang</Link>
          </li>
          <li>
            <Link to="/kontak">Kontak</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* Definisi Rute */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </div>
  );
}

export default App;

```

### **Tugas Praktikum: Membangun Aplikasi Portofolio SPA**

#### **Tugas**

Modifikasi proyek portofolio Anda dari pertemuan sebelumnya untuk mengubahnya menjadi *Single Page Application* (SPA) dengan tiga halaman utama: Beranda, Proyek, dan Kontak.

#### **Petunjuk Praktikum**

1. **Gunakan Proyek dari Pertemuan 9**: Salin seluruh folder proyek React (nama-aplikasi) dari tugas **pertemuan 9** ke dalam folder pertemuan-11 yang baru.  
2. **Instalasi**: Jalankan npm install react-router-dom di terminal dalam folder proyek pertemuan-11.  
3. **Bungkus Aplikasi**: Di file src/index.js atau src/main.jsx, impor BrowserRouter dan bungkus komponen \<App /\> di dalamnya.  
4. **Buat Halaman (Komponen)**: Buat tiga komponen terpisah untuk setiap halaman:  
   * src/components/Home.jsx (berisi konten halaman utama portofolio Anda).  
   * src/components/Projects.jsx (berisi konten daftar proyek).  
   * src/components/Contact.jsx (berisi informasi kontak).  
5. **Konfigurasi Rute di App.jsx**:  
   * Impor Routes dan Route dari react-router-dom.  
   * Di dalam komponen utama App, definisikan \<Routes\> dengan tiga \<Route\> yang mengarah ke komponen halaman yang telah Anda buat.  
6. **Tambahkan Navigasi**: Ganti navigasi lama Anda (jika ada) dengan \<Link\> dari react-router-dom untuk mengarahkan pengguna ke setiap rute.

### **Petunjuk Pengumpulan**

1. Buat folder baru di repositori GitHub Anda dengan nama pertemuan-11.  
2. Salin seluruh folder proyek React dari tugas **Pertemuan 9** ke dalam folder pertemuan-11 tersebut.  
3. Perbarui file index.html utama di *root* repositori Anda dengan menambahkan tautan ke tugas ini.  
4. *Commit* dan *push* perubahan ke GitHub.

