<template>
  <footer id="footer" class="footer has-background-primary has-text-white is-paddingless">
    <div class="column container" style="padding-top:3.3em;">
      <div class="columns footer-menu-columns is-variable is-centered">
        <div class="column is-3">
          <ul>
            <li>
              <g-link to="/">&bull; Nous contacter</g-link>
            </li>
            <li>
              <g-link to="/">&bull; Offres</g-link>
            </li>
          </ul>
        </div>
        <div class="column is-3">
          <ul>
            <li>
              <g-link to="/">&bull; A propos</g-link>
            </li>
            <li>
              <g-link to="/">&bull; Team</g-link>
            </li>
            <li>
              <g-link to="/">&bull; Formations</g-link>
            </li>
            <li>
              <g-link to="/">&bull; Publications</g-link>
            </li>
          </ul>
        </div>
        <div class="column is-3">
          <ul>
            <li>
              <g-link to="/">&bull; Rintio Data Lab</g-link>
            </li>
            <li>
              <g-link to="/">&bull; Rintio Innovative Factory</g-link>
            </li>
            <li>
              <g-link to="/">&bull; Nos engagements</g-link>
            </li>
            <li>
              <g-link to="/">&bull; Africa Tech Up Tour</g-link>
            </li>
          </ul>
        </div>
        <div class="column is-3">
          <ul>
            <li>
              <g-link to="/">&bull; Carrière</g-link>
            </li>
            <li>
              <g-link to="/">&bull; Média</g-link>
            </li>
            <li>
              <g-link to="/">&bull; Plan du site</g-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content has-text-centered">
      <p class="has-text-weight-bold">Rintio 2020 © Tous droits réservés</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "../variables.scss";

a:hover {
  color: white;
}

a {
  color: $white;
  line-height: 2.5em;
}

.footer {
  font-family: $family-sans-serif;
}

.rounded {
  border-radius: 12px;
}

/* @media only screen and (min-width: 769px) {
  #footer {
    position: fixed;
  }
} */

@media only screen and (max-width: 1023px) {
  .footer-menu-columns {
    padding-left: 10%;
  }
}

.content {
  font-size: 14px;
  background-color: #003255;
  width: 100%;
}

@media only screen and (min-width: 1024px) {
  .footer-menu-columns {
    padding-left: 15%;
    padding-top: 1%;
    padding-bottom: 5%;
  }

  /* #footer {
    //height: 300px;
  } */

  #footer {
    bottom: 0;
    width: 100%;
    padding-top: 2% !important;
  }

  .content {
    font-size: 18px;
    background-color: #003255;
    position: relative;
    width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  .footer-menu-columns {
    padding-left: 2%;
  }
}
</style>