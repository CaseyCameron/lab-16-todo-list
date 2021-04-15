import { createUser, checkIfUserExists, login, } from '../local-storage-utils.js';
import { onLoad } from '../utils.js';

const form = document.querySelector('form');
const div = document.querySelector('.signup-message');
const haveAccount = document.querySelector('.have-account');


if (localStorage.getItem('LOGGED_IN') !== 'false') onLoad('../todo/index.html');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const username = formData.get('username');
    const password = formData.get('password');

    if (!checkIfUserExists(username)) {
        createUser(username, password);
        login(username);
        div.textContent = 'Your account is created. ';
        const a = document.createElement('a');
        a.textContent = 'Go to your todo!';
        a.href = '../todo/index.html';
        div.append(a);
        haveAccount.style.display = 'none';
    } else {
        div.textContent = 'Account already exists.';
    }
});

