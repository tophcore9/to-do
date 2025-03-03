import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCzII5Kb18oE7dBkQNeiHxbE1QOO87q8i0",
    authDomain: "todo-7cc6c.firebaseapp.com",
    projectId: "todo-7cc6c",
    storageBucket: "todo-7cc6c.firebasestorage.app",
    messagingSenderId: "272667976521",
    appId: "1:272667976521:web:d5ca6d42a2dd924a64b098"
});

const firestoreDB = getFirestore(firebaseApp);
const todoListCollectionRef = collection(firestoreDB, 'todoList');

interface ITodoItem {
    id: string;
    content: string;
    description: string;
    createdAt: string;
    done: boolean;
}

enum TodoFilter {
    All,
    Done,
    Undone
}

export {
    firebaseApp,
    firestoreDB,
    todoListCollectionRef,
    type ITodoItem,
    TodoFilter
}