//global variables
let numA;
let numB;
let operator = "+-*/";  //Just guessing...operator will be a string to see which operator was chosen, check javaScript "palindrone" exercise.
let numerical = "0123456789"

function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (dividend,quotient) {
    return dividend / quotient;
}

function operate (num1, symbol, num2) {
    switch (symbol) {
        case "+": add(num1, num2);
        case "-": subtract(num1, num2);
        case "*": multiply(num1, num2);
        case "/": divide(num1, num2);
    }
}

console.log("Add 1+2: " + add(1,2));
console.log("Subtract 2-1: " + subtract(2,1));
console.log("Multiply 3*4: " + multiply(3,3));
console.log("Divide 10/5: " + divide(10,5));

