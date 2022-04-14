# Membuat API menggunakan Codeigniter

Pada tahap ini saya asumsikan Anda sudah memiliki Apache web service. Jika aplikasi tersebut belum terpasang pada perangkat Anda maka Anda dapat menggunakan aplikasi XAMPP yang dapat membantu Anda membuat web service dengan mudah. Bacalah panduan https://www.niagahoster.co.id/blog/cara-instal-xampp/ jika membutuhkan.

API (*Application Programming Interface*) ini digunakan untuk media komunikasi antara aplikasi Angular dengan database. Hal ini dilakukan karena Angular tidak dapat berkomunikasi secara langsung dengan SQL database yang ada pada server. API bertugas untuk mengambil, menyimpan, memperbarui, atau menghapus data dari database jika ada permintaan dari aplikasi angular untuk kemudian memberikan respon kepada aplikasi Angular tentang permintaan yang dikirim. (Lihat skema aplikasi pada bagian awal)

## Instalasi Codeigniter

Framework PHP yang akan kita gunakan untuk membuat API adalah Codeigniter. Hal ini dipilih untuk memangkas beberapa proses yang harus dibangun jika menggunakan PHP yang dibangun dari awal. Ikuti langkah berikut untuk membuat API menggunakan Codeigniter.

Saya sarankan Anda menggunakan Codeigniter yang sudah dikonfigurasi agar dapat digunakan untuk keperluan pembuatan API. Unduh file dari repositori github https://github.com/faridsurya/restapi_codeigniter3. Ekstraksi file aplikasi dan pindahkan pada folder htdocs pada XAMPP. Ubah nama folder menjadi rest-api.

![img](https://lh6.googleusercontent.com/H5BjUJYdRI2C6gg3vcaLbf0yArAb9BiavJobPsDbntPueMKhTZMNhhYubRx83I5v0aToh2Eu6XWPz5BAFZRTUWQSB-ea0rQ1mh2NAJYJ4lobXA5H2twxgFHKqb_oL7MKj4-b_Jdx)

Pastikan isi folder rest-api adalah seperti berikut ini:

![img](https://lh3.googleusercontent.com/DHzC4fWbsrorvBawCE33M4aAJphA_PssO4Q9V7Kmdn-9uWgw_k28h36e3GFU4iZJXdjZm3Cwd6mYz3MFwstKTR9eyEQWOfA829ybkCUpUNbXRWuhbNSsiqeMV1WetfLYYDWGkKrD)

## Mengatur Koneksi HTTP Angular

Sekarang kita tinggalkan dulu aplikasi API Codeigniter. Kita akan membuat pengaturan pada aplikasi Angular agar terhubung dengan API Codeigniter. Ikuti langkah berikut untuk melakukan pengaturan koneksi HTTP pada angular.

Pertama, kita perlu untuk memasang modul HTTP pada app.module.ts seperti tampak pada kode berikut:

```javascript
...
 import { HttpClientModule } from "@angular/common/http"; 
. 
. 
. 
@NgModule({ 
declarations: [ 
AppComponent, 
TambahAlamatComponent, 
DetailAlamatComponent, 
DialogKonfirmasiComponent 
],
imports: [ 
BrowserModule, 
AppRoutingModule, 
BrowserAnimationsModule, 
HttpClientModule, 
 ... ], 
providers: [], 
bootstrap: [AppComponent], 
entryComponents:[ 
TambahAlamatComponent, 
DetailAlamatComponent, 
DialogKonfirmasiComponent 
] }) 
export class AppModule { }
```

Berikutnya adalah membuat api.service.ts dengan menjalankan perintah berikut ini melalui terminal.

```
ng g service api

//output: CREATE src/app/api.service.spec.ts (318 bytes) CREATE src/app/api.service.ts (132 bytes)
```

Perintah `ng g service api` akan menciptakan dua file yaitu api.service.spec.ts dan api.service.ts. Tuliskan kode berikut ini pada file api.service.ts.

```javascript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 
@Injectable({ providedIn: "root" }) 
export class ApiService {
constructor(private http: HttpClient) { }
 } 
```

Selanjutnya adalah membuat fungsi pada api.service.ts. Perhatikan kode berikut:

```javascript
...   
export class ApiService {   
constructor(private http: HttpClient) { }   
apiUrl:any="http://localhost/rest-api/index.php/api/";   
status()   {       
return this.http.get(this.apiUrl+"status");   
}   
}
```

Setelah itu, memanggil data pada server melalui komponen app.component.ts. Tambahkan kode berikut ini pada file app.component.ts.

```javascript
...  
import {ApiService} from "./api.service"; //kode tambahan 
@Component(
{   
selector: "app-root",   
templateUrl: "./app.component.html",   
styleUrls: ["./app.component.css"] 
}) 
export class AppComponent {   
constructor(     public dialog:MatDialog,     public api:ApiService     )   
{     
this.getData(); //kode tambahan  
 }      //mengambil data pada server (kode tambahan)     

getData()    
 {         
this.api.status().subscribe(res=>{          
console.log(res);        
 })     
}   
.   
.  
.  
}
```

Terdapat tiga bagian kode yang harus ditambahkan pada file app.component.ts. Kode this.getData() akan dieksekusi ketika halaman tersebut ditampilkan. Kode this.getData() akan mengeksekusi fungsi getData(). Fungsi tersebut memanggil this.api yang sudah dibuat pada tahap 4. Service yang dipanggil pada fungsi tersebut adalah fungsi status() yang memanggil data dari server http://localhost/rest-api/index.php/api/status.

Jalankan aplikasi Angular dan periksa halaman console pada browser. Fokus pada bagian Network dan perhatikan gambar berikut:

![img](https://lh6.googleusercontent.com/GzsQEU29yiHpyb9EIFWEHjcej_h5-8QlAO2tMYr4B0sO0vRKtprSgC7jJIxpnIR0vZufC85fFGTuR3BZPdC1VvoE4SLpbGSFJscLBm9MRn6AxUo45ZLtyed2jvxIG_qXKse5hn1Y)

Gambar diatas menunukkan bahwa permintaan data dari aplikasi Angular sudah berjalan dengan baik dan memperoleh response dari server sesuai dengan yang diharapkan.