# Menampilkan data Dari File Google Spreadsheet

### Langkah 1: Mempersiapkan Data

1.  Buka Google Spreadsheet yang berisi data yang ingin Anda tampilkan pada grafik.
2.  Pastikan data Anda diatur dengan benar dan terstruktur dengan baik. Pastikan data Anda berada dalam satu lembar kerja atau satu worksheet, dan kolom pertama harus berisi judul atau label untuk setiap kolom.
3.  Salin ID spreadsheet dari URL Google Spreadsheet Anda. ID adalah bagian dari URL setelah `https://docs.google.com/spreadsheets/d/` dan sebelum `/edit`. Contohnya seperti ini: `1oK-Yk4rKfPzzfKfKrBkLrH_rYz1uOU5vUdM4-eqA2F8`

### Langkah 2: Membuat Kode HTML

1.  Buat file HTML baru dengan menggunakan editor teks seperti Notepad atau Sublime Text.
2.  Tambahkan kode HTML dasar dan simpan file tersebut dengan nama `index.html`.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Google Chart: Memuat Data dari Google Spreadsheet</title>
</head>
<body>
  <div id="chart"></div>

  <!-- Masukkan kode JavaScript Anda di sini -->
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">
    // Masukkan kode JavaScript Anda di sini
  </script>
</body>
</html>

```

3.  Tambahkan `div` dengan ID `chart` pada file HTML Anda. Ini akan menjadi tempat untuk menampilkan grafik.

### Langkah 3: Memuat Pustaka Google Chart

1.  Untuk memuat Google Chart, kita perlu menambahkan kode JavaScript untuk memuat pustaka Google Chart.
2.  Tambahkan kode berikut di antara tag `<script>` di bagian bawah file HTML Anda:

```javascript
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

```

### Langkah 4: Memuat Data dari Google Spreadsheet

1.  Untuk memuat data dari Google Spreadsheet, kita menggunakan `google.visualization.Query`.
2.  Tambahkan kode berikut di bawah kode pemuatan pustaka Google Chart:

```javascript
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var queryString = encodeURIComponent('SELECT *');
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/gviz/tq?tq=' + queryString);

  query.send(function(response) {
    if (response.isError()) {
      console.log('Terjadi kesalahan saat memuat data: ' + response.getMessage());
      return;
    }

    var data = response.getDataTable();

    var options = {
      title: 'Data Saya'
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart'));

    chart.draw(data, options);
  });
}

```

3.  Di dalam fungsi `drawChart()`, kita membuat objek `query` yang memuat data dari Google Spreadsheet dengan menggunakan ID spreadsheet dan kueri Query Language.
4.  Jika data berhasil dimuat, objek `response` akan berisi data dalam format JSON. Kita menggunakan `getDataTable()` untuk mengonversi data tersebut menjadi format tabel.
5.  Setelah data berhasil diambil, kita dapat menentukan opsi grafik seperti judul, skala, warna, dll. di dalam objek `options`.
6.  Akhirnya, kita membuat objek grafik dan memasukkannya ke dalam `div` dengan ID `chart` di dalam HTML. Untuk contoh ini, kita menggunakan grafik garis (`LineChart`), namun Anda dapat memilih jenis grafik yang lain.

