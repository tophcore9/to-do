import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCzII5Kb18oE7dBkQNeiHxbE1QOO87q8i0",
    authDomain: "todo-7cc6c.firebaseapp.com",
    projectId: "todo-7cc6c",
    storageBucket: "todo-7cc6c.firebasestorage.app",
    messagingSenderId: "272667976521",
    appId: "1:272667976521:web:d5ca6d42a2dd924a64b098"
};

const app = initializeApp(firebaseConfig);

interface ITodoItem {
    id: string;
    content: string;
    done: boolean;
}

const firestoreDB = getFirestore(app);
const todoListCollectionRef = collection(firestoreDB, 'todoList');

export {
    firestoreDB,
    todoListCollectionRef,
    type ITodoItem
}