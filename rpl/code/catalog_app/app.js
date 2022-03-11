const products = require('./model/products');


function getProducts()
{
    products.getAll().then(val=>{
        console.log(val);
    }).catch(err=>{
        console.log('error');
    })
}

getProducts();