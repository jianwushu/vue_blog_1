<template>
  <div>
    <nav class="ui inverted attached segment m-padded-tb-mini m-shadow-small" >
      <div class="ui container">
        <div class="ui inverted secondary stackable menu">
          <h2 class="ui teal header item">管理后台</h2>
          <router-link
                  @click.native="isActive(index)"
                  v-for="(item,index) in nav"
                  :to="item.link"
                  class="m-item item"
                  :class="{'active':isActive(item.link),'m-mobile-hide':showNav}">
            <i :class="item.icon"></i>{{item.title}}
          </router-link>
          <div class="right m-item menu" :class="{'m-mobile-hide':showNav}" v-show="$store.getters.isLogin">
            <div class="ui dropdown  item">
              <div class="text">
                <img class="ui avatar image" src="https://unsplash.it/100/100?image=1005">
                {{$store.getters.userInfo}}
              </div>
              <i class="dropdown icon"></i>
              <div class="menu">
                <div class="item" @click="logout">注销</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" class="ui menu toggle black icon button m-right-top m-mobile-show" @click="menuClick">
        <i class="sidebar icon"></i>
      </a>
    </nav>
  </div>


</template>

<script>
  export default {
    name: "HeadBarAdmin",
    data(){
      return{
        showNav: true,
        nav: [
          {title: "控制台",link: '/admin',icon: "home icon"},
          {title: "文章管理",link: '/admin/blog',icon: "home icon"},
          {title: "标签管理",link: '/admin/tag',icon: "tags icon"},
          {title: "分类管理",link: '/admin/category',icon: "idea icon"},
          {title: "博客首页",link: '/',icon: "bug icon"},
        ]
      }
    },
    mounted() {
      $('.ui.dropdown').dropdown({
        on : 'hover'
      });
    },
    methods: {
      menuClick(){
        this.showNav = !this.showNav
      },
      logout(){
        this.$store.commit("userInfo",null)
        // this.$store.commit("token",null)
        this.$router.go(0)
      },
      isActive(link){
        return this.$route.path === link
      }
    }
  }

  $('.ui.dropdown').dropdown({
    on : 'hover'
  })
</script>

<style scoped>

</style>
