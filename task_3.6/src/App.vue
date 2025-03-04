<template>
    <Dialog :item="currentItem" :is-shown="isDialogShown" @remove-item="removeItem" @close-item-dialog="closeItemDialog" @update-item="updateItem"></Dialog>
    <div class="container theme-light">
        <h1 class="title has-text-centered">Todo list</h1>
        <form @submit.prevent="addItem">
            <div class="add-todo mb-4">
                <input v-model="currentAddValue" type="text" class="input mb-5 p-5" placeholder="Add a task">
                <button class="button w-3 mb-5 p-3 is-success has-text-light" :disabled="!currentAddValue">Add</button>
            </div>
            <div class="radios mb-4">
                <label class="radio filter-label" :class="filterValue === TodoFilter.All ? 'has-background-warning has-text-light' : ''">
                    <input @click="filterValue = TodoFilter.All" type="radio" value="all" class="filter" name="filter-all" checked>
                    All
                </label>
                <label class="radio filter-label" :class="filterValue === TodoFilter.Done ? 'has-background-warning has-text-light' : ''">
                    <input @click="filterValue = TodoFilter.Done" type="radio" value="done" class="filter" name="filter-done">
                    Done
                </label>
                <label class="radio filter-label" :class="filterValue === TodoFilter.Undone ? 'has-background-warning has-text-light' : ''">
                    <input @click="filterValue = TodoFilter.Undone" type="radio" value="undone" class="filter" name="filter-undone">
                    Undone
                </label>
            </div>
        </form>
        <TodoList @show-item-dialog="showItemDialog" @update-item="toggleDone" :items="filteredTodoList"/>
    </div>
</template>

<script setup lang="ts">
/* IMPORTS */
import {computed, defineComponent, type Ref, ref} from "vue";
import TodoList from "@/components/TodoList.vue";
import Dialog from "@/components/Dialog.vue";
import {type ITodoItem, TodoFilter, todoListCollectionRef} from "@/firebase/firebaseConfig.ts";
import {useCollection} from "vuefire";
import {addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";


/* COMPONENTS */
defineComponent({TodoList, Dialog});


/* REACTIVE DATA */
const todoList: Ref<ITodoItem[]> = useCollection<ITodoItem>(todoListCollectionRef);
const isDialogShown = ref(false);
const currentItem: Ref<ITodoItem> = ref({
    id: '',
    content: '',
    description: '',
    createdAt: '',
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
        description: '',
        createdAt: new Date().toDateString(),
        done: false
    });

    currentAddValue.value = "";
};
const removeItem = (id: string) => {
    closeItemDialog();
    deleteDoc(doc(todoListCollectionRef, id));
}
const updateItem = (item: ITodoItem) => {
    closeItemDialog();
    updateDoc(doc(todoListCollectionRef, item.id), {
        content: item.content,
        description: item.description,
        createdAt: item.createdAt,
        done: item.done
    });
}
const toggleDone = (id: string) => {
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
        description: todoList.value[index].description,
        createdAt: todoList.value[index].createdAt,
        done: todoList.value[index].done
    }

    isDialogShown.value = true;
}
const closeItemDialog = () => {
    isDialogShown.value = false;
}
</script>

<style>
@import 'assets/style/app.css';
</style>
