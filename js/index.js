let operator = "";
let result = 0;
let operationsArr = [];

let input = document.querySelector(".inputNumber");
let displayResult = document.getElementById("resultValue");
let logInformation = document.getElementById("logInformation");

let plus = document.getElementById("addButton");
let minus = document.getElementById("substractButton");
let times = document.querySelector("#multiplicationButton");
let division = document.querySelector("#divisionButton");
let reset = document.querySelector(".resetButton");
let equal = document.querySelector(".equalButton");

plus.addEventListener("click", (event) => {
    operationsArr.push(Number(input.value));
    operationsArr.push('+');
    input.value = "";
});

minus.addEventListener("click", (event) => {
    operationsArr.push(Number(input.value));
    operationsArr.push('-');
    input.value = "";
});

times.addEventListener("click", (event) => {
    operationsArr.push(Number(input.value));
    operationsArr.push('*');
    input.value = "";
});

division.addEventListener("click", (event) => {
    operationsArr.push(Number(input.value));
    operationsArr.push('/');
    input.value = "";
});

reset.addEventListener("click", (event) => {
    input.value = "";
    displayResult.value = "";
    // Clean array of numbers and operations
    operationsArr = [];
    // Set result to 0
    result = 0;
    // Set operator to none
    operator = "";
});

equal.addEventListener("click", (event) => {
    operationsArr.push(Number(input.value));
    // Reset input
    input.value = "";

    operationsArr.forEach((item) => {
        if (typeof item === "string") {
            operator = item;
        } 
        else {
            switch (operator) {
                case '+':
                    result += item;
                    break;
        
                case '-':
                    result -= item;
                    break;
        
                case '*':
                    result *= item;
                    break;
        
                case '/':
                    result /= item;
                    break;
        
                default:
                    result = item;
                    break;
            }
        }
    });

    // Display result of calculations
    displayResult.value = result;

    // Generate string to be displayed in the log
    let sLogInfo = "";
    operationsArr.forEach((item) => {
        sLogInfo += `${item} `;
    });

    // Display in the log the string of the calculations
    logInformation.value += `${sLogInfo} = ${result}\n`;

    // Clean array of numbers and operations
    operationsArr = [];
    // Set result to 0
    result = 0;
    // Set operator to none
    operator = "";
});