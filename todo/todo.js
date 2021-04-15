import { getUser, addTask, setUser } from '../local-storage-utils.js';

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



        ul.append(li);
    });
    form.reset();

}
);

function renderLi(task) {
    const li = document.createElement('li');
    li.textContent = task.task;

    li.addEventListener('click', () => {
        completeLi(task.task);
        renderTodo();
    });

    return li;
}

function completeLi(todo) {
    const user = getUser();
    const matchingTask = user.tasks.find((item) => item.task === todo);


    matchingTask.completed = true;
    setUser(user);
}

function renderTodo() {
    const user = getUser();
    const ul = document.querySelector('ul');
    ul.textContent = '';
    user.tasks.forEach(task => {
        const li = renderLi(task);
        ul.append(li);
    });
}

