<template>
      <section class="collection">
        <div class="collection__header">
        <div class="collection__header-title">
          <span></span>
          <h2>Our Collection</h2>
        </div>

        <p class="collection__header-description">
          Specially crafted with the utmost of precision and care, our dreamy jewels are meant to make your wishes come true.
        </p>
      </div>

        <div class="collection__cards">
        <div class="collection__cards-item">
          <img src="../assets/img/shutterstock_1530727334.jpg" alt="product image" class="collection__cards-item-img">
          <div class="collection__cards-item-content">
            <h3>Diamond <sub>I</sub></h3>
            <span></span>
            <p>The shining diamonds of the bracelet sprinkle the space.</p>
          </div>
          <img src="../assets/svg/diamond.svg" alt="diamond icon" class="collection__cards-item-diamond">
        </div>

        <div class="collection__cards-item">
          <img src="../assets/img/shutterstock_1530727334.jpg" alt="product image" class="collection__cards-item-img">
          <div class="collection__cards-item-content">
            <h3>Diamond <sub>2</sub></h3>
            <span></span>
            <p>The intrinsic beauty lies in these sleek and clean earings where polished diamonds embrace the wearer and mark the shape of the face.</p>
          </div>
          <img src="../assets/svg/diamond.svg" alt="diamond icon" class="collection__cards-item-diamond">
        </div>

        <div class="collection__cards-item">
          <img src="../assets/img/shutterstock_1530727334.jpg" alt="product image" class="collection__cards-item-img">
          <div class="collection__cards-item-content">
            <h3>Diamond <sub>3</sub></h3>
            <span></span>
            <p>The sparkles of the diamonds on this powerful ring symbolize the strength of beauty.</p>
          </div>
          <img src="../assets/svg/diamond.svg" alt="diamond icon" class="collection__cards-item-diamond">
        </div>
      </div>

      <button class="collection__button">View All</button>
    </section>
</template>

<style lang="scss">
.collection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 70px 10%;

  /* Header */
  &__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-title {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: baseline;
      text-align: center;

      span {
        width: 100%;
        margin: 20px 0 10px;
        border-bottom: 2px solid $color-black;
        opacity: 0.1;
      }

      h2 {
        position: absolute;
        padding:0 30px;
        font-family: $didot;
        text-transform: uppercase;
        font-size: $section-title;
        letter-spacing: 2px;
        text-align: center;
        background: $color-white;
      }
    }

    &-description {
      margin-top: 45px;
      display: flex;
      justify-content: center;
      width: 620px;
      font-family: $poppins;
      font-size: $section-content;
      font-weight: 400;
      letter-spacing: 2px;
      text-align: center;
    }
  }

  /* Card Container */
  &__cards {
    margin: 80px 0;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 15px;

    &-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 100px 20px 50px;
      width: 30%;
      /* max-width: 380px; */
      height: 500px;
      text-align: center;
      border-radius: 2px;
      box-shadow: 3px 1px 30px -8px rgba(0,0,0,0.15);
      -webkit-box-shadow: 3px 1px 30px -8px rgba(0,0,0,0.15);
      -moz-box-shadow: 3px 1px 30px -8px rgba(0,0,0,0.15);

      &-img {
        width: 60%;
      }

      &-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 70px;
        height: 100%;

        h3 {
          font-family: $didot;
          text-transform: uppercase;
          font-size: $section-subtitle;
          letter-spacing: 2px;
        }

        span {
          width: 65%;
          margin: 30px 0 35px;
          border-bottom: 1px solid $color-black;
          opacity: 0.1;
        }

        p {
          font-family: $poppins;
          font-size: $section-content;
          font-weight: 300;
          letter-spacing: 1.5px;
        }
      }
    }
  }

  /* Button */
  &__button {
    width: 200px;
    height: 48px;
    font-family: $poppins;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: $color-white;
    border: 2px solid $color-black;
    outline: none;
    cursor: pointer;
  }
}

/* Desktop */
@media only screen and (min-width: 1920px) {
  .collection__cards-item {
    height: 600px;
  }
}
</style>