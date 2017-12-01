<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="isNavigationDrawerVisible"
    >
      <v-btn
        fab
        right
        bottom
        color="orange"
        dark
        fixed
        @click.stop="isNewStampDialogVisible = !isNewStampDialogVisible"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-divider v-if="item.divider"></v-divider>
          <v-subheader v-else-if="item.header" v-text="item.header"></v-subheader>
          <v-list-tile v-else @click.stop="doAction(item.name)">
          <!--<v-list-tile v-else @click.stop="isNewStampDialogVisible = !isNewStampDialogVisible">-->
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
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
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-tooltip right>
            <v-btn icon large :href="source" target="_blank" slot="activator">
              <v-icon large>code</v-icon>
            </v-btn>
            <span>Source</span>
          </v-tooltip>
        </v-layout>
      </v-container>
    </v-content>
    <v-dialog v-model="isNewStampDialogVisible" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Create contact
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                prepend-icon="business"
                placeholder="Company"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="Job title"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="isNewStampDialogVisible = false">Cancel</v-btn>
          <v-btn flat @click="isNewStampDialogVisible = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  import vv from './variables.js'

  export default {
    data: () => ({
      testValue: '140test',
      isNewStampDialogVisible: false,
      isNavigationDrawerVisible: null,
      items: [
        { header: 'My collection' },
        { name: vv.navigationDrawer.myStamps, icon: 'view_module', text: 'My stamps' },
        { name: vv.navigationDrawer.newStamp, icon: 'add', text: 'New stamp' },
        { divider: true },
        { header: 'Other collectors' },
        { name: vv.navigationDrawer.allCollectors, icon: 'list', text: 'All collectors' },
        { name: vv.navigationDrawer.allStamps, icon: 'view_module', text: 'All stamps' }
//        {
//          icon: 'keyboard_arrow_up',
//          'icon-alt': 'keyboard_arrow_down',
//          text: 'Labels',
//          model: true,
//          children: [
//            { icon: 'add', text: 'Create label' }
//          ]
//        },
//        {
//          icon: 'keyboard_arrow_up',
//          'icon-alt': 'keyboard_arrow_down',
//          text: 'More',
//          model: false,
//          children: [
//            { text: 'Import' },
//            { text: 'Export' }
//          ]
//        },
//        { icon: 'settings', text: 'Settings' }
      ]
    }),
    methods: {
      doAction (nameOfButton) {
        if (nameOfButton === vv.navigationDrawer.newStamp) {
          this.changeNewStampDialogVisibility()
        }
      },
      changeNewStampDialogVisibility () {
        console.log(this.testValue)
        this.isNewStampDialogVisible = !this.isNewStampDialogVisible
      }
    },
    props: {
      source: String
    }
  }
</script>
