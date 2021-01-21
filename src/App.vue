<template>
  <Header />

  <main>
    <Slider />

    <Collection />

    <Contact />
  </main>

  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
import Collection from './components/Collection.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

// import './assets/styles/global.scss'

export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Collection,
    Contact,
    Footer
  }
}
</script>
