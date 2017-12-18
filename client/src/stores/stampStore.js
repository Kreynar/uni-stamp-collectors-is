/**
 * Created by Martynas on 2017-12-05.
 */

import strings from '../strings.js'
import vf from '../validationFunctions.js'
const ss = strings.stamps

export default {
  state: () => ({
    arrayOfStamps: [],
    arrayOfCountriesIdsAndNames: [],
    arrayOfGradesIdsAndNames: [],
    arrayOfTopicsIdsAndNames: [],
    arrayOfCategoriesNames: ss.arrayOfCategoriesNames,
    arrayOfStructureTypesNames: ss.arrayOfStructureTypesNames,
    arrayOfCustomAttributes: [],
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
      validation: {
        counter: 50
      },
      value: null
    },
    numberMichel: {
      isShownInStampsList: true,
      label: ss.numberMichel,
      validation: {
        counter: 50
      },
      value: null
    },
    numberStanleyGibbons: {
      isShownInStampsList: true,
      label: ss.numberStanleyGibbons,
      validation: {
        counter: 50
      },
      value: null
    },
    numberYvertEtTellier: {
      isShownInStampsList: true,
      label: ss.numberYvertEtTellier,
      validation: {
        counter: 50
      },
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
        ],
        counter: 50
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
    arrayOfTopics: {
      isShownInStampsList: true,
      label: ss.arrayOfTopics,
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
      validation: {
        counter: 50
      },
      value: null
    },
    structureType: {
      isShownInStampsList: false,
      label: ss.structureType,
      validation: {
        counter: 50
      },
      value: null
    },
    structureNumber: {
      isShownInStampsList: false,
      label: ss.structureNumber,
      validation: {
        counter: 50
      },
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
    },
    isExhibited: {
      isShownInStampsList: false,
      label: ss.isExhibited,
      validation: {},
      value: true
    },
    specimenCount: {
      isShownInStampsList: false,
      label: ss.specimenCount,
      validation: {
        functions: [
          vf.validateNullOrPositiveInteger
        ]
      },
      value: null
    },
    isOnSale: {
      isShownInStampsList: false,
      label: ss.isOnSale,
      validation: {},
      value: false
    },
    marketValue: {
      isShownInStampsList: false,
      label: ss.marketValue,
      validation: {
        functions: [
          vf.validateCurrency
        ]
      },
      value: null
    },
    faceDescription: {
      isShownInStampsList: false,
      label: ss.faceDescription,
      validation: {
        counter: 300
      },
      value: null
    },
    comment: {
      isShownInStampsList: false,
      label: ss.comment,
      validation: {
        counter: 1000
      },
      value: null
    }
  }),
  getters: {
    getFormFieldsAndValues (state) {
      let formFieldsAndValues = {}
      for (const propertyName in state) {
        if (state.hasOwnProperty(propertyName)) {
          if (state[propertyName].hasOwnProperty('value')) {
            formFieldsAndValues[propertyName] = state[propertyName].value
          }
        }
      }
      formFieldsAndValues['arrayOfCustomAttributes'] = state.arrayOfCustomAttributes
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
    setArrayOfStamps (state, arrayOfStamps) {
      state.arrayOfStamps = arrayOfStamps
    },
    /*
     * I tried using this resetState function, as it seems more suitable than this.$refs.stampForm.reset(),
     * BUT when using it, I get this error ([Vue warn]: Error in render: "TypeError: Cannot read property 'length' of null")
     * and I don't know how to fix it. Maybe error occurs, because there's error in resetting topics (witch Vuetify chips).
     */
    // resetState (state) {
    //   const initialState = state()
    //   Object.keys(initialState).forEach(key => { state[key] = initialState[key] })
    // },
    setArrayOfCountriesIdsAndNames (state, arrayOfCountriesIdsAndNames) {
      state.arrayOfCountriesIdsAndNames = arrayOfCountriesIdsAndNames
    },
    setArrayOfGradesIdsAndNames (state, arrayOfGradesIdsAndNames) {
      state.arrayOfGradesIdsAndNames = arrayOfGradesIdsAndNames
    },
    setArrayOfTopicsIdsAndNames (state, arrayOfTopicsIdsAndNames) {
      state.arrayOfTopicsIdsAndNames = arrayOfTopicsIdsAndNames
    },
    removeItemFromArrayOfTopics (state, nameOfTopic) {
      state.arrayOfTopics.value.splice(state.arrayOfTopics.value.indexOf(nameOfTopic), 1)
    },
    addCustomAttribute (state) {
      state.arrayOfCustomAttributes.push({
        id: state.arrayOfCustomAttributes.length,
        label: null,
        value: null
      })
    },
    removeCustomAttribute (state, indexOfCustomAttribute) {
      state.arrayOfCustomAttributes.splice(indexOfCustomAttribute, 1)
    },
    removeAllCustomAttributes (state) {
      state.arrayOfCustomAttributes = []
    }
  },
  actions: {
    // setArrayOfCountriesNamesAndIds (state, arrayOfCountriesNamesAndIds) {
    //   state.mutations.setArrayOfCountriesNamesAndIds(arrayOfCountriesNamesAndIds)
    // }
  }
}
