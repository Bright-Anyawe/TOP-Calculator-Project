let a = '';
let b = '';
let operator = '';
let finalResult = null;

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


const container = document.querySelector('#container');
const displayResult = document.querySelector('#result');
const buttonsOperator = document.querySelectorAll('#operators button');
const buttonsNumber = document.querySelectorAll('#digits button');
const equalAssign = document.querySelector('#assign');
const clear = document.querySelector('#Clear');
const del = document.querySelector('#delete');
const dot = document.querySelector('#dot');


buttonsNumber.forEach((button) => {
    button.addEventListener('click', (e) => {
        const clickNumber = e.target.textContent;
        
        if (!operator) {
            a += clickNumber;
            console.log(a);
        }
        else if (operator) {
            b += clickNumber;
            console.log(b);
        }
        
       
        displayResult.textContent += clickNumber;

    });


});

buttonsOperator.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (operator) {
            finalResult = Number(operate(a, b, operator).toFixed(5));

            if (finalResult !== null) {
                // If a previous calculation has been performed, start a new operation
                a = finalResult.toString();
                displayResult.textContent = a
                b = '';
                operator = '';
                finalResult = null;
            };
        }

        operator = e.target.textContent;
        displayResult.textContent += " " + operator + " ";
        console.log(operator)


    });
});



const displayTotal = () => {

    finalResult = Number(operate(a, b, operator).toFixed(9));
    displayResult.textContent = finalResult;


};
equalAssign.addEventListener('click', displayTotal);

const clearAll = () => {
    a = '';
    b = '';
    operator = '';
    displayResult.textContent = '';
    finalResult = '';
}
clear.addEventListener('click', clearAll);

del.addEventListener('click', deleteKey);

function deleteKey() {
 if (operator) {
    b = b.slice(0, -1);
    displayResult.textContent = displayResult.textContent.slice(0, -1);
 }
 else {
    a = a.slice(0, -1);
    displayResult.textContent = displayResult.textContent.slice(0, -1);
 }
}


