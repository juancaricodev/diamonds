<template>
  <section class="slider-container">
    <div class="carousel">
      <div class="carousel__slider">
        <div class="carousel__slider-section" v-for="slide in slides" :key="slide.title">
          <img
            v-if="slide.img"
            :src="slide.img"
            alt="slider image"
          />
          <img
            v-if="!slide.img"
            src="../assets/img/jewelry-carousel2.png"
            alt="slider image"
          />
          <h2>{{ slide.title }}</h2>
          <div class="hl-divider"></div>
          <p class="slider__text-content">
            {{ slide.description }}
          </p>
        </div>
      </div>

      <div class="carousel__controls">
        <button class="carousel__controls--right" @click="clickRight">
          <img src="../assets/svg/arrow.svg" alt="arrow right button">
        </button>
        <button class="carousel__controls--left" @click="clickLeft">
          <img src="../assets/svg/arrow.svg" alt="arrow left button">
        </button>

        <ul>
          <li @click="selector('first')">
            <img
              src="../assets/svg/diamond-gold.svg"
              alt="diamond icon"
              v-if="first"
            />
            <img
              src="../assets/svg/diamond.svg"
              alt="diamond icon"
              v-if="!first"
            />
          </li>
          <li @click="selector('second')">
            <img
              src="../assets/svg/diamond-gold.svg"
              alt="diamond icon"
              v-if="second"
            />
            <img
              src="../assets/svg/diamond.svg"
              alt="diamond icon"
              v-if="!second"
            />
          </li>
          <li @click="selector('third')">
            <img
              src="../assets/svg/diamond-gold.svg"
              alt="diamond icon"
              v-if="third"
            />
            <img
              src="../assets/svg/diamond.svg"
              alt="diamond icon"
              v-if="!third"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
export default {
  setup () {
    const sliderState = reactive({
      first: true,
      second: false,
      third: false
    })

    const slides = ref([
      {
        title: 'Diamonds 1',
        description: 'Diamonds are the brightest stars and only the sky is the limit when it comes to achieving our jewels.',
        img: 'https://res.cloudinary.com/dncmrxklt/image/upload/v1611317451/jewelry-carousel_yqqeha.jpg'
      },
      {
        title: 'Diamonds 2',
        description: 'You see a glimmer of light at the end of the darkness. Is a small lake of water with a waterfall. Lake of diamonds',
        img: 'https://res.cloudinary.com/dncmrxklt/image/upload/v1611317460/jewelry-carousel2_t9plag.png'
      },
      {
        title: 'Diamonds 3',
        description: 'We may share our diamonds with one soul, or we may find a few who we trust with our jewels',
        img: 'https://res.cloudinary.com/dncmrxklt/image/upload/v1611317616/diamonds-003_wxxoia.jpg'
      }
    ])

    let sectionIndex = 0

    function selector (index) {
      const section = document.querySelector('.carousel__slider')

      if (index === 'first') {
        sliderState.first = true
        sliderState.second = false
        sliderState.third = false
        document.querySelector('.carousel__slider').style.transform = 'translate(' + (0) * -33.33 + '%)'
        sectionIndex = 0

        section.classList.add('fade')
        setTimeout(() => { section.classList.remove('fade') }, 300)
      } else if (index === 'second') {
        sliderState.first = false
        sliderState.second = true
        sliderState.third = false
        document.querySelector('.carousel__slider').style.transform = 'translate(' + (1) * -33.33 + '%)'
        sectionIndex = 1

        section.classList.add('fade')
        setTimeout(() => { section.classList.remove('fade') }, 300)
      } else if (index === 'third') {
        sliderState.first = false
        sliderState.second = false
        sliderState.third = true
        document.querySelector('.carousel__slider').style.transform = 'translate(' + (2) * -33.33 + '%)'
        sectionIndex = 2

        section.classList.add('fade')
        setTimeout(() => { section.classList.remove('fade') }, 300)
      }
    }

    function clickRight () {
      sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2
      document.querySelector('.carousel__slider').style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)'

      if (sectionIndex === 0) {
        selector('first')
      } else if (sectionIndex === 1) {
        selector('second')
      } else if (sectionIndex === 2) {
        selector('third')
      }
    }

    function clickLeft () {
      sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0
      document.querySelector('.carousel__slider').style.transform = 'translate(' + (sectionIndex) * -33.33 + '%)'

      if (sectionIndex === 0) {
        selector('first')
      } else if (sectionIndex === 1) {
        selector('second')
      } else if (sectionIndex === 2) {
        selector('third')
      }
    }

    return {
      ...toRefs(sliderState),
      slides,
      selector,
      clickRight,
      clickLeft
    }
  }
}
</script>

<style lang="scss">
.fade {
  filter: brightness(0.1);
}

.slider-container {
  width: 100%;
  margin:20px auto;

  /* Carousel */
  .carousel {
    position: relative;
    height: 700px;
    overflow: hidden;

    &__slider {
      display: flex;
      height: 100%;
      width: 300%;
      transition: all 0.7s;

      &-section {
        width: 100vw;
        flex-basis: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
        gap: 30px;
        color: $color-white;
        transition: opacity 0.4s ease-in-out;

        img {
          position: absolute;
          width: 100vw;
          height: 100%;
          z-index: -1;
          filter: brightness(0.25);
        }

        h2 {
          font-family: $didot;
          text-transform: uppercase;
          font-size: $section-title;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .hl-divider {
          width: 250px;
          border-bottom: solid $color-white 1px;
        }

        p {
          width: 340px;
          font-family: $poppins;
          font-size: $section-content;
          font-weight: 300;
          letter-spacing: 2px;
          text-align: center;
        }
      }
    }

    &__controls {
      /* Button */
      button {
        position: absolute;
        top: 45%;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        img {
          width: 27px;
          transition: 0.3s;

          &:hover { width: 29px; }
        }
      }

      &--right { right: 10%; }

      &--left {
        left: 10%;
        transform: scaleX(-1);
      }

      ul {
        position: absolute;
        left: 50%;
        bottom: 30px;
        display: flex;
        gap: 17px;
        margin: 0;
        padding: 0;
        list-style: none;
        transform: translate(-50%);

        li {
          cursor: pointer;

          img { width: 16px; }
        }
      }
    }
  }
}
</style>
