# **Modul Pertemuan 6: JavaScript dan DOM**

### **Tujuan Pembelajaran**

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

* Memahami konsep *Document Object Model* (DOM) dan perannya dalam pengembangan web.  
* Mengakses elemen HTML menggunakan JavaScript.  
* Memodifikasi konten, atribut, dan *styling* elemen HTML dengan JavaScript.  
* Menambahkan dan menghapus elemen HTML secara dinamis.  
* Menangani *event* (misalnya: klik, input) pada elemen HTML.

### **Materi: Interaksi Web dengan JavaScript dan DOM**

#### **1\. Memahami DOM (*Document Object Model*)**

**DOM** adalah representasi terstruktur dari dokumen HTML sebagai sebuah pohon objek, di mana setiap *node* pada pohon tersebut adalah sebuah elemen HTML. DOM memungkinkan JavaScript untuk mengakses, memanipulasi, dan mengubah struktur serta konten halaman web setelah halaman tersebut dimuat.

#### **2\. Mengakses Elemen HTML**

Sebelum memanipulasi elemen, kita harus bisa mengaksesnya terlebih dahulu. Berikut adalah beberapa metode yang umum digunakan:

* document.getElementById('id\_elemen'): Mengakses elemen berdasarkan atribut id.  
* document.querySelector('.class\_elemen'): Mengakses elemen pertama yang cocok dengan selector CSS.  
* document.querySelectorAll('.class\_elemen'): Mengakses semua elemen yang cocok dengan selector CSS dalam bentuk *NodeList*.

#### **3\. Memanipulasi Konten dan Atribut**

Setelah mendapatkan referensi ke sebuah elemen, kita bisa memanipulasinya:

* **Mengubah Konten**:  
  * elemen.innerHTML \= 'Konten baru': Mengubah konten HTML di dalam elemen.  
  * elemen.textContent \= 'Teks baru': Mengubah teks di dalam elemen.  
* **Mengubah Atribut**:  
  * elemen.setAttribute('href', 'https://example.com'): Mengatur nilai atribut.  
  * elemen.classList.add('nama-kelas'): Menambah kelas CSS.

#### **4\. Menangani *Events* (Peristiwa)**

*Event* adalah peristiwa yang terjadi di halaman web, seperti klik mouse, penekanan tombol keyboard, atau pengiriman formulir. JavaScript dapat mendeteksi peristiwa ini dan menjalankan kode sebagai responsnya.

* **Metode addEventListener()**: Ini adalah metode yang paling direkomendasikan untuk menangani event.

```

const tombol = document.querySelector('button');

tombol.addEventListener('click', function() {
  alert('Tombol diklik!');
});


```

### **Latihan**

#### Latihan 1: Mengakses Elemen HTML

Gunakan JavaScript untuk:

* Mengakses elemen dengan ID "judul" dan ubah teksnya menjadi "Selamat Datang\!"  
* Mengakses elemen dengan kelas "deskripsi" dan ubah warnanya menjadi biru  
* Mengakses semua elemen \<li\> dan ubah latar belakangnya menjadi abu-abu muda

```html
<div class="workspace">
                <h1 id="judul">Judul Asli</h1>
                <p class="deskripsi">Ini adalah deskripsi awal.</p>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
```

```javascript
// Mengakses elemen dengan ID
const judul = document.getElementById('judul');
judul.textContent = 'Selamat Datang!';

// Mengakses elemen dengan kelas
const deskripsi = document.querySelector('.deskripsi');
deskripsi.style.color = 'blue';

// Mengakses semua elemen li
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.style.backgroundColor = '#f0f0f0';
});
```

#### Latihan 2: Memanipulasi Konten dan Atribut

Gunakan JavaScript untuk:

* Mengubah teks dalam elemen dengan ID "teks-ubah"  
* Menambahkan kelas "highlight" ke elemen dengan ID "teks-highlight"  
* Mengubah atribut href pada link dengan ID "link-ubah"

```html
<div class="workspace">
                <p id="teks-ubah">Teks ini akan diubah.</p>
                <p id="teks-highlight">Teks ini akan disorot.</p>
                <a href="#" id="link-ubah">Link ini akan diubah</a>
            </div>
```

```javascript
// Mengubah teks
const teksUbah = document.getElementById('teks-ubah');
teksUbah.textContent = 'Teks telah berhasil diubah!';

// Menambahkan kelas
const teksHighlight = document.getElementById('teks-highlight');
teksHighlight.classList.add('highlight');
// Tambahkan juga style untuk kelas highlight
const style = document.createElement('style');
style.textContent = '.highlight { background-color: yellow; padding: 5px; }';
document.head.appendChild(style);

// Mengubah atribut href
const linkUbah = document.getElementById('link-ubah');
linkUbah.href = 'https://www.example.com';
linkUbah.textContent = 'Kunjungi Example.com';
```

