require('./bootstrap');

import { createApp } from "vue";
import Index from "./Index";
import router from './router'
import store from './store'

const app = createApp({
    components: {
        Index
    }

}).use(router).use(store).mount('#index')

