# Komunikasi Data

## Video

<iframe width="700" height="500" src="https://www.youtube.com/embed/5ZeZBPOxiQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pengantar

Komunikasi data pada sebuah aplikasi merupakan hal yang penting. Hal itu memungkinkan sistem dapat mengelola data secara terintegrasi. Angular merupakan aplikasi berbasis web yang berorientasi pada klien yang tidak dapat terhubung dengan database secara langsung seperti halnya aplikasi yang dibuat menggunakan bahasa pemrograman yang berjalan disisi server (PHP, NodeJS, Go, Phyton, dll). Oleh sebab itu untuk dapat terhubung dengan database maka pada sistem perlu ditambahkan HTTP Service untuk menghubungkan aplikasi angular yang client side dengan aplikasi di sisi server sehingga memungkinkan untuk mengelola (membaca, membuat, memperbarui, dan menghapus) data pada database.

## What you'll learn

- HTTP Module
- Angular Service
- Menggunakan metode GET, POST, PUT, dan DELETE
- Membuat penanda proses

## Persyaratan

Materi ini merupakan bagian ke-6 dari Serial Belajar Angular. Pastikan Anda sudah mengikuti bagian sebelumnya yang tersedia pada tautan berikut:

1. [Memulai Angular](https://youtu.be/rpAePg8m9bE)
2. [Navigasi pada Angular](https://youtu.be/o2deUdEDhEA)
3. [Integrasi Angular dengan Material Design](https://youtu.be/BB5tuQdCjgY)
4. [Pengaturan Layout dan Tema](https://youtu.be/bl77LemwTWQ)
5. [Variabel, Objek, dan Koleksi](https://youtu.be/ihi7Wl0_zds)

!> Demonstrasi program pada bagian ini menggunakan kode-kode yang sudah dibuat pada bagian ke-5. Oleh sebab itu pastikan kode Anda sudah sesuai dengan progress belajar di bagian sebelumnya.

## Membuat Angular Service

Angular menyediakan fasilitas untuk keperluan komunikasi data dengan server yaitu HTTP Module. Langkah pertama untuk menggunakan fitur ini adalah memasangnya pada app.module.ts.

### #1 - Memasang HttpClientModule pada app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesign } from './material/material';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
 declarations: [
   AppComponent,
   LoginComponent,
   RegisterComponent,
   ForgotComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   MaterialDesign,
   HttpClientModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
```

Setelah HTTP Module terpasang, berikutnya adalah membuat angular service. Jalankan perintah berikut pada terminal. Pastikan terminal sudah mengarah ke folder kerja Angular.

### #2 - Membuat service

```
 ng g service services/api
```

Perintah tersebut akan menciptakan folder baru bernama **services** yang berisi file dengan nama **api.service.ts** dan api.service.spec.ts. Abaikan file kedua.

### #3 - Membuat kode pada api.service.ts

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class ApiService {

 constructor(
   public http:HttpClient
 ) { }

 get()
 {
   return 'OK';
 }
}
```

Kita akan memastikan terlebih dahulu bahwa service tersebut benar-benar dapat berkomunikasi dengan komponen menggunakan fungsi get(). Fungsi tersebut akan dipanggil melalui ProductComponent.

\#4 - Panggil service melalui product.component.ts

```typescript
..
import { ApiService } from 'src/app/services/api.service';
..

constructor(
   public dialog:MatDialog,
   public api:ApiService
 )
 {
  ...
  console.log(this.api.get());
 }
...
```

Kode diatas merupakan penambahan yang dilakukan pada file product.component.ts. Langkah untuk memanggil service adalah:

1. Import service
2. Definisikan pada constructor
3. Panggil fungsi pada service

Jalankan aplikasi dan masuk ke halaman `/public/product`. Perintah `consle.log(this.api.get())` seharusnya menghasilkan output ‘OK' pada console sesuai dengan perintah pada fungsi get() di dalam api.serice.ts. Jika sudah seperti itu maka pemasangan service pada Angular sudah beres!

## GET

Kita mulai berkomunikasi dengan back-end server. Cobalah akses [url ini ](http://api.sunhouse.co.id/bookstore/index.php/books/status)untuk memastikan bahwa back-end yang akan kita gunakan berjalan baik. Seharusnya anda akan memperoleh response ‘OK'. Metode GET merupakan metode untuk mengambil data dari server. Metode GET lazimnya digunakan untuk mengambil data walaupun dapat juga digunakan untuk mengirim data ke API lalu menyimpannya di database. Tapi agar transmisi data lebih terukur maka metode transmisi data dibuat sesuai dengan fungsinya masing-masing.

Untuk keperluan pembelajaran, penulis sudah membuat API sederhana untuk mendemonstrasikan penggunaan metode GET. API Url untuk metode GET adalah:

```
GET http://api.sunhouse.co.id/bookstore/index.php/books

GET http://api.sunhouse.co.id/bookstore/index.php/books/[id]
```

Url /books akan memberikan respons dalam format JSON dengan struktur data koleksi berikut:

```json
[
    {
    "id":"1","title":"Belajar Angular4+ untuk Pemula ","author":"Farid Suryanto","publisher":"Sunhouse Digital","year":"2020","isbn":"343445346","price":"75000"
    }
]
```

Sedangkan url books/[id] akan memberikan respon dalam format JSON dengan struktur data objek berikut:

```
{
"id":"1","title":"Belajar Angular4+ untuk Pemula ","author":"Farid Suryanto","publisher":"Sunhouse Digital","year":"2020","isbn":"343445346","price":"75000"
}
```

Ikuti langkah berikut untuk memanfaatkan metode get pada angular.

### #1 - Kita panggil url tersebut lewat api.service.ts.

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class ApiService {
 serverUrl:any='http://api.sunhouse.co.id/bookstore/index.php/';
 constructor(
   public http:HttpClient
 ) { }

 get(url)
 {
   return this.http.get(this.serverUrl+url);
 }
}
```

Perubahan yang kita lakukan adalah menambahkan variabel serverUrl dan perintah this.http.get(). Kode tersebut akan membuat sistem melakukan request data ke server yang ditentukan saat fungsi get() dipanggil. Fungsi get() tersebut memiliki parameter url agar alamat yang dituju menjadi fleksibel sesuai dengan kebutuhan.

### #2 - Menggunakan service dalam product.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ApiService } from 'src/app/services/api.service';
@Component({
 selector: 'app-product',
 templateUrl: './product.component.html',
 styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 title:any;
 book:any={};
 books:any=[];
 constructor(
   public dialog:MatDialog,
   public api:ApiService
 )
 {
   this.title='Produk'; 
   this.getBooks();   
 }
 ngOnInit(): void {
  
 }
 getBooks()
 {
   this.api.get('books').subscribe(result=>{
     this.books=result;
   })   
 }
 productDetail(data,idx)
 {
   let dialog=this.dialog.open(ProductDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     if(res)
     {
       if(idx==-1)this.books.push(res);
       else this.books[idx]=res;
     }
   })
 }
 deleteProduct(idx)
 {
   var conf=confirm('Delete item?');
   if(conf)
   this.books.splice(idx,1);
 }
}
```

Perubahan pada fungsi getBooks() sudah dilakukan. Fungsi tersebut memanggil data server melalui service get(). Lihatlah hasilnya, seharusnya data yang muncul adalah seperti pada tampilan berikut ini:

![img](https://lh6.googleusercontent.com/hWCNeapll0MeI1_8xZa1UT-8sry16qGYreyU2golQwlxkx8d33_-2SQtMB2xVHwDdbJo9fB1-5uOE29ZQwTUKffuVJ8h-lq_4FoDQW5tdKr5y-QjfDSch0u1YblTHpiESQuG3aqz)

Data diatas adalah data yang tersedia pada server. Mengenai bagaimana membuat API pada sisi server sehingga dapat menyediakan data seperti di atas, hal itu merupakan satu bagian tersendiri. Pada sesi belajar ini, kita hanya mengkonsumsi API yang sudah tersedia agar proses belajar lebih fokus.

## POST

Metode POST biasanya digunakan untuk mengirim data ke server lalu menyimpannya dalam database. Data yang dikirim menggunakan metode POST ini dapat berupa file maupun data JSON. Bagian ini membahas metode POST untuk mengirimkan data dalam format JSON. Untuk metode transfer file akan dibahas secara khusus pada bagian selanjutnya.

Kita fokus pada studi kasus yang digunakan pada sesi pembelajaran ini yaitu membuat aplikasi Bookstore sederhana. Metode POST digunakan untuk menambahkan data buku baru. Untuk keperluan pembelajaran, penulis sudah membuat API sederhana untuk mendemonstrasikan penggunaan metode transmisi data ke server. API url untuk menambahkan buku baru adalah:

```
POST http://api.sunhouse.co.id/bookstore/index.php/books
```

Struktur data yang dikirim menggunakan url diatas adalah:

```json
{
"Title":"",
"Author":"",
"Publisher":"",
"Year":"",
"Isbn":"",
"price":""
}
```

Kita terapkan prosedur API diatas pada aplikasi yang sudah dibuat sebelumnya yaitu menambahkan buku baru dalam database.

### #1 - Menambahkan fungsi pada api.service.ts untuk menangani metode POST

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class ApiService {
 serverUrl:any='http://api.sunhouse.co.id/bookstore/index.php/';
 constructor(
   public http:HttpClient
 ) { }

 get(url)
 {
   return this.http.get(this.serverUrl+url);
 }
 post(url,data)
 {
   return this.http.post(this.serverUrl+url,data);
 }
}
```

Penambahan fungsi yang dilakukan pada file service adalah fungsi post(url,data). Parameter pertama merupakan url. Dalam kasus ini, url tersebut akan diarahkan ke /books. Parameter data berisi objek data yang dikirim ke server dalam format JSON.

### #2 - Menerapkan metode POST untuk menambah data baru pada product-detail.component.ts

```typescript
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
 selector: 'app-product-detail',
 templateUrl: './product-detail.component.html',
 styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
 constructor(
   public dialogRef:MatDialogRef<ProductDetailComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any,
   public api:ApiService
 )
 {
 
 }
 ngOnInit(): void {
 }
 saveData()
 {
   //jika id tidak terdefinisi maka buat data
   if(this.data.id == undefined)
   {
     //prosedur pengiriman data ke server menggunakan metode POST
     this.api.post('books',this.data).subscribe(result=>{
       //tutup dialog dan kirimkan feedback server ke fungsi pemanggil dialog
       this.dialogRef.close(result);
     },error=>{
       //kondisi jika terjadi masalah pengiriman pada pengiriman data
       alert(error);
     })
   }else{
     //prosedur edit data menggunakan metode PUT
   }  
 }
}
```

Pada file product-detail.component.ts dilakukan penambahan kode untuk menyimpan data bari ke database menggunakan metode POST. penambahan yang dilakukan adalah pada bagian constructor yakni melakukan impor ApiService. Selanjutnya fungsi pada service tersebut digunakan pada fungsi saveData(). Fungsi saveData() menangani dua kondisi yaitu kondisi jika properti id pada objek data tersedia maka itu berarti penambahan data baru. Jika tersedia maka akan dilakukan pembaruan.

### #3 - Memperbarui koleksi pada product.component.ts setelah data berhasil dibuat

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
       if(idx==-1)this.books.push(res);
       else this.books[idx]=res;
     }
   })
 }
```

## PUT

Metode PUT digunakan untuk memperbarui data. Untuk keperluan fungsional tersebut kita hanya akan melakukan sedikit penambahan kode pada fungsi saveData() yang sudah dibahas pada bagian sebelum ini serta menambahkan metode PUT pada api.service.ts. API url yang digunakan untuk melakukan pembaruan data adalah:

```
PUT http://api.sunhouse.co.id/bookstore/index.php/books/[id]
```

### #1 - Menambahkan metode PUT pada api.service.ts

```
put(url,data)
 {
   return this.http.put(this.serverUrl+url,data);
 }
```

### #2 - Menambahkan prosedur PUT pada product-detail.component.ts

```typescript
saveData()
 {
   //jika id tidak terdefinisi maka buat data
   if(this.data.id == undefined)
   {
     //prosedur pengiriman data ke server menggunakan metode POST
     this.api.post('books',this.data).subscribe(result=>{
       //tutup dialog dan kirimkan feedback server ke fungsi pemanggil dialog
       this.dialogRef.close(result);
     },error=>{
       //kondisi jika terjadi masalah pengiriman pada pengiriman data
       alert(error);
     })
   }else{
     //prosedur edit data menggunakan metode PUT     this.api.post('books/'+this.data.id,this.data).subscribe(result=>{
       //tutup dialog dan kirimkan feedback server ke fungsi pemanggil dialog
       this.dialogRef.close(result);
     },error=>{
       //kondisi jika terjadi masalah pengiriman pada pengiriman data
       alert(error);
     })
   }  
 }
```

Perubahan data adalah berdasarkan id yang disematkan pada URI /books/[id]. Sama dengan prosedur post, feedback dari server dikirim ke fungsi pemanggil dialog menggunakan metode dialogRef.close().

!> PERHATIAN. Feedback dari server mungkin akan berbeda. Oleh sebab itu, kondisi penangannya pun akan berbeda. Sebaiknya Anda pahami dulu feedback data yang dihasilkan oleh server untuk memutuskan tindakan yang akan dilakukan setelah data tersimpan ke database.

## DELETE

Metode DELETE digunakan untuk menghapus data. Pada contoh kasus ini, API url yang digunakan untuk menghapus data buku adalah:

```
DELETE http://api.sunhouse.co.id/bookstore/index.php/books/[id]
```

### #1 - Membuat fungsi pada api.service.ts untuk menerapkan metode DELETE

```typescript
delete(url)
{
return this.http.delete(this.serverUrl+url);
}
```

### #2 - Menerapkan metode delete pada product.component.ts

```typescript
deleteProduct(idx)
 {
   var conf=confirm('Delete item?');
   if(conf)
   {
     this.api.delete('books/'+this.books[idx].id).subscribe(result=>{
       this.books.splice(idx,1);
     },error=>{
       alert('Tidak dapat menghapus data');
     });
}
```

Perubahan pada fungsi deleteProduct() adalah penambahan prosedur penghapusan data setelah terkonfirmasi oleh pengguna. Penghapusan data adalah mengacu pada nilai id sehingga nilai id tersebut dilampirkan pada url yang diminta oleh fungsi delete pada api.service.ts.

## Efek Loading

Aspek yang tidak kalah penting untuk keperluan interaksi sistem dengan manusia adalah penanda proses. Kita terapkan penanda proses pada setiap proses yang sudah kita buat.

## Loading Data

Kita berikan penanda saat sistem sedang mengambil koleksi dari database.

### #1 - Membuat variabel loading pada product.component.ts

```typescript
loading:boolean;
 getBooks()
 {
   this.loading=true;
   this.api.get('books').subscribe(result=>{
     this.books=result;
     this.loading=false;
   },error=>{
     this.loading=false;
     alert('Tidak dapat mengambil data');
   })   
 }
```

### #2 - Menambahkan elemen loading pada product.component.html

```html
<div *ngIf="loading" style="height: 300px;" class="uk-flex uk-flex-center uk-flex-middle">
   <mat-spinner diameter="30"></mat-spinner>
</div>
<mat-card *ngIf="!loading">
...
</mat-card>
```

`ngIf` yang diterapkan pada elemen merupakan sebuah kondisional. Jika loading bernilai true maka elemen tersebut akan ditampilkan demikian sebaliknya.

## Loading pada Penyimpanan Data

### #1 - Membuat variabel loading pada product-detail.component.ts

```typescript
loading:boolean;
 saveData()
 {
   this.loading=true;
   //jika id tidak terdefinisi maka buat data
   if(this.data.id == undefined)
   {
     //prosedur pengiriman data ke server menggunakan metode POST
     this.api.post('books',this.data).subscribe(result=>{
       //tutup dialog dan kirimkan feedback server ke fungsi pemanggil dialog
       this.dialogRef.close(result);
       this.loading=false;
     },error=>{
       //kondisi jika terjadi masalah pengiriman pada pengiriman data
       alert(error);
       this.loading=false;
     })
   }else{
     //prosedur edit data menggunakan metode PUT
     this.api.post('books/'+this.data.id,this.data).subscribe(result=>{
       //tutup dialog dan kirimkan feedback server ke fungsi pemanggil dialog
       this.loading=false;
       this.dialogRef.close(result);
     },error=>{
       //kondisi jika terjadi masalah pengiriman pada pengiriman data
       alert(error);
       this.loading=false;
     })
   }   
 }
```

### #2 - Membuat efek loading pada tombol simpan di product-detail.component.html

```html
<div mat-dialog-actions align="end">
<button mat-button mat-dialog-close>Batal</button>
<button mat-flat-button (click)="saveData()" [disabled]="loading">{{loading ? 'Menyimpan..':'Simpan'}}</button>
</div>
```

Perhatikan kode berikut:

```
{{loading ? 'Menyimpan..':'Simpan'}}
```

Jika loading bernilai true maka yang ditampilkan adalah text ‘Menyimpan..' berlaku sebaliknya. Tombol tersebut juga akan di non-aktifkan saat variable loading bernilai true. Hal tersebut dilakukan oleh perintah `[disabled]="loading".`

## Loading Hapus Data

Prosedur loading ini berbeda dari sebelumnya. Pada penghapusan data, loading hanya diterapkan pada tombol yang terpilih. Maka variabel loading yang digunakan adalah objek.

### #1 - Menambahkan objek loadingDelete pada product.component.ts

```typescript
loadingDelete:any={};
 deleteProduct(idx)
 {
   var conf=confirm('Delete item?');
   if(conf)
   {
     this.loadingDelete[idx]=true;
     this.api.delete('books/'+this.books[idx].id).subscribe(result=>{
       this.books.splice(idx,1);
       this.loadingDelete[idx]=false;
     },error=>{
       alert('Tidak dapat menghapus data');
       this.loadingDelete[idx]=false;
     });
   }   
 }
```

### #2 - Menambahkan efek loading pada tombol delete

```html
<td align="right">
<button mat-button color="primary" (click)="productDetail(book,idx)">Edit</button>
 <button mat-button color="warn" (click)="deleteProduct(idx)" [disabled]="loadingDelete[idx]">{{loadingDelete[idx] ? 'Menghapus..':'Delete'}}</button>
</td>
```

## Kesimpulan

Komunikasi data dengan back-end pada Angular adalah dengan menerapkan modul HttpClientModule yang diterapkan pada module aplikasi. Selain itu untuk melakukan komunikasi data dengan server diperlukan service yang menjembatani komunikasi antar komponen dengan API server. Komunikasi data Angular dengan server sangat tergantung pada kecepatan akses jaringan. Oleh sebab itu sebaiknya diberikan penanda proses agar pengguna mengetahui bahwa sistem sedang melakukan sebuah proses dan perlu untuk menunggu.