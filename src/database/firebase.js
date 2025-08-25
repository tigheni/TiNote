import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'tinote-f43b6.firebaseapp.com',
    databaseURL: 'https://tinote-f43b6-default-rtdb.firebaseio.com',
    projectId: 'tinote-f43b6',
    storageBucket: 'tinote-f43b6.appspot.com',
    messagingSenderId: 'YOUR_SENDER_ID',
    appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
export { ref, set, get, child };
