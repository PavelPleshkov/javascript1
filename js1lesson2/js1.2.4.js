/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций
с двумя параметрами. Обязательно использовать оператор return.
*/

'use strict';

alert('Сумма введенных чисел:\n' + sum(+prompt('Введите 1-ое число:', 5), +prompt('Введите 2-ое число:', 2)));
alert('Произведение введенных чисел:\n' + multiply(+prompt('Введите 1-ое число:', 5), +prompt('Введите 2-ое число:', 2)));
alert('Частное от деления:\n' + division(+prompt('Введите 1-ое число:', 5), +prompt('Введите 2-ое число:', 2)));
alert('Разность:\n' + subtraction(+prompt('Введите 1-ое число:', 5), +prompt('Введите 2-ое число:', 2)));

function sum (num1, num2) {
    return num1 + num2;
}

function multiply (num3, num4) {
    return num3 * num4;
}

function division (num5, num6) {
    return num5 / num6;
}

function subtraction (num7, num8) {
    return num7 - num8;
}
