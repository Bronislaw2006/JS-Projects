// Selecting elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add a new task
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting in the traditional way
    const taskText = todoInput.value.trim();  // Get and trim the input value

    if (taskText !== "") {
        addTask(taskText);  // Add task to the list
        todoInput.value = '';  // Clear the input field
    }
});

// Function to add a new task
function addTask(taskText) {
    const listItem = document.createElement('li');  // Create a new list item

    // Create a checkbox for marking the task as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    // Create a span to hold the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';

    // Append elements to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // Add event listener to mark the task as completed
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    });

    // Add event listener to delete the task
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    // Append the list item to the task list
    todoList.appendChild(listItem);
}




