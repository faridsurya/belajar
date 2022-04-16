# Pengelolaan Data pada Angular

## Video

### Bagian 1

<iframe width="700" height="500" src="https://www.youtube.com/embed/ihi7Wl0_zds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Bagian 2

<iframe width="700" height="500" src="https://www.youtube.com/embed/MRxn6hrcKHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pengantar

Pengelolaan data pada sebuah aplikasi merupakan bagian yang cukup penting. Aplikasi akan menemukan kebermanfaatannya jika memiliki data-data yang penting dan bermakna bagi penggunanya. Bagian ini membahas tentang pengelolaan data pada angular seperti penggunaan variabel, object, dan collection. Setelah mempelajari bagian ini, diharapkan Anda dapat membuat variabel, objek, dan koleksi serta menampilkannya pada view.

## What you'll learn

- Menampilkan data pada view
- Penggunaan tipe data objek
- Koleksi data dan perulangan
- Mempelajari penggunaan interface
- Penggunaan enum
- Export dan import objek

## Persyaratan

Materi ini merupakan bagian ke-5 dari Serial Belajar Angular. Pastikan Anda sudah mengikuti bagian sebelumnya yang tersedia pada tautan berikut:

1. [Memulai Angular](https://youtu.be/rpAePg8m9bE)
2. [Navigasi pada Angular](https://youtu.be/o2deUdEDhEA)
3. [Integrasi Angular dengan Material Design](https://youtu.be/BB5tuQdCjgY)
4. [Pengaturan Layout dan Tema](https://youtu.be/bl77LemwTWQ)

## Persiapan

Untuk memulai bagian ini kita perlu menambahkan sebuah komponen baru. Kita buat terlebih dahulu komponen products dengan menjalankan perintah berikut pada terminal:

```
 ng g c admin/product
```

Perintah diatas membuat komponen secara otomatis. Perubahan yang terjadi akibat perintah diatas adalah:

- Tercipta folder baru pada admin: admin/products yang berisi file-file yang berkaitan dengan komponen tersebut.
- Pembaruan pada file admin.module.ts yaitu penambahan komponen ProductComponent pada bagian declarations.

```typescript
@NgModule({
 declarations: [
   AdminComponent,
   DashboardComponent,
   ProductComponent
 ],
 entryComponents:[ ],
 imports: [
   CommonModule,  
   RouterModule.forChild(routes),
   MaterialDesign,
   FormsModule
 ]
})
export class AdminModule { }
```

### Menambahkan Router

Buka file **admin.module.ts** untuk melakukan pengaturan router.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
 {
   path:'',
   component:AdminComponent,
   children:[
     {
       path:'dashboard',
       component:DashboardComponent
     },
     //pengaturan router untuk halaman product
     {
       path:'product',
       component:ProductComponent
     }, 
     {
       path:'',
       pathMatch:'full',
       redirectTo:'/admin/dashboard'
     }
   ]
 } 
]

@NgModule({
 declarations: [
   AdminComponent,
   DashboardComponent,    
   ProductComponent,  
 ],
 entryComponents:[   
 ],
 imports: [
   CommonModule,  
   RouterModule.forChild(routes),
   MaterialDesign,   
 ]
})
export class AdminModule { }
```

Setelah router berhasil diatur maka perlu juga untuk mengatur tombol navigasi pada admin.component.html.

```html
<mat-nav-list>
           <mat-list-item routerLink="/admin/dashboard">
           <mat-icon matListIcon>dashboard</mat-icon>
           <h3 matLine>Dashboard</h3>
           </mat-list-item>
           <mat-list-item routerLink="/admin/product">
           <mat-icon matListIcon>camera_enhance</mat-icon>
           <h3 matLine>Products</h3>
           </mat-list-item>
</mat-nav-list> 
```

Router untuk halaman produk kita atur pada ‘admin/product'. Penambahan kode diatas akan membuat tombol navigasi menjadi bertambah satu yakni tombol produk. Selanjutnya kita akan bekerja pada ProductComponent untuk mempelajari hal-hal yang berkaitan dengan pengelolaan data pada Angular.

## Data Binding

Pola pendefinisian variabel pada Angular pada prinsipnya sama dengan pendefinisian variabel pada Javascript. Pada saat kita membuat komponen baru pada Angular, pada dasarnya kita membuat sebuah class Javascript. Oleh sebab itu, cara mendefinisikan variabel adalah sama seperti kita mendefinisikan variabel di dalam sebuah class. Perhatikan contoh berikut:

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-product',
 templateUrl: './product.component.html',
 styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 title:any;
 constructor() {
    this.title='Products';
 }
}
```

Membuat variabel `title` tidak perlu mendefinisikannya menggunakan inisial variabel, misalnya `var` seperti pada javascript, tapi cukup dengan mendefinisikan tipe variabelnya: any, Date, number, boolean, dll. Memperbarui nilai variabel dapat dilakukan didalam fungsi. Pada contoh diatas variabel `title` diperbarui dalam fungsi `constructor()` dengan cara memberikan awalan `this` pada variabel tersebut.

Selanjutnya kita akan tampilkan variabel tersebut pada view. Pada kode diatas, komponen view yang terkait dengan ProductComponent adalah product.component.html. Oleh sebab itu, kita akan melakukan perubahan pada file tersebut agar dapat menampilkan variabel title yang sudah dibuat. Perhatikan kode berikut:

```html
<mat-card>
   <mat-card-header>
       <mat-card-title>{{title}}</mat-card-title>
   </mat-card-header>
</mat-card>
```

Menampilkan variabel adalah dengan cara menempatkannya pada tag `{{title}}`. Hasil dari kode diatas adalah sebagai berikut:

![img](https://lh6.googleusercontent.com/UjYxPcTpz5CbEVHKeIp0O_Y3jbkoNgwbzt7SmfJVAIcPiorC47CAtEhuopXuRqhvpLPdNdgUzLmwLFNyjOL8Ws6-rpZ-CvWySLJpykShsqaoNkTQ2I5Exqmy5RH2CWuq0FvUS6PF)

## Object

Secara sederhana objek merupakan kumpulan variabel yang dikumpulkan menjadi satu. Berikut ini contoh objek:

```javascript
{
  title:'Angular untuk Pemula',
  author:'Farid Suryanto',
  publisher:'Sunhouse Digital',
  year:2020,
  isbn:'8298377474'
}
```

Mendefinisikan objek pada angular adalah sama dengan mendefinisikan variabel lain seperti contoh sebelumnya. Perbedaannya hanya pada cara mengakses variabel di dalam objek. Tipe data objek ini dapat juga digunakan untuk mengambil data dari form dan juga menampung data dari luar, misalnya dari database, untuk ditampilkan pada user interface.

```typescript
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  Title:any;
  //mendefinisikan variabel book sebagai objek
  book:any={};
  constructor() 
  {
    this.title='Produk';
    //memperbarui variabel book
    this.book={
      title:'Angular untuk Pemula',
      author:'Farid Suryanto',
      publisher:'Sunhouse Digital',
      year:2020,
      isbn:'8298377474',
      price:70000
    };
  }
  ngOnInit(): void {
    
  }  
}
```

Kode diatas mendemonstrasikan penggunaan objek pada Angular. Pertama, objek book didefinisikan terlebih dahulu kemudian diperbarui pada saat ProductComponent aktif. Setelah didefinisikan pada komponen, maka data tersebut dapat ditampilkan pada view seperti pada kode berikut ini:

```html
<mat-card>
    <mat-card-header>
        <mat-card-title>{{title}}</mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <div class="uk-flex">
            <span class="uk-width-expand"></span>
            <button mat-flat-button color="primary">Tambah Produk</button>
        </div>
        <table class="uk-table uk-table-middle uk-table-divider">
            <thead>                
                <th>No</th>
                <th>Judul</th>
                <th>Penulis</th>
                <th>Penerbit</th>
                <th>Tahun Terbit</th>
                <th>ISBN</th>
                <th>Harga</th>
                <th align="right">#</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{{book.title}}</td>
                    <td>{{book.author}}</td>
                    <td>{{book.publisher}}</td>
                    <td>{{book.year}}</td>
                    <td>{{book.price}}</td>
                    <td align="right">
                        <button mat-button color="primary" >Edit</button>
                        <button mat-button color="warn">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </mat-card-content>
</mat-card>
```

Hasil dari penerapan kode pada komponen dan view menghasilkan tampilan sebagai berikut:

![img](https://lh4.googleusercontent.com/tYgX4rKe_Ffv3rA_avoeBvxDNHnTc8WwpHbzhe55aZqGCwIGORaDvCkZ5_f_zNHDgfnQQneha5cCl78ExpG2c4Xf-ZnXi13oY4hVnavXScf9UteyCEJWfJAboewrzPNFwhn2v1kO)

## Collection & Looping

Koleksi dalam hal ini adalah kumpulan data. Kumpulan tersebut dapat berupa variabel maupun objek.

```javascript
 var koleksi1=[1,2,3,4,5]; //koleksi integer
 var koleksi2=["satu","dua","tiga"]; //koleksi string
```

Dalam pemrograman komputer, koleksi dapat digunakan untuk mengelola kumpulan data untuk diproses lebih lanjut misalnya ditampilkan dalam bentuk tabel. Biasanya kumpulan data tersebut diperoleh dari data yang berasal dari luar misalnya dari database.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title:any;
  book:any={};
  //1. membuat koleksi books
  books:any=[];
  constructor(    
  ) 
  {
    this.title='Produk';
    //3. Memanggil fungsi getBooks()
    this.getBooks();
  }
  ngOnInit(): void {
    
  }
  //2. Membuat fungsi
  getBooks()
  {
    //4. memperbarui koleksi books
    this.books=[
      {
        title:'Angular untuk Pemula',
        author:'Farid Suryanto',
        publisher:'Sunhouse Digital',
        year:2020,
        isbn:'8298377474',
        price:70000
      },
      {
        title:'Membuat Aplikasi Maps menggunakan Angular',
        author:'Farid Suryanto',
        publisher:'Sunhouse Digital',
        year:2020,
        isbn:'82983323455',
        price:75000
      }
    ];
  }  
}
```

Kode diatas menunjukkan penambahan koleksi pada ProductsComponent. Langkah pembuatan koleksi adalah sebagai berikut:

1. Membuat variabel koleksi ‘books'.
2. Membuat fungsi getBooks() untuk mengisi koleksi dengan objek.
3. Memanggil fungsi koleksi

## Menampilkan Koleksi

Koleksi dapat ditampilkan secara berulang pada view. Kita hanya perlu untuk membuat satu baris kode untuk user interface kemudian koleksi tersebut dapat ditampilkan secara berulang. Perhatikan kode berikut:

```html
<mat-card>
   <mat-card-header>
       <mat-card-title>{{title}}</mat-card-title>
   </mat-card-header>
   <mat-card-content>
       <div class="uk-flex">
           <span class="uk-width-expand"></span>
           <button mat-flat-button color="primary">Tambah Produk</button>
       </div>
       <table class="uk-table uk-table-middle uk-table-divider">
           <thead>               
               <th>No</th>
               <th>Judul</th>
               <th>Penulis</th>
               <th>Penerbit</th>
               <th>Tahun Terbit</th>
               <th>ISBN</th>
               <th>Harga</th>
               <th align="right">#</th>
           </thead>
           <tbody>
               <tr *ngFor="let book of books; let idx=index">
                   <td>{{idx+1}}</td>
                   <td>{{book.title}}</td>
                   <td>{{book.author}}</td>
                   <td>{{book.publisher}}</td>
                   <td>{{book.year}}</td>
                   <td>{{book.price}}</td>
                   <td align="right">
                       <button mat-button color="primary" >Edit</button>
                       <button mat-button color="warn">Delete</button>
                   </td>
               </tr>
           </tbody>
       </table>
   </mat-card-content>
</mat-card>
```

Perulangan pada view dapat dibuat menggunakan perintah *ngFor yang diletakkan pada tag HTML. Perhatikan kode berikut:

```html
*ngFor="let book of books; let idx=index"
```

Kode diatas memuat tiga variabel:

- **book**: variabel untuk mengakses objek didalam koleksi
- **books**: variabel koleksi yang berisi array
- **idx**: mendefinisikan idx sebagai nilai index dari array.

Sekarang kita sudah dapat membuat tampilan seperti berikut ini:

![img](https://lh6.googleusercontent.com/5aZw6nCmp4e38JLtkfh-_asepOm71K4NW25QRsDBf-3JHpElsWQTDJAjJTa47wk46fC-3UfTV3AqoLgViMrH53r9COemAFDnPQAT1B1BPOiwnjeoWklNiVMrm-sSVlYBPX2Wta5x)

## Menambahkan Koleksi secara Dinamis

Untuk menambahkan koleksi secara dinamis, diperlukan data masukan dari pengguna. Data masukan yang diperlukan adalah formulir dan tombol sebagai trigger. Formulir dapat ditempatkan satu halaman dengan tabel ataupun juga dapat ditampilkan sebagai dialog. Semua itu tergantung pada desain antarmuka yang anda buat.

Kali ini kita manfaatkan fitur dialog yang dimiliki oleh Material Design untuk menambahkan objek di dalam koleksi secara dinamis. Skenario penambahan objek pada koleksi adalah:

1. Menampilkan dialog yang berisi formulir setelah pengguna menekan tombol ‘Tambah Produk'
2. Menambahkan data pada koleksi setelah dialog tertutup dan objek terisi data. Jika objek tidak terisi data, jangan tambahkan koleksi.

Untuk membuat skenario tersebut kita tambahkan dialog terlebih dahulu. Kita buat halaman baru terlebih dahulu, yang akan kita gunakan sebagai dialog. Jalankan perintah berikut pada terminal:

```
ng generate component admin/product-detail
```

### #2 - Perbarui file product-datail.component.ts

```typescript
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
 selector: 'app-product-detail',
 templateUrl: './product-detail.component.html',
 styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
 constructor(
   public dialogRef:MatDialogRef<ProductDetailComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any
 )
 {
 
 }
 ngOnInit(): void {
 }
 saveData()
 {
   this.dialogRef.close(this.data);
 }
}
```

Terdapat variabel data yang berada di dalam constructor. Variabel tersebut berisi nilai yang dikirim oleh dialog. Oleh sebab itu, variabel ‘data' tersebut nantinya dapat juga digunakan sebagai data masukan untuk pembaruan objek dalam koleksi. Dengan menggunakan cara ini, kita cukup membuat satu halaman yang berfungsi untuk menambahkan data baru dan juga memperbarui data yang ada.

Fungsi saveData() digunakan untuk menutup dialog dan mengirimkan objek pada variabel data yang nantinya akan diisi oleh pengguna melalui formulir. Perintah untuk menutup dialog adalah menggunakan `this.dialogRef.close().` Anda dapat juga memasukkan perintah penyimpanan data ke database di dalam fungsi tersebut. Untuk melakukan hal itu, akan kita bahas pada bagian khusus mengenai komunikasi angular dengan database.

### #3 - Perbarui file **product-detail.component.html** untuk menambahkan formulir.

```html
<h3 mat-dialog-title>
   Detail Produk
</h3>
<div mat-dialog-content>
   <mat-form-field appearance="outline" style="width: 100%;">
       <mat-label>Judul</mat-label>
       <input matInput [(ngModel)]="data.title">      
   </mat-form-field>
   <mat-form-field appearance="outline" style="width: 100%;">
       <mat-label>Penulis</mat-label>
       <input matInput [(ngModel)]="data.author" >     
   </mat-form-field>
   <mat-form-field appearance="outline" style="width: 100%;">
       <mat-label>Penerbit</mat-label>
       <input matInput [(ngModel)]="data.publisher" >     
   </mat-form-field>
   <mat-form-field appearance="outline" style="width: 100%;">
       <mat-label>ISBN</mat-label>
       <input matInput [(ngModel)]="data.isbn" >     
   </mat-form-field>
   <mat-form-field appearance="outline" style="width: 100%;">
       <mat-label>Harga</mat-label>
       <input matInput type="number" [(ngModel)]="data.price" >      
   </mat-form-field>
</div>
<div mat-dialog-actions align="end">
<button mat-button mat-dialog-close>Batal</button>
<button mat-flat-button (click)="saveData()">Simpan</button>
</div>
```

Sebelumnya, pada bagian constructor komponen, kita sudah menyertakan kode berikut:

```
@Inject(MAT_DIALOG_DATA) public data: any
```

Kalau kita lihat kode pada bagian view maka variabel `data` (pada kasus ini) harus berupa objek. Oleh sebab itu, pada saat memanggil dialog dan menyertakan data yang dikirim, data tersebut juga harus dibuat sebagai objek. Objek kosong menggunakan tanda ‘{ }' untuk membuat data baru atau dapat juga objek isi yang diperoleh dari data yang sudah ada.

!> **PERHATIAN**. `[(ngForm)]` merupakan bagian dari modul `Forms` Angular. Oleh sebab itu `FormsModule` harus ditambahkan pada file **admin.module.ts** agar perintah tersebut dapat digunakan.

### #4 - Perbarui kode pada admin.module.ts untuk menambahkan FormsModule

```typescript
@NgModule({
 declarations: [
   AdminComponent,
   DashboardComponent,    
   ProductComponent,  
 ],
 entryComponents:[   
 ],
 imports: [
   CommonModule,  
   RouterModule.forChild(routes),
   MaterialDesign,   
   FormsModule
 ]
})
export class AdminModule { }
```

### #5 - Tambahkan perintah untuk memanggil fungsi productDetail() pada tombol Tambah Produk dalam **product.component.html**

```
<button mat-flat-button color="primary" (click)="productDetail({},-1)">Tambah Produk</button>
```

Dialog sudah siap digunakan dan dapat dipanggil melalui tombol Tambah Produk. Kode diatas menunjukkan bahwa fungsi productDetail() dipanggil saat tombol di klik.

### #1 - Tambahkan fungsi berikut pada product.component.ts

```typescript
productDetail(data,idx)
 {
   let dialog=this.dialog.open(ProductDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     if(res)
     {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
       if(idx==-1)this.books.push(res);      
        //jika tidak maka perbarui data  
       else this.books[idx]=res; 
     }
   })
 }
```

Fungsi diatas memiliki dua parameter yaitu data dan idx. Parameter ‘data' akan dikirimkan ke `ProductDetailComponent`. Perintah this.dialog.open() akan memanggil komponen terkait dan ditampilkan sebagai dialog. Fungsi `afterClosed()` yang disematkan pada variabel dialog akan dijalankan setelah dialog tertutup. Pada kode diatas, jika terdapat feedback dari dialog yang bernilai tidak false maka pada koleksi books akan ditambahkan objek baru melalui metode push. Jika kita lihat kode diatas maka seharusnya data feedback yang dikirim balik oleh komponen dialog merupakan objek yang berisi data yang dapat ditambahkan pada koleksi books.

Kondisional yang memanfaatkan nilai idx digunakan untuk menangani dua kondisi:

1. Jika nilai idx=0 maka artinya itu adalah penambahan data baru. Maka data feedback yang diberikan oleh komponen dialog akan ditambahkan kedalam koleksi menggunakan metode push.
2. Jika nilai idx != 0 (tidak sama dengan) maka artinya itu adalah pembaruan data pada koleksi index ke-idx.

## Memperbarui Objek dalam Koleksi

Skenario untuk membuat objek baru dan memasukkannya kedalam koleksi dapat digunakan untuk membuat data baru pada database. Hal itu akan dibahas secara khusus pada bagian khusus. Tidak hanya menambahkan, memperbarui data pada koleksi juga dapat dilakukan menggunakan skenario yang sama persis dengan pembuatan objek baru. Itu hanya butuh sedikit pembaruan kode.

### Tambahkan kode tombol edit pada file product.component.ts

```html
<td align="right">
<button mat-button color="primary" (click)="productDetail(book,idx)">Edit</button>
<button mat-button color="warn">Delete</button>
</td>
```

Pada saat tombol edit di klik maka fungsi productDetail() akan dijalankan. Fungsi tersebut diberikan nilai parameter: book dan idx. Artinya, variabel data pada ProductDetailComponent akan diisi dengan salah satu objek pada koleksi books. Skema ini akan memperbarui data pada koleksi terpilih.

## Menghapus Objek dalam Koleksi

Menghapus data dalam koleksi adalah sama dengan menghapus data dalam array. Menghapus data pada javascript dapat dilakukan dengan menggunakan metode splice().

```javascript
Var myArray=['a','b','c'];
myArray.splice(2,1);

//result : [‘a','b']
```

Perintah splice(2,1) berarti myArray pada index ke-2 akan dihapus. Kita terapkan metode tersebut untuk menghapus objek dalam koleksi.

### #1 - Tambahkan kode pada product-detail.component.html pada bagian tombol delete

```html
<td align="right">
                       <button mat-button color="primary" (click)="productDetail(book,idx)">Edit</button>
                       <button mat-button color="warn" (click)="deleteProduct(idx)">Delete</button>
 </td>
```

### #2 - Tambahkan fungsi pada product-detail.component.ts

```javascript
deleteProduct(idx)
 {
   var conf=confirm('Delete item?');
   if(conf)
   this.books.splice(idx,1);
 }
```

Fungsi diatas akan menghapus koleksi pada index ke-idx setelah konfirmasi bernilai true.

## Kesimpulan

Konsep dasar pengelolaan data pada angular terdiri dari penggunaan variabel, objek, dan koleksi. Setelah mahir dalam bagian ini dan juga implementasi dengan komunikasi data eksternal Anda dapat mempelajari konsep mengenai penggunaan interface, enum, dan juga export import class. Konsep tersebut tidak masuk secara spesifik dalam angular tapi dibahas lebih detail pada pola pemrograman [Typescript](https://www.typescriptlang.org/). Konsep tersebut juga sangat bermanfaat untuk menerjemahkan class diagram ke dalam kode program.

Bagian selanjutnya membahas tentang komunikasi data menggunakan HTTP modul. Pada bagian ini Anda akan belajar CRUD (Create Read Update Delete) data pada database menggunakan dua skenario jembatan penghubung: PHP dan NodeJS.

