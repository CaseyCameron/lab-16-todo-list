import { getUser, addTask } from '../local-storage-utils.js';

const user = getUser();
if (!user){
    window.location = '../index.html';
}


const form = document.querySelector('form');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskData = new FormData(form);
    const task = taskData.get('new-task');
    addTask(task);
    
}
);