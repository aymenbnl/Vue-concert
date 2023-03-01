import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/concerts', component: () => import('@/components/ListConcert.vue') },
    { path: '/concerts/:id', name: 'getConcert', component: () => import('@/components/GetConcert.vue') },
    { path: '/salles', component: () => import('@/components/ListSalle.vue') },
    { path: '/salles/:id', name: 'getSalle', component: () => import('@/components/GetSalle.vue') },
    { path: '/soirees', component: () => import('@/components/ListSoiree.vue') },
    { path: '/soirees/:id', name: 'getSoiree', component: () => import('@/components/GetSoiree.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router
