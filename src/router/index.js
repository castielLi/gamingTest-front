import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/homePage.vue'
import MainTest from '../views/mainTest.vue'
import PricingPage from '../views/pricing.vue'
import FeaturesView from '../views/features.vue'
import LoginView from '../views/login.vue'

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
  },
  {
    path: '/features',
    name: 'features',
    component: FeaturesView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/test',
    name: 'test',
    component: MainTest,
    meta: { requiresAuth: true }
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

// 添加全局路由守卫检查登录状态
router.beforeEach((to, from, next) => {
  // 检查路由是否需要登录权限
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 检查用户是否已登录
    if (localStorage.getItem('esLoggedIn') !== 'true') {
      // 未登录，重定向到登录页面
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      // 已登录，继续导航
      next();
    }
  } else {
    // 不需要登录权限的路由，直接导航
    next();
  }
});

export default router 