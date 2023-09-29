// Select all the elemnts from the task list
const taskList = document.querySelectorAll('.list li');

// Add event listeners to the tasks buttons
taskList.forEach(task => {
    const checkButton = task.querySelector('.check');
    const removeButton = task.querySelector('.remove');

    checkButton.addEventListener('click', function() {
        task.classList.toggle('verified');
    });

    removeButton.addEventListener('click', function() {
        task.remove();
    });
});

// Event listener to the form to add new task
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTaskText = document.getElementById('ntask').value;
    const newTask = document.createElement('li');
    newTask.innerHTML = `<i class="check">&#x2714;</i> ${newTaskText} <i class="remove">&#x2717;</i>`;

    const checkButton = newTask.querySelector('.check');
    const removeButton = newTask.querySelector('.remove');
    checkButton.addEventListener('click', function() {
        newTask.classList.toggle('verified');
    });

    removeButton.addEventListener('click', function() {
        newTask.remove();
    });

    // Add new task to the list
    document.querySelector('.list').appendChild(newTask);

    // Clean the text input when the task is added
    document.getElementById('ntask').value = '';
});

