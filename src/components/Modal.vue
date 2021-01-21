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
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message here."></textarea>
      </form>
    </div>

    <button type="submit" class="modal__submit">send</button>
  </section>
</template>

<style lang="scss">
$width-container: 600px;

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
  background-color: rgba($color: #000000, $alpha: 0.9);
  z-index: 10;

  &-close {
    width: $width-container;
    margin-bottom: 20px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
  }

  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: $width-container;
    height: 70%;
    color: $color-black;
    background-color: $color-white;
    opacity: 1;

    &__header {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    &__form {
      display: flex;
      flex-direction: column;
    }
  }

  &__submit {
    margin-top: 20px;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>
