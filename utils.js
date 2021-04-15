import { getUser } from './local-storage-utils.js';

export function onLoad(path){
    const user = getUser();
    if (user){
        window.location = path;
}

}