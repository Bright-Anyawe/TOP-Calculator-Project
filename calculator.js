
const add = (a, b) => {
    return parseFloat(a) + parseFloat(b);
};

const subtract = (a, b) => {
    return parseFloat(a) - parseFloat(b);
};

const multiply = (a, b) => {
    return parseFloat(a) * parseFloat(b);
};

const divide = (a, b) => {
    return parseFloat(a) / parseFloat(b);
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
const buttonsOperator = document.querySelectorAll('#operators');
const buttonsNumber = document.querySelectorAll('#digits');
const equalAssign = document.querySelector('#assign');
const clear = document.querySelector('#Clear');
const del = document.querySelector('#delete');
const decimal = document.querySelector('#dot');
const secondaryDisplay = document.querySelector('#secondary-display')

let a = '';
let b = '';
let operator = '';
let finalResult = null;
displayResult.textContent = '0';
secondaryDisplay.textContent = '0';

const handleNumberInput = (clickNumber) => {

    if (finalResult) {
        a = '';
        b = '';
        operator = null;
        displayResult.textContent = '0';
        secondaryDisplay.textContent = '0';
        finalResult = '';
    }

    if (!operator) {

        if (displayResult.textContent === '0' && secondaryDisplay.textContent === '0') {
            displayResult.textContent = '';
            secondaryDisplay.textContent = '';
        }

        a += clickNumber;
        displayResult.textContent = a
        console.log(a);
    }
    else if (operator) {

        b += clickNumber;
        displayResult.textContent = b
        console.log(b);
    }
    secondaryDisplay.textContent += clickNumber;
    
}

buttonsNumber.forEach((button) => {
    button.addEventListener('click', (e) => {
        handleNumberInput(e.target.textContent);

    });
});

const handleOperatorInput = (inputOperator) => {
    if (operator) {
        finalResult = Number(operate(a, b, operator).toFixed(5));

        if (finalResult) {
            // If a previous calculation has been performed, start a new operation
            a = finalResult.toString();
            displayResult.textContent = a;
            secondaryDisplay.textContent = a;
            b = '';
            operator = '';
            finalResult = null;
            
        };
    }

    operator = inputOperator;
    secondaryDisplay.textContent += " " + operator + " ";
    console.log(operator)
}

buttonsOperator.forEach((button) => {
    button.addEventListener('click', (e) => {
        handleOperatorInput(e.target.textContent);
    });
});

const displayTotal = () => {
    finalResult = Number(operate(a, b, operator).toFixed(9));
    displayResult.textContent = finalResult;
    secondaryDisplay.textContent +=  " " + equalAssign.value + " ";
    console.log(finalResult);
};
equalAssign.addEventListener('click', displayTotal);


function getDecimal() {

    if (a && !operator && !a.includes('.')) {
        a += '.';
        displayResult.textContent = a;
        secondaryDisplay.textContent = a;

    }
    if (b && operator && !b.includes('.')) {
        b += '.';
        displayResult.textContent = b;
        secondaryDisplay.textContent += '.';

    }

}
decimal.addEventListener('click', getDecimal);

const clearAll = () => {

    a = '';
    b = '';
    operator = null;
    displayResult.textContent = '0';
    secondaryDisplay.textContent = '0';
    finalResult = '';
}
clear.addEventListener('click', clearAll);


function handleDeleteKey() {
    if (operator) {

        b = b.slice(0, -1);

    }
    displayResult.textContent = displayResult.textContent.slice(0, -1);
    secondaryDisplay.textContent = secondaryDisplay.textContent.slice(0, -1);
    if (!operator) {

        a = a.slice(0, -1);

    }
    displayResult.textContent = displayResult.textContent.slice(0, -1);
    secondaryDisplay.textContent = secondaryDisplay.textContent.slice(0, -1);

    if (displayResult.textContent === "") {

        a = '';
        b = '';
        operator = null;
        displayResult.textContent = '0';
        finalResult = '';

    }

};
del.addEventListener('click', handleDeleteKey);


//Event listener for the keyboard

window.addEventListener('keydown', (e) => {

    const key = e.key;

    if (/[0-9]/.test(key)) {
        handleNumberInput(key);
    }

    if (/[+\-*/]/.test(key)) {
        handleOperatorInput(key);
    }

    if (key === 'Enter' || key === '=') {
        displayTotal();
    }

    if (key === '.') {
        getDecimal();
    }

    if (key === 'Escape' || key === 'Delete') {
        clearAll();
    }

    if (key === "Backspace") {
        handleDeleteKey();
    }
});


