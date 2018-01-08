<template>
  <!--<v-content style="padding-top: 1px;">-->

    <v-container fluid grid-list-xl class="grey lighten-4">
      <v-layout row wrap>

        <template v-for="(user, index) in $store.state.userStore.arrayOfUsers">
          <v-flex
            :key="user.id"
            xs12
            sm6
            md4
            lg3
            xl2
          >
            <v-card>
              <v-card-media
                :src="user.temporaryPictureUrl"
                height="200px"
                contain
                @click="showUserDialogForView(user.id)"
              ></v-card-media>
              <v-layout
                justify-center
                @click="showUserDialogForView(user.id)"
              >
                <v-card-title class="text-xs-center">
                  <div class="text-xs-center" style="font-size:130%">
                    <!--<div v-if="user.rating">-->
                      <!--<span v-for="index in user.rating">-->
                        <!--<v-icon small style="font-size:50%">star_rate</v-icon>-->
                      <!--</span>-->
                    <!--</div>-->
                    <!--<v-icon v-for="index in user.rating" small style="font-size:50%" :key="user.id">star_rate</v-icon>-->
                    <v-btn flat icon :color="getColor(user.rating)">
                      <v-icon v-for="index in user.rating" :key="index" style="font-size:120%">star</v-icon>
                      <!--<v-icon>star</v-icon>-->
                      <!--<v-icon>star</v-icon>-->
                      <!--<v-icon>star</v-icon>-->
                      <!--<v-icon>star</v-icon>-->
                      <!--<v-icon>star</v-icon>-->
                    </v-btn>
                    <br>
                    <span style="font-weight: bold;">{{ user.username }}</span><br>
                    <!--<span>{{ stamp.country }}</span><br>-->
                    <!--<span>{{ stamp.nominalValue }}</span><br>-->
                    <span v-if="user.isEmailDisplayed" style="">{{ user.emailAddress }}</span><br/>
                    <v-btn
                      round
                      :color="$store.state.mainColorOfTheme"
                      dark
                      block
                      :to="{
                              name: 'usersUsernameStamps',
                              params: {
                                username: user.username
                              }
                            }"
                    >
                      {{ user.stampCount }} stamps
                    </v-btn>
                    <br>
                    <span style="font-style: italic">Last seen: {{ user.lastSeenAt }}</span>
                  </div>
                </v-card-title>
              </v-layout>
            </v-card>
          </v-flex>
        </template>
      </v-layout>
    </v-container>

  <!--</v-content>-->

</template>

<script>
  export default {
    data: () => ({}),
    computed: {
    },
    methods: {
      async loadUserList () {
        this.$store.dispatch('loadArrayOfUsersFromServer')
      },
      showUserDialogForView () {
        /*
         * Not done yet.
         */
      },
      getColor (rating) {
        let color = 'yellow darken-4'
        switch (rating) {
          case 10:
          case 9:
            color = 'yellow darken-4'
            break
          case 8:
          case 7:
            color = 'yellow darken-3'
            break
          case 6:
          case 5:
            color = 'yellow darken-2'
            break
          case 4:
          case 3:
          case 2:
          case 1:
            color = 'yellow darken-1'
            break
        }
        return color
      }
    },
    async created () {
      try {
        this.loadUserList()
      }
      catch (error) {
      }
      finally {
      }
    },
    watch: {
      async doesUserListNeedToReload () {
        try {
          this.loadUserList()
        }
        catch (error) {
        }
        finally {
        }
      }
    }
  }
</script>
