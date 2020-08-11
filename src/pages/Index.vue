<template>
  <Layout>
    <alaUneEngagements :alaUne="true"/>
    <alaUneEngagements :NosEngagement="true"/>
  </Layout>
</template>

<script>
import alaUneEngagements  from "~/components/alaune-engagements.vue";
export default {
  components: {alaUneEngagements,},
  metaInfo: {
    title: "We involve for a better life"
  }
};
</script>

<style>
</style>
