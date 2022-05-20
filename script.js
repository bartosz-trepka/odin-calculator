function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b!== 0) {
        return a / b;
    } else {
        isClear = false;
        return 'ERROR';
    }
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

let firstValue = 0, secondValue = 0, operator = '', isClear = false, isChain = false;

const display = document.getElementById('display');
let displayValue = 0;

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

one.addEventListener('click', () => {
    if (!isClear) {
        display.innerText = 1;
        isClear = true;
    } else {
        display.innerText += 1;
    }
});
two.addEventListener('click', () => {
    if (!isClear) {
        display.innerText = 2;
        isClear = true;
    } else {
        display.innerText += 2;
    }
});
three.addEventListener('click', () => {
    if (!isClear) {
        display.innerText = 3;
        isClear = true;
    } else {
        display.innerText += 3;
    }
});
four.addEventListener('click', () => {
    if (!isClear) {
        display.innerText = 4;
        isClear = true;
    } else {
        display.innerText += 4;
    }
});
five.addEventListener('click', () => {
    if (!isClear) {
        display.innerText = 5;
        isClear = true;
    } else {
        display.innerText += 5;
    }
});
six.addEventListener('click', () => {
    if (!isClear) {
        display.innerText = 6;
        isClear = true;
    } else {
        display.innerText += 6;
    }
});
seven.addEventListener('click', () => {
    if (!isClear) {
        display.innerText = 7;
        isClear = true;
    } else {
        display.innerText += 7;
    }
});
eight.addEventListener('click', () => {
    if (!isClear) {
        display.innerText = 8;
        isClear = true;
    } else {
        display.innerText += 8;
    }
});
nine.addEventListener('click', () => {
    if (!isClear) {
        display.innerText = 9;
        isClear = true;
    } else {
        display.innerText += 9;
    }
});
zero.addEventListener('click', () => {
    if (!isClear) {
        display.innerText = 0;
        isClear = true;
    } else {
        display.innerText += 0;
    }
});

const sumBtn = document.getElementById('sum');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

const equalBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');

sumBtn.addEventListener('click', () => {
    if (isChain) {
        displayValue = display.innerText;
        secondValue = +displayValue;
        displayValue = operate(operator, firstValue, secondValue);
        display.innerText = displayValue;
    } else {
        isChain = true;
    }
    displayValue = display.innerText;
    firstValue = +displayValue;
    operator = '+';
    isClear = false;
});

subtractBtn.addEventListener('click', () => {
    if (isChain) {
        displayValue = display.innerText;
        secondValue = +displayValue;
        displayValue = operate(operator, firstValue, secondValue);
        display.innerText = displayValue;
    } else {
        isChain = true;
    }
    displayValue = display.innerText;
    firstValue = +displayValue;
    operator = '-';
    isClear = false;
});

multiplyBtn.addEventListener('click', () => {
    if (isChain) {
        displayValue = display.innerText;
        secondValue = +displayValue;
        displayValue = operate(operator, firstValue, secondValue);
        display.innerText = displayValue;
    } else {
        isChain = true;
    }
    displayValue = display.innerText;
    firstValue = +displayValue;
    operator = '*';
    isClear = false;
});

divideBtn.addEventListener('click', () => {
    if (isChain) {
        displayValue = display.innerText;
        secondValue = +displayValue;
        displayValue = operate(operator, firstValue, secondValue);
        display.innerText = displayValue;

    } else {
        isChain = true;
    }
    displayValue = display.innerText;
    firstValue = +displayValue;
    operator = '/';
    isClear = false;
});

equalBtn.addEventListener('click', () => {
    displayValue = display.innerText;
    secondValue = +displayValue;
    displayValue = operate(operator, firstValue, secondValue);
    display.innerText = displayValue;
}); 

clearBtn.addEventListener('click', () => {
    display.innerText = 0;
    firstValue = 0;
    secondValue = 0;
    operator = '';
    isClear = false;
    isChain = false;
});