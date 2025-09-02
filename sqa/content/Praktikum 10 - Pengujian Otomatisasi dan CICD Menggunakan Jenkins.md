
## 1. Tujuan
1. Mahasiswa memahami konsep **Continuous Integration** dan **Continuous Delivery/Deployment (CI/CD)**.
2. Mahasiswa mampu membuat pipeline **CI/CD** sederhana menggunakan **Jenkins**.
3. Mahasiswa dapat mengkonfigurasi Jenkins untuk menjalankan **unit tests** dan **integration tests** secara otomatis pada proyek **Node.js**.
4. Mahasiswa mampu mengintegrasikan Jenkins dengan **Git** untuk otomatisasi build dan testing.
5. Mahasiswa dapat memantau hasil pengujian otomatis dan menerima notifikasi setelah perubahan kode.

## 2. Alat dan Bahan
1. **Jenkins** (versi terbaru).
2. **Node.js** dan **npm** (untuk pengujian proyek Node.js).
3. **Git** (repository untuk version control).
4. **GitHub/GitLab/Bitbucket** (atau platform version control lainnya).
5. **Editor teks** seperti VSCode atau IDE lainnya.
6. Aplikasi web atau API sederhana berbasis **Node.js** yang berisi unit dan integration tests.

## 3. Persiapan

### 3.1 Instalasi Jenkins
- Unduh dan instal **Jenkins** dari [https://jenkins.io](https://jenkins.io) sesuai dengan sistem operasi yang digunakan.
- Setelah instalasi, buka Jenkins melalui browser dengan mengakses `http://localhost:8080`.

### 3.2 Instalasi Jenkins Plugin
- Masuk ke dashboard Jenkins, navigasi ke **Manage Jenkins** > **Manage Plugins**.
- Pastikan plugin **Git** dan **NodeJS** terinstal.
- Tambahkan juga plugin **Pipeline** dan **Email Extension** untuk pengaturan notifikasi.

### 3.3 Siapkan Repository Git
- Pastikan Anda memiliki repository Git (di GitHub, GitLab, atau Bitbucket) yang berisi proyek **Node.js** dengan unit dan integration tests.
- Jika belum memiliki, buat repository baru dan tambahkan proyek sederhana berbasis Node.js:

```bash
mkdir node-ci-cd
cd node-ci-cd
npm init -y
npm install --save-dev jest
```

Tambahkan file `app.js` untuk aplikasi sederhana:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = app;
```

Tambahkan file `app.test.js` untuk pengujian unit:

```javascript
const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with Hello, World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, World!');
  });
});
```

## 4. Kode untuk Diuji
Kode yang akan diuji adalah proyek **Node.js** yang telah Anda siapkan sebelumnya. Pastikan proyek memiliki:

1. Aplikasi **Node.js** sederhana dengan satu atau lebih route.
2. Unit tests yang menggunakan **Jest** untuk menguji aplikasi tersebut.
3. Proyek tersimpan di dalam repository Git yang dapat diakses.

## 5. Langkah-langkah Praktikum

### 5.1 Konfigurasi Proyek Node.js di Jenkins
1. **Buat Jenkins Job**:
   - Pada dashboard Jenkins, klik **New Item** dan pilih **Pipeline**.
   - Beri nama proyek, misalnya **Node CI/CD Pipeline** dan klik **OK**.

2. **Konfigurasi Source Control**:
   - Di bagian **Pipeline**, pilih **Pipeline script from SCM**.
   - Pilih **Git** sebagai SCM dan masukkan URL repository proyek Anda.
   - Tambahkan kredensial jika repository bersifat privat.

3. **Pipeline Script (Jenkinsfile)**:
   - Buat file `Jenkinsfile` di root folder proyek Anda untuk mendefinisikan pipeline. Berikut contoh `Jenkinsfile` sederhana:

   ```groovy
   pipeline {
       agent any

       environment {
           CI = 'true'
       }

       stages {
           stage('Checkout') {
               steps {
                   git branch: 'main', url: 'https://github.com/username/node-ci-cd.git'
               }
           }

           stage('Install Dependencies') {
               steps {
                   sh 'npm install'
               }
           }

           stage('Run Unit Tests') {
               steps {
                   sh 'npm test'
               }
           }

           stage('Build') {
               steps {
                   echo 'Building the application...'
                   // Tambahkan perintah build jika diperlukan
               }
           }

           stage('Deploy') {
               steps {
                   echo 'Deploying the application...'
                   // Tambahkan perintah deploy jika diperlukan
               }
           }
       }

       post {
           success {
               echo 'Pipeline finished successfully!'
           }
           failure {
               echo 'Pipeline failed!'
           }
       }
   }
   ```

4. **Jalankan Pipeline**:
   - Kembali ke Jenkins, klik **Build Now** untuk menjalankan pipeline.
   - Jenkins akan otomatis melakukan **checkout** dari repository, menginstall dependensi, menjalankan pengujian unit, dan menampilkan hasilnya di console output.

### 5.2 Integrasi Jenkins dengan Git

1. **Webhook Git**:
   - Buka repository GitHub/GitLab Anda dan tambahkan **Webhook** untuk Jenkins.
   - URL webhook biasanya dalam format `http://your-jenkins-url:8080/github-webhook/` untuk menghubungkan Jenkins dengan repository.

2. **Otomatisasi Build**:
   - Setiap kali Anda melakukan commit atau push ke branch `main`, Jenkins akan secara otomatis memicu pipeline dan menjalankan pengujian.

### 5.3 Notifikasi Hasil Pengujian

1. **Konfigurasi Email**:
   - Di Jenkins, buka **Manage Jenkins** > **Configure System** dan tambahkan konfigurasi SMTP untuk email.
   - Tambahkan plugin **Email Extension Plugin** untuk mengatur notifikasi email hasil pengujian.

2. **Pengaturan Notifikasi di Pipeline**:
   - Di dalam `Jenkinsfile`, tambahkan blok `post` untuk notifikasi email pada setiap tahap pipeline.

   ```groovy
   post {
       success {
           emailext subject: 'Build Succeeded', body: 'The build succeeded!', recipientProviders: [[$class: 'DevelopersRecipientProvider']]
       }
       failure {
           emailext subject: 'Build Failed', body: 'The build failed.', recipientProviders: [[$class: 'DevelopersRecipientProvider']]
       }
   }
   ```

## 6. Latihan

### 6.1 Menambah Tahap Integration Testing
- Tambahkan stage baru di pipeline untuk menjalankan **integration tests** selain unit tests.

### 6.2 Menambah Tahap Deploy
- Tambahkan script untuk otomatisasi deployment ke server staging setelah pengujian selesai.

### 6.3 Meningkatkan Pipeline
- Ubah pipeline agar mendukung branching, sehingga pengujian bisa berbeda antara branch `develop` dan `main`.

## 7. Kesimpulan
Dalam praktikum ini, mahasiswa belajar bagaimana membangun pipeline **CI/CD** menggunakan **Jenkins** untuk proyek **Node.js**. Mahasiswa juga memahami cara menjalankan pengujian otomatis, integrasi dengan **Git**, dan cara memantau hasil pengujian secara real-time dengan notifikasi.

<div style="page-break-before:always"></div>