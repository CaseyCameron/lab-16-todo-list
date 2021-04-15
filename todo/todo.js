import { getUser, addTask } from '../local-storage-utils.js';

const user = getUser();
if (!user) {
    window.location = '../index.html';
}


const form = document.querySelector('form');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    ul.textContent = '';
    const taskData = new FormData(form);
    const task = taskData.get('new-task');
    addTask(task);
    user.tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        ul.append(li);
    });
    form.reset();

}
);

