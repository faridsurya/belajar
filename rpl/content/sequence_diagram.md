# Implementasi Sequence Diagram 

*Written by Farid Suryanto, Sistem Informasi UAD*



Bagian ini menjelaskan tentang penerapan sequence diagram (SD) dalam pengembangan perangkat lunak sistem informasi. 

## Apa yang Akan Anda Pelajari?

- Apa itu Sequence Diagram (SD)
- Penerapan SD pada NodeJs
- Penerapan SD pada Angular & Firebase

## Apa itu Sequence Diagram

Sequence diagram merupakan bagian dari UML (*Unified Modeling Language*) untuk memvisualisasikan urutan proses dalam sistem.  Sequence diagram merupakan salah satu diagram interaksi (*interaction diagram*) karena menggambarkan bagaimana dan dalam urutan apa sekelompok objek bekerja bersama. Diagram ini digunakan oleh pengembang perangkat lunak dan profesional bisnis untuk memahami persyaratan sistem baru atau untuk mendokumentasikan proses yang ada. 

Kegunaan sequence diagram dalam pengembangan sistem diantara adalah:

- Merepresentasikan detail dari use case.
- Memodelkan logika, prosedur, fungsi, atau operasi.
- Melihat bagaimana objek dan komponen berinteraksi satu sama lain untuk menyelesaikan suatu proses.
- Memahami dan merencanakan fungsionalitas yang lebih terperinci dari skenario yang ada atau yang akan dibuat.

### Contoh Sequence Diagram (SD)

Seperti diagram dalam UML yang lain, SD memiliki notasi untuk memvisualkan kondisi, proses, atau bagian perangkat lunak. Gambar dibawah ini adalah contoh SD yang menggambarkan detil proses use case 'menghitung luas segi empat'.

**Use Case:**

| Use Case    | UC-1 : Menghitung luas segi empat                            |
| ----------- | ------------------------------------------------------------ |
| Actors      | user                                                         |
| Description | User dapat menghitung luas segi empat dengan memasukkan nilai panjang dan lebar melalui formulir pada user interface dan dapat melihat hasil perhitungan setelah menekan tombol hitung. |

**Proses:**

- Sistem menampilkan formulir penghitung luas segi empat
- Pengguna mengisi formulir dan menemkan tombol hitung
- Sistem merekam data isian formulir
- Sistem menghitung nilai luas
- Sistem menampilkan hasil perhitungan luas

**Bagian Perangkat Lunak yang Terlibat:**

Contoh kasus ini menggunakan pola pemrograman berbasis MVC (*Model View Controller*) sehingga bagian yang terlibat adalah:

- Model
  - RectangleClass (lihat contoh class diagram Rectangle pada bagian sebelum ini)
- View
  - RectangleView
- Controller
  - RectangleController

- User sebagai aktivator

**Sequence Diagram:**

```mermaid
sequenceDiagram
	autonumber
	participant User
	participant RectangleView
	participant RectangleController
	participant RectangleModel	
    RectangleController ->> RectangleView : displayForm()
    User ->> RectangleView : fillRectangleAttributes()
    RectangleView ->> RectangleController: recordRectangleAttributes()
    RectangleController ->> RectangleModel: calculateArea()
    RectangleModel -->> RectangleController: area
    RectangleController ->> RectangleView: displayArea()
    
```

Keterangan:

1. `RectangleController` menampilkan formulir
2. Aktor mengisi formulir dan menekan tombol hitung sebagai aktivator (trigger) sistem
3. Form pada `RectangleView` merekam data formulir
4. `RectangleController` memanggil method  `calculateArea()` yang ada pada class `RectangleModel`
5. `RectangleModel` memberikan output hasil perhitungan
6. `RectangleController` menampilkan hasil perhitungan pada `RectangleView`

**Penerapan dalam Pemrograman:**

Prerequested:

- NodeJs

Steps:

