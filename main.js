//Maths functions
function add(num1, num2) {
    const result = num1 + num2;
    answer.textContent = Math.round(result * 100) / 100;
}

function subtract(num1, num2) {
    const result = num1 - num2;
    answer.textContent = Math.round(result * 100) / 100;
}

function multiply(num1, num2) {
    const result = num1 * num2;
    answer.textContent = Math.round(result * 100) / 100;
}

function divide(num1, num2) {
    const result = num1 / num2;
    answer.textContent = Math.round(result * 100) / 100;
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
const decimal = document.querySelector('#decimal');

one.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`1`);
});
two.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`2`);
});
three.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`3`);
});
four.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`4`);
});
five.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`5`);
});
six.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`6`);
});
seven.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`7`);
});
eight.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`8`);
});
nine.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`9`);
});
zero.addEventListener("click", () => {
    answer.textContent = answer.textContent.concat(`0`);
});
decimal.addEventListener("click", () => {
    if (answer.textContent.includes('.')) {

    } else {
        answer.textContent = answer.textContent.concat('.');
    }
});


//Selecting operator
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

addBtn.addEventListener("click", () => {
    if (operator == '') {
        answer.textContent = answer.textContent.concat(`+`);
        operator = '+';
    } else {
        const [var1, var2] = answer.textContent.split(operator);
        num1 = Number(var1);
        num2 = Number(var2);
        operate(num1, operator, num2);
        answer.textContent = answer.textContent.concat(`+`);
        operator = '+';
    }
});
subtractBtn.addEventListener("click", () => {
    if (operator == '') {
        answer.textContent = answer.textContent.concat(`-`);
        operator = '-';
    } else {
        const [var1, var2] = answer.textContent.split(operator);
        num1 = Number(var1);
        num2 = Number(var2);
        operate(num1, operator, num2);
        answer.textContent = answer.textContent.concat(`-`);
        operator = '-';
    }
});
multiplyBtn.addEventListener("click", () => {
    if (operator == '') {
        answer.textContent = answer.textContent.concat(`*`);
        operator = '*';
    } else {
        const [var1, var2] = answer.textContent.split(operator);
        num1 = Number(var1);
        num2 = Number(var2);
        operate(num1, operator, num2);
        answer.textContent = answer.textContent.concat(`*`);
        operator = '*';
    }
});
divideBtn.addEventListener("click", () => {
    if (operator == '') {
        answer.textContent = answer.textContent.concat(`/`);
        operator = '/';
    } else {
        const [var1, var2] = answer.textContent.split(operator);
        num1 = Number(var1);
        num2 = Number(var2);
        operate(num1, operator, num2);
        answer.textContent = answer.textContent.concat(`/`);
        operator = '/';
    }
});

//Running inputs
const compute = document.querySelector("#compute");

compute.addEventListener("click", () => {
    const [var1, var2] = answer.textContent.split(operator);
    num1 = Number(var1);
    num2 = Number(var2);
    if (operator == '/' && num2 == 0) {
        answer.textContent = '';
        num1 = 0;
        num2 = 0;
        alert('ERROR: You cannot divide by 0!');
    } else {
        operate(num1, operator, num2);
    }
    operator = '';
});

// Adding in keyboard support

