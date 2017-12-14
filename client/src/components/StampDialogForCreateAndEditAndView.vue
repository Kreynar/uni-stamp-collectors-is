<template>
  <v-dialog v-model="$store.state.isStampDialogVisible" width="800px">
    <v-form v-model="areAllFieldsValidlyFilled" ref="stampForm" lazy-validation>
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          {{ title }}
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-subheader>Pictures</v-subheader>
            <v-subheader>Basic info (required)</v-subheader>
            <v-flex xs12 align-center justify-space-between>
              <v-text-field
                prepend-icon="phone"
                :label="$store.state.stampStore.year.label"
                v-model="$store.state.stampStore.year.value"
                :counter="$store.state.stampStore.year.validation.counter"
                :mask="$store.state.stampStore.year.validation.mask"
                :rules="$store.state.stampStore.year.validation.functions"
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
              ></v-select>
            </v-flex>
            <v-flex xs12 align-center justify-space-between>
              <v-text-field
                prepend-icon="phone"
                :label="$store.state.stampStore.nominalValue.label"
                v-model="$store.state.stampStore.nominalValue.value"
                :rules="$store.state.stampStore.nominalValue.validation.functions"
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
              ></v-select>
            </v-flex>
            <v-flex xs12 align-center justify-space-between>
              <v-checkbox
                prepend-icon="phone"
                v-model="$store.state.stampStore.isCancelled.value"
                :label="$store.state.stampStore.isCancelled.label"
              ></v-checkbox>
            </v-flex>
            <v-flex xs12 align-center justify-space-between>
              <v-select
                prepend-icon="phone"
                :items="$store.getters.getArrayOfTopicsNames"
                v-model="$store.state.stampStore.topics.value"
                :label="$store.state.stampStore.topics.label"
                chips
                tags
                clearable
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
            <v-subheader>Catalog numbers</v-subheader>
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
            <v-subheader>Category & structure</v-subheader>
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
            <v-subheader>Other</v-subheader>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary" @click="clearForm">Clear</v-btn>
          <v-spacer></v-spacer>
          <!--<v-btn flat color="primary" @click="isNewStampDialogVisible = false">Cancel</v-btn>-->
          <!--<v-btn flat @click="isNewStampDialogVisible = false">Save</v-btn>-->
          <v-btn flat color="primary" @click="setIsStampDialogVisible(false)">Cancel</v-btn>
          <v-btn flat @click="submitForm()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
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
        areAllFieldsValidlyFilled: true
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
            this.setIsStampDialogVisible(false)
            this.clearForm()
            console.log('@@@ successfully uploaded stamp form to server: ', serverResponse)
          }
          catch (error) {
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
    }
  }
</script>

<style scoped>

</style>
