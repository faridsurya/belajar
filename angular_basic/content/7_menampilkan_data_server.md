# Menampilkan Data Server

Pada tahap ini kita akan menampilkan data yang bersumber dari server dan menampilkannya pada aplikasi angular. Ikuti langkah berikut.

## Menyediakan Data pada API

Kita kembali pada aplikasi API Codeigniter. Skenario pada penyediaan data ini adalah sebagai berikut:

Pertama, Membuat Mysql database. Untuk melakukan hal ini, buatlah data dummy pada Mysql database. Buka aplikasi Phpmyadmin melalui browser dengan alamat localhost/phpmyadmin. Buatlah database baru dengan nama buku_alamat.

![img](https://lh5.googleusercontent.com/UtKHr6mYuRt8WE5zXFbiFIByoDrO6oXpOdaQgU4ZrDQ307qGsIhAsUfinnMDoAXzttbCdv2GVlyskRJbZvNlhRQ8_-RVhniVuUVO5WCbH0rwobpfbQr9oRZs3Uq_TSfEI19ap3o6)

Buatlah data sampel dengan mengeksekusi kode sql berikut ini:

```sql
INSERT INTO `alamat` (`id`, `nama`, `hp`, `email`, `alamat`, `kota`, `propinsi`,`kodepos`) VALUES (NULL, "Hasanuddin", "0868393826", "hasanudin@gmail.com", "Jl. Kenangan No. 66 Umbulharjo", "Yogyakarta", "DIY","23456");
```

Bagi pengguna Ubuntu, jika terdapat error saat mengakses localhost/phpmyadmin dan muncul peringatan Wrong permissions on configuration file, should not be world writable! ikuti panduan ini untuk mengatasinya.

Setelah itu, kita perlu menyediakan Data pada API Codeigniter agar API yang kita buat dapat membaca data yang tersimpan dalam Mysql database maka perlu dilakukan pengaturan koneksi database pada Codeigniter. Buka file pada application/config/database.php dan isikan buku_alamat pada atribut database sesuai dengan nama database yang sudah kita buat pada langkah pertama.

```php
$db["default"] = array(     
"dsn"   => "",     
"hostname" => "localhost",    
 "username" => "root",    
 "password" => "",    
 "database" => "buku_alamat",    
 "dbdriver" => "mysqli",     
"dbprefix" => "",     
"pconnect" => FALSE,     
"db_debug" => (ENVIRONMENT !== "production"),     
"cache_on" => FALSE,    
"cachedir" => "",    
 "char_set" => "utf8",    
 "dbcollat" => "utf8_general_ci",    
 "swap_pre" => "",     
"encrypt" => FALSE,    
"compress" => FALSE,     
"stricton" => FALSE,    
"failover" => array(),     
"save_queries" => TRUE );
```

Berikutnya buka file application/controllers/Api.php yang ada pada aplikasi API Codeigniter.

```php
methods["users_get"]["limit"] = 500; 
// 500 requests per hour per user/key $this->methods["users_post"]["limit"] = 100; 
// 100 requests per hour per user/key $this->methods["users_delete"]["limit"] = 50; 
// 50 requests per hour per user/key
$this->load->helper(array("form", "url"));
date_default_timezone_set("Asia/Jakarta"); } 

public function status_get() { 
$this->response("OK",200); 
} 

public function data_get() 
{ 
//mengambil tabel alamat pada database buku_alamat
$this->db->get("alamat");
$this->response($data->result(),200); 
} 

public function data_post() 
{ 
$data=this->post();
$result=this->db->insert("alamat",$data);
$this->response($result,200); 
} 

public function data_put() 
{ 
$data=this->put(); 
$id=this->uri->segment(3);
$this->db->where("id",id);
$result=this->db->update("alamat",$data);
$this->response($result,200); 
} 

public function data_delete() 
{
$id=this->uri->segment(3);
$this->db->where("id",id);
$result=this->db->delete("alamat");
$this->response($result,200); }
}
```

Kode diatas merupakan contoh API yang siap kita gunakan. Nama fungsi setelah tanda underscore (_) adalah metode transmisi data via HTTP. Misalnya data_get() maka itu berarti fungsi tersebut dapat diakses melalui url http://localhost/rest-api/index.php/api/data dengan metode GET. Segmen api merupakan nama file pada controller (Api.php) dan segmen data adalah nama fungsi pada class Api. Pola yang sama berlaku untuk metode HTTP POST, PUT, dan DELETE.

## Menampilkan Data pada Aplikasi Angular

Pada tahap ini kita akan menampilkan data yang tersedia pada API pada daftar alamat yang sudah kita buat sebelumnya di aplikasi Angular. Ikuti langkah berikut:

Pertama, update file api.service.ts sehingga menjadi seperti kode berikut:

```javascript
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpHeaders } from "@angular/common/http"; 

@Injectable({   providedIn: "root" }) 

export class ApiService {   
    apiUrl:any="http://localhost/rest-api/index.php/api/";
	constructor(private http: HttpClient) {
        
    }   
	status()   
	{       
        return 	this.http.get(this.apiUrl+"status");   
    }   
	baca()   
	{     
        return this.http.get(this.apiUrl+"data");   
    }   
}
```

kedua, Update file app.component.ts.

```javascript
//Sebelum 
getData() { 
    this.api.status().subscribe(res=>{ console.log(res); }) 
} 
//ganti menjadi 
dataAlamat:any=[]; 
getData() { 
    this.api.baca().subscribe(res=>{ this.dataAlamat=res; }) 
}
```

Jalankan aplikasi Angular dan periksa apakah data alamat yang disediakan oleh API Codeigniter sudah tersedia dengan memeriksa Network pada Browser.

![img](https://lh5.googleusercontent.com/K66APpnqhz8WXjkD_TkPP3rH5ULlWf1YmbcVon_0nHLOwCvFFlppvC-rGEBMGY_u9AG_xe_6rBbOixRsSgNWOKRh3FDISoJq_TNXgBLkm4Xktp18_jGDrQtVvNu7pptjLeqHbYuE)

Gambar di atas adalah respon data yang dihasilkan oleh fungsi getData(). Selanjutnya, kita akan tampilkan hasil tersebut pada User Interface daftar alamat yang sudah dibuat sebelumnya.

Ketiga, update file app.component.html sehingga seperti pada kode berikut:

```html
<mat-list>         
    <mat-list-item *ngFor="let item of dataAlamat">           
        <img matListAvatar src="assets/avatar.png" alt="...">           
        <h3 matLine> {{item.nama}}</h3>           
        <p matLine>{{item.kota}}</p>           
        <p matLine>{{item.email}}</p>           
    <button mat-icon-button [matMenuTriggerFor]="menu"><mat-icon>more_vert</mat-icon></button>           
    <mat-menu #menu="matMenu">             
        <button mat-menu-item (click)="detailAlamat()">Detail</button>
        <button mat-menu-item>Edit</button>             
        <button mat-menu-item (click)="konfirmasiHapus()">Delete</button>           
    </mat-menu>         
    </mat-list-item>
</mat-list> 
```

Kode `*ngFor="let item of dataAlamat"` yang ada pada tag list-item akan melakukan perulangan sepanjang data dataAlamat yang merupakan hasil dari pembacaan data pada server. Coba lakukan penambahan data pada server, maka secara otomatis data akan tampil pada list yang sudah dibuat.

![img](https://lh3.googleusercontent.com/1P-m7C-ksItfZzhj69dlgQygVewDK_4W1TfQvkspzp_6jfs5uQdz3xleT1xlse-ZHyrknXWVn80SD_u7D2kpb7Vcc7ej0YzUIOlxOwCmUlm08JSu2ZSlrhiqYk71LDVHz02KVu_b)

Gambar di atas merupakan contoh tampilan data yang berhasil diambil dari server.

!> **Perhatian**. Gambar avatar yang tampil merupakan gambar yang statis, tersedia dalam folder assets/avatar.png.