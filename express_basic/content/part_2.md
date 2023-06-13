# Bekerja dengan MongoDB pada NodeJS 

## Teknologi

**Teknologi:**
- Node JS
- Express JS
- Mongodb
- Mongodb Compass

**Bahasa:**
- Typescript

## Apa itu Mongo db?

MongoDB adalah salah satu contoh dari database NoSQL, yang berarti "tidak hanya SQL". NoSQL adalah jenis database yang memungkinkan penyimpanan dan pengambilan data dengan cara yang berbeda dari database relasional tradisional.

MongoDB menggunakan model penyimpanan dokumen, di mana data disimpan dalam dokumen yang mirip dengan format JSON. Dokumen-dokumen ini dikelompokkan ke dalam `collection` (koleksi), yang mirip dengan tabel dalam database relasional. Namun, MongoDB tidak memiliki skema yang ketat, yang berarti setiap dokumen dalam koleksi dapat memiliki struktur yang berbeda.

Keuntungan utama menggunakan MongoDB adalah fleksibilitasnya. Anda tidak perlu memikirkan skema terlebih dahulu, dan Anda dapat dengan mudah menambahkan atau mengubah `field` dalam dokumen. Ini berguna jika Anda memiliki data yang beragam atau mengalami perubahan seiring waktu.

Selain itu, MongoDB juga menawarkan skalabilitas horizontal yang baik. Anda dapat dengan mudah menambahkan server baru ke dalam kluster MongoDB untuk meningkatkan kapasitas dan kinerja database. MongoDB juga mendukung replikasi, yang memungkinkan replika data di beberapa server untuk keandalan dan ketersediaan yang lebih tinggi.

Dalam pengembangan aplikasi, MongoDB dapat digunakan untuk berbagai tujuan, seperti menyimpan profil pengguna, log aktivitas, atau data sensor. Dokumen-dokumen dapat diakses dengan menggunakan bahasa kueri yang kuat yang disebut MongoDB Query Language (MQL).

Secara keseluruhan, MongoDB dan database NoSQL memberikan alternatif yang fleksibel dan skalabel untuk database relasional tradisional. Mereka cocok digunakan dalam situasi di mana struktur data berubah atau tidak terdefinisi dengan jelas, atau ketika skalabilitas dan ketersediaan yang tinggi diperlukan.

## Instalasi Mongodb dan Integrasi dengan NodeJS

Berikut adalah langkah-langkah rinci untuk mengatur koneksi ke database MongoDB dari Node.js menggunakan Mongoose dengan TypeScript:

1. Instalasi MongoDB:
   - Unduh dan instal MongoDB dari situs resmi MongoDB: https://www.mongodb.com/try/download/community
   - Ikuti petunjuk instalasi yang sesuai dengan sistem operasi Anda.

2. Buat direktori proyek:
   - Buat direktori baru di tempat yang Anda inginkan untuk menyimpan proyek Anda.

3. Inisialisasi proyek TypeScript:
   - Buka terminal atau command prompt dan arahkan ke direktori proyek yang telah dibuat.
   - Jalankan perintah berikut untuk menginisialisasi proyek TypeScript:
     ```
     npm init -y
     ```

4. Instalasi dependencies:
   - Jalankan perintah berikut untuk menginstal dependensi Mongoose dan TypeScript:
     ```
     npm install mongoose typescript ts-node
     ```

5. Konfigurasi TypeScript:
   - Buat file `tsconfig.json` di direktori proyek Anda.
   - Buka file `tsconfig.json` dan tambahkan konfigurasi berikut:
     ```json
     {
       "compilerOptions": {
         "target": "es6",
         "module": "commonjs",
         "outDir": "dist",
         "rootDir": "src",
         "esModuleInterop": true
       },
       "exclude": ["node_modules"]
     }
     ```

6. Buat direktori `src`:
   - Buat direktori `src` di dalam direktori proyek Anda.

7. Buat file `index.ts`:
   - Buat file `index.ts` dalam direktori `src`.
   - Buka file `index.ts` menggunakan editor teks pilihan Anda.

