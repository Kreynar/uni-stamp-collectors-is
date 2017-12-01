// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './AppOLD.vue'
import router from './router/index.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Main from './Main.vue'

Vue.config.productionTip = false

Vue.use(Vuetify)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
new Vue({
  el: '#app',
  router,
  template: '<Main/>',
  components: { Main }
})
