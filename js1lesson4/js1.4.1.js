/*
1. Написать функцию, преобразующую число в объект. 
Передавая на вход число в диапазоне [0, 999],мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве firstDigit)
- десятки (в свойстве secondDigit)
- сотни (в свойстве thirdDigit)
Например, для числа 45 мы должны получить следующий объект:
{
 firstDigit: 5,
 secondDigit: 4,
 thirdDigit: 0,
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function NumAsObj(num) {
    let obj = {};

    if (num.length <= 3 && Number.isInteger(+num) && +num >= 0 && num !== '') {
        obj.firstDigit = +num.charAt(num.length - 1);
        obj.secondDigit = +num.charAt(num.length - 2);
        obj.thirdDigit = +num.charAt(num.length - 3);
    } else {
        console.log('Invalid value');
    }
    
    return obj;
}

let num = prompt('Enter number from 0 to 999:', 45);
console.log(NumAsObj(num));