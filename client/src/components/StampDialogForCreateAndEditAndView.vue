<template>
  <!--<v-dialog v-model="$store.state.isStampDialogVisible" width="800px" persistent scrollable>-->
  <v-dialog v-model="getIsStampDialogVisible2" width="800px" persistent scrollable>

      <v-card>
        <v-card-title
          class="py-4 title" :class="this.$store.state.mainColorOfTheme"
        >
          {{ $store.getters.getStampDialogMode | getTitle }}
        </v-card-title>


        <v-card-text id="dialogVCardText">
          <v-card-media :src="$store.state.stampStore.temporaryPictureUrl.value" height="300px" contain></v-card-media>
          <v-form v-model="areAllFieldsValidlyFilled" ref="stampForm">
            <v-container grid-list-sm class="pa-4">
              <v-layout row wrap>
                <!--<v-card-media :src="$store.state.stampStore.temporaryPictureUrl.value" height="200px"></v-card-media>-->
                <v-divider></v-divider>
                <v-flex xs12 align-center justify-space-between><v-subheader xs12>Basic info (required)</v-subheader></v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="image"
                    :label="$store.state.stampStore.temporaryPictureUrl.label"
                    v-model="$store.state.stampStore.temporaryPictureUrl.value"
                    :rules="$store.state.stampStore.temporaryPictureUrl.validation.functions"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.year.label"
                    v-model="$store.state.stampStore.year.value"
                    :counter="$store.state.stampStore.year.validation.counter"
                    :mask="$store.state.stampStore.year.validation.mask"
                    :rules="$store.state.stampStore.year.validation.functions"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="short_text"
                    :items="$store.state.stampStore.arrayOfCountriesIdsAndNames"
                    item-value="id_"
                    item-text="name_"
                    v-model="$store.state.stampStore.country.value"
                    :label="$store.state.stampStore.country.label"
                    :rules="$store.state.stampStore.country.validation.functions"
                    autocomplete
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.nominalValue.label"
                    v-model="$store.state.stampStore.nominalValue.value"
                    :rules="$store.state.stampStore.nominalValue.validation.functions"
                    :counter="$store.state.stampStore.nominalValue.validation.counter"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="short_text"
                    :items="$store.state.stampStore.arrayOfGradesIdsAndNames"
                    item-value="id_"
                    item-text="name_"
                    v-model="$store.state.stampStore.grade.value"
                    :label="$store.state.stampStore.grade.label"
                    :rules="$store.state.stampStore.grade.validation.functions"
                    autocomplete
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-checkbox
                    prepend-icon="short_text"
                    v-model="$store.state.stampStore.isCancelled.value"
                    :label="$store.state.stampStore.isCancelled.label"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="short_text"
                    :items="$store.getters.getArrayOfTopicsNames"
                    v-model="$store.state.stampStore.arrayOfTopics.value"
                    :label="$store.state.stampStore.arrayOfTopics.label"
                    :rules="[
                      function validateRequired (value) {
                        let trueOrValidationErrorMessage = true
                        if ($store.state.stampStore.arrayOfTopics.value === null) {
                          trueOrValidationErrorMessage = 'Required.'
                        }
                        else if ($store.state.stampStore.arrayOfTopics.value.length === 0) {
                          trueOrValidationErrorMessage = 'Required.'
                        }
                        return trueOrValidationErrorMessage
                      }
                    ]"
                    chips
                    tags
                    clearable
                    required
                  >
                    <template slot="selection" slot-scope="data">
                      <v-chip
                        close
                        @input="$store.commit('removeItemFromArrayOfTopics', data.item)"
                        :selected="data.selected"
                      >
                        <strong>{{ data.item }}</strong>
                      </v-chip>
                    </template>
                  </v-select>
                </v-flex>
                <v-divider></v-divider>
                <v-flex xs12 align-center justify-space-between><v-subheader xs12>Catalog numbers</v-subheader></v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-layout align-center>
                    <v-text-field
                      :label="$store.state.stampStore.numberScott.label"
                      v-model="$store.state.stampStore.numberScott.value"
                      :counter="$store.state.stampStore.numberScott.validation.counter"
                      prepend-icon="short_text"
                    ></v-text-field>
                  </v-layout>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.numberMichel.label"
                    v-model="$store.state.stampStore.numberMichel.value"
                    :counter="$store.state.stampStore.numberMichel.validation.counter"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.numberStanleyGibbons.label"
                    v-model="$store.state.stampStore.numberStanleyGibbons.value"
                    :counter="$store.state.stampStore.numberStanleyGibbons.validation.counter"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.numberYvertEtTellier.label"
                    v-model="$store.state.stampStore.numberYvertEtTellier.value"
                    :counter="$store.state.stampStore.numberYvertEtTellier.validation.counter"
                  ></v-text-field>
                </v-flex>
                <v-divider></v-divider>
                <v-flex xs12 align-center justify-space-between><v-subheader xs12>Category & structure</v-subheader></v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="short_text"
                    :items="$store.state.stampStore.arrayOfCategoriesNames"
                    v-model="$store.state.stampStore.category.value"
                    :label="$store.state.stampStore.category.label"
                    :rules="$store.state.stampStore.category.validation.functions"
                    :counter="$store.state.stampStore.category.validation.counter"
                    combobox
                  ></v-select>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="short_text"
                    :items="$store.state.stampStore.arrayOfStructureTypesNames"
                    v-model="$store.state.stampStore.structureType.value"
                    :label="$store.state.stampStore.structureType.label"
                    :rules="$store.state.stampStore.structureType.validation.functions"
                    :counter="$store.state.stampStore.structureType.validation.counter"
                    combobox
                  ></v-select>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.structureNumber.label"
                    v-model="$store.state.stampStore.structureNumber.value"
                    :rules="$store.state.stampStore.structureNumber.validation.functions"
                    :counter="$store.state.stampStore.structureNumber.validation.counter"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    type="number"
                    :label="$store.state.stampStore.structureStampCount.label"
                    v-model="structureStampCount"
                    :rules="$store.state.stampStore.structureStampCount.validation.functions"
                    ref="structureStampCount"
                  ></v-text-field>
                </v-flex>
                <v-divider></v-divider>
                <v-flex xs12 align-center justify-space-between><v-subheader xs12>Other</v-subheader></v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-checkbox
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.isExhibited.label"
                    v-model="$store.state.stampStore.isExhibited.value"
                    :rules="$store.state.stampStore.isExhibited.validation.functions"
                  ></v-checkbox>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    type="number"
                    :label="$store.state.stampStore.specimenCount.label"
                    v-model="specimenCount"
                    :rules="$store.state.stampStore.specimenCount.validation.functions"
                    ref="specimenCount"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-checkbox
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.isOnSale.label"
                    v-model="$store.state.stampStore.isOnSale.value"
                    :rules="$store.state.stampStore.isOnSale.validation.functions"
                  ></v-checkbox>
                </v-flex>
                <!--<v-flex xs12 align-center justify-space-between>-->
                  <!--<v-text-field-->
                    <!--prepend-icon="short_text"-->
                    <!--suffix="$"-->
                    <!--:label="$store.state.stampStore.marketValue.label"-->
                    <!--v-model="$store.state.stampStore.marketValue.value"-->
                    <!--:rules="$store.state.stampStore.marketValue.validation.functions"-->
                  <!--&gt;</v-text-field>-->
                <!--</v-flex>-->
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    suffix="$"
                    type="number"
                    :label="$store.state.stampStore.marketValue.label"
                    v-model="marketValue"
                    :rules="$store.state.stampStore.marketValue.validation.functions"
                    ref="marketValue"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.faceDescription.label"
                    v-model="$store.state.stampStore.faceDescription.value"
                    :rules="$store.state.stampStore.faceDescription.validation.functions"
                    :counter="$store.state.stampStore.faceDescription.validation.counter"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.comment.label"
                    v-model="$store.state.stampStore.comment.value"
                    :rules="$store.state.stampStore.comment.validation.functions"
                    :counter="$store.state.stampStore.comment.validation.counter"
                    multi-line
                  ></v-text-field>
                </v-flex>
                <v-divider></v-divider>
                <v-flex xs12 align-center justify-space-between><v-subheader xs12>Custom attributes</v-subheader></v-flex>
                <!--<v-subheader xs12>Other</v-subheader>-->
                <!--<v-subheader xs12>Custom attributes</v-subheader>-->
                <template v-for="(customAttribute, index) in $store.state.stampStore.arrayOfCustomAttributes">
                  <v-flex xs12 sm4 :key="customAttribute.id">
                    <v-text-field
                      prepend-icon="short_text"
                      label="Title" v-model="customAttribute.label"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm7 :key="customAttribute.id">
                    <v-text-field
                      label="Value" v-model="customAttribute.value"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm1 :key="customAttribute.id">
                    <v-btn flat icon color="black" @click="$store.commit('removeCustomAttribute', index)">
                      <v-icon>clear</v-icon>
                    </v-btn>
                  </v-flex>
                </template>
                <v-btn
                  v-if="getAreElementsForStampCreateAndEditDisplayed($store.getters.getStampDialogMode)"
                  round
                  :color="$store.state.mainColorOfTheme"
                  dark
                  block
                  @click="addCustomAttribute">
                  Add new attribute
                  <v-icon dark right>add</v-icon>
                </v-btn>
                <!--<v-flex xs12 sm3 v-for="(customAttribute, i) in $store.state.stampStore.arrayOfCustomAttributes" :key="customAttribute.id">-->
                  <!--<v-text-field label="Title" v-model="customAttribute.label"></v-text-field>-->
                <!--</v-flex>-->
                <!--<v-flex xs12 sm9 v-for="(customAttribute, i) in $store.state.stampStore.arrayOfCustomAttributes" :key="customAttribute.id">-->
                  <!--<v-text-field label="Value" v-model="customAttribute.value"></v-text-field>-->
                <!--</v-flex>-->
                <!--<v-btn round color="primary" dark @click="$store.commit('addCustomAttribute')">Add new attribute</v-btn>-->
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="getAreElementsForStampCreateAndEditDisplayed($store.getters.getStampDialogMode)"
            flat
            color="red"
            @click="clearForm">
            Clear
            <v-icon dark left>loop</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <!--<v-btn flat color="primary" @click="isNewStampDialogVisible = false">Cancel</v-btn>-->
          <!--<v-btn flat @click="isNewStampDialogVisible = false">Save</v-btn>-->
          <v-btn flat color="blue-grey" @click="$store.commit('setIsStampDialogVisible', false)">
            <v-icon dark left>arrow_back</v-icon>
            Cancel
          </v-btn>
          <v-btn
            v-if="getAreElementsForStampCreateAndEditDisplayed($store.getters.getStampDialogMode)"
            color="green"
            :disabled="!areAllFieldsValidlyFilled"
            @click="submitForm()">
            Save
            <v-icon dark right>check_circle</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

  </v-dialog>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  import strings from '../strings.js'
