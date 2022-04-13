# Menampilkan Dokumen Markdwon pada dokumen HTML

Markdown adalah bahasa markup yang dapat digunakan untuk menambahkan elemen pemformatan ke dokumen teks teks biasa. Markdown yang dibuat oleh John Gruber pada tahun 2004 sekarang menjadi salah satu bahasa markup yang cukup populer di dunia.

Pada contoh kasus ini, dokumen markdown digunakan untuk menulis artikel. Format markdown dipilih karena dapat dibuat dengan mudah pada repositori github. Anda dapat menulis artikel pada repositori github dalam format markdown kemudian menampilkannya pada halaman web yang Anda buat.

Agar halaman web dapat menampilkan dokumen markdown maka perlu digunakan library untuk mengkonversi format markdwon menjadi format HTML. Pada kasus ini kita menggunakan library showdown.

## Instalasi Library Showdown

Tautkan library showdown pada dokumen HTML Anda seperti pada contoh berikut:

```html
<script src="https://unpkg.com/vue@3"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/2.0.3/showdown.min.js"></script>
<script src="./display_md.js"></script>
```

## Implementasi Showdown pada Vue

Fungsi library showdown adalah untuk mengkonversi data dalam format markdown menjadi HTML. Oleh sebab itu penerapan showdown dapat dipasang pada saat data markdwon sudah berhasil diperoleh. Data markdown diambil menggunakan metode GET melalui axios. Perhatikan contoh kode berikut:

**display_md.js**

```javascript
Vue.createApp({
    data() {
      return {       
        article: null, //variabel article
      };
    },
    methods: {
      getMarkdownData()
      {               
        var converter = new showdown.Converter(); //mendefinisikan konverter
        axios
          .get(
            "https://raw.githubusercontent.com/faridsurya/Vue-Axios-Basic/master/contents/article_1.md"
          )
          .then((res) => {           
            var html = converter.makeHtml(res.data); //eksekusi konverter
            this.article = html; //update variabel article
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getMarkdownData()
    },
  }).mount("#app");
```

Sebelum data markdown berhasil diperoleh, didefinisikan variabel `converter` untuk mengidentifikasi library showdown. Setelah data berhasil diperoleh dilakukan eksekusi untuk mengkoversi data markdown menjadi HTML menggunakan variabel `html`. Kemudian format yang sudah terkonversi digunakan untuk memperbarui variabel `article` yang sebelumnya sudah didefinisikan pada bagian `data()`.

Untuk menampilkan data dengan format HTML dalam template vue, dapat digunakan *directive* `v-html`. Perhatikan contoh berikut:

**4_display_md.html**

```html
<div v-html="article"></div>
```

`article` pada kode di atas mengacu pada variabel `article` pada bagian `data()` yang diupdate setelah data markdown dikonversi menjadi HTML.

## Mengambil File Markdown secara Dinamis berdasarkan Parameter URL

Javascript menyediakan cara untuk membaca parameter URL. Misalnya ada url berikut:

```
https://uad.ac.id?prodi=si
```

Parameter URL diatas adalah `prodi` dengan nilai parameter adalah `si`. Fungsi javascript untuk membaca paramter sebuah url adalah sebagai berikut:

```javascript
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const article = urlParams.get('prodi'); //output 'si' 
```

Kita terapkan konsep diatas untuk membaca konten format markdwon sesuai dengan nama filenya. Modifikasi file **display_md.js** menjadi seperti berikut:

```javascript
Vue.createApp({
    data() {
      return {       
        article: null,
      };
    },
    methods: {
      getMarkdownData()
      {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const article = urlParams.get('article');        
        var converter = new showdown.Converter();
        axios
          .get(
            "https://raw.githubusercontent.com/faridsurya/Vue-Axios-Basic/master/contents/"+article
          )
          .then((res) => {           
            var html = converter.makeHtml(res.data);           
            this.article = html;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getMarkdownData()
    },
  }).mount("#app");
```

Kode di atas membuat URL pada `.get()` menjadi dinamis sesuai dengan parameter yang diberikan. Berikut ini adalah contoh parameter untuk mengambil dokumen `article_1.md` pada folder contents di repositori github.

```
/4_display_md.html?article=article_1.md
```

## Kode Lengkap

- https://github.com/faridsurya/Vue-Axios-Basic/blob/master/4_display_md.html
- https://github.com/faridsurya/Vue-Axios-Basic/blob/master/display_md.js

## Latihan 4

1. Buatlah dokumen HTML dengan nama `read.html` yang digunakan untuk membaca artikel dengan format markdown (`.md`) yang tersimpan pada folder `contents` repositori github Anda.

2. Gunakan file yang menampilkan daftar artikel (lihat Tugas 3). Ganti nama file Anda dengan `index.html` kemudian berikan aksi pada tombol daftar artikel sehingga mengarah ke halaman `read.html?article=[nama_file.md]`. Untuk membuat navigasi tersebut, gunakankan directive `:href` seperti contoh berikut:

   ```html
   <a :href="'https://faridsurya.github.io/Vue-Axios-Basic/read.html?article='+item.content" class="btn btn-primary" role="button">Read</a>
   ```

3. Pastikan struktur file pada repositori Anda adalah seperti berikut:

   ```
   + contents
   	- articles.json
   	- header.json
   	- article_1.md (gunakan nama file anda)
   + images
   - index.html
   - read.html
   ```

