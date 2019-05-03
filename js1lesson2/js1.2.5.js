/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции (использовать switch) 
выполнить одну из арифметических операций (использовать функции из задания 4)
и вернуть полученное значение.
*/

'use strict';

do {
    console.log(mathOperation());
} while (confirm('Заново?'));

/*
Здравствуйте, Игорь!
Подскажите, пожалуйста, в описании функции для типа @param нужно указывать
значение, котрое задается согласно программе, например при prompt - это первоначально string
или тип, который логически должен человек или программа воспринимать как исходный аргумент,
здесь это будет уже number???

Т.е. для нашей функции как правильно? 
@param {string} arg1
или
@param {number} arg1

Спасибо!
*/

/**
 * Функция - простой калькулятор. 
 * Принимает два числа и операцию над ними,
 * выдает сообщение со значением результата операции в окно 
 * и возвращает результат в консоль 
 *
 * @param {any} arg1 значение первого числа
 * @param {any} arg2 значение второго числа
 * @param {string} operation математическая операция + - * /
 */
function mathOperation(arg1, arg2, operation) {
    arg1 = prompt('Введите 1-ое число:', '');
    arg2 = prompt('Введите 2-ое число:', '');

    // Условия для исключения ввода пробела/пробелов ' '/'   ', букв, пустой строки
    // и для возможности ввести значение '0', 
    //
    // т.к. условие +('') == 0  --> true, а parseFloat('') == 0 --> false
    //
    // при использовании унарного + для преобразования, пустая строка и пробелы
    // преобразуются в 0 и расчет все равно выполняется
    //
    // и наоборот для 0      parseFloat(arg1) == 0 --> true
    if ((+arg1 || parseFloat(arg1) == 0) && (+arg2 || parseFloat(arg2) == 0)) {
        // arg1 = parseFloat(arg1);
        // arg2 = parseFloat(arg2);
        arg1 = +arg1;
        arg2 = +arg2;
        
        operation = prompt(`Введите математическую операцию (+, -, *, /) для чисел ${arg1} и ${arg2}:`, '+');
        switch (operation) {
            case '+':
                alert(`Результат вычислений:\n ${arg1} ${operation} ${arg2} = ${sum(arg1, arg2)}`);
                return sum(arg1, arg2);
                break;
            case '-':
                alert(`Результат вычислений:\n ${arg1} ${operation} ${arg2} = ${subtraction(arg1, arg2)}`);
                return subtraction(arg1, arg2);
                break;
            case '*':
                alert(`Результат вычислений:\n ${arg1} ${operation} ${arg2} = ${multiply(arg1, arg2)}`);
                return multiply(arg1, arg2);
                break;
            case '/':
                alert(`Результат вычислений:\n ${arg1} ${operation} ${arg2} = ${division(arg1, arg2)}`);
                return division(arg1, arg2);
                break;

            default:
                if (confirm('Вы ввели недопустимую операцию!\n\nНачнете сначала?')) {
                    mathOperation();
                }
        }

    } else {
        if (confirm('Необходимо вводить числа!\n\nПовторите попытку?')) {
            mathOperation();
        } 
    }
}

/**
 *Функция для сложения двух чисел
 *
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns сумма чисел
 */
function sum (num1, num2) {
    return num1 + num2;
}

/**
 *Функция для умножения двух чисел
 *
 * @param {number} num3 первое число
 * @param {number} num4 второе число
 * @returns произведение чисел
 */
function multiply (num3, num4) {
    return num3 * num4;
}

/**
 *Функция для деления 1-го числа на 2-ое
 *
 * @param {number} num5 первое число
 * @param {number} num6 второе число
 * @returns 
 */
function division (num5, num6) {
    return num5 / num6;
}

/**
 *Функция для вычитания из 1-го числа 2-го
 *
 * @param {number} num7 первое число
 * @param {number} num8 второе число
 * @returns разность num7 - num8
 */
function subtraction (num7, num8) {
    return num7 - num8;
}