<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="isNavigationDrawerVisible"
    >
      <!--<v-btn-->
        <!--fab-->
        <!--right-->
        <!--bottom-->
        <!--:color="this.$store.state.mainColorOfTheme"-->
        <!--dark-->
        <!--fixed-->
        <!--@click.stop="isStampDialogVisible = !isStampDialogVisible"-->
      <!--&gt;-->
        <!--<v-icon>add</v-icon>-->
      <!--</v-btn>-->
      <v-list dense>
        <v-divider></v-divider>
        <v-subheader>My collection</v-subheader>
        <v-list-tile
          :to="{
                  name: 'usersUsernameStamps',
                  params: {
                    username: $store.state.userStore.usernameOfLoggedInUser
                  }
                }"
        >
          <v-list-tile-action>
            <v-icon>view_module</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My stamps</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-subheader>Other collectors</v-subheader>
        <v-list-tile
          :to="{
                  name: 'users'
                }"
        >
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              All collectors
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          :to="{
                  name: 'stamps'
                }"
        >
          <v-list-tile-action>
            <v-icon>view_module</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              All stamps
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-subheader>Information</v-subheader>
        <v-list-tile
          :to="{
                  name: 'about'
                }"
        >
          <v-list-tile-action>
            <v-icon>info_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              About
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <!--<v-list dense>-->
        <!--<template v-for="(item, i) in items">-->
          <!--<v-divider v-if="item.divider"></v-divider>-->
          <!--<v-subheader v-else-if="item.header" v-text="item.header"></v-subheader>-->
          <!--<v-list-tile v-else @click.stop="doAction(item.name)">-->
            <!--&lt;!&ndash;<v-list-tile v-else @click.stop="isNewStampDialogVisible = !isNewStampDialogVisible">&ndash;&gt;-->
            <!--<v-list-tile-action>-->
              <!--<v-icon>{{ item.icon }}</v-icon>-->
            <!--</v-list-tile-action>-->
            <!--<v-list-tile-content>-->
              <!--<v-list-tile-title>-->
                <!--{{ item.text }}-->
              <!--</v-list-tile-title>-->
            <!--</v-list-tile-content>-->
          <!--</v-list-tile>-->
        <!--</template>-->
      <!--</v-list>-->
    </v-navigation-drawer>
    <v-toolbar
      color="orange"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="isNavigationDrawerVisible = !isNavigationDrawerVisible"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Stamp Collector's IS</span>
      </v-toolbar-title>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn color="warning" fab dark>
          <v-icon>account_circle</v-icon>
        </v-btn>
      </div>
    </v-toolbar>



    <router-view></router-view>



    <v-btn
      fab
      right
      bottom
      :color="this.$store.state.mainColorOfTheme"
      dark
      fixed
      @click.stop="scrollToTop()"
    >
      <v-icon>arrow_upward</v-icon>
    </v-btn>

    <v-snackbar
      :timeout="6000"
      v-model="$store.state.isSnackbarDisplayed"
      :color="$store.state.snackbarColor"
    >
      {{ $store.state.snackbarMessage }}
      <v-btn flat color="pink" @click.native="$store.state.isSnackbarDisplayed = false">Close</v-btn>
    </v-snackbar>
    <!--<stamp-dialog-for-create-and-edit-and-view></stamp-dialog-for-create-and-edit-and-view>-->
  </v-app>
</template>

<script>
  import vv from './strings.js'
//  import StampDialogForCreateAndEditAndView from './components/stamps/StampDialogForCreateAndEditAndView.vue'
//  import StampList from './components/stamps/StampList.vue'
//  import SearchAndSort from './components/stamps/SearchAndSortPanel.vue'
//  import axios from 'axios'

  export default {
    data: () => ({
      testValue: '140test',
      isNavigationDrawerVisible: null,
      navigationDrawer: {
      },
      items: [
        { header: 'My collection' },
//        { name: vv.navigationDrawer.newStamp, icon: 'add', text: 'New stamp' },
        { name: vv.navigationDrawer.myStamps, icon: 'view_module', text: 'My stamps' },
        { divider: true },
        { header: 'Other collectors' },
        { name: vv.navigationDrawer.allCollectors, icon: 'list', text: 'All collectors', disabled: true },
        { name: vv.navigationDrawer.allStamps, icon: 'view_module', text: 'All stamps', disabled: true },
        { divider: true },
        { header: 'Information' },
        { name: vv.navigationDrawer.about, icon: 'info_outline', text: 'About' }
      ]
    }),
    methods: {
      doAction (nameOfButton) {
        if (nameOfButton === vv.navigationDrawer.newStamp) {
          this.showStampDialogForCreate()
        }
      },
      scrollToTop () {
        window.scrollTo(0, 0)
      }
//      async showStampDialogForCreate () {
//        console.log('@@@ changeNewStampDialogVisibility() kvietimas')
//        this.$store.commit('setStampId', null)
//        this.$store.commit('setIsStampDialogVisible', true)
//        this.$store.commit('setStampDialogMode', vv.stampDialog.mode.create)
//      }
    }
//    components: {
//      StampDialogForCreateAndEditAndView,
//      StampList,
//      SearchAndSort
//    }
//    props: {
//      source: String
//    }
//    created: () => {
//      window.scrollTo(0, 0)
//    },
//    mounted: () => {
//      window.scrollTo(0, 0)
//      document.body.scrollTop = document.documentElement.scrollTop = 0
//    }
  }
</script>


