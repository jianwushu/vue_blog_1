<template>
  <div>
    <head-bar-admin v-show="!isLogin"/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <footer-bar v-show="!isLogin"/>
  </div>
</template>

<script>
  import HeadBarAdmin from "components/common/header/HeadBarAdmin";
  import FooterBar from "components/common/footer/FooterBar";
  export default {
    name: "AdminLayout",
    components: {FooterBar, HeadBarAdmin},
    computed:{
      isLogin(){
        return this.$route.path === "/admin/login"
      }
    }
  }
</script>

<style scoped>

</style>
