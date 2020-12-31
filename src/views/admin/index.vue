<template>
  <div  class="m-container-small m-padded-tb-big">
    <div class="ui container">
      <div class="ui success large  message">
        <h3>Hi,</h3>
        <p>{{$store.getters.userInfo}}，欢迎登录！</p>
      </div>
      <div>
        <p>这是控制台</p>
        <p>这是控制台</p>
        <p>这是控制台</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeAdmin"
  }
</script>

<style scoped>

</style>
