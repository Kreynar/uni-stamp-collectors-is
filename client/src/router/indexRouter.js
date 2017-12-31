import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld_OLD.vue'
import About from '../components/About.vue'
import Register from '../components/Register.vue'
import IndexStamps from '../components/stamps/IndexStamps.vue'
import UserList from '../components/UserList.vue'
// import mainStore from '../stores/mainStore.js'
// import vv from '../variables.js'

Vue.use(Router)

const vueRouter = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/stamps',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/stamps',
      // path: vv.path.register,
      name: 'stamps',
      component: IndexStamps
    },
    {
      path: '/users/:username/stamps',
      // path: vv.path.register,
      name: 'usersUsernameStamps',
      component: IndexStamps
    },
    {
      path: '/users',
      // path: vv.path.register,
      name: 'users',
      component: UserList
    },
    {
      path: '/register',
      // path: vv.path.register,
      name: 'register',
      component: Register
    },
    {
      path: '/about',
      // path: vv.path.register,
      name: 'about',
      component: About
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
//
// vueRouter.beforeEach((to, from, next) => {
//   console.log('@@@ beforeEach (to, from, next)')
//   mainStore.state.isSomethingLoading = true
//   ++mainStore.state.testVariable
//   next()
// })
//
// vueRouter.afterEach((to, from, next) => {
//   console.log('@@@ async afterEach (to, from, next)')
//   // setTimeout(() => {
//   //   mainStore.state.isSomethingLoading = false
//   // }, 1500) // timeout for demo purposes
//   mainStore.state.isSomethingLoading = false
//   ++mainStore.state.testVariable
//   next()
// })

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
