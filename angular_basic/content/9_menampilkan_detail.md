# Menampilkan Detail Data

Tahap ini kita akan menampilkan detail data yang tersimpan. Pada tahap sebelumnya kita sudah membuat dialog untuk menampilkan data. Kita akan melakukan modifikasi kode agar data yang ditampilkan merupakan data yang sebenarnya. Ikuti langkah berikut:

Pertama, sesuaikan trigger pada tombol yang membuka dialog detail data pada file app.component.html.

```html
...  
<mat-menu #menu="matMenu">             
<button mat-menu-item (click)="detailAlamat(item)">Detail</button>             
<button mat-menu-item (click)="editAlamat(item)">Edit</button>             
<button mat-menu-item (click)="konfirmasiHapus(item)">Delete</button>  
</mat-menu>  
...
```

Membuka detail alamat dieksekusi oleh perintah `(click)="detailAlamat(item)"`. Parameter item merupakan object yang didalamnya terdapat data-data alamat (nama, email, hp, dll).

Kedua, buka file app.component.ts dan sesuaikan kode dengan kode berikut:

```javascript
detailAlamat(item)   {     
const dialogRef = this.dialog.open(DetailAlamatComponent, 
{       
width: "450px",       
data:item  
});     
dialogRef.afterClosed().subscribe(result => 
{       
console.log("The dialog was closed");          
});   
}
```

Atribut `data:item` pada object `dialogRef` akan mengirimkan data item ke komponen dialog detail data.

Ketiga, buka file `detail-alamat.component.ts` dan sesuaikan kode menjadi seperti berikut:

```typescript
import { Component, OnInit, Inject } from "@angular/core"; 
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog"; 

@Component({   
selector: "app-detail-alamat",   
templateUrl: "./detail-alamat.component.html",   
styleUrls: ["./detail-alamat.component.css"],   }) 

export class DetailAlamatComponent implements OnInit {   constructor(     
public dialogRef:MatDialogRef<DetailAlamatComponent>,     @Inject(MAT_DIALOG_DATA) public data :any   ) {}   ngOnInit() {   } } 
```

Object `data : any` merupakan variabel yang dapat dibaca pada komponen HTML.

Keempat, buka file detail-alamat.component.html dan sesuaikan kode menjadi seperti berikut ini:

```html
<h3 mat-dialog-title>{{data.nama}}</h3> 
<div mat-dialog-content> <mat-list>     
<h3 matSubheader>Detail Alamat</h3>     
<mat-list-item>         
<mat-icon matListIcon>call</mat-icon>         
<h3 mat-line>{{data.hp}}</h3>         
<mat-divider></mat-divider>     
</mat-list-item>     
<mat-list-item>         
<mat-icon matListIcon>email</mat-icon>         
<h3 mat-line>{{data.email}}</h3>         <mat-divider></mat-divider>     
</mat-list-item>     
<mat-list-item>         
<mat-icon matListIcon>place</mat-icon>         
<h3 mat-line>{{data.alamat}}</h3>         
<p mat-line>{{data.kota}}</p>         
<p mat-line>{{data.propinsi}}</p>         <mat-divider></mat-divider>     
</mat-list-item> </mat-list> </div> 
<mat-dialog-actions>     
<span class="spacer"></span>     
<button mat-button mat-dialog-close>Tutup</button>   </mat-dialog-actions>
```

`{{data.nama}}` akan menampilkan variabel nama yang diperoleh dari list data. Nama atribut pada objek data merupakan nama atribut yang ada pada database.