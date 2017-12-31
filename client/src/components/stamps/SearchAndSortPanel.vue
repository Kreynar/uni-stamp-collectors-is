<template>
  <v-content>
    <v-container fluid grid-list-xs class="grey lighten-1">
      <v-layout row wrap>
        <v-expansion-panel>
          <v-expansion-panel-content :class="$store.state.secondaryColorOfTheme" v-model="isExpansionPanelExpanded">
            <div slot="header" class="text-xs-center" style="font-size:150%">
              <v-flex xs12>
                <!--<span>Search  </span><v-icon>search</v-icon>-->
                Search and Sort
              </v-flex>
              <v-flex xs12>
                <v-icon>expand_more</v-icon>
              </v-flex>
            </div>
            <v-card>
              <v-card-text>
                <v-list>
                  <template>
                    <v-subheader style="font-size:150%">Filter by:</v-subheader>
                    <v-subheader>Basic info</v-subheader>
                    <v-container fluid grid-list-md text-xs-center>
                      <v-layout row wrap text-xs-center>
                        <v-flex xs12 sm6 md3>
                          <v-text-field
                            type="number"
                            :label="$store.state.stampStore.modelForSearch.year.label"
                            v-model="$store.state.stampStore.modelForSearch.year.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3>
                          <v-text-field
                            type="number"
                            :label="$store.state.stampStore.modelForSearch.yearMin.label"
                            v-model="$store.state.stampStore.modelForSearch.yearMin.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3>
                          <v-text-field
                            type="number"
                            :label="$store.state.stampStore.modelForSearch.yearMax.label"
                            v-model="$store.state.stampStore.modelForSearch.yearMax.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3>
                          <v-select
                            :items="$store.state.stampStore.arrayOfCountriesIdsAndNames"
                            item-value="id_"
                            item-text="name_"
                            v-model="$store.state.stampStore.modelForSearch.country.value"
                            :label="$store.state.stampStore.modelForSearch.country.label"
                            combobox
                          ></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md3>
                          <v-text-field
                            :label="$store.state.stampStore.modelForSearch.nominalValue.label"
                            v-model="$store.state.stampStore.modelForSearch.nominalValue.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3>
                          <v-select
                            :items="$store.state.stampStore.arrayOfGradesIdsAndNames"
                            item-value="id_"
                            item-text="name_"
                            v-model="$store.state.stampStore.modelForSearch.grade.value"
                            :label="$store.state.stampStore.modelForSearch.grade.label"
                            combobox
                          ></v-select>
                        </v-flex>
                        <!--<v-flex xs12 sm6 md3>-->
                          <!--<v-select-->
                            <!--:items="getIsCancelledNamesAndLabelsForSelectForSearch"-->
                            <!--item-value="value"-->
                            <!--item-text="label"-->
                            <!--v-model="$store.state.stampStore.modelForSearch.isCancelled.value"-->
                            <!--:label="$store.state.stampStore.modelForSearch.isCancelled.label"-->
                            <!--autocomplete-->
                          <!--&gt;-->
                          <!--</v-select>-->
                        <!--</v-flex>-->
                        <v-flex xs12 sm6 md3>
                          <v-select
                            :items="$store.getters.getArrayOfTopicsNames"
                            v-model="$store.state.stampStore.modelForSearch.arrayOfTopics.value"
                            :label="$store.state.stampStore.modelForSearch.arrayOfTopics.label"
                            combobox
                          >
                          </v-select>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-divider></v-divider>
                    <v-subheader>Catalog numbers</v-subheader>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <v-flex xs12 sm6 md3>
                          <v-text-field
                            :label="$store.state.stampStore.modelForSearch.numberScott.label"
                            v-model="$store.state.stampStore.modelForSearch.numberScott.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 >
                          <v-text-field
                            :label="$store.state.stampStore.modelForSearch.numberMichel.label"
                            v-model="$store.state.stampStore.modelForSearch.numberMichel.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 >
                          <v-text-field
                            :label="$store.state.stampStore.modelForSearch.numberStanleyGibbons.label"
                            v-model="$store.state.stampStore.modelForSearch.numberStanleyGibbons.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 >
                          <v-text-field
                            :label="$store.state.stampStore.modelForSearch.numberYvertEtTellier.label"
                            v-model="$store.state.stampStore.modelForSearch.numberYvertEtTellier.value"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-divider></v-divider>
                    <v-subheader>Category & structure</v-subheader>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <v-flex xs12 sm6 md3 >
                          <v-select
                            :items="$store.state.stampStore.arrayOfCategoriesNames"
                            v-model="$store.state.stampStore.modelForSearch.category.value"
                            :label="$store.state.stampStore.modelForSearch.category.label"
                            combobox
                          ></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md3 >
                          <v-select
                            :items="$store.state.stampStore.arrayOfStructureTypesNames"
                            v-model="$store.state.stampStore.modelForSearch.structureType.value"
                            :label="$store.state.stampStore.modelForSearch.structureType.label"
                            combobox
                          ></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md3 >
                          <v-text-field
                            :label="$store.state.stampStore.modelForSearch.structureNumber.label"
                            v-model="$store.state.stampStore.modelForSearch.structureNumber.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 >
                          <v-text-field
                            type="number"
                            :label="$store.state.stampStore.modelForSearch.structureStampCount.label"
                            v-model="$store.state.stampStore.modelForSearch.structureStampCount.value"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-divider></v-divider>
                    <v-subheader>Other</v-subheader>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <!--<v-flex xs12 sm6 md3 >-->
                          <!--<v-checkbox-->
                            <!--:label="$store.state.stampStore.modelForSearch.isExhibited.label"-->
                            <!--v-model="$store.state.stampStore.modelForSearch.isExhibited.value"-->
                          <!--&gt;</v-checkbox>-->
                        <!--</v-flex>-->
                        <v-flex xs12 sm6 md3 >
                          <v-text-field
                            type="number"
                            :label="$store.state.stampStore.modelForSearch.specimenCount.label"
                            v-model="$store.state.stampStore.modelForSearch.specimenCount.value"
                          ></v-text-field>
                        </v-flex>
                        <!--<v-flex xs12 sm6 md3>-->
                          <!--<v-select-->
                            <!--:items="getIsCancelledNamesAndLabelsForSelectForSearch"-->
                            <!--item-value="value"-->
                            <!--item-text="label"-->
                            <!--v-model="$store.state.stampStore.modelForSearch.isCancelled.value"-->
                            <!--:label="$store.state.stampStore.modelForSearch.isCancelled.label"-->
                            <!--autocomplete-->
                          <!--&gt;-->
                          <!--</v-select>-->
                        <!--</v-flex>-->
                        <!--<v-flex xs12 sm6 md3 >-->
                          <!--<v-checkbox-->
                            <!--:label="$store.state.stampStore.modelForSearch.isOnSale.label"-->
                            <!--v-model="$store.state.stampStore.modelForSearch.isOnSale.value"-->
                          <!--&gt;</v-checkbox>-->
                        <!--</v-flex>-->
                        <v-flex xs12 sm6 md3 >
                          <v-text-field
                            suffix="$"
                            type="number"
                            :label="$store.state.stampStore.modelForSearch.marketValue.label"
                            v-model="$store.state.stampStore.modelForSearch.marketValue.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 >
                          <v-text-field
                            :label="$store.state.stampStore.modelForSearch.faceDescription.label"
                            v-model="$store.state.stampStore.modelForSearch.faceDescription.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 >
                          <v-text-field
                            :label="$store.state.stampStore.modelForSearch.comment.label"
                            v-model="$store.state.stampStore.modelForSearch.comment.value"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-divider></v-divider>
                    <v-subheader>Custom attributes</v-subheader>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <v-flex xs6>
                          <v-text-field
                            :label="$store.state.stampStore.modelForSearch.customAttributeLabel.label"
                            v-model="$store.state.stampStore.modelForSearch.customAttributeLabel.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                          <v-text-field
                            :label="$store.state.stampStore.modelForSearch.customAttributeValue.label"
                            v-model="$store.state.stampStore.modelForSearch.customAttributeValue.value"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-divider></v-divider>
                    <v-subheader style="font-size:150%">Sort by:</v-subheader>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <v-flex xs10>
                          <!--<v-select-->
                            <!--:items="this.$store.getters.getArrayOfFieldsNamesAndLabelsFromSearchPanel"-->
                            <!--item-value="name"-->
                            <!--item-text="label"-->
                            <!--v-model="sortFieldComputed"-->
                            <!--label="Attribute"-->
                            <!--ref="sortField"-->
                            <!--autocomplete-->
                          <!--&gt;</v-select>-->
                          <v-select
                            :items="getArrayOfAttributesNamesAndLabelsForSort"
                            item-value="name"
                            item-text="label"
                            v-model="sortField"
                            label="Attribute"
                            hint="Default order - Date modified"
                            ref="sortField"
                            autocomplete
                          ></v-select>
                        </v-flex>
                        <v-flex xs2 v-if="(sortField !== null)">
                          <v-btn :color="$store.state.mainColorOfTheme" fab dark small @click="changeSortOrder">
                            <v-icon v-if="(sortOrder === 'asc')">arrow_downward</v-icon>
                            <v-icon v-if="(sortOrder === 'desc')">arrow_upward</v-icon>
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-btn
                      round
                      :color="$store.state.mainColorOfTheme"
                      dark
                      block
                      @click="searchAndSort()">
                      Search
                      <v-icon right>search</v-icon>
                    </v-btn>
                  </template>
                </v-list>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// eslint-disable-next-line no-unused-vars
  import strings from '../../strings.js'
