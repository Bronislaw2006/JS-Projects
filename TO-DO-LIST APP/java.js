// Selecting elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add a new task
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = todoInput.value.trim();

    if (taskText) {
        addTask(taskText);
        todoInput.value = '';
    }
});

// Function to add a new task
function addTask(taskText) {
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation();
        todoList.removeChild(listItem);
    });

    todoList.appendChild(listItem);
}
