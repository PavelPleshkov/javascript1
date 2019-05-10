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
    // Игорь, решил задачу, но не понял как программа работает:
    // 
    // 1. Какие аргументы нужно передавать в функции в методах массивов?
    // 
    // Согласно MDN вроде нужно передавать несколько аргументов
    // 
    // 2. Обращение к свойствам объектов в массиве
    // 
    // products - это массив объектов;
    // products[i] - это элемент массива объектов, т.е. объект - {}
    // т.е. что бы обратиться к свойству объекта в этом случае нужна запись
    // products[i].id, products[i].price или products[i].photos,
    // но в теле функции почему-то правильным оказывается обращение
    // без квадратных скобок, т.е. products.id, products.price и products.photos,
    // а в условии if ('photos' in products) в качестве объекта products вместо products[i]
    // и к тому же при products[i] нужно было бы добавлять цикл со счетчиком i
    // 
    // 3. Правильно ли было бы проверить условие if (products.photos) {...}?
    // 
    // Тоже работает на данной задаче, но тоже не понятно почему не if (products[i].photos) {...}
    // 
    // Не понял как это работает! Объясните, пожалуйста!

    if ('photos' in products) {
        let newProduct = {};

        newProduct.id = products.id;
        newProduct.price = products.price;
        newProduct.photos = products.photos;

        return newProduct;
    }
});

console.log(products, productsWithPhoto);

// Не совсем понял как работает функция в методе sort
// и почему если применение метода в конце программы
// уже в filter в начале оказывается отсортированный массив?

console.log(products.sort(function(a, b) {
    if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
}));
