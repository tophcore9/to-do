<template>
    <div v-if="isShown" class="dialog">
        <div class="dialog-content">
            <button @click="closeItemDialog" class="close-button theme-light">X</button>

            <div>
                <div>{{item.content}}</div>
                <div>{{item.description}}</div>
                <div>{{item.done}}</div>
                <div>{{item.createdAt}}</div>
                <button @click="removeItem(item.id)" class="button is-danger has-text-light">
                    &cross;
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
/* IMPORTS */
import type {PropType} from "vue";
import type {ITodoItem} from "@/firebase/firebaseConfig.ts";


/* EMITS */
const emit = defineEmits(["closeItemDialog", "removeItem"]);


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


/* METHODS */
const closeItemDialog = () => {
    emit("closeItemDialog");
}
const removeItem = (id: string) => {
    emit("removeItem", id);
}
</script>

<style scoped>

</style>