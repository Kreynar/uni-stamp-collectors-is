<template>
  <v-content>
    <v-container fluid grid-list-xs class="grey lighten-1">
      <v-layout row wrap>
        <v-expansion-panel>
          <v-expansion-panel-content :class="$store.state.secondaryColorOfTheme">
            <div slot="header" class="text-xs-center" style="font-size:150%">
              <v-flex xs12>
                <!--<span>Search  </span><v-icon>search</v-icon>-->
                Search
              </v-flex>
              <v-flex xs12>
                <v-icon>expand_more</v-icon>
              </v-flex>
            </div>
            <v-card>
              <v-card-text>
                <v-list>
                  <template>
                    <v-subheader>Basic info</v-subheader>
                    <v-container fluid grid-list-md text-xs-center>
                      <v-layout row wrap text-xs-center>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            :label="$store.state.stampStore.year.label"
                            v-model="$store.state.stampStore.year.value"
                            :mask="$store.state.stampStore.year.validation.mask"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-select
                            :items="$store.state.stampStore.arrayOfCountriesIdsAndNames"
                            item-value="id_"
                            item-text="name_"
                            v-model="$store.state.stampStore.country.value"
                            :label="$store.state.stampStore.country.label"
                            autocomplete
                          ></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            :label="$store.state.stampStore.nominalValue.label"
                            v-model="$store.state.stampStore.nominalValue.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-select
                            :items="$store.state.stampStore.arrayOfGradesIdsAndNames"
                            item-value="id_"
                            item-text="name_"
                            v-model="$store.state.stampStore.grade.value"
                            :label="$store.state.stampStore.grade.label"
                            autocomplete
                          ></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-checkbox
                            v-model="$store.state.stampStore.isCancelled.value"
                            :label="$store.state.stampStore.isCancelled.label"
                          ></v-checkbox>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-select
                            :items="$store.getters.getArrayOfTopicsNames"
                            v-model="$store.state.stampStore.arrayOfTopics.value"
                            :label="$store.state.stampStore.arrayOfTopics.label"
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
                      </v-layout>
                    </v-container>
                    <v-divider></v-divider>
                    <v-subheader>Catalog numbers</v-subheader>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            :label="$store.state.stampStore.numberMichel.label"
                            v-model="$store.state.stampStore.numberMichel.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            :label="$store.state.stampStore.numberScott.label"
                            v-model="$store.state.stampStore.numberScott.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            :label="$store.state.stampStore.numberMichel.label"
                            v-model="$store.state.stampStore.numberMichel.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            :label="$store.state.stampStore.numberStanleyGibbons.label"
                            v-model="$store.state.stampStore.numberStanleyGibbons.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            :label="$store.state.stampStore.numberYvertEtTellier.label"
                            v-model="$store.state.stampStore.numberYvertEtTellier.value"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-divider></v-divider>
                    <v-subheader>Category & structure</v-subheader>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-select
                            :items="$store.state.stampStore.arrayOfCategoriesNames"
                            v-model="$store.state.stampStore.category.value"
                            :label="$store.state.stampStore.category.label"
                            combobox
                          ></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-select
                            :items="$store.state.stampStore.arrayOfStructureTypesNames"
                            v-model="$store.state.stampStore.structureType.value"
                            :label="$store.state.stampStore.structureType.label"
                            combobox
                          ></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            :label="$store.state.stampStore.structureNumber.label"
                            v-model="$store.state.stampStore.structureNumber.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            type="number"
                            :label="$store.state.stampStore.structureStampCount.label"
                            v-model="structureStampCount"
                            ref="structureStampCount"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-divider></v-divider>
                    <v-subheader>Other</v-subheader>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-checkbox
                            :label="$store.state.stampStore.isExhibited.label"
                            v-model="$store.state.stampStore.isExhibited.value"
                          ></v-checkbox>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            type="number"
                            :label="$store.state.stampStore.specimenCount.label"
                            v-model="specimenCount"
                            ref="specimenCount"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-checkbox
                            :label="$store.state.stampStore.isOnSale.label"
                            v-model="$store.state.stampStore.isOnSale.value"
                          ></v-checkbox>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            suffix="$"
                            type="number"
                            :label="$store.state.stampStore.marketValue.label"
                            v-model="marketValue"
                            ref="marketValue"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            :label="$store.state.stampStore.faceDescription.label"
                            v-model="$store.state.stampStore.faceDescription.value"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            :label="$store.state.stampStore.comment.label"
                            v-model="$store.state.stampStore.comment.value"
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
                            label="Title"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                          <v-text-field
                            label="Value"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-btn
                      round
                      :color="$store.state.mainColorOfTheme"
                      dark
                      block
                      @click="">
                      Search
                      <v-icon right>search</v-icon>
                    </v-btn>
                  </template>
                </v-list>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-content :class="$store.state.secondaryColorOfTheme">
            <div slot="header" class="text-xs-center" style="font-size:150%">
              <v-flex xs12>
                Sort
                <!--<span>Sort  </span><v-icon>compare_arrows</v-icon>-->
              </v-flex>
              <v-flex xs12>
                <v-icon>expand_more</v-icon>
              </v-flex>
              <!--<v-btn fab dark small :color="$store.state.mainColorOfTheme">-->
                <!--<v-icon dark>expand_more</v-icon>-->
              <!--</v-btn>-->
            </div>
            <v-card >
              <v-card-text >
                <v-list>
                  <template>
                    <v-subheader>Basic info</v-subheader>
                    <v-container fluid grid-list-md text-xs-center>
                      <v-layout row wrap text-xs-center>
                        <v-flex xs12 sm6 md3 lg2>
                          <v-text-field
                            :label="$store.state.stampStore.year.label"
                            v-model="$store.state.stampStore.year.value"
                            :mask="$store.state.stampStore.year.validation.mask"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-btn
                      round
                      :color="$store.state.mainColorOfTheme"
                      dark
                      block
                      @click="">
                      Sort
                      <v-icon right>sort</v-icon>
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
  import strings from '../strings.js'

  export default {
  }
</script>

<style scoped>

</style>
