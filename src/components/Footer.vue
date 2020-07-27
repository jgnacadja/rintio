<template>
  <footer id="footer" class="footer has-background-primary has-text-white is-paddingless">
      <div class="column container" style="padding-top:3.3em;">
          <div class="columns is-variable is-centered has-text-weight-semibold">
            <div class="column is-3">
              <ul>
                <li>
                  <g-link to="/">&bull; Nous contactez</g-link>
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
                  <g-link to="/">&bull; Formation</g-link>
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
    <p class="has-text-weight-bold">
      Rintio 2020 © Tous droits réservés
    </p>
  </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    var url = location.href; // = location.href
    var parts = url.split("/").slice(2);
    //console.log("/* ... */");

    if (parts[1] !== "404") {
      document.getElementById("footer").style.cssText =
        "position: relative !important";
    }
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

#footer {
      padding-top: 2% !important;
}
a:hover {
  color: white;
}

#footer {
  height: 300px;
}

.content {
  font-size: 20px;
  background-color: #003255;
      position: absolute;
    bottom: 0px;
    width: 100%;
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

@media screen and (max-width: 1023px) {
    #footer {
        position: relative !important;
        top: auto;
        left: auto;
        height: auto;
    }
}

@media screen and (max-width: 767px) {
    #content {
        padding-bottom: 0;
    }
}
</style>
