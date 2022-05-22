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

let firstValue = 0, secondValue = 0, displayValue = 0, operator = '';
let isClear = false, isChain = false, isPoint = false;

const display = document.getElementById('display');
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
const point = document.getElementById('point');
const sumBtn = document.getElementById('sum');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const backspaceBtn = document.getElementById('backspace');

function pressOne() {
    if (display.innerText.length < 8) {
        if (!isClear) {
            display.innerText = 1;
            isClear = true;
        } else {
            display.innerText += 1;
        }
    }
}

function pressTwo() {
    if (display.innerText.length < 8) {
        if (!isClear) {
            display.innerText = 2;
            isClear = true;
        } else {
            display.innerText += 2;
        }
    }
}

function pressThree() {
    if (display.innerText.length < 8) {
        if (!isClear) {
            display.innerText = 3;
            isClear = true;
        } else {
            display.innerText += 3;
        }
    }
}

function pressFour() {
    if (display.innerText.length < 8) {
        if (!isClear) {
            display.innerText = 4;
            isClear = true;
        } else {
            display.innerText += 4;
        }
    }
}

function pressFive() {
    if (display.innerText.length < 8) {
        if (!isClear) {
            display.innerText = 5;
            isClear = true;
        } else {
            display.innerText += 5;
        }
    }
}

function pressSix() {
    if (display.innerText.length < 8) {
        if (!isClear) {
            display.innerText = 6;
            isClear = true;
        } else {
            display.innerText += 6;
        }
    }
}

function pressSeven() {
    if (display.innerText.length < 8) {
        if (!isClear) {
            display.innerText = 7;
            isClear = true;
        } else {
            display.innerText += 7;
        }
    }
}

function pressEight() {
    if (display.innerText.length < 8) {
        if (!isClear) {
            display.innerText = 8;
            isClear = true;
        } else {
            display.innerText += 8;
        }
    }
}

function pressNine() {
    if (display.innerText.length < 8) {
        if (!isClear) {
            display.innerText = 9;
            isClear = true;
        } else {
            display.innerText += 9;
        }
    }
}

function pressZero() {
    if (display.innerText.length < 8) {
        if (!isClear) {
            display.innerText = 0;
            isClear = true;
        } else {
            display.innerText += 0;
        }
    }
}

function pressPoint() {
    if (!isPoint) {
        if (!isClear) {
            display.innerText = '0.';
            isClear = true;
            isPoint = true;
        } else {
            display.innerText += '.';
            isPoint = true;
        }
    }
}

function pressSum() {
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
}

function pressSubtract() {
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
}

function pressMultiply() {
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
}

function pressDivide() {
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
}

function pressEquals() {
    if (operator !== "") {
        displayValue = display.innerText;
        secondValue = +displayValue;
        displayValue = operate(operator, firstValue, secondValue);
        display.innerText = displayValue;
    }
}

function pressClear() {
    display.innerText = 0;
    firstValue = 0;
    secondValue = 0;
    operator = '';
    isClear = false;
    isChain = false;
    isPoint = false;
}

function pressBackspace() {
    if (display.innerText.length !== 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = 0;
        isClear = false;
    }
}

one.addEventListener('click', pressOne);
two.addEventListener('click', pressTwo);
three.addEventListener('click', pressThree);
four.addEventListener('click', pressFour);
five.addEventListener('click', pressFive);
six.addEventListener('click', pressSix);
seven.addEventListener('click', pressSeven);
eight.addEventListener('click', pressEight);
nine.addEventListener('click', pressNine);
zero.addEventListener('click', pressZero);
point.addEventListener('click', pressPoint);
sumBtn.addEventListener('click', pressSum);
subtractBtn.addEventListener('click', pressSubtract);
multiplyBtn.addEventListener('click', pressMultiply);
divideBtn.addEventListener('click', pressDivide);
equalBtn.addEventListener('click', pressEquals); 
clearBtn.addEventListener('click', pressClear);
backspaceBtn.addEventListener('click', pressBackspace);

document.addEventListener('keydown', e => {
    switch (e.key) {
        case '1':
            pressOne();
            break;
        case '2':
            pressTwo();
            break;
        case '3':
            pressThree();
            break;
        case '4':
            pressFour();
            break;
        case '5':
            pressFive();
            break;
        case '6':
            pressSix();
            break;
        case '7':
            pressSeven();
            break;
        case '8':
            pressEight();
            break;
        case '9':
            pressNine();
            break;
        case '0':
            pressZero();
            break;
        case '.':
            pressPoint();
            break;
        case ',':
            pressPoint();
            break;
        case '+':
            pressSum();
            break;
        case '-':
            pressSubtract();
            break;
        case '*':
            pressMultiply();
            break;
        case '/':
            pressDivide();
            break;
        case '=':
            pressEquals();
            break;
        case 'Enter':
            pressEquals();
            break;
        case 'Delete':
            pressClear();
            break;
        case 'Backspace':
            pressBackspace();
            break;
    }
});