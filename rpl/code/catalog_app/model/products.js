const con = require('../config/database');
module.exports = {
    id_product: null,
    name: null,
    id_category: 0,
    price: 0,
    getAll : function()
    {
        let result = new Promise((resolve, reject)=>{
            con.query("SELECT * FROM products", (err, result, fields) => {
                if (err) throw err;
                resolve(result);
            });
        });
        return result;
    }
}