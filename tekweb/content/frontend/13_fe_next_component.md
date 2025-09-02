# **Modul Pertemuan 13: Server Components & Routing**

### **Tujuan Pembelajaran**

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

* Memahami perbedaan antara **Server Components** dan **Client Components** di Next.js.  
* Mengimplementasikan **rute dinamis** untuk membuat halaman yang fleksibel (misalnya, untuk detail postingan blog).  
* Melakukan *data fetching* langsung di dalam Server Component.  
* Mampu membangun aplikasi blog sederhana dengan Next.js.

### **Materi: Server Components & Routing Dinamis**

Pada pertemuan sebelumnya, kita telah belajar bahwa Next.js memiliki keunggulan dalam *Server-Side Rendering* (SSR) dan *Static Site Generation* (SSG). Next.js App Router (sejak versi 13\) memperkenalkan konsep baru yang mengubah cara kita membangun aplikasi: **Server Components**.

#### **1\. Server Components vs. Client Components**

Ini adalah konsep paling mendasar di Next.js App Router.

| Fitur | Server Components | Client Components |
| :---- | :---- | :---- |
| **Lokasi Render** | Di server | Di browser (klien) |
| **Akses ke API** | Ya, bisa langsung mengakses database atau *file system*. | Tidak bisa, harus melalui API *endpoint* atau *client-side fetching*. |
| **Dukungan *Hooks*** | Tidak mendukung useState, useEffect, dll. | Mendukung semua *hooks* React. |
| **Fungsi Utama** | Mengambil data dan merender UI statis. | Mengelola interaksi pengguna dan state. |
| **Penanda** | Default (tidak perlu penanda khusus). | Harus diawali dengan 'use client'; di bagian atas file. |

**Kapan Menggunakan Keduanya?**

* Gunakan **Server Components** untuk halaman yang kontennya tidak berubah-ubah atau untuk bagian UI yang tidak membutuhkan interaksi (misalnya: blog post, halaman produk, footer). Ini optimal untuk performa dan SEO.  
* Gunakan **Client Components** untuk bagian UI yang interaktif (misalnya: tombol "like", formulir, *dropdown* menu).

#### **2\. Dynamic Routing (Rute Dinamis)**

Dalam membuat aplikasi blog, kita tidak mungkin membuat satu file untuk setiap artikel yang ada. Next.js mengatasi ini dengan **Dynamic Routing**. Anda dapat membuat rute yang fleksibel dengan menggunakan tanda kurung siku \[\] pada nama folder atau file.

**Contoh Struktur Folder untuk Blog**:

```

app/
├── blog/
│   ├── page.js           // Halaman untuk menampilkan daftar semua artikel blog
│   └── [slug]/
│       └── page.js       // Halaman untuk menampilkan detail satu artikel

```

\`\`

* app/blog/page.js akan merender halaman utama blog (URL: /blog).  
* app/blog/\[slug\]/page.js akan merender halaman detail untuk URL seperti /blog/artikel-pertama atau /blog/belajar-nextjs. Bagian \[slug\] akan menjadi parameter yang bisa diakses di dalam komponen.

#### **3\. Data Fetching dalam Server Components**

Keunggulan utama Server Components adalah kemampuannya untuk mengambil data secara langsung tanpa *hooks* seperti useEffect. Next.js memperluas fungsi fetch bawaan JavaScript sehingga ia memiliki kemampuan *caching* dan deduplikasi otomatis.

```

// Contoh: Mengambil data di Server Component
async function getPost(slug) {
  // Ini bisa diganti dengan akses database atau fetch dari API internal
  const posts = [
    { slug: 'blog-satu', title: 'Post Pertama' },
    { slug: 'blog-dua', title: 'Post Kedua' },
  ];
  return posts.find(post => post.slug === slug);
}

```

### **Studi Kasus: Membangun Aplikasi Blog**

Berikut adalah contoh cara membuat aplikasi blog sederhana. Kita akan menggunakan data statis di dalam kode untuk menyimulasikan data dari database.

### **Kode [Next.js](http://Next.js)**

File: app/blog/page.js

```javascript

// File: app/blog/page.js
// Halaman daftar artikel blog

import Link from 'next/link';

// Data statis untuk disimulasikan dari database atau file eksternal
const posts = [
  { slug: 'belajar-nextjs', title: 'Belajar Next.js', intro: 'Pengenalan dasar Next.js untuk pemula.' },
  { slug: 'react-components', title: 'Memahami Komponen React', intro: 'Mengenal Server dan Client Components.' },
];

export default function BlogPage() {
  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Semua Artikel</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(post => (
          <li key={post.slug} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <Link href={`/blog/${post.slug}`}>
              <h2 style={{ margin: '0 0 10px 0', color: 'blue' }}>{post.title}</h2>
              <p style={{ margin: 0 }}>{post.intro}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
```

File: app/blog/\[slug\]/page.js

```javascript
// File: app/blog/[slug]/page.js
// Halaman detail artikel blog (rute dinamis)

// Data statis yang sama
const posts = [
  { slug: 'belajar-nextjs', title: 'Belajar Next.js', content: 'Next.js adalah framework React yang powerful. Pelajari cara menggunakannya...' },
  { slug: 'react-components', title: 'Memahami Komponen React', content: 'Komponen adalah blok pembangun UI Anda. Ketahui perbedaannya...' },
];

async function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Artikel Tidak Ditemukan</h1>
      </main>
    );
  }

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/blog">
        <button style={{ marginBottom: '20px' }}>
          &larr; Kembali ke Blog
        </button>
      </Link>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.content}</p>
    </main>
  );
}
```

### **Tugas Praktikum: Membangun Aplikasi Blog**

#### **Tugas**

Modifikasi proyek Next.js Anda dari pertemuan sebelumnya untuk membuat aplikasi blog sederhana. Buatlah:

1. Halaman utama blog (/blog) yang menampilkan daftar semua artikel.  
2. Halaman detail artikel (/blog/\[slug\]) yang menampilkan konten lengkap.

#### **Petunjuk Praktikum**

1. **Gunakan Proyek dari Pertemuan 12**: Lanjutkan dari proyek Next.js yang telah Anda buat pada tugas sebelumnya.  
2. **Siapkan Data**: Buatlah sebuah array objek yang berisi data artikel blog (misalnya, title, slug, dan content).  
3. **Buat Halaman Daftar Blog**: Buat folder blog di dalam direktori app dan tambahkan file page.js di dalamnya. Tampilkan daftar artikel dari data yang telah Anda buat.  
4. **Implementasikan Rute Dinamis**: Buat folder \[slug\] di dalam folder blog, dan tambahkan file page.js di dalamnya. Di file ini, ambil parameter slug dari URL dan tampilkan detail artikel yang sesuai.

### **Petunjuk Pengumpulan**

1. Buat folder baru di repositori GitLab Anda dengan nama pertemuan-13.  
2. Salin seluruh folder proyek Next.js (nama-aplikasi) ke dalam folder pertemuan-13 tersebut.  
3. Perbarui file index.html utama di *root* repositori Anda dengan menambahkan tautan ke tugas ini.  
4. *Commit* dan *push* perubahan ke GitLab.

