# **Modul Pertemuan 9: Pengenalan React**

### **Tujuan Pembelajaran**

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

* Memahami apa itu *library* JavaScript dan apa fungsi React.  
* Mengerti konsep dasar **komponen** dan cara berpikir dengan komponen.  
* Memahami sintaks **JSX** dan perbedaannya dengan HTML.  
* Membuat dan merender komponen React pertama mereka.

### **Materi: Membangun dengan Komponen**

React adalah sebuah *library* JavaScript untuk membangun antarmuka pengguna. Dibangun dan dikelola oleh Facebook (sekarang Meta), React merevolusi cara *developer* mendekati pengembangan web dengan konsep **komponen**.

#### **1\. Mengapa React?**

Sebelum React, halaman web dibuat dengan memanipulasi DOM secara langsung. Ini bisa menjadi rumit dan sulit dikelola seiring bertambahnya fungsionalitas. React menyelesaikan masalah ini dengan:

* **Pendekatan Deklaratif**: Anda hanya perlu mendeskripsikan tampilan yang Anda inginkan, dan React akan mengurus sisanya.  
* **Reusable Components**: Anda bisa membuat potongan-potongan UI yang dapat digunakan kembali (*reusable*) dan mengelola logikanya secara terpisah.  
* **Virtual DOM**: React menggunakan salinan virtual dari DOM yang memungkinkan pembaruan tampilan yang sangat cepat dan efisien.

#### **2\. Apa itu Komponen?**

Dalam React, antarmuka pengguna dibangun dari potongan-potongan yang disebut **komponen**. Sebuah komponen adalah fungsi JavaScript yang mengembalikan kode tampilan (biasanya JSX).

Analogi Sederhana:

Bayangkan sebuah halaman web seperti LEGO. Setiap potongan LEGO, seperti blok, roda, atau jendela, adalah sebuah komponen. Anda bisa menggabungkan komponen-komponen ini untuk membangun struktur yang lebih besar. Komponen yang lebih besar ini (misalnya, sebuah mobil) juga dapat dianggap sebagai komponen yang terdiri dari komponen-komponen yang lebih kecil.

Ada dua jenis komponen:

* **Komponen Fungsional**: Ditulis sebagai fungsi JavaScript. Ini adalah cara modern dan yang paling disarankan dalam React.  
* **Komponen Berbasis Kelas**: Ditulis sebagai kelas JavaScript. Cara ini masih digunakan dalam kode lama, tetapi umumnya tidak disarankan untuk proyek baru.

#### **3\. Memahami JSX**

**JSX** (*JavaScript XML*) adalah ekstensi sintaks yang memungkinkan Anda menulis kode seperti HTML di dalam file JavaScript. Ini membuat kode tampilan lebih mudah dibaca dan dipahami.

* **Perbedaan dengan HTML**:  
  * **className vs. class**: Di JSX, Anda menggunakan className alih-alih class untuk menambahkan kelas CSS.  
  * **Satu *Root Element***: Setiap komponen hanya bisa mengembalikan satu elemen utama.  
  * **Kurung Kurawal {}**: Anda dapat menyisipkan kode JavaScript, variabel, atau ekspresi di dalam kurung kurawal.

### **Contoh Penerapan React: Menampilkan Daftar Item**

Ada tiga cara untuk menggunakan React, masing-masing dengan keunggulan tersendiri. Untuk pembelajaran, kita akan menggunakan cara paling sederhana, yaitu dengan CDN. Namun, untuk proyek nyata, cara modern adalah standar industri.

#### **1\. Cara Sederhana (Menggunakan HTML dan CDN)**

Ini adalah cara termudah untuk memulai, tanpa perlu instalasi tambahan. Anda hanya perlu satu file HTML. Contoh di bawah menunjukkan cara menampilkan daftar item menggunakan array di React.

**Kode HTML & JavaScript**

Salin seluruh kode di bawah ini dan simpan dalam sebuah file bernama index.html.

