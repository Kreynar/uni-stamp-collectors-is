<template>

  <!--<v-content>-->

  <v-container fluid grid-list-xl class="grey lighten-4">
    <v-layout row wrap>

      <v-flex xs12>
        <v-card>
          <!--<v-card-media-->
            <!--src="../assets/vuLogo.jpg"-->
            <!--height="300px"-->
          <!--&gt;</v-card-media>-->
          <v-card-media
            :src="require('../assets/vuLogo.jpg')"
            height="500px"
            contain
          ></v-card-media>
          <!--<v-layout justify-center>-->

            <!--<v-card-title class="text-xs-center">-->
            <v-card-title primary-title>
              <!--<div class="text-xs-center" style="font-size:150%">-->
              <!--<div style="font-size:150%">-->
                <!--Hello, dear visitor! <br>-->
                <!--This Stamp Collector's website has been made for my bachelor's work in the 4th course of IT studies.<br>-->
                <!--It's built with Vue 2, Node.js and PosgtreSQL.<br>-->
                <!-- -Martynas Gircys-->
              <!--</div>-->
              <div style="font-size:120%">
                <h3>Hello, dear visitor! </h3><br>
                <!--Hello, dear visitor! <br>-->
                This Stamp Collector's website has been made for my bachelor's work in the 4th course of IT studies.
                It's built with Vuetify, Vue 2, Node.js and PosgtreSQL.<br>
                <br>
                -Martynas Gircys
                <br>
                <v-layout row wrap>
                  <v-flex xs12 sm6 md3 text-xs-center>
                    <v-flex xs12>
                      <a href="https://nodejs.org/en/">
                        <img
                          style="max-width:150px; max-height:150px"
                          alt="Node.js"
                          src="data:image/png;base64,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"
                        >
                      </a>
                    </v-flex>
                    <v-flex xs12 >
                      Node.js
                    </v-flex>
                  </v-flex>
                  <v-flex xs12 sm6 md3 text-xs-center>
                    <v-flex xs12>
                      <a href="https://vuetifyjs.com/">
                        <img
                          style="max-width:150px; max-height:150px"
                          alt="Vuetify"
                          src="data:image/png;base64,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"
                        >
                      </a>
                    </v-flex>
                    <v-flex xs12 >
                      Vuetify
                    </v-flex>
                  </v-flex>
                  <v-flex xs12 sm6 md3 text-xs-center>
                    <v-flex xs12>
                      <a href="https://www.postgresql.org">
                        <img
                          style="max-width:150px; max-height:150px"
                          alt="PostgreSQL"
                          src="data:image/png;base64,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"
                        >
                      </a>
                    </v-flex>
                    <v-flex xs12 >
                      PostgreSQL
                    </v-flex>
                  </v-flex>
                  <v-flex xs12 sm6 md3 text-xs-center>
                    <v-flex xs12>
                      <a href="https://vuejs.org">
                        <img
                          style="max-width:150px; max-height:150px"
                          alt="Vue 2"
                          src="data:image/png;base64,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"
                        >
                      </a>
                    </v-flex>
                    <v-flex xs12 >
                      Vue 2
                    </v-flex>
                  </v-flex>
                </v-layout>

              </div>
            </v-card-title>

            <!--<v-card-title primary-title>-->
              <!--<div>-->
                <!--<h3 class="headline mb-0">Kangaroo Valley Safari</h3>-->
                <!--<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>-->
              <!--</div>-->
            <!--</v-card-title>-->

          <!--</v-layout>-->
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>

  <!--</v-content>-->

</template>

<script>
//  import
//
//  export default {
//    data () {
//      return {
//        property: 'Blank'
//      }
//    }
//  }
</script>
