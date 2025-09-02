# **Modul Pertemuan 16: Autentikasi Lanjutan (Auth0)**

### **Tujuan Pembelajaran**

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

* Memahami konsep dasar **Identity as a Service (IDaaS)**.  
* Mengintegrasikan pustaka Auth0 ke dalam proyek Next.js.  
* Mengimplementasikan alur otentikasi (login, logout, dan status pengguna).  
* Melindungi rute atau halaman tertentu dengan validasi status otentikasi.

### **Materi: Integrasi Auth0 untuk Otentikasi**

Pada pertemuan sebelumnya, kita telah menggunakan localStorage untuk mensimulasikan otentikasi. Pendekatan ini cocok untuk pembelajaran, tetapi dalam aplikasi nyata, kita memerlukan solusi yang lebih aman dan terukur. **Auth0** adalah salah satu penyedia layanan otentikasi terkemuka yang membantu *developer* mengimplementasikan sistem login yang kompleks dengan cepat.

#### **1\. Apa itu Auth0?**

Auth0 adalah platform Identity as a Service (IDaaS) yang menyediakan semua yang Anda butuhkan untuk otentikasi dan otorisasi, seperti halaman login, pendaftaran, verifikasi email, dan lain-lain.

Dengan Auth0, Anda tidak perlu lagi membangun sistem otentikasi dari nol, sehingga Anda bisa fokus pada fitur utama aplikasi Anda.

#### **2\. Konsep Dasar Auth0**

* **Tenant**: Lingkungan khusus Anda di Auth0.  
* **Application**: Representasi aplikasi Anda di dalam Auth0.  
* **Client ID & Client Secret**: Kunci unik untuk mengidentifikasi aplikasi Anda.  
* **Domain**: URL unik untuk *tenant* Anda (contoh: dev-xxxx.auth0.com).  
* **Callback URL**: URL di aplikasi Anda yang akan dituju Auth0 setelah proses login berhasil.

#### **3\. Instalasi dan Persiapan**

Instalasi pustaka Auth0 untuk Next.js:

```

npm install @auth0/nextjs-auth0

```

Selanjutnya, buat file .env.local di *root* proyek Anda dan tambahkan konfigurasi Auth0:

```

AUTH0_SECRET=PANJANG_RANDOM_STRING_APAPUN
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://<DOMAIN_AUTH0_ANDA>
AUTH0_CLIENT_ID=<CLIENT_ID_ANDA>
AUTH0_CLIENT_SECRET=<CLIENT_SECRET_ANDA>

```

#### **4\. Mengimplementasikan Alur Otentikasi**

a. Membuat Auth0 API Route

Buat file \[...auth0\].js di dalam folder app/api/auth/. Ini akan secara otomatis membuat endpoint API untuk login, logout, dan otentikasi.

```javascript

// File: app/api/auth/[...auth0]/route.js
import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth();

```

b. Membuat Komponen Login/Logout

Buat tombol login di Client Component yang mengarah ke API route yang telah dibuat.

```javascript

// File: app/components/AuthButtons.jsx
'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function AuthButtons() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div style={{ padding: '10px' }}>
        <p>Welcome, {user.name}!</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}

```

#### **5\. Melindungi Halaman (Proteksi Rute)**

Next.js App Router memungkinkan Anda untuk melindungi halaman dengan mudah menggunakan withPageAuthRequired dari Auth0.

```javascript

// File: app/dashboard/page.js
// Halaman yang dilindungi

import { getSession } from '@auth0/nextjs-auth0';

// Perhatikan bahwa ini adalah Server Component
export default async function DashboardPage() {
  const { user } = await getSession();

  return (
    <main>
      <h1>Dashboard Pengguna</h1>
      <p>Selamat datang, {user.name}!</p>
      <p>Anda telah berhasil login dan mengakses halaman yang dilindungi.</p>
    </main>
  );
}

```

### **Studi Kasus: Melindungi Rute Aplikasi Blog**

Kita akan memodifikasi proyek blog yang telah kita buat untuk menambahkan fitur login, logout, dan melindungi halaman admin menggunakan Auth0.

### **Tugas Praktikum**

1. **Gunakan Proyek dari Pertemuan 15**: Lanjutkan dari proyek Next.js Anda.  
2. **Daftar ke Auth0**: Buat akun gratis di [Auth0](https://auth0.com/) dan buat aplikasi baru (pilih **Regular Web Applications**).  
3. **Konfigurasi**: Salin Domain, Client ID, dan Client Secret ke file .env.local proyek Anda. Pastikan untuk menambahkan AUTH0\_BASE\_URL dan AUTH0\_SECRET.  
4. **Siapkan Auth0 Wrapper**: Buat file app/layout.js untuk membungkus aplikasi Anda dengan UserProvider dari Auth0.  
5. **Implementasikan Halaman Login/Logout**: Tambahkan tombol login dan logout seperti pada contoh di atas. Tombol ini harus berada di halaman utama atau navigasi.  
6. **Buat Halaman yang Dilindungi**: Buat halaman baru, misalnya /dashboard, yang hanya bisa diakses oleh pengguna yang sudah terautentikasi. Gunakan contoh di atas untuk mengimplementasikan proteksi rute.

### **Petunjuk Pengumpulan**

1. Buat folder baru di repositori GitLab Anda dengan nama pertemuan-16.  
2. Salin seluruh folder proyek Next.js (nama-aplikasi) ke dalam folder pertemuan-16 tersebut.  
3. Perbarui file index.html utama di *root* repositori Anda dengan menambahkan tautan ke tugas ini.  
4. *Commit* dan *push* perubahan ke GitLab.

