import { getUser, addTask, logout } from '../local-storage-utils.js';
import { renderTodo } from '../task-utils.js';

const user = getUser();
const logged_in = localStorage.getItem('LOGGED_IN');

if (logged_in === 'false' && user) {
    window.location = '../index.html';
} else renderTodo();


const form = document.querySelector('form');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskData = new FormData(form);
    const task = taskData.get('new-task');
    addTask(task);
    renderTodo();

    form.reset();
});

button.addEventListener('click', () => {
    logout();
    window.location.href = '../index.html';
});


