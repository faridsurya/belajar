# **Modul Pertemuan 12: Pengenalan Next.js**

### **Tujuan Pembelajaran**

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

* Memahami apa itu **Next.js** dan manfaatnya dibandingkan hanya menggunakan React.  
* Mengerti konsep **Server-Side Rendering (SSR)** dan **Static Site Generation (SSG)**.  
* Mampu membuat proyek Next.js baru dan memahami struktur foldernya.  
* Mengimplementasikan sistem *routing* berbasis file untuk membuat beberapa halaman.  
* Mampu membuat website statis sederhana dengan navigasi antar halaman.

### **Materi: Membangun Website dengan Next.js**

Pada pertemuan sebelumnya, kita telah belajar bahwa React sangat efektif untuk membangun antarmuka pengguna yang dinamis di sisi klien. Namun, untuk aplikasi web yang lebih besar, ada tantangan seperti performa awal yang lambat dan isu **SEO** (*Search Engine Optimization*) karena konten tidak tersedia saat halaman pertama kali dimuat.

**Next.js** adalah sebuah *framework* React yang mengatasi tantangan ini. Next.js menyediakan semua fitur yang dibutuhkan untuk membangun aplikasi web modern, termasuk *server-side rendering*, *static site generation*, dan sistem *routing* yang terintegrasi.

#### **1\. Mengapa Menggunakan Next.js?**

Next.js adalah pilihan populer di industri karena berbagai keunggulannya:

* **Server-Side Rendering (SSR)**: Konten HTML sudah dibuat di server sebelum dikirim ke browser. Ini membuat halaman memuat lebih cepat dan lebih mudah diindeks oleh mesin pencari.  
* **Static Site Generation (SSG)**: Next.js dapat membuat file HTML statis dari komponen Anda saat proses *build*. Halaman-halaman ini sangat cepat karena tidak perlu memproses data di server setiap kali diakses.  
* **Routing Berbasis File**: Anda tidak perlu menginstal react-router-dom atau pustaka serupa. Next.js secara otomatis membuat rute berdasarkan nama file di dalam folder app/.  
* **API Routes**: Next.js memungkinkan Anda membuat *backend endpoint* langsung di dalam proyek yang sama, mempermudah pengembangan aplikasi *full-stack*.

#### **2\. Next.js: React dengan Kekuatan Tambahan**

Sangat penting untuk memahami bahwa **Next.js adalah *framework* yang dibangun di atas React.** Ini berarti semua yang telah Anda pelajari tentang React, seperti komponen, JSX, *state* (useState), dan *hooks* (useEffect), tetap berlaku sepenuhnya di Next.js.

Perbedaan mendasarnya terletak pada cara halaman disajikan kepada pengguna:

| Fitur | React Murni (CRA/Vite) | Next.js |
| :---- | :---- | :---- |
| **Penyajian Halaman** | **Client-Side Rendering (CSR)**: Halaman kosong dimuat terlebih dahulu, lalu JavaScript memuat dan merender konten. | **Server-Side Rendering (SSR)** & **Static Site Generation (SSG)**: Konten HTML sudah siap saat halaman dimuat, membuat halaman sangat cepat. |
| **Manajemen Rute** | Membutuhkan pustaka tambahan seperti react-router-dom dengan konfigurasi manual. | **Built-in & Berbasis File**: Cukup buat file baru di dalam folder app/ untuk membuat rute. |
| **Performa & SEO** | Potensi lambat saat muat awal dan kurang optimal untuk SEO karena konten tidak langsung tersedia. | Lebih cepat dan sangat optimal untuk SEO karena konten sudah ada di server. |
| **API** | Membutuhkan server backend terpisah untuk API. | Memiliki **API Routes** bawaan untuk membuat API. |

#### 

#### **3\. Instalasi dan Persiapan Proyek**

Untuk memulai proyek Next.js, Anda memerlukan Node.js yang sudah terinstal. Buka terminal atau Command Prompt dan jalankan perintah berikut:

```

npx create-next-app@latest nama-aplikasi
```

