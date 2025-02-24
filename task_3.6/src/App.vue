<template>
    <div class="container theme-light">
        <h1 class="title has-text-centered">Todo list</h1>
        <form @submit.prevent="addItem" class="add-todo mb-4">
            <input v-model="currentAddValue" type="text" class="input mb-5 p-5" placeholder="Add a task">
            <button class="button w-3 mb-5 p-3 is-success has-text-light" :disabled="!currentAddValue">Add</button>
        </form>
        <TodoList @remove-item="removeItem" @update-item="updateItem" :items="todoList"/>
    </div>
</template>

<script setup lang="ts">
/* IMPORTS */
import {defineComponent, onMounted, type Ref, ref} from "vue";
import TodoList from "@/components/TodoList.vue";
import {type ITodoItem, todoListCollectionRef} from "@/firebase/firebaseConfig.ts";
import { doc, onSnapshot, addDoc, deleteDoc, updateDoc } from "firebase/firestore";


/* COMPONENTS */
defineComponent({TodoList});


/* REACTIVE DATA */
const todoList: Ref<ITodoItem[]> = ref([]);
const currentAddValue = ref('');


/* MOUNTING */
onMounted(async () => {
    onSnapshot(todoListCollectionRef, (querySnapshot) => {
        let newTodoList: ITodoItem[] = [];

        querySnapshot.forEach((doc) => {
            newTodoList.push({
                id: doc.id,
                content: doc.data().content,
                done: doc.data().done
            });
        });

        todoList.value = newTodoList;
    });
})


/* METHODS */
const addItem = () => {
    addDoc(todoListCollectionRef, {
        content: currentAddValue.value,
        done: false
    });

    currentAddValue.value = "";
};
const removeItem = (id: string) => {
    deleteDoc(doc(todoListCollectionRef, id));
}
const updateItem = (id: string) => {
    const index = todoList.value.findIndex(task => task.id === id);

    updateDoc(doc(todoListCollectionRef, id), {
        done: !todoList.value[index].done
    })
}
</script>

<style>
@import 'bulma/css/bulma.css';

.container {
    padding: 10px;
    max-width: 700px !important;
}

.add-todo {
    display: flex;
    justify-content: stretch;
    align-items: center;
    gap: 5px;
}
</style>
