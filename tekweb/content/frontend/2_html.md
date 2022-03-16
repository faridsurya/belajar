# HTML



Untuk mempelajari HTML, Anda tidak membutuhkan keterampilan khusus. Anda hanya perlu untuk mengetahui cara penggunaan komputer dan cara mengelola konten menggunakan web browser. 

## Memulai HTML

Artikel ini membahas dasar-dasar HTML. Untuk memulai, artikel ini mendefinisikan elemen, atribut, dan semua istilah penting lainnya yang mungkin pernah Anda dengar. Pada artikel ini anda akan mempelajari struktur elemen HTML, bagaimana halaman HTML biasa disusun, dan bahasa HTML dasar penting lainnya.

**Persyaratan:**

Literasi komputer dasar, perangkat lunak dasar yang diinstal, dan pengetahuan dasar tentang file.

**Tujuan Pembelajaran:**

Menjadi familiar dengan HTML dan berlatih menulis beberapa elemen HTML.

### Apa itu HTML?

HTML (*Hypertext Markup Language*) adalah rangkaian penanda yang terstruktur dan berasosiasi dengan bagaimana elemen multimedia (text, image, sound) ditampilkan. Anda harus memahami konsep penulisan kode HTML agar dapat membuat tampilan pada halaman web. Sebagai contoh, perhatikan baris teks berikut:

```
mulai belajar HTML
```

Teks di atas tidak memiliki penanda untuk mendefinisikan kategori tampilan, apakah paragraf atau header. Dalam HTML teks tersebut harus ditandai jika akan didefinisikan sebagai paragraf dengan cara berikut:

```html
<p>mulai belajar HTML</p>
```

### Anatomi Elemen HTML

![](../../../tekweb/images/img_1_1.png)

Anatomi HTML dibagi menjadi 3 yaitu **opening tag**, **closing tag**, dan **element**. 

- Opening tag adalah tanda pembuka yang mendandai tipe tampilan, apakah itu adalah paragraf, header, table, atau yang lainnya.
- Closing tag adalah tanda penutup sebuah elemen. Itu harus bersesuaian dengan tag opening.
- Content merupakan data yang ditampilkan, biasana dalam bentuk string.
- Elemen adalah kesatuan dari opening, closing, dan content.

### Latihan Interaktif

Edit baris di bawah ini dengan menekan tombol *Edit on codepen* untuk mencoba elemen-elemen HTML lainnya sepert `<em>`, `<b>`, `<small>`, `<span>`, atau `<div>`. 

[basic_html](https://codepen.io/faridsurya-uad/embed/OJzyPKo ':include :type=iframe width=100% height=400px')

### Elemen Bertingkat

Elemen HTML dapat berdiri sendiri dapat pula bertingkat. Perhatikan contoh berikut:

```html
<div>
	<p>
        <strong>Perhatian!</strong> Elemen HTML dapat diterapkan secara bertingkat. Anda dapat menuliskan kode HTML untuk membuat tampilan yang lebih menarik.
    </p>
</div>
```

Contoh di atas merupakan elemen HTML bertingkat. Penulisan kode HTML bertingkat akan sangat membantu dalam pembuatan tampilan antarmuka sebuah halaman website.

### Elemen Kosong

Tidak semua elemen mengikuti pola tag pembuka, konten, dan tag penutup. Beberapa elemen terdiri dari satu tag, yang biasanya digunakan untuk menyisipkan/menyematkan sesuatu ke dalam dokumen. Misalnya, elemen <img> menyematkan file gambar ke halaman:

```html
<img src="https://uad.ac.id/wp-content/uploads/logo-uad-akreditas.png">
```

Kode HTML di atas akan menghasilkan tampilan gambar. 

### Atribut

Elemen juga dapat memiliki atribut. Atribut terlihat seperti ini:

![img](../../../tekweb/images/img_1_2.png)

Kode HTML di atas memili satu atribut yaitu `class`. Ada beberapa atribut yang dapat diterapkan pada sebuah elemen HTML misalnya: style, width, height, dll.

## Metadata dalam HTML

Metadata dokumen HTML adalah bagian yang tidak ditampilkan di browser web saat halaman dimuat. Bagian tersebut berisi informasi seperti halaman <title>, tautan ke file CSS , tautan ke favicon khusus, dan metadata lainnya.

### Apa itu bagian <head> dalam HTML?

Bagian head dalam HTML adalah bagian yang tidak ditampilkan pada halaman web. Bagian itu digunakan untuk melampirkan metadata. 

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

Bagian <head> pada kode HTML di atas memuat elemen <meta> dan <title>. Selain elemen tersebut, elemen lain misalnya elemen untuk melampirkan file css dan javascript juga dituliskan pada bagian <head>. Pada aplikasi web yang kompleks, bagian <head> mungkin akan memuat banyak elemen.

