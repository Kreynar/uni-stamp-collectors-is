/**
 * Created by Martynas on 2017-12-05.
 */

import strings from '../strings.js'
import vf from '../validationFunctions.js'
const ss = strings.stamps

export default {
  state: {
    // pictureOfFront: {
    //   isShownInStampsList: true,
    //   label: ss.pictureOfFront
    // },
    // pictureOfBack: {
    //   isShownInStampsList: false,
    //   label: ss.pictureOfBack
    // },
    // album: {
    //   isShownInStampsList: true,
    //   label: ss.pictureOfBack,
    //   validationFunctions: [
    //     vf.validateRequired()
    //   ]
    // },
    numberScott: {
      isShownInStampsList: true,
      label: ss.numberScott,
      value: 'test Number Scott'
    },
    numberMichael: {
      isShownInStampsList: true,
      label: ss.numberMichael,
      value: 'test Number Michael'
    },
    numberStanleyGibbons: {
      isShownInStampsList: true,
      label: ss.numberStanleyGibbons,
      value: 'test Number Stanleyy'
    },
    numberYvertEtTellier: {
      isShownInStampsList: true,
      label: ss.numberYvertEtTellier,
      value: ''
    },
    year: {
      isShownInStampsList: true,
      label: ss.year,
      validationFunctions: [
        vf.validateRequired,
        vf.validateStampPublishYear
      ],
      value: ''
    }
    // country: {
    //   isShownInStampsList: true,
    //   label: ss.country,
    //   validationFunctions: [
    //     vf.validateRequired
    //   ]
    // },
    // nominalValue: {
    //   isShownInStampsList: true,
    //   label: ss.nominalValue,
    //   validationFunctions: [
    //     vf.validateRequired
    //   ]
    // }
  },
  mutations: {
    resetState (state) {
      const initialState = state()
      Object.keys(initialState).forEach(key => { state[key] = initialState[key] })
    }
  }
  // actions: { ... },
  // getters: { ... }
}
