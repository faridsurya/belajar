# Memperbarui Data

Untuk memperbarui data, kita akan menggunakan desain UI yang sama dengan fungsi penambahan data. Kita akan melakukan modifikasi pada file tambah-alamat.component.ts sehingga dapat berfungsi juga untuk melakukan pembaruan data. Lakukan langkah berikut:

Pertama, buka file app.component.html dan pastikan tombol Edit Data sudah memuat perintah untuk membuka dialog, dilengkapi dengan parameter item (editAlamat(item)).

```html
<mat-menu #menu="matMenu">             
<button mat-menu-item (click)="detailAlamat(item)">Detail</button>             <button mat-menu-item (click)="editAlamat(item)">Edit</button>             <button mat-menu-item (click)="konfirmasiHapus()">Delete</button>  </mat-menu>
```

Kedua, sesuaikan kode pada app.component.ts sehingga fungsi untuk menampilkan dialog formulir menjadi seperti berikut:

```javascript
editAlamat(data)   
{     
const dialogRef = this.dialog.open(TambahAlamatComponent, {
width: "450px",       
data:data     
});     
dialogRef.afterClosed().subscribe(result => { 
this.getData();         
});   
}
```

Parameter data akan dikirimkan ke dialog sebagai data masukan yang ditampilkan pada formulir. Proses ini mirip dengan prosedur untuk menampilkan detail data yang sudah dibahas pada bagian sebelum ini.

Ketiga, sesuaikan file `tambah-alamat.component.ts` menjadi seperti di bawah ini:

```typescript
import { Component, OnInit, Inject } from "@angular/core"; 
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog"; import {ApiService} from "../api.service";

@Component({   
selector: "app-tambah-alamat",   
templateUrl: "./tambah-alamat.component.html",   
styleUrls: ["./tambah-alamat.component.css"] }) 

export class TambahAlamatComponent implements OnInit {   data:any={};   
constructor(     
public api:ApiService,      
public dialogRef:MatDialogRef<TambahAlamatComponent>,     @Inject(MAT_DIALOG_DATA) public itemData:any     )     
{       
if(itemData != null)       
{         
this.data=itemData;       
}     
}     

ngOnInit() {}     

simpan(data)   
{     
if(data.id == undefined)     
{       
this.api.simpan(data).subscribe(res=>{         this.dialogRef.close(true);       
});     
}else{       
this.api.ubah(data,data.id).subscribe(res=>{         this.dialogRef.close(true);       
})     
}   
} 
}
```

Variabel data akan diisi oleh data detail alamat jika nilai variabel `itemData` bernilai null. Kita juga perlu melakukan modifikasi juga terhadap file app.component.ts untuk fungsi `buatAlamat()` agar fungsi `simpan(data)` memiliki dua fungsi yakni menambahkan data baru atau memperbarui data yang sudah ada. Sesuaikan kode pada app.component.ts menjadi seperti berikut ini:

```typescript
buatAlamat()   {     
onst dialogRef = this.dialog.open(TambahAlamatComponent, {
width: "450px",       
data:null     
});     

dialogRef.afterClosed().subscribe(result => {       
this.getData();     
});   
}
```

Kondisional `if(data.id == undefined)` pada fungsi `simpan(data)` adalah untuk membedakan fungsi tambah baru atau pembaruan data. Jika variabel data tidak memiliki atribut id maka berarti formulir tersebut adalah formulir baru. Oleh sebab itu perintah yang diberikan adalah perintah penambahan data baru.