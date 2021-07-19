import Vue from 'vue'
import App from './App.vue'
import router from './assets/router.js'
import './assets/def-directive'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
