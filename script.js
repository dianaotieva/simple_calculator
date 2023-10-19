// Get the result input element
const resultField = document.getElementById("result");

// Function to append values to the input
function appendToInput(value) {
    resultField.value += value;
}

// Function to calculate the result
function calculate() {
    try {
        const func = new Function('return ' + resultField.value);
        resultField.value = func();
    } catch (error) {
        resultField.value = "Error";
    }
}

// Function to clear the input
function clearInput() {
    resultField.value = "";
}

