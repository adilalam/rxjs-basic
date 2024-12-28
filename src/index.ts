import {name$, storeDataOnServer, storeDataOnServerError} from './external'

// name$.subscribe(value => console.log(value));

storeDataOnServer("user data").subscribe(value => console.log(value))