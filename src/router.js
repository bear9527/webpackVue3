
import { createRouter , createWebHashHistory } from "vue-router"

import Home from "./compontents/Home.vue"
import About from "./compontents/About.vue"

export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
}) 



