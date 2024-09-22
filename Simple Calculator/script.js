// Append a value (number/operator) to the display when a button is clicked
function appendToDisplay(value) {
    // Select the display element and concatenate the clicked value to its current text
    document.getElementById('display').innerText += value;
}

// Clear the display when the clear button is clicked
function clearDisplay() {
    // Set the display element's text to an empty string to clear it
    document.getElementById('display').innerText = '';
}

// Calculate the result of the mathematical expression in the display
function calculateResult() {
    try {
        // Evaluate the expression shown in the display using eval()
        const result = eval(document.getElementById('display').innerText);
        // Display the calculated result in the display element
        document.getElementById('display').innerText = result;
    } catch (e) {
        // If an error occurs (e.g., invalid expression), show 'Error' in the display
        document.getElementById('display').innerText = 'Error';
    }
}
