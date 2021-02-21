import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './compontents/home/index.vue';
import List from './compontents/list/index.vue';
import About from './compontents/about/index.vue';
import Login from './compontents/login/index.vue';
import Reg from './compontents/reg/index.vue';

export var routes = [{
  path: '/',
  component: Home,
}, {
  path: '/list',
  component: List,
}, {
  path: '/about',
  component: About,
}, {
  path: '/reg',
  component: Reg,
}, {
  path: '/login',
  component: Login,
}];
export var router = createRouter({
  history: createWebHashHistory(),
  routes,
});
