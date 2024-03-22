let a = '';
let b = '';
let operator;

const add = (a, b) => {
    return parseInt(a) + parseInt(b);
};

const subtract = (a, b) => {
    return parseInt(a) - parseInt(b);
};

const multiply = (a, b) => {
    return parseInt(a) * parseInt(b);
};

const divide = (a, b) => {
    return parseInt(a) / parseInt(b);
};



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
console.log(operate(3, 4, "*"));


const container = document.querySelector('#container');
const displayResult = document.querySelector('#result');
const buttonsOperator = document.querySelectorAll('#operators button');
const buttonsNumber = document.querySelectorAll('#digits button');
const equalAssign = document.querySelector('#assign');
const clear = document.querySelector('#Clear');


buttonsNumber.forEach((button) => {
    button.addEventListener('click', (e) => {
        displayResult.textContent += e.target.textContent;

        if (!operator) {
            a += e.target.textContent;
            console.log(a);
        }   
        else {
            b += e.target.textContent;
            console.log(b);
        }
    });
});


buttonsOperator.forEach((button) => {
    button.addEventListener('click', (e) => {
        operator = displayResult.textContent = e.target.textContent;
        console.log(operator)
    });
});

equalAssign.addEventListener('click', () => {
    displayResult.textContent = operate(a,b,operator);
});

clear.addEventListener('click', () => {
    displayResult.textContent = '';
})







// buttonsNumber.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (!operator) {
//             a += e.target.textContent;
//             console.log(a);
//         }   
//         else {
//             b += e.target.textContent;
//             console.log(b);
//         }
//     })
// })

