# **Modul Pertemuan 14: Form Handling & Otentikasi**

### **Tujuan Pembelajaran**

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

* Mengelola data formulir di sisi klien dengan **React Hooks**.  
* Memahami konsep dasar **otentikasi** dan fungsinya.  
* Melindungi rute atau halaman tertentu agar hanya bisa diakses oleh pengguna yang sudah terautentikasi.  
* Mampu mengimplementasikan sistem otentikasi sederhana di Next.js.

### **Materi: Form Handling & Proteksi Rute**

Pada pertemuan sebelumnya, kita telah membangun aplikasi blog statis. Namun, agar blog tersebut bisa dinamis dan dikelola, kita memerlukan cara untuk berinteraksi dengan pengguna, seperti melalui formulir login atau formulir untuk membuat postingan baru. Kita juga perlu memastikan bahwa tidak sembarang orang bisa mengakses halaman admin.

#### **1\. Form Handling di React/Next.js**

Mengelola formulir adalah tugas utama dalam pengembangan *front-end*. Di React, state digunakan untuk mengontrol nilai dari elemen formulir.

**Pendekatan Sederhana dengan useState**:

```javascript

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Data dummy untuk simulasi autentikasi
  const dummyUser = {
    username: 'admin',
    password: 'password123',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset pesan error

    if (username === dummyUser.username && password === dummyUser.password) {
      // Jika kredensial benar, simpan status login ke localStorage
      localStorage.setItem('isLoggedIn', 'true');
      console.log('Login berhasil!');
      // Redirect ke halaman yang dilindungi
      router.push('/admin');
    } else {
      // Jika salah, tampilkan pesan error
      setError('Username atau password salah.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>Halaman Login</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Login
        </button>
      </form>
      {error && (
        <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>
      )}
    </div>
  );
}

```

Karena komponen di atas membutuhkan *state* dan interaksi, ia harus menjadi **Client Component** dengan penanda 'use client';.

#### **2\. Konsep Otentikasi (Authentication)**

**Otentikasi** adalah proses verifikasi identitas pengguna. Ini biasanya dilakukan dengan mencocokkan kredensial (seperti *username* dan kata sandi) yang diberikan pengguna dengan data yang tersimpan di server.

Pada aplikasi Next.js, kita bisa mengimplementasikan logika otentikasi sederhana untuk **melindungi rute (route protection)**, yaitu mencegah akses ke halaman tertentu jika pengguna belum login.

Untuk modul ini, kita akan menggunakan pendekatan simulasi otentikasi, di mana status login disimpan di localStorage dan tidak memerlukan *backend* sungguhan.

#### **3\. Proteksi Rute Sederhana di Next.js**

Kita dapat membuat sebuah *hook* kustom atau sebuah fungsi pembantu untuk memeriksa status login pengguna. Logika ini dapat ditempatkan di dalam komponen yang akan dirender di halaman yang ingin kita lindungi.

```javascript

'use client'; // Pastikan ini Client Component

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!userIsLoggedIn) {
      router.push('/login'); // Redirect ke halaman login jika belum autentikasi
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return <div>Memeriksa status autentikasi...</div>;
  }

  return (
    <div>
      <h1>Halaman Dilindungi</h1>
      <p>Selamat datang, Anda berhasil login!</p>
    </div>
  );
}
```

### **Studi Kasus: Melindungi Rute Aplikasi Blog**

Kita akan mengimplementasikan sistem otentikasi sederhana pada proyek blog Anda dari pertemuan 13\.

#### **Tugas**

Modifikasi proyek blog Anda dari pertemuan sebelumnya untuk menambahkan fitur berikut:

1. **Halaman Login**: Buat halaman login (/login) dengan formulir yang meminta *username* dan kata sandi.  
2. **Halaman Admin (Dilindungi)**: Buat halaman baru (/dashboard atau /admin) yang hanya bisa diakses setelah pengguna berhasil "login".  
3. **Logika Otentikasi**:  
   * Saat formulir login dikirim, simpan status isLoggedIn: 'true' di localStorage.  
   * Pada halaman yang dilindungi (/dashboard), periksa status di localStorage.  
   * Jika pengguna belum login, alihkan (redirect) mereka ke halaman login.  
4. **Navigasi**: Tambahkan tombol "Login" atau "Logout" yang berubah tergantung status autentikasi pengguna.

#### **Petunjuk Praktikum**

1. **Gunakan Proyek dari Pertemuan 13**: Lanjutkan dari proyek Next.js yang telah Anda buat.  
2. **Buat Halaman Login**: Buat file login/page.js di dalam direktori app. Gunakan komponen formulir sederhana yang telah kita pelajari di atas.  
3. **Buat Halaman Admin**: Buat file admin/page.js dan tambahkan logika proteksi rute di dalamnya.  
4. **Simulasi Otentikasi**:  
   * Pada komponen formulir login, tambahkan fungsi handleSubmit yang akan menyimpan localStorage.setItem('isLoggedIn', 'true') setelah formulir dikirim.  
   * Tambahkan tombol logout yang akan menghapus item dari localStorage.

### **Petunjuk Pengumpulan**

1. Buat folder baru di repositori GitHub Anda dengan nama pertemuan-14.  
2. Salin seluruh folder proyek Next.js (nama-aplikasi) ke dalam folder pertemuan-14 tersebut.  
3. Perbarui file index.html utama di *root* repositori Anda dengan menambahkan tautan ke tugas ini.  
4. *Commit* dan *push* perubahan ke GitHub.

