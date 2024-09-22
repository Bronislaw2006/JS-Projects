// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the color palette, input field, and preview box
    const colorPalette = document.getElementById('color-palette'); // Reference to the color palette container
    const colorInput = document.getElementById('color-input'); // Reference to the input field for hex color codes
    const colorPreview = document.getElementById('color-preview'); // Reference to the preview box for displaying the selected color

    // Function to update the preview box and input field with the selected color
    function updateColor(color) {
        colorPreview.style.backgroundColor = color; // Change the preview box background color to the selected color
        colorInput.value = color; // Set the value of the input field to the selected color (e.g., hex code)
    }

    // Event listener to handle clicks on color boxes in the palette
    colorPalette.addEventListener('click', (event) => {
        // Check if the clicked element is a color box
        if (event.target.classList.contains('color-box')) {
            const color = event.target.style.backgroundColor; // Get the background color of the clicked color box
            updateColor(color); // Call the function to update the color preview and input field with the clicked color
        }
    });

    // Event listener to handle changes in the input field
    colorInput.addEventListener('input', (event) => {
        const color = event.target.value; // Get the value of the input field (user-entered hex color code)
        
        // Validate if the input matches a valid hex color code pattern (e.g., #ffffff)
        if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
            updateColor(color); // If valid, update the color preview and input field with the user-entered color
        }
    });
});


