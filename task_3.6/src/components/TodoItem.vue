<template>
    <div class="card card-body p-2 pl-5 mb-5">
        <input type="text" class="input" v-model="item.content">
        <div>
            <button class="button mr-2 is-success has-text-light">
                &check;
            </button>
            <button @click="removeItem" class="button is-danger has-text-light">
                &cross;
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
/* IMPORTS */
import type {PropType} from "vue";
import type {ITodoItem} from "@/main.ts";

/* PROPS */
defineProps({
    item: {
        type: Object as PropType<ITodoItem>,
        required: true
    }
});

/* EMITS */
const emit = defineEmits(["RemoveItem"]);

/* METHODS */
const removeItem = () => {
    emit("RemoveItem");
}
</script>

<style scoped>
.card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.input {
    border: none;
    outline: none;
    width: fit-content;
}
</style>