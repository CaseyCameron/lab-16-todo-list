const USERS = 'USERS';

export function getUser() {
    const users = localStorage.getItem(USERS);
    if (!users) return false;
    return JSON.parse(users);
}

export function setUser(username) {
    const stringyUser = JSON.stringify(username);
    localStorage.setItem(USERS, stringyUser);
}

export function createUser(username, password) {
    const user = {
        username,
        password,
        tasks: []
    };
    setUser(user);
}

export function checkIfUserExists(username) {
    const user = getUser();
    if (username === user.username) {
        return true;
    } return false;
}

export function usernameAndPasswordMatch(username, password) {
    const user = getUser();
    if (user.username === username && user.password === password) {
        return true;
    } return false;
}

export function login(username) {
    localStorage.setItem('LOGGED_IN', username);
}

export function addTask(task) {
    const user = getUser();
    user.tasks.push(task);
    setUser(user);
}
