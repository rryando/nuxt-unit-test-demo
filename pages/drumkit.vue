<template lang="html">
  <div>
    <v-row>
      <v-col cols="12">
        <v-container fluid width="850">
          <v-layout  width="850"/>
            <!-- <v-chip v-for="kit in drumKitData" :class="kit.class" :key="kit.class">
              {{kit.key === ' ' ? 'space' : kit.key}}
            </v-chip> -->
            <!-- <v-chip v-for="kit in drumKitData" :class="kit.class" :key="kit.class">
              {{kit.key === ' ' ? 'space' : kit.key}}
            </v-chip> -->
            <v-menu
              v-for="kit in drumKitData" :key="kit.class"
              v-model="kit.onEdit"
              bottom
              right
              transition="scale-transition"
              origin="top left"
            >
              <template v-slot:activator="{ on }">
                <v-chip
                  pill
                  :class="kit.class + (kit.pressed ? ' animated' : '')"
                  v-on="on"
                >
                  {{kit.key === ' ' ? 'space' : kit.key}}
                </v-chip>
              </template>
              <v-card width="300">
                <v-list>
                  <v-list-item>
                    <v-list-item-content>
                      <v-text-field label="press any key to change.." maxlength="1" autofocus v-model="newKeyPress"></v-text-field>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn
                        icon
                        @click="saveNewKey(kit.class)"
                      >
                        <v-icon>mdi-check</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
            <v-img
              v-for="assetImg in drumKitImageAsset"
              style="position:absolute"
              :class="assetImg.class + activeLeftHandClass + (assetImg.pressed ? ' animated' : '')"
              :src="assetImg.src"
            />
            <!-- <v-img
              style="position:absolute"
              :class="'img-defaultRightHand' + activeRightHandClass + (defaultPressed ? ' animated' : '')"
              src="/drumkit/assetRightHand.png"
            />
            <v-img
              style="position:absolute"
              :class="'img-defaultLeftHand'"
              src="/drumkit/assetLefthand.png"
            /> -->
          </v-layout>
        </v-container>
        <audio v-for="kit in drumKitData" :key="kit.class" :data-key="kit.key" :src="kit.audio" crossOrigin="anonymous" preload="auto"></audio>
      </v-col>
    </v-row>
  </div>
</template>
<script>

