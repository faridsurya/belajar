
### Tujuan
- Mahasiswa mampu membuat dua modul yang saling berinteraksi dalam Node.js.
- Mahasiswa dapat menguji integrasi antara kedua modul menggunakan unit test.
- Mahasiswa dapat menggunakan stub atau mock untuk mengisolasi dependensi eksternal.
- Mahasiswa dapat menguji aliran data antara modul.

### Alat dan Bahan
- Node.js
- npm (Node Package Manager)
- Sinon.js (`npm install sinon`)
- Mocha (`npm install mocha`)
- Chai (`npm install chai`)

### Persiapan
1. **Instalasi Node.js**: Pastikan Node.js sudah terinstal pada perangkat Anda. Jika belum, unduh dan instal dari [nodejs.org](https://nodejs.org/).
2. **Buat Proyek Node.js**: Buat folder proyek baru dan inisialisasi proyek Node.js menggunakan perintah berikut:

```bash
   mkdir integration-testing
   cd integration-testing
   npm init -y
```

### Struktur File Proyek
Buat struktur direktori sebagai berikut:

```
integration-testing/
│
├── src/
│   ├── repository.js     # Modul repository
│   └── service.js        # Modul service
│
└── test/
    └── service.test.js   # Skrip pengujian untuk service
```

### Kode untuk Diuji
#### 1. Modul Repository (`repository.js`)
Modul ini akan berfungsi untuk berinteraksi dengan data, misalnya dengan database atau sumber data lainnya. 

```javascript
// src/repository.js

class Repository {
    constructor() {
        this.data = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
        ];
    }

    getAllItems() {
        return this.data;
    }

    getItemById(id) {
        return this.data.find(item => item.id === id);
    }

    addItem(item) {
        this.data.push(item);
        return item;
    }
}

module.exports = Repository;
```

#### 2. Modul Secondary Repository (`secondaryRepository.js`)
Modul ini akan berfungsi untuk berinteraksi dengan data alternatif, misalnya dengan database atau sumber data lainnya. 

```javascript
// src/secondaryRepository.js

class SecondaryRepository {
    constructor() {
        this.data = [
            { id: 3, name: 'Item 3' },
            { id: 4, name: 'Item 4' },
        ];
    }

    getItemById(id) {
        return this.data.find(item => item.id === id);
    }
}

module.exports = SecondaryRepository;

```
#### 3. Modul Service (`service.js`)
Modul ini akan menggunakan repository untuk mengelola logika bisnis.

```javascript
// src/service.js

const Repository = require('./repository');

class Service {
    constructor() {
        this.repository = new Repository();
    }

    getAllItems() {
        return this.repository.getAllItems();
    }

    getItemById(id) {
        let item = this.primaryRepository.getItemById(id);
        if (!item) { 
	        item = this.secondaryRepository.getItemById(id); 
        } 
        if (!item) { 
	        throw new Error('Item not found in both repositories'); 
        } 
        return item;
    }

    addItem(name) {
        const newItem = { id: this.repository.data.length + 1, name };
        return this.repository.addItem(newItem);
    }
}

module.exports = Service;
```

### Langkah-langkah Praktikum

#### 1. Membuat Modul
- Buat file `repository.js` di dalam folder `src` dan salin kode untuk modul repository.
- Buat file `secondaryRepository.js` di dalam folder `src`.
- Buat file `service.js` di dalam folder `src` dan salin kode untuk modul service.
#### 2. Menguji Integrasi
- Buat file `service.test.js` di dalam folder `test` dengan kode pengujian berikut:

```javascript
// test/service.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Service = require('../src/service');
const Repository = require('../src/repository');

describe('Service Integration Tests', () => {
    let service;
    let repositoryStub;

    beforeEach(() => {
        repositoryStub = sinon.createStubInstance(Repository);
        service = new Service();
        service.repository = repositoryStub;
    });

    it('should return all items', () => {
        const items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
        repositoryStub.getAllItems.returns(items);

        const result = service.getAllItems();

        expect(result).to.equal(items);
        expect(repositoryStub.getAllItems.calledOnce).to.be.true;
    });

    it('should return an item by id', () => {
        const item = { id: 1, name: 'Item 1' };
        repositoryStub.getItemById.withArgs(1).returns(item);

        const result = service.getItemById(1);

        expect(result).to.equal(item);
        expect(repositoryStub.getItemById.calledOnceWith(1)).to.be.true;
    });

    it('should throw an error when item is not found', () => {
        repositoryStub.getItemById.returns(null);

        expect(() => service.getItemById(3)).to.throw('Item not found');
        expect(repositoryStub.getItemById.calledOnceWith(3)).to.be.true;
    });

    it('should add a new item', () => {
        const newItem = { id: 3, name: 'Item 3' };
        repositoryStub.addItem.returns(newItem);

        const result = service.addItem('Item 3');

        expect(result).to.equal(newItem);
        expect(repositoryStub.addItem.calledOnceWith(newItem)).to.be.true;
    });
});
```

#### 3. Pengujian dengan dengan Lebih dari Satu _Stub_

Dalam pengujian ini, kita akan menggunakan _stub_ untuk kedua repository (primary dan secondary) agar dapat menguji skenario di mana data diambil dari salah satu atau kedua _repository_ tersebut.

```javascript
// test/service.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Service = require('../src/service');
const PrimaryRepository = require('../src/repository');
const SecondaryRepository = require('../src/secondaryRepository');

describe('Service Integration Tests with Multiple Stubs', () => {
    let service;
    let primaryRepositoryStub;
    let secondaryRepositoryStub;

    beforeEach(() => {
        primaryRepositoryStub = sinon.createStubInstance(PrimaryRepository);
        secondaryRepositoryStub = sinon.createStubInstance(SecondaryRepository);
        service = new Service();
        service.primaryRepository = primaryRepositoryStub;
        service.secondaryRepository = secondaryRepositoryStub;
    });

    it('should return item from primary repository if found', () => {
        const item = { id: 1, name: 'Item 1' };
        primaryRepositoryStub.getItemById.withArgs(1).returns(item);

        const result = service.getItemById(1);

        expect(result).to.equal(item);
        expect(primaryRepositoryStub.getItemById.calledOnceWith(1)).to.be.true;
        expect(secondaryRepositoryStub.getItemById.notCalled).to.be.true;
    });

    it('should return item from secondary repository if not found in primary', () => {
        primaryRepositoryStub.getItemById.withArgs(3).returns(null);
        const item = { id: 3, name: 'Item 3' };
        secondaryRepositoryStub.getItemById.withArgs(3).returns(item);

        const result = service.getItemById(3);

        expect(result).to.equal(item);
        expect(primaryRepositoryStub.getItemById.calledOnceWith(3)).to.be.true;
        expect(secondaryRepositoryStub.getItemById.calledOnceWith(3)).to.be.true;
    });

    it('should throw an error if item is not found in both repositories', () => {
        primaryRepositoryStub.getItemById.returns(null);
        secondaryRepositoryStub.getItemById.returns(null);

        expect(() => service.getItemById(5)).to.throw('Item not found in both repositories');
        expect(primaryRepositoryStub.getItemById.calledOnceWith(5)).to.be.true;
        expect(secondaryRepositoryStub.getItemById.calledOnceWith(5)).to.be.true;
    });
});

```

##### Penjelasan Pengujian

1. **Pengujian item dari _PrimaryRepository_**:    
    - Pengujian pertama memverifikasi bahwa jika data ditemukan di _primary repository_, maka _service_ akan mengembalikan data tersebut dan tidak akan mencoba mengambil data dari _secondary repository_.
2. **Pengujian item dari _SecondaryRepository_**:    
    - Jika data tidak ditemukan di _primary repository_, pengujian kedua memverifikasi bahwa _service_ akan mencoba mengambil data dari _secondary repository_.
3. **Pengujian kegagalan (Item tidak ditemukan di kedua repository)**:    
    - Pengujian ketiga memverifikasi bahwa jika item tidak ditemukan di kedua repository, _service_ akan melemparkan kesalahan (`throw` error).
### 4. Menjalankan Pengujian
- Pastikan Anda berada di direktori proyek dan jalankan perintah berikut untuk melakukan pengujian:
   ```bash
   npx mocha test/service.test.js
   ```
- Periksa hasil pengujian di terminal. Semua pengujian harus berhasil.

### 5. Latihan

1. **Modifikasi Repository**. Tambahkan metode baru pada `repository.js` untuk menghapus item berdasarkan ID.
2. Uji metode ini dalam file `service.test.js`.

### 6. Kesimpulan
Setelah melakukan praktikum ini, mahasiswa diharapkan dapat memahami konsep pengujian integrasi, bagaimana modul berinteraksi satu sama lain, serta penggunaan stub atau mock untuk mengisolasi dependensi eksternal dalam pengujian.

<div style="page-break-before:always"></div>