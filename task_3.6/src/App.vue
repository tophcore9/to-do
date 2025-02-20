<template>
    <div class="container">
        <h1 class="title">Todo list</h1>
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
</style>
