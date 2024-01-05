# Javascript

JavaScript adalah bahasa pemrograman yang digunakan untuk mengembangkan aplikasi web yang interaktif dan dinamis. JavaScript dapat digunakan untuk memanipulasi konten HTML dan CSS, mengambil input dari pengguna, membuat animasi, memvalidasi data, dan berkomunikasi dengan server untuk mengambil data.

Saat pengguna mengunjungi halaman web, JavaScript dapat dijalankan di sisi klien (client-side) pada browser mereka, dan digunakan untuk mengeksekusi kode di dalam halaman web. JavaScript juga dapat dijalankan di sisi server (server-side), namun di sini kita akan fokus pada penggunaan JavaScript di sisi klien.

Contoh penggunaan JavaScript yang sederhana adalah menampilkan pesan pop-up ketika pengguna mengklik sebuah tombol atau melakukan aksi tertentu pada halaman web. Dalam contoh ini, JavaScript akan memerintahkan browser untuk menampilkan pesan pop-up ketika aksi tertentu terjadi. Hal ini dapat memberikan umpan balik atau petunjuk kepada pengguna tentang apa yang terjadi pada halaman web.

JavaScript juga dapat digunakan untuk membuat interaksi yang lebih kompleks seperti menampilkan atau menyembunyikan elemen HTML, mengambil input dari formulir, dan membuat animasi. Dalam aplikasi web yang lebih kompleks, JavaScript dapat digunakan untuk memvalidasi input pengguna, mengirim data ke server, dan merespons data yang diterima dari server.

Dalam keseluruhan, JavaScript adalah bahasa pemrograman yang penting dan banyak digunakan dalam pengembangan aplikasi web modern. Kemampuan untuk membuat tampilan dan interaksi yang dinamis dan interaktif pada halaman web dapat membantu meningkatkan pengalaman pengguna dan meningkatkan fungsionalitas website.

## Pengenalan Javascript

### Sejarah Javascript

JavaScript pertama kali dibuat oleh Brendan Eich pada tahun 1995 saat bekerja di Netscape Communications Corporation. Saat itu, Netscape sedang merilis Navigator 2.0, sebuah browser web yang sangat populer pada masanya.

Awalnya, JavaScript diciptakan untuk memberikan interaktivitas pada halaman web dan menambahkan kemampuan pemrograman ke dalam browser. JavaScript pertama kali dikenal dengan nama Mocha, kemudian berganti nama menjadi LiveScript, dan akhirnya diubah lagi menjadi JavaScript untuk memanfaatkan popularitas bahasa pemrograman Java yang sudah sangat populer pada waktu itu.

JavaScript segera menjadi bahasa pemrograman yang sangat populer di web dan digunakan untuk membangun aplikasi web yang kompleks dan interaktif. Pada tahun 1996, Microsoft memperkenalkan bahasa pemrograman serupa yang disebut JScript, yang menjadi bagian dari Internet Explorer mereka.

Setelah itu, JavaScript menjadi bahasa pemrograman standar di browser web modern dan terus berkembang hingga saat ini. JavaScript juga digunakan di luar browser, seperti di server dengan Node.js dan juga untuk pengembangan aplikasi mobile dengan menggunakan teknologi seperti React Native atau Ionic Framework.

### Sintaks dan Tipe Data

Sintaks pada JavaScript sangat mirip dengan bahasa pemrograman lainnya, seperti C, C++, dan Java. Beberapa perbedaan mungkin terdapat pada aturan penulisan variabel, statement, dan struktur kendali. Berikut adalah beberapa contoh sintaks pada JavaScript:

1. Deklarasi variabel

   ```javascript
   namaVariabel;
   let namaVariabel;
   const namaVariabel;
   ```

2. Assignment variabel

   ```javascript
   namaVariabel = "nilai";
   ```

3. Struktur kendali

   ```javascript
   if (kondisi) {
      // kode yang dijalankan jika kondisi benar
   } else {
      // kode yang dijalankan jika kondisi salah
   }
   
   for (i = 0; i < panjang; i++) {
      // kode yang dijalankan untuk setiap iterasi
   }
   
   while (kondisi) {
      // kode yang dijalankan selama kondisi benar
   }
   ```

