<template>
   <header class="header" :class="{ 'header--scroll': pageScrolled === true }">
    <div class="header__login">
      <img src="../assets/svg/lock.svg" alt="login logo" />
      <p>Login</p>
    </div>

    <nav class="header__navbar">
      <div :class="{ active: homeActive === true }">
        <a @click="scrollUpBtn, setActive('homeActive')">
          <p>HOME</p>
        </a>
        <img
          class="header__navbar-diamond"
          src="../assets/svg/diamond-gold.svg"
          alt="diamond icon"
        />
      </div>

      <div :class="{ active: aboutActive === true }">
        <a @click="scrollOption('.slider'), setActive('aboutActive')">
          <p>ABOUT</p>
        </a>
        <img class="header__navbar-diamond" src="../assets/svg/diamond-gold.svg" alt="diamond icon">
      </div>

      <div>
        <img class="header__navbar-logo" src="../assets/svg/logo.svg" alt="diamond logo">
      </div>

      <div :class="{ active: jewelsActive === true }">
        <a @click="scrollOption('.collection'), setActive('jewelsActive')">
          <p>JEWELS</p>
        </a>
        <img class="header__navbar-diamond" src="../assets/svg/diamond-gold.svg" alt="diamond icon">
      </div>

      <div :class="{ active: contactActive === true }">
        <a @click="scrollOption('.contact'), setActive('contactActive')">
          <p>CONTACT</p>
        </a>
        <img class="header__navbar-diamond" src="../assets/svg/diamond-gold.svg" alt="diamond icon">
      </div>
    </nav>

    <div class="header__search">
      <div class="header__search-lang">
        <p>EN</p>
        <img src="../assets/svg/expand-button.svg" alt="expand icon">
      </div>
      <img class="header__search-icon" src="../assets/svg/magnifying-glass.svg" alt="search icon">
    </div>
  </header>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    const navbarState = reactive({
      homeActive: true,
      aboutActive: false,
      jewelsActive: false,
      contactActive: false,
      pageScrolled: false
    })

    window.addEventListener('scroll', scrollHeader)
    function scrollHeader () {
      if (window.scrollY > 90) {
        navbarState.pageScrolled = true
      } else {
        navbarState.pageScrolled = false
      }
    }

    function setActive (option) {
      Object.keys(navbarState).map((key, index) => {
        navbarState[key] = false
      })

      if (option === 'homeActive') {
        navbarState.homeActive = true
      } else if (option === 'aboutActive') {
        navbarState.aboutActive = true
      } else if (option === 'jewelsActive') {
        navbarState.jewelsActive = true
      } else if (option === 'contactActive') {
        navbarState.contactActive = true
      }
    }

    function scrollUpBtn () {
      const rootElement = document.documentElement
      rootElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    function scrollOption (selector) {
      const element = document.querySelector(selector)
      element.scrollIntoView({ behavior: 'smooth' })
    }

    return {
      ...toRefs(navbarState),
      scrollOption,
      scrollUpBtn,
      setActive,
      scrollHeader
    }
  }
}
</script>

<style lang="scss">
.header--scroll {
  position: fixed;
  width: 80%;
  background-color: white;
  z-index: 1;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
}

.header {
  display: grid;
  grid-template-columns: 20% auto 20%;
  align-items: center;
  padding: 20px 10%;
  font-family: $poppins;
  font-weight: 500;
  font-size: $text-menu;
  letter-spacing: 2px;

  &__login {
    display: flex;
    align-items: center;
    gap: 10px;

    img { width: 18px; }
  }

  &__navbar {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 30% 1fr 1fr;

    div {
      display: flex;
      justify-content: center;

      a {
        cursor: pointer;
        transition: 0.3s;

        &:hover { text-shadow: $text-shadow; }
      }
    }

    &-logo { width: 80px; }

    &-diamond { visibility: hidden; }
  }

  &__search {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &-lang {
      display: inherit;
      gap: 10px;

      img { width: 17px; }
    }

    &-icon {
      margin-left: 20px;
      width: 25px;
    }
  }

  .active {
    font-weight: 700;
    transition: 0.3s;

    .header__navbar-diamond {
      visibility: visible;
      position: absolute;
      top: 65px;
      width: 10px;
    }
  }
}

/* Desktop */
@media only screen and (max-width: 1366px) {
  /* .header { padding: 20px 5%; } */
}
@media only screen and (max-width: 1280px) {
  .header__navbar ul { gap: 50px; }
  .header__navbar-logo { margin: 0 20px; }
}

/* Tablet */
@media only screen and (max-width: 768px) {
  .header { padding: 20px 10px; }
  .header__navbar ul { gap: 30px; }
  .header__navbar-logo { margin: 0 10px; }
}
</style>
