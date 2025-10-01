import HomeViews from '@/views/HomeViews.vue'
import NotFound from '@/views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViews,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

export default router
