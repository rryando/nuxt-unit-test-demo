<template>
  <div style="text-align:center">
    <h2> Gacha-Cat ! </h2>
    <v-badge
      bordered
      color="error"
      :content="String(this.listOfMyCats.length)"
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
    <v-btn color="primary" class="mt-4" @click="gachaAction()" :disabled="isGachaIng">Gacha !!</v-btn>
    <v-fade-transition>
      <v-btn v-if="isFlipAnimationDone" :disabled="isSaved" transition="fade-transition" color="lime" class="mt-4" @click="saveCat()">Save</v-btn>
    </v-fade-transition>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    isFlipped: false,
    isFlipAnimationDone: false,
    isSaved: false,
    isGachaIng: false,
    gachaTitle: 'hayoo dapat apa...',
    defaultCardImg: '/cover.jpg',
    cardImg: '/cover.jpg'
  }),
  computed: {
    ...mapGetters({
      getGachaedCat: 'gachacat/getGachaedCat',
      listOfMyCats: 'gachacat/listOfMyCats'
    }),
  },
  methods: {
    ...mapActions({
      fetchRandomCat: 'gachacat/fetchRandomCat',
      saveMyCats: 'gachacat/saveMyCats'
    }),
    resetGachaState() {
      this.isFlipAnimationDone = false
      this.isFlipped = !this.isFlipped
      this.cardImg = this.defaultCardImg
      this.isGachaIng = true;
      this.isSaved = false;
      this.gachaTitle = "prok prok prok.. dapat apaaa"
    },
    setGachaResult() {
      this.gachaTitle = ` JENG JENG JENG... ${this.getGachaedCat.name}`
      this.cardImg = this.getGachaedCat.imgUrl
      this.isFlipAnimationDone = true
      this.isGachaIng = false
    },
    async gachaAction() {
      this.resetGachaState()
      await this.fetchRandomCat()
      setTimeout(() => this.setGachaResult(), 3000)
    },
    saveCat() {
      if (!this.isSaved) this.saveMyCats(this.getGachaedCat)
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