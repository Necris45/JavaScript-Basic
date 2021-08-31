/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

function sieve(n){
    let S = [];
    S[1] = 0; // 1 - не простое число
    // заполняем решето единицами
    for(let k=2; k<=n; k++)
        S[k]=1;

    for(let k=2; k*k<=n; k++){
        // если k - простое (не вычеркнуто)
        if(S[k]===1){
            // то вычеркнем кратные k
            for(let l=k*k; l<=n; l+=k) {
                S[l]=0;
            }
        }
    }
    return S;
}

let S = sieve(100)
let i = 0
while (i < 100) {
    if (S[i] === 1) {
        console.log(i)
    }
    i++
}