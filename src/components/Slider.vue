<template>
  <section class="slider">
    <img class="slider__img" src="../assets/img/jewelry-carousel.jpg" alt="slider image">
    <!-- <img class="slider__img" src="../assets/img/jewelry-carousel2.png" alt="slider image">
    <img class="slider__img" src="../assets/img/jewelry-carousel.jpg" alt="slider image"> -->

    <div class="slider-position">
      <div class="slider__text">
        <h2 class="slider__text-title">Diamonds</h2>

        <div class="slider__text-hl"></div>

        <p class="slider__text-content">
          Diamonds are the brightest stars and only the sky is the limit when it comes to achieving our jewels.
        </p>
      </div>
    </div>

    <button class="slider__btn slider__btn--right"><img src="../assets/svg/arrow.svg" alt="arrow right button"></button>
    <button class="slider__btn slider__btn--left"><img src="../assets/svg/arrow.svg" alt="arrow left button"></button>
  </section>
</template>

<style lang="scss">
.slider {
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 1fr;

  /* Background Image */
  &__img {
    position: relative;
    grid-column: 1 / span 3;
    width: 100%;
    filter: brightness(0.3);
  }

  &-position {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Text */
  &__text {
    position: absolute;
    top: 35%;
    grid-column: 2;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    gap: 30px;
    color: $color-white;
    opacity: 0.9;

    &-title {
      font-family: 'Didot', serif;
      text-transform: uppercase;
      font-size: $section-title;
      font-weight: 500;
      letter-spacing: 2px;
    }

    &-hl {
      width: 250px;
      border-bottom: solid $color-white 1px;
    }

    &-content {
      font-family: 'Poppins', sans-serif;
      font-size: $section-content;
      font-weight: 300;
      letter-spacing: 2px;
      text-align: center;
    }
  }

  /* Button */
  &__btn {
    position: absolute;
    top: 45%;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    img {
      width: 27px;
    }

    &--right {
      right: 10%;
      grid-column: 3;
      grid-row: 1;
    }

    &--left {
      left: 10%;
      grid-column: 1;
      grid-row: 1;
      transform: scaleX(-1);
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