- Pastikan nodejs sudah terinstall pada perangkat Anda.
- Buat file dengan nama sd_example.js
- Tulis program berikut:

```javascript
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class RectangleModel {
    width;
    heigth;
    calculateArea() {
        //5
        return this.width * this.heigth;
    }
}
class RectangleController {
    view = new RectangleView();
    displayForm() {
        view.index();
    }
    recordRectangleAttributes(attrs) {
        let rect = new RectangleModel();
        rect.width = attrs.width;
        rect.heigth = attrs.heigth;
        //4
        let area = rect.calculateArea();
        //6
        this.view.viewArea(area);
    }
}
class RectangleView {
    index() {
        //2 
        console.log('Menghitung Luas Segiempat.');
        rl.question("Masukkan Lebar: ", function (lebar) {
            rl.question("Masukkan Panjang: ", function (panjang) {
                let controller = new RectangleController();
                //3
                controller.recordRectangleAttributes({ width: panjang, heigth: lebar });
            });
        });
    }
    viewArea(area) {
        console.log('Luas Segiempat: ' + area);
    }
}
let init = new RectangleController();
//1
init.displayForm();
```

**Eksekusi Program**:

Pastikan terminal atau cmd sudah mengarah ke folder yang berisikan file `sd_example.js`.

```bash
node sd_example.js
```

Contoh output:

```bash
Menghitung Luas Segiempat.
Masukkan Lebar: 4
Masukkan Panjang: 5
Luas Segiempat: 20
```

## Penerapan Sequence Diagram pada Pemrograman Menggunakan NodeJS

Contoh kasus yang digunakan pada studi kasus ini adalah:

```
Nama Aplikasi		: Store App
Versi				: 0.0.1
Language			: Javascript
Runtime				: NodeJS
```

Struktur file yang sudah dibuat pada bagian sebelumnya:

```
+ config
	- database.js
+ model
	- products.js
+ node_modules
- app_test.js
- package.json
- package-lock.json
```

### Prerequested

