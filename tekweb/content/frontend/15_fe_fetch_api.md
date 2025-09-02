# **Modul Pertemuan 15: Menggunakan API Eksternal**

### **Tujuan Pembelajaran**

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

* Memahami apa itu **API** (*Application Programming Interface*) dan perannya.  
* Memahami konsep **metode HTTP** (GET, POST, dll.) dan fungsinya.  
* Melakukan *data fetching* dari API eksternal menggunakan fungsi fetch() di Next.js.  
* Mengolah data dalam format **JSON** yang diterima dari API.  
* Mampu membangun aplikasi web dinamis yang menampilkan data dari sumber eksternal.

### **Materi: Menggunakan API Eksternal**

Hingga saat ini, data yang kita gunakan dalam proyek masih bersifat statis, yaitu data yang ditulis langsung di dalam kode. Untuk membuat aplikasi yang dinamis dan terhubung dengan dunia nyata, kita perlu berinteraksi dengan **API**.

#### **1\. Memahami API**

Secara sederhana, API adalah "jembatan" yang memungkinkan dua aplikasi yang berbeda untuk berkomunikasi dan bertukar data.

Ketika Anda membuka aplikasi cuaca, aplikasi tersebut tidak menyimpan semua data cuaca di dalamnya. Sebaliknya, ia mengirimkan permintaan ke API cuaca eksternal dan menerima data cuaca terkini sebagai respons.

Data yang dipertukarkan oleh API umumnya berada dalam format **JSON** (*JavaScript Object Notation*). JSON adalah format teks ringan untuk menyimpan dan mentransfer data. Anda sudah terbiasa dengan objek JavaScript; JSON sangat mirip dengan itu.

Contoh data JSON:

```json

{
  "judul": "Inception",
  "tahun": 2010,
  "sutradara": "Christopher Nolan",
  "aktor": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]
}

```

#### **2\. Memahami Metode HTTP (GET, POST, dll.)**

Setiap kali browser atau aplikasi Anda berkomunikasi dengan API, ia menggunakan **HTTP (*Hypertext Transfer Protocol*)** dan mengirimkan permintaan dengan metode tertentu. Metode-metode ini menunjukkan jenis operasi yang ingin Anda lakukan.

Berikut adalah beberapa metode yang paling umum:

* **GET**: Digunakan untuk **mengambil** atau meminta data dari API. Ini adalah metode yang paling sering Anda gunakan untuk menampilkan data (seperti daftar postingan).  
* **POST**: Digunakan untuk **mengirimkan** data baru ke API untuk dibuat (misalnya: membuat postingan baru, mengirimkan formulir pendaftaran).  
* **PUT / PATCH**: Digunakan untuk **memperbarui** data yang sudah ada. PUT biasanya digunakan untuk memperbarui seluruh data, sementara PATCH untuk memperbarui sebagian data.  
* **DELETE**: Digunakan untuk **menghapus** data dari API.

Fungsi fetch() secara default menggunakan metode GET, tetapi Anda bisa menentukan metode lain dengan menyertakan objek konfigurasi.

#### **3\. Data Fetching di Next.js**

Karena Next.js mendukung **Server Components**, kita bisa melakukan *data fetching* langsung di server. Ini sangat efisien karena data diambil sebelum halaman dikirim ke browser, menghasilkan waktu muat yang lebih cepat.

Fungsi bawaan JavaScript, yaitu fetch(), adalah cara paling umum untuk mengambil data dari API. Next.js telah mengoptimalkan fetch() agar bekerja dengan sangat baik di Server Components, termasuk fitur *caching* otomatis.

**Contoh Penggunaan fetch() dengan Metode GET**:

```javascript

// Komponen yang mengambil data dari API eksternal
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // Pastikan respons berhasil (status 200)
  if (!res.ok) {
    throw new Error('Gagal mengambil data.');
  }
  return res.json();
}

export default async function PostsList() {
  const posts = await getPosts();

  return (
    <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Daftar Postingan</h1>
      {posts.slice(0, 10).map(post => (
        <div key={post.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>{post.title}</h3>
          <p>{post.body.substring(0, 100)}...</p>
        </div>
      ))}
    </main>
  );
}

```

**Contoh Penggunaan fetch() dengan Metode POST**:

Untuk mengirimkan data, Anda perlu menambahkan method dan body ke dalam fetch().

```javascript

async function createPost() {
  const newPost = {
    title: 'Judul Postingan Baru',
    body: 'Isi dari postingan baru yang akan dikirim.',
    userId: 1,
  };

  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });

  if (!res.ok) {
    throw new Error('Gagal membuat postingan.');
  }

  const result = await res.json();
  console.log('Postingan berhasil dibuat:', result);
}

```

### **Studi Kasus: Membuat Aplikasi Blog Sederhana**

Pada tugas ini, kita akan membangun aplikasi blog sederhana yang mengambil data dari API publik **JSONPlaceholder** dan menampilkannya. Aplikasi akan memiliki dua halaman: daftar postingan dan detail postingan.

### **Tugas Praktikum**

Modifikasi proyek Next.js Anda untuk membuat aplikasi yang menampilkan daftar postingan dari sebuah API publik.

1. **Halaman Daftar Postingan (/posts)**: Tampilkan daftar postingan dalam bentuk kartu atau daftar sederhana.  
2. **Halaman Detail Postingan (/posts/\[id\])**: Buat rute dinamis yang menampilkan detail lengkap dari satu postingan.

### **Petunjuk Praktikum**

1. **Gunakan Proyek dari Pertemuan 14**: Lanjutkan dari proyek Next.js yang telah Anda buat.  
2. **Pilih API**: Gunakan API publik **JSONPlaceholder** yang tidak memerlukan kunci API. Anda bisa mengambil daftar postingan dari https://jsonplaceholder.typicode.com/posts dan detail postingan dari https://jsonplaceholder.typicode.com/posts/1.  
3. **Fetch Data di Server Component**: Buat Server Component baru, misalnya di app/posts/page.js, dan gunakan async/await dengan fetch() untuk mengambil data daftar postingan.  
4. **Implementasikan Dynamic Routing**:  
   * Buat folder \[id\] di dalam folder posts.  
   * Buat file page.js di dalam folder \[id\].  
   * Gunakan params.id dari URL untuk mengambil data detail postingan dari API yang sesuai, misalnya https://jsonplaceholder.typicode.com/posts/${params.id}.  
5. **Tampilkan Data**: Render data yang diterima di halaman, pastikan data seperti judul, dan isi postingan ditampilkan dengan benar.

### **Petunjuk Pengumpulan**

1. Buat folder baru di repositori GitLab Anda dengan nama pertemuan-15.  
2. Salin seluruh folder proyek Next.js (nama-aplikasi) ke dalam folder pertemuan-15 tersebut.  
3. Perbarui file index.html utama di *root* repositori Anda dengan menambahkan tautan ke tugas ini.  
4. *Commit* dan *push* perubahan ke GitLab.

