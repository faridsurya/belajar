# Memulai Angular

Membuat project baru Angular dilakukan menggunakan command line (cmd) NodeJs jika menggunakan Windows atau aplikasi Terminal jika menggunakan Linux. Tulislah perintah berikut:

```bash
ng new buku-alamat
```

Perintah tersebut akan menghasilkan output Would you like to add Angular routing? (y/N). Ketik y untuk membuat Angular Routing yang berfungsi untuk mengatur navigasi halaman.

Selanjutnya akan muncul pertanyaan Which stylesheet format would you like to use?. Pilihlah CSS untuk membuat pengaturan style desain menggunakan CSS.

Tampilan proses pembuatan proyek baru adalah seperti gambar berikut ini:

![img](https://lh4.googleusercontent.com/kO3No9pm572W00WG8nub7rNn6nEVeEyJRbU1WvSfer25IrFqeINId60UD1cO2xawrcmTqi-8XDgjPsmbbz_z-Z_3aQzaw8j8nohfFxPQVXPhwGHj1b_qLpDu1lpqG2nuOFi_XU2M)

Pastikan perangkat Anda terhubung internet saat membuat proyek Angular baru. Ada beberapa paket yang mengharuskan perangkat terhubung dengan internet.

Perintah ng new buku-alamat akan menghasilkan folder baru bernama buku-alamat. Arahkan terminal kedalam folder yang baru saja dibuat. Jika Anda menggunakan linux cukup dengan membuka file explorer kemudian klik kanan dan pilih Terminal. Jika menggunakan Windows dapat dilakukan dengan cara menuliskan perintah:

```bash
cd /path/to/folder
```

Setelah terminal masuk kedalam folder aplikasi Angular tulislah perintah ng serve seperti pada gambar berikut:

![img](https://lh3.googleusercontent.com/biLiwyp6FTOf-nVz6FC6wF5IKJTgoZ8TUFGMVXS5iNagngjTFzj3YVZE6FY2MhUjuJYlmQAqFkMG-Fw3SUdNpo3b1IT5ezNx4q_tGtxdDxUgjVYRkiBhqc8869q4WN5wQDiEr7r8)

Tanda proses ini berhasil adalah munculnya informasi Compiled successfully. Buka browser Anda dan arahkan ke alamat localhost:4200. Artinya sistem Angular membuat server portable yang dapat diakses pada alamat domain localhost dengan port 4200.

![img](https://lh3.googleusercontent.com/POLfyJP4NeCkcPUur-vRH5z7hao6Am9ueNoch9tg9Bq02o35wUNukgFCbxQCirS6LPyljflDbjihBfX1pXbNaGF-vDD1zElbWcbnsQ2IGOACkjdOAdHsvgTpVpNVFYgA7x6LYKa0)

Gambar diatas adalah aplikasi Angular yang berhasil Anda buat. Sekarang kita akan mulai membangun aplikasi Buku Alamat.

## Struktur File Angular

Sebelum memulai lebih lanjut untuk membuat aplikasi, terlebih dahulu kita pahami struktur file pada Angular. Struktur file pada Angular adalah sebagai berikut:

```
+ e2e
+ node_modules
+ src
  + app
    - app-routing-module.ts
    - app.component.css
    - app.component.html
    - app.component.spec.ts
    - app.component.ts
    - app.module.ts
  + assets
  + environments 
```

File utama pengembangan ada pada folder app. Folder tersebut berisi beberapa file diantaranya:

- app-routing-module.ts untuk mengatur navigasi.
- app.component.css untuk membuat style desain user interface
- app.component.html untuk membuat desain user interface.
- app.component.spec.ts
- app.component.ts untuk menuliskan perintah-perintah program termasuk algoritma.
- app.module.ts file utama aplikasi untuk mengatur library-library yang digunakan termasuk mengatur routing dan component yang digunakan.

