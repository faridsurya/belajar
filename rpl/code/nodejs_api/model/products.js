//Class: Products
const con = require('../config/database');
module.exports = {
    id_product: null,
    name: null,
    id_category: 0,
    price: 0,
    getAll : function()
    {
        const dt = new Promise((resolve, reject)=>{
            con.query("SELECT * FROM products", (err, result, fields) => {
                if (err) throw err;
                resolve(result);
            });
        });
        return dt;
    },
    getByCategory: function()
    {
        const dt = new Promise((resolve, reject)=>{
            con.query("SELECT * FROM products WHERE id_category = '"+this.id_category+"'", (err, result, fields) => {
                if (err) throw err;
                resolve(result);
            });
        });
        return dt;
    },
    getOne  : function(id) {
        const dt = new Promise((resolve, reject)=>{
            con.query("SELECT * FROM products WHERE id_product = '"+id+"'", (err, result, fields) => {
                if (err) throw err;
                resolve(result[0]);
            });
        });
        return dt;
    },
    add: function(){
        let name = "'"+this.name+"'";
        let id_category = this.id_category;
        let price = this.price;
        let values = [name, id_category, price];
        const dt = new Promise((resolve, reject)=>{
            con.query("INSERT INTO products (name, id_category, price) VALUES ("+values.join(",")+")", (err, result, fields) => {
                if (err) throw err;
                resolve(result);
            });
        });
        return dt;
    },
    update : function(){
        const dt = new Promise((resolve, reject)=>{
            con.query("UPDATE products SET name = '"+this.name+"', id_category="+this.id_category+", price = "+this.price+" WHERE id_product = "+this.id_product+"", (err, result, fields) => {
                if (err) throw err;
                resolve(result);
            });
        });
        return dt;
    },
    delete : function(){
        const dt = new Promise((resolve, reject)=>{
            con.query("DELETE products WHERE id_product="+this.id_product+"", (err, result, fields) => {
                if (err) throw err;
                resolve(result);
            });
        });
        return dt;
    }
}