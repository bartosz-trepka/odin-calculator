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

let firstValue = 0, secondValue = 0, operator = '';
let isClear = false, isChain = false, isPoint = false;

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
const point = document.getElementById('point');

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
point.addEventListener('click', () => {
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
});

document.addEventListener('keydown', e => {
    switch (e.key) {
        case '1':
            if (!isClear) {
                display.innerText = 1;
                isClear = true;
            } else {
                display.innerText += 1;
            }
            break;
        case '2':
            if (!isClear) {
                display.innerText = 2;
                isClear = true;
            } else {
                display.innerText += 2;
            }
            break;
        case '3':
            if (!isClear) {
                display.innerText = 3;
                isClear = true;
            } else {
                display.innerText += 3;
            }
            break;
        case '4':
            if (!isClear) {
                display.innerText = 4;
                isClear = true;
            } else {
                display.innerText += 4;
            }
            break;
        case '5':
            if (!isClear) {
                display.innerText = 5;
                isClear = true;
            } else {
                display.innerText += 5;
            }
            break;
        case '6':
            if (!isClear) {
                display.innerText = 6;
                isClear = true;
            } else {
                display.innerText += 6;
            }
            break;
        case '7':
            if (!isClear) {
                display.innerText = 7;
                isClear = true;
            } else {
                display.innerText += 7;
            }
            break;
        case '8':
            if (!isClear) {
                display.innerText = 8;
                isClear = true;
            } else {
                display.innerText += 8;
            }
            break;
        case '9':
            if (!isClear) {
                display.innerText = 9;
                isClear = true;
            } else {
                display.innerText += 9;
            }
            break;
        case '0':
            if (!isClear) {
                display.innerText = 0;
                isClear = true;
            } else {
                display.innerText += 0;
            }
            break;
        case '.':
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
            break;
        case '+':
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
            break;
        case '-':
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
            break;
        case '*':
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
            break;
        case '/':
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
            break;
        case '=':
            if (operator !== "") {
                displayValue = display.innerText;
                secondValue = +displayValue;
                displayValue = operate(operator, firstValue, secondValue);
                display.innerText = displayValue;
            }
            break;
        case 'Delete':
            display.innerText = 0;
            firstValue = 0;
            secondValue = 0;
            operator = '';
            isClear = false;
            isChain = false;
            isPoint = false;
            break;
        case 'Backspace':
            if (display.innerText.length !== 1) {
                display.innerText = display.innerText.slice(0, -1);
            } else {
                display.innerText = 0;
                isClear = false;
            }
            break;
    }
});

const sumBtn = document.getElementById('sum');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

const equalBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const backspaceBtn = document.getElementById('backspace');

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
    if (operator !== "") {
        displayValue = display.innerText;
        secondValue = +displayValue;
        displayValue = operate(operator, firstValue, secondValue);
        display.innerText = displayValue;
    }
}); 

clearBtn.addEventListener('click', () => {
    display.innerText = 0;
    firstValue = 0;
    secondValue = 0;
    operator = '';
    isClear = false;
    isChain = false;
    isPoint = false;
});

backspaceBtn.addEventListener('click', () => {
    if (display.innerText.length !== 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = 0;
        isClear = false;
    }
});