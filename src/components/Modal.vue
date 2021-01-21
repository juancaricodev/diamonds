<template>
  <section class="modal">
    <slot></slot>
    <div class="modal-container">
      <h1>Modal</h1>
    </div>
  </section>
</template>

<style lang="scss">
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
  background-color: rgba($color: #000000, $alpha: 0.7);
  z-index: 10;

  &-close {
    display: flex;
    justify-content: flex-start;
    color: white;
    text-transform: uppercase;
    text-align: start;
    margin-bottom: 20px;
    cursor: pointer;
  }

  &-container {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 50%;
    color: $color-black;
    background-color: $color-white;
    opacity: 1;
  }
}
</style>
