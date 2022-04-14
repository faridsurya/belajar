# Mendistribusikan Aplikasi ke Website

Semua fungsi CRUD pada aplikasi Angular sudah tersedia. Tahap terakhir adalah mendistribusikan aplikasi Angular agar dapat dijalankan pada browser. Jalankan perintah berikut ini:

```
ng build --base-href ./
```

Perintah tersebut akan menciptakan folder dist pada proyek Angular.

![img](https://lh3.googleusercontent.com/iUrmSxYHI21nbo46dUG5nA4y7r5vbzNUaIG05r1bsRaMELOSDufRniaYY4Ax7zRlqPQCQmsfiZtIc4sdtc1Z8KYkwVCQa6sW3T6a-qYD8SUwq2QhAxabwHAivxI4oC6DADfRVlcP)

File-file di atas merupakan file hasil deployment Angular yang dapat dijalankan di berbagai lingkungan misalnya web, ekstensi Chrome, aplikasi desktop, maupun aplikasi mobile. Pindahkan isi folder tersebut pada folder htdocs pada Xampp. Pastikan nama folder pada htdocs adalah buku-alamat. Akses melalui browser dengan alamat `localhost/buku-alamat`. Itulah aplikasi Angular pertama Anda yang berhasil didistribusikan dalam web.

![img](https://lh3.googleusercontent.com/Up9hg7k2q4qtQs_OvamelV-eC1CZIGX_IPiSCBGBu6fKMUF-6G6IGfZDZNIFpOOl2tPAkQe279I4EDpmoC1pVZVo0HarzZ03XkCEPzukp0w9knfC0Zn3U9Ino1bgD2DmyS3E6Sf1)

File yang berada dalam folder dist tersebut dapat juga Anda taruh pada hosting web sehingga dapat diakses melalui internet.

## Apa Lagi Berikutnya?

Cookbook seri berikutnya kita akan belajar lebih dalam lagi mengenai pengelolaan gambar menggunakan Angular. Pengelolaan gambar tersebut meliputi:

1. Bagaimana mengambil gambar dan mengeditnya (crop, resize)
2. Bagaimana mengunggah gambar ke server
3. Bagaimana menampilkan gambar pada aplikasi Angular

