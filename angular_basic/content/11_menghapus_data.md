# Menghapus Data

Untuk menambahkan fungsi penghapusan data, kita perlu untuk melakukan modifikasi pada app.component.ts. Sesuaikan kode sehingga menjadi seperti berikut:

```typescript
konfirmasiHapus(id)
{
    const dialogRef = this.dialog.open(DialogKonfirmasiComponent, 
{
width: "450px"
});

dialogRef.afterClosed().subscribe(result => {
if(result == true)      
{
console.log("Menghapus data");
this.api.hapus(id).subscribe(res=>{
this.getData();
})
}   
});
}
```

Pastikan perintah hapus pada tombol sudah dilengkapi dengan parameter id data.

```html
<mat-menu #menu="matMenu">
<button mat-menu-item (click)="detailAlamat(item)">Detail</button>
<button mat-menu-item (click)="editAlamat(item)">Edit</button>
<button mat-menu-item (click)="konfirmasiHapus(item.id)">Delete</button>
</mat-menu>
```

