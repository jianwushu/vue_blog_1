<template>
  <div class="ui segments m-margin-top-large">
    <div class="ui secondary segment">
      <div class="ui two column grid">
        <div class="column">
          <i class="tags icon"></i>标签
        </div>
<!--        <div class="right aligned column">-->
<!--          <a href="#" target="_blank">more <i class="angle double right icon"></i></a>-->
<!--        </div>-->
      </div>
    </div>
    <div class="ui teal segment">
      <a href="#" class="ui teal basic label m-margin-tb-tiny" v-for="(item,index) in tags" :key="index">
        {{item.name}}
        <div class="detail">{{item.count}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  import {getMetaList} from "@/api/meta"
  export default {
    name: "TagBar",
    data(){
      return{
        tags:[],
        query:{
          type: 'tag'
        }
      }
    },
    created() {
      this.getCategoryData(this.query)
    },
    methods:{
      // 获取分类数据
      getCategoryData(query){
        getMetaList(query).then(res=>{
          this.tags = res.data
        })
      }
    }
  }
</script>

<style scoped>

</style>
