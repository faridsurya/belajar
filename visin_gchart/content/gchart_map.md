# Visualisasi Data Lokasi Menggunakan OpenLayer

Kegiatan belajar ini adalah panduan langkah demi langkah untuk membuat visualisasi data gempa bumi dengan OpenLayers, HTML, CSS, dan JavaScript. Dalam kegiatan ini, kita membuat sebuah peta yang menampilkan lokasi gempa bumi di Indonesia dengan menggunakan penanda (marker) berdasarkan data dari file CSV. Marker-marker tersebut memberikan informasi tentang kedalaman dan magnitudo gempa bumi, sehingga memungkinkan kita untuk memahami dan menganalisis pola dan distribusi gempa di wilayah Indonesia.

## Teknologi
Berikut adalah daftar teknologi yang digunakan dalam kegiatan belajar ini:

1. OpenLayers: Framework JavaScript open-source yang digunakan untuk memanipulasi dan menampilkan peta interaktif di browser.
2. HTML: Bahasa markup yang digunakan untuk struktur dan konten halaman web.
3. CSS: Bahasa stylesheet yang digunakan untuk mengatur tampilan dan gaya halaman web.
4. JavaScript: Bahasa pemrograman yang digunakan untuk menambahkan logika dan interaksi ke dalam halaman web.
5. CSV (Comma-Separated Values): Format file yang digunakan untuk menyimpan data tabular dalam bentuk teks dengan kolom yang dipisahkan oleh koma.

## Dataset

[Data Gempabumi di Indoensia](https://www.kaggle.com/datasets/kekavigi/earthquakes-in-indonesia)


## Langkah-Langkah Pembuatan


Berikut adalah panduan langkah demi langkah untuk membuat visualisasi data menggunakan OpenLayers, HTML, CSS, dan JavaScript, yang menunjukkan lokasi gempa bumi dengan menempatkan penanda pada peta.

Langkah 1: Mempersiapkan Proyek
- Buat folder proyek baru dan beri nama sesuai keinginan Anda.
- Buat file HTML baru di dalam folder proyek dan beri nama misalnya `index.html`.
- Buat file CSS baru di dalam folder proyek dan beri nama misalnya `style.css`.
- Buat file JavaScript baru di dalam folder proyek dan beri nama misalnya `script.js`.

Langkah 2: Menyiapkan Struktur HTML
Buka file `index.html` dan tambahkan kode berikut:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Visualisasi Gempa Bumi</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div id="map"></div>

    <script src="https://cdn.jsdelivr.net/npm/ol@6.5.0/dist/ol.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

Langkah 3: Menyiapkan CSS
Buka file `style.css` dan tambahkan kode berikut:

```css
body {
    margin: 0;
    padding: 0;
}

#map {
    width: 100%;
    height: 500px;
}
```

Langkah 4: Menyiapkan JavaScript
Buka file `script.js` dan tambahkan kode berikut:

```javascript
// Inisialisasi peta
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 2
    })
});

// Memuat data gempa dari file CSV
fetch('earthquake.csv')
    .then(response => response.text())
    .then(data => {
        // Parsing data CSV menjadi array objek
        var features = [];
        var rows = data.trim().split('\n');
        for (var i = 1; i < rows.length; i++) {
            var row = rows[i].split(',');
            var lon = parseFloat(row[1]);
            var lat = parseFloat(row[0]);
            var depth = parseFloat(row[2]);
            var mag = parseFloat(row[3]);

            // Membuat fitur marker untuk setiap gempa
            var marker = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
                depth: depth,
                mag: mag
            });
            features.push(marker);
        }

        // Membuat layer vector untuk menampilkan marker
        var vectorSource = new ol.source.Vector({
            features: features
        });
        var vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });
        map.addLayer(vectorLayer);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

Langkah 5: Menyiapkan Data Gempa
- Letakkan file `earthquake.csv` dalam folder proyek.
- Pastikan file CSV berisi data gempa dengan atribut-atribut yang tepat (lat, lon, depth, mag).

Langkah 

6: Menjalankan Aplikasi
- Buka file `index.html` di browser web.
- Peta akan ditampilkan dengan marker yang menunjukkan lokasi gempa berdasarkan data yang ada dalam file CSV.

Panduan ini memberikan kerangka dasar untuk membuat visualisasi peta dengan OpenLayers dan menempatkan marker pada peta menggunakan data dari file CSV. Anda dapat memodifikasi dan mengembangkan lebih lanjut kode tersebut sesuai kebutuhan Anda.
