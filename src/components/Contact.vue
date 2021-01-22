<template>
  <Modal v-if="showModal" :show-modal="showModal">
    <div class="modal-close" @click="showModal = false">Close</div>
  </Modal>

  <section class="contact">
    <div class="contact__title">
      <h1>Contact Us</h1>
      <h2>Diamonds</h2>
    </div>

    <div class="contact__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, velit nihil quia voluptatem odit totam reiciendis consectetur.
    </div>

    <button class="contact__button" @click="showModal = true">Contact</button>

    <div class="scrollup" @click="scrollUpBtn">
      <img src="../assets/svg/arrow-in-circle-point-to-up.svg" alt="go to top icon" class="scrollup__icon">
    </div>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Modal from './Modal.vue'

export default {
  setup () {
    const contactState = reactive({
      showModal: false
    })

    function scrollUpBtn () {
      const rootElement = document.documentElement
      rootElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    return {
      ...toRefs(contactState),
      scrollUpBtn
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="scss">
.contact {
  padding: 0 50px;
  margin: 100px 10%;
  height: 140px;
  display: grid;
  align-items: center;
  grid-template-columns: 400px auto 200px;
  @include box-shadow-soft;

  &__title {
    grid-column: 1;
    display: flex;
    align-items: center;
    gap: 20px;

    h1 {
      font-family: $poppins;
      font-size: $section-title;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: $color-gold;
      opacity: 0.7;
    }

    h2 {
      font-family: 'Blesing', sans-serif;
      font-size: $section-subtitle;
      font-weight: 700;
      letter-spacing: 2px;
    }
  }

  &__description {
    grid-column: 2;
    padding: 0 5%;
    font-family: $poppins;
    font-size: $section-medium;
    font-weight: 300;
    letter-spacing: 1.5px;
  }

  &__button {
    grid-column: 3;
    @include button($color-white, $color-black, $color-black);
  }
}

/* Scroll-up Button */
.scrollup {
  position: absolute;
  right: 3.5%;
  height: inherit;
  display: flex;
  cursor: pointer;

  &__icon {
    width: 42px;
  }
}

/* Desktop */
@media only screen and (max-width: 1600px) {
  .contact__title {
    gap: 10px;

    h1 {
      width: 200px;
      font-size: 27px;
    }

    h2 { font-size: 19px; }
  }

  .contact__description { font-size: var(--section-content); }
}

@media only screen and (max-width: 1366px) {
  .contact {
    padding: 0 20px;
    grid-template-columns: 350px auto 200px;
  }
}
</style>
