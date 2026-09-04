const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentNumber = "0";
let firstNumber = null;
let operator = null;
let expression = "";

function updateDisplay() {
    display.textContent = expression || currentNumber;
}

function calculate(first, second, operation) {
    if (operation === "+") {
        return first + second;
    }

    if (operation === "-") {
        return first - second;
    }

    if (operation === "x") {
        return first * second;
    }

    if (operation === "÷") {
        return second === 0 ? "Error" : first / second;
    }
}

function inputNumber(number) {
    if (currentNumber === "Error") {
        currentNumber = number;
        expression = number;
        return;
    }

    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }

    expression += number;
}

function inputDecimal() {
    if (!currentNumber.includes(".")) {
        currentNumber += ".";
        expression += ".";
    }
}

function chooseOperator(selectedOperator) {
    firstNumber = Number(currentNumber);
    operator = selectedOperator;

    expression += " " + selectedOperator + " ";
    currentNumber = "0";
}

function equals() {
    if (firstNumber === null || operator === null) {
        return;
    }

    const secondNumber = Number(currentNumber);

    const result = calculate(
        firstNumber,
        secondNumber,
        operator
    );

    currentNumber = String(result);

    firstNumber = null;
    operator = null;

    expression = "";

    updateDisplay();
}

function clearCalculator() {
    currentNumber = "0";
    firstNumber = null;
    operator = null;
    expression = "";
}

function changeSign() {
    currentNumber = String(Number(currentNumber) * -1);
    
    if (expression) {
        expression = expression.slice(0, -currentNumber.length) + currentNumber;
    }
}

function percentage() {
    currentNumber = String(Number(currentNumber) / 100);
    expression = currentNumber;
}

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        const value = button.textContent;

        if (!isNaN(value)) {
            inputNumber(value);
        }

        else if (value === ".") {
            inputDecimal();
        }

        else if (value === "AC") {
            clearCalculator();
        }

        else if (value === "+/-") {
            changeSign();
        }

        else if (value === "%") {
            percentage();
        }

        else if (value === "=") {
            equals();
        }

        else if (
            value === "+" ||
            value === "-" ||
            value === "x" ||
            value === "÷"
        ) {
            chooseOperator(value);
        }

        updateDisplay();
    });
});

updateDisplay();