4. Tipe data pada JavaScript terdiri dari primitif dan non-primitif. Tipe data primitif meliputi string, number, boolean, null, undefined, dan symbol. Tipe data non-primitif meliputi array, object, dan function. Berikut adalah beberapa contoh tipe data pada JavaScript:

   ```javascript
   let nama = "John"; // string
   let umur = 25; // number
   let isLaki = true; // boolean
   let mobil = null; // null
   let alamat; // undefined
   let hobi = ["membaca", "menulis", "mendengarkan musik"]; // array
   let orang = {nama: "John", umur: 25, isLaki: true}; // object
   
   function hitung(x, y) {
      return x + y;
   } // function
   ```

### Menjalankan Javascript pada Browser

JavaScript bisa dijalankan pada browser dengan cara menambahkan script pada file HTML atau langsung di konsol pada browser. Berikut adalah cara menjalankan JavaScript pada browser:

1. Menambahkan script pada file HTML

   ```html
   <!DOCTYPE html>
   <html>
   <head>
      <title>Judul Halaman</title>
   </head>
   <body>
      <h1>Hello World!</h1>
   
      <script>
         // kode JavaScript di sini
      </script>
   </body>
   </html>
   ```

2. Menambahkan file JavaScript eksternal pada file HTML

   ```html
   <!DOCTYPE html>
   <html>
   <head>
      <title>Judul Halaman</title>
      <script src="script.js"></script>
   </head>
   <body>
      <h1>Hello World!</h1>
   </body>
   </html>
   ```

3. Menjalankan JavaScript pada konsol browser: a. Buka konsol pada browser dengan menekan tombol F12 atau klik kanan dan pilih "Inspect Element" b. Pilih tab "Console" c. Ketikkan kode JavaScript pada baris yang tersedia dan tekan tombol "Enter" untuk menjalankan kode tersebut.

   Contoh:

   ```javascript
   console.log("Hello World!");
   Hello World!
   ```

## Variabel, Konstanta, dan Operator

### Variabel 

Variabel adalah sebuah tempat atau wadah yang digunakan untuk menyimpan nilai di dalam program. Variabel pada JavaScript dapat dideklarasikan menggunakan keyword "var", "let", atau "const". Contoh penggunaannya adalah sebagai berikut:

```javascript
// Deklarasi variabel
var nama = "John";
let umur = 25;
const PI = 3.14;

// Mengakses nilai variabel
console.log(nama);
console.log(umur);
console.log(PI);
```

### Konstanta 

Konstanta adalah sebuah nilai yang tetap dan tidak dapat diubah nilainya selama program dijalankan. Konstanta pada JavaScript dideklarasikan menggunakan keyword "const". Contoh penggunaannya adalah sebagai berikut:

```javascript
// Deklarasi konstanta
const PI = 3.14;

// Tidak dapat mengubah nilai konstanta
PI = 3.1415; // akan menghasilkan error
```

### Operator 

Operator pada JavaScript digunakan untuk melakukan operasi pada data. Beberapa jenis operator pada JavaScript antara lain:

- Operator Aritmatika: +, -, *, /, %

  ```javascript
  // Contoh penggunaan operator aritmatika
  let a = 10;
  let b = 5;
  console.log(a + b); // output: 15
  console.log(a - b); // output: 5
  console.log(a * b); // output: 50
  console.log(a / b); // output: 2
  console.log(a % b); // output: 0
  ```

- Operator Penugasan: =, +=, -=, *=, /=, %=

  ```javascript
  // Contoh penggunaan operator penugasan
  let a = 10;
  a += 5;
  console.log(a); // output: 15
  
  let b = 8;
  b *= 2;
  console.log(b); // output: 16
  ```

- Operator Perbandingan: ==, ===, !=, !==, >, >=, <, <=

  ```javascript
  // Contoh penggunaan operator perbandingan
  let a = 10;
  let b = 5;
  console.log(a == b);  // output: false
  console.log(a != b);  // output: true
  console.log(a > b);   // output: true
  console.log(a >= b);  // output: true
  console.log(a < b);   // output: false
  console.log(a <= b);  // output: false
  ```

