// Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

// fixando - 1

// const a = 9
// const b = 5
            
// let adição = a + b
// let subtração = a - b
// let mutiplicação = a * b
// let divisão = a / b
// let módulo = a % b



function adição(value1, value2) {
    return value1 + value2 
}

function subtração(value1, value2) {
    return value1 - value2
} 

function mutiplicação(value1, value2) {
    return value1 * value2
}
function divisão(value1, value2) {
    return value1 / value2
}
function modulo(value1, value2) {
    return value1 % value2
}

function operations (value1, value2){
console.log(adição(value1, value2));
console.log(subtração(value1, value2));
console.log(mutiplicação(value1, value2));
console.log(divisão(value1, value2));
console.log(modulo(value1, value2));
}

operations(10, 4)


// fixando - 2 

// const a = 9
// const b = 5
// let comparação = a > b 

// if (comparação = true) {
//     console.log(a);
// } else {
    // console.log(b);


function comparator(iten1,iten2) {
    if (iten1 > iten2) {
        return iten1;
    } else {
        return iten2;
    };
};

let bigger = comparator(3000,1000);
console.log(bigger);

// fixando - 3 

// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c) {
//     console.log(b);
// } else {
//     console.log(c);
// }

function comparador(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
     return num1;
 } else if (num2 > num1 && num2 > num3) {
     return num2;
 } else {
     return num3;
}
}

let maior = comparador(2066, 900, 345)
console.log(maior);


// fixando - 4

// if (a > 0) {
//     console.log("Positive");
// } else if (a === 0) {
//     console.log("zero");
// } else {
//     console.log("Negative");
// }

function signalAvaliator(number) {
    if (number > 0) {
        return "positive"
    } else if (number === 0) {
        return "zero"
    } else {
        return "negative"
    }
}

let signal = signalAvaliator(1)
console.log(signal);


// fixando - 5

// if (soma === 180 && soma > 0) {
    // console.log(true);
// } else {
    // console.log(false);
// }
function sum(num1, num2, num3) {
    return num1 + num2 + num3
}

let soma = sum(60,60,61)

function isTriangle(soma) {
    if (soma === 180 && soma > 0) {
        return true
    } else {
        return false
    }
}

console.log(isTriangle(soma));    