

const mainPage = [
  {
    path: '/main',
    component: () => import('@/views/main/index.vue'),
    name: 'Main',
    meta: { title: '主页', icon: 'dashboard', affix: true }
  },
]

export default mainPage