<template>
    <div class="container theme-light">
        <h1 class="title has-text-centered">Todo list</h1>
        <form @submit.prevent="addItem" class="add-todo mb-4">
            <input v-model="currentAddValue" type="text" class="input mb-5 p-5" placeholder="Add a task">
            <button class="button w-3 mb-5 p-3 is-success has-text-light" :disabled="!currentAddValue">Add</button>
        </form>
        <TodoList @remove-item="removeItem" :items="todos"/>
    </div>
</template>

<script setup lang="ts">
/* IMPORTS */
import {defineComponent, type Ref, ref} from "vue";
import TodoList from "@/components/TodoList.vue";
import { v4 as uuidv4 } from 'uuid';
import type {ITodoItem} from "@/main.ts";

/* COMPONENTS */
defineComponent({TodoList});

/* REACTIVE DATA */
const todos: Ref<ITodoItem[]> = ref([
    {
        id: 1,
        content: 'FIRST TASK',
        done: false
    },
    {
        id: 2,
        content: 'SECOND TASK',
        done: true
    },
    {
        id: 3,
        content: 'THIRD TASK',
        done: false
    },
]);
const currentAddValue = ref('');

/* METHODS */
const addItem = () => {
    todos.value.push({
        id: uuidv4(),
        content: currentAddValue.value,
        done: false
    });
};
const removeItem = (id: string) => {
    todos.value = todos.value.filter(todo => todo.id !== id);
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
