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
            <v-subheader>Catalog numbers</v-subheader>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-text-field
                  :label="$store.state.stampDialogStore.numberScott.label"
                  v-model="$store.state.stampDialogStore.numberScott.value"
                  prepend-icon="phone"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs12 align-center justify-space-between>
              <v-text-field
                prepend-icon="phone"
                :label="$store.state.stampDialogStore.numberMichel.label"
                v-model="$store.state.stampDialogStore.numberMichel.value"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 align-center justify-space-between>
              <v-text-field
                prepend-icon="phone"
                :label="$store.state.stampDialogStore.numberStanleyGibbons.label"
                v-model="$store.state.stampDialogStore.numberStanleyGibbons.value"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 align-center justify-space-between>
              <v-text-field
                prepend-icon="phone"
                :label="$store.state.stampDialogStore.numberYvertEtTellier.label"
                v-model="$store.state.stampDialogStore.numberYvertEtTellier.value"
              ></v-text-field>
            </v-flex>
            <v-subheader>Basic info</v-subheader>
            <v-flex xs12 align-center justify-space-between>
              <v-text-field
                prepend-icon="phone"
                :label="$store.state.stampDialogStore.year.label"
                v-model="$store.state.stampDialogStore.year.value"
                :counter="$store.state.stampDialogStore.year.validation.counter"
                :mask="$store.state.stampDialogStore.year.validation.mask"
                :rules="$store.state.stampDialogStore.year.validation.functions"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="phone"
                label="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                label="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="phone"
                label="Notes"
              ></v-text-field>
            </v-flex>
            <v-subheader>Category & structure</v-subheader>
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
