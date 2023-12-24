let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('result').value = displayValue;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function square() {
    try {
        displayValue = eval(displayValue) ** 2;
        document.getElementById('result').value = displayValue;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function fraction() {
    try {
        displayValue = 1 / eval(displayValue);
        document.getElementById('result').value = displayValue;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
