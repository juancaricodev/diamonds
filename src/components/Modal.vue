<template>
  <section class="modal">
    <slot></slot>
    <div class="modal-container">
      <div class="modal-container__header">
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, architecto doloribus.</p>
      </div>

      <form action="" class="modal-container__form">
        <input type="text" name="name" id="name" placeholder="Name">
        <input type="text" name="email" id="name" placeholder="Email">
        <textarea name="message" id="message" cols="30" rows="8" placeholder="Your message here."></textarea>
      </form>
    </div>

    <button type="submit" class="modal__submit">send</button>
  </section>
</template>

<style lang="scss">
$width-container: 440px;

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: $color-black, $alpha: 0.9);
  z-index: 10;

  &-close {
    width: calc(#{$width-container} + 60px);
    margin-bottom: 20px;
    color: white;
    font-family: $poppins;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;

    &:hover { text-shadow: 0 0 3px rgba($color: $color-white, $alpha: 1); }
  }

  &-container {
    padding: 50px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: $width-container;
    height: 60%;
    color: $color-black;
    background-color: $color-white;
    border-radius: 1px;
    opacity: 1;

    &__header {
      display: flex;
      flex-direction: column;
      text-align: center;

      h1 {
        margin-bottom: 30px;
        font-family: $didot;
        font-size: $section-title;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      p {
        margin-bottom: 40px;
        font-family: $poppins;
        font-size: $section-content;
        font-weight: 400;
        letter-spacing: 1px;
      }
    }

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      height: 100%;

      input {
        padding: 0 15px;
        height: 40px;
        border-color: rgba($color: $color-black, $alpha: 0.2);
        font-family: $poppins;
        font-size: $section-medium;
        font-weight: 500;

        &:focus {
          outline-color: rgba($color: $color-gold, $alpha: 0.7);
        }
      }

      textarea {
        height: 10em;
        padding: 15px;
        border-color: rgba($color: $color-black, $alpha: 0.2);
        border-width: 2px;
        font-family: $poppins;
        font-size: $section-medium;
        font-weight: 500;

        &:focus {
          outline-color: rgba($color: $color-gold, $alpha: 0.7);
        }
      }
    }
  }

  &__submit {
    margin-top: 20px;
    @include button($color-gold, $color-gold, $color-black);
  }
}

@media only screen and (max-height: 768px) {
  .modal-container__form textarea { height: 8em; }
}

@media only screen and (min-height: 1024px) {
  .modal-container__form textarea { height: 14em; }
}
</style>
