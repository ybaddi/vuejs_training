import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompteurView from '@/views/CompteurView.vue'
import CompteurSetupView from '@/views/CompteurSetupView.vue'
import Calculette from '@/views/Calculette.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/counter',
      name: 'counter',
      component: CompteurView,
    },
    {
      path: '/counter_setup',
      name: 'counter_setup',
      component: CompteurSetupView,
    },
    {
      path: '/calculette',
      name: 'calculette',
      component: Calculette,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