8. Import library Mongoose dan buat koneksi ke database:
   - Tambahkan kode berikut di dalam file `index.ts`:
     ```typescript
     import mongoose from 'mongoose';

     // Membuat koneksi ke database MongoDB
     mongoose.connect('mongodb://localhost/nama_database', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     })
       .then(() => {
         console.log('Koneksi MongoDB berhasil');
       })
       .catch((err) => {
         console.error('Koneksi MongoDB gagal', err);
       });
     ```

   - Pastikan untuk mengganti `'nama_database'` dengan nama yang ingin Anda berikan untuk database Anda.

9. Mengubah script start pada package.json:
   Sebelum:
   ```json
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   }
   ```

   Setelah:
   ```json
   "scripts": {
     "start": "ts-node src/index.ts"
   }
   ```

10. Menjalankan aplikasi:
    - Kembali ke terminal atau command prompt, pastikan Anda berada dalam direktori proyek.
    - Jalankan perintah berikut untuk menjalankan aplikasi:
      ```
      npm start
      ```

    - Jika semua langkah di atas berhasil, Anda akan melihat pesan "Koneksi MongoDB berhasil" di konsol.

Dengan langkah-langkah di atas, Anda telah berhasil mengatur koneksi ke database MongoDB dari Node.js menggunakan Mongoose dan TypeScript. Anda dapat melanjutkan dengan menambahkan operasi CRUD (Create, Read, Update, Delete) dan penggunaan model untuk berinteraksi dengan database MongoDB.

Struktur file sampai pada langkah ini adalah:

```
- nama_proyek/
  - node_modules/
  - src/
    - index.ts
  - package.json
  - tsconfig.json
```

## Membuat Skema Database dan Model

### Setting struktur file pada aplikasi

Berikut adalah struktur file proyek yang diperbaharui untuk menangani model, rute, dan middleware:

```
- nama_proyek/
  - node_modules/
  - src/
    - controllers/
      - exampleController.ts
    - middlewares/
      - exampleMiddleware.ts
    - models/
      - exampleModel.ts
    - routes/
      - exampleRouter.ts
    - index.ts
  - package.json
  - tsconfig.json
```

Penjelasan tentang setiap direktori dalam struktur proyek:

- `controllers/`: Direktori yang berisi file-file yang mengontrol logika bisnis aplikasi.
  - `exampleController.ts`: Contoh file kontroler yang berisi logika untuk menangani permintaan dan respons terkait entitas tertentu.
- `middlewares/`: Direktori yang berisi file-file middleware yang melakukan pemrosesan di tengah permintaan dan respons.
  - `exampleMiddleware.ts`: Contoh file middleware yang melaksanakan fungsi tertentu sebelum atau setelah pemrosesan permintaan.
- `models/`: Direktori yang berisi definisi model data aplikasi.
  - `exampleModel.ts`: Contoh file model yang mendefinisikan skema dan operasi terkait pada entitas tertentu.
- `routes/`: Direktori yang berisi file-file yang menangani routing permintaan HTTP.
  - `exampleRouter.ts`: Contoh file router yang menentukan endpoint dan menghubungkannya dengan fungsi kontroler yang sesuai.
- `index.ts`: File utama yang berisi kode untuk menghubungkan ke database MongoDB dan mengatur server untuk mendengarkan permintaan.
- `package.json`: File konfigurasi proyek yang berisi informasi tentang proyek dan dependensi yang diperlukan.
- `tsconfig.json`: File konfigurasi TypeScript yang menentukan bagaimana kode TypeScript dikompilasi ke JavaScript.

Dengan struktur file di atas, Anda dapat menambahkan file-file tambahan sesuai dengan kebutuhan aplikasi Anda, seperti model-model tambahan, rute-rute baru, atau middleware lainnya. Pastikan untuk mengatur impor dan eksport yang sesuai antara file-file tersebut agar mereka dapat saling berinteraksi dengan benar.

### Mengatur Skema dan Model Database

Pada contoh ini, kita akan membuat skema dan model untuk data User dan Product. Berikut ini adalah contoh struktur data yang akan dibuat:

**Users:**
```markdown
- email: string
- displayName: string
- password: string
- profile: object
```

