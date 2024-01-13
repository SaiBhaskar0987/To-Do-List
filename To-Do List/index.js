
document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
    } else {
        const taskListItem = document.createElement('li');
        taskListItem.textContent = taskText;
        document.getElementById('taskList').appendChild(taskListItem);
        taskInput.value = '';
        saveTasks();
    }
});

document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {

        e.target.parentNode.removeChild(e.target);
        saveTasks();
    }
});

function saveTasks() {
    const taskListItems = document.getElementById('taskList').getElementsByTagName('li');
    const tasks = [];
    for (let i = 0; i < taskListItems.length; i++) {
        tasks.push(taskListItems[i].textContent);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        const taskList = document.getElementById('taskList');
        tasks.forEach(function(task) {
            const taskListItem = document.createElement('li');
            taskListItem.textContent = task;
            taskList.appendChild(taskListItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});
