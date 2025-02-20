<template>
    <div class="container theme-light">
        <h1 class="title has-text-centered">Todo list</h1>
        <div class="add-todo">
            <input type="text" class="input mb-5 p-5" placeholder="Add a task">
            <button class="button w-3 mb-5 p-3 is-success has-text-light">Add</button>
        </div>
        <TodoList/>
    </div>
</template>

<script setup lang="ts">
    import {defineComponent} from "vue";
    import TodoList from "@/components/TodoList.vue";

    defineComponent({TodoList});
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
