# Memasang Template

Video tutorial yang khusus membahas tentang integrasi Angular dengan Material Design dapat Anda simak pada video berikut:

<iframe class="youtube-video" src="https://www.youtube.com/embed/BB5tuQdCjgY?rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="box-sizing: border-box; display: flex; margin: auto; width: 560px; height: 315px; border: none; max-width: 100%; max-height: 51vw; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"></iframe>

Secara default Angular tidak menyediakan template yang memungkinkan bagi pengembang untuk membuat desain user interface dengan mudah. Angular hanya menyediakan arsitektur utama. Namun pengembang dapat menggabungkan sistem Angular dengan beberapa framework user interface seperti Material Design, Bootstrap, Uikit, maupun Onsen.

Pada project kali ini kita akan menggunakan Material Desain sebagai framework UI. Material Design (MD) merupakan framework UI yang dibangun oleh Google untuk memudahkan pengembang membuat desain UI. Pengembang tidak perlu lagi membuat CSS untuk membuat aspek-aspek dasar UI seperti Button, Card, Navbar, Dialog, dll.

![img](https://lh5.googleusercontent.com/Beonhwc20V7S1zPDM44w4ubcGy0kP2t9cqS1OoqkOjVIar3IRrdB4SoV_8igrltniuhTAraCmpUsxDIX5iW2WcYFoe2c_htN3ZEzYm89W0-0ev93tdBLhST6RmsllrVL7eliKh_u)

Material desain dapat diakses melalui [http://material.angular.io](http://material.angular.io/). Untuk mengintegrasikan MD kedalam project Angular tulis perintah berikut ini:

```
ng add @angular/material
```

Pastikan terminal Anda sudah mengarah pada folder project Angular yang sebelumnya sudah dibuat. Jika server sebelumnya masih berjalan, tekan Ctrl+C untuk menghentikan server Angular yang berjalan.

![img](https://lh6.googleusercontent.com/7JI_6lgwoyxMvpzWufBLAihMmVIdO7JUFriEPoMMItPZWZvS1KZw86v9cx44th30c9i7jaU1uBkEj8Vqh8pdCabPb4mCCFMz4zvIIRNwP_oeCqKYuddL262dN7pZVfneJecxgQFC)

MD memberikan pilihan untuk tema yang akan digunakan. MD memberikan 4 pilihan tema yang dapat kita pilih. Selain pilihan tema, MD juga menyediakan pilihan untuk memasukkan library untuk animasi.

### Menerapkan Template dalam Aplikasi

Sekarang kita akan memasang beberapa komponen UI kedalam aplikasi dengan langkah berikut ini:

1. Memasukkan modul komponen Material Design kedalam modul app.module.ts Buka file app.module.ts dan import module material design seperti pada kode program berikut:

   app.module.ts

   ```javascript
   import { BrowserModule } from "@angular/platform-browser";
   import { NgModule } from "@angular/core"; 
   import { AppRoutingModule } from "./app-routing.module"; 
   import { AppComponent } from "./app.component"; 
   import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; 
   
   //MATERIAL DESIGN COMPONENT 
   import {MatToolbarModule} from "@angular/material/toolbar"; 
   
   @NgModule({   
   declarations: 
   [AppComponent],   
   imports: [
   BrowserModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   MatToolbarModule],   
   providers: [],   
   bootstrap: [AppComponent] }) export class AppModule { }
   ```
2. Memasukkan komponen desain pada app.component.html. Modul Toolbar sudah dimasukkan pada tahap pertama. Selanjutnya adalah memasukkan komponen MD kedalam file app.component.html. Hapus semua yang ada pada file tersebut dan ganti dengan komponen toolbar di bawah ini:

   ```html
   <mat-toolbar color="primary">   Aplikasi Buku Alamat </mat-toolbar>
   ```

Dua langkah tersebut merupakan prosedur umum untuk memasukkan komponen ke dalam desain aplikasi yang akan dibuat. Selebihnya Anda dapat memasukkan komponen sesuai dengan kebutuhan dengan melihat referensi di situs resmi Material Design untuk Angular (http://material.angular.io).