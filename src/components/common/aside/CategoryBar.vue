<template>
  <div class="ui segments">
    <div class="ui secondary segment">
      <div class="ui two column grid">
        <div class="column">
          <i class="idea icon"></i>分类
        </div>
<!--        <div class="right aligned column">-->
<!--          <a href="#">more<i class="angle double right icon"></i></a>-->
<!--        </div>-->
      </div>
    </div>
    <div class="ui teal segment">
      <div class="ui fluid vertical menu">
        <router-link :to="'/category/'+item.id" class="item" v-for="(item,index) in categories" :key="index">
          {{item.name}}
          <div class="ui teal basic left pointing label">{{item.count}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {getMetaList} from "@/api/meta"
  export default {
    name: "CategoryBar",
    data(){
      return{
        categories:[],
        query:{
          type: 'category'
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
          this.categories = res.data
        })
      }
    }
  }
</script>

