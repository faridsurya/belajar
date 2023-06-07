# Bagian A: Membuat Dashboard Menggunakan HTML, JavaScript, Google Chart, dan Google Spreadsheet

## Langkah 1: Menyiapkan file HTML
Buat file HTML baru dengan nama "dashboard.html". Tambahkan kode berikut sebagai struktur dasar HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <script src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="dashboard.js"></script>
</head>
<body>
    <h1>Dashboard</h1>

    <div id="chart1"></div>
    <div id="chart2"></div>
    <!-- Tambahkan lebih banyak elemen div untuk grafik lainnya -->
</body>
</html>
```

## Langkah 2: Menyiapkan file JavaScript
Buat file JavaScript baru dengan nama "dashboard.js". Tambahkan kode berikut untuk mengambil data dari Google Spreadsheet dan membuat grafik menggunakan Google Charts:

```javascript
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(getSpreadsheetData);

function getSpreadsheetData() {
    var spreadsheetId = 'ID_SPREADSHEET_ANDA';
    var range = 'Sheet1!A1:B5';

    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range);
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        console.error('Error: ' + response.getMessage());
        return;
    }

    var data = response.getDataTable();
    drawCharts(data);
}

function drawCharts(data) {
    var options = {
        title: 'Judul Grafik',
        width: 400,
        height: 300
    };

    var chart1 = new google.visualization.ColumnChart(document.getElementById('chart1'));
    chart1.draw(data, options);

    var chart2 = new google.visualization.PieChart(document.getElementById('chart2'));
    chart2.draw(data, options);

    // Tambahkan jenis grafik lain dan elemen div untuk grafik lainnya
}
```
Gantilah 'ID_SPREADSHEET_ANDA' dengan ID sebenarnya dari Google Spreadsheet Anda. Sesuaikan juga range ('Sheet1!A1:B5') sesuai dengan data Anda.

## Langkah 3: Muat Dashboard
Buka file "dashboard.html" di browser web. Kode JavaScript akan memuat library Google Charts, mengambil data dari Google Spreadsheet yang ditentukan, dan menampilkan grafik di dalam elemen div yang sesuai.

# Bagian B: Modifikasi Desain UI Menggunakan Bootstrap

## Langkah 1: Menambahkan Bootstrap ke Proyek Anda
Buka file "dashboard.html" di editor teks Anda.
Tambahkan kode berikut di bagian <head> untuk memuat CSS dan JavaScript dari Bootstrap:
  
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
```

## Langkah 2: Mengubah Struktur HTML
Ganti `<h1>Dashboard</h1>` dengan kode berikut untuk membuat navbar dengan judul:

  ```html
<nav class="navbar navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1">Dashboard</span>
</nav>
```
  
Ganti `<div id="chart1"></div>` dan elemen div lainnya dengan kode berikut untuk membuat grid 2x2 menggunakan Bootstrap:

```html
<div class="container mt-4">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">Grafik 1</div>
                <div class="card-body">
                    <div id="chart1"></div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">Grafik 2</div>
                <div class="card-body">
                    <div id="chart2"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">Grafik 3</div>
                <div class="card-body">
                    <div id="chart3"></div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">Grafik 4</div>
                <div class="card-body">
                    <div id="chart4"></div>
                </div>
            </div>
        </div>
    </div>
</div>
```
  
## Langkah 3: Menyesuaikan CSS
Tambahkan sedikit CSS ke file "dashboard.html" untuk mengatur margin atas dan padding elemen:

  ```html
<style>
    body {
        margin-top: 40px;
        padding: 0 20px;
    }
</style>
  ```
  
## Langkah 4: Jalankan Aplikasi Dashboard
Buka file "dashboard.html" di browser Anda. Aplikasi dashboard akan memuat tampilan yang diperbarui dengan struktur grid 2x2 menggunakan Bootstrap. Setiap grafik akan ditampilkan dalam elemen div dengan judul yang sesuai.

Dengan langkah-langkah ini, Anda dapat menggunakan Bootstrap untuk memodifikasi desain UI aplikasi dashboard Anda, termasuk menambahkan navbar dengan judul dan mengatur tata letak grafik dalam grid 2x2.

# Bagian B: Menerbitkan Aplikasi Dashboard di GitHub Pages

## Langkah 1: Buat repositori GitHub
- Buat repositori baru di GitHub. Beri nama sesuai preferensi Anda.
- Inisialisasi repositori dengan file README dan tambahkan file `.gitignore` jika diperlukan.

## Langkah 2: Unggah file Anda ke repositori
Commit dan unggah file "dashboard.html" dan "dashboard.js" ke repositori GitHub Anda.

## Langkah 3: Aktifkan GitHub Pages
- Buka tab "Settings" repositori GitHub Anda.
- Gulir ke bawah ke bagian "GitHub Pages".
- Pada dropdown "Source", pilih branch yang berisi file-file dashboard Anda.
- Setelah dipilih, GitHub Pages akan menghasilkan URL di mana aplikasi dashboard Anda akan dipublikasikan.

## Langkah 4: Akses Aplikasi Dashboard Anda
Kunjungi URL yang dihasilkan untuk aplikasi dashboard GitHub Pages Anda.
Sekarang Anda dapat mengakses dan berinteraksi dengan dashboard Anda melalui URL tersebut.
