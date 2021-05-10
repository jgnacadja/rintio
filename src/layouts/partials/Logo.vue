<template>
  <div class="logo">
    <g-link to="/" title="Back to home">
      <Logo alt="Rintio.com" />
    </g-link>
  </div>
</template>

<script>
import Logo from "~/assets/images/rintio-logo.svg";
export default {
  components: {
    Logo,
  },
};
</script>