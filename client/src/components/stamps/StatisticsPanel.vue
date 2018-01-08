<template style="padding-top:10px !important">
  <!--<v-content style="padding-top:10px !important">-->
    <v-layout style="padding-top:10px !important">

      <v-expansion-panel v-if="($store.state.stampStore.statistics !== null)">
        <v-expansion-panel-content  v-model="isExpansionPanelExpanded">
          <div slot="header" class="text-xs-center" style="font-size:120%">
            <v-flex xs12>
              {{ $store.state.stampStore.statistics.numberOfStamps }} stamps
              from {{ $store.state.stampStore.statistics.numberOfUsers }} users
            </v-flex>
            <!--<v-flex xs12 v-if="($store.state.stampStore.statistics.numberOfStamps > 0)">-->
              <!--<v-icon>expand_more</v-icon>-->
            <!--</v-flex>-->
          </div>
          <v-card v-if="($store.state.stampStore.statistics.numberOfStamps > 0)">
            <v-card-text>
              <!--<div class="text-xs-center">-->

                <div>
                  <v-flex offset-xs1>
                    Published in:
                    <ul>
                      <li>
                        {{ $store.state.stampStore.statistics.numberOfYears }} different year(-s)
                        ({{ $store.state.stampStore.statistics.firstYear }} - {{ $store.state.stampStore.statistics.lastYear }}),
                      </li>
                      <li>
                        in {{ $store.state.stampStore.statistics.numberOfCountries }} different country(-ies)
                        ({{ $store.state.stampStore.statistics.firstCountry }} - {{ $store.state.stampStore.statistics.lastCountry }}),
                      </li>
                      <li>
                        of {{ $store.state.stampStore.statistics.numberOfGrades }} different grade(-s)
                        ({{ $store.state.stampStore.statistics.firstGrade }} - {{ $store.state.stampStore.statistics.lastGrade }},
                        avg. {{ $store.state.stampStore.statistics.averageGrade }})
                      </li>
                    </ul>
                  </v-flex>

                </div>

              <!--</div>-->
              <!--(<{{ $store.state.stampStore.statistics.firstUser }}> - <{{ $store.state.stampStore.statistics.lastUser }}>),-->
              <!--<br/>-->

              <!--{{ $store.state.stampStore.statistics.numberOfYears }} different year(-s)-->
              <!--({{ $store.state.stampStore.statistics.firstYear }} - {{ $store.state.stampStore.statistics.lastYear }}),-->
              <!--<br/>-->
              <!--in {{ $store.state.stampStore.statistics.numberOfCountries }} different country(-ies)-->
              <!--({{ $store.state.stampStore.statistics.firstCountry }} - {{ $store.state.stampStore.statistics.lastCountry }}),-->
              <!--<br/>-->
              <!--of {{ $store.state.stampStore.statistics.numberOfGrades }} different grade(-s)-->
              <!--({{ $store.state.stampStore.statistics.firstGrade }} - {{ $store.state.stampStore.statistics.lastGrade }},-->
              <!--avg. {{ $store.state.stampStore.statistics.averageGrade }})-->
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>


      <!--<v-flex xs12 style="padding-top:10px !important">-->
        <!--<v-card style="padding-top:10px !important">-->
          <!--<v-card-title primary-title>-->
            <!--<div>-->


              <!--<div v-if="($store.state.stampStore.statistics === null)"></div>-->
              <!--<div v-else-if="($store.state.stampStore.statistics.numberOfStamps > 0)">-->
                <!--&lt;!&ndash;Currently showing:&ndash;&gt;-->
                <!--&lt;!&ndash;<br/>&ndash;&gt;-->
                <!--&lt;!&ndash;{{ $store.state.stampStore.statistics.numberOfStamps }} stamp(-s)&ndash;&gt;-->
                <!--&lt;!&ndash;belonging to {{ $store.state.stampStore.statistics.numberOfUsers }} user(-s)&ndash;&gt;-->
                <!--({{ $store.state.stampStore.statistics.firstUser }} - {{ $store.state.stampStore.statistics.lastUser }}),-->
                <!--<br/>-->
                <!--published in {{ $store.state.stampStore.statistics.numberOfYears }} year(-s)-->
                <!--({{ $store.state.stampStore.statistics.firstYear }} - {{ $store.state.stampStore.statistics.lastYear }}),-->
                <!--<br/>-->
                <!--from {{ $store.state.stampStore.statistics.numberOfCountries }} country(-ies)-->
                <!--({{ $store.state.stampStore.statistics.firstCountry }} - {{ $store.state.stampStore.statistics.lastCountry }}),-->
                <!--<br/>-->
                <!--of {{ $store.state.stampStore.statistics.numberOfGrades }} grade(-s)-->
                <!--({{ $store.state.stampStore.statistics.firstGrade }} - {{ $store.state.stampStore.statistics.lastGrade }}, -->
                <!--avg. {{ $store.state.stampStore.statistics.averageGrade }})-->
              <!--</div>-->
              <!--<div v-else>-->
                <!--No stamps matching criteria found.-->
              <!--</div>-->


            <!--</div>-->
          <!--</v-card-title>-->
          <!--&lt;!&ndash;<v-card-actions>&ndash;&gt;-->
            <!--&lt;!&ndash;<v-btn flat color="orange">Share</v-btn>&ndash;&gt;-->
            <!--&lt;!&ndash;<v-btn flat color="orange">Explore</v-btn>&ndash;&gt;-->
          <!--&lt;!&ndash;</v-card-actions>&ndash;&gt;-->
        <!--</v-card>-->
      <!--</v-flex>-->



    </v-layout>
  <!--</v-content>-->
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  import strings from '../../strings.js'
  //  import axios from 'axios'

  export default {
    data () {
      return {
//        sortField: null,
//        sortOrder: 'asc',
        isExpansionPanelExpanded: false
      }
    }
//    computed: {
//      /*
//       * This computed: doStatisticsNeedToReload () itself does nothing. It is only important, because it
//       * is being listened in watch: doStatisticsNeedToReload (), where we detect that that
//       * this.$store.state.doStatisticsNeedToReload has been changed - which means we need to
//       * reload statistics.
//       */
//      doStatisticsNeedToReload () {
//        return this.$store.state.doStatisticsNeedToReload
//      }
//    },
//    methods: {
//      async loadStatistics (route) {
//        console.log('@@@ async loadStatistics (route)', route)
//        const statisticsFullPath = strings.path.statistics + (route.fullPath).replace(route.path, '')
//        await this.$store.dispatch('loadStatisticsFromServer', statisticsFullPath)
//      }
//    },
//    async created () {
//      try {
//        this.loadStatistics(this.$route)
//      }
//      catch (error) {
//      }
//      finally {
//      }
//    },
//    watch: {
//      async doStatisticsNeedToReload () {
//        try {
//          this.loadStatistics(this.$route)
//        }
//        catch (error) {
//        }
//        finally {
//        }
//      },
//      '$route' (to, from) {
//        try {
//          console.log('@@@ StatisticsPanel.vue: watch: $route (to, from)', to.fullPath, from.fullPath)
//          this.loadStatistics(this.$route)
//        }
//        catch (error) {
//        }
//        finally {
//        }
//      }
//    }
  }
</script>
