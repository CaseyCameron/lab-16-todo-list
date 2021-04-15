import { getUser, setUser } from './local-storage-utils.js';

export function renderLi(task) {
    const li = document.createElement('li');
    li.textContent = task.task;

    if (task.completed === true) {
        li.classList.add('completed');
    }

    li.addEventListener('click', () => {
        completeLi(task.task);
        renderTodo();
    });

    return li;
}

export function completeLi(todo) {
    const user = getUser();
    const matchingTask = user.tasks.find((item) => item.task === todo);
    matchingTask.completed = true;
    setUser(user);
}

export function renderTodo() {
    const user = getUser();
    const ul = document.querySelector('ul');
    ul.textContent = '';
    user.tasks.forEach(task => {
        const li = renderLi(task);
        ul.append(li);
    });
}