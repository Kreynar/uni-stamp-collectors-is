// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App_OLD.vue'
import router from './router/indexRouter.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import store from './stores/mainStore.js'

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
  store,
  template: '<App/>',
  components: { App }
})
