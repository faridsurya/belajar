# **Modul Pertemuan 5: JavaScript Dasar**

### **Tujuan Pembelajaran**

Setelah menyelesaikan modul ini, mahasiswa diharapkan mampu:

* Memahami peran dan fungsi JavaScript sebagai bahasa pemrograman web.  
* Menerapkan JavaScript ke dalam dokumen HTML dengan cara yang benar.  
* Menulis kode JavaScript menggunakan sintaks dasar, termasuk variabel dan tipe data.  
* Mampu menggunakan operator aritmatika dan logika.  
* Membuat dan memanggil fungsi sederhana.  
* Menggunakan *browser console* untuk *debugging* kode.

### **Materi: Menghidupkan Web dengan JavaScript**

#### **1\. Pengenalan JavaScript**

**JavaScript** adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif. Jika HTML adalah kerangka dan CSS adalah tampilan, maka JavaScript adalah "otak" yang memungkinkan halaman untuk berinteraksi dengan pengguna, memanipulasi konten, dan berkomunikasi dengan server.

#### **2\. Cara Menambahkan JavaScript ke HTML**

Ada dua cara utama untuk menyertakan kode JavaScript di halaman web:

**Internal JavaScript**: Ditulis di dalam tag \<script\> yang ditempatkan di dalam dokumen HTML, biasanya di bagian \<head\> atau di akhir \<body\>.

```
<script>
  // Kode JavaScript di sini
</script>
```

**External JavaScript**: Kode ditulis dalam file terpisah dengan ekstensi .js dan dihubungkan ke dokumen HTML menggunakan tag \<script\> dengan atribut src. Ini adalah metode yang disarankan untuk menjaga kode tetap rapi.

```
<script src="path/ke/file_anda.js"></script>
```

**Praktik Terbaik**: Selalu tempatkan tag \<script\> (untuk file eksternal) tepat sebelum tag penutup \</body\>. Ini memastikan semua elemen HTML sudah dimuat sebelum skrip mencoba memanipulasinya.

#### **Sintaks Dasar JavaScript**

* **Variabel**: Digunakan untuk menyimpan data. Anda bisa mendeklarasikannya dengan let atau const.  
  * let: Variabel yang nilainya bisa diubah.  
  * const: Variabel yang nilainya tidak bisa diubah (*constant*).  
* **Tipe Data**: JavaScript memiliki beberapa tipe data dasar, seperti:  
  * String: Teks ("Halo, dunia\!")  
  * Number: Angka (10, 3.14)  
  * Boolean: Nilai benar atau salah (true, false)  
* **Operator**: Simbol yang melakukan operasi pada nilai.  
  * **Operator Aritmatika**: \+ (tambah), \- (kurang), \* (kali), / (bagi).  
  * **Operator Perbandingan**: \== (sama dengan), \!= (tidak sama dengan), \> (lebih besar dari), \< (lebih kecil dari).  
  * **Operator Logika**: && (AND), || (OR), \! (NOT).  
* **Fungsi**: Blok kode yang dirancang untuk melakukan tugas tertentu. Fungsi akan berjalan saat dipanggil.

```

function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3);
console.log(hasil); // Output: 8

```

#### **Debugging dengan Console**

Anda dapat menggunakan **Browser Developer Tools** (tekan F12) untuk melihat pesan kesalahan atau mencatat nilai variabel menggunakan perintah console.log(). Ini adalah alat yang sangat penting untuk menemukan dan memperbaiki kesalahan dalam kode Anda.

### **Latihan**

#### **Latihan 1: Variabel dan Tipe Data**

Buatlah variabel untuk menyimpan data berikut:

* Nama (string)  
* Umur (number)  
* Status (boolean \- true jika sudah menikah, false jika belum)  
* Tampilkan data tersebut di console

```javascript
let nama = "John Doe";
let umur = 25;
let statusMenikah = false;

console.log("Nama: " + nama);
console.log("Umur: " + umur);
console.log("Status Menikah: " + statusMenikah);
```

#### **Latihan 2: Operator dan Fungsi**

Buatlah fungsi untuk menghitung luas persegi panjang.

* Fungsi harus menerima dua parameter: panjang dan lebar  
* Gunakan operator matematika untuk menghitung luas  
* Kembalikan hasil perhitungan  
* Panggil fungsi dengan nilai yang berbeda dan tampilkan hasilnya

```javascript
function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}

let luas1 = hitungLuas(5, 8);
console.log("Luas persegi panjang dengan panjang 5 dan lebar 8 adalah: " + luas1);

let luas2 = hitungLuas(10, 3);
console.log("Luas persegi panjang dengan panjang 10 dan lebar 3 adalah: " + luas2);
```

#### Latihan 3: Manipulasi DOM Dasar

Buatlah program yang memungkinkan pengguna mengubah tampilan halaman:

* Buat tombol untuk mengubah warna latar belakang  
* Buat tombol untuk mengubah warna teks  
* Buat tombol untuk menambah/mengurangi ukuran font  
* Gunakan document.getElementById() atau document.querySelector()

```javascript
// Membuat tombol
let btnBackground = document.createElement("button");
btnBackground.textContent = "Ubah Latar Belakang";
btnBackground.onclick = function() {
    document.body.style.backgroundColor = "#e8f4fc";
};

let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Ubah Warna Teks";
btnTextColor.onclick = function() {
    document.body.style.color = "#2c3e50";
};

let btnIncreaseFont = document.createElement("button");
btnIncreaseFont.textContent = "Perbesar Font";
btnIncreaseFont.onclick = function() {
    let currentSize = parseInt(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 1) + "px";
};

// Menambahkan tombol ke output
let outputDiv = document.getElementById("output3");
outputDiv.appendChild(btnBackground);
outputDiv.appendChild(btnTextColor);
outputDiv.appendChild(btnIncreaseFont);
```

