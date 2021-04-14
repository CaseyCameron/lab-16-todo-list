const USERS = 'USERS';

export function getUser(){
    const users = localStorage.getItem(USERS);
    if (!users) return false;
    return JSON.parse(users);
}

export function setUser(username){
    const stringyUser = JSON.stringify(username);
    localStorage.setItem(USERS, stringyUser);
}