**Products:**
```markdown
- name: string
- description: string
- price: number
- productCategory: array string
- thumbnails: Array string
```

Dalam struktur data di atas, atribut-atribut yang terkait dengan entitas "Users" dan "Products" didefinisikan beserta tipe data yang sesuai. Atribut "productCategory" dan "thumbnails" pada entitas "Products" memiliki tipe data array yang berisi tipe data string. Dengan menggunakan struktur data ini, Anda dapat mengatur skema dan model yang sesuai untuk entitas tersebut dalam MongoDB menggunakan Mongoose dan Node.js.

### Membuat Skema dan Model pada NodeJS

Berikut adalah contoh pengaturan skema dan model berdasarkan struktur data yang diberikan:

1. Buat file `User.ts` dalam direktori `models/`:
```typescript
import mongoose, { Schema, Document } from 'mongoose';

interface User extends Document {
  email: string;
  displayName: string;
  password: string;
  profile: object;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true },
  displayName: { type: String, required: true },
  password: { type: String, required: true },
  profile: { type: Object }
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
```

2. Buat file `Product.ts` dalam direktori `models/`:
```typescript
import mongoose, { Schema, Document } from 'mongoose';

interface Product extends Document {
  name: string;
  description: string;
  price: number;
  productCategory: string[];
  thumbnails: string[];
}

const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  productCategory: [{ type: String }],
  thumbnails: [{ type: String }]
});

const ProductModel = mongoose.model<Product>('Product', productSchema);

export default ProductModel;
```

Dengan mengatur skema dan model seperti di atas, Anda telah membuat definisi yang sesuai untuk skema "User" dan "Product" yang dapat digunakan untuk berinteraksi dengan data pada koleksi MongoDB terkait. Anda dapat menggunakan model ini untuk membuat, membaca, memperbarui, dan menghapus entitas pengguna dan produk di dalam database MongoDB menggunakan Mongoose dan Node.js.

## Mengatur Router

### Pengaturan Router untuk User

Berikut adalah langkah-langkah rinci untuk mengatur router yang menangani operasi CRUD (Create, Read, Update, Delete) pada entitas pengguna (User):

1. Buat file `userRouter.ts` dalam direktori `routes/`:
   - Buka terminal atau command prompt dan arahkan ke direktori proyek Anda.
   - Buat file `userRouter.ts` di dalam direktori `routes/`.
   - Buka file `userRouter.ts` menggunakan editor teks pilihan Anda.

2. Impor dependencies dan model User:
   - Tambahkan kode berikut di dalam file `userRouter.ts`:
     ```typescript
     import express, { Request, Response } from 'express';
     import UserModel, { User } from '../models/User';
     ```

3. Buat router instance:
   - Tambahkan kode berikut di dalam file `userRouter.ts`:
     ```typescript
     const router = express.Router();
     ```

4. Tambahkan rute untuk membuat pengguna (Create):
   - Tambahkan kode berikut di dalam file `userRouter.ts`:
     ```typescript
     router.post('/', async (req: Request, res: Response) => {
       try {
         const { email, displayName, password, profile } = req.body;

         const newUser: User = new UserModel({
           email,
           displayName,
           password,
           profile
         });

         const savedUser = await newUser.save();

         res.status(201).json(savedUser);
       } catch (error) {
         res.status(500).json({ message: 'Terjadi kesalahan saat membuat pengguna baru.', error });
       }
     });
     ```

5. Tambahkan rute untuk mendapatkan daftar pengguna (Read):
   - Tambahkan kode berikut di dalam file `userRouter.ts`:
     ```typescript
     router.get('/', async (req: Request, res: Response) => {
       try {
         const users = await UserModel.find();
         res.json(users);
       } catch (error) {
         res.status(500).json({ message: 'Terjadi kesalahan saat mengambil daftar pengguna.', error });
       }
     });
     ```

6. Tambahkan rute untuk mendapatkan pengguna berdasarkan ID (Read by ID):
   - Tambahkan kode berikut di dalam file `userRouter.ts`:
     ```typescript
     router.get('/:id', async (req: Request, res: Response) => {
       try {
         const user = await UserModel.findById(req.params.id);
         if (!user) {
           return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
         }
         res.json(user);
       } catch (error) {
         res.status(500).json({ message: 'Terjadi kesalahan saat mengambil pengguna.', error });
       }
     });
     ```

