const secondNumber = parseInt(document.querySelector(".secondNumber").value);
const firstNumber = parseInt(document.querySelector(".firstNumber").value);
const display = document.querySelector(".result");
const equalBtn = document.querySelector(".likaMed");
const addBtn = document.querySelector("#plus");
const subtractionBtn = document.querySelector("#minus");
const multiplicationBtn = document.querySelector("#multiply");
const divisonBtn = document.querySelector("#divide");

const populateDisplay = function (value) {
  display.textContent = value;
};

const add = () => {
  return firstNumber + secondNumber;
};

const subtract = () => {
  return firstNumber - secondNumber;
};

const multiply = () => {
  return firstNumber * secondNumber;
};

const divide = () => {
  return firstNumber / secondNumber;
};

addBtn.addEventListener("click", function () {
  populateDisplay(add());
});

subtractionBtn.addEventListener("click", function () {
  populateDisplay(subtract());
});

divisonBtn.addEventListener("click", function () {
  populateDisplay(divide());
});

multiplicationBtn.addEventListener("click", function () {
  populateDisplay(multiply());
});
