# Color Picker

A simple web-based color picker application that allows users to select colors from a predefined palette or enter a custom hex color code. The selected or input color is displayed in a preview box.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [How It Works](#how-it-works)
- [How to Run](#how-to-run)

## Features
- **Color Palette**: Users can choose from a set of predefined colors displayed as clickable color boxes.
- **Hex Input**: Users can manually enter a custom hex color code to preview.
- **Live Color Preview**: The selected color is displayed in a preview box, both from the palette and the input.
- **Input Validation**: The app checks for valid hex color codes when entered by the user.

## Technologies Used
- **HTML5**: Structure of the application.
- **CSS3**: Styling of the layout and elements.
- **JavaScript (ES6)**: Logic for color selection, input validation, and interaction between the color palette and preview box.

## File Structure
The project consists of three main files:


### `index.html`
The HTML file contains the structure of the web page, including:
- A color palette with predefined colors.
- An input field for entering a custom hex color code.
- A preview box to display the selected or input color.

### `styles.css`
The CSS file provides styling for the app, including:
- Centering the content on the page.
- Styling the color boxes and the preview box.
- Adding hover effects to the color boxes.

### `script.js`
The JavaScript file contains the functionality of the app, including:
- Event listeners for detecting clicks on the color palette.
- Validation for hex color input.
- Live updating of the preview box when a color is selected or input.

## How It Works
1. The user can click on any of the color boxes in the palette to select a color. The selected color is then displayed in the preview box, and the hex value of the color is shown in the input field.
2. Alternatively, the user can type a hex color code (e.g., `#ff0000`) into the input field. If the input is valid, the color is applied to the preview box.
3. The app automatically updates the preview with the new color and ensures that only valid hex codes are accepted.

## How to Run
1. Clone this repository or download the files.
2. Open the `index.html` file in any web browser to view and interact with the color picker.
3. No additional setup or dependencies are required.


