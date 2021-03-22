<template>
  <footer class="ui inverted vertical segment m-padded-tb-big">
    <div class="ui center aligned container">
      <div v-if="!this.$route.path.match('/admin')" class="ui inverted divided stackable grid">
        <div class="three wide column">
          <div class="ui inverted link list">
            <div class="item">
              <img :src="options.icon" class="ui mini rounded image" alt="" style="width: 10em">
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
          <p class="m-opacity-mini m-text-thin m-text-spaced">{{options.introduction}}</p>
        </div>
      </div>
      <div class="ui inverted section divider"></div>
      <div class="licence m-opacity-tiny m-text-thin m-text-spaced">
        <a href="#">赣ICP备19012743号</a> Copyright © 2020
        <a href="#">{{options.title}}</a> 毕设专用
      </div>
    </div>
  </footer>
</template>

<script>
  import {getLinkList} from "@/api/link";
  import bus from "components/eventBus"
  export default {
    name: "FooterBar",
    data(){
      return {
        links:[],
        options: {}
      }
    },
    created() {
      this.getLinksData()
    },
    mounted() {
      let self = this
      bus.$on('getOptionData',(options)=>{
        self.options = options
      })
    },
    methods:{
      // 获取主页友链数据
      getLinksData(){
        getLinkList().then(res=>{
          this.links = res.data
        })
      },
    }
  }
</script>

