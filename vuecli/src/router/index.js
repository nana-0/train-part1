import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Test from '../views/Test'
import A from './../views/A'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/home',
    component: Home,
    children:[
      {
        path:'a',
        component:A,
      }
    ]
  },
  {
    path:'/test',
    component: Test
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
