import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'ws://localhost:3000',
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
