<template>
  <v-content style="padding-top: 1px;">
      <!--<v-content style="padding:300px 300px 300px 300px">-->
    <v-container fluid grid-list-xl class="grey lighten-4">
      <!--<v-layout row wrap style="max-height: 1px; background-color:blue">-->
      <v-layout row wrap>
        <!--<v-flex xs12>-->
          <!--<div class="text-xs-center">-->
            <!--<v-btn-->
              <!--fab-->
              <!--fixed-->
              <!--top-->
              <!--left-->
              <!--:color="this.$store.state.mainColorOfTheme"-->
              <!--dark-->
              <!--@click.stop="isStampDialogVisible = !isStampDialogVisible"-->
            <!--&gt;-->
              <!--<v-icon>add</v-icon>-->
            <!--</v-btn>-->
          <!--</div>-->
        <!--</v-flex>-->
        <v-btn
          round
          :color="$store.state.mainColorOfTheme"
          dark
          block
          @click="showStampDialogForCreate()">
          New Stamp
          <v-icon right>add</v-icon>
        </v-btn>
      </v-layout>
    </v-container>

    <!--<v-layout row wrap class="fab-container" height="1px" style="max-height: 50px" text-xs-center>-->
      <!--&lt;!&ndash;<v-btn fab>&ndash;&gt;-->
      <!--&lt;!&ndash;<v-icon>add</v-icon>&ndash;&gt;-->
      <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
      <!--&lt;!&ndash;<v-btn fab>&ndash;&gt;-->
      <!--&lt;!&ndash;<v-icon>remove</v-icon>&ndash;&gt;-->
      <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
      <!--&lt;!&ndash;<v-btn&ndash;&gt;-->
      <!--&lt;!&ndash;fab&ndash;&gt;-->
      <!--&lt;!&ndash;right&ndash;&gt;-->
      <!--&lt;!&ndash;bottom&ndash;&gt;-->
      <!--&lt;!&ndash;:color="this.$store.state.mainColorOfTheme"&ndash;&gt;-->
      <!--&lt;!&ndash;dark&ndash;&gt;-->
      <!--&lt;!&ndash;fixed&ndash;&gt;-->
      <!--&lt;!&ndash;@click.stop="isStampDialogVisible = !isStampDialogVisible"&ndash;&gt;-->
      <!--&lt;!&ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;<v-icon>add</v-icon>&ndash;&gt;-->
      <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
      <!--<v-btn-->
        <!--fab-->
        <!--:color="this.$store.state.mainColorOfTheme"-->
        <!--dark-->
        <!--@click.stop="isStampDialogVisible = !isStampDialogVisible"-->
      <!--&gt;-->
        <!--<v-icon>add</v-icon>-->
      <!--</v-btn>-->
    <!--</v-layout>-->
    <v-container fluid grid-list-xl class="grey lighten-4">
      <v-layout row wrap>
        <!--<v-flex-->
          <!--xs6-->
        <!--&gt;-->
          <!--<v-card>-->
            <!--<v-card-media-->
              <!--src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qdKu8IQgeaXWbPcrrsYEN7znwI3Jhx-0gtt8T3KMjiTSR2WmEg"-->
              <!--height="300px"-->
              <!--contain-->
            <!--&gt;</v-card-media>-->
            <!--<v-card-title>-->
              <!--<div>-->
                <!--<span class="grey&#45;&#45;text">Number 10</span><br>-->
                <!--<span>Whitehaven Beach</span><br>-->
                <!--<span>Whitsunday Island, Whitsunday Islands</span>-->
              <!--</div>-->
            <!--</v-card-title>-->
            <!--<v-card-text>-->
              <!--Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat. Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer-->
            <!--</v-card-text>-->
            <!--<v-card-actions>-->
              <!--<v-btn flat color="orange">Share</v-btn>-->
              <!--<v-btn flat color="orange">Explore</v-btn>-->
            <!--</v-card-actions>-->
          <!--</v-card>-->
        <!--</v-flex>-->
        <!--<v-flex-->
          <!--xs6-->
        <!--&gt;-->
          <!--<v-card height="900px">-->
            <!--<v-card-media-->
              <!--src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qdKu8IQgeaXWbPcrrsYEN7znwI3Jhx-0gtt8T3KMjiTSR2WmEg"-->
              <!--height="300px"-->
              <!--contain-->
            <!--&gt;</v-card-media>-->
            <!--<v-card-title>-->
              <!--<div>-->
                <!--<span class="grey&#45;&#45;text">Number 10</span><br>-->
                <!--<span>Whitehaven Beach</span><br>-->
                <!--<span>Whitsunday Island, Whitsunday Islands</span>-->
              <!--</div>-->
            <!--</v-card-title>-->
            <!--<v-card-text>-->
              <!--<v-container-->
                <!--style="max-height: 400px"-->
                <!--class="scroll-y"-->
                <!--id="scroll-target"-->
              <!--&gt;-->
                <!--Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat. Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer-->
                <!--Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat. Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer-->
                <!--Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat. Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer-->
              <!--</v-container>-->
            <!--</v-card-text>-->
            <!--<v-card-actions>-->
              <!--<v-btn flat color="orange">Share</v-btn>-->
              <!--<v-btn flat color="orange">Explore</v-btn>-->
            <!--</v-card-actions>-->
          <!--</v-card>-->
        <!--</v-flex>-->
        <template v-for="(stamp, index) in $store.state.stampStore.arrayOfStamps">
          <v-flex
            :key="stamp.id"
            xs12
            sm6
            md4
            lg3
            xl2
          >
            <v-card>
              <v-card-media
                :src="stamp.temporaryPictureUrl"
                height="300px"
                contain
                @click="showStampDialogForView(stamp.id)"
              ></v-card-media>
              <v-layout
                justify-center
                @click="showStampDialogForView(stamp.id)"
              >
                <v-card-title class="text-xs-center">
                  <div class="text-xs-center" style="font-size:130%">
                    <span style="font-weight: bold;">{{ stamp.year }}, {{ stamp.country }}, {{ stamp.nominalValue }}</span><br>
                    <!--<span>{{ stamp.country }}</span><br>-->
                    <!--<span>{{ stamp.nominalValue }}</span><br>-->
                    <span v-if="(stamp.grade === '100 - Superb Gem')" style="color: green;">{{ stamp.grade }}</span>
                    <span v-else>{{ stamp.grade }}</span>
                    <br>
                    <span>{{ stamp.isCancelled | getIsCancelledDisplay }}</span>
                    <v-icon v-if="stamp.isCancelled" small style="font-size:80%">not_interested</v-icon><br>
                    <!--<span>{{ stamp.arrayOfTopics }}</span>-->
                    <span v-for="topic in stamp.arrayOfTopics">
                        <v-chip>{{ topic }}</v-chip>
                    </span>
                  </div>
                </v-card-title>
              </v-layout>
              <v-card-actions>
                <!--<v-flex xs1>-->
                  <!--<v-btn flat icon color="black" @click="initiateStampDelete(stamp.id)">-->
                    <!--<v-icon>clear</v-icon>-->
                  <!--</v-btn>-->
                <!--</v-flex>-->
                <!--<v-menu bottom offset-y>-->
                  <!--<v-btn flat icon color="black" slot="activator">-->
                    <!--<v-icon>clear</v-icon>-->
                    <!--<v-list>-->
                      <!--<v-list-tile @click="initiateStampDelete(stamp.id)">-->
                        <!--<v-list-tile-title>Confirm delete</v-list-tile-title>-->
                      <!--</v-list-tile>-->
                    <!--</v-list>-->
                  <!--</v-btn>-->
                <!--</v-menu>-->
                <v-flex xs1>
                  <v-menu bottom offset-y>
                    <v-btn flat icon color="black" slot="activator"><v-icon>clear</v-icon></v-btn>
                    <v-list>
                      <v-list-tile @click="initiateStampDelete(stamp.id)">
                        <v-list-tile-title>Confirm delete</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </v-flex>
                <v-flex xs5></v-flex>
                <v-flex xs1>
                  <v-btn flat icon color="black" @click="showStampDialogForEdit(stamp.id)">
                    <v-icon>create</v-icon>
                  </v-btn>
                </v-flex>
              </v-card-actions>
            </v-card>
          </v-flex>
        </template>
      </v-layout>
    </v-container>

  </v-content>