//  import axios from 'axios'

  export default {
    data () {
      return {
        sortField: null,
        sortOrder: 'asc',
        isExpansionPanelExpanded: false
      }
    },
    computed: {
      /*
       * I wanted to allow user to delete (just by clicking backspace) whatever value he chose before in this sort field v-select.
       * But it seems really complicated to do with Vuetify. Because sortFieldComputed: set (value) function gets
       * item-text instead of item-value. And some other things get messier too. So decided not to waste time here.
       */
//      sortFieldComputed: {
//        get () {
//          return this.sortField
//        },
//        set (value) {
//          if (value === '') {
//            this.sortField = 1
//          }
//          else {
//            /*
//             * Must check if user has input a label, that exists in given list.
//             * Otherwise, set sortField = null
//             */
//            let doesUserInputLabelExistInGivenList = false
//            const arrayOfFieldsNamesAndLabels = this.$store.getters.getArrayOfFieldsNamesAndLabelsFromSearchPanel
//            for (const index in arrayOfFieldsNamesAndLabels) {
//              if (arrayOfFieldsNamesAndLabels[index].label === value) {
//                doesUserInputLabelExistInGivenList = true
//              }
//            }
//            if (doesUserInputLabelExistInGivenList) {
//              this.sortField = value
//            }
//            else {
//              this.sortField = null
//            }
//          }
//        }
//      }
      getIsCancelledNamesAndLabelsForSelectForSearch () {
        const isCancelledNamesAndLabels = [
          {
            value: null,
            label: ''
          },
          {
            value: true,
            label: 'Cancelled'
          },
          {
            value: false,
            label: 'Not cancelled'
          }
        ]
        return isCancelledNamesAndLabels
      },
      getIsOnSaleNamesAndLabelsForSelectForSearch () {
        const isOnSaleNamesAndLabels = [
          {
            value: null,
            label: ''
          },
          {
            value: true,
            label: 'On sale'
          },
          {
            value: false,
            label: 'Not on sale'
          }
        ]
        return isOnSaleNamesAndLabels
      },
      getArrayOfAttributesNamesAndLabelsForSort () {
        const ss = strings.stamps
//        let arrayOfAttributesNamesAndLabelsForSort = JSON.parse(JSON.stringify(this.$store.getters.getArrayOfFieldsNamesAndLabelsForSort))
        const arrayOfAttributesNamesAndLabelsForSort = [
          {
            name: null,
            label: ''
          },
          {
            name: 'modifiedAt',
            label: 'Date modified'
          },
          {
            name: 'numberScott',
            label: ss.numberScott
          },
          {
            name: 'numberMichel',
            label: ss.numberMichel
          },
          {
            name: 'numberStanleyGibbons',
            label: ss.numberStanleyGibbons
          },
          {
            name: 'numberYvertEtTellier',
            label: ss.numberYvertEtTellier
          },
          {
            name: 'year',
            label: ss.year
          },
          {
            name: 'country',
            label: ss.country
          },
          {
            name: 'grade',
            label: ss.grade
          },
          {
            name: 'isCancelled',
            label: ss.isCancelled
          },
          {
            name: 'specimenCount',
            label: ss.specimenCount
          },
          {
            name: 'marketValue',
            label: ss.marketValue
          }
        ]
        return arrayOfAttributesNamesAndLabelsForSort
      }
    },
    methods: {
      changeSortOrder () {
        if (this.sortOrder !== 'asc') {
          this.sortOrder = 'asc'
        }
        else {
          this.sortOrder = 'desc'
        }
      },
      async searchAndSort () {
        const formFieldsAndValues = this.$store.getters.getNonNullFieldsAndValuesFromSearchPanel
        try {
          const fullPathObject = {
            name: this.$route.name,
            query: {
              ...formFieldsAndValues
            }
          }
          if (this.sortField !== null) {
            fullPathObject.query.sortField = this.sortField
            fullPathObject.query.sortOrder = this.sortOrder
          }
          this.$router.push(fullPathObject)
          await this.$store.dispatch('loadArrayOfStampsFromServer', this.$route.fullPath)
        }
        catch (error) {
          const errorMessage = error.response.data.errorMessage
          console.log('@@@ error in searchAndSort ():', errorMessage)
        }
      }
    },
    watch: {
      isExpansionPanelExpanded (newValue, oldValue) {
        if (newValue) {
          /*
           * Also (for now - only for SearchAndSortPanel needs) load topics, grades and countries.
           * User topic list is added with new values frequently, so refresh it everytime.
           * Countries and grades are only edited by website admins very rarely, so no need to refresh every time.
           */
          this.$store.dispatch('loadTopicsFromServer')
          if (this.$store.state.stampStore.arrayOfGradesIdsAndNames.length === 0) {
            this.$store.dispatch('loadGradesFromServer')
          }
          if (this.$store.state.stampStore.arrayOfCountriesIdsAndNames.length === 0) {
            this.$store.dispatch('loadCountriesFromServer')
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
