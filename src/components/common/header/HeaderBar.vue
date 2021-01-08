<template>
  <nav id="headBar" class="ui inverted attached segment m-padded-tb-mini m-shadow-small ">
    <div class="ui container">
      <div class="ui inverted secondary stackable menu">
        <router-link to="/"><h2 class="ui teal header item m-title">{{option.title}}</h2></router-link>
        <router-link
                @click.native="navActive"
                v-for="(item,index) in nav" :to="item.link"
                :key="index"
                class="m-item item"
                :class="{'active':isActive(item.link),'m-mobile-hide':!showNav}">
          <i :class="item.icon"></i>{{item.title}}
        </router-link>
        <div class="right m-item item" :class="{'m-mobile-hide':!showNav}">
          <div class="ui icon input inverted transparent">
            <input type="text" placeholder="Search ...">
            <i class="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="ui menu toggle black icon button m-right-top m-mobile-show" @click="menuClick">
      <i class="sidebar icon"></i>
    </a>
  </nav>
</template>

<script>
  import {getOptionList} from "@/api/option";
  export default {
    name: "HeaderBar",
    data(){
      return{
        option: {},
        curIndex: 0,
        showNav: false,
        nav: [
          {title: "首页",link: '/',icon: "home icon"},
          {title: "留言板",link: '/comment',icon: "idea icon"},
          {title: "相册",link: '/album',icon: "tags icon"},
          {title: "归档",link: '/archive',icon: "clone icon"},
          {title: "关于我",link: '/about',icon: "info icon"},
          // {title: "后台",link: '/admin',icon: "bug icon"},
        ]
      }
    },
    created() {
      this.getOptionData()
    },
    methods: {
      getOptionData(){
        getOptionList().then(res=>{
          this.option = res.data
        })
      },
      navActive(){
        this.showNav = !this.showNav
      },
      menuClick(){
        this.showNav = !this.showNav
      },
      isActive(link){
        return this.$route.path === link
      }
    }
  }

</script>

<style lang="scss">
</style>
