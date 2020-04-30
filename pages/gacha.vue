<template>
  <div style="text-align:center">
    <h2> Gacha-Cat ! </h2>
    <v-badge
      bordered
      color="error"
      content="0"
      overlap
      dark
      top
      absolute
      right
      style="flex: 0 1;
        height: 100%;
        right: 4vw;
        position: absolute;
        top: 2vh;"
    >
      <v-btn
        key="myCat"
        color="red"
        fab
        small
        to="/mycat"
      >
        <v-icon>mdi-cat</v-icon>
      </v-btn>
    </v-badge>
    <v-card class="d-inline-block mx-auto pa-2 mt-4" :class="{'flipped': isFlipped}">
      <v-img
        height="400"
        width="400"
        :src="cardImg"
      />
    </v-card>
    <h2 class="mt-4"> {{ gachaTitle }} </h2>
    <v-btn color="primary" class="mt-4" @click="gachaAction()">Gacha !!</v-btn>
    <br />
    <v-fade-transition>
      <v-btn v-if="flipAnimationDone" :disabled="isSaved" transition="fade-transition" color="lime" class="mt-4" @click="saveCat()">Save</v-btn>
    </v-fade-transition>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    isFlipped: false,
    flipAnimationDone: false,
    isSaved: false,
    gachaTitle: 'hayoo dapat apa...',
    defaultCardImg: '/cover.jpg',
    cardImg: '/cover.jpg'
  }),
  computed: {
    ...mapGetters({
      getRandomedCat: 'gachacat/getRandomedCat'
    }),
  },
  methods: {
    ...mapActions({
      fetchRandomCat: 'gachacat/fetchRandomCat'
    }),
    resetGachaState() {
      this.flipAnimationDone = false
      this.isFlipped = !this.isFlipped
      this.cardImg = this.defaultCardImg
      this.isSaved = false;
      this.gachaTitle = "prok prok prok.. dapat apaaa"
    },
    gachaAction() {
      this.resetGachaState()
      this.fetchRandomCat()

      setTimeout(() => {  
        this.gachaTitle = ` JENG JENG JENG... ${this.getRandomedCat.breeds[0].name}`
        this.cardImg = this.getRandomedCat.url
      }, 3000);
      
      setTimeout(() => {
        this.flipAnimationDone = true
      }, 5000);
    },
    saveCat() {
      if (!this.isSaved) console.log('save action')
      this.isSaved = true
    }
  }
}
</script>
<style lang="css">
  .v-card {
    transition: transform 5s;
    transform-style: preserve-3d;
  }
  .flipped {
    transform: rotateY(3600deg);
  }
</style>