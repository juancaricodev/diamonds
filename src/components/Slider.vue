<template>
  <section class="slider-container">

    <div class="carousel">

      <div class="carousel__slider">

        <div class="carousel__slider-section">
          <img src="../assets/img/jewelry-carousel.jpg" alt="slider image">
          <h2>Diamonds 1</h2>
          <div class="hl-divider"></div>
          <p class="slider__text-content">
            Diamonds are the brightest stars and only the sky is the limit when it comes to achieving our jewels.
          </p>
        </div>

        <div class="carousel__slider-section">
          <img src="../assets/img/jewelry-carousel2.png" alt="slider image">
          <h2>Diamonds 2</h2>
          <div class="hl-divider"></div>
          <p class="slider__text-content">
            Diamonds are the brightest stars and only the sky is the limit when it comes to achieving our jewels.
          </p>
        </div>

        <div class="carousel__slider-section">
          <img src="../assets/img/jewelry-carousel.jpg" alt="slider image">
          <h2>Diamonds 3</h2>
          <div class="hl-divider"></div>
          <p class="slider__text-content">
            Diamonds are the brightest stars and only the sky is the limit when it comes to achieving our jewels.
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
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    const sliderState = reactive({
      first: true,
      second: false,
      third: false
    })

    let sectionIndex = 0

    function selector (index) {
      if (index === 'first') {
        sliderState.first = true
        sliderState.second = false
        sliderState.third = false
        document.querySelector('.carousel__slider').style.transform = 'translate(' + (0) * -33.33 + '%)'
        sectionIndex = 0
      } else if (index === 'second') {
        sliderState.first = false
        sliderState.second = true
        sliderState.third = false
        document.querySelector('.carousel__slider').style.transform = 'translate(' + (1) * -33.33 + '%)'
        sectionIndex = 1
      } else if (index === 'third') {
        sliderState.first = false
        sliderState.second = false
        sliderState.third = true
        document.querySelector('.carousel__slider').style.transform = 'translate(' + (2) * -33.33 + '%)'
        sectionIndex = 2
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
      selector,
      clickRight,
      clickLeft
    }
  }
}
</script>

<style lang="scss">
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
