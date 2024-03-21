
const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};
let a, b, operator;


const operate = (a, b, operator) => {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
};
console.log(operate(3, 4,"*"));
console.log(operate(3, 4,"+"));
console.log(operate(3, 4,"-"));
console.log(operate(3, 35234,"/"));

const container = document.querySelector('#container');
const Output = document.querySelector('#Output')
const button = document.querySelectorAll('button'); 






