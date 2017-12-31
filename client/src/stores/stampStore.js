/**
 * Created by Martynas on 2017-12-05.
 */

import strings from '../strings.js'
// import vf from '../validationFunctions.js'
import axios from 'axios'
import stampModel from '../models/stampModel.js'
const ss = strings.stamps

async function getArrayOfCountriesIdsAndNamesFromServer () {
  try {
    const serverResponse = await axios.create({
      baseURL: strings.baseURL
    }).get(strings.path.countries)
    const arrayOfCountriesIdsAndNames = serverResponse.data
    console.log('@@@ arrayOfCountriesNamesAndIds', arrayOfCountriesIdsAndNames)
    return arrayOfCountriesIdsAndNames
  }
  catch (error) {
    const errorMessage = error.response.data.errorMessage
    console.log('@@@ error in getArrayOfCountriesIdsAndNamesFromServer:  ', errorMessage)
  }
  finally {
  }
}

async function getArrayOfGradesIdsAndNamesFromServer () {
  try {
    const serverResponse = await axios.create({
      baseURL: strings.baseURL
    }).get(strings.path.grades)
    const arrayOfGradesNamesAndIds = serverResponse.data
    console.log('@@@ arrayOfGradesNamesAndIds', arrayOfGradesNamesAndIds)
    return arrayOfGradesNamesAndIds
  }
  catch (error) {
    const errorMessage = error.response.data.errorMessage
    console.log('@@@ error in getArrayOfGradesIdsAndNamesFromServer:  ', errorMessage)
  }
  finally {
  }
}

async function getArrayOfTopicsIdsAndNamesFromServer () {
  try {
    const serverResponse = await axios.create({
      baseURL: strings.baseURL
    }).get(strings.path.topics)
    const arrayOfTopicsIdsAndNames = serverResponse.data
    console.log('@@@ arrayOfTopicsIdsAndNames', serverResponse)
    return arrayOfTopicsIdsAndNames
  }
  catch (error) {
    const errorMessage = error.response.data.errorMessage
    console.log('@@@ error in getArrayOfTopicsIdsAndNamesFromServer:  ', errorMessage)
  }
  finally {
  }
}

// function getArrayOfFieldsNamesAndLabelsFrom (modelForDialogOrSearchPanel) {
//   let fieldsNamesAndLabels = []
//   for (const propertyName in modelForDialogOrSearchPanel) {
//     if (modelForDialogOrSearchPanel.hasOwnProperty(propertyName)) {
//       if (modelForDialogOrSearchPanel[propertyName]) {
//         if (modelForDialogOrSearchPanel[propertyName].hasOwnProperty('value')) {
//           if (propertyName !== 'temporaryPictureUrl') {
//             fieldsNamesAndLabels.push({
//               name: propertyName,
//               label: modelForDialogOrSearchPanel[propertyName].label
//             })
//           }
//         }
//       }
//     }
//   }
//   console.log('@@@ fieldsNamesAndLabels ', fieldsNamesAndLabels)
//   return fieldsNamesAndLabels
// }

async function getStampAttributesFromServer (stampId) {
  try {
    const serverResponse = await axios.create({
      baseURL: strings.baseURL
    }).get(strings.path.stamps + '/' + stampId)
    const stampAttributes = serverResponse.data
    console.log('@@@ getStampAttributesFromServer serverResponse.data', serverResponse)
    return stampAttributes
  }
  catch (error) {
    const errorMessage = error.response.data.errorMessage
    console.log('@@@ error in getArrayOfTopicsIdsAndNamesFromServer:  ', errorMessage)
  }
  finally {
  }
}

async function getArrayOfStampsFromServer (fullPath) {
  try {
    // const serverResponse = await axios.create({
    //   baseURL: strings.baseURL
    // }).get(strings.path.stamps)
    const serverResponse = await axios.create({
      baseURL: strings.baseURL
    }).get(fullPath)
    const arrayOfStamps = serverResponse.data
    console.log('@@@ getArrayOfStampsFromServer serverResponse.data', arrayOfStamps)
    return arrayOfStamps
  }
  catch (error) {
    const errorMessage = error.response.data.errorMessage
    console.log('@@@ error in getArrayOfStampsFromServer:  ', errorMessage)
  }
  finally {
  }
}