7. Tambahkan rute untuk memperbarui pengguna berdasarkan ID (Update):
   - Tambahkan kode berikut di dalam file `userRouter.ts`:
     ```typescript
     router.put('/:id', async (req: Request, res: Response) => {
       try {
         const { email, displayName, password, profile } = req.body;

         const updatedUser = await UserModel.findByIdAndUpdate(
           req.params.id,
           { email, displayName, password, profile },
           { new: true }
         );

         if (!updatedUser) {
           return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
         }

         res.json(updatedUser);
       } catch (error) {
         res.status

(500).json({ message: 'Terjadi kesalahan saat memperbarui pengguna.', error });
       }
     });
     ```

8. Tambahkan rute untuk menghapus pengguna berdasarkan ID (Delete):
   - Tambahkan kode berikut di dalam file `userRouter.ts`:
     ```typescript
     router.delete('/:id', async (req: Request, res: Response) => {
       try {
         const deletedUser = await UserModel.findByIdAndRemove(req.params.id);

         if (!deletedUser) {
           return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
         }

         res.json({ message: 'Pengguna berhasil dihapus.' });
       } catch (error) {
         res.status(500).json({ message: 'Terjadi kesalahan saat menghapus pengguna.', error });
       }
     });
     ```

9. Ekspor router:
   - Tambahkan kode berikut di dalam file `userRouter.ts`:
     ```typescript
     export default router as userRouter;
     ```

Dengan langkah-langkah di atas, Anda telah mengatur router untuk menangani operasi CRUD pada entitas pengguna (User). Anda dapat menggunakan router ini di file `index.ts` atau file lain yang bertanggung jawab untuk menghubungkan router ke server Express Anda.

### Pengaturan Router untuk Product

Berikut adalah langkah-langkah rinci untuk mengatur router yang menangani operasi CRUD (Create, Read, Update, Delete) pada entitas produk (Product):

1. Buat file `productRouter.ts` dalam direktori `routes/`:
   - Buka terminal atau command prompt dan arahkan ke direktori proyek Anda.
   - Buat file `productRouter.ts` di dalam direktori `routes/`.
   - Buka file `productRouter.ts` menggunakan editor teks pilihan Anda.

2. Impor dependencies dan model Product:
   - Tambahkan kode berikut di dalam file `productRouter.ts`:
     ```typescript
     import express, { Request, Response } from 'express';
     import ProductModel, { Product } from '../models/Product';
     ```

3. Buat router instance:
   - Tambahkan kode berikut di dalam file `productRouter.ts`:
     ```typescript
     const router = express.Router();
     ```

4. Tambahkan rute untuk membuat produk (Create):
   - Tambahkan kode berikut di dalam file `productRouter.ts`:
     ```typescript
     router.post('/', async (req: Request, res: Response) => {
       try {
         const { name, description, price, productCategory, thumbnails } = req.body;

         const newProduct: Product = new ProductModel({
           name,
           description,
           price,
           productCategory,
           thumbnails
         });

         const savedProduct = await newProduct.save();

         res.status(201).json(savedProduct);
       } catch (error) {
         res.status(500).json({ message: 'Terjadi kesalahan saat membuat produk baru.', error });
       }
     });
     ```

5. Tambahkan rute untuk mendapatkan daftar produk (Read):
   - Tambahkan kode berikut di dalam file `productRouter.ts`:
     ```typescript
     router.get('/', async (req: Request, res: Response) => {
       try {
         const products = await ProductModel.find();
         res.json(products);
       } catch (error) {
         res.status(500).json({ message: 'Terjadi kesalahan saat mengambil daftar produk.', error });
       }
     });
     ```

