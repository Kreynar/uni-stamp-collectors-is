<template>
  <!--<v-dialog v-model="$store.state.isStampDialogVisible" width="800px" persistent scrollable>-->
  <v-dialog v-model="getIsStampDialogVisible2" width="800px" persistent scrollable>

      <v-card>
        <v-card-title
          class="py-4 title" :class="$store.state.mainColorOfTheme"
        >
          {{ $store.getters.getStampDialogMode | getTitle }}
        </v-card-title>


        <v-card-text id="dialogVCardText">
          <v-card-media :src="$store.state.stampStore.modelForDialog.temporaryPictureUrl.value" height="300px" contain></v-card-media>
          <v-form v-model="areAllFieldsValidlyFilled" ref="stampForm">
            <v-container grid-list-sm class="pa-4">
              <v-layout row wrap>
                <v-divider></v-divider>
                <v-flex xs12 align-center justify-space-between><v-subheader xs12>Basic info (required)</v-subheader></v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="image"
                    :label="$store.state.stampStore.modelForDialog.temporaryPictureUrl.label"
                    v-model="$store.state.stampStore.modelForDialog.temporaryPictureUrl.value"
                    :rules="$store.state.stampStore.modelForDialog.temporaryPictureUrl.validation.functions"
                    required
                  ></v-text-field>
                </v-flex>
                <!--<v-flex xs12 align-center justify-space-between>-->
                  <!--<v-text-field-->
                    <!--prepend-icon="short_text"-->
                    <!--type="number"-->
                    <!--:label="$store.state.stampStore.modelForDialog.year.label"-->
                    <!--v-model="$store.state.stampStore.modelForDialog.year.value"-->
                    <!--:counter="$store.state.stampStore.modelForDialog.year.validation.counter"-->
                    <!--:mask="$store.state.stampStore.modelForDialog.year.validation.mask"-->
                    <!--:rules="$store.state.stampStore.modelForDialog.year.validation.functions"-->
                    <!--required-->
                  <!--&gt;</v-text-field>-->
                <!--</v-flex>-->

                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="short_text"
                    :items="$store.state.stampStore.arrayOfAlbumsIdsAndNames"
                    item-value="id_"
                    item-text="name_"
                    v-model="$store.state.stampStore.modelForDialog.album.value"
                    :label="$store.state.stampStore.modelForDialog.album.label"
                    :rules="$store.state.stampStore.modelForDialog.album.validation.functions"

                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    type="number"
                    :label="$store.state.stampStore.modelForDialog.year.label"
                    v-model="$store.state.stampStore.modelForDialog.year.value"
                    :counter="$store.state.stampStore.modelForDialog.year.validation.counter"
                    :rules="$store.state.stampStore.modelForDialog.year.validation.functions"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="short_text"
                    :items="$store.state.stampStore.arrayOfCountriesIdsAndNames"
                    item-value="id_"
                    item-text="name_"
                    v-model="$store.state.stampStore.modelForDialog.country.value"
                    :label="$store.state.stampStore.modelForDialog.country.label"
                    :rules="$store.state.stampStore.modelForDialog.country.validation.functions"
                    autocomplete
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.modelForDialog.nominalValue.label"
                    v-model="$store.state.stampStore.modelForDialog.nominalValue.value"
                    :rules="$store.state.stampStore.modelForDialog.nominalValue.validation.functions"
                    :counter="$store.state.stampStore.modelForDialog.nominalValue.validation.counter"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="short_text"
                    :items="$store.state.stampStore.arrayOfGradesIdsAndNames"
                    item-value="id_"
                    item-text="name_"
                    v-model="$store.state.stampStore.modelForDialog.grade.value"
                    :label="$store.state.stampStore.modelForDialog.grade.label"
                    :rules="$store.state.stampStore.modelForDialog.grade.validation.functions"
                    autocomplete
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-checkbox
                    prepend-icon="short_text"
                    v-model="$store.state.stampStore.modelForDialog.isCancelled.value"
                    :label="$store.state.stampStore.modelForDialog.isCancelled.label"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="short_text"
                    :items="$store.getters.getArrayOfTopicsNames"
                    v-model="$store.state.stampStore.modelForDialog.arrayOfTopics.value"
                    :label="$store.state.stampStore.modelForDialog.arrayOfTopics.label"
                    :rules="[
                      function validateRequired (value) {
                        let trueOrValidationErrorMessage = true
                        if ($store.state.stampStore.modelForDialog.arrayOfTopics.value === null) {
                          trueOrValidationErrorMessage = 'Required.'
                        }
                        else if ($store.state.stampStore.modelForDialog.arrayOfTopics.value.length === 0) {
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
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.modelForDialog.numberScott.label"
                    v-model="$store.state.stampStore.modelForDialog.numberScott.value"
                    :counter="$store.state.stampStore.modelForDialog.numberScott.validation.counter"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.modelForDialog.numberMichel.label"
                    v-model="$store.state.stampStore.modelForDialog.numberMichel.value"
                    :counter="$store.state.stampStore.modelForDialog.numberMichel.validation.counter"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.modelForDialog.numberStanleyGibbons.label"
                    v-model="$store.state.stampStore.modelForDialog.numberStanleyGibbons.value"
                    :counter="$store.state.stampStore.modelForDialog.numberStanleyGibbons.validation.counter"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.modelForDialog.numberYvertEtTellier.label"
                    v-model="$store.state.stampStore.modelForDialog.numberYvertEtTellier.value"
                    :counter="$store.state.stampStore.modelForDialog.numberYvertEtTellier.validation.counter"
                  ></v-text-field>
                </v-flex>
                <v-divider></v-divider>
                <v-flex xs12 align-center justify-space-between><v-subheader xs12>Category & structure</v-subheader></v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="short_text"
                    :items="$store.state.stampStore.arrayOfCategoriesNames"
                    v-model="$store.state.stampStore.modelForDialog.category.value"
                    :label="$store.state.stampStore.modelForDialog.category.label"
                    :rules="$store.state.stampStore.modelForDialog.category.validation.functions"
                    :counter="$store.state.stampStore.modelForDialog.category.validation.counter"
                    combobox
                  ></v-select>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="short_text"
                    :items="$store.state.stampStore.arrayOfStructureTypesNames"
                    v-model="$store.state.stampStore.modelForDialog.structureType.value"
                    :label="$store.state.stampStore.modelForDialog.structureType.label"
                    :rules="$store.state.stampStore.modelForDialog.structureType.validation.functions"
                    :counter="$store.state.stampStore.modelForDialog.structureType.validation.counter"
                    combobox
                  ></v-select>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.modelForDialog.structureNumber.label"
                    v-model="$store.state.stampStore.modelForDialog.structureNumber.value"
                    :rules="$store.state.stampStore.modelForDialog.structureNumber.validation.functions"
                    :counter="$store.state.stampStore.modelForDialog.structureNumber.validation.counter"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    type="number"
                    :label="$store.state.stampStore.modelForDialog.structureStampCount.label"
                    v-model="structureStampCount"
                    :rules="$store.state.stampStore.modelForDialog.structureStampCount.validation.functions"
                    ref="structureStampCount"
                  ></v-text-field>
                </v-flex>
                <v-divider></v-divider>
                <v-flex xs12 align-center justify-space-between><v-subheader xs12>Other</v-subheader></v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-checkbox
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.modelForDialog.isExhibited.label"
                    v-model="$store.state.stampStore.modelForDialog.isExhibited.value"
                    :rules="$store.state.stampStore.modelForDialog.isExhibited.validation.functions"
                  ></v-checkbox>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    type="number"
                    :label="$store.state.stampStore.modelForDialog.specimenCount.label"
                    v-model="specimenCount"
                    :rules="$store.state.stampStore.modelForDialog.specimenCount.validation.functions"
                    ref="specimenCount"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-checkbox
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.modelForDialog.isOnSale.label"
                    v-model="$store.state.stampStore.modelForDialog.isOnSale.value"
                    :rules="$store.state.stampStore.modelForDialog.isOnSale.validation.functions"
                  ></v-checkbox>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    suffix="$"
                    type="number"
                    :label="$store.state.stampStore.modelForDialog.marketValue.label"
                    v-model="marketValue"
                    :rules="$store.state.stampStore.modelForDialog.marketValue.validation.functions"
                    ref="marketValue"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.modelForDialog.faceDescription.label"
                    v-model="$store.state.stampStore.modelForDialog.faceDescription.value"
                    :rules="$store.state.stampStore.modelForDialog.faceDescription.validation.functions"
                    :counter="$store.state.stampStore.modelForDialog.faceDescription.validation.counter"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="short_text"
                    :label="$store.state.stampStore.modelForDialog.comment.label"
                    v-model="$store.state.stampStore.modelForDialog.comment.value"
                    :rules="$store.state.stampStore.modelForDialog.comment.validation.functions"
                    :counter="$store.state.stampStore.modelForDialog.comment.validation.counter"
                    multi-line
                  ></v-text-field>
                </v-flex>
                <v-divider></v-divider>
                <v-flex xs12 align-center justify-space-between><v-subheader xs12>Custom attributes</v-subheader></v-flex>
                <!--<v-subheader xs12>Other</v-subheader>-->
                <!--<v-subheader xs12>Custom attributes</v-subheader>-->
                <template v-for="(customAttribute, index) in $store.state.stampStore.modelForDialog.arrayOfCustomAttributes">
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
  import strings from '../../strings.js'
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
          return this.$store.state.stampStore.modelForDialog.specimenCount.value
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
          return this.$store.state.stampStore.modelForDialog.structureStampCount.value
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
        this.$store.state.stampStore.modelForDialog.isExhibited.value = true
        this.$store.state.stampStore.modelForDialog.isOnSale.value = false
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
            const axiosInstance = axios.create({
              baseURL: strings.baseURL
            })
            console.log('@@@ axios instance', axiosInstance)
//            const serverResponse = await axiosInstance.post(strings.path.stamps, formFieldsAndValues)
//            const serverResponse = await axios.create({baseURL: strings.baseURL}).post(strings.path.stamps, formFieldsAndValues)
            let serverResponse
            if (this.$store.getters.getStampDialogMode === strings.stampDialog.mode.create) {
              serverResponse = await axiosInstance.post(strings.path.stamps, formFieldsAndValues)
            }
            else if (this.$store.getters.getStampDialogMode === strings.stampDialog.mode.edit) {
              serverResponse = await axiosInstance.put(strings.path.stamps + '/' + this.$store.getters.getStampId, formFieldsAndValues)
            }
            this.$store.commit('triggerDoStampListAndStatisticsNeedToReload')
//            this.$store.commit('triggerDoStatisticsNeedToReload')
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
          /*
           * Refresh topic list every time, because user topic list is often added with new values by user.
           * No need to refresh countries and grades, because they are only changed by website admins and
           * it only happens in very rare occasions.
           */
          this.$store.dispatch('loadTopicsFromServer')
          if (this.$store.state.stampStore.arrayOfGradesIdsAndNames.length === 0) {
            this.$store.dispatch('loadGradesFromServer')
          }
          if (this.$store.state.stampStore.arrayOfAlbumsIdsAndNames.length === 0) {
            this.$store.dispatch('loadAlbumsFromServer')
          }
          if (this.$store.state.stampStore.arrayOfCountriesIdsAndNames.length === 0) {
            this.$store.dispatch('loadCountriesFromServer')
          }
          if (stampIdOfCurrentStampInDialog !== null) {
            /*
             * No need to call clearForm(), because stamp dialog fields will be overwritten with newly loaded
             * stamp attributes from server anyway.
             */
            this.$store.dispatch('loadStampAttributesFromServer', stampIdOfCurrentStampInDialog)
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
