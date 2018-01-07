/**
 * Created by Martynas on 2017-12-05.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import strings from '../strings.js'
import stampStore from './stampStore.js'
import userStore from './userStore.js'

// import actions from './actions.js'
// import mutations from './mutations.js'
// import getters from './getters.js'

Vue.use(Vuex)

const mainStore = new Vuex.Store({
  modules: {
    stampStore,
    userStore
  },
  state: () => ({
    mainColorOfTheme: strings.mainColorOfTheme,
    secondaryColorOfTheme: strings.secondaryColorOfTheme,
    tertiaryColorOfTheme: strings.tertiaryColorOfTheme,
    isStampDialogVisible: false,
    /*
     * Later, when we open stamp dialog, we change stampDialogMode to according value in strings.stampDialog.mode.<mode>
     */
    stampDialogMode: null,
    snackbarMessage: 'lalala',
    isSnackbarDisplayed: false,
    snackbarColor: 'success',
    /*
     * doesStampListNeedToReload specific value doesn't matter. It is only used in StampList.vue, where is computed: and
     * watch:, where doesStampListNeedToReload value change is being listened. When value changes, stamp list reloads.
     */
    doesStampListNeedToReload: 1,
    doStatisticsNeedToReload: 1,
    isSomethingLoading: false,
    /*
     * doesSearchAndSortNeedToReset specific value doesn't matter. It is only used to inform SearchAndSortPanel, that
     * it needs to reset. Firstly, some component (for now - only Navigation drawer buttons) changes value
     * of doesSearchAndSortNeedToReset. Then in SearchAndSortPanel.vue we have this variable changes being
     * listened by computed: and watch:, which together work to reset search and sort panel.
     */
    doesSearchAndSortNeedToReset: 1
    // testVariable: 1
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
    },
    getStampDialogMode (state) {
      return state.stampDialogMode
    }
  },
  mutations: {
    setIsStampDialogVisible (state, booleanValue) {
      state.isStampDialogVisible = booleanValue
      // ++state.stampStore.testVariable
    },
    setStampDialogMode (state, mode) {
      state.stampDialogMode = mode
    },
    triggerDoesStampListNeedToReload (state) {
      // state.doesStampListNeedToReload = state.doesStampListNeedToReload + 1
      ++(state.doesStampListNeedToReload)
    },
    triggerDoStatisticsNeedToReload (state) {
      ++(state.doStatisticsNeedToReload)
    },
    triggerDoesSearchAndSortNeedToReset (state) {
      ++(state.doesSearchAndSortNeedToReset)
    }
  }
  // getters,
  // mutations,
  // actions
})

// mainStore.watch((state) => state.stampStore.marketValue, (newValue, oldValue) => {
//   // newValue.stampStore.marketValue.value = null
//   // newValue.getters.getMarketValue = null
//   console.log('@@@ in mainStore.watch(...) 1', newValue, newValue.value)
//   if (newValue.value) {
//     console.log('@@@ in mainStore.watch(...) 2', newValue, newValue.value)
//     newValue.value = newValue.value.trim()
//     // newValue.value = 'qweqwe'
//     console.log('@@@ in mainStore.watch(...) 3', newValue, newValue.value)
//   }
//   // newValue.marketValue.value = 'awdawdawd'
// }, {
//   deep: true,
//   immediate: true
// })

export default mainStore
