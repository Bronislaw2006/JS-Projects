// Selecting DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add event listener to the form for adding new tasks
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    const taskText = todoInput.value.trim();  // Get the task text and trim whitespace

    if (taskText !== "") {
        addTask(taskText);  // Add the task to the list
        todoInput.value = '';  // Clear the input field
    }
});

// Function to create and add a new task
function addTask(taskText) {
    const listItem = document.createElement('li');  // Create a new list item

    // Create a checkbox for the task
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';

    // Append the elements to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // Add event listener to checkbox to toggle task completion
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    });

    // Add event listener to delete button to remove the task
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    // Append the list item to the task list
    todoList.appendChild(listItem);
}




