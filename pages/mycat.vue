<template>
  <div style="text-align:center">
    <h2> My-Cat ! </h2>
    <v-btn
      key="back"
      color="red"
      fab
      small
      dark
      top
      absolute
      left
      to="/gacha"
      class="mt-10"
    >
      <v-icon>mdi-arrow-left-thick</v-icon>
    </v-btn>

    <v-row>
      <v-col cols="12">
          <v-container fluid>
            <v-row>
              <v-col
                v-for="n in 20"
                :key="n"
                class="d-flex child-flex"
                cols="4"
              >
                <v-card flat tile class="d-flex" @click="showInfoPopup()">
                  <v-img
                    :src="currentInfo.imgUrl"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
      </v-col>
    </v-row>
    <v-dialog
      v-model="showInfo"
      width="400"
    >
      <v-card style="text-align:center" class="pa-4">
        <v-img
          height="400"
          width="400"
          contain
          :src="currentInfo.imgUrl"  
          class="mb-4"
        />
        <h3>{{currentInfo.name}}</h3>
        <v-card-text>{{currentInfo.description}}</v-card-text>
        <v-simple-table height="300px">
          <template v-slot:default>
            <!-- <thead>
              <tr v-for="(item, key, index) in currentInfo.status" :key="key+index">
                <th class="text-left">{{key}}</th>
              </tr>
            </thead> -->
            <tbody>
              <tr v-for="(item, key, index) in currentInfo.status" :key="item+index">
                <td>{{ key }}</td>
                <td>{{ item }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            block
            @click="showInfo = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    showInfo: false,
    defaultCurrentInfo: {
      imgUrl: '/cover.jpg',
      description: "",
      name: "",
      status: {
        'Adaptability': 0,
        'Affection Level': 0,
        'Social Needs': 0,
        'Stanger Friendly': 0,
        'Rarity': 0
      },
    },
    currentInfo: {}
  }),
  mounted() {
    this.resetCurrentInfo()
  },
  methods: {
    resetCurrentInfo() {
      this.currentInfo = this.defaultCurrentInfo
    },
    showInfoPopup() {
      this.resetCurrentInfo()
      this.showInfo = true
      console.log('show')
    }
  }
}
</script>