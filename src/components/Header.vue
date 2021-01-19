<template>
   <header class="header">
    <div class="header__login">
      <img src="../assets/svg/lock.svg" alt="login logo" />
      <p>Login</p>
    </div>

    <nav class="header__navbar">
      <div>
        <p>HOME</p>
        <img class="header__navbar-diamond" src="../assets/svg/diamond.svg" alt="diamond icon">
      </div>

      <div>
        <p>ABOUT</p>
        <img class="header__navbar-diamond" src="../assets/svg/diamond.svg" alt="diamond icon">
      </div>

      <div>
        <img class="header__navbar-logo" src="../assets/svg/logo.svg" alt="diamond logo">
      </div>

      <div>
        <p>JEWELS</p>
        <img class="header__navbar-diamond" src="../assets/svg/diamond.svg" alt="diamond icon">
      </div>

      <div>
        <p>CONTACT</p>
        <img class="header__navbar-diamond" src="../assets/svg/diamond.svg" alt="diamond icon">
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

<style lang="scss">
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

    img {
      width: 18px;
    }
  }

  &__navbar {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 30% 1fr 1fr ;

    div {
      display: flex;
      justify-content: center;
    }

    &-logo {
      width: 80px;
    }

    &-diamond {
      /* display: none; */
      position: absolute;
      top: 65px;
      width: 10px;
    }
  }

  &__search {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &-lang {
      display: inherit;
      gap: 10px;

      img {
        width: 17px;
      }
    }

    &-icon {
      margin-left: 20px;
      width: 25px;
    }
  }
}

/* Desktop */
@media only screen and (max-width: 1366px) {
  .header {
    padding: 20px 5%;
  }
}
@media only screen and (max-width: 1280px) {
  .header__navbar ul {
    gap: 50px;
  }
  .header__navbar-logo {
    margin: 0 20px;
  }
}

/* Tablet */
@media only screen and (max-width: 768px) {
  .header {
    padding: 20px 10px;
  }
  .header__navbar ul {
    gap: 30px;
  }
  .header__navbar-logo {
    margin: 0 10px;
  }
}
</style>
