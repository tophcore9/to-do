<template>
    <div @click.self="showItemDialog" class="card card-body p-2 pl-5 mb-5" :class="{'has-background-success-light' : item.done}">
        <div type="text" :class="{'has-text-overline has-text-success' : item.done}">{{item.content}}</div>
        <div>
            <button @click="updateItem" class="button mr-2" :class="{'has-background-success has-text-light' : item.done}">
                &check;
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
/* IMPORTS */
import type { PropType } from "vue";
import type { ITodoItem } from "@/firebase/firebaseConfig.ts";


/* PROPS */
const props = defineProps({
    item: {
        type: Object as PropType<ITodoItem>,
        required: true
    }
});


/* EMITS */
const emit = defineEmits(["removeItem", "updateItem", "showItemDialog"]);


/* METHODS */
const removeItem = () => {
    emit("removeItem");
};
const updateItem = () => {
    emit("updateItem");
};
const showItemDialog = () => {
    emit("showItemDialog");
};
</script>

<style scoped>
@import '../assets/style/todo_item.css';
</style>