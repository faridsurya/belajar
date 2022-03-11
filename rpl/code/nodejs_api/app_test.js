const products = require("./model/products");
let postDataTest = {
    name: "Product 5",
    id_category: 1,
    price: 5000
};

//call function for test
getAll();

//getAll
function getAll()
{
    products.getAll().then(val=>{
        console.log(val);
    });
}

//get by category
function getByCategory()
{
    products.id_category = 2;
    products.getAll().then(val=>{
        console.log(val);
    });
}
//add data
function add()
{
    products.name = postDataTest.name;
    products.id_category = postDataTest.id_category;
    products.price = postDataTest.price;
    products.add().then(val=>{
        console.log(val);
    });
}
//edit data
function update()
{
    products.id_product = 2;
    products.name = postDataTest.name;
    products.id_category = postDataTest.id_category;
    products.price = postDataTest.price;
    products.update().then(val=>{
        console.log(val);
    });
}