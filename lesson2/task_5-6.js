/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */

function addition(a, b) {
    return (a + b)
}

function subtraction(a, b) {
    return (a - b)
}

function multiplication(a, b) {
    return (a * b)
}

function division(a, b) {
    return (a / b)
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'Сумма':
        case 'сумма':
        case '+':
            return addition(arg1, arg2)
        case 'Разность':
        case 'разность':
        case '-':
            return subtraction(arg1, arg2)
        case 'Умножение':
        case 'умножение':
        case '*':
            return multiplication(arg1, arg2)
        case 'Деление':
        case 'деление':
        case '/':
            return division(arg1, arg2)
    }
}

console.log(mathOperation(5, 3, '+'))
console.log(mathOperation(5, 3, '-'))
console.log(mathOperation(7, 3, '*'))
console.log(mathOperation(9, 3, '/'))
