<template>
  <div class="ui rail">
    <header-bar/>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
  import FooterBar from "components/common/footer/FooterBar";
  import HeaderBar from "components/common/header/HeaderBar";

  export default {
    name: "Index",
    components: {
      FooterBar,HeaderBar
    }
  }
</script>

<style lang="scss">
  #main{
    height: 100vh;
    width: 100%;
  }
  @import "~assets/css/base.css";
  @import "~assets/css/me.css";
</style>
