// Append a value (number/operator) to the display when a button is clicked
function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

// Clear the display when the clear button is clicked
function clearDisplay() {
    document.getElementById('display').innerText = '';
}

// Calculate the result of the mathematical expression in the display
function calculateResult() {
    try {
        const result = eval(document.getElementById('display').innerText); // Use eval to compute
        document.getElementById('display').innerText = result; // Display the result
    } catch (e) {
        document.getElementById('display').innerText = 'Error'; // Handle invalid expressions
    }
}
