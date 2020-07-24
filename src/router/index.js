import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Test',
    component: () => import('@/views/test'),
    meta: { title: '测试' }
  }
]

const router = new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router

