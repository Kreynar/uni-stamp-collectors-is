import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld_OLD.vue'
import Register from '../components/Register.vue'
// import vv from '../strings.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      // path: vv.path.register,
      name: 'Register',
      component: Register
    }
  ]
})
