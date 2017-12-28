import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld_OLD.vue'
import About from '../components/About.vue'
import Register from '../components/Register.vue'
// import vv from '../variables.js'

Vue.use(Router)

const vueRouter = new Router({
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
    },
    {
      path: '/about',
      // path: vv.path.register,
      name: 'About',
      component: About
    }
  ]
})

// vueRouter.beforeEach(function (to, from, next) {
//   setTimeout(() => {
//     window.scrollTo(0, 0)
//   }, 100)
//   // setTimeout(() => {
//   //   window.scrollTo(0, 0)
//   // }, 1000)
//   // setTimeout(() => {
//   //   window.scrollTo(0, 0)
//   // }, 2000)
//   next()
// })

export default vueRouter