- Operator Logika: &&, ||, !

  ```javascript
  // Contoh penggunaan operator logika
  let a = 10;
  let b = 5;
  console.log(a > 5 && b > 5);  // output: false
  console.log(a > 5 || b > 5);  // output: true
  console.log(!(a > 5));       // output: false
  ```

## Pengkondisian dan Perulangan

Pengkondisian dan perulangan adalah fitur penting dalam pemrograman yang memungkinkan program untuk melakukan tindakan berdasarkan kondisi tertentu atau melakukan tindakan secara berulang. Dalam JavaScript, terdapat beberapa cara untuk mengimplementasikan pengkondisian dan perulangan.

### Pengkondisian 

Pengkondisian dapat diimplementasikan menggunakan pernyataan if, else if, dan else. Contoh:

```javascript
let x = 10;

if (x > 0) {
  console.log("x adalah bilangan positif");
} else if (x < 0) {
  console.log("x adalah bilangan negatif");
} else {
  console.log("x adalah nol");
}
```

### Perulangan 

Perulangan dapat diimplementasikan menggunakan beberapa jenis pernyataan, seperti for, while, dan do-while. Contoh:

```javascript
// Perulangan dengan for
for (let i = 0; i < 5; i++) {
  console.log("Perulangan ke-" + i);
}

// Perulangan dengan while
let j = 0;
while (j < 5) {
  console.log("Perulangan ke-" + j);
  j++;
}

// Perulangan dengan do-while
let k = 0;
do {
  console.log("Perulangan ke-" + k);
  k++;
} while (k < 5);
```

Dalam contoh di atas, pengkondisian dilakukan dengan menggunakan pernyataan if untuk mengevaluasi apakah variabel x positif, negatif, atau nol. Sedangkan untuk perulangan, terdapat tiga jenis pernyataan yang digunakan, yaitu for, while, dan do-while, yang masing-masing menghasilkan output "Perulangan ke-" diikuti dengan nomor perulangan ke-0 hingga ke-4.

## Fungsi dan Class

### Fungsi

Fungsi merupakan blok kode yang dapat dipanggil oleh program pada saat yang diperlukan. Fungsi memungkinkan kita untuk memecah kode menjadi bagian-bagian yang lebih kecil dan lebih mudah dikelola. Selain itu, fungsi juga memungkinkan kita untuk menghindari duplikasi kode dan mempercepat proses pengembangan.

Dalam JavaScript, fungsi dapat didefinisikan dengan menggunakan pernyataan function. Fungsi dapat menerima argumen dan mengembalikan nilai. Contoh:

```javascript
// Definisikan fungsi penjumlahan
function tambah(a, b) {
  return a + b;
}

// Panggil fungsi penjumlahan
let hasil = tambah(5, 3);
console.log(hasil); // Output: 8
```

Dalam contoh di atas, kita mendefinisikan fungsi tambah yang menerima dua argumen, yaitu a dan b. Fungsi ini mengembalikan hasil penjumlahan dari kedua argumen tersebut. Kemudian, kita memanggil fungsi tambah dengan memberikan nilai 5 dan 3 sebagai argumen. Hasil penjumlahan 5 dan 3 akan disimpan dalam variabel hasil dan kemudian dicetak pada konsol.

Selain menggunakan pernyataan function, dalam JavaScript juga terdapat beberapa jenis fungsi lain, seperti fungsi anonim, arrow function, dan generator function. Namun, prinsip dasar dari penggunaan fungsi pada JavaScript tetap sama, yaitu untuk memecah kode menjadi bagian-bagian yang lebih kecil dan lebih mudah dikelola.

### Class

Class adalah sebuah blueprint atau template untuk membuat sebuah objek. Dalam JavaScript, class diperkenalkan pada versi ECMAScript 2015 (ES6) dan merupakan salah satu fitur utama dari bahasa pemrograman ini. Class memungkinkan programmer untuk membuat kode yang lebih terstruktur dan mudah dipelihara.

Dalam class, kita dapat mendefinisikan properti (atau disebut juga sebagai atribut) dan method. Properti adalah variabel yang terdapat pada class, sedangkan method adalah fungsi yang terdapat pada class. Contoh:

