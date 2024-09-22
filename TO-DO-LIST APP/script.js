// Selecting DOM elements
const todoForm = document.getElementById('todo-form'); // Reference to the form element for adding tasks
const todoInput = document.getElementById('todo-input'); // Reference to the input field where tasks are entered
const todoList = document.getElementById('todo-list'); // Reference to the unordered list that will display tasks

// Add event listener to the form for adding new tasks
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission action (page refresh)
    const taskText = todoInput.value.trim();  // Get the task text and remove any leading/trailing whitespace

    if (taskText !== "") {  // Check if the task text is not empty
        addTask(taskText);  // Call the function to add the task to the list
        todoInput.value = '';  // Clear the input field for the next task
    }
});

// Function to create and add a new task
function addTask(taskText) {
    const listItem = document.createElement('li');  // Create a new list item element for the task

    // Create a checkbox for the task
    const checkbox = document.createElement('input'); // Create a checkbox input element
    checkbox.type = 'checkbox';  // Set the checkbox type
    checkbox.className = 'checkbox'; // Assign a class for styling

    // Create a span for the task text
    const taskSpan = document.createElement('span'); // Create a span element to hold the task text
    taskSpan.textContent = taskText; // Set the text content of the span to the task text

    // Create a delete button
    const deleteButton = document.createElement('button'); // Create a button element for deleting the task
    deleteButton.textContent = 'Delete'; // Set the button text
    deleteButton.className = 'delete-btn'; // Assign a class for styling

    // Append the elements to the list item
    listItem.appendChild(checkbox); // Add the checkbox to the list item
    listItem.appendChild(taskSpan); // Add the task text span to the list item
    listItem.appendChild(deleteButton); // Add the delete button to the list item

    // Add event listener to checkbox to toggle task completion
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) { // Check if the checkbox is checked
            listItem.classList.add('completed'); // Add a class to indicate completion
        } else {
            listItem.classList.remove('completed'); // Remove the class if unchecked
        }
    });

    // Add event listener to delete button to remove the task
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem); // Remove the list item from the task list
    });

    // Append the list item to the task list
    todoList.appendChild(listItem); // Add the new task (list item) to the displayed task list
}