function getFieldsAndValuesFrom (modelForDialogOrSearchPanel) {
  let fieldsAndValues = {}
  for (const propertyName in modelForDialogOrSearchPanel) {
    if (modelForDialogOrSearchPanel.hasOwnProperty(propertyName)) {
      if (modelForDialogOrSearchPanel[propertyName]) {
        if (modelForDialogOrSearchPanel[propertyName].hasOwnProperty('value')) {
          if (typeof modelForDialogOrSearchPanel[propertyName].value === 'string') {
            if (modelForDialogOrSearchPanel[propertyName].value.length === 0) {
              fieldsAndValues[propertyName] = null
            }
            else {
              fieldsAndValues[propertyName] = modelForDialogOrSearchPanel[propertyName].value
            }
          }
          else {
            fieldsAndValues[propertyName] = modelForDialogOrSearchPanel[propertyName].value
          }
        }
      }
    }
  }
  // formFieldsAndValues['arrayOfCustomAttributes'] = state.arrayOfCustomAttributes
  fieldsAndValues['arrayOfCustomAttributes'] = JSON.parse(JSON.stringify(modelForDialogOrSearchPanel.arrayOfCustomAttributes))
  console.log('@@@ formFieldsAndValues ', fieldsAndValues)
  return fieldsAndValues
}

function getNonNullFieldsAndValuesFrom (modelForDialogOrSearchPanel) {
  let fieldsAndValues = {}
  for (const propertyName in modelForDialogOrSearchPanel) {
    if (modelForDialogOrSearchPanel.hasOwnProperty(propertyName)) {
      if (modelForDialogOrSearchPanel[propertyName]) {
        if (modelForDialogOrSearchPanel[propertyName].hasOwnProperty('value')) {
          if (modelForDialogOrSearchPanel[propertyName].value !== null) {
            if (typeof modelForDialogOrSearchPanel[propertyName].value === 'string') {
              if (modelForDialogOrSearchPanel[propertyName].value.length === 0) {
                // fieldsAndValues[propertyName] = null
              }
              else {
                fieldsAndValues[propertyName] = modelForDialogOrSearchPanel[propertyName].value
              }
            }
            else {
              fieldsAndValues[propertyName] = modelForDialogOrSearchPanel[propertyName].value
            }
          }
        }
      }
    }
  }
  // formFieldsAndValues['arrayOfCustomAttributes'] = state.arrayOfCustomAttributes
  fieldsAndValues['arrayOfCustomAttributes'] = JSON.parse(JSON.stringify(modelForDialogOrSearchPanel.arrayOfCustomAttributes))
  console.log('@@@ formFieldsAndValues ', fieldsAndValues)
  return fieldsAndValues
}

function setStampAttributesIn (modelForDialogOrSearchPanel, stampAttributes) {
  for (const attributeName in stampAttributes) {
    if (stampAttributes.hasOwnProperty(attributeName)) {
      if (modelForDialogOrSearchPanel.hasOwnProperty(attributeName)) {
        if (attributeName === 'arrayOfCustomAttributes') {
          // state[attributeName] = stampAttributes[attributeName]
          modelForDialogOrSearchPanel[attributeName] = JSON.parse(JSON.stringify(stampAttributes[attributeName]))
        }
        else {
          modelForDialogOrSearchPanel[attributeName].value = stampAttributes[attributeName]
        }
      }
    }
  }
}

function removeItemFromArrayOfTopicsIn (modelForDialogOrSearchPanel, nameOfTopic) {
  modelForDialogOrSearchPanel.arrayOfTopics.value.splice(modelForDialogOrSearchPanel.arrayOfTopics.value.indexOf(nameOfTopic), 1)
}

