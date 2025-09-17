<template>
    <Dialog :item="currentItem" :is-shown="isDialogShown" @remove-item="removeItem" @close-item-dialog="closeItemDialog" @update-item="updateItem"></Dialog>
    <div class="container theme-light">
        <h1 class="title has-text-centered m-6">Todo list</h1>
        <form @submit.prevent="addItem">
            <div class="add-todo">
                <input v-model="currentAddValue" type="text" class="input mb-5 p-5" placeholder="Add a task">
                <button class="button w-3 mb-5 p-3 is-success has-text-light" :disabled="!currentAddValue">Add</button>
            </div>
            <div class="radios mb-5">
                <label class="radio filter-label" :class="filterValue === ETodoFilter.All ? 'has-background-warning has-text-light' : ''">
                    <input @click="filterValue = ETodoFilter.All" type="radio" value="all" class="filter" name="filter-all" checked>
                    All
                </label>
                <label class="radio filter-label" :class="filterValue === ETodoFilter.Done ? 'has-background-warning has-text-light' : ''">
                    <input @click="filterValue = ETodoFilter.Done" type="radio" value="done" class="filter" name="filter-done">
                    Done
                </label>
                <label class="radio filter-label" :class="filterValue === ETodoFilter.Undone ? 'has-background-warning has-text-light' : ''">
                    <input @click="filterValue = ETodoFilter.Undone" type="radio" value="undone" class="filter" name="filter-undone">
                    Undone
                </label>
            </div>
        </form>
        <TodoList @show-item-dialog="showItemDialog" @update-item="toggleDone" :items="filteredTodoList"/>
    </div>
</template>

<script setup lang="ts">
/* IMPORTS */
import {defineComponent, type Ref, ref, watchEffect} from "vue";
import TodoList from "@/components/TodoList.vue";
import Dialog from "@/components/Dialog.vue";
import {ETodoFilter, firestoreDB, type ITodoItem, todoListCollectionRef} from "@/firebase/firebaseConfig.ts";
import {useCollection} from "vuefire";
import {addDoc, deleteDoc, doc, runTransaction, Transaction} from "firebase/firestore";


/* COMPONENTS */
defineComponent({TodoList, Dialog});


/* DATA */
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
const filterValue: Ref<ETodoFilter> = ref(ETodoFilter.All);
const filteredTodoList = ref(todoList.value);
watchEffect(() => { filteredTodoList.value = todoList.value.filter(todo => {
    if (filterValue.value === ETodoFilter.Done) return todo.done;
    else if (filterValue.value === ETodoFilter.Undone) return !todo.done;
    else return true;
})})


/* METHODS */
const addItem = async () => {
    try {
        await addDoc(todoListCollectionRef, {
            content: currentAddValue.value,
            description: '',
            createdAt: new Date().toDateString(),
            done: false
        });

        currentAddValue.value = "";
    }
    catch (error) {
        console.log("Error adding item", error);
    }
};
const removeItem = async (id: string) => {
    try {
        await deleteDoc(doc(todoListCollectionRef, id));
    }
    catch (error) {
        console.log("Error deleting item", error);
    }

    closeItemDialog();
}
const updateItem = async (item: ITodoItem) => {
    try {
        const taskRef = doc(todoListCollectionRef, item.id);

        await runTransaction(firestoreDB, async (transaction: Transaction) => {
            const takeSnapshot = await transaction.get(taskRef);
            if (!takeSnapshot.exists()) return;

            transaction.update(taskRef, {
                content: item.content,
                description: item.description,
                createdAt: item.createdAt,
                done: item.done
            });
        });
    }
    catch (error) {
        console.log("Error editing item", error);
    }

    closeItemDialog();
}
const toggleDone = async (id: string) => {
    const taskRef = doc(todoListCollectionRef, id);

    await runTransaction(firestoreDB, async (transaction: Transaction) => {
        const taskSnapshot = await transaction.get(taskRef);
        if (!taskSnapshot.exists()) return;

        transaction.update(taskRef, { done: !taskSnapshot.data().done });
    });
};
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
