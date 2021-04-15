import { getUser, addTask } from '../local-storage-utils.js';
import { renderTodo } from '../task-utils.js';

const user = getUser();

if (!user) {
    window.location = '../index.html';
} else renderTodo();


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskData = new FormData(form);
    const task = taskData.get('new-task');
    addTask(task);
    renderTodo();

    form.reset();
});