const stampStore = {
  state: () => ({
    arrayOfStamps: [],
    arrayOfCountriesIdsAndNames: [],
    arrayOfGradesIdsAndNames: [],
    arrayOfTopicsIdsAndNames: [],
    arrayOfCategoriesNames: ss.arrayOfCategoriesNames,
    arrayOfStructureTypesNames: ss.arrayOfStructureTypesNames,
    stampId: null,
    // modelForDialog: JSON.parse(JSON.stringify(stampModel)),
    // modelForSearch: JSON.parse(JSON.stringify(stampModel))
    modelForDialog: stampModel.getStampModelForDialog(),
    modelForSearch: stampModel.getStampModelForSearch()
  }),
  getters: {
    /*
     * Retrieves array of objects: [{ name: ..., label: ...}, ...] with field names and labels,
     * except temporaryPictureUrl, arrayOfCustomAttributes.
     */
    // getArrayOfFieldsNamesAndLabelsFromSearchPanel (state) {
    //   // console.log('@@@ getArrayOfFieldsNamesAndLabelsExceptCustomAttributesFromSearchPanel (state)')
    //   return getArrayOfFieldsNamesAndLabelsFrom(state.modelForSearch)
    // },
    // getArrayOfFieldsNamesAndLabelsForSort () {
    //   return getArrayOfFieldsNamesAndLabelsFrom(stampModel.getStampModel())
    // },
    getFormFieldsAndValues (state) {
      console.log('@@@ getFormFieldsAndValues (state)')
      return getFieldsAndValuesFrom(state.modelForDialog)
    },
    getNonNullFieldsAndValuesFromSearchPanel (state) {
      console.log('@@@ getFormFieldsAndValuesInSearchPanel (state)')
      return getNonNullFieldsAndValuesFrom(state.modelForSearch)
    },
    getArrayOfTopicsNames (state) {
      let arrayOfTopicsNames = []
      state.arrayOfTopicsIdsAndNames.forEach(function (topic) {
        arrayOfTopicsNames.push(topic.name_)
      })
      return arrayOfTopicsNames
    },
    getStampId (state) {
      return state.stampId
    },
    marketValue (state) {
      return state.modelForDialog.marketValue.value
    }
  },
  mutations: {
    setMarketValue (state, value) {
      state.modelForDialog.marketValue.value = value
    },
    setSpecimenCount (state, value) {
      state.modelForDialog.specimenCount.value = value
    },
    setStructureStampCount (state, value) {
      state.modelForDialog.structureStampCount.value = value
    },
    setArrayOfStamps (state, arrayOfStamps) {
      state.arrayOfStamps = arrayOfStamps
    },
    setStampAttributes (state, stampAttributes) {
      setStampAttributesIn(state.modelForDialog, stampAttributes)
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
      removeItemFromArrayOfTopicsIn(state.modelForDialog, nameOfTopic)
    },
    removeItemFromArrayOfTopicsInSearchPanel (state, nameOfTopic) {
      removeItemFromArrayOfTopicsIn(state.modelForSearch, nameOfTopic)
    },
    addCustomAttribute (state) {
      state.modelForDialog.arrayOfCustomAttributes.push({
        id: state.modelForDialog.arrayOfCustomAttributes.length,
        label: null,
        value: null
      })
    },
    removeCustomAttribute (state, indexOfCustomAttribute) {
      state.modelForDialog.arrayOfCustomAttributes.splice(indexOfCustomAttribute, 1)
    },
    removeAllCustomAttributes (state) {
      console.log('@@@@ removeAllCustomAttributes (state)')
      state.modelForDialog.arrayOfCustomAttributes = []
    },
    setStampId (state, stampId) {
      state.stampId = stampId
    }
  },
  actions: {
    // async loadCountriesGradesTopicsFromServer (context) {
    //   const arrayOfCountriesIdsAndNames = await getArrayOfCountriesIdsAndNamesFromServer()
    //   context.commit('setArrayOfCountriesIdsAndNames', arrayOfCountriesIdsAndNames)
    //   const arrayOfGradesIdsAndNames = await getArrayOfGradesIdsAndNamesFromServer()
    //   context.commit('setArrayOfGradesIdsAndNames', arrayOfGradesIdsAndNames)
    //   const arrayOfTopicsIdsAndNames = await getArrayOfTopicsIdsAndNamesFromServer()
    //   context.commit('setArrayOfTopicsIdsAndNames', arrayOfTopicsIdsAndNames)
    // },
    async loadCountriesFromServer (context) {
      const arrayOfCountriesIdsAndNames = await getArrayOfCountriesIdsAndNamesFromServer()
      context.commit('setArrayOfCountriesIdsAndNames', arrayOfCountriesIdsAndNames)
    },
    async loadGradesFromServer (context) {
      const arrayOfGradesIdsAndNames = await getArrayOfGradesIdsAndNamesFromServer()
      context.commit('setArrayOfGradesIdsAndNames', arrayOfGradesIdsAndNames)
    },
    async loadTopicsFromServer (context) {
      const arrayOfTopicsIdsAndNames = await getArrayOfTopicsIdsAndNamesFromServer()
      context.commit('setArrayOfTopicsIdsAndNames', arrayOfTopicsIdsAndNames)
    },
    async loadStampAttributesFromServer (context, stampId) {
      const stampAttributes = await getStampAttributesFromServer(stampId)
      context.commit('setStampAttributes', stampAttributes)
    },
    async loadArrayOfStampsFromServer (context, fullPath) {
      const arrayOfStamps = await getArrayOfStampsFromServer(fullPath)
      context.commit('setArrayOfStamps', arrayOfStamps)
    }
    // setArrayOfCountriesNamesAndIds (state, arrayOfCountriesNamesAndIds) {
    //   state.mutations.setArrayOfCountriesNamesAndIds(arrayOfCountriesNamesAndIds)
    // }
  }
}

// stampStore.watch((state) => state, (newValue, oldValue) => {
//   newValue.marketValue.value = null
// })

export default stampStore
