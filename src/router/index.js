import {createRouter, createWebHistory} from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
