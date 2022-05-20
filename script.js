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
    return b !== 0 ? a / b : 'ERROR';
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
    display.innerText += 1;
});
two.addEventListener('click', () => {
    display.innerText += 2;
});
three.addEventListener('click', () => {
    display.innerText += 3;
});
four.addEventListener('click', () => {
    display.innerText += 4;
});
five.addEventListener('click', () => {
    display.innerText += 5;
});
six.addEventListener('click', () => {
    display.innerText += 6;
});
seven.addEventListener('click', () => {
    display.innerText += 7;
});
eight.addEventListener('click', () => {
    display.innerText += 8;
});
nine.addEventListener('click', () => {
    display.innerText += 9;
});
zero.addEventListener('click', () => {
    display.innerText += 0;
});