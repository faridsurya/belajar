//mengambil class Product
const products = require("./model/products");
//mengambil class ProductCategories
const productCategories = require("./model/product_categories");
//mengambil bodyParser untuk memperoleh nilai yang dikirim menggunakan metode POST
const bodyParser = require("body-parser");
//menyertakan library express js
const express = require("express");
//membuat aplikasi express js
const app = express();
//menentukan port
const port = 3000;

//sertakan pug view engine untuk membuat komponen view
app.set("view engine", "pug");
//menggunakan body parser pada applikasi
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mendefinisikan alamat untuk menampilkan formulir penambahan produk baru menggunakan metode GET
app.get("/addproduct", (req, res) => {
  productCategories.getAll().then((val) => {
    res.render("add_product", { categories: val });
  });
});

//mengambil nilai yang dikirim dari formulir menggunakan metode POST
app.post("/product", (req, res) => {
  //mendefinisikan atribut-atribut class Products
  products.name = req.body.name;
  products.id_category = req.body.id_category;
  products.price = req.body.price;
  //mengeksekusi method add() pada class Products untuk penambahan produk baru
  products
    .add()
    .then((data) => {
      //alternatif 1: mengarahkan halaman ke success_page jika data berhasil ditambahkan
      res.render("success_page");
    })
    .catch((err) => {
      //alternatif 2: mengarahkan ke halaman penambahan produk baru jika gagal menyimpan data
      res.redirect("/addproduct");
    });
});
//membuat server agar aplikasi dapat berjalan di web browser dengan alamat: localhost:3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