//  import axiosInstance from '../services/AxiosInstance.js'
  import axios from 'axios'
//  import VTextField from 'vuetify/es5/components/VTextField/VTextField'
//  import AuthenticationService from '../services/AuthenticationService'
//  import { mapGetters } from 'vuex'

  function getNullIfEmptyStringOrNull (value) {
    if (value !== null) {
//      if (value !== value.trim()) {
//        value = value.trim()
//        hasValueBeenCorrectedAfterInput = true
//      }
      if (value.length === 0) {
        value = null
      }
    }
    return value
  }

  export default {
    data () {
      return {
//        isStampDialogVisible: this.$store.state.isStampDialogVisible,
//        title: strings.stamps.titleAddNewStamp,
        stampIdOfLastStampInDialog: null,
        areAllFieldsValidlyFilled: false
      }
    },
    name: 'StampDialogForCreateAndEditAndView',
  //  props: ['isStampDialogVisible'],
//    data () {
//
//    },
    filters: {
      getTitle (stampDialogMode) {
        let stampDialogTitle
        switch (stampDialogMode) {
          case strings.stampDialog.mode.create:
            stampDialogTitle = strings.stampDialog.title.create
            break
          case strings.stampDialog.mode.edit:
            stampDialogTitle = strings.stampDialog.title.edit
            break
          case strings.stampDialog.mode.view:
            stampDialogTitle = strings.stampDialog.title.view
            break
        }
        return stampDialogTitle
      }
    },
    computed: {
      marketValue: {
        get () {
          return this.$store.getters.marketValue
        },
        set (value) {
          const correctedValueAfterInput = getNullIfEmptyStringOrNull(value)
          if (correctedValueAfterInput !== value) {
            this.$refs.marketValue.inputValue = correctedValueAfterInput
          }
          this.$store.commit('setMarketValue', correctedValueAfterInput)
        }
      },
      specimenCount: {
        get () {
          return this.$store.state.stampStore.specimenCount.value
        },
        set (value) {
          const correctedValueAfterInput = getNullIfEmptyStringOrNull(value)
          if (correctedValueAfterInput !== value) {
            this.$refs.specimenCount.inputValue = correctedValueAfterInput
          }
          this.$store.commit('setSpecimenCount', correctedValueAfterInput)
        }
      },
      structureStampCount: {
        get () {
          return this.$store.state.stampStore.structureStampCount.value
        },
        set (value) {
          const correctedValueAfterInput = getNullIfEmptyStringOrNull(value)
          if (correctedValueAfterInput !== value) {
            this.$refs.structureStampCount.inputValue = correctedValueAfterInput
          }
          this.$store.commit('setStructureStampCount', correctedValueAfterInput)
        }
      },
      getIsStampDialogVisible2 () {
        console.log('@@@ getIsStampDialogVisible2 ()')
        return this.$store.getters.getIsStampDialogVisible
        /*
         * Also, this computed: is being listened in watch:, where we do some changes to dialog.
         */
      }
//      getIsStampDialogVisible () {
/// /        $store.state.isStampDialogVisible
//        /*
//         * This method is invoked only when state's variables, mentioned inside this method, changes.
//         * That means, it's invoked only when stamp dialog is being hidden or is opening for show.
//         * So if we want each time dialog opens, the dialog to be fully scrolled to top, we can
//         * do scrolling in this method.
//         */
//        console.log('@@@ getIsStampDialogVisible () kvietimas')
/// /        console.log('@@@ getIsStampDialogVisible () >>> container ', container, ' / isStampDialogVisible ', isStampDialogVisible)
/// /        console.log('@@@ getIsStampDialogVisible () >>> stampIdOfCurrentStampInDialog ', stampIdOfCurrentStampInDialog, ' / this.stampIdOfLastStampInDialog ', this.stampIdOfLastStampInDialog)
//        const container = document.getElementById('dialogVCardText')
//        if (container) {
//          container.scrollTop = 0
//          // Cia reikia clearForm() iskviest
//        }
//        const isStampDialogVisible = this.$store.getters.getIsStampDialogVisible
//        const stampIdOfCurrentStampInDialog = this.$store.getters.getStampId
//        if (isStampDialogVisible === false) {
//          this.stampIdOfLastStampInDialog = stampIdOfCurrentStampInDialog
//        }
//        else if (isStampDialogVisible) {
//          if (stampIdOfCurrentStampInDialog !== null) {
//            console.log('@@@ 666 if (stampIdOfCurrentStampInDialog !== null) {')
//            // No need to call clearForm(), because stamp dialog fields will be overwritten with newly loaded
//            // stamp attributes from server anyway.
//          }
//          else if (stampIdOfCurrentStampInDialog !== this.stampIdOfLastStampInDialog) {
//            console.log('@@@ getIsStampDialogVisible clearForm()')
//            this.stampIdOfLastStampInDialog = stampIdOfCurrentStampInDialog
//            this.clearForm()
//          }
//        }
//        return isStampDialogVisible
//      }
    },
    methods: {
//      setIsStampDialogVisible (booleanValue) {
//        this.$store.commit('setIsStampDialogVisible', booleanValue)
//      },
      /*
       * Had to move getAreElementsForStampCreateAndEditDisplayed (stampDialogMode)
       * from computed: { ... } to methods: { ... }, because it's probably
       * impossible to call a computed method from v-if.
       */
      getAreElementsForStampCreateAndEditDisplayed (stampDialogMode) {
        let areButtonsDisplayed
        switch (stampDialogMode) {
          case strings.stampDialog.mode.create:
            areButtonsDisplayed = true
            break
          case strings.stampDialog.mode.edit:
            areButtonsDisplayed = true
            break
          case strings.stampDialog.mode.view:
            areButtonsDisplayed = false
            break
        }
        return areButtonsDisplayed
      },
      clearForm () {
        /*
         * Here can either be used this v statement OR this.$store.stampDialogStore.commit('resetState')
         */
        console.log('@@@ clearForm ()')
        this.$refs.stampForm.reset()
        this.$store.state.stampStore.isExhibited.value = true
        this.$store.state.stampStore.isOnSale.value = false
        this.$store.commit('removeAllCustomAttributes')
        // Scroll to top of dialog:
        let container = document.getElementById('dialogVCardText')
        container.scrollTop = 0
//        this.$store.commit('resetState')
      },
      addCustomAttribute () {
        this.$store.commit('addCustomAttribute')
      },
      scrollToBottomOfDialog () {
        // Scroll to bottom of dialog:
        let container = document.getElementById('dialogVCardText')
//        container.scrollTop = container.scrollHeight - 400
        container.scrollTop = 0
      },
      async submitForm () {
        if (this.$refs.stampForm.validate()) {
          const formFieldsAndValues = this.$store.getters.getFormFieldsAndValues
          try {
            console.log('@@@ axios instance', axios.create({
              baseURL: strings.baseURL
            }))
//            const serverResponse = await axiosInstance.post(strings.path.stamps, formFieldsAndValues)
//            const serverResponse = await axios.create({baseURL: strings.baseURL}).post(strings.path.stamps, formFieldsAndValues)
            const serverResponse = await axios.create({
              baseURL: strings.baseURL
            }).post(strings.path.stamps, formFieldsAndValues)
            this.$store.state.snackbarColor = 'success'
            this.$store.state.snackbarMessage = 'Stamp successfully inserted/updated'
            this.$store.state.isSnackbarDisplayed = true
//            this.setIsStampDialogVisible(false)
            this.$store.commit('setIsStampDialogVisible', false)
            this.clearForm()
            console.log('@@@ successfully uploaded stamp form to server: ', serverResponse)
          }
          catch (error) {
            this.$store.state.snackbarColor = 'error'
            this.$store.state.snackbarMessage = 'Error in inserting/updating stamp'
            this.$store.state.isSnackbarDisplayed = true
            console.log('@@@ error in uploading stamp form to server:  ', error)
            const errorMessage = error.response.data.errorMessage
            console.log('@@@ error in uploading stamp form to server:  ', errorMessage)
          }
        }
      }
    },
//    beforeCreate () {
//      console.log('@@@ StampDialog....vue >>> beforeCreate ()  ')
//    },
//    created () {
//      console.log('@@@ StampDialog....vue >>> created ()  ')
//    },
//    beforeMount () {
//      console.log('@@@ StampDialog....vue >>> beforeMount ()  ')
//    },
//    mounted () {
//      console.log('@@@ StampDialog....vue >>> mounted ()  ')
//    },
//    beforeDestroy () {
//      console.log('@@@ StampDialog....vue >>> beforeDestroy ()  ')
/// /      this.setIsStampDialogVisible(false)
//      this.$store.commit('setIsStampDialogVisible', false)
//    },
//    destroyed () {
//      console.log('@@@ StampDialog....vue >>> destroyed () ')
//    },
//    deactivated () {
//      console.log('@@@ StampDialog....vue >>> deactivated () ')
//    },
//    updated () {
//      console.log('@@@ StampDialog....vue >>> updated () ')
//    },
    watch: {
//      getMarketValue (newValue, oldValue) {
//        console.log('@@@ watch: getMarketValue (newValue, oldValue) ', newValue, oldValue)
//        if (newValue) {
//        }
//        newValue = newValue.trim()
//      },
      getIsStampDialogVisible2 (newValue, oldValue) {
        console.log('@@@ watch: getIsStampDialogVisible2 (newValue, oldValue) ', newValue, oldValue)
        const stampIdOfCurrentStampInDialog = this.$store.getters.getStampId
        if (newValue === true) {
          if (stampIdOfCurrentStampInDialog !== null) {
            /*
             * Do nothing.
             * No need to call clearForm(), because stamp dialog fields will be overwritten with newly loaded
             * stamp attributes from server anyway.
             */
          }
          else if (stampIdOfCurrentStampInDialog !== this.stampIdOfLastStampInDialog) {
//            this.stampIdOfLastStampInDialog = stampIdOfCurrentStampInDialog
            this.clearForm()
          }
        }
        else if (newValue === false) {
          /*
           * It would look better to scroll to top on dialog open instead of dialog close, but
           * I don't know how to implement that.
           */
          const container = document.getElementById('dialogVCardText')
          if (container) {
            container.scrollTop = 0
          }
          this.stampIdOfLastStampInDialog = stampIdOfCurrentStampInDialog
        }
      }
    }
  }
</script>

<style scoped>

</style>
