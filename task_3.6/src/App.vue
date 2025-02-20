<template>
    <div class="container theme-light">
        <h1 class="title has-text-centered">Todo list</h1>
        <form @submit.prevent="addItem" class="add-todo mb-4">
            <input v-model="currentAddValue" type="text" class="input mb-5 p-5" placeholder="Add a task">
            <button class="button w-3 mb-5 p-3 is-success has-text-light" :disabled="!currentAddValue">Add</button>
        </form>
        <TodoList :items="todos"/>
    </div>
</template>

<script setup lang="ts">
import {defineComponent, ref} from "vue";
    import TodoList from "@/components/TodoList.vue";

    defineComponent({TodoList});

    /* VARIABLES */
    const todos = ref([
        {
            id: 1,
            content: 'Feed the cat',
            done: true
        },
        {
            id: 2,
            content: 'Feed yourself',
            done: false
        },
        {
            id: 3,
            content: 'Take a shower',
            done: false
        },
        {
            id: 4,
            content: 'Something important',
            done: true
        },
    ]);
    const currentAddValue = ref('');

    /* METHODS */
    const addItem = () => {
        todos.value.push({
            id: 1,
            content: currentAddValue.value,
            done: false
        });
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
