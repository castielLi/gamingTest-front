import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/homePage.vue'
import MainTest from '../views/mainTest.vue'
import PricingPage from '../views/pricing.vue'

const routes = [
  {
    path: '/maintest',
    name: 'MainTest',
    component: MainTest
  },
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: PricingPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 