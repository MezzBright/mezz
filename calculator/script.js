let displayValue = "0";

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = displayValue;
}

function appendValue(value) {
    if (displayValue === "0") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1) || "0";
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = "Error";
    }
    updateDisplay();
}
