<template>
  <div>
    <header-bar/>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
  import FooterBar from "components/common/footer/FooterBar";
  import HeaderBar from "components/common/header/HeaderBar";
  export default {
    name: "Layout",
    components: {
      FooterBar,HeaderBar
    }
  }
</script>

<style scoped>

</style>
