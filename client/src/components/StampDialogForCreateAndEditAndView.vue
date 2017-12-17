<template>
  <v-dialog v-model="$store.state.isStampDialogVisible" width="800px" persistent scrollable>

      <v-card>
        <v-card-title
          class="py-4 title" :class="this.$store.state.mainColorOfTheme"
        >
          {{ title }}
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
                    prepend-icon="phone"
                    :label="$store.state.stampStore.temporaryPictureUrl.label"
                    v-model="$store.state.stampStore.temporaryPictureUrl.value"
                    :rules="$store.state.stampStore.temporaryPictureUrl.validation.functions"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="phone"
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
                    prepend-icon="phone"
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
                    prepend-icon="phone"
                    :label="$store.state.stampStore.nominalValue.label"
                    v-model="$store.state.stampStore.nominalValue.value"
                    :rules="$store.state.stampStore.nominalValue.validation.functions"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="phone"
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
                    prepend-icon="phone"
                    v-model="$store.state.stampStore.isCancelled.value"
                    :label="$store.state.stampStore.isCancelled.label"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="phone"
                    :items="$store.getters.getArrayOfTopicsNames"
                    v-model="$store.state.stampStore.topics.value"
                    :label="$store.state.stampStore.topics.label"
                    :rules="[
                      function validateRequired (value) {
                        let trueOrValidationErrorMessage = true
                        if ($store.state.stampStore.topics.value === null) {
                          trueOrValidationErrorMessage = 'Required.'
                        }
                        else if ($store.state.stampStore.topics.value.length === 0) {
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
                        @input="$store.commit('removeItemFromTopicsValues', data.item)"
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
                      prepend-icon="phone"
                    ></v-text-field>
                  </v-layout>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="phone"
                    :label="$store.state.stampStore.numberMichel.label"
                    v-model="$store.state.stampStore.numberMichel.value"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="phone"
                    :label="$store.state.stampStore.numberStanleyGibbons.label"
                    v-model="$store.state.stampStore.numberStanleyGibbons.value"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="phone"
                    :label="$store.state.stampStore.numberYvertEtTellier.label"
                    v-model="$store.state.stampStore.numberYvertEtTellier.value"
                  ></v-text-field>
                </v-flex>
                <v-divider></v-divider>
                <v-flex xs12 align-center justify-space-between><v-subheader xs12>Category & structure</v-subheader></v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="phone"
                    :items="$store.state.stampStore.arrayOfCategoriesNames"
                    v-model="$store.state.stampStore.category.value"
                    :label="$store.state.stampStore.category.label"
                    :rules="$store.state.stampStore.category.validation.functions"
                    combobox
                  ></v-select>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-select
                    prepend-icon="phone"
                    :items="$store.state.stampStore.arrayOfStructureTypesNames"
                    v-model="$store.state.stampStore.structureType.value"
                    :label="$store.state.stampStore.structureType.label"
                    :rules="$store.state.stampStore.structureType.validation.functions"
                    combobox
                  ></v-select>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="phone"
                    :label="$store.state.stampStore.structureNumber.label"
                    v-model="$store.state.stampStore.structureNumber.value"
                    :rules="$store.state.stampStore.structureNumber.validation.functions"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="phone"
                    :label="$store.state.stampStore.structureStampCount.label"
                    v-model="$store.state.stampStore.structureStampCount.value"
                    :rules="$store.state.stampStore.structureStampCount.validation.functions"
                  ></v-text-field>
                </v-flex>
                <v-divider></v-divider>
                <v-flex xs12 align-center justify-space-between><v-subheader xs12>Other</v-subheader></v-flex>
                <v-divider></v-divider>
                <v-flex xs12 align-center justify-space-between><v-subheader xs12>Custom attributes</v-subheader></v-flex>
                <!--<v-subheader xs12>Other</v-subheader>-->
                <!--<v-subheader xs12>Custom attributes</v-subheader>-->
                <template v-for="(customAttribute, index) in $store.state.stampStore.arrayOfCustomAttributes">
                  <v-flex xs12 sm4 :key="customAttribute.id">
                    <v-text-field
                      prepend-icon="phone"
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
          <v-btn flat color="red" @click="clearForm">
            Clear
            <v-icon dark left>loop</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <!--<v-btn flat color="primary" @click="isNewStampDialogVisible = false">Cancel</v-btn>-->
          <!--<v-btn flat @click="isNewStampDialogVisible = false">Save</v-btn>-->
          <v-btn flat color="blue-grey" @click="setIsStampDialogVisible(false)">
            <v-icon dark left>arrow_back</v-icon>
            Cancel
          </v-btn>
          <v-btn color="green" :disabled="!areAllFieldsValidlyFilled" @click="submitForm()">
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

  export default {
    data () {
      return {
//        isStampDialogVisible: this.$store.state.isStampDialogVisible,
        title: strings.stamps.titleAddNewStamp,
        areAllFieldsValidlyFilled: false
      }
    },
    name: 'StampDialogForCreateAndEditAndView',
  //  props: ['isStampDialogVisible'],
//    data () {
//
//    },
    computed: {
//      ,
//      ...mapGetters({
//        getFormFieldsAndValues: 'getFormFieldsAndValues'
//      })
    },
    methods: {
      setIsStampDialogVisible (booleanValue) {
        this.$store.commit('setIsStampDialogVisible', booleanValue)
      },
      clearForm () {
        /*
         * Here can either be used this v statement OR this.$store.stampDialogStore.commit('resetState')
         */
        this.$refs.stampForm.reset()
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
            this.setIsStampDialogVisible(false)
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
    beforeDestroy () {
      console.log('@@@ StampDialog....vue >>> beforeDestroy ()  ')
      this.setIsStampDialogVisible(false)
    },
    destroyed () {
      console.log('@@@ StampDialog....vue >>> destroyed () ')
    },
    deactivated () {
      console.log('@@@ StampDialog....vue >>> deactivated () ')
    },
    updated () {
      console.log('@@@ StampDialog....vue >>> updated () ')
    },
    watch: {

    }
  }
</script>

<style scoped>

</style>