- NodeJS
- Mysql
- Express
- [Pug](https://pugjs.org/)
- Store API App (lihat bagian Implementasi Class Diagram)
- Mysql database dengan nama app_store

### UML Designs

**Use Case:**

| Use Case    | Menambahkan produk baru                                      |
| ----------- | ------------------------------------------------------------ |
| Actors      | Admin                                                        |
| Description | Admin menambahkan produk baru dengan mengisi data nama produk, kategori, dan harga. |

**Class Diagram:**

![](../images/class_diagram_5.png)

**Sequence Diagram:**

Sequence diagram dibuat dengan asumsi bahwa perangkat lunak dibangun menggunakan metode MVC (Model, View, Controller).

```mermaid
sequenceDiagram
	participant Admin
	participant ProductView
	participant SuccessView
	participant ProductController
    participant ProductModel
    participant ProductCategoryModel
    ProductController ->> ProductCategoryModel: getCategories()
    ProductCategoryModel -->> ProductController: responseMessage
	ProductController ->> ProductView: displayProductForm()
	Admin ->> ProductView: fillProductDetail()
	ProductView ->> ProductController: recordProductDetail()
	ProductController ->> ProductModel: addProduct()
	ProductModel -->> ProductController: responseMessage
	alt success
		ProductController ->> SuccessView: displaySuccessPage()
	else failure
		ProductController ->> ProductView: displayProductForm()
	end
```

Keterangan:

1. ProductController mengambil data kategori produk di model ProductCategoryModel.
2. ProductCategoryModel memberikan respon
3. ProductController menampilkan productView yang berisi formulir penambahan produk
4. Admin mengisi formulir dan menekan tombol trigger penyimpanan data
5. ProductView mengirimkan data detil produk ke ProductController
6. ProductController memanggil metode addProduct() yang ada pada class ProductModel
7. ProductModel memberikan respon.
8. Jika respon adalah success maka ProductController menampilkan SuccessView
9. Jika respon adalah failure maka ProductController menampilkan kembali ProductView

### Implementasi Sequence Diagram 

Penerapan sequence diagram pada kasus ini adalah menggunakan tahapan berikut:

- Menambahkan model untuk ProductCategory
- Instalasi express js
- Instalasi pug view engine
- Menambahkan controller
- Menambahkan view

Struktur file untuk aplikasi yang akan dibuat:

```
+ config
	- database.js
+ model
	- products.js
	- product_categories.js //new file
+ node_modules
- app_test.js //deleted
- app.js
- package.json
- package-lock.json
```

#### Membuat Class Model untuk ProductCategory

**model/product_categories.js**

```javascript
//Class: ProductCategories
const con = require('../config/database');
module.exports = {
    name: '',
    getAll: function () {
        const dt = new Promise((resolve, reject) => {
            con.query("SELECT * FROM product_categories", (err, result, fields) => {
                if (err) throw err;
                resolve(result);
            });
        });
        return dt;
    },
    add: function () {
		let name = "'"+this.name+"'";        
        const dt = new Promise((resolve, reject)=>{
            con.query("INSERT INTO product_categories (name) VALUES ("+name+")", (err, result, fields) => {
                if (err) throw err;
                resolve(result);
            });
        });
        return dt;
    },
    getOne: function () {

    },
    update: function () {

    },
    delete: function () {

    }
}
```

Data model untuk ProductCategories:

| Field       | Type   |
| ----------- | ------ |
| id_category | number |
| name        | string |

SQL query untuk membuat tabel product_categories:

```sql
CREATE TABLE `product_categories` (
  `id_category` int(100) NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

#### Instalasi Express Js

Jalankan perintah ini pada folder `nodejs_api`.

```bash
npm install express --save
```

#### Instalasi Pug

Jalankan perintah ini pada folder nodejs_api untuk melakukan instalasi view engine pug:

```bash
npm install pug
```

#### Membuat Controller

Pada contoh kasus ini, controller diterapkan pada `app.js` yang berfungsi juga untuk mengatur pengalamatan halaman. 

**app.js**

```javascript
//mengambil class Product
const products = require("./model/products");
//mengambil class ProductCategories
const productCategories = require("./model/product_categories");
//mengambil bodyParser untuk memperoleh nilai yang dikirim menggunakan metode POST
const bodyParser = require("body-parser");
//menyertakan library express js
const express = require("express");
//membuat aplikasi express js
const app = express();
//menentukan port
const port = 3000;

//sertakan pug view engine untuk membuat komponen view
app.set("view engine", "pug");
//menggunakan body parser pada applikasi
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mendefinisikan alamat untuk menampilkan formulir penambahan produk baru menggunakan metode GET
app.get("/addproduct", (req, res) => {
  productCategories.getAll().then((val) => {
    res.render("add_product", { categories: val });
  });
});

//mengambil nilai yang dikirim dari formulir menggunakan metode POST
app.post("/product", (req, res) => {
    //mendefinisikan atribut-atribut class Products
  products.name = req.body.name;
  products.id_category = req.body.id_category;
  products.price = req.body.price;
    //mengeksekusi method add() pada class Products untuk penambahan produk baru
  products
    .add()
    .then((data) => {
      //alternatif 1: mengarahkan halaman ke success_page jika data berhasil ditambahkan
      res.render("success_page");
    })
    .catch((err) => {
      //alternatif 2: mengarahkan ke halaman penambahan produk baru jika gagal menyimpan data
      res.redirect("/addproduct");
    });
});
//membuat server agar aplikasi dapat berjalan di web browser dengan alamat: localhost:3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

#### Membuat Komponen View

**views/add_product.pug**

```jade
body
    h1= "Add a product!"
    form(action="/product" method="POST")
      p Name:
      input(type="text" name="name" placeholder="")
      p Category:
      select(type="" name="id_category" placeholder="")
        option(value="0") Select category
        each category in categories
          option(value=category.id_category) #{category.name}        
      p Price:
      input(type="number" name="price" placeholder="")
      input(type="submit")
```

**views/success_page.pug**

```jade
html
  head
    title Success Page   
  body
    block content
        h1 Produk berhasil ditambahkan!
        a(href="/addproduct") Tambah Produk 
```

#### Eksekusi Program

**Perhatikan ini sebelum menjalankan program:**

1. Pastikan mysql sudah berjalan. JIka menggunakan XAMPP maka pastikan XAMPP sudah dijalankan agar sistem dapat terkoneksi dengan database.
2. Pastikan tabel `app_store` sudah tersedia.
3. Pastikan kolom `products` dan `product_category` sudah tersedia.

Jika 3 prasyarat diatas sudah terpenuhi maka jalankan aplikasi dengan cara mengkesekusi file `app.js` pada terminal.

![](../images/sd_eksekusi.png)

Buka browser dan buka alamat `localhost:300/addproduct` maka akan tampil:

![](../images/sd_addproduct.png)

Jika penambahan data adalah gagal maka akan diarahkan kembali ke halaman `localhost:3000/addproduct`. Jika penambahan berhasil maka akan darahkan ke halaman `localhost:3000/success_page`.

## Penerapan Sequence Diagram pada Pemrograman Sistem Menggunakan Angular & Firebase

### Asumsi

Konten ini diasumsikan bahwa Anda sudah familiar dengan framework Angular dan Firebase. Bagian ini khusus menjelaskan tentang penerapan UML khususnya Sequence Diagram pada pengembangan sistem menggunakan framework Angular.

### Angular dan Firebase 

Angular merupakan framework pengembangan sistem berbasis website menggunakan bahasa typescript. Angular berjalan pada runtime NodeJS pada proses developmentnya. Angular termasuk framework untuk membuat perangkat lunak yang berjalan di sisi client atau web browser. Oleh sebab itu Angular tidak dapat terkoneksi secara langsung dengan database yang ada di server. Angular memerlukan 'jembatan' untuk terhubung dengan database server. Penghubung tersebut biasanya menggunakan Application Programming Interface (API). Angular mengirimkan request ke API menggunakan metode GET, POST, PUT, atau DELETE kemudian API mengirimkan respon berupada data dalam format JSON.

Studi kasus pada bagian ini menggunakan Firebase sebagai layanan API sekaligus penyimpanan data. Kita menggunakan Firebase karena tidak memerlukan usaha lebih untuk membangun API sehingga fokus pengembangan adalah pada sisi client yakni pada framework Angular.

```mermaid
flowchart LR
	AngularApp -- request --> FirebaseAPI
	FirebaseAPI -- response --> AngularApp
	
```

### Penerapan Sequence Diagram pada Framework Angular

Sequence Diagram yang dirancang pada bagian ini menggunakan paradigma pemrograman MVC (Model View Controller). Arsitektur Angular juga menggunakan pola MVC. Setiap component pada Angular memuat dua elemen yaitu component.ts (sebagai controller) dan component.html (sebagai view). Komponen Model pada Angular dapat dibuat menggunakan service. Service pada Angular merupakan elemen yang dapat digunakan untuk membuat data model. Pembuatan class untuk model data dapat dibuat pada service Angular.

```mermaid
flowchart LR
	Model --> service.ts
	View --> component.html
	Controller --> component.ts
```

Struktur file pada framework Angular:

```
+ node_modules
+ src
    + assets
    + environments
    + app
        - app.module.ts
        - app.component.ts
        - app.component.html
        + services //dibuat setelah menjalankan 'ng generate service services/products'
            - products.service.ts //implementasi Class Diagram Products
            - product-category.service.ts //implementais Class Diagram ProductCategory
		
Keterangan:
+ = folder
- = file
```

Berikut ini adalah struktur lebih detil alur komunikasi data pada framework Angular dengan Firebase:

```mermaid
flowchart LR
	subgraph Angular
		products.service.ts
		product-categories.service.ts
	end
	subgraph Firebase
		productsCollection
		productCategoriesCollection
	end
	products.service.ts -- req --> productsCollection
	productsCollection -- res --> products.service.ts
	product-categories.service.ts -- req --> productCategoriesCollection
	productCategoriesCollection -- res --> product-categories.service.ts
```

Sebelum melakukan penerapan program, terlebih dahulu kita lihat Sequence Diagram yang sudah dibuat sebelumnya:

```mermaid
sequenceDiagram
	participant Admin
	participant ProductView
	participant SuccessView
	participant ProductController
    participant ProductModel
    participant ProductCategoryModel
    ProductController ->> ProductCategoryModel: getCategories()
    ProductCategoryModel -->> ProductController: responseMessage
	ProductController ->> ProductView: displayProductForm()
	Admin ->> ProductView: fillProductDetail()
	ProductView ->> ProductController: recordProductDetail()
	ProductController ->> ProductModel: addProduct()
	ProductModel -->> ProductController: responseMessage
	alt success
		ProductController ->> SuccessView: displaySuccessPage()
	else failure
		ProductController ->> ProductView: displayProductForm()
	end
```

Pertama kita perlu untuk mengidentifikasi komponen-komponen yang akan digunakan dalam framework Angular untuk penerapan SD tersebut. Berdasarkan SD itu, kita dapat membuat struktur Angular sebagai berikut:

```
+ app
	+ add-product
		- add-product.component.ts
		- add-product.component.html
		- success-page.component.html
	+ services
		- products.service.ts
		- product-category.service.ts
	- app.module.ts
	- app.component.ts
	- app.component.html
```

### Langkah Implementasi

#### Instalasi Sistem

Lingkungan pengembangan:

```
NodeJS		: 14.x
Angular		: 12
Firebase	: 8
```

Membuat proyek baru Angular

```bash
ng new storeApp
```

Integrasi Firebase

```
ng add @angular/fire
```

Membuat komponen `add-product` untuk memenuhi lifeline productView dan productController.

```
ng generate component add-product
```

Membuat products service untuk memenuhi lifeline productModel

```
ng generate service services/products
```

Membuat product-category service untuk memenuhi lifeline productCategoriesModel

```
ng generate service services/product-category
```

Modifikasi file `app-routing.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: '',
    redirectTo: '/add-product',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

Modifikasi file `app.component.html`

```html
<h1>Store App</h1>
<router-outlet></router-outlet>
```

Modifikasi file `environments/environments.ts`

```json
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCxmF3iAS973UsORsx1nbozkJKgLfpk4Zs",
    authDomain: "store-app-41314.firebaseapp.com",
    projectId: "store-app-41314",
    storageBucket: "store-app-41314.appspot.com",
    messagingSenderId: "546047452424",
    appId: "1:546047452424:web:8aa4abbb911652eb75b8bd"
  }
};
```

Itu adalah file konfigurasi Firebase. Jika Anda memiliki konfigurasi Firebase Anda sendiri maka ganti parameter di atas menggunakan konfigurasi firebase Anda sendiri.

Modifikasi file `app.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat'; //penambahan baru
import { environment } from '../environments/environment'; //penambahan baru

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms'; //penambahan baru

