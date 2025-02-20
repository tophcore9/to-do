<template>
    <div v-for="item in items">
        <div class="card card-body p-2 pl-5 mb-5">
            <input type="text" class="input" v-model="item.content">
            <div>
                <button class="button mr-2 is-success has-text-light">
                    &check;
                </button>
                <button class="button is-danger has-text-light">
                    &cross;
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineComponent, ref} from "vue";
import TodoItem from "@/components/TodoItem.vue";

defineComponent({
    TodoItem
});

defineProps({
    items: {
        type: Object,
        required: true
    }
})
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