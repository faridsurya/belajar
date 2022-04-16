# Otentikasi Pengguna

## Video

<iframe width="700" height="500" src="https://www.youtube.com/embed/ImgoUDKuOQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pengantar

Setiap data memiliki hak milik dan hak akses. Sebuah perangkat lunak yang menangani data seharusnya menangani permasalahan tersebut. Cara untuk menangani kepemilikan data adalah otentikasi. Cara ini digunakan untuk membedakan antara pengguna satu dengan lainnya. Dengan demikian data-data yang dihasilkan oleh pengguna tersebut juga dapat diatur kepemilikan dan juga hak aksesnya.

Bagian ini membahas permasalahan otentikasi dalam Angular. Konsep otentikasi dalam aplikasi web berbasis klien berbeda dengan aplikasi yang berbasis pada server. Pada aplikasi berbasis klien data mengalir melalui komunikasi HTTP sehingga keamanan data yang digunakan adalah dengan menyertakan informasi yang sudah terenkripsi melalui HTTP header. Informasi terenkripsi yang disertakan tersebut biasa dinamakan token. Token dihasilkan dari proses verifikasi, biasanya lewat email dan password, untuk membuat sebuah informasi terenkripsi yang harus disertakan setiap melakukan request data.

![img](https://lh4.googleusercontent.com/HINAdKKl6rzaRQI1y_2IjelCwyj3y2oz_j9jf1jaKGzm578FvA9PUH_50Bbx9It-mhTI17lgdwQiewkQz44KZHSK0_p32w4n_4A0E-ICDTmwPLHf3KNd525Heh9eM0nQOFWaxyrA)

Gambar diatas merupakan contoh respon yang dihasilkan oleh server ketika melakukan login. Data respon berisi tipe token, masa kadaluarsa, dan juga akses token. Kode akses token itulah yang nantinya dikirimkan lewat http header setiap melakukan request data ke server yang dilindungi oleh otentikasi.

## What you'll learn

- Registrasi
- Login
- Lupa sandi
- Penggunaan HTTP Headers
- Penerapan token otentikasi pada metode GET, POST, PUT, dan DELETE
- Logout

## Persyaratan

Materi ini merupakan bagian ke-7 dari Serial Belajar Angular. Pastikan Anda sudah mengikuti bagian sebelumnya yang tersedia pada tautan berikut:

1. [Memulai Angular](https://youtu.be/rpAePg8m9bE)
2. [Navigasi pada Angular](https://youtu.be/o2deUdEDhEA)
3. [Integrasi Angular dengan Material Design](https://youtu.be/BB5tuQdCjgY)
4. [Pengaturan Layout dan Tema](https://youtu.be/bl77LemwTWQ)
5. [Variabel, Objek, dan Koleksi](https://youtu.be/ihi7Wl0_zds)
6. [Komunikasi Data](https://youtu.be/5ZeZBPOxiQk)

!> Demonstrasi program pada bagian ini menggunakan kode-kode yang sudah dibuat pada bagian ke-6. Oleh sebab itu pastikan kode Anda sudah sesuai dengan progress belajar di bagian sebelumnya.

## Registrasi

API Url yang digunakan untuk mempelajari proses registrasi adalah sebagai berikut:

```
POST /auth/register

{
  email:"youremail@domain.com",
  password:"yourpassword"
}

//response
true | email_exist
```

Data yang diperlukan untuk melakukan registrasi adalah email dan password. API akan memeriksa ketersediaan email pada database. Skema registrasi pada demonstrasi ini mengacu pada fungsional berikut:

1. API hanya memeriksa ketersediaan email berdasarkan data yang dikirim oleh angular.
2. Validasi dilakukan pada sisi klien (Angular)

Untuk keperluan produksi, sangat direkomendasikan untuk menggunakan skema registrasi yang lebih ketat dengan mempertimbangkan keamanan.

Ikuti langkah berikut untuk menerapkan konsep registrasi pada aplikasi Angular.

### #1 - Membuat fungsi register pada service.ts

```
...
register(email,password)
 {
   return this.http.post(this.serverUrl+'auth/register',{email:email,password:password});
 }
...
```

### #2 - Melengkapi formulir pendaftaran pada auth.register.html

```html
<div class="uk-flex uk-flex-middle uk-flex-center uk-height-viewport"> 
   <mat-card class="uk-width-1-3@m uk-width-1-2@s">
       <div class="uk-flex uk-flex-center uk-margin-medium-bottom">
           <h3>Register</h3>
       </div>
     <mat-card-content>     
       <mat-form-field class="uk-width-1-1" appearance="outline">
           <mat-label>Email</mat-label>
           <input matInput placeholder="Ex. email@domain.com" [(ngModel)]="user.email" [formControl]="email" required>
           <mat-error *ngIf="email.hasError('required')">Email harus diisi</mat-error>
           <mat-error *ngIf="email.hasError('email')">Format email salah</mat-error>
         </mat-form-field>
         <mat-form-field class="uk-width-1-1" appearance="outline">
           <mat-label>Password</mat-label>
           <input matInput [type]="hide ? 'password' : 'text'" placeholder="Your password" [(ngModel)]="user.password" [formControl]="password" required>
           <button mat-icon-button matSuffix (click)="hide = !hide">
             <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
             </button>
           <mat-error *ngIf="password.hasError('required')">Password harus diisi</mat-error>
           <mat-error *ngIf="password.hasError('minlength')">Password harus lebih dari 6 karakter</mat-error>
         </mat-form-field>     
         <div class="uk-flex uk-flex-right">
             <div class="uk-width-expand">
               <button mat-button routerLink="/login">I have an account</button>
               <button mat-button routerLink="/forgot">Forgot</button>
             </div>
             <button mat-raised-button color="primary" (click)="register(user)" [disabled]="loading || email.hasError('email') || email.hasError('required') || password.hasError('required') || password.hasError('minlength')">{{loading ? 'TUNGGU..':'REGISTER'}}</button>
         </div>
     </mat-card-content>
   </mat-card>
</div>
```

### #3 - Menambahkan fungsi validasi formulir

```
... 
//form validation
 email = new FormControl('', [Validators.required, Validators.email]);
 password=new FormControl('',[Validators.minLength(6), Validators.required]);
...
```

Validasi formulir adalah menggunakan class FormControl yang dimiliki oleh Angular. Class ini sangat berguna untuk melakukan validasi formulir sebelum data dikirimkan ke server. Pastikan Anda melakukan import class tersebut pada register.component.ts.

```
import { FormControl, Validators } from '@angular/forms';
```

### #4 - Menambahkan fungsi registrasi pada register.component.ts

```typescript
loading:boolean;
 register(user)
 {
   this.loading=true;
   this.api.register(user.email, user.password).subscribe(res=>{
     this.loading=false;
     this.router.navigate(['auth/login']);
   },err=>{
     this.loading=false;
     alert('Ada masalah..');
   });
 }
```

Jika registrasi berhasil maka halaman akan diarahkan pada router /auth/login menggunakan class Router yang dimiliki oleh Angular. Kondisi ini sangat fleksibel tergantung skema autentikasi yang digunakan. Jika pada saat register berhasil API memberikan informasi token otentikasi, maka anda dapat langsung melakukan prosedur login.

Kode lengkap untuk register.component.ts adalah sebagai berikut:

```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
 selector: 'app-register',
 templateUrl: './register.component.html',
 styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 //inisial untuk data formulir
 user:any={};
 //constructor
 constructor(
   public api:ApiService,
   public router:Router
 ) { }
 //fungsi inisial, dijalankan ketika class ini dipanggil
 ngOnInit(): void {
 }
 //form validation
 email = new FormControl('', [Validators.required, Validators.email]);
 password=new FormControl('',[Validators.minLength(6), Validators.required]);
  //register
 loading:boolean;
 register(user)
 {
   this.loading=true;
   this.api.register(user.email, user.password1).subscribe(res=>{
     this.loading=false;
     alert('Registrasi berhasil');
     this.router.navigate(['auth/login']);
   },err=>{
     this.loading=false;
     alert('Ada masalah..');
   });
 }
}
```

## Login

Dalam kasus yang digunakan pada materi belajar ini, aktivitas login adalah untuk memperoleh kode token dari API berdasarkan email dan password yang diberikan. Skema autentikasi yang digunakan pada contoh ini adalah menyertakan kode token pada setiap request data ke API. Oleh sebab itu kode token yang diperoleh disimpan pada penyimpanan lokal browser. Penyimpanan yang digunakan adalah localStorage. Berikut ini adalah langkah untuk membuat aktivitas login.

Prosedur login pada API yang digunakan pada demonstrasi ini adalah:

```
POST /auth/login

{
   email:"youremail",
   password:"yourpassword"
}

//success response
{
"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImZhcmVlZHN1cnlhQGdtYWlsLmNvbSIsImlhdCI6MTU5Njg3MTMzMiwiZXhwIjoxNTk2OTU3NzMyfQ.VaL6zr0ae_Qz5htF7gEpfW7A221C_kd3pB-ckVptpOE",
"Exp":1596957732,
"email":"fareedsurya@gmail.com"
}
```

Untuk memperoleh respon seperti di atas, lakukanlah prosedur berikut ini:

### #1 - Menambahkan fungsi login dan prosedur validasi formulir pada login.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
 selector: 'app-register',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 //inisial untuk data formulir
 user:any={};
 //constructor
 constructor(
   public api:ApiService,
   public router:Router
 ) { }
 //fungsi inisial, dijalankan ketika class ini dipanggil
 ngOnInit(): void {
 }
 //form validation
 email = new FormControl('', [Validators.required, Validators.email]);
 password=new FormControl('',[Validators.required]);
  //register
 loading:boolean;
 login(user)
 {
   this.loading=true;
   this.api.login(user.email, user.password).subscribe(res=>{     
     this.loading=false;
     localStorage.setItem('appToken',JSON.stringify(res));
     this.router.navigate(['admin/dashboard']);
   },err=>{
     this.loading=false;
     alert('Tidak dapat login');
   });
 }

}
```

Perhatikan kode ini:

```
localStorage.setItem('appToken',JSON.stringify(res));
```

Perintah tersebut akan menyimpan token dalam penyimpanan lokal browser dalam format JSON string yang berisi data email, expired time, dan token. Setiap kali sistem melakukan request data ke API yang membutuhkan autentikasi maka token tersebut diambil lalu disertakan melalui http header. Tipe data respon yang diberikan adalah dalam format JSON sehingga pada saat disimpan, data harus diubah dalam bentuk string menggunakan fungsi JSON.stringify().

### #2 - Memperbarui login.component.html

```html
<div class="uk-flex uk-flex-middle uk-flex-center uk-height-viewport"> 
 <mat-card class="uk-width-1-3@m uk-width-1-2@s">
     <div class="uk-flex uk-flex-center uk-margin-medium-bottom">
         <h3>Login</h3>
     </div>
   <mat-card-content>     
     <mat-form-field class="uk-width-1-1" appearance="outline">
         <mat-label>Email</mat-label>
         <input matInput placeholder="Ex. email@domain.com" [(ngModel)]="user.email" [formControl]="email" required>
         <mat-error *ngIf="email.hasError('required')">Email harus diisi</mat-error>
         <mat-error *ngIf="email.hasError('email')">Format email salah</mat-error>
       </mat-form-field>
       <mat-form-field class="uk-width-1-1" appearance="outline">
         <mat-label>Password</mat-label>
         <input matInput [type]="hide ? 'password' : 'text'" placeholder="Your password" [(ngModel)]="user.password" [formControl]="password" required>
         <button mat-icon-button matSuffix (click)="hide = !hide">
           <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
           </button>
         <mat-error *ngIf="password.hasError('required')">Password harus diisi</mat-error>
         <mat-error *ngIf="password.hasError('minlength')">Password harus lebih dari 6 karakter</mat-error>
       </mat-form-field>     
       <div class="uk-flex uk-flex-right">
           <div class="uk-width-expand">
             <button mat-button routerLink="/register">Create account</button>             
           </div>
           <button mat-raised-button color="primary" (click)="login(user)" [disabled]="loading || email.hasError('email') || email.hasError('required') || password.hasError('required')">{{loading ? 'TUNGGU..':'LOGIN'}}</button>
       </div>
   </mat-card-content>
 </mat-card>
</div>
```

Seperti pada register, penerapan validasi form juga diterapkan pada login dengan melakukan beberapa penyesuaian sehingga fungsi validasi formulir cocok untuk keperluan login. Kode diatas memuat validasi untuk memeriksa format email dan juga ketersediaan data pada dua field yang dibutuhkan: email dan sandi.

### #3 - Menambahkan fungsi login pada api.service.ts

```
login(email,password)
 {
   return this.http.post(this.serverUrl+'auth/login',{email:email,password:password});
 }
```

Fungsi login pada service merupakan fungsi yang harus tersedia untuk memenuhi kebutuhan fungsi login yang sudah dibuat pada langkah #1.

## Penerapan Token Autentikasi untuk CRUD

Kode token yang sudah diperoleh saat login, akan digunakan untuk memperoleh data-data pada API yang dilindungi oleh autentikasi. Contoh API yang dilindungi oleh autentikasi adalah tautan berikut ini:

```
GET http://api.sunhouse.co.id/bookstore/index.php/bookswithauth/status
```

Jika permintaan tidak disertai dengan header data yang memuat kode token maka respon yang diberikan adalah:

```
{"status":"Wrong number of segments"}
```

Pada Angular, penyertaan header data dapat dilakukan menggunakan HttpHeader yang disediakan oleh modul HttpClientModule. Berikut ini adalah contoh penerapan HttpHeader pada api.service.ts:

```typescript
 ...
 httpOptions:any; 
 getToken()
 {
   var tokenKey=localStorage.getItem('appToken');
   if(tokenKey!=null)
   {
     var tkn=JSON.parse(tokenKey);   
     this.httpOptions={
       headers: new HttpHeaders({
       'Content-Type':  'application/json',
       'Authorization': 'Bearer '+tkn.token
       })
     }    
   }
 }
...
```

Pertama, fungsi getToken() membaca item data pada localStorage dengan key ‘appToken'. Ini adalah nama item yang ditentukan pada saat login. Jika tersedia maka data diubah menjadi objek menggunakan JSON.parse() kemudian kode token disertakan pada data header di item Authorization. Penambahan ‘Bearer' merupakan prosedur standar yang diminta oleh library REST API yang digunakan pada server. Fungsi getToken() harus dipanggil sebelum komunikasi data dengan server di eksekusi.

Metode GET, POST, PUT, dan DELETE yang sudah dibahas pada materi sebelumnya tidak menyertakan data header sehingga data-data yang tersedia pada API dapat diakses oleh publik. Oleh sebab itu, informasi header yang memuat kode token harus disertakan pada empat metode komunikasi data tersebut.

### Penerapan httpOptions pada api.service.ts

```typescript
...
get(url)
 {
   this.getToken();
   return this.http.get(this.serverUrl+url,this.httpOptions);
 }
 post(url,data)
 {
   this.getToken();
   return this.http.post(this.serverUrl+url,data,this.httpOptions);
 }
 put(url,data)
 {
   this.getToken();
   return this.http.put(this.serverUrl+url,data,this.httpOptions);
 }
 delete(url)
 {
   this.getToken();
   return this.http.delete(this.serverUrl+url,this.httpOptions);
 }
...
```

### Ujicoba request data menggunakan GET yang disertai dengan kode token pada product.component.ts

```typescript
 getBooks()
 {
   this.loading=true;
   this.api.get('bookswithauth').subscribe(result=>{
     this.books=result;
     this.loading=false;
   },error=>{
     this.loading=false;
   })
 }
```

Parameter ‘bookswithauth' pada fungsi get akan mengarah ke API yang sudah dilindungi oleh autentikasi. Jalankan aplikasi dan periksa bagian Network pada halaman pengembang browser yang Anda gunakan.

![img](https://docs.google.com/drawings/d/shpjQ9V7WoUvWvT-4JPz5mA/image?parent=1gKruu0kQPRQtXTvGlQv-6cFBqKyFlJm8RRUHlbzNSzw&rev=6&drawingRevisionAccessToken=6z0CdHHtzBf-Og&h=510&w=581&ac=1)

Variabel yang ditunjukkan oleh kotak merah pada gambar diatas adalah token yang diperoleh saat login kemudian disertakan pada setiap sistem melakukan request data ke server. Anda dapat melakukan teknik yang sama untuk metode request data yang lain misalnya POST, PUT, dan DELETE.

## Logout

Konsep logout pada dasarnya adalah menyudahi sesi autentikasi. Metode logout sangat tergantung dengan mekanisme autentikasi yang digunakan. Pada latihan ini, konsep autentikasi yang digunakan hanya untuk memperoleh kode token kemudian menyerahkannya pada setiap request data. Pada latihan ini, kode token disimpan dalam localStorage maka teknik logout yang digunakan adalah menghapus kode token dari localStorage.

### #1 - Perbarui kode pada admin.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-admin',
 templateUrl: './admin.component.html',
 styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 mode:string='side';
 constructor(
   public api: ApiService,
   public router:Router
 ) { }

 ngOnInit(): void {
   this.checkLogin();
 }

 checkLogin()
 {
   this.api.get('bookswithauth/status').subscribe(res=>{
     //is logged in
     return;
   },err=>{
     //not logged in
     this.router.navigate(['/login']);
   })
 }

 logout()
 {
   let conf=confirm('Keluar aplikasi?');
   if(conf)
   {
     localStorage.removeItem('appToken');
     window.location.reload();
   } 
 }
}
```

Pada saat komponen admin dipanggil, fungsi checkLogin() akan dijalankan. Fungsi tersebut melakukan request data ke API yang membutuhkan autentikasi. Jika berhasil maka artinya sesi login sudah berjalan. Jika gagal maka halaman akan diarahkan ke login dengan memanfaatkan fungsi naviagate() yang disediakan oleh class Router.

Skema logout menggunakan proses konfirmasi untuk memastikan bahwa pengguna benar-benar akan melakukan logout. Setelah konfirmasi diperoleh data pada localStorage dengan key ‘appToken' akan dihapus. Sekaligus halaman akan dimuat ulang. Prosedur terakhir ini akan memperbarui kondisi sehingga pada saat halaman dimuat ulang, data token pada localStorage sudah tidak tersedia sehingga ketika fungsi checkLogin melakukan tugasnya, respon yang diberikan akan gagal. Fungsi naviagate akan berjalan mengarahkan router ke /auth/login.

### #2 - Tambahkan tombol ‘Keluar' pada admin.component.html dan panggil fungsi logout()

```
<!--toolbar-->
   <mat-toolbar color="primary" class="example-header">
       <button mat-icon-button (click)="sidenav.toggle()">
           <mat-icon>menu</mat-icon>
       </button>
       <span>My Angular</span> 
       <div class="uk-width-expand"></div>
       <small>Admin</small>
       <button mat-button (click)="logout()">Keluar</button>
   </mat-toolbar>
<!--end toolbar-->
```

## Kesimpulan

Autentikasi pada Angular merupakan mekanisme pilihan pada metode Http (GET, POST, PUT, DELETE). Metode autentikasi yang dapat digunakan adalah dengan menyertakan informasi header pada setiap request data yang dilakukan. Penyertaan informasi header dapat dilakukan menggunakan class HttpHeaders yang disediakan oleh modul http. Variabel headers yang digunakan untuk menyertakan data token adalah Authentications.