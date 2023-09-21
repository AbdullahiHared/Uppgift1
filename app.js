const secondNumber = parseInt(document.querySelector('.secondNumber').value);
const firstNumber =  parseInt(document.querySelector('.firstNumber').value);
const result = document.querySelector('.result');
const equals = document.querySelector('.likaMed');
const addition = document.querySelector('#plus');
const subtraction = document.querySelector('#minus');
const multiplication = document.querySelector('#multiply');
const divison = document.querySelector('#divide');

console.log("First number = " + firstNumber);
console.log("Second number = " + secondNumber);
const add = () => {
   return firstNumber + secondNumber;
}
console.log("add = " + add());
const subtract = () => {
    return firstNumber - secondNumber;
} 

console.log("subtract = " + subtract());

const multiply = () => {
    return firstNumber * secondNumber;
}

console.log("multiply = " + multiply());
const divide = () => {
    return firstNumber / secondNumber;
}

console.log("divide = " + divide());

