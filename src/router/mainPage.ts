

const mainPage = [
  {
    path: '/main',
    component: () => import('@/views/main/index.vue'),
    name: 'Main',
    meta: { title: '主页', icon: 'dashboard', affix: true }
  },
  {
    path: '/about',
    component: () => import('@/views/about/index.vue'),
    name: 'About',
    meta: { title: '其他', icon: 'dashboard', affix: true }
  },
  {
    path: '/css',
    component: () => import('@/views/css/index.vue'),
    name: 'Css',
    meta: { title: 'css', icon: 'dashboard', affix: true }
  },
]

export default mainPage