6. Tambahkan rute untuk mendapatkan produk berdasarkan ID (Read by ID):
   - Tambahkan kode berikut di dalam file `productRouter.ts`:
     ```typescript
     router.get('/:id', async (req: Request, res: Response) => {
       try {
         const product = await ProductModel.findById(req.params.id);
         if (!product) {
           return res.status(404).json({ message: 'Produk tidak ditemukan.' });
         }
         res.json(product);
       } catch (error) {
         res.status(500).json({ message: 'Terjadi kesalahan saat mengambil produk.', error });
       }
     });
     ```

7. Tambahkan rute untuk memperbarui produk berdasarkan ID (Update):
   - Tambahkan kode berikut di dalam file `productRouter.ts`:
     ```typescript
     router.put('/:id', async (req: Request, res: Response) => {
       try {
         const { name, description, price, productCategory, thumbnails } = req.body;

         const updatedProduct = await ProductModel.findByIdAndUpdate(
           req.params.id,
           { name, description, price, productCategory, thumbnails },
           { new: true }
         );

         if (!updatedProduct) {
           return res.status(404).json({ message: 'Produk tidak ditemukan.' });
         }

         res.json(updatedProduct);


       } catch (error) {
         res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui produk.', error });
       }
     });
     ```

8. Tambahkan rute untuk menghapus produk berdasarkan ID (Delete):
   - Tambahkan kode berikut di dalam file `productRouter.ts`:
     ```typescript
     router.delete('/:id', async (req: Request, res: Response) => {
       try {
         const deletedProduct = await ProductModel.findByIdAndRemove(req.params.id);

         if (!deletedProduct) {
           return res.status(404).json({ message: 'Produk tidak ditemukan.' });
         }

         res.json({ message: 'Produk berhasil dihapus.' });
       } catch (error) {
         res.status(500).json({ message: 'Terjadi kesalahan saat menghapus produk.', error });
       }
     });
     ```

9. Ekspor router:
   - Tambahkan kode berikut di dalam file `productRouter.ts`:
     ```typescript
     export default router as productRouter;
     ```

Dengan langkah-langkah di atas, Anda telah mengatur router untuk menangani operasi CRUD pada entitas produk (Product). Anda dapat menggunakan router ini di file `index.ts` atau file lain yang bertanggung jawab untuk menghubungkan router ke server Express Anda.

### Update index.ts

Berikut adalah langkah-langkah untuk memperbarui file `index.ts` agar mengimplementasikan router untuk entitas pengguna (User) dan produk (Product):

1. Impor dependencies dan modul router yang telah dibuat:
   - Tambahkan kode berikut di dalam file `index.ts`:
     ```typescript
     import express from 'express';
     import mongoose from 'mongoose';
     import userRouter from './routes/userRouter';
     import productRouter from './routes/productRouter';
     ```

2. Buat instance aplikasi Express:
   - Tambahkan kode berikut di dalam file `index.ts`:
     ```typescript
     const app = express();
     ```

3. Konfigurasi parsing body request:
   - Tambahkan kode berikut di dalam file `index.ts`:
     ```typescript
     app.use(express.json());
     ```

4. Hubungkan ke database MongoDB:
   - Tambahkan kode berikut di dalam file `index.ts`:
     ```typescript
     const dbUrl = 'mongodb://localhost:27017/mydatabase'; // Ganti dengan URL MongoDB Anda
     mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => {
         console.log('Terhubung ke database MongoDB');
       })
       .catch((error) => {
         console.log('Kesalahan saat terhubung ke database:', error);
       });
     ```

5. Terapkan router untuk entitas pengguna (User):
   - Tambahkan kode berikut di dalam file `index.ts`:
     ```typescript
     app.use('/users', userRouter);
     ```

6. Terapkan router untuk entitas produk (Product):
   - Tambahkan kode berikut di dalam file `index.ts`:
     ```typescript
     app.use('/products', productRouter);
     ```

