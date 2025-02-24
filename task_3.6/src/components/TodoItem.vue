<template>
    <div @click.self="showMore(item.content)" class="card card-body p-2 pl-5 mb-5" :class="{'has-background-success-light' : item.done}">
        <div type="text" :class="{'has-text-overline has-text-success' : item.done}">{{item.content}}</div>
        <div>
            <button @click="updateItem" class="button mr-2" :class="{'has-background-success has-text-light' : item.done}">
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
import type {ITodoItem} from "@/firebase/firebaseConfig.ts";


/* PROPS */
const props = defineProps({
    item: {
        type: Object as PropType<ITodoItem>,
        required: true
    }
});


/* EMITS */
const emit = defineEmits(["removeItem", "updateItem"]);


/* METHODS */
const removeItem = () => {
    emit("removeItem");
};
const updateItem = () => {
    emit("updateItem");
};
const showMore = (content: string) => {
    console.log("Show dialog for: " + `${content}`);
};
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
    background: transparent;
}
.has-text-overline {
    text-decoration: line-through;
}
</style>