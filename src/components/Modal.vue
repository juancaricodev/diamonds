<template>
  <section class="modal">
    <slot></slot>
    <div class="modal-container">
      <div class="modal-container__header">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, architecto doloribus.
        </p>
      </div>

      <form action="" class="modal-container__form">
        <p class="modal-container__form-group">
          <label v-if="nameError">This field is required.</label>
          <input
            type="text"
            name="name"
            v-model="name"
            placeholder="Name"
          />
        </p>

        <p class="modal-container__form-group">
          <label v-if="emailError">This field is required.</label>
          <label v-if="emailInvalid">This email address is invalid.</label>
          <input
            type="text"
            name="email"
            v-model="email"
            placeholder="Email"
          />
        </p>

        <p class="modal-container__form-group">
          <label v-if="messageError">This field is required.</label>
          <textarea
            name="message"
            v-model="message"
            cols="30"
            rows="8"
            placeholder="Your message here."
          ></textarea>
        </p>

        <p class="modal-container__form-server-error" v-if="submitError">
          Unexpected server error ...
        </p>
      </form>
    </div>

    <button type="submit" class="modal__submit" @click="checkForm">send</button>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const formState = reactive({
      name: null,
      email: null,
      message: null,

      nameError: false,
      emailError: false,
      emailInvalid: false,
      messageError: false,

      submitError: false
    })

    function checkForm (e) {
      e.preventDefault()

      !formState.name
        ? formState.nameError = true
        : formState.nameError = false

      !formState.email
        ? formState.emailError = true
        : formState.emailError = false

      validEmail(formState.email)

      !formState.message
        ? formState.messageError = true
        : formState.messageError = false

      submitForm()
    }

    function submitForm () {
      if (
        formState.nameError ||
        formState.emailError ||
        formState.emailInvalid ||
        formState.messageError
      ) {
        console.warn('Form not submited')
        formState.submitError = false
      } else {
        console.info('Form submited')
        formState.submitError = true
      }
    }

    function validEmail (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      re.test(email)
        ? formState.emailInvalid = false
        : formState.emailInvalid = true
    }

    return {
      ...toRefs(formState),
      checkForm,
      validEmail,
      submitForm
    }
  }
}
</script>

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

      &-group {
        display: flex;
        flex-direction: column;

        label {
          font-family: $poppins;
          font-size: $section-content;
          font-weight: 400;
          color: $color-red;
        }

        input {
          padding: 0 15px;
          height: 40px;
          border-color: rgba($color: $color-black, $alpha: 0.2);
          font-family: $poppins;
          font-size: $section-medium;
          font-weight: 500;

          &:focus { outline-color: rgba($color: $color-gold, $alpha: 0.7); }
        }

        textarea {
          height: 10em;
          padding: 15px;
          border-color: rgba($color: $color-black, $alpha: 0.2);
          border-width: 2px;
          font-family: $poppins;
          font-size: $section-medium;
          font-weight: 500;

          &:focus { outline-color: rgba($color: $color-gold, $alpha: 0.7); }
        }
      }

      &-server-error {
        margin: 20px 0;
        font-family: $poppins;
        font-size: $section-medium;
        font-weight: 600;
        color: $color-red;
        font-style: italic;
        text-align: center;
      }
    }
  }

  &__submit {
    margin-top: 20px;
    @include button($color-gold, $color-gold, $color-black);
  }
}

@media only screen and (max-height: 768px) {
  .modal-container__form textarea { height: 5em; }
}

@media only screen and (min-height: 1024px) {
  .modal-container__form textarea { height: 14em; }
}
</style>
