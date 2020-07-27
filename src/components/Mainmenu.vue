<template>
  <b-navbar :type="typeNavbar" class="navbar-style">
    <template slot="brand">
      <div
        class="has-background-white columns is-marginless is-paddingless is-variable is-mobile is-vcentered is-centered is-hidden-desktop"
      >
        <div class="column is-narrow">
          <g-link to="/">
            <figure class="image">
              <g-image src="~/assets/logo.png" fit="inside" />
            </figure>
          </g-link>
        </div>
      </div>
      <div
        class="has-background-white columns is-marginless is-paddingless is-variable is-mobile is-vcentered is-centered is-hidden-touch"
      >
        <div class="column is-narrow">
          <g-link to="/">
            <figure class="image">
              <g-image src="~/assets/logo.png" fit="inside" />
            </figure>
          </g-link>
        </div>
      </div>
    </template>

    <template slot="start" wrapper-class="column is-12">
      <div class="is-hidden-desktop">
        <b-navbar-item href="/about" to="/about/" class="is-info">A propos</b-navbar-item>
        <b-navbar-item href="#" class="is-info" @click="isCardModalActive = true">Offres</b-navbar-item>
        <b-navbar-item href="#" class="is-info">DataLab</b-navbar-item>
        <b-navbar-item href="#" class="is-info">Publications</b-navbar-item>
        <b-navbar-item href="#" class="is-info">Contact</b-navbar-item>
        <!-- filaile && account -->
      </div>

      <a class="navbar-item item-menu is-hidden-touch" href="/about" to="/about/">A propos</a>
      <a
        class="navbar-item item-menu is-hidden-touch"
        href="#"
        @click="isCardModalActive = true"
      >Offres</a>
      <a class="navbar-item item-menu is-hidden-touch" href="#">DataLab</a>
      <a class="navbar-item item-menu is-hidden-touch" href="#">Publications</a>
      <a class="navbar-item item-menu is-hidden-touch" href="#">Contact</a>
    </template>

    <template slot="end">
      <div class="buttons brand-icon">
        <a class="button is-info brand-icon-item">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a class="button is-info brand-icon-item">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="button is-info brand-icon-item">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      isImageModalActive: false,
      isCardModalActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-item.is-mega {
  position: static;

  .is-mega-menu-title {
    margin-bottom: 0;
    padding: 0.375rem 1rem;
  }
}

.brand {
  max-width: 100%;
  margin-left: 55px;
  height: 25px;
  width: 100px;
}

.item-menu {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 70px;
}

.item-menu:hover {
  padding-top: 20px;
  background-color: #134a7f !important;
  color: #fff;
}

.item-menu:focus {
  padding-top: 20px;
  background-color: #134a7f;
  color: #fff;
}

.is-info {
  padding-top: 20px;
  padding-bottom: 20px;
}

.is-info:hover {
  padding-top: 20px;
  background-color: #134a7f;
  color: #fff;
}

.is-info:focus {
  padding-top: 20px;
  background-color: #134a7f;
  color: #fff;
}

.brand-icon-item {
  border-radius: 30px;
}

@media only screen and (min-width: 1024px) {
  .navbar,
  .is-hidden-desktop {
    box-shadow: 0 4px 2px -3px grey !important;
  }
}

@media only screen and (max-width: 1023px) {
  .navbar-brand {
    box-shadow: 0 4px 2px -3px grey !important;
  }
}
</style>

