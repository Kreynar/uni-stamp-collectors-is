/**
 * Created by Martynas on 2017-12-05.
 */

import strings from '../strings.js'
import vf from '../validationFunctions.js'
const ss = strings.stamps

export default {
  state: () => ({
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
      value: null
    },
    numberMichel: {
      isShownInStampsList: true,
      label: ss.numberMichel,
      value: null
    },
    numberStanleyGibbons: {
      isShownInStampsList: true,
      label: ss.numberStanleyGibbons,
      value: null
    },
    numberYvertEtTellier: {
      isShownInStampsList: true,
      label: ss.numberYvertEtTellier,
      value: null
    },
    year: {
      isShownInStampsList: true,
      label: ss.year,
      validation: {
        functions: [
          vf.validateRequired,
          vf.validateStampPublishYear
        ],
        mask: '####',
        counter: 4
      },
      value: null
    },
    country: {
      isShownInStampsList: true,
      label: ss.country,
      arrayOfVariants: [],
      validationFunctions: [
        vf.validateRequired
      ]
    }
    // nominalValue: {
    //   isShownInStampsList: true,
    //   label: ss.nominalValue,
    //   validationFunctions: [
    //     vf.validateRequired
    //   ]
    // }
  }),
  getters: {
    getFormFieldsAndValues (state) {
      let formFieldsAndValues = {}
      for (const propertyName in state) {
        if (state.hasOwnProperty(propertyName)) {
          formFieldsAndValues[propertyName] = state[propertyName].value
        }
      }
      console.log('@@@ formFieldsAndValues ', formFieldsAndValues)
      return formFieldsAndValues
    }
  },
  mutations: {
    resetState (state) {
      const initialState = state()
      Object.keys(initialState).forEach(key => { state[key] = initialState[key] })
    }
  }
  // actions: { ... }
}
