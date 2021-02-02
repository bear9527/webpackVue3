
import { createRouter , createWebHashHistory } from "vue-router"

import Home from "./compontents/home/index.vue"
import About from "./compontents/about/index.vue"

import Login from "./compontents/login/index.vue"
import Reg from "./compontents/reg/index.vue"

export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/reg', component: Reg },
    { path: '/login', component: Login },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
}) 



