<template>
    <div class="container theme-light">
        <h1 class="title has-text-centered">Todo list</h1>
        <form @submit.prevent="addItem">
            <div class="add-todo mb-4">
                <input v-model="currentAddValue" type="text" class="input mb-5 p-5" placeholder="Add a task">
                <button class="button w-3 mb-5 p-3 is-success has-text-light" :disabled="!currentAddValue">Add</button>
            </div>
            <div class="radios mb-4">
                <label class="radio">
                    <input @click="filterValue = TodoFilter.All" type="radio" value="all" name="filter" checked>
                    All
                </label>
                <label class="radio">
                    <input @click="filterValue = TodoFilter.Done" type="radio" value="done" name="filter">
                    Done
                </label>
                <label class="radio">
                    <input @click="filterValue = TodoFilter.Undone" type="radio" value="undone" name="filter">
                    Undone
                </label>
            </div>
        </form>
        <TodoList @remove-item="removeItem" @update-item="updateItem" :items="filteredTodoList"/>
    </div>
</template>

<script setup lang="ts">
/* IMPORTS */
import { computed, defineComponent, type Ref, ref } from "vue";
import TodoList from "@/components/TodoList.vue";
import { type ITodoItem, TodoFilter, todoListCollectionRef } from "@/firebase/firebaseConfig.ts";
import { useCollection } from "vuefire";
import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";


/* COMPONENTS */
defineComponent({TodoList});


/* REACTIVE DATA */
const todoList: Ref<ITodoItem[]> = useCollection(todoListCollectionRef);

// Value that is in input for adding a new task
const currentAddValue = ref('');

// Filters
const filterValue: Ref<TodoFilter> = ref(TodoFilter.All);
const filteredTodoList = computed(() => {
    if (filterValue.value === TodoFilter.Done) {
        return todoList.value.filter(todo => todo.done);
    } else if (filterValue.value === TodoFilter.Undone) {
        return todoList.value.filter(todo => !todo.done);
    } else {
        return todoList.value;
    }
});


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
@import './assets/css/app.css';
</style>
