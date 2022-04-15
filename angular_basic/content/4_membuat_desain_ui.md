# Membuat Desain UI

Desain User Interface (UI) yang akan kita buat adalah seperti pada gambar berikut:

![img](https://lh3.googleusercontent.com/EU87JT5YETLkQhS8viToDRS7rcnT6u9KinXe8Czxt_B7RaCvsR_SbAyzapObWVrafN8kDdArTlwD8E2kj0ZeUWBCLRLiiKgpssllztt1W9Nl10qQXHyiMckO9FAg_JxXlRUcesrR)

Pembuatan desain UI seperti tampilan di atas adalah menggunakan komponen-komponen pada Material Desain. Pada kasus ini kita belum menggunakan skema otentikasi. Artinya, pengguna tidak memerlukan login terlebih dahulu untuk dapat menggunakan aplikasi.

Alur aktivitas yang akan kita buat adalah sebagai berikut:

1. Pengguna menekan tombol Tambah Alamat untuk membuat alamat baru kemudian sistem membuka dialog yang berisi formulir data alamat.
2. Setiap daftar alamat berisi 3 menu yaitu DETAIL, EDIT, dan DELETE. Menu detail akan membuka dialog detail alamat. Menu Edit akan membuka dialog edit data. Menu delete akan membuka dialog konfirmasi penghapusan data.

## Membuat Toolbar

Modul komponen toolbar sudah dimasukkan pada tahap sebelum ini. Sekarang kita akan tambahkan tombol Buat Alamat yang diletakkan pada sisi kanan Toolbar. Untuk membuatnya ikuti langkah berikut:

1. Tambahkan CSS pada file `app.component.css` dengan kode berikut ini:

   ```css
   .spacer {flex-grow: 1;  }
   ```

2. Tambahkan modul komponen Button pada app.module.ts

   ```javascript
   import { MatToolbarModule } from "@angular/material/toolbar";
   import { MatButtonModule } from "@angular/material/button";
   
   imports: [
     BrowserModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     MatToolbarModule,
     MatButtonModule,
     MatCardModule,
   ];
   ```

3. Tambahkan button pada app.component.html di dalam Toolbar

   ```html
   <mat-toolbar color="primary">
     <span>Aplikasi Buku Alamat</span>
     <span class="spacer"></span>
     <button mat-button>Tambah Alamat</button>
   </mat-toolbar>;
   ```

   

## Membuat Card Daftar Alamat

Card daftar alamat digunakan untuk menampilkan data alamat. Komponen yang digunakan adalah Card, List, Icon, dan Button.

1. Memasukkan komponen Card, List, dan Icon dalam app.module.ts

   ```javascript
   import { MatCardModule } from "@angular/material/card";
   import { MatListModule } from "@angular/material/list";
   import { MatIconModule } from "@angular/material/icon";
   ...
   imports: [MatCardModule, MatListModule, MatIconModule];
   ```

2. Membuat desain card pada app.component.html. Gambar pada matListAvatar mengarah pada folder src/assets. Oleh sebab itu Anda perlu menambahkan gambar dengan nama avatar.png agar gambar tersebut muncul sebagai avatar pada list yang dibuat.

   ```html
   <div class="container">   
   <mat-card>     
     <mat-card-header>       
       <mat-card-title>Daftar Alamat</mat-card-title>     
     </mat-card-header>     
     <mat-card-content>       
       <mat-list>         
         <mat-list-item>          
           <img matListAvatar src="assets/avatar.png" alt="...">          
             <h3 matLine> Nama Lengkap </h3>           
             <p matLine>             
               <span> nama@domain.com </span>                      
             </p>                    
             </mat-list-item>       
           </mat-list>      
         </mat-card-content>   
       </mat-card> 
     </div>
   ```

3. Menambahkan CSS pada app.component.css. CSS .container akan membuat tampilan card memiliki batas 100px di kanan dan kiri serta batas 50px di atas dan bawah.

   ```css
   .container{     
   padding: 50px 100px 50px 100px;  
   }
   ```

## Membuat List Menu

List menu merupakan komponen Material Design untuk menampilkan daftar menu dalam tampilan popup yang muncul setelah sebuah tombol ditekan. Daftar menu yang akan kita tampilkan adalah DETAIL, EDIT, dan DELETE. Untuk lebih detail, lihat referensi pada https://material.angular.io/components/menu/examples.

![img](https://lh5.googleusercontent.com/ma1zA5arcfIuAfc_2b7KJAaDAiDpbetA8ngtVt6qXYNBo4Ukw7uRnWFSRuMJ1E-3ctiGeykmDH0Vv-OSlHLtiXzRQZPBsgI4qei8vLUicC95K1lbhp0IefLQn0ClDR5efA4LYtv6)

Desain yang akan dibuat adalah seperti pada gambar diatas. Tahap sebelumnya sudah memasukkan MatListModule kedalam app.module.ts. Maka untuk menambahkan menu pada list, kita tambahkan kode HTML pada file app.component.html yang sebelumnya sudah diberikan kode untuk menampilkan Card dan List. Tambahkan kode pada bagian berikut ini:

**Pada app.module.ts**

```javascript
...
import {MatMenuModule} from "@angular/material/menu";
...
.
.

@NgModule({
  ...
  imports: [
    ...
    MatMenuModule
  ],
  ...
})
```

Pada **app.component.html**

```html
<mat-list>
  <mat-list-item>
    ...
    <button mat-icon-button [matMenuTriggerFor]="menu">             
      <mat-icon>more_vert</mat-icon>           
    </button>           
    <mat-menu #menu="matMenu">             
      <button mat-menu-item>Detail</button>             
      <button mat-menu-item>Edit</button>             
      <button mat-menu-item>Delete</button>           
    </mat-menu>         
  </mat-list-item>  
</mat-list>
```

## Dialog Penambahan Alamat

Aplikasi ini menggunakan MatDialog untuk menambahkan data baru. Tampilan dialog yang akan kita buat adalah seperti pada gambar berikut:

![img](https://lh3.googleusercontent.com/BBgGxEMBGANT_nuyxIAIAdx_ZC8EoGBLAVrCXq7mhs20_cSes-HSJ5ikqHm06pRUttV_WyEbI_knZf9zCW48nVDIurxhlikgnVvhK9Nx03y6f_7HM5ykufvP4rATr7d6TmBbUo0H)

Untuk menambahkan dialog ikuti langkah berikut:

### Tambahkan modul MatDialog, MatFormField, dan MatInput pada app.module.ts

```javascript
import {MatDialogModule} from "@angular/material/dialog";  
import {MatFormFieldModule} from "@angular/material/form-field";  
import {MatInputModule} from "@angular/material/input";

@NgModule(
    {     
        imports: [MatDialogModule,     MatFormFieldModule,     MatInputModule  ],
    })
```

Membuat Component baru untuk membuat desain dialog. Melalui terminal,tuliskan perintah berikut.

```bash
ng generate component tambah-alamat 
```

Pastikan terminal sudah mengarah pada project Angular. Perintah diatas akan membuat beberapa file secara otomatis seperti tampak pada gambar berikut:

![img](https://lh6.googleusercontent.com/LKYzpDQ2UCdyrkIH-Rjrluj3oUYNLkYQiika1VrsfD4RxWDi-pCM9rkGtVYW4_zNO9gcpecg5v4Qm5FIVP1g7YrHy9FCyBuhILZu8OVRr80yeayN86Ow7gaJVSuOOu5HdDqUYG7Y)

Pada saat komponen baru dibuat, secara otomatis sistem Angular juga menambahkan kode baru pada app.module.ts. Kode baru tersebut adalah:

```javascript
...
import { TambahAlamatComponent } from "./tambah-alamat/tambah-alamat.component";  

@NgModule({
declarations: [     AppComponent,     TambahAlamatComponent   ],   ...  
})
```

Karena komponen baru tersebut akan ditampilkan sebagai Dialog maka kita perlu menambahkan komponen tersebut pada atribut EntryComponents yang ada pada app.module.ts.

```javascript
@NgModule(
{  
...  
entryComponents:[     
TambahAlamatComponent   
]   
...   
})
```

Membuat desain HTML untuk menambahkan alamat baru. Pada file tambah-alamat/tambah-alamat.component.html buatlah kode HTML berikut:

```html
<h2 mat-dialog-title>
Tambah Alamat Baru
</h2>

<mat-dialog-content>
<mat-form-field style="width: 100%;">
    <mat-label>Nama</mat-label>
    <input matInput >
</mat-form-field>

<mat-form-field style="width: 100%;">
    <mat-label>Alamat</mat-label>
    <input matInput >
</mat-form-field>

<mat-form-field style="width: 100%;">
    <mat-label>Kota</mat-label>
    <input matInput >
</mat-form-field>

<mat-form-field style="width: 100%;">
    <mat-label>Propinsi</mat-label>
    <input matInput >
</mat-form-field>

<mat-form-field style="width: 100%;">
    <mat-label>Kode Pos</mat-label>
    <input matInput >
</mat-form-field>

<mat-form-field style="width: 100%;">
    <mat-label>Nomer HP</mat-label>
    <input matInput >
</mat-form-field>

<mat-form-field style="width: 100%;">
    <mat-label>Email</mat-label>
    <input matInput >
</mat-form-field>

</mat-dialog-content>

<mat-dialog-actions>
<button mat-raised-button  [mat-dialog-close]="true">Batal</button>
<button mat-raised-button color="primary" [mat-dialog-close]="true">Simpan</button>
</mat-dialog-actions>
```

Menambahkan perintah untuk menampilkan dialog dengan cara menambahkan kode pada file app.component.ts

```javascript
import { Component } from "@angular/core";   
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";  
 
import {TambahAlamatComponent} from "./tambah-alamat/tambah-alamat.component"; 
@Component(
  {   
    selector: "app-root",   
    templateUrl: "./app.component.html",   
    styleUrls: ["./app.component.css"] }) 
export class AppComponent {   
  constructor(   
  public dialog:MatDialog  ){}   
  
  buatAlamat()   
  {         
    const dialogRef = this.dialog.open(TambahAlamatComponent, {  
    width: "450px", 
    });       
           dialogRef.afterClosed().subscribe(result => {            
     console.log("Dialog ditutup");              
    });     
  }
} 
```

Perintah diatas memanggil halaman TambahAlamatComponent yang ditampilkan dalam dialog.

Menambahkan trigger pada tombol TAMBAH ALAMAT yang ada pada Toolbar. Tombol tersebut digunakan untuk memanggil fungsi buatAlamat() yang sudah dibuat pada proses sebelum ini. Tambahkan perintah (click)="tambahAlamat()" pada file app.component.html.

```html
<mat-toolbar color="primary">   
<span>     Aplikasi Buku Alamat   </span>   
<span class="spacer"></span>   
<button mat-button (click)="buatAlamat()">Tambah Alamat</button> </mat-toolbar> 
```

Perintah `(click)="tambahAlamat()` adalah trigger untuk memanggil fungsi `tambahAlamat()` pada saat tombol TAMBAH ALAMAT ditekan.

## Dialog Detail Alamat

![img](https://lh5.googleusercontent.com/8xaPR8PFXYBmECCw72MS8rPLYMLz8RwODeCFkHNTP3LoydRuSfc3oq2HNUxzdQFOqBEdjc7i3mEk8hy97sLzXuBMeeC5huPWuFFRe1S7QfFYV_EltfZu168RDZEfIXmn0BHedJnY)

Dialog detail alamat digunakan untuk menampilkan data alamat secara detail. Proses untuk membuat dialog detail alamat ini sama seperti saat membuat dialog tambah alamat. Perbedaannya hanyalah pada kode HTML pada dialog yang dibuat. Ikuti langkah berikut:

1. Buatlah komponen baru dengan menuliskan perintah berikut ini pada terminal. 

   ```bash
   ng generate component detail-alamat 
   ```
   
2. Tambahkan kode HTML berikut ini pada detail-alamat.component.html:

   ```html
   <h3 mat-dialog-title>Haryanto Effendi</h3> 
   <div mat-dialog-content> 
   <mat-list>     
   <h3 matSubheader>Detail Alamat</h3>     
   <mat-list-item>         
   <mat-icon matListIcon>call</mat-icon>         
   <h3 mat-line>087730300127</h3>         
   <mat-divider></mat-divider>     
   </mat-list-item>     
   <mat-list-item>         
   <mat-icon matListIcon>email</mat-icon>         
   <h3 mat-line>email@domain.com</h3>         <mat-divider></mat-divider>     
   </mat-list-item>     
   <mat-list-item>         
   <mat-icon matListIcon>place</mat-icon>         
   <h3 mat-line>Jl. Gaza no 34</h3>         
   <p mat-line>Kota Yogyakarta</p>         
   <p mat-line>Daerah Istimewa Yogyakarta</p>   <mat-divider></mat-divider>     
   </mat-list-item> 
   </mat-list> 
   </div> 
   <mat-dialog-actions>     
   <span class="spacer"></span>     
   <button mat-button mat-dialog-close>Tutup</button>   </mat-dialog-actions>
   ```

3. Tambahkan komponen DetailAlamatComponent pada EntryComponents dalam file app.module.ts. (Lihat langkah serupa pada bagian sebelum ini). Tambahkan juga komponen DetailAlamatComponent pada app.component.ts dan buat juga fungsi untuk membuka dialog.

   ```javascript
   ... 
   import {DetailAlamatComponent} from "./detail-alamat/detail-alamat.component"; 
   ... 
   
   export class AppComponent {   
   constructor(public dialog:MatDialog){}   
   ...   
   //membuka dialog detail alamat       
   detailAlamat()       
   {         
   const dialogRef = this.dialog.open(DetailAlamatComponent, {           width: "450px",               
   });          
   dialogRef.afterClosed().subscribe(result => {           console.log("The dialog was closed");              
   });       
   } 
   }
   ```

4. Kemudian memanggil fungsi detailAlamat() melalui tombol DETAIL pada list menu.

   ```html
   ...   
   <mat-menu #menu="matMenu">             
   <button mat-menu-item (click)="detailAlamat()">Detail</button>             <button mat-menu-item>Edit</button>             
   <button mat-menu-item>Delete</button>  
   </mat-menu>  
   ...
   ```

## Membuat Dialog Konfirmasi Hapus Data

![img](https://lh4.googleusercontent.com/-Yq2uzrZtjjMWzoZH7aWK-SNI0IrdT_-ohO0Q1Ci8s1_xtMZPhvtmvxnUoueTcBaIRjthUCnMGyc0zUzP5ObABPTvi95bw0XKK6s0quvbWeSQ8AnN6hOx776-vdMW7RV8Lxd8608)

Konfirmasi diperlukan ketika pengguna akan menghapus data. Hal ini dilakukan untuk memastikan bahwa pengguna benar-benar akan menghapus data, bukan disebabkan karena ketidaksengajaan menekan tombol hapus data. Pada kasus ini kita akan membuat konfirmasi menggunakan MatDialog. Ikuti langkah berikut ini.

Pertama, membuat komponen dialog-konfirmasi menggunakan perintah berikut ini. Perintah ini adalah shortcut untuk membuat komponen baru pada Angular.

```
ng g c dialog-konfirmasi
```

Kedua, Menambahkan DialogKonfirmasiComponent pada atribut entryComponents pada file app.module.ts. Impor komponen DialogKonfirmasiComponent pada app.component.ts dan tambahkan fungsi untuk menampilkan dialog.

```javascript
...  
import {DialogKonfirmasiComponent} from "./dialog-konfirmasi/dialog-konfirmasi.component";  .  
.  
...  
konfirmasiHapus()  {         
const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {             
width: "450px",               
});         
dialogRef.afterClosed().subscribe(result => {            
 if(result == true)             {                
 console.log("Menghapus data");            
 }         
});  
} 
 ...
```

Ketiga, tambahkan kode HTML pada file dialog-konfirmasi/dialog-konfirmasi.html.

```html
<div mat-dialog-content>
<p>Apakah Anda yakin akan menghapus data?</p>
</div>

<mat-dialog-actions>
<span class="spacer"></span>
<button mat-button mat-dialog-close>Batal</button>
<button mat-raised-button color="warn" (click)="konfirmasi()">Ya, hapus!</button> </mat-dialog-actions>
```

Keempat, menambahkan fungsi konfirmasi() pada dialog-konfirmasi/dialog-konfirmasi.ts untuk memberikan nilai true saat pengguna menekan tombol Ya, Hapus!.

```javascript
...  
import { MatDialogRef} from "@angular/material/dialog";  
. 
.  
.  
konfirmasi()   {        
 this.dialogRef.close(true);   
}
```

Kondisional `if(result == "true")` pada tahap 4 adalah untuk mengeksekusi jika pengguna menyetujui konfirmasi penghapusan. Jika variabel result bernilai true maka hal itu berarti pengguna menyetujui penghapusan data. Buka console (Ctrl+Shift+i) pada browser untuk memastikan bahwa semua berjalan benar. Jika terdapat output Menghapus data saat tombol YA, Hapus! maka semua benar-benar sudah benar.

## Membuat Dialog Edit Data

Dialog edit data pada prinsipnya sama dengan dialog membuat data baru. Oleh sebab itu kita akan memanfaatkan desain UI membuat data baru untuk keperluan edit data. Langkah teknis untuk melakukan hal tersebut akan kita bahas secara spesifik pada bagian edit data. Oleh sebab itu, menu EDIT pada list alamat akan kita kerjakan pada tahap selanjutnya.