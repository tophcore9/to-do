<template>
    <div v-for="item in todos">
        <div class="card card-body p-2 pl-5 mb-5">
            <div>
                {{item.content}}
            </div>
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

const todos = ref([
    {
        id: 1,
        content: 'Feed the cat',
        done: true
    },
    {
        id: 2,
        content: 'Feed yourself',
        done: false
    },
    {
        id: 3,
        content: 'Take a shower',
        done: false
    },
    {
        id: 4,
        content: 'Something important',
        done: true
    },
])

defineComponent({
    TodoItem
});

defineProps({
    // items: {
    //     type: TodoItem,
    //
    // }
})
</script>

<style scoped>
.card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>