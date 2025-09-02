# Visualisasi Data Menggunakan Google Chart

Dalam bagian ini, kita akan belajar cara membuat grafik menggunakan pustaka Google Charts dengan data sampel yang disediakan oleh Google.

## Langkah 1: Buat File HTML

Buat file HTML baru dan tambahkan kode berikut ke bagian head file untuk menyertakan pustaka Google Charts:

```html
<head>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Tugas', 'Jam per Hari'],
        ['Kerja',     11],
        ['Makan',      2],
        ['Berpergian',  2],
        ['Menonton TV', 2],
        ['Tidur',    7]
      ]);

      var options = {
        title: 'Aktivitas Harian Saya'
      };

      var chart = new google.visualization.PieChart(document.getElementById('chart'));

      chart.draw(data, options);
    }
  </script>
</head>

```
Pada kode ini, kita menyertakan pustaka Google Charts menggunakan tag <script>. Kita juga memuat paket corechart dan mengatur fungsi callback untuk dieksekusi saat pustaka selesai dimuat. Fungsi drawChart() membuat grafik lingkaran sederhana menggunakan data sampel yang disediakan oleh Google.

## Langkah 2: Buat Container untuk Grafik

Di bagian <body> file HTML, buat sebuah div dengan atribut id "chart". Inilah tempat grafik akan dirender:

```html
<body>
  <div id="chart"></div>
</body>
```
## Langkah 3: Pratinjau Grafik

Simpan file HTML dan buka di web browser. Anda akan melihat grafik lingkaran dengan judul "Aktivitas Harian Saya" ditampilkan dalam kontainer yang dibuat pada Langkah 2.

Selamat, Anda berhasil membuat grafik menggunakan Google Charts!
  