@NgModule({
  declarations: [AppComponent, AddProductComponent],
  imports: [
    BrowserModule,
    FormsModule,//penambahan baru untuk menerapkan FormsModule
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), //menerapkan modul Firebase
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Konfigurasi Firebase

Tambahkan role pada firebase menjadi seperti pada kode berikut:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
    match /products/{id}{
    	allow read, write, update, delete : if true;
    }
    match /product_categories/{id}{
    	allow read, write, update, delete : if true;
    }
  }
}
```

#### Membuat Data Model

Panduan membuat data model adalah menggunaka class diagram. Class Diagram yang akan diterapkan adalah sebagai berikut:

![](../images/class_diagram_5.png)

Modifikasi file `services/products.service.ts` untuk membuat data model products.

```typescript
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//class attributes
interface Products {
  id: string;
  name: string;
  id_category: string;
  price: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private firestore: AngularFirestore) {}
	//class getAll() method
  async getAll() {
    let data: any = [];
    let products = await this.firestore
      .collection<Products>('products')
      .get()
      .toPromise();
    products.forEach((val) => {
      let dataValue = {
        id: val.id,
        name: val.data().name,
        id_category: val.data().id_category,
        price: val.data().price,
      };
      data.push(dataValue);
    });
    return data;
  }
    //class getProductByCategory() method
  async getProductByCategory(id_category: any) {
    let data: any = [];
    let products = await this.firestore
      .collection<Products>('products', (ref) => {
        return ref.where('id_category', '==', id_category);
      })
      .get()
      .toPromise();
    products.forEach((val) => {
      let dataValue = {
        id: val.id,
        name: val.data().name,
        id_category: val.data().id_category,
        price: val.data().price,
      };
      data.push(dataValue);
    });
    return data;
  }
    //class getOne() method
  async getOne(id: any) {
    let data = await this.firestore
      .collection('products')
      .doc(id)
      .get()
      .toPromise();
    return data.data();
  }
    //class add() method
  async add(id: any, data: any) {
    let result = await this.firestore.collection('products').doc(id).set(data);
    return result;
  }
    //class update() method
  async update(id: any, data: any) {
    let result = await this.firestore
      .collection('products')
      .doc(id)
      .update(data);
    return result;
  }
    //class delete() method
  async delete(id: any) {
    let result = await this.firestore.collection('products').doc(id).delete();
    return result;
  }
}
```

Modifikasi file `services/product-categories.service.ts` untuk membuat data model product categories.

```typescript
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface ProductCategories {
  id_category: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  constructor(private firestore: AngularFirestore) {}

  async getAll() {
    let data: any = [];
    let products = await this.firestore
      .collection<ProductCategories>('products')
      .get()
      .toPromise();
    products.forEach((val) => {
      let dataValue = {
        id_category: val.id,
        name: val.data().name,
      };
      data.push(dataValue);
    });
    return data;
  }
  async getOne() {}
  async add() {}
  async update() {}
  async delete() {}
}
```

Modifikasi file `add-product.component.html` untuk membuat user interface form input product.

```html
<h2>Penambahan product</h2>
<div>
  <label>Product Name:</label><br />
  <input type="text" [(ngModel)]="products.name" />
