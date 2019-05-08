/*
4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене, можете использовать метод sort https://mzl.la/2Y79hbZ
*/

'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsWithPhoto = products.filter(function(products) {
    // Игорь, решил задачу, но не понял как я это сделал.
    // Как я понял, что бы проверить условие есть ли свойство photos в каждом объекте
    // нужно:
    // 1. зайти в Объект - указать products,
    // 2. зайти в каждый элемент массива - указать [ ],
    // 3. указать свойство photos

    // т.е. написать products[i].photos

    // но сработало products.photos без указания элемента массива []
    // не понял как это работает! Объясните, пожалуйста!
    if (products.photos) {
        let newProduct = {};

        newProduct.id = products.id;
        newProduct.price = products.price;
        newProduct.photos = products.photos;

        return newProduct;
    }
});

console.log(products, productsWithPhoto);

console.log(products.sort(function(a, b) {
    if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
}));
