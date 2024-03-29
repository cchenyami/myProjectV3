import { createWebHistory, createRouter } from 'vue-router'

export const routes = [
  {
    path: '/',
    component: () => import('@/views/main/index.vue'),
    hidden: true
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;