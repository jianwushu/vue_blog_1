<template>
  <div class="ui success message">
    <i class="close icon" @click="closeMsg"></i>
    <div class="header">提示：</div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name: "Message",
    props: {
     msg: {
        type: String,
        default: '操作成功!'
      }
    },
    methods: {
      closeMsg(){
        this.$emit('closeMsg')
      }
    }
  }

</script>

<style scoped>

</style>
