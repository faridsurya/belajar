
### Apa itu React?
1. **Apa itu React?**  
   - React adalah library JavaScript untuk membangun antarmuka pengguna (UI).  
   - React memungkinkan pengembang untuk membuat komponen UI yang dapat digunakan kembali dan mengelola perubahan data secara dinamis dengan efisien.  

2. **Manfaat React:**  
   - **Komponen yang Dapat Digunakan Ulang:** Tulis komponen sekali, gunakan kembali di berbagai bagian aplikasi.  
   - **Virtual DOM:** React hanya memperbarui bagian UI yang diperlukan, meningkatkan performa.  
   - **UI Deklaratif:** Tulis kode yang menggambarkan tampilan UI, dan React akan mengatur proses rendering-nya.  
   - **Ekosistem Kuat:** Dukungan komunitas besar serta banyak library dan alat pendukung.  

3. **Pengantar Single Page Applications (SPAs):**  
   - SPA memperbarui halaman secara dinamis tanpa memuat ulang seluruh halaman, memberikan pengalaman pengguna yang lebih *smooth*.  
   - Contoh: Gmail, Facebook, dan Twitter.  

### Menyiapkan Lingkungan Pengembangan

1. **Install Node.js:**  
   - Unduh dan instal Node.js dari [situs resmi Node.js](https://nodejs.org).  
   - Verifikasi instalasi:  
     ```bash
     node -v
     npm -v
     ```

2. **Instal Editor Kode:**  
   - Unduh dan instal [Visual Studio Code](https://code.visualstudio.com/).  

3. **Buat Proyek React dengan `create-react-app`:**  
   - Buka terminal atau command prompt dan jalankan:  
     ```bash
     npx create-react-app my-first-react-app
     cd my-first-react-app
     npm start
     ```  
	Ini akan membuka aplikasi di browser pada alamat `http://localhost:3000/`. Anda akan melihat halaman sambutan default React.

### Menjelajahi Struktur Folder Proyek React

1. **Buka Proyek di Visual Studio Code:**  
   - Jalankan perintah:  
     ```bash
     code .
     ```

2. **Pahami File dan Folder Utama:**  
   - **`public/`:** Berisi file statis seperti `index.html`. React akan menyuntikkan aplikasi Anda ke dalam `<div id="root">` di file ini.  
   - **`src/`:** Tempat kode aplikasi Anda berada.  
     - **`App.js`:** Komponen utama yang berisi JSX untuk aplikasi Anda.  
     - **`index.js`:** Titik masuk aplikasi. File ini merender komponen `<App />` ke dalam `index.html`.  
   - **`node_modules/`:** Semua dependensi untuk aplikasi.  
   - **`package.json`:** File konfigurasi yang mencantumkan dependensi dan skrip.  

### Membangun Aplikasi "Hello, World!" Sederhana dengan JSX

1. **Pahami JSX:**  
   - JSX adalah ekstensi sintaks untuk JavaScript yang mirip dengan HTML.  
   - Contoh JSX:  
     ```jsx
     const element = <h1>Hello, World!</h1>;
     ```

2. **Edit `App.js`:**  
   - Buka file `src/App.js` dan ganti isinya dengan:  
     ```jsx
     function App() {
       return (
         <div>
           <h1>Hello, World!</h1>
           <p>Selamat datang di aplikasi React pertama Anda.</p>
         </div>
       );
     }

     export default App;
     ```

3. **Simpan dan Refresh:**  
   - Simpan file. Browser Anda akan secara otomatis memperbarui tampilan untuk menampilkan pesan "Hello, World!".  

### Tugas 
**Tugas Rumah:**  
  - Modifikasi aplikasi "Hello, World!" untuk menampilkan nama Anda atau pesan sambutan.
  - Tambahkan paragraf baru yang mendeskripsikan apa yang ingin Anda bangun dengan React.