7. Jalankan server:
   - Tambahkan kode berikut di dalam file `index.ts`:
     ```typescript
     const port = 3000; // Ganti dengan port yang ingin Anda gunakan
     app.listen(port, () => {
       console.log(`Server berjalan di http://localhost:${port}`);
     });
     ```

Dengan langkah-langkah di atas, Anda telah memperbarui file `index.ts` untuk mengimplementasikan router untuk entitas pengguna (User) dan produk (Product). Server Express akan terhubung ke database MongoDB dan melayani rute-rute yang ditentukan untuk entitas tersebut. Pastikan Anda telah mengganti URL MongoDB dan port sesuai dengan kebutuhan Anda sebelum menjalankan server.

## Mengatur Relasi antar Data

Berikut adalah langkah-langkah untuk menangani hubungan antara model data yang berbeda:

### Mengatur Relasi User-Product:
   - Setiap pengguna dapat memiliki hubungan dengan beberapa produk, yang menunjukkan bahwa seorang pengguna dapat memiliki atau berinteraksi dengan beberapa produk.
   - Ini dapat direpresentasikan dengan menambahkan referensi ke model `User` dalam model `Product`.

Untuk membentuk hubungan ini, Anda dapat mengubah model `Product` sebagai berikut:

```typescript
import mongoose, { Schema, Document } from 'mongoose';

// Definisikan interface Product
export interface Product extends Document {
  name: string;
  description: string;
  price: number;
  productCategory: string[];
  thumbnails: string[];
  owner: Schema.Types.ObjectId; // Referensi ke model User
}

// Definisikan schema Product
const productSchema: Schema<Product> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  productCategory: [{ type: String }],
  thumbnails: [{ type: String }],
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Referensi ke model User
});

// Buat model Product
const ProductModel = mongoose.model<Product>('Product', productSchema);

