document.addEventListener('DOMContentLoaded', () => {
    const colorPalette = document.getElementById('color-palette');
    const colorInput = document.getElementById('color-input');
    const colorPreview = document.getElementById('color-preview');

    function updateColor(color) {
        colorPreview.style.backgroundColor = color;
        colorInput.value = color;
    }

    // Handle color box clicks
    colorPalette.addEventListener('click', (event) => {
        if (event.target.classList.contains('color-box')) {
            const color = event.target.style.backgroundColor;
            updateColor(color);
        }
    });

    // Handle input changes
    colorInput.addEventListener('input', (event) => {
        const color = event.target.value;
        if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
            updateColor(color);
        }
    });
});
