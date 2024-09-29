
#### Tujuan
- Memahami dasar-dasar pengujian UI menggunakan Selenium di Node.js.
- Membuat test case untuk menguji fitur login pada sebuah aplikasi web.
- Menggunakan locators seperti ID, XPath, dan CSS Selector untuk menemukan elemen UI.
- Melakukan tindakan pada elemen UI (klik, isi teks).
- Menjalankan test case otomatis menggunakan Selenium dengan Node.js.

#### Alat dan Bahan
1. **Laptop/PC** dengan sistem operasi Windows, macOS, atau Linux.
2. **Node.js** dan **npm** (Node Package Manager) terinstal.
3. **Web browser** yang mendukung Selenium (contoh: Chrome, Firefox).
4. **ChromeDriver** atau **GeckoDriver** untuk browser yang dipilih.
5. **Visual Studio Code** atau editor teks lainnya.
6. **Internet** untuk mengunduh dependensi.

#### Persiapan
1. **Install Selenium WebDriver dan Mocha**:
   - Buat direktori baru untuk proyek pengujian UI.
   - Buka terminal atau command prompt, dan jalankan perintah berikut untuk menginisialisasi proyek Node.js:

   ```bash
   npm init -y
   ```

   - Install Selenium WebDriver dan Mocha:

   ```bash
   npm install selenium-webdriver mocha chai --save-dev
   ```

2. **Install ChromeDriver atau GeckoDriver**:
   - Jika menggunakan Chrome:
     - Unduh [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) yang sesuai dengan versi Chrome yang terinstal.
     - Ekstrak dan letakkan executable `chromedriver` ke dalam folder proyek atau di path sistem.
   - Jika menggunakan Firefox:
     - Unduh [GeckoDriver](https://github.com/mozilla/geckodriver/releases) dan ikuti langkah yang sama seperti Chrome.

3. **Siapkan Struktur Proyek**:
   ```
   selenium-ui-test/
   ├── node_modules/
   ├── test/
   │   └── ui.test.js
   ├── package.json
   └── README.md
   ```

#### Kode untuk Diuji
Kita akan menguji halaman login sederhana. Berikut adalah contoh HTML dasar yang akan kita gunakan untuk pengujian:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>
    <h2>Login</h2>
    <form id="loginForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <br><br>
        <button type="submit" id="loginButton">Login</button>
    </form>
</body>
</html>
```

#### Langkah-langkah Praktikum

1. **Membuat Test Case untuk Halaman Login:**
   - Buat file `ui.test.js` di dalam folder `test/`.
   - Di dalam file `ui.test.js`, tuliskan test case untuk menguji fitur login menggunakan Selenium.

2. **Kode Pengujian dengan Selenium dan Mocha:**

   ```javascript
   const { Builder, By, Key, until } = require('selenium-webdriver');
   const { expect } = require('chai');

   describe('UI Testing using Selenium', function() {
       this.timeout(30000); // Set timeout for Mocha tests

       let driver;

       // Inisialisasi WebDriver sebelum menjalankan test case
       before(async function() {
           driver = await new Builder().forBrowser('chrome').build(); // Bisa diganti 'firefox' untuk Firefox
       });

       // Tutup WebDriver setelah semua test selesai
       after(async function() {
           await driver.quit();
       });

       it('should load the login page', async function() {
           await driver.get('file://path/to/your/login.html'); // Ubah path sesuai lokasi file login.html
           const title = await driver.getTitle();
           expect(title).to.equal('Login Page');
       });

       it('should input username and password', async function() {
           await driver.findElement(By.id('username')).sendKeys('testuser');
           await driver.findElement(By.id('password')).sendKeys('password123');
           const usernameValue = await driver.findElement(By.id('username')).getAttribute('value');
           const passwordValue = await driver.findElement(By.id('password')).getAttribute('value');
           expect(usernameValue).to.equal('testuser');
           expect(passwordValue).to.equal('password123');
       });

       it('should click the login button', async function() {
           await driver.findElement(By.id('loginButton')).click();
           // Lakukan tindakan lebih lanjut, seperti validasi login (ini disimulasikan di sini)
           // Misal: validasi pesan error jika login gagal atau redirect halaman jika berhasil
       });
   });
   ```

3. **Menjalankan Test Case**:
   - Untuk menjalankan pengujian, buka terminal dan jalankan perintah berikut di direktori proyek:

   ```bash
   npx mocha test/ui.test.js
   ```

   Pastikan `ChromeDriver` atau `GeckoDriver` telah tersedia di PATH, sehingga Selenium WebDriver bisa berinteraksi dengan browser.

#### Latihan
1. **Menambah Validasi pada Login Gagal**:
   - Tambahkan test case yang memvalidasi login gagal jika username atau password salah. Simulasikan login gagal dengan memeriksa keberadaan pesan error di halaman setelah klik tombol login.

2. **Penggunaan CSS Selector dan XPath**:
   - Buat test case tambahan yang menggunakan **CSS Selector** dan **XPath** untuk menemukan elemen login dan mengisi data.

   ```javascript
   await driver.findElement(By.css('#username')).sendKeys('testuser');
   await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys('password123');
   ```

3. **Melakukan Validasi Visual**:
   - Tambahkan pengujian untuk memvalidasi apakah elemen seperti tombol login dan field input terlihat di layar menggunakan:

   ```javascript
   const isDisplayed = await driver.findElement(By.id('loginButton')).isDisplayed();
   expect(isDisplayed).to.be.true;
   ```

### Kesimpulan
Dalam modul praktikum ini, mahasiswa belajar melakukan **UI Testing** menggunakan **Selenium** dengan Node.js. Mereka menguji form login sederhana, menemukan elemen menggunakan **locators** seperti ID, CSS Selector, dan XPath, lalu melakukan tindakan pada elemen seperti mengisi teks dan mengklik tombol.

<div style="page-break-before:always"></div>