```javascript
class Manusia {
  constructor(nama, usia) {
    this.nama = nama;
    this.usia = usia;
  }
  
  sapa() {
    console.log(`Halo, nama saya ${this.nama} dan saya berusia ${this.usia} tahun`);
  }
}

let orang = new Manusia("John", 30);
orang.sapa(); // Output: "Halo, nama saya John dan saya berusia 30 tahun"
```

Dalam contoh di atas, kita mendefinisikan sebuah class bernama Manusia. Class ini memiliki dua properti, yaitu nama dan usia, serta satu method yaitu sapa. Properti dapat diakses dengan menggunakan keyword `this`. Method sapa akan mencetak pesan sapaan ke konsol dengan menggunakan nilai dari properti nama dan usia.

Setelah class Manusia didefinisikan, kita dapat membuat objek dari class tersebut dengan menggunakan operator `new`, seperti pada baris terakhir contoh di atas. Kemudian, kita dapat memanggil method sapa pada objek tersebut untuk mencetak pesan sapaan ke konsol.

Class dapat diwariskan dari class lainnya menggunakan mekanisme inheritance, sehingga membuat hierarki class. Class yang mewarisi class lainnya disebut dengan subclass, sedangkan class yang menjadi sumber warisan disebut dengan superclass. Inheritance dapat digunakan untuk mempermudah dan mempercepat proses pengembangan, karena kita dapat menggunakan kembali properti dan method yang telah didefinisikan pada superclass tanpa perlu menuliskannya ulang pada subclass.

## Array

### Konsep Dasar Array

Array adalah kumpulan dari beberapa nilai yang disimpan di dalam satu variabel. Dalam JavaScript, array adalah sebuah objek yang terdiri dari elemen-elemen yang diindeks secara numerik. Array memungkinkan programmer untuk menyimpan, mengakses, dan memanipulasi data yang berulang dengan lebih efisien.

Konsep dasar dari array adalah indeks. Setiap elemen dalam array memiliki sebuah indeks yang dimulai dari 0. Kita dapat mengakses nilai dari sebuah elemen dengan menggunakan indeksnya. Contohnya:

```javascript
javascriptCopy codelet buah = ["apel", "jeruk", "mangga"];
console.log(buah[0]); // Output: "apel"
console.log(buah[1]); // Output: "jeruk"
console.log(buah[2]); // Output: "mangga"
```

Dalam contoh di atas, kita membuat sebuah array bernama `buah` yang berisi tiga elemen yaitu "apel", "jeruk", dan "mangga". Kemudian, kita mengakses nilai dari setiap elemen dengan menggunakan indeksnya.

Array juga dapat digunakan untuk menyimpan tipe data yang berbeda-beda, seperti string, number, boolean, dan objek. Kita dapat memanipulasi array dengan menggunakan berbagai macam method, seperti `push`, `pop`, `shift`, dan `unshift` untuk menambah atau menghapus elemen pada array, serta `slice` dan `splice` untuk memotong atau menyisipkan elemen pada array.

Selain itu, array juga dapat digunakan untuk menyimpan array lainnya atau objek. Array yang menyimpan array lainnya disebut dengan array multidimensi atau nested array, sedangkan array yang menyimpan objek disebut dengan array asosiatif atau associative array.

Dalam JavaScript, array tidak perlu didefinisikan ukuran awalnya seperti pada bahasa pemrograman lainnya. Kita dapat menambah atau menghapus elemen pada array kapan saja sesuai dengan kebutuhan.

### Array untuk Penyimpanan Data

Array dapat digunakan untuk menyimpan data dalam jumlah banyak. Misalnya, jika kita ingin menyimpan nilai dari suatu set data seperti bilangan bulat, kita dapat menggunakan array untuk menyimpan semua bilangan tersebut. Berikut ini adalah contoh penggunaan array untuk menyimpan bilangan bulat:

```javascript
let bilangan = [1, 2, 3, 4, 5];
```

Dalam contoh di atas, kita membuat sebuah array bernama `bilangan` yang berisi lima bilangan bulat yaitu 1, 2, 3, 4, dan 5.

