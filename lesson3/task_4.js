/*
Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов,
а не 5:
x
xx
xxx
xxxx
xxxxx
*/
for (let i = 0, string = 'x'; i < 20; i++, string += 'x') {
    console.log(string)
}