```

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Daftar Item React</title>
  <script src="[https://unpkg.com/react@18/umd/react.development.js](https://unpkg.com/react@18/umd/react.development.js)" crossorigin></script>
  <script src="[https://unpkg.com/react-dom@18/umd/react-dom.development.js](https://unpkg.com/react-dom@18/umd/react-dom.development.js)" crossorigin></script>
  <script src="[https://unpkg.com/@babel/standalone/babel.min.js](https://unpkg.com/@babel/standalone/babel.min.js)"></script>
</head>
<body>

  <div id="root"></div>

  <script type="text/babel">
    function DaftarBuah() {
      // Data yang akan ditampilkan
      const buah = ['Apel', 'Jeruk', 'Mangga', 'Pisang'];

      return (
        <div>
          <h1>Daftar Buah</h1>
          <ul>
            {/* Menggunakan method .map() untuk membuat elemen list untuk setiap item */}
            {buah.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }

    // Mendapatkan elemen root dari HTML
    const root = ReactDOM.createRoot(document.getElementById('root'));

    // Merender (menampilkan) komponen ke dalam root
    root.render(<DaftarBuah />);
  </script>

</body>
</html>

```

**Penjelasan Contoh**

* **Komponen DaftarBuah**: Ini adalah komponen fungsional yang berisi data (const buah) dan logika untuk menampilkan data tersebut.  
* **JSX dan map()**: Untuk menampilkan setiap item dalam array, kita menggunakan metode .map(). Metode ini akan mengulang setiap item di array dan mengembalikan sebuah elemen \<li\> untuk setiap itemnya.  
* **key={index}**: Setiap elemen yang dibuat secara dinamis dalam list harus memiliki atribut key yang unik. Ini membantu React mengidentifikasi dan memperbarui elemen dengan efisien.  
* **ReactDOM.createRoot() & root.render()**: Kode ini bertugas "menghidupkan" aplikasi React kita. createRoot() menunjuk ke elemen \<div id="root"\> sebagai wadah, dan render() menempatkan komponen DaftarBuah di dalamnya.

Contoh ini memberikan gambaran yang sangat baik tentang bagaimana React mengelola data dalam bentuk array dan menampilkannya di UI, yang akan menjadi fondasi untuk konsep *state* yang akan kita pelajari di pertemuan berikutnya.

#### **2\. Cara Modern (Menggunakan Node.js & Create React App)**

Untuk proyek React profesional, kita menggunakan Node.js dan sebuah *bundler* seperti **Create React App (CRA)**. CRA adalah alat yang menyediakan semua konfigurasi yang diperlukan untuk memulai sebuah proyek React modern dengan cepat, tanpa harus mengurus pengaturan yang rumit.

Pendekatan ini menawarkan banyak keunggulan, seperti:

* **Modularity**: Kode dapat dipecah ke dalam banyak file, membuat proyek lebih terorganisir.  
* **Development Server**: Server lokal yang sangat cepat untuk pengembangan.  
* **Hot Module Reloading**: Perubahan pada kode akan langsung terlihat di browser tanpa perlu me-reload halaman.

Berikut adalah langkah-langkah untuk memulai proyek React modern dengan CRA:

