import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/concerts', component: () => import('@/components/ListConcert.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router
