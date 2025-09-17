import { createApp } from 'vue';
import App from './App.vue';

import { VueFire } from 'vuefire';
import { firebaseApp } from './firebase/firebaseConfig.ts';

const app = createApp(App);

app.use(VueFire, {firebaseApp});

app.mount('#app');
