<template>
    <div class="container theme-light">
        <h1 class="title has-text-centered">Todo list</h1>
        <form @submit.prevent="addItem" class="add-todo mb-4">
            <input v-model="currentAddValue" type="text" class="input mb-5 p-5" placeholder="Add a task">
            <button class="button w-3 mb-5 p-3 is-success has-text-light" :disabled="!currentAddValue">Add</button>
        </form>
        <TodoList @remove-item="removeItem" :items="todoList"/>
    </div>
</template>

<script setup lang="ts">
/* IMPORTS */
import {defineComponent, onMounted, type Ref, ref} from "vue";
import TodoList from "@/components/TodoList.vue";
import { v4 as uuidv4 } from 'uuid';
import type {ITodoItem} from "@/main.ts";
import { firestoreDB } from "@/firebase/config.ts";
import { collection, getDocs } from "firebase/firestore";

/* MOUNTING */
onMounted(async () => {
    const querySnapshot = await getDocs(collection(firestoreDB, "todoList"));

    let newTodoList: ITodoItem[] = [];

    querySnapshot.forEach((doc) => {
        newTodoList.push({
            id: doc.id,
            content: doc.data().content,
            done: doc.data().done
        });
    });

    todoList.value = newTodoList;
})

/* COMPONENTS */
defineComponent({TodoList});

/* REACTIVE DATA */
const todoList: Ref<ITodoItem[]> = ref([]);
const currentAddValue = ref('');

/* METHODS */
const addItem = () => {
    todoList.value.push({
        id: uuidv4(),
        content: currentAddValue.value,
        done: false
    });
};
const removeItem = (id: string) => {
    todoList.value = todoList.value.filter(todo => todo.id !== id);
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
