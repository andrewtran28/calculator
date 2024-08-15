//global variables
const pi = Math.PI;
let output;
let inputStage = 0; //Three stages: numA, operator, numB
let numA;
let numB;
let operate;
let operator = "+-*/";  //Just guessing...operator will be a string to see which operator was chosen, check javaScript "palindrone" exercise.
let numerical = "0123456789"

const displayScreen = document.querySelector(".display");

//button connections
const btn_clear = document.querySelector("#clear");
const btn_equal = document.querySelector("#equal");
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
    switch (symbol) {
        case "+": add(num1, num2);
        case "-": subtract(num1, num2);
        case "*": multiply(num1, num2);
        case "/": divide(num1, num2);
    }
}

console.log("Add 1+2=" + add(1,2));
console.log("Subtract 2-1=" + subtract(2,1));
console.log("Multiply 3*4=" + multiply(3,3));
console.log("Divide 10/5=" + divide(10,5));

function display(){
    if (numerical.includes(input)) {
        //add to end of display
    }
}

function firstInput (numA) {
    if (numerical.includes(input)) {
        display(numA);

        if (operator.includes(input)) {
            operator(input);
        }
    }
}

function clear() {
    numA = "";
    numB = "";
    output = "";
    inputStage = 1;
    displayScreen.textContent = "";
}

//numerical buttons
btn_zero.addEventListener ("click", ()   => displayScreen.textContent += "0");
btn_one.addEventListener ("click", ()    => displayScreen.textContent += "1");
btn_two.addEventListener ("click", ()    => displayScreen.textContent += "2");
btn_three.addEventListener ("click", ()  => displayScreen.textContent += "3");
btn_four.addEventListener ("click", ()   => displayScreen.textContent += "4");
btn_five.addEventListener ("click", ()   => displayScreen.textContent += "5");
btn_six.addEventListener ("click", ()    => displayScreen.textContent += "6");
btn_seven.addEventListener ("click", ()  => displayScreen.textContent += "7");
btn_eight.addEventListener ("click", ()  => displayScreen.textContent += "8");
btn_nine.addEventListener ("click", ()   => displayScreen.textContent += "9");

//operator buttons
btn_clear.addEventListener ("click", () => clear());

btn_plus.addEventListener ("click", () => {
    // if()
})

btn_decimal.addEventListener ("click", () => {
    let checkDisplay = displayScreen.textContent;
    if (!checkDisplay.includes(".")) {
        if(checkDisplay === "") {
            displayScreen.textContent += "0.";
        }
        
        else {
            displayScreen.textContent += ".";
        }
    }
});