Kita juga dapat melakukan operasi matematika pada semua bilangan dalam array menggunakan loop. Contohnya, jika kita ingin menghitung total dari semua bilangan dalam array, kita dapat menggunakan loop `for` untuk menambahkan setiap bilangan dalam array. Berikut ini adalah contoh penggunaan loop `for` untuk menghitung total dari semua bilangan dalam array:

```javascript
let bilangan = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < bilangan.length; i++) {
  total += bilangan[i];
}

console.log(total); // Output: 15
```

Dalam contoh di atas, kita membuat sebuah variabel `total` dengan nilai awal 0. Kemudian, kita menggunakan loop `for` untuk menambahkan setiap bilangan dalam array ke dalam variabel `total`. Pada setiap iterasi loop, kita mengambil nilai dari elemen array dengan menggunakan indeksnya dan menambahkannya ke dalam variabel `total`. Setelah selesai, kita mencetak nilai dari variabel `total` menggunakan `console.log`.

Dengan menggunakan array, kita dapat menyimpan data dalam jumlah banyak dan melakukan operasi pada setiap elemen dalam array dengan lebih efisien. Array adalah salah satu struktur data yang penting dalam pemrograman dan digunakan pada hampir semua bahasa pemrograman modern.

## DOM

### Konsep DOM

DOM (Document Object Model) adalah sebuah konsep dalam pemrograman web yang digunakan untuk merepresentasikan struktur dari sebuah dokumen HTML atau XML dalam bentuk pohon struktur data. DOM memberikan cara untuk memanipulasi dan mengakses elemen-elemen pada halaman web menggunakan JavaScript.

Setiap elemen pada halaman web dianggap sebagai sebuah objek dalam DOM. Kita dapat mengakses dan memanipulasi objek-objek ini menggunakan JavaScript, seperti mengubah isi dari sebuah teks atau gambar, menambahkan atau menghapus elemen, serta menangani event pada elemen tersebut.

Contoh penggunaan DOM adalah saat kita ingin menambahkan sebuah teks pada halaman web. Kita dapat menggunakan JavaScript untuk membuat elemen teks baru dan menambahkannya pada dokumen HTML. Berikut adalah contoh sederhana penggunaan DOM untuk menambahkan sebuah teks pada halaman web:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Contoh DOM</title>
  </head>
  <body>
    <div id="target"></div>
    <script>
      // Mengambil elemen dengan ID "target"
      let target = document.getElementById("target");

      // Membuat sebuah elemen teks baru
      let teksBaru = document.createTextNode("Halo, dunia!");

      // Menambahkan elemen teks baru pada elemen "target"
      target.appendChild(teksBaru);
    </script>
  </body>
</html>
```

Dalam contoh di atas, kita membuat sebuah dokumen HTML yang berisi sebuah div dengan ID "target". Pada script JavaScript, kita mengambil elemen dengan ID "target" menggunakan metode `document.getElementById()`. Kemudian, kita membuat sebuah elemen teks baru menggunakan metode `document.createTextNode()`. Setelah itu, kita menambahkan elemen teks baru tersebut pada elemen "target" menggunakan metode `appendChild()`. Setelah dijalankan, sebuah teks "Halo, dunia!" akan muncul pada halaman web di dalam elemen dengan ID "target".

DOM memungkinkan kita untuk membuat halaman web yang interaktif dan dinamis dengan menggunakan JavaScript. Dengan menggunakan DOM, kita dapat mengubah tampilan dan perilaku dari elemen-elemen pada halaman web secara dinamis tanpa harus melakukan refresh pada halaman tersebut.

### Penggunaan Event

Berikut adalah cara menggunakan event untuk merespons aksi pengguna menggunakan DOM pada JavaScript:

Pilih elemen HTML yang akan diberi event listener. Anda dapat memilih elemen menggunakan `document.querySelector()` atau `document.getElementById()`.

Contoh:

```javascript
const myButton = document.querySelector('#myButton');
```

Tambahkan event listener ke elemen tersebut menggunakan method `addEventListener()`. Parameter pertama adalah jenis event yang ingin ditangkap, dan parameter kedua adalah fungsi yang akan dijalankan ketika event terjadi.

Contoh:

```javascript
myButton.addEventListener('click', myFunction);
```

Buat fungsi yang akan dijalankan ketika event terjadi. Anda dapat menambahkan kode apa pun yang ingin dilakukan ketika event terjadi, seperti mengubah warna latar belakang, menampilkan pesan, atau memperbarui nilai pada halaman web.

Contoh:

```javascript
function myFunction() {
  alert('Button clicked!');
}
```

Dalam contoh di atas, fungsi `myFunction()` akan dijalankan ketika pengguna mengklik tombol.

Event listener dan fungsi yang terkait dapat diletakkan di dalam blok kode yang sama atau terpisah tergantung pada kebutuhan Anda.

Contoh:

```javascript
const myButton = document.querySelector('#myButton');