export default ProductModel;
```

Pada model `Product` yang telah diperbarui, kami menambahkan field `owner` dengan tipe `Schema.Types.ObjectId` untuk menyimpan referensi ke pengguna (`User`) yang memiliki produk. Opsi `ref` diatur sebagai `'User'`, yang menunjukkan bahwa itu akan merujuk ke model `User`.

Dengan hubungan ini, Anda dapat mengambil pemilik dari suatu produk dengan mempopulasikan field `owner` saat melakukan query terhadap model `Product`.

Dengan membangun hubungan ini, Anda sekarang dapat menangani koneksi antara pengguna dan produk yang terkait, memungkinkan operasi seperti mengambil produk dari seorang pengguna atau menemukan pemilik dari suatu produk tertentu.

### Memperbarui Router untuk Product

Permintaan maaf atas kebingungan sebelumnya. Anda benar, tidak perlu memperbarui file `index.ts` dalam kasus ini. Berikut adalah langkah-langkah yang direvisi untuk membuat filter produk berdasarkan pemilik (owner), dengan fokus pada file `productRouter.ts`:

1. Buka file `productRouter.ts` yang terletak di direktori `src/routes`.

2. Impor modul dan model yang diperlukan:
   - Tambahkan kode berikut di bagian atas file `productRouter.ts`:
     ```typescript
     import { Request, Response, Router } from 'express';
     import { Product } from '../models/Product';
     import { User } from '../models/User';
     
     const router = Router();
     ```

3. Tambahkan rute untuk mendapatkan produk berdasarkan pemilik:
   - Tambahkan kode berikut di dalam file `productRouter.ts`:
     ```typescript
     router.get('/owner/:ownerId', async (req: Request, res: Response) => {
       try {
         const ownerId = req.params.ownerId;
         const products = await Product.find({ owner: ownerId }).exec();
     
         res.json(products);
       } catch (error) {
         res.status(500).json({ message: 'Terjadi kesalahan saat mengambil produk berdasarkan pemilik.', error });
       }
     });
     ```

4. Ekspor router:
   - Pastikan ada pernyataan ekspor (`export`) di akhir file `productRouter.ts`. Jika belum ada, tambahkan baris berikut di bagian akhir:
     ```typescript
     export default router as ProductRouter;
     ```

Dengan mengikuti langkah-langkah ini, Anda telah memperbarui file `productRouter.ts` untuk menyertakan rute `/owner/:ownerId` yang mengambil produk berdasarkan ID pemilik yang diberikan. Ketika rute ini diakses, MongoDB akan mencari produk dengan ID pemilik yang sesuai dan mengembalikan hasilnya.

Pastikan untuk mengganti `:ownerId` dengan ID pemilik yang valid saat menguji rute ini. Selain itu, pastikan Anda telah menghubungkan `productRouter` ke server Express dengan menyertakannya dalam file yang tepat (biasanya `index.ts`).

## Implementasi Pagination pada Endpoint API

### Konsep Dasar Pagination

Untuk mengimplementasikan paginasi pada endpoint Produk, Anda dapat memodifikasi rute yang ada di file `productRouter.ts` untuk menyertakan parameter paginasi. Berikut adalah langkah-langkahnya:

1. Buka file `productRouter.ts` yang terletak di direktori `src/routes`.

2. Perbarui rute untuk mendapatkan produk berdasarkan pemilik dengan menyertakan parameter paginasi:
   - Modifikasi definisi rute untuk menyertakan parameter `page` dan `limit`. Contohnya seperti ini:
     ```typescript
     router.get('/owner/:ownerId', async (req: Request, res: Response) => {
       try {
         const ownerId = req.params.ownerId;
         const page = parseInt(req.query.page as string) || 1; // Halaman saat ini
         const limit = parseInt(req.query.limit as string) || 10; // Jumlah produk per halaman
     
         const skip = (page - 1) * limit;
     
         const products = await Product.find({ owner: ownerId })
           .skip(skip)
           .limit(limit)
           .exec();
     
         res.json(products);
       } catch (error) {
         res.status(500).json({ message: 'Terjadi kesalahan saat mengambil produk berdasarkan pemilik.', error });
       }
     });
     ```

3. Simpan perubahan pada file `productRouter.ts`.

Dengan menambahkan parameter `page` dan `limit` pada rute, Anda dapat mengontrol paginasi respon pada API. Parameter `page` menentukan nomor halaman saat ini, sedangkan parameter `limit` mengatur jumlah produk per halaman.

Pada penanganan rute yang diperbarui, variabel `skip` dihitung berdasarkan halaman saat ini dan batas jumlah produk per halaman. Variabel ini menentukan berapa banyak produk yang akan dilewati dalam kueri basis data. Metode `skip` dan `limit` kemudian diterapkan pada kueri `Product.find()` untuk mengambil rentang produk yang sesuai.

Anda sekarang dapat menguji fungsionalitas paginasi dengan menambahkan `?page=1&limit=10` pada URL endpoint, di mana `page` menentukan nomor halaman saat ini, dan `limit` mengatur jumlah produk per halaman. Sesuaikan nilai-nilai ini sesuai kebutuhan.

Ingatlah untuk menangani kemungkinan kesalahan dan kasus-kasus ekstrem, seperti memvalidasi dan membersihkan parameter paginasi, mengimplementasikan penanganan kesalahan yang sesuai, dan memberikan metadata respons untuk detail paginasi.

### Implementasi Pagination yang Dinamis

Jika Anda ingin mengubah struktur URL untuk menyertakan parameter `page` dan `limit`, Anda dapat memperbarui kode di file `productRouter.ts` seperti berikut:

```typescript
router.get('/owner/:ownerId/:page/:limit', async (req: Request, res: Response) => {
  try {
    const ownerId = req.params.ownerId;
    const page = parseInt(req.params.page) || 1; // Halaman saat ini
    const limit = parseInt(req.params.limit) || 10; // Jumlah produk per halaman

    const skip = (page - 1) * limit;

    const countPromise = Product.countDocuments({ owner: ownerId }).exec();
    const productsPromise = Product.find({ owner: ownerId })
      .skip(skip)
      .limit(limit)
      .exec();

    const [count, products] = await Promise.all([countPromise, productsPromise]);

    const totalPages = Math.ceil(count / limit);

    res.json({
      page,
      limit,
      totalProducts: count,
      totalPages,
      products,
    });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil produk berdasarkan pemilik.', error });
  }
});
```

Dengan kode yang diperbarui ini, struktur URL untuk mendapatkan produk berdasarkan pemilik akan menjadi `/owner/:ownerId/:page/:limit`, di mana `:ownerId` adalah ID pemilik, `:page` adalah nomor halaman saat ini, dan `:limit` adalah jumlah produk per halaman.

Pastikan untuk menyesuaikan kode sesuai dengan struktur proyek dan kebutuhan Anda.




