const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const prodctObj = products.map((prodct, index) => ({ [prodct]: prices[index]}))

console.log(prodctObj);