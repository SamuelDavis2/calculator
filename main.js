function add(num1, num2) {
    console.log(num1 + num2);
}

function subtract(num1, num2) {
    console.log(num1 - num2);
}

function multiply(num1, num2) {
    console.log(num1 * num2);
}

function divide(num1, num2) {
    console.log(num1 / num2);
}

let num1 = 0;
let operator = '';
let num2 = 0;

function operate(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2)
    } else if (operator == '/') {
        return divide(num1, num2);
    } else {
        return 'ERROR: Invalid Operator';
    }
}

const answer = document.querySelector(".answer");
const clear = document.querySelector(".clear");

clear.addEventListener("click", () => answer.textContent = '');

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

one.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`1`);
    num1 = Number(answer.textContent);
});
two.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`2`);
    num1 = Number(answer.textContent);
});
three.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`3`);
    num1 = Number(answer.textContent);
});
four.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`4`);
    num1 = Number(answer.textContent);
});
five.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`5`);
    num1 = Number(answer.textContent);
});
six.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`6`);
    num1 = Number(answer.textContent);
});
seven.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`7`);
    num1 = Number(answer.textContent);
});
eight.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`8`);
    num1 = Number(answer.textContent);
});
nine.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`9`);
    num1 = Number(answer.textContent);
});
zero.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`0`);
    num1 = Number(answer.textContent);
});