</template>

<script>
  import axios from 'axios'
  import strings from '../../strings.js'

//  const getArrayOfStampsFromServer = async () => {
//    const serverResponse = await axios.create({
//      baseURL: strings.baseURL
//    }).get(strings.path.stamps)
//    return serverResponse.data
//  }

  export default {
    data () {
      return {
        property: 'Blank'
      }
    },
    computed: {
      /*
       * This computed: doesStampListNeedToReload () itself does nothing. It is only important, because it
       * is being listened in watch: doesStampListNeedToReload (), where we detect that that
       * this.$store.state.triggerDoesStampListNeedToReload has been changed - which means we need to
       * reload stamp list.
       */
      doesStampListNeedToReload () {
        return this.$store.state.doesStampListNeedToReload
      }
    },
    filters: {
      getIsCancelledDisplay: function (isCancelled) {
        if (isCancelled) {
          return 'Cancelled'
        }
        else {
          return 'Not cancelled'
        }
      }
    },
    methods: {
      async loadStampList () {
//    const arrayOfStamps = await getArrayOfStampsFromServer()
        const serverResponse = await axios.create({
          baseURL: strings.baseURL
        }).get(strings.path.stamps)
        const arrayOfStamps = serverResponse.data
        this.$store.commit('setArrayOfStamps', arrayOfStamps)
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
      },
      async showStampDialogForCreate () {
        console.log('@@@ changeNewStampDialogVisibility() kvietimas')
        this.$store.commit('setStampId', null)
        this.$store.commit('setIsStampDialogVisible', true)
        this.$store.commit('setStampDialogMode', strings.stampDialog.mode.create)
      },
      async showStampDialogForView (stampId) {
        console.log('@@@ showStampDialogForView(stampId) kvietimas')
        this.$store.commit('setStampId', stampId)
        this.$store.commit('setIsStampDialogVisible', true)
        this.$store.commit('setStampDialogMode', strings.stampDialog.mode.view)
//        this.$store.dispatch('loadCountriesGradesTopicsFromServer')
        // Now gotta load stamp attributes from server to client
//        this.$store.dispatch('loadStampAttributesFromServer', stampId)
      },
      async showStampDialogForEdit (stampId) {
        console.log('@@@ showStampDialogForEdit(stampId) kvietimas')
        this.$store.commit('setStampId', stampId)
        this.$store.commit('setIsStampDialogVisible', true)
        this.$store.commit('setStampDialogMode', strings.stampDialog.mode.edit)
//        this.$store.dispatch('loadCountriesGradesTopicsFromServer')
        // Now gotta load stamp attributes from server to client
//        this.$store.dispatch('loadStampAttributesFromServer', stampId)
      },
      async initiateStampDelete (stampId) {
        console.log('@@@ initiateStampDelete(stampId) kvietimas')
        try {
          const axiosInstance = axios.create({
            baseURL: strings.baseURL
          })
          await axiosInstance.delete(strings.path.stamps + '/' + stampId)
          this.$store.commit('triggerDoesStampListNeedToReload')
          this.$store.state.snackbarColor = 'success'
          this.$store.state.snackbarMessage = 'Stamp successfully inserted/updated'
          this.$store.state.isSnackbarDisplayed = true
        }
        catch (error) {
          this.$store.state.snackbarColor = 'error'
          this.$store.state.snackbarMessage = 'Error deleting stamp'
          this.$store.state.isSnackbarDisplayed = true
        }
        finally {
        }
      }
    },
    async created () {
      try {
        this.loadStampList()
      }
      catch (error) {
      }
      finally {
      }
    },
    watch: {
      async doesStampListNeedToReload () {
        try {
          this.loadStampList()
        }
        catch (error) {
        }
        finally {
        }
      }
    }
  }
</script>

<!--<style scoped>-->
  <!--.fab-container {-->
    <!--position: fixed;-->
    <!--top: 50px;-->
    <!--//bottom: 0;-->
  <!--//right: 0;-->
    <!--left: 50%;-->
    <!--transform: translateX(-50%);-->
  <!--}-->
<!--</style>-->
