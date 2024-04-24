import { createWebHistory, createRouter } from 'vue-router'

import Layout from '@/layout/index.vue';
import mainPage from './mainPage';
export const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    hidden: true,
    redirect: '/main',
    children: mainPage
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;