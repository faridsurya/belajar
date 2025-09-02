## Tujuan
- Mahasiswa mampu menyiapkan proyek API sederhana menggunakan Node.js.
- Mahasiswa dapat membuat dan menguji *endpoint* API untuk memastikan *request* dan *response* sesuai dengan requirement.
- Mahasiswa dapat menulis *test case* yang bervariasi untuk pengujian API menggunakan framework Mocha dan Chai.

## Alat dan Bahan
- Node.js dan npm
- Postman (untuk pengujian manual API)
- Mocha (untuk pengujian otomatis)
- Chai (untuk assertion)
- Supertest (untuk pengujian HTTP)
- Editor teks (Visual Studio Code atau editor lain yang mendukung JavaScript)
- Koneksi internet (untuk mengunduh dependensi dan alat)

## Persiapan:
1. **Instal Node.js** jika belum terinstal di sistem.
   - [Download dan Install Node.js](https://nodejs.org)
2. **Inisialisasi Proyek Node.js**:
   - Buat direktori baru untuk proyek dan inisialisasi proyek dengan perintah:
     ```bash
     mkdir api-testing-practicum
     cd api-testing-practicum
     npm init -y
     ```
3. **Instal Dependensi** yang dibutuhkan untuk pengujian API:
   ```bash
   npm install express mocha chai supertest --save-dev
   ```

## Struktur File Proyek:
```
api-testing-practicum/
│
├── src/
│   ├── app.js              # File utama Express
│   └── controller.js       # Controller untuk API
│
├── test/
│   └── api.test.js         # File pengujian API menggunakan Mocha & Chai
│
├── package.json            # File konfigurasi npm
└── README.md               # Dokumentasi proyek
```

## Kode untuk Diuji

### 1. app.js
Buat *server* API sederhana menggunakan Express:

```javascript
// src/app.js
const express = require('express');
const app = express();
const port = 3000;

const controller = require('./controller');

app.use(express.json());

// Routes
app.get('/api/items', controller.getItems);
app.post('/api/items', controller.createItem);
app.put('/api/items/:id', controller.updateItem);   // Update route
app.delete('/api/items/:id', controller.deleteItem); // Delete route

// Start the server
app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});

module.exports = app;

```

### 2. controller.js
Tambahkan logika sederhana untuk mengelola item:

```javascript
// src/controller.js
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// Get all items
exports.getItems = (req, res) => {
    res.status(200).json(items);
};

// Create a new item
exports.createItem = (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
};

// Update an item by id
exports.updateItem = (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const item = items.find(i => i.id === itemId);

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    item.name = req.body.name || item.name;
    res.status(200).json(item);
};

// Delete an item by id
exports.deleteItem = (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex(i => i.id === itemId);

    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }

    items.splice(itemIndex, 1);
    res.status(200).json({ message: 'Item deleted successfully' });
};

```

## Langkah-langkah Praktikum

### 1. Menjalankan API
Untuk menjalankan server API, gunakan perintah:
```bash
node src/app.js
```
API akan berjalan di `http://localhost:3000`.

### 2. Menguji API Secara Otomatis Menggunakan Mocha dan Chai
Tambahkan pengujian otomatis untuk API di dalam file `api.test.js`.

```javascript
// test/api.test.js
const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');

describe('API Testing', () => {
    it('should return all items', (done) => {
        request(app)
            .get('/api/items')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.be.at.least(1);
                done();
            });
    });

    it('should create a new item', (done) => {
        const newItem = { name: 'Item 3' };
        request(app)
            .post('/api/items')
            .send(newItem)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('name', 'Item 3');
                done();
            });
    });
});
```

### 3. Menjalankan Pengujian Otomatis
Untuk menjalankan pengujian otomatis, jalankan perintah berikut:
```bash
npx mocha test/api.test.js
```

Hasil pengujian akan menampilkan hasil dari pengujian *GET* dan *POST* request.

## Latihan:
1. **Latihan 1:**
   Buat juga pengujian untuk memastikan item dihapus dengan benar.
   - Endpoint: `DELETE /api/items/:id`
   
2. **Latihan 2:**
   Uji apakah item dapat diperbarui dengan data yang baru.
   - Endpoint: `PUT /api/items/:id`
<div style="page-break-before:always"></div>