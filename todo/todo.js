import { getUser, addTask } from '../local-storage-utils.js';

const user = getUser();
if (!user) {
    window.location = '../index.html';
}


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskData = new FormData(form);
    const task = taskData.get('new-task');
    addTask(task);
    const ul = document.querySelector('ul');
    ul.textContent = '';
    const user = getUser();
    user.tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.task;
        li.addEventListener('click', () => {
            const user = getUser();
            const matchingTask = user.tasks.find((item) => task === item.task);
            matchingTask.completed = true;
        });
        ul.append(li);
    });
    form.reset();

}
);

