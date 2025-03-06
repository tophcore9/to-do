<template>
    <div v-if="isShown" class="dialog">
        <div class="dialog-content theme-light">
            <div class="is-align-self-flex-end">
                <button @click="updateItem" class="button is-align-self-flex-end theme-light is-success has-text-light">Save</button>
                <button @click="closeItemDialog" class="button is-align-self-flex-end is-danger has-text-light ml-2">Cancel</button>
            </div>

            <label class="label">
                Task:
                <input class="input" v-model="currentItemToAdd.content" type="text">
            </label>

            <label class="label">
                Description:
                <textarea class="textarea" v-model="currentItemToAdd.description" rows="8"></textarea>
            </label>

            <label class="label">
                Created at:
                <input class="input" v-model="currentItemToAdd.createdAt" type="text" disabled>
            </label>

            <button @click="currentItemToAdd.done = !currentItemToAdd.done" class="button mt-3 is-align-self-flex-start has-text-light" :class="currentItemToAdd.done ? 'is-success' : 'is-danger'">{{item.done ? 'Checked' : 'Unchecked'}}</button>

            <button @click="removeItem(item.id)" class="delete-button button is-danger has-text-light">
                Delete
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
/* IMPORTS */
import {type PropType, ref, type Ref, watch} from "vue";
import type {ITodoItem} from "@/firebase/firebaseConfig.ts";


/* EMITS */
const emit = defineEmits(["closeItemDialog", "removeItem", "updateItem"]);


/* PROPS */
const props = defineProps({
    item: {
        type: Object as PropType<ITodoItem>,
        required: true,
    },
    isShown: {
        type: Boolean,
        required: true
    }
});


/* DATA */
const currentItemToAdd: Ref<ITodoItem> = ref({ ...props.item });


/* WATCH */
watch(() => props.item, (newVal) => {
    currentItemToAdd.value = { ...newVal };
}, { immediate: true });


/* METHODS */
const closeItemDialog = () => {
    emit("closeItemDialog");
}
const updateItem = () => {
    emit("updateItem", currentItemToAdd.value);
}
const removeItem = (id: string) => {
    emit("removeItem", id);
}
</script>

<style scoped>
@import "../assets/style/dialog.css";
</style>