import { getUser, setUser, createUser, checkIfUserExists, usernameAndPasswordMatch, login } from './local-storage-utils.js';

const form = document.querySelector('form');
const div = document.querySelector('div');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const username = formData.get('username');
    const password = formData.get('password');

    if (!checkIfUserExists(username)) {
        createUser(username, password);
    } else {
        if (usernameAndPasswordMatch(username, password)) {
            login(username);
            window.location = './todo/index.html';
        } else {
            div.textContent = 'Invalid username or password.';
        }
    }



});
