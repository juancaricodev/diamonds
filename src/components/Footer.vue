<template>
  <footer class="footer">
    <section class="footer__navbar">
      <div class="footer__navbar-options">
        <a href="#">
          Services
        </a>
        <span></span>
        <a href="#">
          Privacy and Cookie Policy
        </a>
      </div>

      <div class="footer__navbar-logo">
        <img src="../assets/svg/logo-white.svg" alt="diamo logo">
      </div>

      <div class="footer__navbar-social">
        <img src="../assets/svg/social-facebook-circular-button.svg" alt="facebook button" class="facebook">
        <img src="../assets/svg/social-twitter-circular-button.svg" alt="twitter button" class="twitter">
      </div>
    </section>

    <section class="footer__copy">
      <p>
        Copyright &copy; 2021 DIAMONDS. All rights reserved.
      </p>
    </section>
  </footer>
</template>

<style lang="scss">
.footer {
  &__navbar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    grid-column: 1;
    width: 100%;
    height: 140px;
    color: $color-white;
    background-color: $color-black;
    box-shadow: 0px 10px 30px -5px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 10px 30px -5px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 10px 30px -5px rgba(0,0,0,0.5);

    &-options {
      grid-column: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        font-family: $poppins;
        font-size: 16px;
        font-weight: 300;
        letter-spacing: 1.5px;

        &:link {color: $color-white;}
        &:visited {color: $color-white;}
      }

      span {
        height: 30px;
        margin: 0 20px;
        border-right: 1px solid $color-white;
      }
    }

    &-logo {
      grid-column: 2;
      display: flex;
      justify-content: center;

      img {
        width: 80px;
      }
    }

    &-social {
      grid-column: 3;
      display: flex;
      justify-content: center;
      gap: 20px;

      .facebook {
        width: 13px;
      }

      .twitter {
        width: 30px;
      }
    }
  }

  &__copy {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $poppins;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1.2px;
  }
}
</style>
