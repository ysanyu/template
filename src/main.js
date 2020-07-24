import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import '@/style/reset.css'
import '@/style/common.css'
import 'amfe-flexible/index'

import Vconsole from 'vconsole'

const envId = process.env.VUE_APP_SERVER_ID
if (envId === 0) {
  const vConsole = new Vconsole()
  Vue.use(vConsole)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
