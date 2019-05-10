/*
1. С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, 
чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/
'use strict';

// for (let i = 0; i <= 10; i++) {
//     if (i == 0) {
//         console.log(i + ' - это ноль');
//     } else if (i % 2 != 0) {
//         console.log(i + ' - нечетное число')
//     } else {
//         console.log(i + ' - четное число')
//     }
// }

// Решение через функцию
for (let i = 0; i <= 10; i++) {
    console.log(i + setPhraze(i));
}

/**
 * Функция выводит фразу в зависимости от значения параметра,
 * переданного в аргумент num
 *
 * @param {number} num
 * @returns {string} phraze
 */
function setPhraze(num) {
    let phraze = '';
    if (num == 0) {
        return phraze = ' - это ноль';
    } else if (num % 2 != 0) {
        return phraze = ' - нечетное число';
    } else {
        return phraze = ' - четное число';
    }
}