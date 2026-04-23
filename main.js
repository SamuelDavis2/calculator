//Maths functions
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

//Displaying answers and clearing
const answer = document.querySelector(".answer");
const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    answer.textContent = ''
    num1 = 0;
    num2 = 0;
    operator = '';
});

//Number functionality
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


//Selecting operator
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

addBtn.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`+`);
    operator = '+';
});
subtractBtn.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`-`);
    operator = '-';
});
multiplyBtn.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`*`);
    operator = '*';
});
divideBtn.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`/`);
    operator = '/';
});

//Running inputs
const [var1, var2] = answer.textContent.split(operator);
num1 = var1;
num2 = var2;