import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonneDetailsView from '@/views/PersonneDetailsView.vue'
import AddressView from '@/views/AddressView.vue'
import PersonneShowView from '@/views/PersonneShowView.vue'


const routes= [
  {
    path: '/',
    alias: ['/home', '/acceuil'],
    name: 'home',
    component: HomeView,
  },
  {
    path: '/personne',
    name: 'personne-show',
    props: true,
    redirect: to => {
      return {name:'adress', query: {ville:'Rabat'}}
    }
  },
  {
    path: '/personne/:id(\\d)',
    name: 'personne-details',
    props: true,
    component: PersonneDetailsView,
  },
  {
    path: '/address',
    name: 'adress',
    component: AddressView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
