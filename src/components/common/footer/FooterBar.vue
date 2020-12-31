<template>
  <footer class="ui inverted vertical segment m-padded-tb-big">
    <div class="ui center aligned container">
      <div v-if="!this.$route.path.match('/admin')" class="ui inverted divided stackable grid">
        <div class="three wide column">
          <div class="ui inverted link list">
            <div class="item">
              <img src="https://ilvyu.cn/images/head.jpg" class="ui rounded image" alt="" style="width: 10em">
            </div>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header m-text-thin m-text-spaced">最新文章</h4>
          <div class="ui inverted link list">
            <router-link class="item" to="/#">博客1</router-link>
            <router-link class="item" to="/#">博客2</router-link>
            <router-link class="item" to="/#">博客3</router-link>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header m-text-thin m-text-spaced">友情链接</h4>
          <div class="ui inverted link list">
            <a class="item" v-for="item in links" :title="item.description" :href="item.linkUrl" >{{item.linkName}}</a>
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header m-text-thin m-text-spaced">个人介绍</h4>
          <p class="m-opacity-mini m-text-thin m-text-spaced">{{option.introduction}}</p>
        </div>
      </div>
      <div class="ui inverted section divider"></div>
      <div class="licence m-opacity-tiny m-text-thin m-text-spaced">
        <a href="#">赣ICP备19012743号</a> <br>Copyright © 2020
        <a href="#">{{option.title}}</a><br>
        毕设专用

      </div>
    </div>
  </footer>

</template>

<script>
  import {getLinkList} from "@/api/link";
  import {getOptionList} from "@/api/option";
  export default {
    name: "FooterBar",
    data(){
      return {
        links:[],
        option: {}
      }
    },
    created() {
      this.getLinksData()
      this.getOptionData()
    },
    methods:{
      getLinksData(){
        getLinkList().then(res=>{
          this.links = res.data
        })
      },
      getOptionData(){
        getOptionList().then(res=>{
          console.log(res.data)
          this.option = res.data
        })
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
