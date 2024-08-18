import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      component: () => import('../views/IndexView.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        // {
        //   path: '/',
        //   name: 'home',
        //   component: () => import('../views/HomeView.vue'),
        // },
      ]
    },
  ]
})

export default router
