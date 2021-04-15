import { createUser, checkIfUserExists, usernameAndPasswordMatch, login } from './local-storage-utils.js';
import { onLoad } from './utils.js';

const form = document.querySelector('form');
const errorMessage = document.querySelector('.error');


if (localStorage.getItem('LOGGED_IN') !== 'false') onLoad('./todo/index.html');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const username = formData.get('username');
    const password = formData.get('password');

    if (!checkIfUserExists(username)) {
        errorMessage.textContent = 'Invalid username or password.';
    } else {
        if (usernameAndPasswordMatch(username, password)) {
            login(username);
            window.location = './todo/index.html';
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    }
});

