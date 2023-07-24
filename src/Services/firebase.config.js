import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9O8uvmx6CAjFNLGK7w3Xz8TEHaBLhRXo",
    authDomain: "todo-bbd57.firebaseapp.com",
    projectId: "todo-bbd57",
    storageBucket: "todo-bbd57.appspot.com",
    messagingSenderId: "503105058969",
    appId: "1:503105058969:web:d4a243357df37eca8c6008",
    measurementId: "G-TJGJE2JQK4"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);