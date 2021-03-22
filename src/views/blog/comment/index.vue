<template>
  <div class="m-container m-padded-tb-large">
    <div class="ui container">
      <div  class="ui teal segment">
        <comment title="留言板"/>
      </div>
    </div>
  </div>

</template>

<script>
  import Comment from "components/common/comment/Comment";
  export default {
    name: "index",
    components:{Comment}
  }
</script>

<style scoped>

</style>
