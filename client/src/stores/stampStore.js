/**
 * Created by Martynas on 2017-12-05.
 */

import strings from '../strings.js'
import vf from '../validationFunctions.js'
const ss = strings.stamps

export default {
  state: () => ({
    arrayOfCountriesIdsAndNames: [],
    arrayOfGradesIdsAndNames: [],
    arrayOfTopicsIdsAndNames: [],
    arrayOfCategoriesNames: ss.arrayOfCategoriesNames,
    arrayOfStructureTypesNames: ss.arrayOfStructureTypesNames,
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
    temporaryPictureUrl: {
      isShownInStampsList: true,
      label: ss.temporaryPictureUrl,
      validation: {
        functions: [
          vf.validateRequired
        ]
      },
      value: null
    },
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
      validation: {
        functions: [
          vf.validateRequired
        ]
      },
      value: null
    },
    nominalValue: {
      isShownInStampsList: true,
      label: ss.nominalValue,
      validation: {
        functions: [
          vf.validateRequired
        ]
      },
      value: null
    },
    grade: {
      isShownInStampsList: true,
      label: ss.grade,
      validation: {
        functions: [
          vf.validateRequired
        ]
      },
      value: null
    },
    isCancelled: {
      isShownInStampsList: true,
      label: ss.isCancelled,
      validation: {},
      value: false
    },
    topics: {
      isShownInStampsList: true,
      label: ss.topics,
      validation: {
        functions: [
          vf.validateRequired
        ]
      },
      value: null
    },
    category: {
      isShownInStampsList: false,
      label: ss.category,
      validation: {},
      value: null
    },
    structureType: {
      isShownInStampsList: false,
      label: ss.structureType,
      validation: {},
      value: null
    },
    structureNumber: {
      isShownInStampsList: false,
      label: ss.structureNumber,
      validation: {},
      value: null
    },
    structureStampCount: {
      isShownInStampsList: false,
      label: ss.structureStampCount,
      validation: {
        functions: [
          vf.validateNullOrPositiveInteger
        ]
      },
      value: null
    }
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
    },
    getArrayOfTopicsNames (state) {
      let arrayOfTopicsNames = []
      state.arrayOfTopicsIdsAndNames.forEach(function (topic) {
        arrayOfTopicsNames.push(topic.name_)
      })
      return arrayOfTopicsNames
    }
  },
  mutations: {
    resetState (state) {
      const initialState = state()
      Object.keys(initialState).forEach(key => { state[key] = initialState[key] })
    },
    setArrayOfCountriesIdsAndNames (state, arrayOfCountriesIdsAndNames) {
      state.arrayOfCountriesIdsAndNames = arrayOfCountriesIdsAndNames
    },
    setArrayOfGradesIdsAndNames (state, arrayOfGradesIdsAndNames) {
      state.arrayOfGradesIdsAndNames = arrayOfGradesIdsAndNames
    },
    setArrayOfTopicsIdsAndNames (state, arrayOfTopicsIdsAndNames) {
      state.arrayOfTopicsIdsAndNames = arrayOfTopicsIdsAndNames
    },
    removeItemFromTopicsValues (state, nameOfTopic) {
      state.topics.value.splice(state.topics.value.indexOf(nameOfTopic), 1)
    }
  },
  actions: {
    // setArrayOfCountriesNamesAndIds (state, arrayOfCountriesNamesAndIds) {
    //   state.mutations.setArrayOfCountriesNamesAndIds(arrayOfCountriesNamesAndIds)
    // }
  }
}