#### Latihan 3: Menangani Events (Peristiwa)

Buatlah JavaScript untuk:

* Menambahkan event listener pada tombol dengan ID "tombol-alert" untuk menampilkan alert  
* Mengubah warna latar belakang kotak dengan ID "kotak-warna" saat kursor mouse masuk dan keluar  
* Menampilkan koordinat mouse saat diklik di dalam div dengan ID "area-klik"

```html
<div class="workspace">
                <div class="interactive-elements">
                    <button id="tombol-alert">Klik untuk Alert</button>
                </div>
                <div id="kotak-warna" class="color-box">Kotak ini akan berubah warna</div>
                <div id="area-klik" style="height: 100px; border: 1px solid #ccc; margin: 10px 0; padding: 10px;">
                    Klik di area ini untuk melihat koordinat
                </div>
                <p id="koordinat-tampilan">Koordinat: </p>
            </div>
```

```javascript
// Event listener untuk tombol alert
const tombolAlert = document.getElementById('tombol-alert');
tombolAlert.addEventListener('click', function() {
    alert('Tombol telah diklik!');
});

// Event listener untuk kotak warna
const kotakWarna = document.getElementById('kotak-warna');
kotakWarna.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#4a6fa5';
    this.style.color = 'white';
});
kotakWarna.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#ddd';
    this.style.color = 'black';
});

// Event listener untuk area klik
const areaKlik = document.getElementById('area-klik');
const koordinatTampilan = document.getElementById('koordinat-tampilan');
areaKlik.addEventListener('click', function(event) {
    koordinatTampilan.textContent = `Koordinat: X=${event.clientX}, Y=${event.clientY}`;
});
```

#### 

#### Latihan 4: Membuat Elemen Dinamis

Buatlah JavaScript untuk:

* Menambahkan item baru ke dalam list ketika tombol "Tambah Item" diklik  
* Menghapus item dari list ketika tombol "Hapus" pada item tersebut diklik  
* Mengosongkan seluruh list ketika tombol "Hapus Semua" diklik

```html
<div class="workspace">
                <div class="interactive-elements">
                    <button id="tambah-item">Tambah Item</button>
                    <button id="hapus-semua">Hapus Semua</button>
                </div>
                <ul id="dynamic-list">
                    <li>Item 1 <button class="hapus-item">Hapus</button></li>
                    <li>Item 2 <button class="hapus-item">Hapus</button></li>
                </ul>
            </div>
```

```javascript
// Fungsi untuk menambah item
document.getElementById('tambah-item').addEventListener('click', function() {
    const list = document.getElementById('dynamic-list');
    const itemCount = list.children.length + 1;
    const newItem = document.createElement('li');
    
    newItem.textContent = `Item ${itemCount} `;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.classList.add('hapus-item');
    deleteButton.addEventListener('click', function() {
        list.removeChild(newItem);
    });
    
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
});

// Fungsi untuk menghapus semua item
document.getElementById('hapus-semua').addEventListener('click', function() {
    const list = document.getElementById('dynamic-list');
    list.innerHTML = '';
});

// Menambahkan event listener untuk tombol hapus yang sudah ada
document.querySelectorAll('.hapus-item').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();
    });
});
```

### **Studi Kasus: Membuat Aplikasi To-Do List Interaktif**

#### **Tugas**

Buat aplikasi *to-do list* sederhana dimana pengguna dapat:

1. **Menambah** tugas baru ke dalam daftar.  
2. **Menandai** tugas sebagai selesai (misalnya, dengan mengubah *styling*).  
3. **Menghapus** tugas dari daftar.

#### **Petunjuk Praktikum**

1. **HTML**: Buat satu *input field* dan satu tombol untuk menambahkan tugas, serta sebuah \<ul\> atau \<div\> kosong untuk menampung daftar tugas.  
2. **JavaScript**:  
   * Tangani *event* klik pada tombol "Tambah".  
   * Ambil nilai dari *input field*.  
   * Buat elemen \<li\> baru dan tambahkan ke dalam daftar (*list*).  
   * Tambahkan *event listener* pada setiap elemen \<li\> yang baru dibuat, sehingga saat diklik, elemen tersebut bisa ditandai sebagai selesai atau dihapus.

### **Petunjuk Pengumpulan**

1. Buat folder baru di repositori GitLab Anda dengan nama pertemuan-6.  
2. Buat file index.html dan script.js di dalam folder ini.  
3. Perbarui index.html utama di *root* repositori Anda dengan menambahkan tautan ke tugas ini.  
4. *Commit* dan *push* perubahan ke GitLab.

