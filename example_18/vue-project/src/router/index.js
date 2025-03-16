import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonneDetailsView from '@/views/PersonneDetailsView.vue'
import AddressView from '@/views/AddressView.vue'
import PersonneShowView from '@/views/PersonneShowView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { formToJSON } from 'axios'
import PersonneAddressView from '@/views/PersonneAddressView.vue'
import PersonneSportView from '@/views/PersonneSportView.vue'
import DynamicView from '@/views/DynamicView.vue'


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
    component: PersonneShowView
  },
  {
    path: '/personne/:id(\\d)',
    name: 'personne-details',
    props: true,
    component: PersonneDetailsView,
    children: [
      {
        path: 'address',
        component: PersonneAddressView
      },
      {
        path: 'sport',
        component: PersonneSportView
      }
    ]
  },
  {
    path: '/address',
    name: 'adress',
    meta: {title: 'Address'},
    component: AddressView,
  },
  {
    path: '/dynamic_view',
    name: 'adress',
    meta: {title: 'Address'},
    component: DynamicView,
  },
  {
    path: '/about',
    name: 'about',
    meta: {title: 'About'},
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',  // this is for VueJS3
    // path: '/:caltchAll(.*)',  // this is for VueJS2
    name: 'NotFound',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach( (to,form,next) => {
document.title = to.meta.title || 'Default Title';
next();
});

export default router
