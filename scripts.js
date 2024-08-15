//global variables
let output;
let inputStage = 0; //Two input stages: Input for numA, then pressing an operator changes to Input for numB
let checkDisplay;
let numA;
let numB;
let operate;
let operator = "+-*/";  //Just guessing...operator will be a string to see which operator was chosen, check javaScript "palindrone" exercise.
// let numerical = "0123456789"

const displayScreen = document.querySelector(".display");

//button connections
const btn_clear = document.querySelector("#clear");
const btn_equal = document.querySelector("#equal");
const btn_backspace = document.querySelector("#backspace");
const btn_plus_minus = document.querySelector("#plus_minus");
const btn_plus = document.querySelector("#plus");
const btn_minus = document.querySelector("#minus");
const btn_multiply = document.querySelector("#multiply");
const btn_divide = document.querySelector("#divide");
const btn_decimal = document.querySelector("#decimal");
const btn_zero = document.querySelector("#zero");
const btn_one = document.querySelector("#one");
const btn_two = document.querySelector("#two");
const btn_three = document.querySelector("#three");
const btn_four = document.querySelector("#four");
const btn_five = document.querySelector("#five");
const btn_six = document.querySelector("#six");
const btn_seven = document.querySelector("#seven");
const btn_eight = document.querySelector("#eight");
const btn_nine = document.querySelector("#nine");

function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (dividend, quotient) {
    if (quotient == 0) return displayScreen.textContent = "ERROR";
    return Math.round((dividend / quotient)*10000)/10000;
}

function calculate (num1, symbol, num2) {
    let result;
    console.log("Calculate: " +num1 + operate + num2);
    switch (symbol) {
        case "+": result = add(num1, num2); break;
        case "-": result = subtract(num1, num2); break;
        case "*": result = multiply(num1, num2); break;
        case "/": result = divide(num1, num2); break;
    }
    console.log("Result: " + result);
        return result;
}

function clear() {
    numA = "";
    numB = "";
    output = "";
    inputStage = 1;
    displayScreen.textContent = "0";
}

function backspace() {
    checkDisplay = displayScreen.textContent;
    displayScreen.textContent = checkDisplay.slice(0, -1); 
}

function plus_minus() {
    checkDisplay = displayScreen.textContent;
    displayScreen.textContent *= -1; 
}

function number(num) {
    checkDisplay = displayScreen.textContent;
    if (checkDisplay === "0") {
        displayScreen.textContent = num;
    }

    else {
        displayScreen.textContent += num;
    }
}

function operation(symbol) {
    checkDisplay = displayScreen.textContent;
    if (!isNaN(checkDisplay)) {
        numA = parseFloat(checkDisplay);
        operate = symbol;
        inputStage = 1;
        displayScreen.textContent = "0";
    }
}

//numerical buttons
btn_zero.addEventListener("click", ()   => number("0"));
btn_one.addEventListener("click", ()    => number("1"));
btn_two.addEventListener("click", ()    => number("2"));
btn_three.addEventListener("click", ()  => number("3"));
btn_four.addEventListener("click", ()   => number("4"));
btn_five.addEventListener("click", ()   => number("5"));
btn_six.addEventListener("click", ()    => number("6"));
btn_seven.addEventListener("click", ()  => number("7"));
btn_eight.addEventListener("click", ()  => number("8"));
btn_nine.addEventListener("click", ()   => number("9"));

//operator buttons
btn_plus.addEventListener("click", ()       => operation("+"));
btn_minus.addEventListener("click", ()      => operation("-"));
btn_multiply.addEventListener("click", ()   => operation("*"));
btn_divide.addEventListener("click", ()     => operation("/"));

//other buttons
btn_clear.addEventListener("click", () => clear());
btn_backspace.addEventListener("click", () => backspace());
btn_plus_minus.addEventListener("click", () => plus_minus());

btn_decimal.addEventListener ("click", () => {
    checkDisplay = displayScreen.textContent;
    if (!checkDisplay.includes(".")) {
        if(checkDisplay === "") {
            displayScreen.textContent += "0.";
        }
        
        else {
            displayScreen.textContent += ".";
        }
    }
});

btn_equal.addEventListener("click", () => {
    checkDisplay = displayScreen.textContent;
    if ((inputStage == 1) && (!isNaN(checkDisplay))) {
        numB = parseFloat(checkDisplay);
        displayScreen.textContent = calculate(numA, operate, numB);
        inputStage = 0;
    }
});
