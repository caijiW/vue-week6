import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/front/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/front/IndexView.vue')
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/front/AboutView.vue')
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/front/OrderView.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/front/LoginView.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/dashboard/AdminView.vue'),
    children: [
      {
        path: 'Products',
        name: 'adimproducts',
        component: () => import('../views/dashboard/ProductsView.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/dashboard/OrdersView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
