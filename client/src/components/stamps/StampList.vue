<template>
  <v-content style="padding-top: 1px;">
    <v-container fluid grid-list-xl class="grey lighten-4">
      <v-layout row wrap>
        <v-btn
          v-if="$route.params.username === $store.state.userStore.usernameOfLoggedInUser"
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

    <div style="text-align: center; height:50px" class="grey lighten-4">
      <v-progress-circular v-if="$store.state.isSomethingLoading" indeterminate :size="50" v-bind:width="7" color="orange"></v-progress-circular>
    </div>
    <!--<Loading v-if="$store.state.isSomethingLoading"></Loading>-->

    <v-container fluid grid-list-xl class="grey lighten-4">
      <v-layout row wrap>

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
                height="200px"
                contain
                @click="showStampDialogForView(stamp.id)"
              ></v-card-media>
              <!--<v-layout-->
                <!--justify-center-->
                <!--@click="showStampDialogForView(stamp.id)"-->
              <!--&gt;-->
                <!--<v-card-title class="text-xs-center">-->
              <v-layout
                justify-center

              >
                <v-card-title class="text-xs-center" >
                  <!--<div class="text-xs-center" style="font-size:130%" @click="showStampDialogForView(stamp.id)">-->
                  <div class="text-xs-center" style="font-size:100%">
                    <div class="text-xs-center" style="font-size:130%; padding-bottom:0" @click="showStampDialogForView(stamp.id)">
                      <span style="font-weight: bold;">{{ stamp.year }}, {{ stamp.country }}, {{ stamp.nominalValue }}</span><br>
                      <span :style="'color:' + getGradeColor(stamp.grade)">{{ stamp.grade }}</span>
                      <br>
                      <span>{{ stamp.isCancelled | getIsCancelledDisplay }}</span>
                      <v-icon v-if="stamp.isCancelled" small style="font-size:80%">not_interested</v-icon><br>
                      <!--<span>{{ stamp.arrayOfTopics }}</span>-->
                      <span v-for="topic in stamp.arrayOfTopics">
                        <v-chip><strong>{{ topic }}</strong></v-chip>
                      </span>
                    </div>

                    <div class="text-xs-center">
                      <v-btn
                        round
                        outline
                        replace
                        :to="{
                                name: 'usersUsernameStamps',
                                params: {
                                  username: stamp.username
                                }
                              }"
                      >
                        {{ stamp.username }}
                      </v-btn>
                    </div>
                  </div>
                </v-card-title>
              </v-layout>
              <v-card-actions v-if="stamp.username === $store.state.userStore.usernameOfLoggedInUser">
                <v-menu bottom offset-y>
                  <v-btn flat icon color="black" slot="activator"><v-icon>clear</v-icon></v-btn>
                  <v-list>
                    <v-list-tile @click="initiateStampDelete(stamp.id)">
                      <v-list-tile-title>Confirm delete</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
                <v-spacer></v-spacer>
                <v-btn flat icon color="black" @click="showStampDialogForEdit(stamp.id)">
                  <v-icon>create</v-icon>
                </v-btn>
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
      getGradeColor (grade) {
        let color = '#ff6f00'
        switch (grade) {
          case '100 - Superb Gem':
            color = '#ff6f00'
            break
          case '98 - Superb':
            color = '#ff8f00'
            break
          case '95 - XF-Superb':
            color = '#ffa000'
            break
          case '90 - Extremely Fine (XF)':
            color = '#ffb300'
            break
          case '85 - VF-XF':
            color = '#ffc107'
            break
          case '80 - Very Fine (VF)':
            color = '#ffca28'
            break
          default:
            color = '#ffd54f'
            break
        }
        return color
      },
      async loadStampList (route) {
        console.log('@@@ async loadStampList (route) route', route)
//        console.log('@@@ async loadStampList (route) route.params', route.params)
//        console.log('@@@ async loadStampList (route) route.query', route.query)
//        console.log('@@@ async loadStampList (route) route.path', route.path)
//        console.log('@@@ async loadStampList (route) route.fullPath', route.fullPath)
//    const arrayOfStamps = await getArrayOfStampsFromServer()
//        const serverResponse = await axios.create({
//          baseURL: strings.baseURL
//        }).get(strings.path.stamps)
//        const arrayOfStamps = serverResponse.data
//        this.$store.commit('setArrayOfStamps', arrayOfStamps)
        this.$store.state.isSomethingLoading = true
        await this.$store.dispatch('loadArrayOfStampsFromServer', route.fullPath)
        setTimeout(() => {
          this.$store.state.isSomethingLoading = false
        }, 1000)

//        /*
//         * Also (for now - only for SearchAndSortPanel needs) load topics, grades and countries.
//         * User topic list is added with new values frequently, so refresh it everytime.
//         * Countries and grades are only edited by website admins very rarely, so no need to refresh every time.
//         */
//        this.$store.dispatch('loadTopicsFromServer')
//        if (this.$store.state.stampStore.arrayOfGradesIdsAndNames.length === 0) {
//          this.$store.dispatch('loadGradesFromServer')
//        }
//        if (this.$store.state.stampStore.arrayOfCountriesIdsAndNames.length === 0) {
//          this.$store.dispatch('loadCountriesFromServer')
//        }
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
        this.loadStampList(this.$route)
      }
      catch (error) {
      }
      finally {
      }
    },
    watch: {
      async doesStampListNeedToReload () {
        try {
          this.loadStampList(this.$route)
        }
        catch (error) {
        }
        finally {
        }
      },
      '$route' (to, from) {
        try {
          this.loadStampList(this.$route)
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