1. **Instalasi Node.js**: Pastikan Anda sudah menginstal Node.js di komputer Anda. Anda bisa mengunduhnya dari [situs resmi Node.js](https://nodejs.org/). CRA dan alat-alat pengembangannya membutuhkan Node.js.  
2. **Buat Proyek Baru**: Buka terminal atau Command Prompt dan jalankan perintah berikut:

```
npx create-react-app nama-aplikasi
```

3. Perintah ini akan membuat folder baru bernama nama-aplikasi dengan struktur proyek React yang sudah siap pakai.  
4. **Masuk ke Folder Proyek**:

```
cd nama-aplikasi
```

5. **Jalankan Aplikasi**:

```
npm start
```

6. Perintah ini akan menjalankan server lokal, dan aplikasi React Anda akan terbuka di browser secara otomatis.

Setelah menjalankan perintah terakhir, Anda bisa menemukan kode sumbernya di folder src dan memodifikasi file App.js untuk membuat komponen Anda sendiri. Struktur proyek CRA standar terlihat seperti ini:

```

nama-aplikasi/
├── node_modules/
├── public/
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
├── .gitignore
├── package.json
└── README.md

```

#### **3\. Alternatif Modern (Menggunakan Node.js & Vite)**

Sebagai alternatif modern yang lebih ringan dan cepat dari CRA, Anda bisa menggunakan **Vite**. Vite dirancang untuk mempercepat proses pengembangan, terutama saat proyek menjadi sangat besar.

Berikut adalah langkah-langkah untuk memulai proyek React dengan Vite:

1. **Instalasi Node.js**: Sama seperti CRA, pastikan Node.js sudah terinstal.  
2. **Buat Proyek Baru**: Buka terminal atau Command Prompt dan jalankan perintah berikut:

```
npm create vite@latest nama-aplikasi -- --template react
```

3. Perintah ini akan membuat folder nama-aplikasi dengan struktur proyek React yang minimalis dan teroptimasi.  
4. **Masuk ke Folder Proyek**:

```
cd nama-aplikasi
```

5. **Instalasi Dependencies**:

```
npm install
```

6. **Jalankan Aplikasi**:

```
npm run dev
```

7. Aplikasi Anda akan berjalan di alamat http://localhost:5173 atau port lain.

### **Contoh-contoh Pembuatan Komponen pada React**

#### Langkah 1: Setup Project dengan Vite \+ Tailwind

```shell
npm create vite@latest belajar-komponen-ui -- --template react
cd belajar-komponen-ui
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Langkah 2: Konfigurasi Tailwind

`tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Komponen UI Dasar Sederhana

##### 1\. Button Component (`src/components/Button.jsx`)

```
function Button({ children, onClick, disabled }) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
```

##### 2\. Card Component (`src/components/Card.jsx`)

```
function Card({ children, title }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      {children}
    </div>
  )
}

export default Card
```

##### 3\. Input Field Component (`src/components/InputField.jsx`)

```
function InputField({ label, type = 'text', placeholder }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default InputField
```

##### 4\. Alert Component (`src/components/Alert.jsx`)

```
function Alert({ children, type = 'info' }) {
  let bgColor = 'bg-blue-100'
  let textColor = 'text-blue-800'
  
  if (type === 'success') {
    bgColor = 'bg-green-100'
    textColor = 'text-green-800'
  } else if (type === 'warning') {
    bgColor = 'bg-yellow-100'
    textColor = 'text-yellow-800'
  } else if (type === 'error') {
    bgColor = 'bg-red-100'
    textColor = 'text-red-800'
  }

  return (
    <div className={`p-4 rounded-lg ${bgColor} ${textColor} mb-4`}>
      {children}
    </div>
  )
}

export default Alert
```

##### 5\. Main App Component (`src/App.jsx`)

```
import Button from './components/Button'
import Card from './components/Card'
import InputField from './components/InputField'
import Alert from './components/Alert'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Belajar Komponen UI React
        </h1>

        {/* Button Examples */}
        <Card title="Contoh Button">
          <div className="space-y-4">
            <Button>Button Biasa</Button>
            <Button disabled>Button Disabled</Button>
          </div>
        </Card>

        {/* Input Field Examples */}
        <Card title="Contoh Input Field" className="mt-6">
          <InputField 
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkap"
          />
          <InputField 
            label="Email"
            type="email"
            placeholder="email@contoh.com"
          />
          <InputField 
            label="Password"
            type="password"
            placeholder="Masukkan password"
          />
        </Card>

        {/* Alert Examples */}
        <Card title="Contoh Alert" className="mt-6">
          <Alert type="info">
            Ini adalah pesan informasi biasa
          </Alert>
          <Alert type="success">
            ✅ Data berhasil disimpan
          </Alert>
          <Alert type="warning">
            ⚠️ Harap periksa kembali data Anda
          </Alert>
          <Alert type="error">
            ❌ Terjadi kesalahan pada sistem
          </Alert>
        </Card>

        {/* Form Example */}
        <Card title="Contoh Form Sederhana" className="mt-6">
          <form className="space-y-4">
            <InputField 
              label="Nama Pengguna"
              placeholder="Masukkan username"
            />
            <InputField 
              label="Email"
              type="email"
              placeholder="email@contoh.com"
            />
            <InputField 
              label="Password"
              type="password"
              placeholder="Masukkan password"
            />
            <Button>Daftar</Button>
          </form>
        </Card>

        {/* Profile Card Example */}
        <Card title="Kartu Profil" className="mt-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              JS
            </div>
            <div>
              <h4 className="text-lg font-semibold">John Smith</h4>
              <p className="text-gray-600">john.smith@email.com</p>
              <p className="text-gray-500">Web Developer</p>
            </div>
          </div>
          <div className="mt-4">
            <Button>Edit Profil</Button>
          </div>
        </Card>

        {/* Product Card Example */}
        <Card title="Kartu Produk" className="mt-6">
          <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-500">Gambar Produk</span>
          </div>
          <h4 className="text-xl font-semibold mb-2">Laptop Gaming</h4>
          <p className="text-gray-600 mb-4">Spesifikasi tinggi untuk gaming</p>
          <p className="text-2xl font-bold text-green-600 mb-4">Rp 15.000.000</p>
          <div className="flex space-x-2">
            <Button>Beli Sekarang</Button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Keranjang
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default App
```

##### Penjelasan Komponen:

1\. **Button Component**

- Tombol sederhana dengan style dasar  
- Support disabled state  
- Hover effect

2\. **Card Component**

- Container dengan background putih  
- Shadow dan border  
- Title opsional

3\. **InputField Component**

- Input text dengan label  
- Support berbagai type (text, email, password)  
- Style focus yang jelas

4\. **Alert Component**

- Kotak pesan dengan warna berbeda  
- 4 tipe: info, success, warning, error  
- Simple dan mudah dipahami

##### Contoh Penggunaan dalam Aplikasi:

Form Sederhana

```
<Card title="Form Login">
  <InputField label="Email" type="email" placeholder="Email Anda" />
  <InputField label="Password" type="password" placeholder="Password" />
  <Button>Login</Button>
</Card>
```

Profile Card

```
<Card title="Profil Saya">
  <div className="flex items-center">
    <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
    <div className="ml-4">
      <h4>Nama User</h4>
      <p>user@email.com</p>
    </div>
  </div>
  <Button className="mt-4">Edit Profil</Button>
</Card>
```

Product Display

```
<Card>
  <h4>Nama Produk</h4>
  <p>Deskripsi singkat produk</p>
  <p>Rp 100.000</p>
  <Button>Beli</Button>
</Card>
```

Jalankan dengan `npm run dev` untuk melihat hasilnya\!

### **Tugas Praktikum: Membuat Halaman Portofolio Sederhana**

#### **Tugas**

Buat sebuah halaman portofolio pribadi sederhana menggunakan React dengan pendekatan komponen. Halaman ini harus menampilkan beberapa bagian dasar, seperti perkenalan, daftar proyek, dan kontak.

#### **Petunjuk Praktikum**

Gunakan salah satu dari **cara modern** (Create React App atau Vite) yang telah dijelaskan di atas. Ikuti langkah-langkah berikut:

1. **Buat Proyek Baru**: Ikuti instruksi di bagian "Cara Modern" untuk membuat proyek React baru Anda.  
2. Buat komponen UI seperti Button, Card, dan komponen lain yang diperlukan dan bisa digunakan secara berulang (reusable).  
3. **Buat Komponen-Komponen**: Di dalam folder `src`, buat beberapa komponen fungsional terpisah (misalnya, di file-file terpisah):  
   * `Header.jsx` untuk menampilkan nama dan navigasi.  
   * `AboutMe.jsx` untuk deskripsi diri singkat.  
   * `Projects.jsx` untuk menampilkan daftar proyek.  
   * `Contact.jsx` untuk informasi kontak.  
4. **Gabungkan Komponen**: Impor semua komponen yang telah Anda buat ke dalam file utama `App.jsx` dan gabungkan mereka untuk membentuk halaman portofolio yang lengkap.  
5. **Isi Konten**: Tambahkan konten dummy (teks dan data contoh) untuk mengisi setiap komponen.

   ### **Petunjuk Pengumpulan**

1. Buat folder baru di repositori GitHub Anda dengan nama `pertemuan-9`.  
2. Salin seluruh folder proyek React (`nama-aplikasi`) ke dalam folder `pertemuan-9` tersebut.  
3. Perbarui file `index.html` utama di *root* repositori Anda dengan menambahkan tautan ke tugas ini.  
4. *Commit* dan *push* perubahan ke GitHub.