export default {
  data: () => ({
    drumKitImg: '/drumkit.png',
    menu: false,
    newKeyPress: null,
    activeLeftHandClass: '',
    activeRightHandClass: '',
    defaultPressed: false,
    drumKitImageAsset: [
      { 
        class: 'img-assetCrash',
        pressed: false,
        key: 'd',
        src: '/drumkit/assetCrash.png'
      },
      { 
        class: 'img-assetHihatClose',
        pressed: false,
        key: ',',
        src: '/drumkit/assetHihatClose.png'
      },
      { 
        class: 'img-assetHiHatOpen',
        pressed: false,
        key: 'q',
        src: '/drumkit/assetHiHatOpen.png'
      },
      { 
        class: 'img-assetHitom',
        pressed: false,
        key: 'l',
        src: '/drumkit/assetHitom.png'
      },
      { 
        class: 'img-assetKick',
        pressed: false,
        key: ' ',
        src: '/drumkit/assetKick.png'
      },
      { 
        class: 'img-assetkickDrum',
        pressed: false,
        key: ' ',
        src: '/drumkit/assetkickDrum.png'
      },
      { 
        class: 'img-assetMidTom',
        pressed: false,
        key: ';',
        src: '/drumkit/assetMidTom.png'
      },
      { 
        class: 'img-assetRide',
        pressed: false,
        key: 'm',
        src: '/drumkit/assetRide.png'
      },
      { 
        class: 'img-assetSnare',
        pressed: false,
        key: 'j',
        src: '/drumkit/assetSnare.png'
      },
      { 
        class: 'img-assetSnare',
        pressed: false,
        key: 'k',
        src: '/drumkit/assetSnare.png'
      },
      {
        class: 'img-assetLowTom',
        pressed: false,
        key: "'",
        src: '/drumkit/assetLowTom.png'
      },
    ],
    drumKitData: [
      {
        class: 'hihat-close-input',
        onEdit: false,
        pressed: false,
        key: 'q',
        audio: '/drumkit/hihat-open.wav'
      },
      {
        class: 'hihat-close-input-2',
        onEdit: false,
        pressed: false,
        key: 'w',
        audio: '/drumkit/hihat-open.wav'
      },
      {
        class: 'hihat-open-input',
        onEdit: false,
        pressed: false,
        key: ',',
        audio: '/drumkit/hihat-close.wav'
      },
      {
        class: 'hihat-open-input-2',
        onEdit: false,
        pressed: false,
        key: '.',
        audio: '/drumkit/hihat-close.wav'
      },
      {
        class: 'snare-input',
        onEdit: false,
        pressed: false,
        key: 'j',
        audio: '/drumkit/snare.wav'
      },
      {
        class: 'snare-input-2',
        onEdit: false,
        pressed: false,
        key: 'k',
        audio: '/drumkit/snare.wav'
      },
      {
        class: 'crash-input',
        onEdit: false,
        pressed: false,
        key: 'd',
        audio: '/drumkit/crash.wav'
      },
      {
        class: 'high-tom-input',
        onEdit: false,
        pressed: false,
        key: 'l',
        audio: '/drumkit/tom-high.wav'
      },
      {
        class: 'mid-tom-input',
        onEdit: false,
        pressed: false,
        key: ';',
        audio: '/drumkit/tom-mid.wav'
      }, 
      {
        class: 'kick-input',
        onEdit: false,
        pressed: false,
        key: ' ',
        audio: '/drumkit/kick.wav'
      },
      {
        class: 'ride-input',
        onEdit: false,
        pressed: false,
        key: 'm',
        audio: '/drumkit/ride.wav'
      },
      {
        class: 'floor-tom-input',
        onEdit: false,
        pressed: false,
        key: "'",
        audio: '/drumkit/tom-low.wav'
      },
    ]
  }),
   mounted() {
    window.addEventListener("keypress", e => this.playSound(e.key));
  },
  destroyed() {
    window.removeEventListener("keypress", e => this.playSound(e.key));
  },
  methods: {
    playSound(keyCode) {
      const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
      const indexOfKey = this.drumKitData.findIndex(o => o.key === keyCode);
      if (audioElement) {
        // const activeDrumClass = this.drumKitData[indexOfKey].class;
        this.drumKitData[indexOfKey].pressed = true;
        this.defaultPressed = true;
        this.drumKitImageAsset.filter(({ key }) => key === keyCode).map((item) => item.pressed = true);
        audioElement.currentTime = 0;
        audioElement.play();
        setTimeout(() => {
          this.defaultPressed = false;
          this.drumKitData[indexOfKey].pressed = false;
          this.drumKitImageAsset.filter(({ key }) => key === keyCode).map((item) => item.pressed = false);
        }, 100)
      }
    },
    saveNewKey(keyClass) {
      const indexOfKey = this.drumKitData.findIndex(o => o.class === keyClass);
      const prevKey = this.drumKitData[indexOfKey].key;
      // const multipleSameImgArr = this.drumKitImageAsset.filter(x => x.key.includes(prevKey));
      // const indexOfImageKey = this.drumKitImageAsset.filter(x => x.includes("s"));
      // this.drumKitImageAsset[indexOfImageKey].key = this.newKeyPress;
      this.drumKitImageAsset.filter(({ key }) => key === prevKey).map((item) => item.key = this.newKeyPress);
      this.drumKitData[indexOfKey].key = this.newKeyPress;
      this.newKeyPress = '';
      this.drumKitData[indexOfKey].onEdit = false;
      this.drumKitData[indexOfKey].pressed = false;
    },
  }
}
</script>
<style lang="scss">
  @keyframes pulsate {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }
  .animated {
    animation: 200ms pulsate ease-in-out;
  }
  .hihat-close-input {
    top: 40vh;
    left: 4vw;
    z-index: 2;
  }
  .hihat-close-input-2 {
    top: 40vh;
    left: 5vw;
    z-index: 2;
  }
  .hihat-open-input {
    top: 56vh;
    left: 12vw;
    z-index: 2;
  }
  .hihat-open-input-2 {
    top: 56vh;
    left: 13vw;
    z-index: 2;
  }
  .snare-input {
    top: 46vh;
    z-index: 2;
    left: 15vw;
  }
  .snare-input-2 {
    top: 46vh;
    z-index: 2;
    left: 16vw;
  }
  .crash-input {
    left: 0vw;
    top: 14vh;
    z-index: 2;
  }
  .high-tom-input {
    top: 16vh;
    left: 15vw;
    z-index: 2;
  }
  .mid-tom-input {
    top: 16vh;
    left: 27vw;
    z-index: 2;
  }
  .kick-input {
    top: 41vh;
    left: 18vw;
    z-index: 2;
  }
  .ride-input {
    top: 23vh;
    left: 36vw;
    z-index: 2;
  }
  .floor-tom-input {
    top: 50vh;
    left: 26vw;
    z-index: 2;
  }
  .img-assetCrash {
    left: 13vw;
    top: 16vh;
  }
  .img-assetHihatClose {
    top: 52vh;
    left: 25vw;
  }
  .img-assetHiHatOpen {
    top: 43vh;
    left: 12vw;
  }
  .img-assetHitom {
    top: 13vh;
    left: 34vw;
    z-index: 1;
  }
  .img-assetKick {
    left: 38vw;
    top: 41vh;
  }
  .img-assetkickDrum {
    top: 5vh;
    left: 35vw;
  }
  .img-assetMidTom {
    top: 12vh;
    left: 49vw;
  }
  .img-assetRide {
    top: 16vh;
    left: 64vw;
    z-index: 1;
  }
  .img-assetSnare {
    top: 42vh;
    left: 29vw;
  }
  .img-assetLowTom {
    top: 42vh;
    left: 57vw;
    z-index: 0;
  }
  .img-defaultRightHand {
    top: 45vh;
    z-index: 1;
    left: 23vw;
    width: 31vw;
    transform: rotate(-129deg);
  }
  .img-defaultLeftHand {
    top: 54vh;
    width: 24vw;
    left: 21vw;
    transform: rotate(45deg);
  }
</style>