function myFunction() {
  alert('Button clicked!');
}

myButton.addEventListener('click', myFunction);
```

Dalam contoh di atas, event listener dan fungsi didefinisikan terpisah.

Dengan menggunakan event, Anda dapat memberikan interaktivitas yang lebih besar pada halaman web dan membuatnya lebih menarik bagi pengguna.

## AJAX

AJAX adalah singkatan dari Asynchronous JavaScript and XML, yang merupakan teknologi yang digunakan untuk memperbarui halaman web tanpa harus memuat ulang halaman secara keseluruhan. Dengan AJAX, browser dapat mengirim permintaan ke server web secara asinkron dan menerima respons dari server tanpa harus memuat ulang halaman secara keseluruhan.

Contoh penggunaan AJAX pada JavaScript adalah sebagai berikut:

```javascript
// membuat objek XMLHttpRequest
var xmlhttp = new XMLHttpRequest();

// menentukan jenis permintaan dan URL
xmlhttp.open("GET", "data.txt", true);

// mengirim permintaan ke server
xmlhttp.send();

// menangani respons dari server
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // memasukkan respons dari server ke elemen HTML
    document.getElementById("data").innerHTML = this.responseText;
  }
};
```

Pada contoh di atas, kita membuat objek `XMLHttpRequest` yang digunakan untuk mengirim permintaan ke server web. Kemudian, kita menentukan jenis permintaan dan URL dengan menggunakan metode `open()`. Setelah itu, kita mengirim permintaan ke server dengan menggunakan metode `send()`. Ketika server merespons permintaan kita, maka metode `onreadystatechange` akan dijalankan dan kita dapat menangani respons dari server tersebut.

Dalam contoh tersebut, kita menampilkan respons dari server dalam elemen HTML dengan menggunakan metode `innerHTML`. Hal ini akan memperbarui halaman web tanpa harus memuat ulang halaman secara keseluruhan, sehingga meningkatkan pengalaman pengguna dan efisiensi halaman web secara keseluruhan.

## Framework Javascript

Framework JavaScript adalah kerangka kerja atau struktur yang disediakan untuk mempermudah pengembangan aplikasi web dengan menggunakan bahasa pemrograman JavaScript. Framework JavaScript dapat memudahkan developer untuk mengembangkan aplikasi web dengan cepat dan efisien, karena sudah menyediakan struktur, pola desain, dan komponen-komponen yang siap digunakan.

Beberapa contoh framework JavaScript yang populer antara lain:

1. AngularJS: Dikembangkan oleh Google, AngularJS adalah framework yang digunakan untuk membangun aplikasi web SPA (Single Page Application) dengan memanfaatkan fitur two-way data binding dan dependency injection.
2. React: Dikembangkan oleh Facebook, React adalah framework yang digunakan untuk membangun user interface pada aplikasi web dengan memanfaatkan konsep komponen dan Virtual DOM.
3. Vue.js: Merupakan framework JavaScript yang sangat fleksibel dan mudah dipelajari, Vue.js digunakan untuk membangun aplikasi web dengan mengutamakan performa dan kecepatan dalam memproses data.

Contoh penggunaan framework JavaScript dengan React:

```react
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}
```

Pada contoh di atas, React digunakan untuk membangun sebuah komponen bernama Counter yang berfungsi untuk menghitung jumlah klik pada sebuah tombol. Dalam komponen tersebut, kita menggunakan fitur Hooks pada React yaitu useState untuk menyimpan nilai state pada komponen dan fungsi onClick untuk merespon event klik pada tombol.

