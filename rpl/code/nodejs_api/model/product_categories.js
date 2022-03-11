//Class: ProductCategories
const con = require('../config/database');
module.exports = {
    getAll: function () {
        const dt = new Promise((resolve, reject) => {
            con.query("SELECT * FROM product_categories", (err, result, fields) => {
                if (err) throw err;
                resolve(result);
            });
        });
        return dt;
    },
    add: function () {

    },
    getOne: function () {

    },
    update: function () {

    },
    delete: function () {

    }
}