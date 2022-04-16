# Unggah File

## Video

<iframe width="700" height="500" src="https://www.youtube.com/embed/FroQMz7bM7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pengantar

Penanganan file merupakan bagian yang cukup penting dalam pengembangan aplikasi. Kebutuhan pengunggahan file, dalam proyek yang sebenarnya, biasanya untuk menangani kasus-kasus misalnya pelampiran bukti pembayaran, pelampiran CV, dll. Terdapat empat komponen yang terlibat dalam proses pengunggahan file yaitu folder penyimpanan sisi server untuk menyimpan file, database untuk menyimpan tautan file, API untuk pengelolaan file dan database, dan aplikasi angular yang berhubungan secara langsung dengan pengguna. Skema komunikasi yang terlibat pada proses pengunggahan adalah sebagai berikut:

![img](https://lh4.googleusercontent.com/l7RJe62YqJycrbhNoLP2l2ulZSbLXXTDVs2_0ph7jE0U-a0SaIT7pXq2bt4Lxro4XjjFjZEx-qTZ0WKFYqIDP5rzwi9uSyOIP5k6UPPjxMC4y1tNkyWe5R3xXodCjXezOFCS4rkW)

Diagram aktivitas pengunggahan file pada studi kasus di seri ini adalah sebagai berikut:

![img](https://lh6.googleusercontent.com/dV0X2If_8yy5N0hVXT8uXbAYP2RqvkrqCgIa1WvD69etgcKD0uj1nz1hjq9ldShmg0r2AcU6McCwJpig5gpmUutEe2fTkqW4Yiz85nsCDAWLnTcHIs3unR859C2L-yZoxNfNb1-p)

Pengunggahan file dilakukan setelah data produk dibuat. Hal ini dilakukan agar tautan file yang diperoleh setelah pengunggahan, dimasukkan pada data produk yang sudah dibuat sehingga tautan file dapat tercatat.

## What you'll learn

- Pembuatan formulir input file
- Pengunggahan file menggunakan metode post
- Pembatasan ukuran file
- Pembatasan jenis file
- Kustomisasi tombol file selection
- Contoh penanganan upload file sisi server menggunakan PHP
- Contoh penanganan upload file sisi server menggunakan NodeJS

## Persyaratan

Materi ini merupakan bagian ke-8 dari Serial Belajar Angular. Pastikan Anda sudah mengikuti bagian sebelumnya yang tersedia pada tautan berikut:

1. [Memulai Angular](https://youtu.be/rpAePg8m9bE)
2. [Navigasi pada Angular](https://youtu.be/o2deUdEDhEA)
3. [Integrasi Angular dengan Material Design](https://youtu.be/BB5tuQdCjgY)
4. [Pengaturan Layout dan Tema](https://youtu.be/bl77LemwTWQ)
5. [Variabel, Objek, dan Koleksi](https://youtu.be/ihi7Wl0_zds)
6. [Komunikasi Data](https://youtu.be/5ZeZBPOxiQk)
7. [Otentikasi](https://youtu.be/ImgoUDKuOQk)

!> Demonstrasi program pada bagian ini menggunakan kode-kode yang sudah dibuat pada bagian ke-7. Oleh sebab itu pastikan kode Anda sudah sesuai dengan progress belajar di bagian sebelumnya.

## Formulir Input File

Formulir input file yang digunakan adalah menggunakan standar file input yang biasa digunakan pada HTML. Berdasarkan desain pengunggahan file yang sudah didesain maka langkah yang pertama kita lakukan adalah membuat dialog pengunggahan file. Dialog pengunggahan file dapat dilakukan dengan cara melakukan generate komponen baru yang dimasukkan di dalam Modul admin. Untuk membuat dialog tersebut jalankan perintah berikut ini pada terminal.

```
ng g c admin/file-uploader
```

Perintah di atas akan menciptakan folder baru di dalam folder admin dengan nama file-uploader. Berikutnya kita akan membuat formulir untuk melakukan pengambilan file dari lokal komputer. Buat kode seperti pada contoh berikut:

### admin/file-uploader/file-uploader.component.html

```html
<h1 mat-dialog-title>Unggah File</h1>
<div mat-dialog-content>
   <input type="file" id="file">
</div>
<div mat-dialog-action align="right">
   <button mat-button mat-dialog-close>Batal</button>
   <button mat-flat-button color="primary">Unggah dan Simpan</button>
</div>
```

## Memanggil Halaman File Uploader

Kita akan memasukkan sebuah tombol pada daftar produk untuk memanggil dialog pengunggahan file.

**[/admin/product/product.component.html](https://gitlab.com/codecast1/angular-beginer/-/blob/master/src/app/admin/product/product.component.html)**

```html
<td align="right">
<button mat-button color="primary" (click)="upload(book, idx)">Upload Doc</button>
<button mat-button color="primary" (click)="productDetail(book,idx)">Edit</button>
<button mat-button color="warn" (click)="deleteProduct(book.id, idx)" [disabled]="loadingDelete[idx]">{{loadingDelete[idx] ? 'Deleting..':'Delete'}}</button>
</td>
```

Perintah pada trigger click pada tombol Upload akan mengeksekusi fungsi upload() pada product.component.ts. Oleh sebab itu Kita perlu menambahkan fungsi upload pada ada product.component.ts seperti pada kode berikut ini:

**[/admin/product/product.component.ts](https://gitlab.com/codecast1/angular-beginer/-/blob/master/src/app/admin/product/product.component.ts)**

```typescript
upload(data, idx)
{
 let dialog=this.dialog.open(FileUploaderComponent, {
   width:'400px',
   data:data
 });
 dialog.afterClosed().subscribe(res=>{
   return;
 })
}
```

Proses diatas akan menghasilkan tampilan seperti pada gambar berikut ini jika tombol upload pada daftar produk ditekan.

![img](https://lh6.googleusercontent.com/nXV0szgWeOhcfN20BysI8Y1-hNuBf69ogxSbODAKEDB1oRfZQ8GKW8jpVummjDGo6WaDp2-cQX5SfdGfKfZ5CmNcAHNHMPRP7uaTa8Y6Jys9FkxQkwecVs4KoJKnAjC5sJGaMapP)

## Backend untuk Penyimpanan File di Server

Untuk mendemonstrasikan proses pengunggahan file kita memerlukan aplikasi back-end untuk menangani Penyimpanan file di sisi server. Pada kasus ini kita akan menggunakan backend menggunakan PHP untuk melakukan Penyimpanan file di sisi server. Untuk memudahkan proses belajar agar fokus pada pengembangan aplikasi angular maka API sudah disediakan untuk menangani upload file menggunakan tautan berikut:

```
POST /upload/book

//Response jika tidak ada file:
{'status':false, 'message':'Tidak ada file'}

//response jika file bukan PDF
{'status' : false, 'message':'File Harus PDF'}

//respon jika sukses
{'status':true,'filename': [string], 'size':[number], 'type':application/pdf'}
```

## Menangani Upload File

Untuk menangani upload file lakukan perubahan kode pada file berikut:

### admin/file-uploader/file-uploader.component.html

```html
<h1 mat-dialog-title>Unggah File</h1>
<div mat-dialog-content>
   <input type="file" id="file" (change)="onFileChange($event)">
</div>
<div mat-dialog-action align="right">
   <button mat-button mat-dialog-close>Batal</button>
   <button mat-flat-button color="primary" (click)="uploadFile()">Unggah dan Simpan</button>
</div>
```

Elemen input file pada kode html diatas memiliki pemanggilan satu fungsi yaitu onFileChange($event). Fungsi tersebut dipanggil pada kondisi change yaitu kondisi dimana perubahan file input terjadi. Oleh sebab itu pada komponen perlu dibuat fungsi untuk menangani kondisi ketika data pada input file berubah. Perubahan itu terjadi karena pengguna melampirkan file atau memperbaharui pelampiran file. Eksekusi pengubahan file dilakukan menggunakan tombol unggah dan simpan yang di dalamnya terdapat pemanggilan fungsi `uploadFile()`.

### admin/file-uploader/file-uploader.component.ts

```typescript
selectedFile:any;   
onFileChange(event) {
   if(event.target.files.length > 0) {
       this.selectedFile=event.target.files[0];
       console.log(this.selectedFile);        
   }
}
```

Pada bagian komponen kita membuat satu variabel yaitu `selectedFile` untuk menampung file yang dimasukkan oleh pengguna melalui file input. Jika terdeteksi file dimasukkan oleh pengguna maka file tersebut ditampung pada variabel selecredFile yang berisi beberapa data diantaranya adalah nama file, ukuran file, tipe file dan data file itu sendiri. Proses tersebut dilakukan di dalam fungsi onFileChange($event).

Proses berikutnya adalah mengunggah file yang sudah dilampirkan oleh pengguna. pengunggahan file dilakukan menggunakan metode Post. Metode post yang digunakan tidak seperti metode Post yang sebelumnya digunakan untuk menyimpan data. Metode pos untuk keperluan pengunggahan file melibatkan pembacaan file kemudian menulisnya di dalam folder server. Oleh sebab itu diperlukan servis khusus untuk menangani pengunggahan file.

### services/api.service.ts

```typescript
//upload file
upload(file)
{
   return this.http.post(this.serverUrl+'upload/book',file);
}
```

Fungsi diatas adalah fungsi untuk mengunggah file ke server. Contoh penanganan pengunggahan file di sisi server akan kita bahas pada bagian khusus. Pada bagian ini ini kita fokus pada pengurangan file di sisi front end.

Eksekusi pengubahan file dilakukan menggunakan tombol unggah dan simpan yang sudah dibuat pada proses sebelumnya. kita perlu menambahkan satu fungsi untuk mengirim file yang dilampirkan pengguna ke server melalui service upload file.

### admin/file-uploader/file-uploader.component.ts

```typescript
loadingUpload: boolean;
 uploadFile() {
   let input = new FormData();
   input.append('file', this.selectedFile);
   this.loadingUpload = true;  
   this.api.upload(input).subscribe(data=>{    
     this.updateProduct(data);
   },error=>{
       this.loadingUpload = false;
       alert('Gagal mengunggah file');
   });
 }
```

Untuk mengunggah file harus dibuat terlebih dahulu variabel form data kemudian memasukkan file yang dilampirkan pengguna ke dalam form tersebut menggunakan fungsi `append()`. Pada contoh diatas variabel form data yang digunakan adalah `input`. Selanjutnya variabel input tersebut dikirim menggunakan metode Post melalui service yang sudah dibuat pada tahap sebelumnya.

Sesuai dengan desain aktivitas yang sudah dibuat bahwa setelah pengunggahan file berhasil maka system akan memperbaharui data produk. Pembaharuan tersebut adalah memasukkan atribut url file ke dalam data produk. Pada kode program file uploader.komponen.ts pembaruan data produk dilakukan dengan mengeksekusi fungsi updateProduct(data) setelah service upload berhasil diselesaikan.

### admin/file-uploader/file-uploader.component.ts

```typescript
updateProduct(data)
 {
   if(data.status == true)
   {
     //lakukan update data produk disini

     //
     alert('File berhasil diunggah');
   }else{
     alert(data.message);
   }
 }
```

## Menutup Dialog Dalam Program

Menutup dialog menggunakan program berfungsi untuk melakukan eksekusi penutupan dialog jika k-file berhasil diupload. Pada angular material design penutupan dialog adalah menggunakan modul MatDialogRef. Pada kasus ini penutupan dialog dilakukan di dalam fungsi update produk untuk kondisi jika proses pengubahan file berhasil dilakukan.

Untuk membuatnya kita perlu menambahkan kontraktor dialog seperti pada kode berikut ini:

### admin/file-uploader/file-uploader.component.ts

```typescript
..
constructor(
   public api: ApiService,
   public dialogRef: MatDialogRef<FileUploaderComponent>
 ) { }
...
```

Penutupan dialog dilakukan pada saat mengunggah file berhasil dilakukan. Oleh sebab itu maka kita perlu menambahkan sedikit kode pada fungsi berikut ini:

```typescript
updateProduct(data)
 {
   if(data.status == true)
   {
     //lakukan update data produk disini

     //
     alert('File berhasil diunggah');
     //kode tambahan
     this.dialogRef.close();
   }else{
     alert(data.message);
   }
 }
```

Pada kasus ini kita tidak menyimpan file yang kita unggah di dalam server. Namun demikian server hanya membaca nama file, ukuran, dan tipe file untuk dijadikan respon dari API untuk sistem. Jika anda menginginkan untuk menyimpan file di sisi server maka anda perlu melakukan pembuatan API untuk menangani hal tersebut.

## Styling Tombol Upload

Kita dapat melakukan kustomisasi pada tombol input file. Kustomisasi dapat dilakukan dengan cara menambahkan kode berikut ini pada formulir input file.

### admin/file-uploader/file-uploader.component.html

```html
<h1 mat-dialog-title>Unggah File</h1>
<div mat-dialog-content>
       <div class="uk-flex uk-flex-middle uk-flex-center" style="height: 100px; outline: 2px dashed #ccc; margin:10px;" (click)="fileInput.click()">
           <span>{{selectedFile ? selectedFile.name : 'Pilih File'}}</span>
       </div>
       <input type="file" id="file" (change)="onFileChange($event)" #fileInput style="display: none">
</div>
<div mat-dialog-action align="right">
  <button mat-button mat-dialog-close style="margin-right: 5px;">Batal</button>
  <button mat-flat-button color="primary" (click)="uploadFile()">Unggah dan Simpan</button>
</div>
```

terdapat tambahan elemen HTML untuk menampilkan area file yang akan di unggah. Pada area tersebut diberikan trigger klik untuk mengeksekusi file input yang disembunyikan. Sehingga pada dasarnya area yang yang di-klik oleh pengguna hanyalah perantara terhadap file input yang sebenarnya. Hasil styling file input adalah seperti pada gambar berikut:

![img](https://lh6.googleusercontent.com/J9Dmhhmd6IRRT8bjyTsOhBIjHgSVELTt5HK6SccilkLR3tK6T6HjZAu13y4R2caSR70qF54Yc9QhkHkx7n2F2JBcwqjLWqJTKsFKp8HyYek2_x9uhQeTdSZmpYJknzHYjs52PIaw)

