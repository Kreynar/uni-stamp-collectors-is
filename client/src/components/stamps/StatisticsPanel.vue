<template style="padding-top:10px !important">
  <v-content style="padding-top:10px !important">
    <v-layout style="padding-top:10px !important">
      <v-flex xs12 style="padding-top:10px !important">
        <v-card style="padding-top:10px !important">
          <!--<v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">-->
          <!--</v-card-media>-->
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Statistics</h3>
              <div>{{ $store.state.stampStore.statistics }}</div>
            </div>
          </v-card-title>
          <!--<v-card-actions>-->
            <!--<v-btn flat color="orange">Share</v-btn>-->
            <!--<v-btn flat color="orange">Explore</v-btn>-->
          <!--</v-card-actions>-->
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
//  import strings from '../../strings.js'
  //  import axios from 'axios'

  export default {
    data () {
      return {
//        sortField: null,
//        sortOrder: 'asc',
//        isExpansionPanelExpanded: false
      }
    },
    computed: {
      /*
       * This computed: doStatisticsNeedToReload () itself does nothing. It is only important, because it
       * is being listened in watch: doStatisticsNeedToReload (), where we detect that that
       * this.$store.state.doStatisticsNeedToReload has been changed - which means we need to
       * reload statistics.
       */
      doStatisticsNeedToReload () {
        return this.$store.state.doStatisticsNeedToReload
      }
    },
    methods: {
      async loadStatistics (route) {
        console.log('@@@ async loadStatistics (route)', route)
        await this.$store.dispatch('loadStatisticsFromServer', route.fullPath)
      }
    },
    async created () {
      try {
        this.loadStatistics(this.$route)
      }
      catch (error) {
      }
      finally {
      }
    },
    watch: {
      async doStatisticsNeedToReload () {
        try {
          this.loadStatistics(this.$route)
        }
        catch (error) {
        }
        finally {
        }
      },
      '$route' (to, from) {
        try {
          console.log('@@@ StatisticsPanel.vue: watch: $route (to, from)', to.fullPath, from.fullPath)
          this.loadStatistics(this.$route)
        }
        catch (error) {
        }
        finally {
        }
      }
    }
  }
</script>
