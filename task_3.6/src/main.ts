import { createApp } from 'vue';
import App from './App.vue';

export interface ITodoItem {
    id: string;
    content: string;
    done: boolean;
}

const app = createApp(App);
app.mount('#app');