</div>
<div>
  <label>Product Category:</label><br />
  <select [(ngModel)]="products.id_category">
    <option value="0">Pilih kategori</option>
    <option *ngFor="let n of productCategories" value="{{ n.id_category }}">
      {{ n.name }}
    </option>
  </select>
</div>
<div>
  <label>Price:</label><br />
  <input type="number" [(ngModel)]="products.number" />
</div>
<button (click)="addProduct()">Simpan</button>
```

Modifikasi file `add-product.component.ts` untuk mengesekusi alur utamana sequence diagram.

```typescript
import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../services/product-category.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  products: any = {};
  productCategories: any = [];
  constructor(
    private productsService: ProductsService,
    private productCategoriesService: ProductCategoryService
  ) {}

  ngOnInit(): void {
    this.getProductCategories();
  }
  async getProductCategories() {
    this.productCategories = await this.productCategoriesService.getAll();
  }
  async addProduct() {
    let docID = new Date().toTimeString();
    let res = await this.productsService.add(docID, this.products);
    if(res) alert('Produk berhasil ditambahkan.');
    else alert('Produk gagal ditambahkan.');
  }
}
```

#### Eksekusi Program

Sebelum eksekusi program, pastikan:

- Terminal (cmd) sudah berada pada folder project
- Terkoneksi dengan internet agar dapat terhubung dengan Firebase

Jalankan perintah ini untuk menjalankan program Angular:

```bash
ng serve
```

