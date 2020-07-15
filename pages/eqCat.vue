<template lang="html">
  <div>
    <v-container fluid width="850">
      <v-layout  width="850"/>
        <v-img
          v-for="assetImg in eqCatAsset"
          style="position:absolute;"
          :class="assetImg.class + (isAnimated ? ' animated' : '')"
          :src="assetImg.src"
        />
      </v-layout>
      <v-btn @click="playAnimation()" class="btn-play">{{ isAnimated ? 'stop' : 'play' }}</v-btn>
    </v-container>
  </div>
</template>
<script>
import p5 from '~/static/eqCat/p5.min.js'
import '~/static/eqCat/p5.sound.min.js'
// import 'p5/lib/addons/p5.sound';

const sketch = (p5) => {
   window.myp5 = p5;

   p5.setup = () => {
     //whatever
   };

   p5.draw = draw;
}

function draw() {
  //methods hang off the instance:
  const mysound = myp5.loadSound("/path/to/sound.mp3");
  //constructors hang off the class:
  const amp = new p5.Amplitude()
}
new p5(sketch);

export default {
  data: () => ({
    isAnimated: false,
    eqCatAsset: [
      { 
        class: 'img-leftHand',
        animated: false,
        src: '/eqCat/assetLeftH.png'
      },
      { 
        class: 'img-rightHand',
        animated: false,
        src: '/eqCat/assetRightH.png'
      },
      { 
        class: 'img-leftEye',
        animated: false,
        src: '/eqCat/assetLineEye.png'
      },
      { 
        class: 'img-rightEye',
        animated: false,
        src: '/eqCat/assetLineEye.png'
      },
      { 
        class: 'img-body',
        animated: false,
        src: '/eqCat/assetBody.png'
      },
    ],
    p5Lib: null,
  }),
  // mounted() {
  //   this.p5Lib = require('~/static/eqCat/p5.min.js')
  //   this.p5Lib.setup = _ => {      
  //     this.p5Lib.createCanvas(500, 500);      
  //     this.p5Lib.ellipse(this.p5Lib.width / 2, this.p5Lib.height / 2, 500, 500);    
  //   }
  //   // this.p5Lib.load
  // },
  mounted() {
    // const script = function (p5) {
    //   window.p5 = p5;
    //   const P5Sound = require('~/static/eqCat/p5.sound.min.js');
    //   let mySound;
    //   p5.preload = _ => {
    //     // console.log(p5.FFT)
    //     console.log(p5)
    //     mySound = p5.loadSound('~/static/drumkit/hihat-close.wav');
    //   }
    //   // NOTE: Set up is here   
    //   p5.setup = _ => {      
    //     p5.createCanvas(500, 500);      
    //     // p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);
    //   }

    //   p5.canvasPressed = _ => {
    //     // playing a sound file on a user gesture
    //     // is equivalent to `userStartAudio()`
    //     mySound.play();
    //   }
    // }   
    // // // NOTE: Use p5 as an instance mode
    // const p5 = require('~/static/eqCat/p5.min.js');
    // new p5(script);
    // 
    // new P5Sound(p5);
  },
  methods: {
    playAnimation() {
      this.isAnimated = !this.isAnimated
      if (this.isAnimated) {

      }
    }
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
    animation: 200ms pulsate infinite ease-in-out;
  }
  .img-body {
    z-index: 1;
    width:70%;
    left: 15vw;
  }
  .img-rightHand {
    width: 45% !important;
    left: 55vw;
    top: 24vh;
  }
  .img-leftHand {
    width: 45% !important;
    left: 0vw;
    top: 24vh;
  }
  .img-leftEye {
    z-index: 2;
    width: 14% !important;
    left: 25vw;
    top: 32vh;
  }
  .img-rightEye {
    z-index: 2;
    width: 14% !important;
    left: 55vw;
    top: 32vh;
  }
  .btn-play {
    position: absolute;

  }
</style>