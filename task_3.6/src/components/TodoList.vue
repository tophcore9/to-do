<template>
    <div v-for="i in 3">
        <div class="card card-body p-2 mb-5 theme-light">
            <div>
                Test task {{i}}
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
import {defineComponent} from "vue";
import TodoItem from "@/components/TodoItem.vue";

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