<template>
  <section class="slider-container">

    <div class="carousel">

      <div class="carousel__slider">

        <section>
          <h2>Diamonds 1</h2>
          <div class="hl-divider"></div>
          <p class="slider__text-content">
            Diamonds are the brightest stars and only the sky is the limit when it comes to achieving our jewels.
          </p>
        </section>

        <section>
          <h2>Diamonds 2</h2>
          <!-- <div class="slider__text-hl"></div>
          <p class="slider__text-content">
            Diamonds are the brightest stars and only the sky is the limit when it comes to achieving our jewels.
          </p> -->
        </section>

        <section>
          <h2>Diamonds 3</h2>
          <!-- <div class="slider__text-hl"></div>
          <p class="slider__text-content">
            Diamonds are the brightest stars and only the sky is the limit when it comes to achieving our jewels.
          </p> -->
        </section>

      </div>

      <div class="carousel__controls">
        <button class="carousel__controls--right"><img src="../assets/svg/arrow.svg" alt="arrow right button"></button>
        <button class="carousel__controls--left"><img src="../assets/svg/arrow.svg" alt="arrow left button"></button>
      </div>

    </div>

    <!-- <div class="slider__selector">
      <div class="slider__selector-group">
        <img
          src="../assets/svg/diamond.svg"
          alt="diamond icon"
          :style="{ 'diamond-active': first === false }"
        />
        <img
          src="../assets/svg/diamond-gold.svg"
          alt="diamond icon"
          :style="{ 'diamond-active': first === true }"
        />
      </div>

      <div class="slider__selector-group">
        <img
          src="../assets/svg/diamond.svg"
          alt="diamond icon"
          :style="{ 'diamond-active': second === false }"
        />
        <img
          src="../assets/svg/diamond-gold.svg"
          alt="diamond icon"
          :style="{ 'diamond-active': second === true }"
        />
      </div>

      <div class="slider__selector-group">
        <img
          src="../assets/svg/diamond.svg"
          alt="diamond icon"
          :style="{ 'diamond-active': third === false }"
        />
        <img
          src="../assets/svg/diamond-gold.svg"
          alt="diamond icon"
          :style="{ 'diamond-active': third === true }"
        />
      </div>
    </div> -->
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

    return {
      ...toRefs(sliderState)
    }
  }
}
</script>

<style lang="scss">
.slider-container {
  width: 100%;
  margin:20px auto;

  /* Background Image
  &__img {
    position: relative;
    grid-column: 1 / span 3;
    width: 100%;
    filter: brightness(0.3);
  } */

  /* Carousel */
  .carousel {
    /* border: 2px solid #416be4; */
    position: relative;
    height: 400px;
    overflow: hidden;
    /* border-radius: 5px; */
    background: #000;
    /* box-shadow: 0 0 4px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1); */

    &__slider {
      display: flex;
      height: 100%;
      width: 300%;

      section {
        flex-basis: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: flex;
        gap: 30px;
        color: $color-white;

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
    }
  }

  /* Diamond Selector */
  &__selector {
    position: absolute;
    left: 50%;
    right: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &-group {
      display: flex;
      /* justify-content: center; */
      /* align-items: center; */
      gap: 30px;

      img {
        visibility: hidden;
      }
    }
  }
}

/* Desktop */
@media only screen and (max-width: 1024px) {
  .slider__text {
    top: 25%;
  }
  .slider__btn {
    top: 35%
  }
}
</style>
