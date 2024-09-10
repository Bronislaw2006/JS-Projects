// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the color palette, input field, and preview box
    const colorPalette = document.getElementById('color-palette');
    const colorInput = document.getElementById('color-input');
    const colorPreview = document.getElementById('color-preview');

    // Function to update the preview box and input field with the selected color
    function updateColor(color) {
        colorPreview.style.backgroundColor = color; // Change the preview box background color
        colorInput.value = color; // Update the input field value with the color
    }

    // Event listener to handle clicks on color boxes in the palette
    colorPalette.addEventListener('click', (event) => {
        // Check if the clicked element is a color box
        if (event.target.classList.contains('color-box')) {
            const color = event.target.style.backgroundColor; // Get the background color of the clicked box
            updateColor(color); // Update the color preview and input field
        }
    });

    // Event listener to handle changes in the input field
    colorInput.addEventListener('input', (event) => {
        const color = event.target.value; // Get the input value (hex color code)
        
        // Validate if the input matches a valid hex color code pattern
        if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
            updateColor(color); // Update the color preview and palette if valid
        }
    });
});

