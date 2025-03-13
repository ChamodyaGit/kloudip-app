import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Modal2 from '../pages/Modal2.vue';
import Modal3 from '../pages/Modal3.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/modal2', component: Modal2 },
    { path: '/modal3', component: Modal3 },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;