#### **Latihan 4: Event Handling**

Buatlah form input dengan validasi:

* Buat input field untuk nama dan email  
* Buat tombol submit  
* Validasi bahwa nama tidak boleh kosong  
* Validasi bahwa email harus mengandung karakter '@'  
* Tampilkan pesan error jika validasi gagal

```javascript
// Membuat form
let form = document.createElement("form");

// Input nama
let labelNama = document.createElement("label");
labelNama.textContent = "Nama: ";
let inputNama = document.createElement("input");
inputNama.type = "text";
inputNama.id = "nama";

// Input email
let labelEmail = document.createElement("label");
labelEmail.textContent = "Email: ";
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id = "email";

// Tombol submit
let btnSubmit = document.createElement("button");
btnSubmit.type = "button";
btnSubmit.textContent = "Submit";

// Area pesan error
let errorDiv = document.createElement("div");
errorDiv.id = "error-message";
errorDiv.style.color = "red";

// Menambahkan event listener
btnSubmit.onclick = function() {
    let nama = inputNama.value;
    let email = inputEmail.value;
    let errorMessage = "";
    
    if (nama === "") {
        errorMessage += "Nama tidak boleh kosong. ";
    }
    
    if (email.indexOf("@") === -1) {
        errorMessage += "Email harus mengandung @. ";
    }
    
    if (errorMessage !== "") {
        errorDiv.textContent = errorMessage;
    } else {
        errorDiv.textContent = "Form valid! Data berhasil dikirim.";
        errorDiv.style.color = "green";
    }
};

// Menambahkan elemen ke form
form.appendChild(labelNama);
form.appendChild(inputNama);
form.appendChild(document.createElement("br"));
form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(document.createElement("br"));
form.appendChild(btnSubmit);
form.appendChild(errorDiv);

// Menambahkan form ke output
let outputDiv = document.getElementById("output4");
outputDiv.appendChild(form);
```

#### Latihan 5: Aplikasi To-Do List

Buatlah aplikasi to-do list sederhana dengan fitur berikut:

* Input untuk menambah tugas baru  
* Tombol untuk menambahkan tugas ke daftar  
* Daftar tugas yang dapat dicentang ketika selesai  
* Tombol untuk menghapus tugas dari daftar  
* Penyimpanan data di localStorage

```javascript
// Membuat elemen input dan tombol
let inputTask = document.createElement("input");
inputTask.type = "text";
inputTask.placeholder = "Masukkan tugas baru...";
inputTask.id = "task-input";

let btnAdd = document.createElement("button");
btnAdd.textContent = "Tambah";
btnAdd.id = "add-task";

let taskList = document.createElement("ul");
taskList.id = "task-list";

// Menambahkan event listener
btnAdd.onclick = function() {
    let taskText = inputTask.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        inputTask.value = "";
        saveTasks();
    }
};

// Fungsi untuk menambahkan tugas
function addTask(taskText) {
    let li = document.createElement("li");
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            taskSpan.style.textDecoration = "line-through";
        } else {
            taskSpan.style.textDecoration = "none";
        }
        saveTasks();
    });
    
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.addEventListener("click", function() {
        li.remove();
        saveTasks();
    });
    
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Fungsi untuk menyimpan tugas ke localStorage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#task-list li").forEach(function(li) {
        let taskText = li.querySelector("span").textContent;
        let isCompleted = li.querySelector("input[type='checkbox']").checked;
        tasks.push({ text: taskText, completed: isCompleted });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Fungsi untuk memuat tugas dari localStorage
function loadTasks() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        let tasks = JSON.parse(savedTasks);
        tasks.forEach(function(task) {
            addTask(task.text);
            let lastAdded = taskList.lastChild;
            let checkbox = lastAdded.querySelector("input[type='checkbox']");
            checkbox.checked = task.completed;
            if (task.completed) {
                lastAdded.querySelector("span").style.textDecoration = "line-through";
            }
        });
    }
}

// Menambahkan elemen ke output
let outputDiv = document.getElementById("output5");
outputDiv.appendChild(inputTask);
outputDiv.appendChild(btnAdd);
outputDiv.appendChild(taskList);

// Memuat tugas yang disimpan
loadTasks();
```

### **Studi Kasus: Membuat Kalkulator Sederhana**

#### **Tugas**

Buat sebuah kalkulator sederhana yang dapat melakukan operasi penambahan, pengurangan, perkalian, dan pembagian.

1. **HTML**: Buat antarmuka dengan dua *input field* untuk angka, empat tombol untuk operasi (+, \-, \*, /), dan satu elemen untuk menampilkan hasil.  
2. **JavaScript**: Tulis kode yang mengambil nilai dari kedua *input field* saat sebuah tombol diklik, melakukan perhitungan yang sesuai, dan menampilkan hasilnya pada halaman.

### **Petunjuk Pengumpulan**

1. Buat folder baru di repositori GitLab Anda dengan nama pertemuan-5.  
2. Buat file index.html dan script.js di dalam folder ini.  
3. Perbarui file index.html utama di *root* repositori Anda dengan menambahkan tautan ke tugas ini.  
4. *Commit* dan *push* perubahan ke GitLab.