Setelah menjalankan perintah ini, Anda akan diminta untuk menjawab beberapa pertanyaan konfigurasi, seperti:

* Apakah akan menggunakan TypeScript?  
* Apakah akan menggunakan ESLint?  
* Apakah akan menggunakan Tailwind CSS?  
* Apakah akan menggunakan src directory?  
* Apakah akan menggunakan App Router? (Pilih: Ya)

Jawablah pertanyaan tersebut sesuai dengan preferensi Anda.

#### **4\. Struktur Folder dan Routing**

Next.js menggunakan sistem *routing* yang sangat intuitif. Setiap folder dan file di dalam direktori app akan secara otomatis menjadi sebuah rute.

Berikut adalah contoh struktur folder yang sederhana:

```

nama-aplikasi/
├── app/
│   ├── page.js         // -> Halaman utama (beranda) di URL: /
│   ├── about/
│   │   └── page.js     // -> Halaman "Tentang" di URL: /about
│   ├── blog/
│   │   └── page.js     // -> Halaman "Blog" di URL: /blog
│   └── layout.js       // Layout global untuk semua halaman
├── public/             // Digunakan untuk file statis seperti gambar
└── package.json

```

### **Studi Kasus: Membuat Website Statis Sederhana**

Berikut adalah contoh cara membuat website statis dengan dua halaman: Beranda dan Tentang. Kita akan menggunakan sistem *routing* berbasis file dan komponen \<Link\> dari Next.js untuk navigasi.

### **Kode Next.js**

```javascript

// File: app/page.js
// Halaman utama (URL: /)

import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Selamat Datang di Website Saya</h1>
      <p>Ini adalah halaman beranda statis yang dibuat dengan Next.js.</p>
      <Link href="/about">
        <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
          Tentang Saya
        </button>
      </Link>
    </main>
  );
}

// File: app/about/page.js
// Halaman Tentang (URL: /about)

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Tentang Saya</h1>
      <p>Halo, saya seorang mahasiswa yang sedang belajar Teknologi Web. Halaman ini adalah contoh aplikasi Next.js statis.</p>
      <Link href="/">
        <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
          Kembali ke Beranda
        </button>
      </Link>
    </main>
  );
}
```

**Penjelasan Kode**:

* Setiap file page.js di dalam direktori app akan menjadi halaman yang dapat diakses melalui URL.  
* Next.js menggunakan komponen **\<Link\>** untuk navigasi. Ini adalah pengganti tag \<a\> yang akan melakukan navigasi tanpa memuat ulang halaman, menjaga pengalaman pengguna tetap mulus.

### **Tugas Praktikum: Membuat Website Statis dengan Next.js**

#### **Tugas**

Buat sebuah website statis sederhana menggunakan Next.js dengan dua halaman: Beranda dan Tentang. Gunakan proyek portofolio dari pertemuan sebelumnya sebagai dasar.

#### **Petunjuk Praktikum**

1. **Buat Proyek Next.js**: Ikuti instruksi di bagian "Instalasi dan Persiapan Proyek" untuk membuat proyek Next.js baru.  
2. **Halaman Utama (/)**: Modifikasi file app/page.js untuk membuat halaman beranda yang berisi perkenalan singkat tentang diri Anda.  
3. **Halaman Kedua (/about)**: Buat folder about di dalam direktori app, lalu buat file page.js di dalamnya. Isi halaman ini dengan informasi pribadi, seperti hobi atau riwayat pendidikan.  
4. **Navigasi**: Tambahkan navigasi \<Link\> di kedua halaman agar pengguna dapat berpindah dari Beranda ke Tentang dan sebaliknya.

### **Petunjuk Pengumpulan**

1. Buat folder baru di repositori GitHub Anda dengan nama pertemuan-12.  
2. Salin seluruh folder proyek Next.js (nama-aplikasi) ke dalam folder pertemuan-12 tersebut.  
3. Perbarui file index.html utama di *root* repositori Anda dengan menambahkan tautan ke tugas ini.  
4. *Commit* dan *push* perubahan ke GitHub.

