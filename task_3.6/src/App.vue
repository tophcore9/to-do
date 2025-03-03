<template>
    <div v-if="isDialogShown" class="dialog">
        <div class="dialog-content">
            <button @click="closeItemDialog" class="close-button theme-light">X</button>

            <div>
                <div>{{currentItem.content}}</div>
                <div>{{currentItem.done}}</div>
            </div>
        </div>
    </div>
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
        <TodoList @show-item-dialog="showItemDialog" @remove-item="removeItem" @update-item="updateItem" :items="filteredTodoList"/>
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
const todoList: Ref<ITodoItem[]> = useCollection<ITodoItem>(todoListCollectionRef);
const isDialogShown = ref(false);
const currentItem: Ref<ITodoItem> = ref({
    id: '',
    content: '',
    done: false,
});

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
const showItemDialog = (id: string) => {
    const index = todoList.value.findIndex(task => task.id === id);

    currentItem.value = {
        id: todoList.value[index].id,
        content: todoList.value[index].content,
        done: todoList.value[index].done
    }

    isDialogShown.value = true;
}
const closeItemDialog = () => {
    isDialogShown.value = false;
}
</script>

<style>
@import './assets/css/app.css';
.dialog {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    background-color: rgba(0, 0, 0, 0.5);
}
.dialog-content {
    height: 100%;
    max-width: 50%;
}
.close-button {

}
</style>
