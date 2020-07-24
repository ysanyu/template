import router from './router'
// import store from './store' // vuex
// import { getCookie } from './utils/cookie' // 获取cookie

router.beforeEach(async(to, from, next) => {
  // set page title
  document.title = to.meta.title
  next()
})
