/**
 * Created by Martynas on 2017-12-05.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import stampDialogStore from './stampDialogStore.js'

// import actions from './actions.js'
// import mutations from './mutations.js'
// import getters from './getters.js'

Vue.use(Vuex)

// const mainStore = new Vuex.Store({
//   modules: {
//     stampsStore
//   },
//   state: {
//     isStampDialogVisible: false
//     // registrations: [],
//     // users: [
//     //   {id: 1, name: 'Max', registered: false},
//     //   {id: 2, name: 'Anna', registered: false}
//     // ]
//   },
//   getters: {
//     getIsStampDialogVisible (state) {
//       return state.isStampDialogVisible
//     }
//   },
//   mutations: {
//     setIsStampDialogVisible (state, booleanValue) {
//       state.isStampDialogVisible = booleanValue
//     }
//   }
//   // getters,
//   // mutations,
//   // actions
// })
//
// module.exports = mainStore

export default new Vuex.Store({
  modules: {
    stampDialogStore
  },
  state: () => ({
    isStampDialogVisible: false
  }),
  // state: {
  //   isStampDialogVisible: false,
  //   testValue: 'testValue in mainStore.js'
  //   // registrations: [],
  //   // users: [
  //   //   {id: 1, name: 'Max', registered: false},
  //   //   {id: 2, name: 'Anna', registered: false}
  //   // ]
  // },
  getters: {
    getIsStampDialogVisible (state) {
      return state.isStampDialogVisible
    }
  },
  mutations: {
    setIsStampDialogVisible (state, booleanValue) {
      state.isStampDialogVisible = booleanValue
    }
  }
  // getters,
  // mutations,
  // actions
})
