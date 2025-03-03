<template>
    <div v-for="(item, index) in items">
        <TodoItem @show-item-dialog="showItemDialog(item.id)" @remove-item="removeItem(item.id)" @update-item="updateItem(item.id)" :item="item" :key="index"/>
    </div>
</template>

<script setup lang="ts">
/* IMPORTS */
import {defineComponent, type PropType} from "vue";
import TodoItem from "@/components/TodoItem.vue";
import "@/main.ts";
import type {ITodoItem} from "@/firebase/firebaseConfig.ts";


/* COMPONENTS */
defineComponent({
    TodoItem
});


/* PROPS */
defineProps({
    items: {
        type: Object as PropType<ITodoItem[]>,
        required: true
    }
})


/* EMITS */
const emit = defineEmits(["removeItem", "updateItem", "showItemDialog"]);


/* METHODS */
const removeItem = (id: string) => {
    emit("removeItem", id);
}
const updateItem = (id: string) => {
    emit("updateItem", id);
}
const showItemDialog = (id: string) => {
    emit("showItemDialog", id);
}
</script>