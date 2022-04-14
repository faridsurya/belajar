# Menambahkan Data Baru

Sekarang kita akan memanfaatkan desain UI dialog tambah data baru untuk menyimpan data ke database. Ikuti langkah berikut:

Pertama, buka kembali file api.service.ts dan sesuaikan kode sehingga menjadi seperti dibawah ini:

```javascript
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpHeaders } from "@angular/common/http"; @Injectable({ providedIn: "root" }) 

export class ApiService { apiUrl:any="http://localhost/rest-api/index.php/api/"; 

constructor(private http: HttpClient) { } 

status() { 
return this.http.get(this.apiUrl+"status"); 
} 

baca() 
{ 
return this.http.get(this.apiUrl+"data"); 
} 

simpan(data) 
{ 
return this.http.post(this.apiUrl+"data",data); 
}
}
```

Fungsi `simpan(data)` akan mengirimkan data ke server dengan metode POST. Data tersebut akan diterima oleh aplikasi API Codeigniter melalui fungsi `data_post()` pada Class Api.php.

Kedua, buka file tambah-alamat.component.ts. Sesuaikan kode terhadap penambahan kode berikut:

```javascript
import { Component, OnInit } from "@angular/core"; 
import { MatDialogRef} from "@angular/material/dialog"; 
import {ApiService} from "../api.service"; 

@Component({   
selector: "app-tambah-alamat",   
templateUrl: "./tambah-alamat.component.html",   
styleUrls: ["./tambah-alamat.component.css"] 
}) 

export class TambahAlamatComponent implements OnInit {   constructor(public api:ApiService, public dialogRef:MatDialogRef<TambahAlamatComponent>) { }   

data:any={};   
ngOnInit() {}     

simpan(data)   
{     
this.api.simpan(data).subscribe(res=>{       this.dialogRef.close(true);     
})   
} 
}
```

ApiService digunakan untuk mengakses service yang menghubungkan aplikasi Angular dengan API Codeigniter yang terdapat pada server. MatDialogRef digunakan untuk menutup dialog setelah data berhasil disimpan oleh fungsi `simpan(data).`

Parameter data pada fungsi `simpan()` diperoleh dari trigger tombol yang terdapat pada tambah-alamat.component.html. Parameter data tersebut merupakan objek yang berisi data-data formulir yang diisi oleh pengguna.

Ketiga, buka file tambah-alamat.component.html dan sesuaikan sehigga kode menjadi seperti berikut ini:

```html
<h3 mat-dialog-title>Tambah Alamat Baru</h3> 
<div mat-dialog-content>  
        
<mat-form-field style="width: 100%;">         <mat-label>Nama</mat-label>         
<input matInput  [(ngModel)]="data.nama">     
</mat-form-field>    
 
<mat-form-field style="width: 100%;">         <mat-label>Alamat</mat-label>         
<input matInput [(ngModel)]="data.alamat">     
</mat-form-field>     
<mat-form-field style="width: 100%;">         <mat-label>Kota</mat-label>         
<input matInput [(ngModel)]="data.kota">     
</mat-form-field>     

<mat-form-field style="width: 100%;">         <mat-label>Provinsi</mat-label>         
<input matInput [(ngModel)]="data.propinsi">     
</mat-form-field>     
<mat-form-field style="width: 100%;">         
<mat-label>Kode Pos</mat-label>         
<input matInput [(ngModel)]="data.kodepos">     
</mat-form-field>     
<mat-form-field style="width: 100%;">         
<mat-label>Nomor HP</mat-label>         
<input matInput [(ngModel)]="data.hp">     
</mat-form-field>     

<mat-form-field style="width: 100%;">         <mat-label>Email</mat-label>         
<input matInput [(ngModel)]="data.email">     
</mat-form-field> 

</div> 

<mat-dialog-actions>     
<span class="spacer"></span>     
<button mat-button mat-dialog-close>Batal</button>         
<button mat-raised-button color="primary"  (click)="simpan(data)">Simpan</button>   
</mat-dialog-actions>
```

Pada contoh ini, kita menggunakan `[(ngModel)]` untuk mengambil data input. Ada cara lain yakni menggunakan FormBuilder tapi hal itu akan kita gunakan untuk mengelola data dalam bentuk file (akan dibahas dalam cookbook lainnya).

Trigger penyimpanan diletakkan pada tombol pada saat di klik yakni dengan menjalankan fungsi `simpan(data)`.

Keempat, tambahkan modul Form pada app.module.ts. Buka file tersebut dan sesuaikanlah kode dengan tambahan berikut:

```javascript
 ... 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
... 
.
.
. 
@NgModule({ 
...
imports: [ ... FormsModule, ... ],
 ... 
}) export class AppModule { }
```

## Membuat List Daftar Alamat Otomatis Diperbarui

Setelah dialog penambahan data ditampilkan dan pengguna sudah mengisi data lalu menyimpannya, dialog akan ditutup otomatis oleh perintah `this.dialogRef.close(true);` yang ada pada langkah ke-2. Tapi setelah dialog tertutup data baru tersebut belum masuk ke daftar alamat. Untuk membuat data secara otomatis diperbarui ketika terdapat pembaruan data, buka file app.component.ts dan sesuaikan kode menjadi seperti dibawah ini:

```javascript
...  
buatAlamat() {
const dialogRef = this.dialog.open(TambahAlamatComponent, {
width: "450px"
});     

dialogRef.afterClosed().subscribe(result => 
{       
this.getData();
});   
}
 ...
```

