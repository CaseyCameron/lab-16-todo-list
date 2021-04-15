import { getUser, setUser, createUser, checkIfUserExists, usernameAndPasswordMatch, login } from './local-storage-utils.js';
import { onLoad } from './utils.js';

const form = document.querySelector('form');
const div = document.querySelector('div');


onLoad('./todo/index.html');
// const user = getUser();
// if (user){
//     window.location = './todo/index.html';
// }

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

