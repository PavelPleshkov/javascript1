/*
3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
50%, можете использовать метод map https://mzl.la/2ZZohun :
*/
'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let discount = prompt('Enter discount in %', 50);

let saleProducts = products.map(function(products){
    let newProduct = {};

    newProduct.id = products.id;
    newProduct.price = Math.round(products.price * (100 - discount) / 100);

    return newProduct;
});

console.log(products, saleProducts);

// дополнительно
// for (let i = 0; i < saleProducts.length; i++) {
//     document.write('товар ' + saleProducts[i].id + ' со скидкой ' + discount + ' % стоит ' + saleProducts[i].price + '<br>');
// }

