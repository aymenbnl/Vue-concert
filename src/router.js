import { createRouter, createWebHistory } from 'vue-router'
import App from "@/App.vue";
import listConcert from "@/components/ListConcert.vue";

const User = {
    template: '<div>User</div>',
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: App },
        { path: '/concerts', component: listConcert },
        { path: '/user', component: User},
    ],
})


export default router
